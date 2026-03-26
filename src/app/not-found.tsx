import Link from "next/link";
import { Bot, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center mb-6">
        <Bot className="w-9 h-9 text-white" />
      </div>
      <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
        Page not found
      </h1>
      <p className="text-lg text-slate-600 mb-8 text-center max-w-md">
        This page doesn&apos;t exist. But our AI agents do — and they&apos;re
        ready to save you hours every week.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/dashboard"
          className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-violet-700 transition shadow-lg shadow-blue-500/25 flex items-center gap-2"
        >
          Try AgentDesk Free
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href="/"
          className="px-6 py-3 text-slate-700 font-semibold hover:text-slate-900 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
