import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import { getMailConfig } from '../lib/mail';
import { contact, studio } from '../lib/site';

describe('getMailConfig', () => {
  test('defaults to the verified lutroospaces.com sender and the Gmail inbox', () => {
    const previous = {
      RESEND_API_KEY: process.env.RESEND_API_KEY,
      EMAIL_FROM: process.env.EMAIL_FROM,
      CONTACT_INBOX: process.env.CONTACT_INBOX,
    };

    delete process.env.RESEND_API_KEY;
    delete process.env.EMAIL_FROM;
    delete process.env.CONTACT_INBOX;

    try {
      const config = getMailConfig();
      assert.equal(config.from, `${studio.name} <${contact.fromEmail}>`);
      assert.equal(config.inbox, contact.email);
      assert.equal(config.apiKey, '');
      assert.match(config.from, /@lutroospaces\.com>/);
    } finally {
      for (const [key, value] of Object.entries(previous)) {
        if (value === undefined) delete process.env[key];
        else process.env[key] = value;
      }
    }
  });
});
