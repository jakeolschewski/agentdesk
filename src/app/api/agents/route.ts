import { NextResponse } from "next/server";
import { listAgents } from "@/lib/agent-engine";

export async function GET() {
  const agents = listAgents().map((a) => ({
    id: a.id,
    name: a.name,
    maxTokens: a.maxTokens,
    toolCount: a.tools.length,
  }));

  return NextResponse.json({ agents });
}
