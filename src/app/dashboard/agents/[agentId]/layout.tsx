import type { Metadata } from "next";

const AGENT_SEO: Record<string, { title: string; description: string }> = {
  intake: {
    title: "Intake Agent — Qualify Leads Instantly | AgentDesk",
    description:
      "AI-powered client intake agent that reads inquiries, scores leads 1-10, and drafts professional responses in seconds. Try free — no signup required.",
  },
  proposal: {
    title: "Proposal Agent — Generate Proposals in 30 Seconds | AgentDesk",
    description:
      "AI proposal generator that turns discovery call notes into complete proposals with scope, timeline, and pricing. Try free — no signup required.",
  },
  report: {
    title: "Report Agent — Automated Client Reports | AgentDesk",
    description:
      "AI report generator that creates executive-quality client reports from project data and metrics. Try free — no signup required.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ agentId: string }>;
}): Promise<Metadata> {
  const { agentId } = await params;
  const seo = AGENT_SEO[agentId];
  if (!seo) return {};
  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `https://agentdesk.thewedgemethodai.com/dashboard/agents/${agentId}`,
    },
  };
}

export default function AgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
