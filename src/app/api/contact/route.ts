import { NextResponse } from "next/server";
import { site } from "@/data/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Enquiry endpoint.
 *
 * Delivery is via Resend, configured entirely through environment variables so
 * no credentials live in the repository:
 *
 *   RESEND_API_KEY   — required to enable delivery
 *   CONTACT_TO       — recipient (defaults to the published info@ address)
 *   CONTACT_FROM     — verified sender on your Resend domain
 *
 * With no key present the route returns `not_configured`, and the form falls
 * back to a pre-filled mailto link. An enquiry is never silently dropped.
 */

interface Payload {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  topic?: string;
  message?: string;
  variant?: string;
  /** Honeypot. Any value means a bot filled it in. */
  website?: string;
}

const MAX = { name: 120, company: 160, email: 200, phone: 40, topic: 60, message: 5000 };

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

/**
 * Small in-memory throttle. Serverless instances are not shared, so this only
 * blunts naive repeat submissions — put a WAF rule in front for anything more.
 */
const recent = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const LIMIT = 5;

function rateLimited(key: string): boolean {
  const now = Date.now();
  const hits = (recent.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(key, hits);
  if (recent.size > 5000) recent.clear();
  return hits.length > LIMIT;
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: accept the request so the bot sees success, but do nothing.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Please call the office." },
      { status: 429 },
    );
  }

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const message = clean(body.message, MAX.message);
  const company = clean(body.company, MAX.company);
  const phone = clean(body.phone, MAX.phone);
  const topic = clean(body.topic, MAX.topic);
  const variant = clean(body.variant, 20) || "general";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and a message are required." },
      { status: 400 },
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "That email address looks wrong." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        code: "not_configured",
        error: "Email delivery is not configured on this deployment.",
      },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO ?? site.email;
  const from = process.env.CONTACT_FROM ?? `Website <noreply@${new URL(site.url).hostname}>`;

  const text = [
    `New ${variant} enquiry from the website`,
    "",
    `Name:    ${name}`,
    `Company: ${company || "—"}`,
    `Email:   ${email}`,
    `Phone:   ${phone || "—"}`,
    `Topic:   ${topic || "—"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website enquiry — ${topic || variant} — ${name}`,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Resend delivery failed", res.status, detail);
      return NextResponse.json(
        { error: "We could not send that. Please call the office." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error", err);
    return NextResponse.json(
      { error: "We could not send that. Please call the office." },
      { status: 502 },
    );
  }
}
