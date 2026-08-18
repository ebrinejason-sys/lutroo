import { contact, studio } from './site';

export type Brief = {
  name: string;
  email: string;
  phone?: string;
  spaceType: string;
  areaSqm?: number;
  services: readonly string[];
  message?: string;
};

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
