import { NextRequest, NextResponse } from "next/server";
import { getAgent, runAgent } from "@/lib/agent-engine";

// In-memory rate limiter — resets on deploy/restart (acceptable for trial)
const trialUsage = new Map<string, { count: number; resetAt: number }>();

const TRIAL_LIMIT = 5;
const WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

function getClientIP(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function checkTrialLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = trialUsage.get(ip);

  if (!entry || now > entry.resetAt) {
    // New window
    trialUsage.set(ip, { count: 0, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: TRIAL_LIMIT };
  }

  if (entry.count >= TRIAL_LIMIT) {
    return { allowed: false, remaining: 0 };
  }

  return { allowed: true, remaining: TRIAL_LIMIT - entry.count };
}

function recordUsage(ip: string): number {
  const entry = trialUsage.get(ip);
  if (entry) {
    entry.count += 1;
    return TRIAL_LIMIT - entry.count;
  }
  trialUsage.set(ip, { count: 1, resetAt: Date.now() + WINDOW_MS });
  return TRIAL_LIMIT - 1;
}

// Clean up old entries every 10 minutes to prevent memory leak
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of trialUsage.entries()) {
    if (now > entry.resetAt) {
      trialUsage.delete(ip);
    }
  }
}, 10 * 60 * 1000);

export async function POST(
  req: NextRequest,
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

  const ip = getClientIP(req);
  const { allowed, remaining } = checkTrialLimit(ip);

  if (!allowed) {
    return NextResponse.json(
      {
        error: "trial_limit_reached",
        message:
          "You've used all 5 free trial runs. Upgrade to keep using AgentDesk.",
        remaining: 0,
        upgradeUrl: "https://buy.stripe.com/14AfZh7KHbIT5qigvObEA01",
      },
      { status: 429 }
    );
  }

  try {
    const body = await req.json().catch(() => null);
    if (!body?.input) {
      return NextResponse.json(
        { error: "Request body must include 'input' field" },
        { status: 400 }
      );
    }

    // Limit input length for trial users (prevent abuse)
    const trimmedInput = body.input.slice(0, 3000);

    const task = await runAgent(agentId, trimmedInput, body.context);
    const remainingAfter = recordUsage(ip);

    return NextResponse.json(
      {
        task,
        trial: {
          remaining: remainingAfter,
          limit: TRIAL_LIMIT,
          used: TRIAL_LIMIT - remainingAfter,
        },
      },
      { status: task.status === "failed" ? 500 : 200 }
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET(
  req: NextRequest,
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

  const ip = getClientIP(req);
  const { remaining } = checkTrialLimit(ip);

  return NextResponse.json({
    agent: {
      id: agent.id,
      name: agent.name,
    },
    trial: {
      remaining,
      limit: TRIAL_LIMIT,
    },
  });
}
