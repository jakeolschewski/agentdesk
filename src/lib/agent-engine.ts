/**
 * AgentDesk — Core Agent Engine
 *
 * Orchestrates Claude API calls with tool use to power
 * pre-built AI agents for professional services.
 */

import Anthropic from "@anthropic-ai/sdk";

// ─── Types ──────────────────────────────────────────

export interface AgentConfig {
  id: string;
  name: string;
  systemPrompt: string;
  tools: Anthropic.Messages.Tool[];
  maxTokens: number;
  temperature: number;
}

export interface AgentTask {
  id: string;
  agentId: string;
  input: string;
  context?: Record<string, unknown>;
  status: "pending" | "running" | "needs_approval" | "completed" | "failed";
  output?: string;
  actions?: AgentAction[];
  createdAt: string;
  completedAt?: string;
}

export interface AgentAction {
  type: "email" | "schedule" | "generate" | "classify" | "notify";
  description: string;
  data: Record<string, unknown>;
  approved: boolean;
}

// ─── Agent Definitions ──────────────────────────────

export const INTAKE_AGENT: AgentConfig = {
  id: "intake",
  name: "Intake Agent",
  systemPrompt: `You are a professional client intake agent for a consulting firm. Your job is to:

1. Read incoming inquiries (emails, form submissions, messages)
2. Qualify the lead based on: budget indicators, timeline urgency, service fit, company size
3. Generate a personalized, professional response within the firm's voice
4. Suggest whether to book a discovery call or request more information
5. Score the lead on a 1-10 scale with reasoning

Always be professional, warm, and specific. Reference details from the inquiry to show you read it carefully.
Never make promises about pricing or timelines — those require a discovery call.
If the inquiry is spam or irrelevant, flag it and draft a polite decline.

Output your analysis as structured JSON with these fields:
- score (1-10)
- qualification (hot/warm/cold/spam)
- summary (1-2 sentences about the lead)
- suggestedResponse (the email/message to send back)
- suggestedAction (book_call / request_info / decline / escalate)
- reasoning (why you scored/qualified this way)`,
  tools: [
    {
      name: "qualify_lead",
      description:
        "Analyze an incoming inquiry and produce a qualification score, suggested response, and next action.",
      input_schema: {
        type: "object" as const,
        properties: {
          inquiry_text: {
            type: "string",
            description: "The full text of the incoming inquiry",
          },
          source: {
            type: "string",
            description: "Where the inquiry came from (email, form, chat)",
          },
          sender_info: {
            type: "string",
            description:
              "Any available info about the sender (name, email, company)",
          },
        },
        required: ["inquiry_text"],
      },
    },
  ],
  maxTokens: 2048,
  temperature: 0.3,
};

export const PROPOSAL_AGENT: AgentConfig = {
  id: "proposal",
  name: "Proposal Agent",
  systemPrompt: `You are a professional proposal writer for a consulting firm. Your job is to:

1. Read discovery call notes or meeting transcripts
2. Extract: client pain points, goals, budget signals, timeline, decision-makers
3. Generate a complete, professional proposal including:
   - Executive summary
   - Understanding of the client's situation
   - Proposed solution (specific, not generic)
   - Scope of work with deliverables
   - Timeline with milestones
   - Investment (pricing) with payment terms
   - Why us / relevant experience
   - Next steps

Write in a confident, professional tone. Be specific about deliverables and timelines.
Use the firm's standard pricing model unless the notes indicate otherwise.
Include data points and ROI projections wherever possible.

Output as structured markdown that can be converted to PDF.`,
  tools: [
    {
      name: "generate_proposal",
      description:
        "Generate a complete client proposal from discovery call notes",
      input_schema: {
        type: "object" as const,
        properties: {
          call_notes: {
            type: "string",
            description: "Discovery call notes or transcript",
          },
          client_name: { type: "string", description: "Client/company name" },
          service_type: {
            type: "string",
            description: "Type of service requested",
          },
        },
        required: ["call_notes"],
      },
    },
  ],
  maxTokens: 4096,
  temperature: 0.4,
};

export const REPORT_AGENT: AgentConfig = {
  id: "report",
  name: "Report Agent",
  systemPrompt: `You are a professional report generator for a consulting firm. Your job is to:

1. Read project data (metrics, milestones, deliverables, issues)
2. Generate a clear, executive-friendly report including:
   - Executive summary (3-5 bullet points)
   - Key metrics and progress indicators
   - Completed milestones this period
   - Upcoming milestones next period
   - Risks and blockers (if any)
   - Recommendations
   - Appendix with detailed data

Write for a busy executive who has 2 minutes to read. Lead with the most important information.
Use data and specifics, not vague statements. Include percentage changes and trends.

Output as structured markdown suitable for PDF generation.`,
  tools: [
    {
      name: "generate_report",
      description:
        "Generate a client report from project data and metrics",
      input_schema: {
        type: "object" as const,
        properties: {
          project_name: { type: "string", description: "Project name" },
          client_name: { type: "string", description: "Client name" },
          period: {
            type: "string",
            description: "Reporting period (e.g., 'Week of March 25, 2026')",
          },
          metrics: {
            type: "string",
            description: "Key metrics and data points as text or JSON",
          },
          milestones: {
            type: "string",
            description: "Completed and upcoming milestones",
          },
          notes: {
            type: "string",
            description: "Additional context or notes",
          },
        },
        required: ["project_name", "period"],
      },
    },
  ],
  maxTokens: 4096,
  temperature: 0.3,
};

// ─── Engine ─────────────────────────────────────────

const AGENTS: Record<string, AgentConfig> = {
  intake: INTAKE_AGENT,
  proposal: PROPOSAL_AGENT,
  report: REPORT_AGENT,
};

export function getAgent(id: string): AgentConfig | undefined {
  return AGENTS[id];
}

export function listAgents(): AgentConfig[] {
  return Object.values(AGENTS);
}

export async function runAgent(
  agentId: string,
  input: string,
  context?: Record<string, unknown>
): Promise<AgentTask> {
  const agent = getAgent(agentId);
  if (!agent) {
    throw new Error(`Agent "${agentId}" not found`);
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("ANTHROPIC_API_KEY not configured");
  }

  const task: AgentTask = {
    id: `task_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    agentId,
    input,
    context,
    status: "running",
    createdAt: new Date().toISOString(),
  };

  try {
    const client = new Anthropic({ apiKey });

    const contextStr = context
      ? `\n\nAdditional context:\n${JSON.stringify(context, null, 2)}`
      : "";

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: agent.maxTokens,
      temperature: agent.temperature,
      system: agent.systemPrompt,
      messages: [
        {
          role: "user",
          content: `${input}${contextStr}`,
        },
      ],
    });

    const textBlocks = response.content.filter(
      (block): block is Anthropic.Messages.TextBlock => block.type === "text"
    );
    const output = textBlocks.map((b) => b.text).join("\n\n");

    task.output = output;
    task.status = "completed";
    task.completedAt = new Date().toISOString();
  } catch (error) {
    task.status = "failed";
    task.output =
      error instanceof Error ? error.message : "Unknown error occurred";
  }

  return task;
}
