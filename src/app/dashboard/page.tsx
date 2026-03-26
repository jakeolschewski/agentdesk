"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bot,
  Zap,
  FileText,
  BarChart3,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Play,
  TrendingUp,
} from "lucide-react";
import clsx from "clsx";

interface QuickTask {
  agentId: string;
  input: string;
}

const AGENT_CARDS = [
  {
    id: "intake",
    name: "Intake Agent",
    description: "Qualify leads and draft responses",
    icon: Zap,
    color: "blue",
    stats: { today: 0, total: 0 },
  },
  {
    id: "proposal",
    name: "Proposal Agent",
    description: "Generate client proposals",
    icon: FileText,
    color: "purple",
    stats: { today: 0, total: 0 },
  },
  {
    id: "report",
    name: "Report Agent",
    description: "Create project reports",
    icon: BarChart3,
    color: "green",
    stats: { today: 0, total: 0 },
  },
];

const RECENT_TASKS = [
  {
    id: "demo-1",
    agent: "Intake Agent",
    input: "New inquiry from Acme Corp about consulting services",
    status: "completed" as const,
    time: "Just now (demo)",
  },
  {
    id: "demo-2",
    agent: "Proposal Agent",
    input: "Generate proposal for Smith & Associates website redesign",
    status: "completed" as const,
    time: "Just now (demo)",
  },
  {
    id: "demo-3",
    agent: "Report Agent",
    input: "Weekly report for Project Alpha — Week 12",
    status: "completed" as const,
    time: "Just now (demo)",
  },
];

export default function DashboardPage() {
  const [quickInput, setQuickInput] = useState("");
  const [selectedAgent, setSelectedAgent] = useState("intake");
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  async function handleQuickRun() {
    if (!quickInput.trim()) return;
    setIsRunning(true);
    setResult(null);

    try {
      const res = await fetch(`/api/agents/${selectedAgent}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "demo", // Dashboard sessions use cookie auth in prod
        },
        body: JSON.stringify({ input: quickInput }),
      });
      const data = await res.json();

      if (data.task?.output) {
        setResult(data.task.output);
      } else {
        setResult(data.error || "Agent returned no output");
      }
    } catch {
      setResult("Failed to connect to agent. Check your API key.");
    } finally {
      setIsRunning(false);
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 mt-1">
          Your AI agents are ready. Run tasks, review output, and manage your
          firm.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {[
          {
            label: "Tasks Today",
            value: "0",
            icon: Clock,
            color: "text-blue-600",
          },
          {
            label: "Tasks This Week",
            value: "0",
            icon: TrendingUp,
            color: "text-purple-600",
          },
          {
            label: "Completed",
            value: "0",
            icon: CheckCircle2,
            color: "text-green-600",
          },
          {
            label: "Needs Review",
            value: "0",
            icon: AlertCircle,
            color: "text-amber-600",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border border-slate-200 p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">{stat.label}</span>
              <stat.icon size={18} className={stat.color} />
            </div>
            <p className="text-2xl font-bold text-slate-900 mt-2">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Quick Run */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          Quick Run
        </h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <select
            value={selectedAgent}
            onChange={(e) => setSelectedAgent(e.target.value)}
            className="px-4 py-2.5 rounded-lg border border-slate-300 text-sm font-medium bg-white text-slate-700"
          >
            <option value="intake">Intake Agent</option>
            <option value="proposal">Proposal Agent</option>
            <option value="report">Report Agent</option>
          </select>
          <input
            type="text"
            value={quickInput}
            onChange={(e) => setQuickInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleQuickRun()}
            placeholder="Paste an email, call notes, or project data..."
            className="flex-1 px-4 py-2.5 rounded-lg border border-slate-300 text-sm placeholder:text-slate-400"
          />
          <button
            onClick={handleQuickRun}
            disabled={isRunning || !quickInput.trim()}
            className={clsx(
              "flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium text-white transition-colors",
              isRunning
                ? "bg-slate-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            )}
          >
            <Play size={16} />
            {isRunning ? "Running..." : "Run"}
          </button>
        </div>

        {result && (
          <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h3 className="text-sm font-medium text-slate-700 mb-2">
              Agent Output
            </h3>
            <pre className="text-sm text-slate-600 whitespace-pre-wrap font-mono leading-relaxed max-h-96 overflow-y-auto">
              {result}
            </pre>
          </div>
        )}
      </div>

      {/* Agent Cards */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          Your Agents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {AGENT_CARDS.map((agent) => (
            <Link
              key={agent.id}
              href={`/dashboard/agents/${agent.id}`}
              className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between">
                <div
                  className={clsx(
                    "w-10 h-10 rounded-lg flex items-center justify-center",
                    agent.color === "blue" && "bg-blue-100 text-blue-600",
                    agent.color === "purple" && "bg-purple-100 text-purple-600",
                    agent.color === "green" && "bg-green-100 text-green-600"
                  )}
                >
                  <agent.icon size={20} />
                </div>
                <ArrowRight
                  size={16}
                  className="text-slate-300 group-hover:text-blue-500 transition-colors"
                />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mt-4">
                {agent.name}
              </h3>
              <p className="text-sm text-slate-500 mt-1">{agent.description}</p>
              <div className="flex gap-4 mt-4 pt-4 border-t border-slate-100">
                <div>
                  <p className="text-xs text-slate-400">Today</p>
                  <p className="text-sm font-semibold text-slate-700">
                    {agent.stats.today}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Total</p>
                  <p className="text-sm font-semibold text-slate-700">
                    {agent.stats.total}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-3">
          {RECENT_TASKS.map((task) => (
            <div
              key={task.id}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50"
            >
              <CheckCircle2 size={18} className="text-green-500 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-700 truncate">
                  {task.input}
                </p>
                <p className="text-xs text-slate-400">
                  {task.agent} &middot; {task.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* API Key section */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-2">
          API Access
        </h2>
        <p className="text-sm text-slate-500 mb-4">
          Use these endpoints to integrate agents into your existing workflow.
        </p>
        <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-300 space-y-2 overflow-x-auto">
          <p className="text-slate-500"># List agents</p>
          <p>
            curl https://agentdesk.thewedgemethodai.com/api/agents
          </p>
          <p className="text-slate-500 mt-3"># Run the intake agent</p>
          <p>
            curl -X POST
            https://agentdesk.thewedgemethodai.com/api/agents/intake \
          </p>
          <p>
            {"  "}-H &quot;x-api-key: YOUR_KEY&quot; \
          </p>
          <p>
            {"  "}-H &quot;Content-Type: application/json&quot; \
          </p>
          <p>
            {"  "}-d {"'{\"input\": \"New email from prospect...\"}'"}
          </p>
        </div>
      </div>
    </div>
  );
}
