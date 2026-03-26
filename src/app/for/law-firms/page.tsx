import type { Metadata } from "next";
import Link from "next/link";
import {
  Bot,
  Scale,
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
  Users,
  FileText,
  Zap,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Agents for Law Firms — Automate Client Intake & Proposals | AgentDesk",
  description:
    "AI-powered client intake, proposal generation, and reporting for law firms. Qualify leads 24/7, generate engagement letters in 30 seconds, and automate weekly reports. Try free — no signup required.",
  keywords: [
    "AI for law firms",
    "legal AI automation",
    "law firm client intake",
    "legal proposal automation",
    "AI engagement letters",
    "law firm automation",
    "legal tech AI",
  ],
  openGraph: {
    title: "AI Agents for Law Firms | AgentDesk",
    description:
      "Qualify leads 24/7. Generate engagement letters in 30 seconds. Automate client reports. Try free.",
    url: "https://agentdesk.thewedgemethodai.com/for/law-firms",
  },
};

export default function LawFirmsPage() {
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
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-60" />
            <div className="absolute top-40 right-1/4 w-96 h-96 bg-violet-100 rounded-full blur-[120px] opacity-60" />
          </div>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200/60 rounded-full text-sm font-medium text-blue-700 mb-8">
              <Scale className="w-4 h-4" />
              Built for law firms
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              AI agents that qualify<br />
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                your leads
              </span>{" "}
              while you<br />
              practice law
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Stop losing leads after hours. Stop spending 4 hours on engagement letters.
              AgentDesk handles client intake, proposals, and reporting —{" "}
              <span className="font-semibold text-slate-900">so your attorneys can bill more hours.</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/dashboard/agents/intake"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-violet-700 transition shadow-xl shadow-blue-500/30 flex items-center gap-2"
              >
                Try Intake Agent Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#agents" className="px-8 py-4 text-lg font-semibold text-slate-700 hover:text-slate-900 transition">
                See all 3 agents
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-green-500" />SOC2-ready audit trails</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-500" />24/7 lead qualification</div>
              <div className="flex items-center gap-2"><Users className="w-4 h-4 text-violet-500" />No signup required to try</div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200/60">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Your firm is leaking revenue</h2>
            <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-12">Every hour a paralegal spends on intake is an hour not spent on billable work.</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { stat: "$3-5K/mo", label: "receptionist cost", desc: "replaced by an AI agent that works 24/7" },
                { stat: "4-6 hrs", label: "per engagement letter", desc: "reduced to 30 minutes with AI-generated drafts" },
                { stat: "30%+", label: "leads lost", desc: "after-hours inquiries that never get a response" },
              ].map((item) => (
                <div key={item.stat} className="text-center p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-2">{item.stat}</div>
                  <div className="text-sm font-semibold text-slate-900 mb-1">{item.label}</div>
                  <div className="text-sm text-slate-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agents for Law Firms */}
        <section id="agents" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Three agents for your firm</h2>
            <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-16">
              Each one handles a specific workflow. No configuration. No prompt engineering.
            </p>
            <div className="space-y-8">
              {[
                {
                  icon: Zap,
                  name: "Intake Agent",
                  desc: "Reads every incoming inquiry — email, web form, or referral. Scores it on budget, urgency, practice area fit, and case complexity. Drafts a professional response and recommends whether to book a consultation. Works 24/7.",
                  features: ["Qualify leads by budget, urgency, and case fit", "Draft professional responses in seconds", "Never miss an after-hours inquiry", "Score leads 1-10 with reasoning"],
                  cta: "Try Intake Agent",
                  href: "/dashboard/agents/intake",
                  color: "blue",
                },
                {
                  icon: FileText,
                  name: "Proposal Agent",
                  desc: "Turn consultation notes into complete engagement letters. Scope of work, fee structure, timeline, terms — all formatted and ready for partner review. What used to take 4 hours takes 30 seconds.",
                  features: ["Generate engagement letters from call notes", "Include scope, fees, timeline, and terms", "Consistent professional formatting", "Partner reviews and approves before sending"],
                  cta: "Try Proposal Agent",
                  href: "/dashboard/agents/proposal",
                  color: "violet",
                },
                {
                  icon: Star,
                  name: "Report Agent",
                  desc: "Automatic case status reports for clients. Feed it milestones, dates, and updates — get a polished report clients actually appreciate. Weekly or monthly, on schedule or on demand.",
                  features: ["Generate client status reports automatically", "Professional formatting for any practice area", "Include key dates, milestones, and next steps", "Review before sending — you stay in control"],
                  cta: "Try Report Agent",
                  href: "/dashboard/agents/report",
                  color: "emerald",
                },
              ].map((agent) => (
                <div key={agent.name} className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        agent.color === "blue" ? "bg-blue-100 text-blue-600" :
                        agent.color === "violet" ? "bg-violet-100 text-violet-600" :
                        "bg-emerald-100 text-emerald-600"
                      }`}>
                        <agent.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">{agent.name}</h3>
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed">{agent.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {agent.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-blue-500" />{f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={agent.href}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition"
                    >
                      {agent.cta} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-violet-700 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Try it with your next inquiry</h2>
            <p className="text-lg text-blue-100 mb-8">
              Paste a real client inquiry into the Intake Agent. See the qualification score, drafted response, and recommended next action — in under 30 seconds. Free, no signup.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 text-lg font-semibold rounded-xl hover:bg-blue-50 transition shadow-xl"
            >
              Try AgentDesk Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-blue-200 mt-4">5 free runs. No credit card required.</p>
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
