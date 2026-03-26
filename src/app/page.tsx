import {
  Bot,
  Zap,
  Shield,
  Clock,
  MessageSquare,
  FileText,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  ChevronRight,
  Mail,
} from "lucide-react";
import HeroDemo from "@/components/hero-demo";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">AgentDesk</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#agents" className="hover:text-slate-900 transition">Agents</a>
            <a href="#how-it-works" className="hover:text-slate-900 transition">How It Works</a>
            <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
            <a href="#faq" className="hover:text-slate-900 transition">FAQ</a>
          </div>
          <a
            href="/dashboard"
            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-violet-700 transition shadow-lg shadow-blue-500/25"
          >
            Try Free
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-60" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-violet-100 rounded-full blur-[120px] opacity-60" />
      </div>
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200/60 rounded-full text-sm font-medium text-blue-700 mb-8">
          <Zap className="w-4 h-4" />
          Try all 3 agents free — no signup required
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          AI agents that run<br />
          <span className="gradient-text">your firm</span> while you<br />
          run your business
        </h1>
        <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Pre-built AI agents for consultants, agencies, and professional services.
          Client intake, proposals, and reports — automated in 5 minutes.{" "}
          <span className="font-semibold text-slate-900">Starting at $99/month.</span>
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="/dashboard" className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-violet-700 transition shadow-xl shadow-blue-500/30 flex items-center gap-2">
            Try It Free — No Signup
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#agents" className="px-8 py-4 text-lg font-semibold text-slate-700 hover:text-slate-900 transition flex items-center gap-2">
            See the agents <ChevronRight className="w-5 h-5" />
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
          <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-green-500" />SOC2-ready audit trails</div>
          <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-500" />Setup in under 5 minutes</div>
          <div className="flex items-center gap-2"><Users className="w-4 h-4 text-violet-500" />Built for professional services</div>
        </div>
        <HeroDemo />
      </div>
    </section>
  );
}

