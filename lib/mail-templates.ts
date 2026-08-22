import { buildEnquiry, type Brief, type EnquirySource } from './enquiry';
import { contact, studio } from './site';

export type MailConfig = {
  from: string;
  inbox: string;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function multiline(value: string): string {
  return escapeHtml(value).replaceAll('\n', '<br />');
}

function row(label: string, value: string): string {
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid #E4DFD5;width:38%;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#55514B;">${escapeHtml(label)}</td>
    <td style="padding:10px 0;border-bottom:1px solid #E4DFD5;font-size:16px;color:#1C1A17;">${multiline(value)}</td>
  </tr>`;
}

function layout(title: string, intro: string, body: string, footer: string): string {
  return `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:#F3F0EA;font-family:Georgia,'Times New Roman',serif;color:#1C1A17;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F3F0EA;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellspacing="0" cellpadding="0" style="max-width:560px;width:100%;background:#FCFBF8;border:1px solid #E4DFD5;">
            <tr>
              <td style="background:#2F3A33;padding:28px 32px;">
                <p style="margin:0;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#8C9C8B;">${escapeHtml(studio.name)}</p>
                <h1 style="margin:12px 0 0;font-size:28px;line-height:1.2;font-weight:400;color:#FCFBF8;">${escapeHtml(title)}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#55514B;">${escapeHtml(intro)}</p>
                ${body}
                <p style="margin:28px 0 0;font-size:14px;line-height:1.6;color:#55514B;">${footer}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function studioNotificationHtml(brief: Brief): string {
  const area = brief.areaSqm ? `${brief.areaSqm.toLocaleString('en-GB')} m²` : 'Not specified';
  const services = brief.services.length ? brief.services.join(', ') : 'To be discussed';
  const rows = [
    row('Name', brief.name),
    row('Email', brief.email),
    row('Phone', brief.phone?.trim() || 'Not provided'),
    row('Space / service', brief.spaceType),
    row('Area', area),
    row('Services', services),
  ].join('');

  const notes = brief.message?.trim()
    ? `<p style="margin:24px 0 8px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#55514B;">Notes</p>
       <p style="margin:0;font-size:16px;line-height:1.6;color:#1C1A17;">${multiline(brief.message.trim())}</p>`
    : '';

  return layout(
    'New studio enquiry',
    'A visitor sent this brief from the website. Reply directly to this email to reach them.',
    `<table role="presentation" width="100%" cellspacing="0" cellpadding="0">${rows}</table>${notes}`,
    `Sent from the ${studio.name} website.`
  );
}

export function visitorConfirmationHtml(brief: Brief): string {
  return layout(
    'We received your message',
    `Thank you, ${brief.name}. A senior designer at ${studio.name} will read your enquiry and reply within a day.`,
    `<p style="margin:0;font-size:16px;line-height:1.6;color:#1C1A17;">If anything is urgent, call or WhatsApp ${escapeHtml(contact.phoneDisplay)}.</p>`,
    `${escapeHtml(contact.location)} · ${escapeHtml(contact.hours)}`
  );
}

export function visitorConfirmationText(brief: Brief): string {
  return [
    `Thank you, ${brief.name}.`,
    '',
    `We have received your enquiry at ${studio.name}. A senior designer will reply within a day.`,
    '',
    `If anything is urgent, call or WhatsApp ${contact.phoneDisplay}.`,
    '',
    `${contact.location} · ${contact.hours}`,
  ].join('\n');
}

export function buildOutreachEmails(
  brief: Brief,
  config: MailConfig,
  source: EnquirySource
) {
  const { subject, body } = buildEnquiry(brief);
  const tag = source === 'planner' ? 'planner' : 'contact';

  return [
    {
      from: config.from,
      to: [config.inbox],
      replyTo: brief.email,
      subject,
      text: body,
      html: studioNotificationHtml(brief),
      tags: [
        { name: 'source', value: tag },
        { name: 'kind', value: 'studio-notification' },
      ],
    },
    {
      from: config.from,
      to: [brief.email],
      replyTo: config.inbox,
      subject: `We received your enquiry — ${studio.name}`,
      text: visitorConfirmationText(brief),
      html: visitorConfirmationHtml(brief),
      tags: [
        { name: 'source', value: tag },
        { name: 'kind', value: 'visitor-confirmation' },
      ],
    },
  ];
}
