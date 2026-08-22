import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import {
  buildEnquiry,
  estimateTimeline,
  mailtoHref,
  parseEnquiry,
  whatsappHref,
  type Brief,
} from '../lib/enquiry';
import { contact } from '../lib/site';

const brief: Brief = {
  name: 'Amara Nabbosa',
  email: 'amara@example.com',
  phone: '+256 700 000 000',
  spaceType: 'Home or residence',
  areaSqm: 240,
  services: ['Interior Design', 'Spatial Optimization'],
  message: 'Ground floor only, we want it to feel calm.',
};

describe('estimateTimeline', () => {
  test('grows with area and with the number of services', () => {
    const small = estimateTimeline(60, 1);
    const larger = estimateTimeline(600, 1);
    const broader = estimateTimeline(60, 4);

    assert.ok(larger.min > small.min, 'more area should mean a longer programme');
    assert.ok(broader.min > small.min, 'more services should mean a longer programme');
  });

  test('always returns a forward range of at least four weeks', () => {
    for (const area of [0, 20, 250, 1000, 100_000]) {
      const { min, max } = estimateTimeline(area, 1);
      assert.ok(min >= 4, `min should never drop below four weeks (area ${area})`);
      assert.ok(max > min, `max should sit above min (area ${area})`);
    }
  });

  test('caps the lower bound so the estimate never looks absurd', () => {
    assert.equal(estimateTimeline(1_000_000, 5).min, 26);
  });

  test('survives junk input rather than returning NaN', () => {
    const { min, max } = estimateTimeline(Number.NaN, 0);
    assert.ok(Number.isFinite(min) && Number.isFinite(max));
    assert.equal(min, 4);
  });
});

describe('buildEnquiry', () => {
  test('carries every field of the brief into the message', () => {
    const { subject, body } = buildEnquiry(brief);

    assert.match(subject, /Home or residence/);
    assert.match(body, /Amara Nabbosa/);
    assert.match(body, /amara@example\.com/);
    assert.match(body, /\+256 700 000 000/);
    assert.match(body, /240 m²/);
    assert.match(body, /Interior Design, Spatial Optimization/);
    assert.match(body, /Ground floor only/);
  });

  test('marks missing optional fields instead of leaving blanks', () => {
    const { body } = buildEnquiry({ ...brief, phone: '   ', areaSqm: undefined });

    assert.match(body, /Phone: Not provided/);
    assert.match(body, /Approximate area: Not specified/);
  });

  test('omits the notes block when there is nothing to say', () => {
    const { body } = buildEnquiry({ ...brief, message: '  ' });
    assert.ok(!body.includes('Notes:'));
  });
});

describe('link builders', () => {
  test('mailto targets the studio inbox and encodes the payload', () => {
    const href = mailtoHref(brief);

    assert.ok(href.startsWith(`mailto:${contact.email}?`));
    assert.ok(!href.includes('\n'), 'newlines must be percent-encoded');
    assert.ok(href.includes('subject=') && href.includes('body='));
  });

  test('whatsapp link strips non-digits from the studio number', () => {
    assert.equal(whatsappHref(), `https://wa.me/${contact.phone.replace(/\D/g, '')}`);
    assert.ok(whatsappHref(brief).includes('?text='));
  });
});

describe('parseEnquiry', () => {
  const valid = {
    name: 'Amara Nabbosa',
    email: 'Amara@Example.com',
    spaceType: 'Interior Design',
    services: ['Interior Design'],
    message: 'We want the living room to feel calm.',
    source: 'contact',
  };

  test('normalises a valid contact payload', () => {
    const parsed = parseEnquiry(valid);
    assert.equal(parsed.ok, true);
    if (!parsed.ok || parsed.skipped) throw new Error('expected a brief');
    assert.equal(parsed.source, 'contact');
    assert.equal(parsed.brief.email, 'amara@example.com');
    assert.equal(parsed.brief.name, 'Amara Nabbosa');
  });

  test('rejects a contact note that is too short', () => {
    const parsed = parseEnquiry({ ...valid, message: 'Hi' });
    assert.equal(parsed.ok, false);
  });

  test('allows a planner brief without notes', () => {
    const parsed = parseEnquiry({ ...valid, source: 'planner', message: '' });
    assert.equal(parsed.ok, true);
    if (!parsed.ok || parsed.skipped) throw new Error('expected a brief');
    assert.equal(parsed.source, 'planner');
    assert.equal(parsed.brief.message, undefined);
  });

  test('swallows a filled honeypot as a silent success', () => {
    const parsed = parseEnquiry({ ...valid, website: 'https://spam.test' });
    assert.deepEqual(parsed, { ok: true, skipped: true });
  });

  test('rejects an invalid email', () => {
    const parsed = parseEnquiry({ ...valid, email: 'not-an-email' });
    assert.equal(parsed.ok, false);
  });
});