function PainPoints() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Your firm is leaking money</h2>
        <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-12">Every hour spent on admin is an hour not spent on billable work.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { stat: "42%", label: "of work hours", desc: "spent on tasks AI can automate today" },
            { stat: "$504K", label: "per year wasted", desc: "for a 20-person firm at $60K avg salary" },
            { stat: "3.2 hrs", label: "per proposal", desc: "that could take 18 minutes with AI" },
          ].map((item) => (
            <div key={item.stat} className="text-center p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-5xl font-extrabold gradient-text mb-2">{item.stat}</div>
              <div className="text-sm font-semibold text-slate-900 mb-1">{item.label}</div>
              <div className="text-sm text-slate-500">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const agentData = [
  {
    icon: MessageSquare, name: "Intake Agent", price: "$99", tagline: "Never miss a lead again",
    description: "Monitors your inbox 24/7. Qualifies leads in real-time. Sends personalized responses in under 2 minutes. Books discovery calls automatically.",
    features: ["24/7 lead qualification", "2-minute response time", "Intelligent scoring (budget, timeline, fit)", "Auto-books discovery calls", "Full conversation history", "Human approval for high-value leads"],
    metric: "Replaces $3,000/mo receptionist", color: "blue" as const,
  },
  {
    icon: FileText, name: "Proposal Agent", price: "$249", tagline: "Discovery call to proposal in 18 minutes",
    description: "Paste your discovery call notes. Get a custom proposal with scope, timeline, pricing, and case studies. Learns your firm's voice and pricing model.",
    features: ["Custom proposals from call notes", "Learns your pricing model", "Includes relevant case studies", "Professional formatting", "Pipeline tracking dashboard", "Edit before sending"],
    metric: "Saves 3+ hours per proposal", color: "violet" as const,
  },
  {
    icon: BarChart3, name: "Report Agent", price: "$149", tagline: "Client reports on autopilot",
    description: "Pulls data from your project tools. Generates professional weekly and monthly reports. Auto-sends on schedule or holds for your approval.",
    features: ["Auto-generated client reports", "Custom templates per client", "Scheduled delivery (weekly/monthly)", "Data from CSV, API, or manual input", "Professional PDF export", "Approval workflow"],
    metric: "Saves 5+ hours per week", color: "emerald" as const,
  },
];

const colorMap = {
  blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-600", badge: "bg-blue-100 text-blue-700" },
  violet: { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-600", badge: "bg-violet-100 text-violet-700" },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-600", badge: "bg-emerald-100 text-emerald-700" },
};

function AgentsSection() {
  return (
    <section id="agents" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Three agents. Infinite leverage.</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Each agent handles a specific workflow end-to-end. No configuration. No prompt engineering. Connect and go.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {agentData.map((agent) => {
            const c = colorMap[agent.color];
            const Icon = agent.icon;
            return (
              <div key={agent.name} className={`rounded-2xl border ${c.border} ${c.bg} p-8 flex flex-col`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${c.badge} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${c.text}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{agent.name}</h3>
                    <span className={`text-sm font-semibold ${c.text}`}>{agent.price}/month</span>
                  </div>
                </div>
                <p className="text-lg font-semibold text-slate-800 mb-2">{agent.tagline}</p>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{agent.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {agent.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${c.text}`} />{f}
                    </li>
                  ))}
                </ul>
                <div className={`rounded-lg px-4 py-3 ${c.badge} text-sm font-medium`}>{agent.metric}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LiveDemo() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">See it in action</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Paste call notes. Get a complete proposal. 30 seconds.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Input */}
          <div className="rounded-xl bg-slate-800 border border-slate-700 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-slate-500">Your call notes</span>
            </div>
            <p className="text-sm text-slate-300 font-mono leading-relaxed">
              Discovery call with Martinez & Associates. 15-person law firm. Spending 8hrs/week on manual document review. Want AI-powered solution. Budget: $8-12K. Decision maker: Managing Partner Elena Martinez. Need pilot by June.
            </p>
          </div>
          {/* Output */}
          <div className="rounded-xl bg-slate-800 border border-blue-500/30 p-6 relative">
            <div className="absolute -top-3 left-4 px-3 py-1 bg-blue-600 rounded-full text-xs font-semibold">
              Proposal Agent output
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-slate-500">Generated in 28s</span>
            </div>
            <div className="text-sm text-slate-300 font-mono leading-relaxed space-y-2">
              <p className="text-blue-400 font-bold">## Executive Summary</p>
              <p>AI-powered document review system for Martinez & Associates to reduce 8hrs/week of manual review...</p>
              <p className="text-blue-400 font-bold">## Scope of Work</p>
              <p>Phase 1: Document analysis pipeline<br />Phase 2: Attorney review dashboard<br />Phase 3: Integration with case mgmt...</p>
              <p className="text-blue-400 font-bold">## Investment</p>
              <p>$10,500 — includes setup, training, 90-day support</p>
              <p className="text-slate-500 text-xs mt-2">+ timeline, case studies, next steps...</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="/dashboard/agents/proposal"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition"
          >
            Try it with your call notes
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-sm text-slate-500 mt-3">Free — no signup required</p>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: "01", title: "Connect your tools", desc: "Link your email, calendar, and project tools. Takes under 2 minutes." },
    { num: "02", title: "Choose your agent", desc: "Pick the agent that matches your workflow. No configuration needed." },
    { num: "03", title: "Agent goes to work", desc: "Your agent starts handling tasks immediately. You approve when needed." },
    { num: "04", title: "Monitor and scale", desc: "Track performance on your dashboard. Add more agents as you grow." },
  ];
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Live in 5 minutes. Not 5 months.</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="text-4xl font-extrabold gradient-text mb-3">{s.num}</div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    { name: "Starter", price: "$99", desc: "One agent for solo consultants", features: ["1 AI agent", "500 tasks/month", "Email support", "Basic dashboard", "7-day activity history"], cta: "Start with Starter", href: "https://buy.stripe.com/6oUcN55Cz28j2e67ZibEA00", popular: false },
    { name: "Professional", price: "$349", desc: "All 3 agents for growing firms", features: ["All 3 AI agents", "5,000 tasks/month", "Priority support", "Advanced dashboard", "30-day activity history", "Custom agent training", "API access"], cta: "Go Professional", href: "https://buy.stripe.com/14AfZh7KHbIT5qigvObEA01", popular: true },
    { name: "Agency", price: "$799", desc: "Unlimited for large teams", features: ["Unlimited agents", "Unlimited tasks", "Dedicated support", "White-label option", "90-day activity history", "Custom integrations", "Team management", "SLA guarantee"], cta: "Contact Sales", href: "https://buy.stripe.com/6oUeVd8OLcMX8Cu0wQbEA02", popular: false },
  ];
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Simple, transparent pricing</h2>
        <p className="text-lg text-slate-600 text-center mb-16 max-w-xl mx-auto">No setup fees. No contracts. Cancel anytime. Try all 3 agents free before you buy.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl p-8 flex flex-col ${plan.popular ? "bg-gradient-to-b from-blue-600 to-violet-700 text-white shadow-2xl shadow-blue-500/30 scale-105 relative" : "bg-white border border-slate-200 shadow-sm"}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" />Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className={`text-sm mb-4 ${plan.popular ? "text-blue-100" : "text-slate-500"}`}>{plan.desc}</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className={`text-sm ${plan.popular ? "text-blue-200" : "text-slate-500"}`}>/month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 ${plan.popular ? "text-blue-200" : "text-blue-500"}`} />{f}
                  </li>
                ))}
              </ul>
              <a href={plan.href} target="_blank" rel="noopener noreferrer" className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition ${plan.popular ? "bg-white text-blue-700 hover:bg-blue-50" : "bg-slate-900 text-white hover:bg-slate-800"}`}>{plan.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  const rows = [
    { task: "Respond to new leads", old: "6+ hours (business hours only)", us: "Under 2 minutes, 24/7" },
    { task: "Write a proposal", old: "3-4 hours manual work", us: "18 minutes with AI" },
    { task: "Weekly client reports", old: "5+ hours gathering data", us: "Automatic, zero effort" },
    { task: "Qualify a prospect", old: "30-min phone call", us: "Instant AI qualification" },
    { task: "Follow up on leads", old: "Forgotten or delayed", us: "Automatic, on schedule" },
  ];
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Before AgentDesk vs. After</h2>
        <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
          <div className="grid grid-cols-3 gap-0 text-sm font-semibold bg-slate-100 border-b border-slate-200">
            <div className="p-4">Task</div>
            <div className="p-4 text-red-600">Without AgentDesk</div>
            <div className="p-4 text-blue-600">With AgentDesk</div>
          </div>
          {rows.map((r) => (
            <div key={r.task} className="grid grid-cols-3 gap-0 text-sm border-b border-slate-100 last:border-0">
              <div className="p-4 font-medium">{r.task}</div>
              <div className="p-4 text-slate-500">{r.old}</div>
              <div className="p-4 text-slate-900 font-medium">{r.us}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Waitlist() {
  return (
    <section id="waitlist" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-60" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-100 rounded-full blur-[120px] opacity-60" />
      </div>
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-200/60 rounded-full text-sm font-medium text-emerald-700 mb-6">
          <Zap className="w-4 h-4" />5 free runs — no credit card required
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">See it work in 30 seconds</h2>
        <p className="text-lg text-slate-600 mb-8">
          Try all 3 agents right now with real data.{" "}
          <span className="font-semibold text-slate-900">No signup. No credit card. Just results.</span>
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="/dashboard" className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-violet-700 transition shadow-xl shadow-blue-500/30 flex items-center gap-2">
            Try the Agents Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <p className="text-sm text-slate-500 mb-6">Or get notified about updates and launch discounts:</p>
        <form action="/api/waitlist" method="POST" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" name="email" placeholder="you@yourfirm.com" required className="flex-1 px-4 py-3.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400" />
          <button type="submit" className="px-6 py-3.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />Get Updates
          </button>
        </form>
        <p className="text-xs text-slate-400 mt-3">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}

const faqItems = [
  {
    q: "Do I need to sign up to try AgentDesk?",
    a: "No. You get 5 free runs with no signup, no credit card, and no commitment. Just pick an agent, paste your data, and see the output in seconds.",
  },
  {
    q: "What kind of data do I paste into the agents?",
    a: "The Intake Agent takes incoming emails or form submissions. The Proposal Agent takes discovery call notes or meeting transcripts. The Report Agent takes project metrics, milestones, and status updates.",
  },
  {
    q: "How is this different from ChatGPT?",
    a: "ChatGPT is a general-purpose chatbot. AgentDesk agents are purpose-built for consulting workflows — they produce structured, professional output (proposals with scope, timeline, pricing) in a consistent format every time. No prompt engineering required.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Your data is processed via the Anthropic API (Claude) and is not used for model training. We don't store your input or output data beyond the current session. All connections are encrypted via TLS.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. All plans are month-to-month with no contracts and no cancellation fees. Cancel from your Stripe billing portal in one click.",
  },
  {
    q: "How long does it take to get results?",
    a: "Most agent runs complete in 15-30 seconds. The Proposal Agent, which generates the most detailed output (scope, timeline, pricing, case studies), typically takes 20-30 seconds.",
  },
  {
    q: "What if the output isn't perfect?",
    a: "The agents produce a strong first draft — typically 80-90% ready to send. Most users review and make minor tweaks before sending to clients. This still saves 3-4 hours per proposal compared to writing from scratch.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Frequently asked questions</h2>
        <p className="text-lg text-slate-600 text-center mb-12">Everything you need to know before getting started.</p>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details key={item.q} className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer text-left font-semibold text-slate-900 hover:bg-slate-50 transition [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronRight className="w-5 h-5 text-slate-400 shrink-0 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
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
          <a href="/terms" className="hover:text-slate-600 transition">Terms of Service</a>
          <a href="/privacy" className="hover:text-slate-600 transition">Privacy Policy</a>
          <span>&copy; {new Date().getFullYear()} WEDGE Method LLC. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <AgentsSection />
        <LiveDemo />
        <Comparison />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
