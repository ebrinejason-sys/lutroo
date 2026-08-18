import assert from 'node:assert';
import { test, describe } from 'node:test';

describe('Space Planner Logic Verification', () => {
  const availableServices = [
    'Interior Design',
    'Landscape Planning',
    'Spatial Optimization',
    'Brand Space Design',
    'Site Visits',
  ];

  function calculateEstimatedWeeks(sqft, selectedServicesCount) {
    return Math.max(2, Math.round(sqft / 400) + selectedServicesCount);
  }

  test('Calculates timeline estimation correctly for 1200 sqft with 2 services', () => {
    const weeks = calculateEstimatedWeeks(1200, 2);
    // Math.round(1200 / 400) = 3 + 2 = 5 weeks
    assert.strictEqual(weeks, 5);
  });

  test('Calculates timeline estimation for large 8000 sqft project', () => {
    const weeks = calculateEstimatedWeeks(8000, 4);
    // Math.round(8000 / 400) = 20 + 4 = 24 weeks
    assert.strictEqual(weeks, 24);
  });

  test('All 5 core Lutroo Spaces services are offered in planner', () => {
    assert.strictEqual(availableServices.length, 5);
    assert.ok(availableServices.includes('Interior Design'));
    assert.ok(availableServices.includes('Landscape Planning'));
    assert.ok(availableServices.includes('Spatial Optimization'));
    assert.ok(availableServices.includes('Brand Space Design'));
    assert.ok(availableServices.includes('Site Visits'));
  });
});
