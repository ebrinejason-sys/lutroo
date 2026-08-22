import { contact, studio } from './site';

export type EnquirySource = 'contact' | 'planner';

export type Brief = {
  name: string;
  email: string;
  phone?: string;
  spaceType: string;
  areaSqm?: number;
  services: readonly string[];
  message?: string;
};

export type ParsedEnquiry =
  | { ok: true; skipped: true }
  | { ok: true; skipped: false; brief: Brief; source: EnquirySource }
  | { ok: false; error: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const UNAVAILABLE_MESSAGE =
  'We could not send your message just then. Please try again, or reach us by phone or WhatsApp.';

function asString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function asServices(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item): item is string => typeof item === 'string')
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 12);
}

function asArea(value: unknown): number | undefined {
  const numeric = typeof value === 'number' ? value : Number(value);
  if (!Number.isFinite(numeric) || numeric <= 0) return undefined;
  return Math.min(Math.round(numeric), 100_000);
}

/**
 * Validates a contact or planner payload before it is handed to Resend.
 * A filled honeypot (`website`) is treated as a successful no-op so bots
 * do not learn that the trap exists.
 */
export function parseEnquiry(input: unknown): ParsedEnquiry {
  if (typeof input !== 'object' || input === null) {
    return { ok: false, error: 'Please complete the form and try again.' };
  }

  const data = input as Record<string, unknown>;
  if (asString(data.website)) {
    return { ok: true, skipped: true };
  }

  const name = asString(data.name);
  const email = asString(data.email).toLowerCase();
  const phone = asString(data.phone);
  const spaceType = asString(data.spaceType);
  const message = asString(data.message);
  const source: EnquirySource = data.source === 'planner' ? 'planner' : 'contact';
  const services = asServices(data.services);
  const areaSqm = asArea(data.areaSqm);

  if (name.length < 2 || name.length > 120) {
    return { ok: false, error: 'Please enter your full name.' };
  }
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return { ok: false, error: 'Please enter a valid email address.' };
  }
  if (phone.length > 40) {
    return { ok: false, error: 'Please enter a shorter phone number.' };
  }
  if (spaceType.length < 2 || spaceType.length > 120) {
    return { ok: false, error: 'Please choose a service or space type.' };
  }
  if (message.length > 4000) {
    return { ok: false, error: 'Please keep your message under 4,000 characters.' };
  }
  if (source === 'contact' && message.length < 8) {
    return { ok: false, error: 'Please add a short note so we know how to help.' };
  }

  return {
    ok: true,
    skipped: false,
    source,
    brief: {
      name,
      email,
      phone: phone || undefined,
      spaceType,
      areaSqm,
      services: services.length ? services : [spaceType],
      message: message || undefined,
    },
  };
}

export function enquiryUnavailableMessage() {
  return UNAVAILABLE_MESSAGE;
}

/**
 * Indicative design programme, concept through to documented design.
 * Deliberately returned as a range so it never reads as a quotation.
 */
export function estimateTimeline(
  areaSqm: number,
  serviceCount: number
): { min: number; max: number } {
  const area = Number.isFinite(areaSqm) ? Math.max(0, areaSqm) : 0;
  const count = Math.max(1, Math.floor(serviceCount));
  const weeks = 4 + Math.round(area / 120) + (count - 1);
  const min = Math.min(Math.max(weeks, 4), 26);
  return { min, max: min + 3 };
}

export function buildEnquiry(brief: Brief): { subject: string; body: string } {
  const area = brief.areaSqm ? `${brief.areaSqm.toLocaleString('en-GB')} m²` : 'Not specified';
  const subject = `Consultation request — ${brief.spaceType}`;

  const lines = [
    `Name: ${brief.name}`,
    `Email: ${brief.email}`,
    `Phone: ${brief.phone?.trim() || 'Not provided'}`,
    '',
    `Space type: ${brief.spaceType}`,
    `Approximate area: ${area}`,
    `Services: ${brief.services.length ? brief.services.join(', ') : 'To be discussed'}`,
  ];

  if (brief.message?.trim()) {
    lines.push('', 'Notes:', brief.message.trim());
  }

  lines.push('', `Sent from the ${studio.name} website`);

  return { subject, body: lines.join('\n') };
}

export function mailtoHref(brief: Brief): string {
  const { subject, body } = buildEnquiry(brief);
  return `mailto:${contact.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

export function whatsappHref(brief?: Brief): string {
  const number = contact.phone.replace(/\D/g, '');
  if (!brief) return `https://wa.me/${number}`;
  const { subject, body } = buildEnquiry(brief);
  return `https://wa.me/${number}?text=${encodeURIComponent(`${subject}\n\n${body}`)}`;
}
