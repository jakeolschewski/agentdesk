"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Zap,
  FileText,
  BarChart3,
  ArrowRight,
  Play,
  Sparkles,
  Lock,
} from "lucide-react";
import clsx from "clsx";
import { trackEvent } from "@/lib/analytics";

const TRIAL_LIMIT = 5;

function getTrialUsed(): number {
  if (typeof window === "undefined") return 0;
  return parseInt(localStorage.getItem("agentdesk_trial_used") || "0", 10);
}

function setTrialUsed(count: number) {
  if (typeof window !== "undefined") {
    localStorage.setItem("agentdesk_trial_used", String(count));
  }
}

const AGENT_CARDS = [
  {
    id: "intake",
    name: "Intake Agent",
    description: "Paste an email or inquiry — get a qualified lead score + draft response in seconds",
    icon: Zap,
    color: "blue",
    cta: "Try with a sample email",
  },
  {
    id: "proposal",
    name: "Proposal Agent",
    description: "Paste call notes — get a complete proposal with scope, timeline, and pricing",
    icon: FileText,
    color: "purple",
    cta: "Generate a sample proposal",
  },
  {
    id: "report",
    name: "Report Agent",
    description: "Paste project data — get an executive-ready report your clients will love",
    icon: BarChart3,
    color: "green",
    cta: "Create a sample report",
  },
];

function UpgradeModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-8">
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">You&apos;ve seen what AgentDesk can do</h2>
          <p className="text-slate-600 mt-2">
            Upgrade to run unlimited agents and transform your firm&apos;s workflow.
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {[
            { name: "Starter", price: "$99/mo", desc: "1 agent, 500 tasks", href: "https://buy.stripe.com/6oUcN55Cz28j2e67ZibEA00" },
            { name: "Professional", price: "$349/mo", desc: "All 3 agents, 5K tasks", href: "https://buy.stripe.com/14AfZh7KHbIT5qigvObEA01", popular: true },
            { name: "Agency", price: "$799/mo", desc: "Unlimited everything", href: "https://buy.stripe.com/6oUeVd8OLcMX8Cu0wQbEA02" },
          ].map((plan) => (
            <a
              key={plan.name}
              href={plan.href}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "flex items-center justify-between p-4 rounded-xl border transition-all",
                plan.popular
                  ? "border-blue-300 bg-blue-50 hover:bg-blue-100 ring-2 ring-blue-200"
                  : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
              )}
            >
              <div>
                <span className="font-semibold text-slate-900">{plan.name}</span>
                {plan.popular && (
                  <span className="ml-2 text-xs font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                    Most Popular
                  </span>
                )}
                <p className="text-sm text-slate-500">{plan.desc}</p>
              </div>
              <span className="text-lg font-bold text-slate-900">{plan.price}</span>
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 mb-4">
          Cancel anytime. ROI in the first week or your money back.
        </p>

        <button
          onClick={onClose}
          className="w-full text-center text-sm text-slate-500 hover:text-slate-700 py-2"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [quickInput, setQuickInput] = useState("");
  const [selectedAgent, setSelectedAgent] = useState("intake");
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [trialUsed, setTrialUsedState] = useState(getTrialUsed);
  const [showUpgrade, setShowUpgrade] = useState(false);

  const remaining = Math.max(0, TRIAL_LIMIT - trialUsed);

  async function handleQuickRun() {
    if (!quickInput.trim()) return;

    if (remaining <= 0) {
      setShowUpgrade(true);
      return;
    }

    setIsRunning(true);
    setResult(null);

    try {
      const res = await fetch(`/api/trial/${selectedAgent}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: quickInput }),
      });

      const data = await res.json();

      if (res.status === 429) {
        setShowUpgrade(true);
        setTrialUsedState(TRIAL_LIMIT);
        setTrialUsed(TRIAL_LIMIT);
        return;
      }

      if (data.task?.output) {
        setResult(data.task.output);
        const newUsed = data.trial?.used ?? trialUsed + 1;
        setTrialUsedState(newUsed);
        setTrialUsed(newUsed);
        trackEvent("trial_run", { agent: selectedAgent, runs_used: newUsed, source: "quick_run" });
      } else {
        setResult(data.error || "Agent returned no output");
      }
    } catch {
      setResult("Failed to connect to agent. Please try again.");
    } finally {
      setIsRunning(false);
    }
  }

  return (
    <div className="space-y-8">
      {showUpgrade && <UpgradeModal onClose={() => setShowUpgrade(false)} />}

      {/* Trial Banner */}
      <div className={clsx(
        "rounded-xl p-4 flex items-center justify-between",
        remaining > 2
          ? "bg-emerald-50 border border-emerald-200"
          : remaining > 0
          ? "bg-amber-50 border border-amber-200"
          : "bg-red-50 border border-red-200"
      )}>
        <div className="flex items-center gap-3">
          {remaining > 0 ? (
            <Sparkles className={clsx("w-5 h-5", remaining > 2 ? "text-emerald-600" : "text-amber-600")} />
          ) : (
            <Lock className="w-5 h-5 text-red-600" />
          )}
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {remaining > 0
                ? `Free Trial: ${remaining} of ${TRIAL_LIMIT} runs remaining`
                : "Free trial complete"}
            </p>
            <p className="text-xs text-slate-500">
              {remaining > 0
                ? "Try any agent with your real data — no signup required"
                : "Upgrade to keep using AgentDesk"}
            </p>
          </div>
        </div>
        {remaining <= 2 && (
          <button
            onClick={() => setShowUpgrade(true)}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-violet-700 transition"
          >
            Upgrade
          </button>
        )}
      </div>

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Try AgentDesk</h1>
        <p className="text-slate-500 mt-1">
          Pick an agent, paste your real data, and see the output in seconds. No signup needed.
        </p>
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
                : remaining > 0
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-slate-400"
            )}
          >
            <Play size={16} />
            {isRunning ? "Running..." : remaining > 0 ? "Run" : "Upgrade to Run"}
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
          Choose an Agent
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
              <div className="mt-4 pt-4 border-t border-slate-100">
                <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700">
                  {agent.cta} &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* How it works for trial users */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-slate-200 p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">How the trial works</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div>
            <div className="text-2xl font-extrabold text-blue-600 mb-1">1</div>
            <p className="text-sm font-medium text-slate-900">Pick an agent</p>
            <p className="text-xs text-slate-500">Intake, Proposal, or Report — each solves a different problem</p>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-blue-600 mb-1">2</div>
            <p className="text-sm font-medium text-slate-900">Paste your real data</p>
            <p className="text-xs text-slate-500">Emails, call notes, or project metrics — the more real, the better</p>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-blue-600 mb-1">3</div>
            <p className="text-sm font-medium text-slate-900">Get results in seconds</p>
            <p className="text-xs text-slate-500">Copy the output and use it. If it saves you time, upgrade</p>
          </div>
        </div>
      </div>
    </div>
  );
}
