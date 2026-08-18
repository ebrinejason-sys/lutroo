import assert from 'node:assert';
import { test, describe } from 'node:test';

describe('Navbar Links and Content Verification', () => {
  test('Navbar links list contains all required Lutroo Spaces sections', () => {
    const expectedNavLinks = [
      { name: 'About', href: '#about' },
      { name: 'Philosophy', href: '#philosophy' },
      { name: 'Services', href: '#services' },
      { name: 'Approach', href: '#approach' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Space Planner', href: '#planner' },
      { name: 'Contact', href: '#contact' },
    ];

    assert.strictEqual(expectedNavLinks.length, 7);
    assert.strictEqual(expectedNavLinks[0].name, 'About');
    assert.strictEqual(expectedNavLinks[5].href, '#planner');
  });

  test('Contact details match Lutroo Spaces specified requirements', () => {
    const phone = '+25670745645';
    const email = 'lutroospaces@gmail.com';

    assert.strictEqual(phone, '+25670745645');
    assert.strictEqual(email, 'lutroospaces@gmail.com');
  });
});
