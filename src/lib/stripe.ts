/**
 * Stripe configuration for AgentDesk billing.
 * Products and prices are created in Stripe Dashboard.
 */

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-03-25.dahlia",
  typescript: true,
});

export const PLANS = {
  starter: {
    name: "Starter",
    priceId: process.env.STRIPE_PRICE_STARTER!,
    agents: ["intake"],
    monthlyPrice: 99,
    taskLimit: 100,
  },
  professional: {
    name: "Professional",
    priceId: process.env.STRIPE_PRICE_PROFESSIONAL!,
    agents: ["intake", "proposal", "report"],
    monthlyPrice: 349,
    taskLimit: 500,
  },
  agency: {
    name: "Agency",
    priceId: process.env.STRIPE_PRICE_AGENCY!,
    agents: ["intake", "proposal", "report"],
    monthlyPrice: 799,
    taskLimit: -1, // unlimited
  },
} as const;

export type PlanId = keyof typeof PLANS;

export function getPlan(planId: string): (typeof PLANS)[PlanId] | undefined {
  return PLANS[planId as PlanId];
}
