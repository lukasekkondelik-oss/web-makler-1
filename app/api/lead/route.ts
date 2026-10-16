import { NextResponse } from "next/server";

export const runtime = "nodejs";

const clean = (v: unknown, max = 2000) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let raw: Record<string, unknown>;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // honeypot: boti vyplní skryté pole – tváříme se, že vše prošlo
  if (clean(raw.website)) return NextResponse.json({ ok: true });

  const lead = {
    name: clean(raw.name, 120),
    phone: clean(raw.phone, 40),
    email: clean(raw.email, 160),
    type: clean(raw.type, 40),
    address: clean(raw.address, 200),
    message: clean(raw.message),
    source: clean(raw.source, 60),
    page: clean(raw.page, 200),
    consent: raw.consent === "on" || raw.consent === true,
    createdAt: new Date().toISOString(),
  };

  if (!lead.name || !lead.phone || !lead.consent) {
    return NextResponse.json({ ok: false, error: "missing" }, { status: 422 });
  }

  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) {
    // bez nastaveného webhooku poptávku jen zalogujeme (Vercel Logs)
    console.log("[lead]", JSON.stringify(lead));
    return NextResponse.json({ ok: true });
  }

  try {
    const r = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.LEAD_WEBHOOK_SECRET
          ? { "X-Webhook-Secret": process.env.LEAD_WEBHOOK_SECRET }
          : {}),
      },
      body: JSON.stringify(lead),
    });
    if (!r.ok) throw new Error(String(r.status));
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[lead] webhook failed", e);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
