import { Resend } from 'resend';
import {
  enquiryUnavailableMessage,
  type Brief,
  type EnquirySource,
} from './enquiry';
import { buildOutreachEmails, type MailConfig } from './mail-templates';
import { contact, studio } from './site';

export function getMailConfig(): MailConfig & { apiKey: string } {
  const from =
    process.env.EMAIL_FROM?.trim() || `${studio.name} <${contact.fromEmail}>`;
  const inbox = process.env.CONTACT_INBOX?.trim() || contact.email;
  const apiKey = process.env.RESEND_API_KEY?.trim() || '';
  return { from, inbox, apiKey };
}

export async function sendEnquiry(
  brief: Brief,
  source: EnquirySource = 'contact'
): Promise<{ ok: true } | { ok: false; error: string }> {
  const { apiKey, from, inbox } = getMailConfig();
  const unavailable = enquiryUnavailableMessage();

  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return { ok: false, error: unavailable };
  }

  const resend = new Resend(apiKey);
  const emails = buildOutreachEmails(brief, { from, inbox }, source);
  const { error } = await resend.batch.send(emails, {
    idempotencyKey: `enquiry/${source}/${brief.email}/${Date.now()}`,
  });

  if (error) {
    console.error('Resend batch error', error);
    return { ok: false, error: unavailable };
  }

  return { ok: true };
}
