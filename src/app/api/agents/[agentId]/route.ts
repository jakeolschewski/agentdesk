import { NextRequest, NextResponse } from "next/server";
import { getAgent, runAgent } from "@/lib/agent-engine";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ agentId: string }> }
) {
  const { agentId } = await params;

  // Verify agent exists
  const agent = getAgent(agentId);
  if (!agent) {
    return NextResponse.json(
      { error: `Agent "${agentId}" not found` },
      { status: 404 }
    );
  }

  // Validate API key header (simple auth for MVP)
  const apiKey = req.headers.get("x-api-key");
  if (!apiKey || apiKey !== process.env.AGENTDESK_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json().catch(() => null);
    if (!body?.input) {
      return NextResponse.json(
        { error: "Request body must include 'input' field" },
        { status: 400 }
      );
    }

    const task = await runAgent(agentId, body.input, body.context);

    return NextResponse.json({ task }, { status: task.status === "failed" ? 500 : 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ agentId: string }> }
) {
  const { agentId } = await params;
  const agent = getAgent(agentId);

  if (!agent) {
    return NextResponse.json(
      { error: `Agent "${agentId}" not found` },
      { status: 404 }
    );
  }

  return NextResponse.json({
    id: agent.id,
    name: agent.name,
    maxTokens: agent.maxTokens,
    temperature: agent.temperature,
    tools: agent.tools.map((t) => ({ name: t.name, description: t.description })),
  });
}
