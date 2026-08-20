import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { describe, test } from 'node:test';
import {
  contact,
  faqs,
  navigation,
  projectCategories,
  projects,
  services,
  spaceTypes,
  studio,
} from '../lib/site';

describe('contact details', () => {
  test('match the details the studio published', () => {
    assert.equal(contact.phone, '+25670745645');
    assert.equal(contact.email, 'lutroospaces@gmail.com');
  });

  test('the display number is the same number, just spaced', () => {
    assert.equal(contact.phoneDisplay.replace(/\s/g, ''), contact.phone);
  });
});

describe('services', () => {
  test('cover the published offerings', () => {
    assert.deepEqual(
      services.map((service) => service.title),
      [
        'Interior Design',
        'Landscaping',
        'Spatial Optimization',
        'Brand Space Design',
        'Site Visits',
        'Architectural Drawings',
        'Renovation and Revamping',
        'Site Supervision',
        'Design Consultation',
      ]
    );
  });

  test('are numbered in order and carry unique ids', () => {
    services.forEach((service, index) => {
      assert.equal(service.index, String(index + 1).padStart(2, '0'));
    });
    assert.equal(new Set(services.map((s) => s.id)).size, services.length);
  });

  test('every service is fully populated', () => {
    for (const service of services) {
      assert.ok(service.description.length > 20, `${service.title} needs a description`);
      assert.ok(service.detail.length > 40, `${service.title} needs detail copy`);
      assert.ok(service.deliverables.length >= 3, `${service.title} needs deliverables`);
      assert.match(service.image, /^https:\/\/images\.unsplash\.com\//);
    }
  });
});

describe('projects', () => {
  test('have unique ids and categories the filter can reach', () => {
    assert.equal(new Set(projects.map((p) => p.id)).size, projects.length);
    for (const project of projects) {
      assert.ok(
        projectCategories.includes(project.category),
        `${project.title} has an unfilterable category`
      );
    }
  });

  test('every filter option matches at least one project', () => {
    for (const category of projectCategories) {
      if (category === 'All') continue;
      assert.ok(
        projects.some((project) => project.category === category),
        `no project is tagged ${category}`
      );
    }
  });

  test('do not reuse the reference studios’ project names', () => {
    const borrowed = ['mirage', 'stonehaven', 'lofty skies', 'hermie', 'makao kwetu'];
    for (const project of projects) {
      const title = project.title.toLowerCase();
      assert.ok(
        !borrowed.some((name) => title.includes(name)),
        `${project.title} borrows a name from a reference site`
      );
    }
  });
});

describe('navigation', () => {
  const markup = readdirSync(new URL('../components', import.meta.url))
    .map((file) => readFileSync(new URL(`../components/${file}`, import.meta.url), 'utf8'))
    .join('\n');

  test('every link points at a section that a component actually renders', () => {
    for (const item of navigation) {
      const id = item.href.replace('#', '');
      assert.ok(
        markup.includes(`id="${id}"`),
        `nav links to #${id} but no component renders that id`
      );
    }
  });

  test('links are unique', () => {
    assert.equal(new Set(navigation.map((item) => item.href)).size, navigation.length);
  });
});

describe('content completeness', () => {
  test('the planner offers a space type for each kind of enquiry', () => {
    assert.ok(spaceTypes.length >= 4);
    assert.equal(new Set(spaceTypes.map((type) => type.id)).size, spaceTypes.length);
  });

  test('faq answers reference reachable contact details', () => {
    const combined = faqs.map((faq) => faq.answer).join(' ');
    assert.ok(combined.includes(contact.email));
    assert.ok(faqs.every((faq) => faq.answer.length > 40));
  });

  test('the studio summary keeps the published positioning', () => {
    assert.match(studio.summary, /multidisciplinary design studio/i);
    assert.match(studio.summary, /wellness-focused/i);
    assert.match(studio.summary, /create spaces that inspire/i);
    assert.equal(studio.tagline, 'Design. Refine. Elevate.');
    assert.equal(studio.promise, 'Elevating spaces into their truest potential');
    assert.doesNotMatch(studio.summary, /interiors and landscapes/i);
  });

  test('the hero speaks about spaces and the studio promise', () => {
    const hero = readFileSync(new URL('../components/Hero.tsx', import.meta.url), 'utf8');
    assert.match(hero, /wellness-focused spaces that blend/);
    assert.ok(!hero.includes('interiors and landscapes'));
    assert.match(hero, /studio\.promise/);
  });

  test('the brand mark knocks the window out instead of filling it black', () => {
    const mark = readFileSync(new URL('../components/BrandMark.tsx', import.meta.url), 'utf8');
    assert.match(mark, /fillRule="evenodd"/);
    assert.doesNotMatch(mark, /fill="#111"/);
  });
});
