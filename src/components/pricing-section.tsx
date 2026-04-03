"use client";

import { useState } from "react";
import { CheckCircle2, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 99,
    desc: "One agent for solo consultants",
    features: [
      "1 AI agent",
      "500 tasks/month",
      "Email support",
      "Basic dashboard",
      "7-day activity history",
    ],
    cta: "Start with Starter",
    href: "https://buy.stripe.com/6oUcN55Cz28j2e67ZibEA00",
    popular: false,
  },
  {
    name: "Professional",
    monthlyPrice: 349,
    desc: "All 3 agents for growing firms",
    features: [
      "All 3 AI agents",
      "5,000 tasks/month",
      "Priority support",
      "Advanced dashboard",
      "30-day activity history",
      "Custom agent training",
      "API access",
    ],
    cta: "Go Professional",
    href: "https://buy.stripe.com/14AfZh7KHbIT5qigvObEA01",
    popular: true,
  },
  {
    name: "Agency",
    monthlyPrice: 799,
    desc: "Unlimited for large teams",
    features: [
      "Unlimited agents",
      "Unlimited tasks",
      "Dedicated support",
      "White-label option",
      "90-day activity history",
      "Custom integrations",
      "Team management",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    href: "https://buy.stripe.com/6oUeVd8OLcMX8Cu0wQbEA02",
    popular: false,
  },
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-lg text-slate-600 text-center mb-10 max-w-xl mx-auto">
          No setup fees. No contracts. Cancel anytime. Try all 3 agents free
          before you buy.
        </p>

        {/* Monthly / Annual Toggle */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <span
            className={`text-sm font-medium ${
              !isAnnual ? "text-slate-900" : "text-slate-500"
            }`}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={isAnnual}
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
              isAnnual ? "bg-blue-600" : "bg-slate-300"
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-6 w-6 rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ease-in-out ${
                isAnnual ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium ${
              isAnnual ? "text-slate-900" : "text-slate-500"
            }`}
          >
            Annual
          </span>
          {isAnnual && (
            <span className="ml-1 inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
              Save 20%
            </span>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const displayPrice = isAnnual
              ? Math.round(plan.monthlyPrice * 0.8)
              : plan.monthlyPrice;

            return (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  plan.popular
                    ? "bg-gradient-to-b from-blue-600 to-violet-700 text-white shadow-2xl shadow-blue-500/30 scale-105 relative"
                    : "bg-white border border-slate-200 shadow-sm"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p
                  className={`text-sm mb-4 ${
                    plan.popular ? "text-blue-100" : "text-slate-500"
                  }`}
                >
                  {plan.desc}
                </p>
                <div className="mb-6">
                  {isAnnual ? (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span
                          className={`text-lg line-through ${
                            plan.popular ? "text-blue-300" : "text-slate-400"
                          }`}
                        >
                          ${plan.monthlyPrice}
                        </span>
                        <span
                          className={`text-sm line-through ${
                            plan.popular ? "text-blue-300" : "text-slate-400"
                          }`}
                        >
                          /mo
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold">
                          ${displayPrice}
                        </span>
                        <span
                          className={`text-sm ${
                            plan.popular ? "text-blue-200" : "text-slate-500"
                          }`}
                        >
                          /mo
                        </span>
                      </div>
                      <p
                        className={`text-xs mt-1 ${
                          plan.popular ? "text-blue-200" : "text-slate-400"
                        }`}
                      >
                        billed annually
                      </p>
                    </>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold">
                        ${plan.monthlyPrice}
                      </span>
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-blue-200" : "text-slate-500"
                        }`}
                      >
                        /mo
                      </span>
                    </div>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 ${
                          plan.popular ? "text-blue-200" : "text-blue-500"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition ${
                    plan.popular
                      ? "bg-white text-blue-700 hover:bg-blue-50"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
