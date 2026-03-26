"use client";

import { useState } from "react";
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
  Sparkles,
  Lock,
  Mail,
  X,
  Share2,
} from "lucide-react";
import clsx from "clsx";

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

function UpgradeModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-8">
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            You&apos;ve seen what AgentDesk can do
          </h2>
          <p className="text-slate-600 mt-2">
            Upgrade to run unlimited agents and transform your firm&apos;s
            workflow.
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {[
            {
              name: "Starter",
              price: "$99/mo",
              desc: "1 agent, 500 tasks",
              href: "https://buy.stripe.com/6oUcN55Cz28j2e67ZibEA00",
            },
            {
              name: "Professional",
              price: "$349/mo",
              desc: "All 3 agents, 5K tasks",
              href: "https://buy.stripe.com/14AfZh7KHbIT5qigvObEA01",
              popular: true,
            },
            {
              name: "Agency",
              price: "$799/mo",
              desc: "Unlimited everything",
              href: "https://buy.stripe.com/6oUeVd8OLcMX8Cu0wQbEA02",
            },
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
                <span className="font-semibold text-slate-900">
                  {plan.name}
                </span>
                {plan.popular && (
                  <span className="ml-2 text-xs font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                    Most Popular
                  </span>
                )}
                <p className="text-sm text-slate-500">{plan.desc}</p>
              </div>
              <span className="text-lg font-bold text-slate-900">
                {plan.price}
              </span>
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

export default function AgentDetailPage() {
  const params = useParams();
  const agentId = params.agentId as string;
  const meta = AGENT_META[agentId];

  const [input, setInput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [trialUsed, setTrialUsedState] = useState(getTrialUsed);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("agentdesk_email_captured") === "true";
  });
  const [captureEmail, setCaptureEmail] = useState("");
  const [emailSending, setEmailSending] = useState(false);
  const [taskHistory, setTaskHistory] = useState<
    Array<{ input: string; output: string; time: string }>
  >([]);
  const [progressStage, setProgressStage] = useState(0);

  const remaining = Math.max(0, TRIAL_LIMIT - trialUsed);

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

    if (remaining <= 0) {
      setShowUpgrade(true);
      return;
    }

    setIsRunning(true);
    setOutput(null);
    setProgressStage(0);

    // Animate progress stages while waiting
    const stages = [
      "Reading your input...",
      "Analyzing context and requirements...",
      agentId === "intake" ? "Scoring lead quality..." :
      agentId === "proposal" ? "Structuring proposal sections..." :
      "Compiling report data...",
      agentId === "intake" ? "Drafting personalized response..." :
      agentId === "proposal" ? "Writing executive summary and scope..." :
      "Generating executive summary...",
      "Formatting final output...",
    ];
    let stage = 0;
    const progressInterval = setInterval(() => {
      stage = Math.min(stage + 1, stages.length - 1);
      setProgressStage(stage);
    }, 4000);

    try {
      const res = await fetch(`/api/trial/${agentId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });

      const data = await res.json();

      if (res.status === 429) {
        setShowUpgrade(true);
        setTrialUsedState(TRIAL_LIMIT);
        setTrialUsed(TRIAL_LIMIT);
        return;
      }

      const result = data.task?.output || data.error || "No output";
      setOutput(result);

      const newUsed = data.trial?.used ?? trialUsed + 1;
      setTrialUsedState(newUsed);
      setTrialUsed(newUsed);

      // Show email capture after first successful run (if not already captured)
      if (newUsed === 1 && !emailSubmitted) {
        setTimeout(() => setShowEmailCapture(true), 2000);
      }

      setTaskHistory((prev) => [
        {
          input: input.slice(0, 100) + (input.length > 100 ? "..." : ""),
          output: result,
          time: new Date().toLocaleTimeString(),
        },
        ...prev,
      ]);
    } catch {
      setOutput("Failed to run agent. Please try again.");
    } finally {
      clearInterval(progressInterval);
      setIsRunning(false);
    }
  }

  const PROGRESS_MESSAGES = [
    "Reading your input...",
    "Analyzing context and requirements...",
    agentId === "intake" ? "Scoring lead quality..." :
    agentId === "proposal" ? "Structuring proposal sections..." :
    "Compiling report data...",
    agentId === "intake" ? "Drafting personalized response..." :
    agentId === "proposal" ? "Writing executive summary and scope..." :
    "Generating executive summary...",
    "Formatting final output...",
  ];

  function handleCopy() {
    if (output) {
      navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  async function handleEmailCapture(e: React.FormEvent) {
    e.preventDefault();
    if (!captureEmail.trim()) return;
    setEmailSending(true);
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: captureEmail }),
      });
      setEmailSubmitted(true);
      setShowEmailCapture(false);
      localStorage.setItem("agentdesk_email_captured", "true");
    } catch {
      // Silently fail — don't block the user experience
    } finally {
      setEmailSending(false);
    }
  }

  function loadExample(example: string) {
    setInput(example);
    setOutput(null);
  }

  const IconComponent = meta.icon;

  return (
    <div className="space-y-6">
      {showUpgrade && <UpgradeModal onClose={() => setShowUpgrade(false)} />}

      {/* Trial Banner */}
      <div
        className={clsx(
          "rounded-xl p-3 flex items-center justify-between",
          remaining > 2
            ? "bg-emerald-50 border border-emerald-200"
            : remaining > 0
            ? "bg-amber-50 border border-amber-200"
            : "bg-red-50 border border-red-200"
        )}
      >
        <div className="flex items-center gap-2">
          {remaining > 0 ? (
            <Sparkles
              className={clsx(
                "w-4 h-4",
                remaining > 2 ? "text-emerald-600" : "text-amber-600"
              )}
            />
          ) : (
            <Lock className="w-4 h-4 text-red-600" />
          )}
          <p className="text-sm font-medium text-slate-700">
            {remaining > 0
              ? `${remaining} free run${remaining !== 1 ? "s" : ""} remaining`
              : "Free trial complete"}
          </p>
        </div>
        {remaining === 0 && (
          <button
            onClick={() => setShowUpgrade(true)}
            className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-semibold rounded-lg"
          >
            Upgrade
          </button>
        )}
      </div>

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
          Try an example (or paste your own data below)
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
        <div className="flex items-center justify-between mt-3">
          <p className="text-xs text-slate-400">
            {remaining > 0
              ? `${remaining} free run${remaining !== 1 ? "s" : ""} left`
              : "Upgrade to continue"}
          </p>
          <button
            onClick={runAgent}
            disabled={isRunning || !input.trim() || remaining <= 0}
            className={clsx(
              "flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium text-white transition-colors",
              isRunning || remaining <= 0
                ? "bg-slate-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            )}
          >
            {isRunning ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Running...
              </>
            ) : remaining > 0 ? (
              <>
                <Play size={16} /> Run Agent
              </>
            ) : (
              <>
                <Lock size={16} /> Upgrade to Run
              </>
            )}
          </button>
        </div>
      </div>

      {/* Progress Indicator */}
      {isRunning && (
        <div className="bg-white rounded-xl border border-blue-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Loader2 size={20} className="animate-spin text-blue-600" />
            <h2 className="text-sm font-semibold text-blue-700">Agent is working...</h2>
          </div>
          <div className="space-y-2">
            {PROGRESS_MESSAGES.map((msg, i) => (
              <div
                key={msg}
                className={clsx(
                  "flex items-center gap-2 text-sm transition-all duration-500",
                  i < progressStage
                    ? "text-slate-400"
                    : i === progressStage
                    ? "text-blue-700 font-medium"
                    : "text-slate-300"
                )}
              >
                {i < progressStage ? (
                  <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                ) : i === progressStage ? (
                  <Loader2 size={14} className="animate-spin text-blue-600 shrink-0" />
                ) : (
                  <div className="w-3.5 h-3.5 rounded-full border border-slate-200 shrink-0" />
                )}
                {msg}
              </div>
            ))}
          </div>
          <div className="mt-4 bg-slate-100 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-violet-500 h-full rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${Math.min(95, (progressStage + 1) * 20)}%` }}
            />
          </div>
        </div>
      )}

      {/* Output */}
      {output && (
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-medium text-slate-700">
              Agent Output
            </h2>
            <div className="flex items-center gap-3">
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
              <button
                onClick={() => {
                  const text = `Check out this ${meta.name} output from AgentDesk — AI agents for professional services:\n\n${output?.slice(0, 280)}...\n\nTry it free: https://agentdesk.thewedgemethodai.com/dashboard/agents/${agentId}`;
                  if (navigator.share) {
                    navigator.share({ title: `${meta.name} Output`, text, url: `https://agentdesk.thewedgemethodai.com/dashboard/agents/${agentId}` });
                  } else {
                    navigator.clipboard.writeText(text);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }
                }}
                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-700"
              >
                <Share2 size={14} /> Share
              </button>
            </div>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono leading-relaxed max-h-[600px] overflow-y-auto">
              {output}
            </pre>
          </div>

          {/* Post-output upgrade nudge */}
          {remaining <= 2 && remaining > 0 && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-900">
                  Like what you see?
                </p>
                <p className="text-xs text-blue-700">
                  {remaining} run{remaining !== 1 ? "s" : ""} left. Upgrade for
                  unlimited access.
                </p>
              </div>
              <a
                href="https://buy.stripe.com/14AfZh7KHbIT5qigvObEA01"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Upgrade — $349/mo
              </a>
            </div>
          )}
        </div>
      )}

      {/* Email Capture — appears after first run */}
      {showEmailCapture && !emailSubmitted && (
        <div className="bg-gradient-to-r from-blue-50 to-violet-50 rounded-xl border border-blue-200 p-5 relative">
          <button
            onClick={() => setShowEmailCapture(false)}
            className="absolute top-3 right-3 text-slate-400 hover:text-slate-600"
          >
            <X size={16} />
          </button>
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">
                Want to save your results?
              </p>
              <p className="text-xs text-slate-600 mt-1 mb-3">
                Enter your email to get your agent outputs delivered and unlock launch discounts.
              </p>
              <form onSubmit={handleEmailCapture} className="flex gap-2">
                <input
                  type="email"
                  value={captureEmail}
                  onChange={(e) => setCaptureEmail(e.target.value)}
                  placeholder="you@yourfirm.com"
                  required
                  className="flex-1 px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                />
                <button
                  type="submit"
                  disabled={emailSending}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition disabled:bg-slate-400"
                >
                  {emailSending ? "..." : "Save"}
                </button>
              </form>
            </div>
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
