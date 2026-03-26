import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Webhook verification failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log(
        `[BILLING] New subscription: ${session.customer_email} — plan: ${session.metadata?.planId}`
      );
      // TODO: Provision user account, store subscription in DB
      // TODO: Send welcome email via Resend
      break;
    }

    case "customer.subscription.updated": {
      const sub = event.data.object as Stripe.Subscription;
      console.log(`[BILLING] Subscription updated: ${sub.id} — status: ${sub.status}`);
      break;
    }

    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      console.log(`[BILLING] Subscription cancelled: ${sub.id}`);
      // TODO: Revoke agent access
      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      console.log(`[BILLING] Payment failed: ${invoice.customer_email}`);
      // TODO: Send dunning email
      break;
    }

    default:
      console.log(`[BILLING] Unhandled event: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
