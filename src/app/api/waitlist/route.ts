import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// In-memory store for MVP (replace with Vercel KV or Postgres in production)
const waitlist: Array<{ email: string; ts: string; ip: string }> = [];

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const email = body?.email?.trim()?.toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Valid email required" },
        { status: 400 }
      );
    }

    // Dedup
    if (waitlist.some((w) => w.email === email)) {
      return NextResponse.json({ success: true, message: "Already on the list!" });
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    waitlist.push({ email, ts: new Date().toISOString(), ip });

    // Send confirmation email
    if (resend) {
      await resend.emails.send({
        from: "AgentDesk <jacob@thewedgemethodai.com>",
        to: email,
        subject: "You're on the AgentDesk waitlist!",
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 520px; margin: 0 auto; padding: 32px;">
            <h1 style="font-size: 24px; color: #0f172a; margin-bottom: 16px;">Welcome to AgentDesk</h1>
            <p style="color: #475569; line-height: 1.6;">
              You're on the list! We'll notify you as soon as AgentDesk launches with early access.
            </p>
            <p style="color: #475569; line-height: 1.6;">
              AgentDesk gives professional services firms pre-built AI agents for client intake, proposals, and reports — automated in 5 minutes.
            </p>
            <div style="margin: 24px 0; padding: 16px; background: #f1f5f9; border-radius: 12px;">
              <p style="color: #334155; font-weight: 600; margin-bottom: 8px;">What you'll get:</p>
              <ul style="color: #475569; padding-left: 20px; line-height: 1.8;">
                <li>Intake Agent — qualifies leads and drafts responses instantly</li>
                <li>Proposal Agent — generates custom proposals from call notes</li>
                <li>Report Agent — creates executive reports automatically</li>
              </ul>
            </div>
            <p style="color: #475569; line-height: 1.6;">
              In the meantime, you can explore the dashboard at
              <a href="https://agentdesk-inky.vercel.app/dashboard" style="color: #2563eb;">agentdesk-inky.vercel.app/dashboard</a>
            </p>
            <p style="color: #94a3b8; font-size: 12px; margin-top: 32px;">
              WEDGE Method LLC &middot; jacob@thewedgemethodai.com
            </p>
          </div>
        `,
      }).catch((err) => {
        console.error("[WAITLIST] Email send failed:", err);
      });
    }

    // Notify admin
    if (resend) {
      await resend.emails.send({
        from: "AgentDesk <jacob@thewedgemethodai.com>",
        to: "jacob@thewedgemethodai.com",
        subject: `New AgentDesk waitlist signup: ${email}`,
        html: `<p>New signup: <strong>${email}</strong></p><p>Total waitlist: ${waitlist.length}</p><p>IP: ${ip}</p><p>Time: ${new Date().toISOString()}</p>`,
      }).catch(() => {});
    }

    console.log(`[WAITLIST] New signup: ${email} (total: ${waitlist.length})`);

    // Return JSON for fetch calls, redirect for form submissions
    const acceptsJson = req.headers.get("content-type")?.includes("application/json");
    if (acceptsJson) {
      return NextResponse.json({ success: true, message: "You're on the list!" });
    }
    return NextResponse.redirect(new URL("/?joined=true", req.url));
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    count: waitlist.length,
    message: "Waitlist API active",
  });
}
