import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const NAME_REGEX = /^[a-zA-Z\s'-]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const contactSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, 'First name must be at least 2 characters')
    .max(100)
    .regex(NAME_REGEX, 'Use only letters, spaces, hyphens, or apostrophes')
    .refine((s: string) => !/[0-9]/.test(s), 'Names cannot contain numbers'),
  lastName: z
    .string()
    .trim()
    .min(2, 'Last name must be at least 2 characters')
    .max(100)
    .regex(NAME_REGEX, 'Use only letters, spaces, hyphens, or apostrophes')
    .refine((s: string) => !/[0-9]/.test(s), 'Names cannot contain numbers'),
  email: z.string().trim().regex(EMAIL_REGEX, 'Enter a valid email address'),
  service: z.string().trim().min(1, 'Service selection is required').max(100),
  message: z.string().trim().min(20, 'Message must be at least 20 characters').max(5000),
});

export type ContactPayload = z.infer<typeof contactSchema>;

function getResend() {
  return new Resend(process.env.RESEND_API_KEY!);
}

function buildEmailHtml(payload: ContactPayload): string {
  return `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.firstName)} ${escapeHtml(payload.lastName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Service:</strong> ${escapeHtml(payload.service)}</p>
    <h3>Message</h3>
    <p>${escapeHtml(payload.message).replace(/\n/g, '<br>')}</p>
  `.trim();
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  const toEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.FROM_EMAIL ?? 'onboarding@resend.dev';
  const fromName = process.env.FROM_NAME ?? 'Kalekye Contact';
  const isDev = process.env.NODE_ENV === 'development';

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return NextResponse.json(
      {
        error: isDev
          ? 'RESEND_API_KEY is not set. Add it to .env.local (see .env.example).'
          : 'Server configuration error',
      },
      { status: 500 },
    );
  }

  if (!toEmail) {
    console.error('CONTACT_EMAIL is not set');
    return NextResponse.json(
      {
        error: isDev
          ? 'CONTACT_EMAIL is not set. Add it to .env.local (see .env.example).'
          : 'Server configuration error',
      },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const firstError = parsed.error.flatten().fieldErrors;
    const message = Object.values(firstError).flat().join(' ') || 'Validation failed';
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const payload = parsed.data;
  const html = buildEmailHtml(payload);

  const resend = getResend();
  const { data, error } = await resend.emails.send({
    from: `${fromName} <${fromEmail}>`,
    to: [toEmail],
    replyTo: payload.email,
    subject: `Contact: ${payload.firstName} ${payload.lastName} – ${payload.service}`,
    html,
  });

  if (error) {
    console.error('Resend error:', error);
    const message = isDev && error?.message ? error.message : 'Failed to send email';
    return NextResponse.json({ error: message }, { status: 500 });
  }

  return NextResponse.json({ id: data?.id, ok: true }, { status: 200 });
}
