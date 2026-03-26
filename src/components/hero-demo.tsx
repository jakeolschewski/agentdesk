"use client";

import { useState } from "react";
import { Play, Loader2, Copy, CheckCircle2, ArrowRight } from "lucide-react";

const SAMPLE_INPUT =
  "Discovery call with Martinez & Associates (law firm, 15 attorneys). Pain: spending 8hrs/week on manual document review. Budget: $8-12K. Want AI-powered document analysis. Decision maker: Managing Partner Elena Martinez. Timeline: need pilot by June.";

export default function HeroDemo() {
  const [phase, setPhase] = useState<"idle" | "running" | "done">("idle");
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  async function runDemo() {
    setPhase("running");
    setOutput("");

    try {
      const res = await fetch("/api/trial/proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: SAMPLE_INPUT }),
      });

      const data = await res.json();

      if (data.task?.output) {
        setOutput(data.task.output);
        setPhase("done");
      } else {
        setOutput(data.error || "Demo unavailable — try the full dashboard");
        setPhase("done");
      }
    } catch {
      setOutput("Connection error — try the full dashboard instead");
      setPhase("done");
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  if (phase === "idle") {
    return (
      <div className="max-w-3xl mx-auto mt-12">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
          <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-xs text-slate-400 font-mono">
                Proposal Agent — Live Demo
              </span>
            </div>
          </div>
          <div className="p-6">
            <p className="text-sm text-slate-500 mb-3">Sample call notes:</p>
            <p className="text-sm text-slate-700 mb-4 italic">
              &ldquo;{SAMPLE_INPUT}&rdquo;
            </p>
            <button
              onClick={runDemo}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold rounded-xl hover:from-blue-700 hover:to-violet-700 transition shadow-lg shadow-blue-500/25"
            >
              <Play className="w-4 h-4" />
              Generate Proposal — Watch it Live
            </button>
            <p className="text-xs text-slate-400 text-center mt-2">
              Uses 1 of your 5 free trial runs
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "running") {
    return (
      <div className="max-w-3xl mx-auto mt-12">
        <div className="rounded-2xl border border-blue-200 bg-white shadow-xl overflow-hidden">
          <div className="bg-slate-900 px-6 py-4 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-slate-400 font-mono">
              Proposal Agent — Generating...
            </span>
          </div>
          <div className="p-8 flex flex-col items-center justify-center min-h-[200px]">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin mb-4" />
            <p className="text-sm font-medium text-slate-700">
              AI is writing your proposal...
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Usually takes 15-30 seconds
            </p>
          </div>
        </div>
      </div>
    );
  }

  // phase === "done"
  return (
    <div className="max-w-3xl mx-auto mt-12">
      <div className="rounded-2xl border border-emerald-200 bg-white shadow-xl overflow-hidden">
        <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-emerald-400 font-mono">
              Proposal generated
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5" /> Copied
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" /> Copy
              </>
            )}
          </button>
        </div>
        <div className="p-6 max-h-[400px] overflow-y-auto">
          <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
            {output}
          </pre>
        </div>
        <div className="border-t border-slate-200 p-4 bg-slate-50 flex items-center justify-between">
          <p className="text-sm text-slate-600">
            Like what you see? Try it with <strong>your</strong> data.
          </p>
          <a
            href="/dashboard/agents/proposal"
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Try Your Own <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
