import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import { type Brief } from '../lib/enquiry';
import {
  buildOutreachEmails,
  studioNotificationHtml,
  visitorConfirmationHtml,
} from '../lib/mail-templates';
import { contact, studio } from '../lib/site';

const brief: Brief = {
  name: 'Amara Nabbosa',
  email: 'amara@example.com',
  phone: '+256 700 000 000',
  spaceType: 'Home or residence',
  areaSqm: 240,
  services: ['Interior Design'],
  message: 'Make it feel calm. <script>alert(1)</script>',
};

describe('outreach emails', () => {
  const emails = buildOutreachEmails(
    brief,
    { from: `${studio.name} <${contact.fromEmail}>`, inbox: contact.email },
    'contact'
  );

  test('sends a studio notification and a visitor confirmation from the verified domain', () => {
    assert.equal(emails.length, 2);
    assert.ok(emails.every((email) => email.from.includes(contact.fromEmail)));
    assert.ok(!emails.some((email) => email.from.includes('resend.dev')));
    assert.deepEqual(emails[0].to, [contact.email]);
    assert.equal(emails[0].replyTo, brief.email);
    assert.deepEqual(emails[1].to, [brief.email]);
    assert.equal(emails[1].replyTo, contact.email);
  });

  test('escapes visitor copy so HTML cannot be injected into the studio email', () => {
    const html = studioNotificationHtml(brief);
    assert.ok(!html.includes('<script>'));
    assert.ok(html.includes('&lt;script&gt;alert(1)&lt;/script&gt;'));
    assert.ok(html.includes('Amara Nabbosa'));
  });

  test('confirmation names the visitor and the studio', () => {
    const html = visitorConfirmationHtml(brief);
    assert.ok(html.includes('Amara Nabbosa'));
    assert.ok(html.includes(studio.name));
    assert.ok(html.includes(contact.phoneDisplay));
  });
});
