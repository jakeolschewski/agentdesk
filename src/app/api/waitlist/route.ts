import { NextRequest, NextResponse } from "next/server";

// In-memory store for MVP (replace with Vercel KV or Postgres in production)
const waitlist: Array<{ email: string; ts: string; ip: string }> = [];

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

    // TODO: Send confirmation email via Resend
    // TODO: Store in Vercel KV/Postgres
    // TODO: Notify admin via webhook

    console.log(`[WAITLIST] New signup: ${email} (total: ${waitlist.length})`);

    // Redirect back to landing page with success param
    return NextResponse.redirect(new URL("/?joined=true", req.url));
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Admin endpoint to see waitlist count
  return NextResponse.json({
    count: waitlist.length,
    message: "Waitlist API active",
  });
}
