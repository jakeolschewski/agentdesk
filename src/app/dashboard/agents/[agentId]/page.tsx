"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Play,
  Copy,
  CheckCircle2,
  Loader2,
  Bot,
  Zap,
  FileText,
  BarChart3,
} from "lucide-react";
import clsx from "clsx";

const AGENT_META: Record<
  string,
  {
    name: string;
    description: string;
    icon: typeof Bot;
    color: string;
    placeholder: string;
    examples: string[];
  }
> = {
  intake: {
    name: "Intake Agent",
    description:
      "Reads incoming inquiries, qualifies leads, and generates professional responses. Scores each lead 1-10 with suggested next actions.",
    icon: Zap,
    color: "blue",
    placeholder:
      "Paste an incoming email or form submission to qualify...\n\nExample: 'Hi, I'm Sarah from TechCo (50 employees). We need help with our digital transformation...'",
    examples: [
      "Hi, I run a 20-person law firm and need help automating our client intake process. Budget is around $5K/month. Can we set up a call this week?",
      "Hey, saw your website. How much do you charge? Thanks",
      "We're a Series B startup (200 employees) looking for a strategic consulting partner for our Q3 expansion into European markets. Our CEO would like to schedule a discovery session.",
    ],
  },
  proposal: {
    name: "Proposal Agent",
    description:
      "Generates complete client proposals from discovery call notes. Includes executive summary, scope, timeline, pricing, and next steps.",
    icon: FileText,
    color: "purple",
    placeholder:
      "Paste discovery call notes or a meeting transcript...\n\nExample: 'Client: Acme Corp. Pain points: slow onboarding, manual data entry. Budget: $10-15K. Timeline: need solution by Q3...'",
    examples: [
      "Discovery call with Martinez & Associates (law firm, 15 attorneys). Pain: spending 8hrs/week on manual document review. Budget: $8-12K. Want AI-powered document analysis. Decision maker: Managing Partner Elena Martinez. Timeline: need pilot by June.",
      "Call notes — TechStart Inc: 50-person SaaS startup. Need full brand overhaul + new website. Current site converting at 1.2% (industry avg 3%). Budget $15-25K. CEO + CMO on call. Want to launch by Q3.",
    ],
  },
  report: {
    name: "Report Agent",
    description:
      "Creates executive-friendly project reports from metrics and milestone data. Perfect for weekly/monthly client updates.",
    icon: BarChart3,
    color: "green",
    placeholder:
      "Enter project data, metrics, and milestones...\n\nExample: 'Project: Website Redesign. Period: Week of March 25. Completed: wireframes, brand guide. Next: dev sprint 1...'",
    examples: [
      "Project: Digital Transformation Phase 1\nClient: Acme Corp\nPeriod: Week of March 25, 2026\nCompleted: Data migration (100%), API integration (85%), User training module 1\nNext: API integration completion, UAT testing, Module 2 training\nMetrics: 45% reduction in manual data entry, 12 users onboarded, 99.2% uptime\nBlockers: Waiting on client IT team for VPN access",
    ],
  },
};

export default function AgentDetailPage() {
  const params = useParams();
  const agentId = params.agentId as string;
  const meta = AGENT_META[agentId];

  const [input, setInput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [taskHistory, setTaskHistory] = useState<
    Array<{ input: string; output: string; time: string }>
  >([]);

  if (!meta) {
    return (
      <div className="text-center py-20">
        <h1 className="text-xl font-bold text-slate-900">Agent not found</h1>
        <Link
          href="/dashboard"
          className="text-blue-600 hover:underline mt-2 inline-block"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  async function runAgent() {
    if (!input.trim()) return;
    setIsRunning(true);
    setOutput(null);

    try {
      const res = await fetch(`/api/agents/${agentId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "demo",
        },
        body: JSON.stringify({ input }),
      });
      const data = await res.json();

      const result = data.task?.output || data.error || "No output";
      setOutput(result);
      setTaskHistory((prev) => [
        {
          input: input.slice(0, 100) + (input.length > 100 ? "..." : ""),
          output: result,
          time: new Date().toLocaleTimeString(),
        },
        ...prev,
      ]);
    } catch {
      setOutput("Failed to run agent. Check API configuration.");
    } finally {
      setIsRunning(false);
    }
  }

  function handleCopy() {
    if (output) {
      navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  function loadExample(example: string) {
    setInput(example);
    setOutput(null);
  }

  const IconComponent = meta.icon;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <Link
          href="/dashboard"
          className="mt-1 p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <div className="flex items-center gap-3">
            <div
              className={clsx(
                "w-10 h-10 rounded-lg flex items-center justify-center",
                meta.color === "blue" && "bg-blue-100 text-blue-600",
                meta.color === "purple" && "bg-purple-100 text-purple-600",
                meta.color === "green" && "bg-green-100 text-green-600"
              )}
            >
              <IconComponent size={20} />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">{meta.name}</h1>
          </div>
          <p className="text-slate-500 mt-2 max-w-2xl">{meta.description}</p>
        </div>
      </div>

      {/* Examples */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="text-sm font-medium text-slate-700 mb-3">
          Try an example
        </h2>
        <div className="space-y-2">
          {meta.examples.map((ex, i) => (
            <button
              key={i}
              onClick={() => loadExample(ex)}
              className="w-full text-left p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-sm text-slate-600 transition-colors"
            >
              {ex.slice(0, 120)}...
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="text-sm font-medium text-slate-700 mb-3">Input</h2>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={meta.placeholder}
          rows={8}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm placeholder:text-slate-400 resize-y"
        />
        <div className="flex justify-end mt-3">
          <button
            onClick={runAgent}
            disabled={isRunning || !input.trim()}
            className={clsx(
              "flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium text-white transition-colors",
              isRunning
                ? "bg-slate-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            )}
          >
            {isRunning ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Running...
              </>
            ) : (
              <>
                <Play size={16} /> Run Agent
              </>
            )}
          </button>
        </div>
      </div>

      {/* Output */}
      {output && (
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-medium text-slate-700">
              Agent Output
            </h2>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-700"
            >
              {copied ? (
                <>
                  <CheckCircle2 size={14} /> Copied
                </>
              ) : (
                <>
                  <Copy size={14} /> Copy
                </>
              )}
            </button>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono leading-relaxed max-h-[600px] overflow-y-auto">
              {output}
            </pre>
          </div>
        </div>
      )}

      {/* Session History */}
      {taskHistory.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="text-sm font-medium text-slate-700 mb-3">
            Session History
          </h2>
          <div className="space-y-2">
            {taskHistory.map((task, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg bg-slate-50"
              >
                <CheckCircle2
                  size={16}
                  className="text-green-500 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-700 truncate">
                    {task.input}
                  </p>
                  <p className="text-xs text-slate-400">{task.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
