import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "node:crypto";

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
    signal: AbortSignal.timeout(8000),
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
    signal: AbortSignal.timeout(8000),
  });
  return { channel: "whatsapp", sent: res.ok, reason: res.ok ? undefined : `HTTP ${res.status}` };
}

export async function POST(request: NextRequest) {
  // Provider access is reserved for a server-side order integration.
  const token = process.env.NOTIFICATION_SERVICE_TOKEN || '';
  const supplied = request.headers.get('authorization') || '';
  if (!token) return NextResponse.json({ error: 'Notification service is unavailable.' }, { status: 503 });
  const expected = Buffer.from('Bearer ' + token);
  const received = Buffer.from(supplied);
  if (received.length !== expected.length || !timingSafeEqual(received, expected))
    return NextResponse.json({ error: 'Authorization required.' }, { status: 401 });
  const reader = request.body?.getReader();
  const chunks: Uint8Array[] = [];
  let length = 0;
  if (reader) {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > 16384) {
        await reader.cancel();
        return NextResponse.json({ error: 'Request is too large.' }, { status: 413 });
      }
      chunks.push(value);
    }
  }
  const bytes = Buffer.concat(chunks);
  let payload: { order?: unknown; email?: string; phone?: string };
  try { payload = JSON.parse(new TextDecoder().decode(bytes)); }
  catch { return NextResponse.json({ error: 'Body must be JSON.' }, { status: 400 }); }
  if (!payload || typeof payload !== 'object') return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  const { order, email, phone } = payload;
  if (!order || typeof order !== 'object' ||
      (email !== undefined && (typeof email !== 'string' || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) ||
      (phone !== undefined && (typeof phone !== 'string' || !/^\+?[0-9 -]{7,24}$/.test(phone))))
    return NextResponse.json({ error: 'Valid order and contact details are required.' }, { status: 400 });

  const results = await Promise.all([
    email ? sendEmail(order, email).catch(() => ({ channel: 'email', sent: false, reason: 'provider unavailable' } as NotifyResult)) : Promise.resolve<NotifyResult>({
      channel: "email", sent: false, reason: "no email address supplied",
    }),
    phone ? sendWhatsApp(order, phone).catch(() => ({ channel: 'whatsapp', sent: false, reason: 'provider unavailable' } as NotifyResult)) : Promise.resolve<NotifyResult>({
      channel: "whatsapp", sent: false, reason: "no phone number supplied",
    }),
  ]);

  return NextResponse.json({
    ok: true,
    delivered: results.filter((r) => r.sent).map((r) => r.channel),
    results,
  });
}
