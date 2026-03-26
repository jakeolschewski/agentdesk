import type { Metadata } from "next";
import Link from "next/link";
import {
  Bot,
  Briefcase,
  Clock,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  FileText,
  Zap,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Agents for Consultants — Automate Proposals & Reports | AgentDesk",
  description:
    "AI-powered proposal generation, client intake, and reporting for consulting firms. Generate proposals from call notes in 30 seconds. Save 15+ hours per week. Try free — no signup.",
  keywords: [
    "AI for consultants",
    "consulting proposal automation",
    "AI proposal generator",
    "consulting firm automation",
    "management consulting AI",
    "consultant productivity tools",
    "AI consulting tools",
  ],
  openGraph: {
    title: "AI Agents for Consultants | AgentDesk",
    description:
      "Generate proposals from call notes in 30 seconds. Save 15+ hours per week on admin. Try free.",
    url: "https://agentdesk.thewedgemethodai.com/for/consultants",
  },
};

export default function ConsultantsPage() {
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
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-[120px] opacity-60" />
            <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-60" />
          </div>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-200/60 rounded-full text-sm font-medium text-emerald-700 mb-8">
              <Briefcase className="w-4 h-4" />
              Built for consulting firms
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Stop writing proposals.<br />
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Start closing deals.
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Consulting firms spend 15-25 hours per week on proposals, intake, and reports.
              That&apos;s $3,000-5,000 in billable time burned on admin.{" "}
              <span className="font-semibold text-slate-900">AgentDesk cuts that to under 2 hours.</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/dashboard/agents/proposal"
                className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white text-lg font-semibold rounded-xl hover:from-emerald-700 hover:to-blue-700 transition shadow-xl shadow-emerald-500/30 flex items-center gap-2"
              >
                Generate a Proposal Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#roi" className="px-8 py-4 text-lg font-semibold text-slate-700 hover:text-slate-900 transition">
                See the ROI
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-green-500" />ROI in the first week</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-500" />30-second proposals</div>
              <div className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-emerald-500" />No signup to try</div>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section id="roi" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200/60">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">The ROI is obvious</h2>
            <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-12">For a 10-person consulting firm billing $150/hour:</p>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="grid grid-cols-3 text-sm font-semibold bg-slate-100 border-b border-slate-200">
                <div className="p-4">Task</div>
                <div className="p-4 text-red-600">Hours/Week (Manual)</div>
                <div className="p-4 text-emerald-600">Hours/Week (AgentDesk)</div>
              </div>
              {[
                { task: "Client intake & lead qualification", manual: "5-8 hrs", agent: "0.5 hrs" },
                { task: "Proposal writing", manual: "8-12 hrs", agent: "1 hr" },
                { task: "Client reporting", manual: "5-8 hrs", agent: "0.5 hrs" },
                { task: "Total admin hours", manual: "18-28 hrs", agent: "2 hrs" },
              ].map((row, i) => (
                <div key={row.task} className={`grid grid-cols-3 text-sm border-b border-slate-100 last:border-0 ${i === 3 ? "font-bold bg-slate-50" : ""}`}>
                  <div className="p-4">{row.task}</div>
                  <div className="p-4 text-slate-500">{row.manual}</div>
                  <div className="p-4 text-slate-900">{row.agent}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <div className="inline-block bg-emerald-50 border border-emerald-200 rounded-xl px-8 py-4">
                <p className="text-2xl font-extrabold text-emerald-700">Save 16-26 hours/week</p>
                <p className="text-sm text-emerald-600">That&apos;s $2,400-3,900/week in recovered billable time at $150/hr</p>
              </div>
            </div>
          </div>
        </section>

        {/* Agents */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Three agents, one subscription</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  name: "Intake Agent",
                  price: "Included",
                  desc: "Reads every inquiry. Scores it by budget, timeline, and fit. Drafts a professional response. 24/7.",
                  features: ["Lead scoring (1-10)", "Auto-drafted responses", "24/7 qualification"],
                  href: "/dashboard/agents/intake",
                  color: "blue",
                },
                {
                  icon: FileText,
                  name: "Proposal Agent",
                  price: "Included",
                  desc: "Discovery call notes in, complete proposal out. Scope, timeline, pricing, terms. 30 seconds.",
                  features: ["30-second proposals", "Custom formatting", "Partner review workflow"],
                  href: "/dashboard/agents/proposal",
                  color: "violet",
                },
                {
                  icon: BarChart3,
                  name: "Report Agent",
                  price: "Included",
                  desc: "Project data in, executive report out. Weekly or monthly. Clients love them.",
                  features: ["Auto-generated reports", "Professional formatting", "Scheduled delivery"],
                  href: "/dashboard/agents/report",
                  color: "emerald",
                },
              ].map((agent) => (
                <div key={agent.name} className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    agent.color === "blue" ? "bg-blue-100 text-blue-600" :
                    agent.color === "violet" ? "bg-violet-100 text-violet-600" :
                    "bg-emerald-100 text-emerald-600"
                  }`}>
                    <agent.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{agent.name}</h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed flex-1">{agent.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {agent.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={agent.href}
                    className="block text-center py-3 px-6 rounded-xl font-semibold text-sm bg-slate-900 text-white hover:bg-slate-800 transition"
                  >
                    Try Free
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 mt-8">
              All 3 agents included in the Professional plan — <span className="font-semibold text-slate-900">$349/month</span>. Cancel anytime.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-blue-700 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Try it with your last discovery call</h2>
            <p className="text-lg text-emerald-100 mb-8">
              Paste your most recent call notes. See a complete proposal — executive summary, scope, timeline, pricing — in under 30 seconds.
            </p>
            <Link
              href="/dashboard/agents/proposal"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 text-lg font-semibold rounded-xl hover:bg-emerald-50 transition shadow-xl"
            >
              Generate a Proposal Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-emerald-200 mt-4">5 free runs. No signup. No credit card.</p>
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
