import type { Metadata } from "next";
import Link from "next/link";
import {
  Bot,
  Palette,
  Clock,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Users,
  FileText,
  Zap,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Agents for Marketing & Creative Agencies — Automate Proposals | AgentDesk",
  description:
    "AI-powered proposal generation, client intake, and reporting for agencies. Send 5x more proposals with the same team. Generate custom proposals in 30 seconds. Try free — no signup.",
  keywords: [
    "AI for agencies",
    "agency proposal automation",
    "marketing agency AI",
    "creative agency automation",
    "AI proposal generator",
    "agency client intake",
    "agency reporting automation",
  ],
  openGraph: {
    title: "AI Agents for Agencies | AgentDesk",
    description:
      "Send 5x more proposals with the same team. Generate custom proposals in 30 seconds. Try free.",
    url: "https://agentdesk.thewedgemethodai.com/for/agencies",
  },
};

export default function AgenciesPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">AgentDesk</span>
            </Link>
            <Link
              href="/dashboard"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-violet-700 transition shadow-lg shadow-blue-500/25"
            >
              Try Free
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-100 rounded-full blur-[120px] opacity-60" />
            <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-60" />
          </div>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-50 border border-violet-200/60 rounded-full text-sm font-medium text-violet-700 mb-8">
              <Palette className="w-4 h-4" />
              Built for agencies
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Send{" "}
              <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                5x more proposals
              </span>
              <br />without hiring anyone
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Every proposal takes 3-4 hours. You send 3-5 per week. That math caps your growth.
              AgentDesk generates custom proposals from discovery call notes in 30 seconds —{" "}
              <span className="font-semibold text-slate-900">same close rate, 5x the volume.</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/dashboard/agents/proposal"
                className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white text-lg font-semibold rounded-xl hover:from-violet-700 hover:to-blue-700 transition shadow-xl shadow-violet-500/30 flex items-center gap-2"
              >
                Try Proposal Agent Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#how" className="px-8 py-4 text-lg font-semibold text-slate-700 hover:text-slate-900 transition">
                See how it works
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-green-500" />5x more proposals per week</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-500" />30 seconds per proposal</div>
              <div className="flex items-center gap-2"><Users className="w-4 h-4 text-violet-500" />No signup to try</div>
            </div>
          </div>
        </section>

        {/* The Math */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200/60">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">The proposal math that caps your growth</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl border border-red-200 p-8">
                <h3 className="text-lg font-bold text-red-600 mb-4">Without AgentDesk</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li>3-4 hours per proposal</li>
                  <li>3-5 proposals per week max</li>
                  <li>30% close rate = 1-2 new clients/week</li>
                  <li>Senior time burned on document formatting</li>
                  <li>Growth requires hiring more people</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-emerald-200 p-8">
                <h3 className="text-lg font-bold text-emerald-600 mb-4">With AgentDesk</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li>30 seconds per proposal draft</li>
                  <li>15-20 proposals per week (same team)</li>
                  <li>30% close rate = 5-6 new clients/week</li>
                  <li>Senior time spent on strategy, not formatting</li>
                  <li>Growth without increasing headcount</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Agents */}
        <section id="how" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Three agents that scale your agency</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  name: "Intake Agent",
                  desc: "Qualifies every inbound lead instantly. Scores by budget, timeline, and project fit. Drafts a response your team reviews.",
                  href: "/dashboard/agents/intake",
                  color: "bg-blue-100 text-blue-600",
                },
                {
                  icon: FileText,
                  name: "Proposal Agent",
                  desc: "Paste discovery call notes, get a complete proposal. Scope, timeline, pricing, case studies — formatted and ready to review.",
                  href: "/dashboard/agents/proposal",
                  color: "bg-violet-100 text-violet-600",
                },
                {
                  icon: BarChart3,
                  name: "Report Agent",
                  desc: "Client reporting on autopilot. Feed it campaign metrics or project milestones — get polished reports clients love.",
                  href: "/dashboard/agents/report",
                  color: "bg-emerald-100 text-emerald-600",
                },
              ].map((agent) => (
                <Link
                  key={agent.name}
                  href={agent.href}
                  className="group bg-white rounded-2xl border border-slate-200 p-8 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl ${agent.color} flex items-center justify-center mb-4`}>
                    <agent.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{agent.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{agent.desc}</p>
                  <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 flex items-center gap-1">
                    Try it free <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200/60">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">The numbers speak for themselves</h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { stat: "30 sec", label: "Average proposal generation time" },
                { stat: "80%", label: "Less time on admin tasks" },
                { stat: "$349/mo", label: "All 3 agents, unlimited proposals" },
              ].map((item) => (
                <div key={item.stat}>
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent mb-2">{item.stat}</div>
                  <p className="text-sm text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-violet-600 to-blue-700 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Generate your first proposal in 30 seconds</h2>
            <p className="text-lg text-violet-100 mb-8">
              Paste your last discovery call notes. See a complete proposal — scope, timeline, pricing — ready for review.
            </p>
            <Link
              href="/dashboard/agents/proposal"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-700 text-lg font-semibold rounded-xl hover:bg-violet-50 transition shadow-xl"
            >
              Try Proposal Agent Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-violet-200 mt-4">5 free runs. No signup. No credit card.</p>
          </div>
        </section>
      </main>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-sm">AgentDesk</span>
            <span className="text-xs text-slate-400">by WEDGE Method LLC</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <Link href="/terms" className="hover:text-slate-600 transition">Terms</Link>
            <Link href="/privacy" className="hover:text-slate-600 transition">Privacy</Link>
            <span>&copy; {new Date().getFullYear()} WEDGE Method LLC</span>
          </div>
        </div>
      </footer>
    </>
  );
}
