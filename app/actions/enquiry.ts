'use server';

import { enquiryUnavailableMessage, parseEnquiry } from '@/lib/enquiry';
import { sendEnquiry } from '@/lib/mail';

export type EnquiryResult = { ok: true } | { ok: false; error: string };

export async function submitEnquiry(input: unknown): Promise<EnquiryResult> {
  const parsed = parseEnquiry(input);
  if (!parsed.ok) return parsed;
  if (parsed.skipped) return { ok: true };

  try {
    return await sendEnquiry(parsed.brief, parsed.source);
  } catch (error) {
    console.error('Enquiry send failed', error);
    return { ok: false, error: enquiryUnavailableMessage() };
  }
}
