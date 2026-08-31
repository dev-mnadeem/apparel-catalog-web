/**
 * Server-side order notification.
 *
 * The email and WhatsApp credentials used to be read as
 * `process.env.NEXT_PUBLIC_EMAIL_API_KEY` and
 * `process.env.NEXT_PUBLIC_WHATSAPP_ACCESS_TOKEN`, from code that runs in the
 * browser. `NEXT_PUBLIC_` is not a namespace — it is an instruction to Next.js
 * to inline the value into the client bundle. Both keys would have been
 * readable by anyone who opened devtools, and both were being sent from the
 * browser as `Authorization: Bearer …`.
 *
 * Nothing was leaked in practice, because no `.env` was ever committed and the
 * variables were never set. But the code required them to be set to work, so
 * the first successful deployment would have published them.
 *
 * The credentials are server-only now (no `NEXT_PUBLIC_` prefix, so Next.js
 * will not bundle them) and the browser posts here instead.
 */

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_API_KEY = process.env.EMAIL_API_KEY ?? "";
const EMAIL_SERVICE_URL = process.env.EMAIL_SERVICE_URL ?? "";
const WHATSAPP_ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN ?? "";
const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID ?? "";
const WHATSAPP_API_URL =
  process.env.WHATSAPP_API_URL ?? "https://graph.facebook.com/v18.0";

type Channel = "email" | "whatsapp";

interface NotifyResult {
  channel: Channel;
  sent: boolean;
  reason?: string;
}

async function sendEmail(order: unknown, to: string): Promise<NotifyResult> {
  if (!EMAIL_API_KEY || !EMAIL_SERVICE_URL) {
    return { channel: "email", sent: false, reason: "email is not configured" };
  }
  const res = await fetch(EMAIL_SERVICE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${EMAIL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ to, order }),
  });
  return { channel: "email", sent: res.ok, reason: res.ok ? undefined : `HTTP ${res.status}` };
}

async function sendWhatsApp(order: unknown, to: string): Promise<NotifyResult> {
  if (!WHATSAPP_ACCESS_TOKEN || !WHATSAPP_PHONE_NUMBER_ID) {
    return { channel: "whatsapp", sent: false, reason: "WhatsApp is not configured" };
  }
  const res = await fetch(`${WHATSAPP_API_URL}/${WHATSAPP_PHONE_NUMBER_ID}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { body: JSON.stringify(order) },
    }),
  });
  return { channel: "whatsapp", sent: res.ok, reason: res.ok ? undefined : `HTTP ${res.status}` };
}

export async function POST(request: NextRequest) {
  let payload: { order?: unknown; email?: string; phone?: string };
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Body must be JSON." }, { status: 400 });
  }

  const { order, email, phone } = payload;
  if (!order) {
    return NextResponse.json({ error: "An `order` is required." }, { status: 400 });
  }

  const results = await Promise.all([
    email ? sendEmail(order, email) : Promise.resolve<NotifyResult>({
      channel: "email", sent: false, reason: "no email address supplied",
    }),
    phone ? sendWhatsApp(order, phone) : Promise.resolve<NotifyResult>({
      channel: "whatsapp", sent: false, reason: "no phone number supplied",
    }),
  ]);

  // A notification failing must not fail the order. The customer has already
  // paid attention; losing their basket because an email provider is down
  // would be the worse outcome.
  return NextResponse.json({
    ok: true,
    delivered: results.filter((r) => r.sent).map((r) => r.channel),
    results,
  });
}
