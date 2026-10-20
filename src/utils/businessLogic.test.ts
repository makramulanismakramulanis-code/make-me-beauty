import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateNigerianPhone,
  getBusinessStatus,
  createWhatsAppBookingLink,
  DEFAULT_SCHEDULE
} from './businessLogic.ts';

test('validates standard Nigerian phone numbers', () => {
  // Test 11-digit local format
  const res1 = validateNigerianPhone('07071095500');
  assert.equal(res1.isValid, true);
  assert.equal(res1.normalized, '2347071095500');

  // Test formatted with spaces
  const res2 = validateNigerianPhone('+234 707 109 5500');
  assert.equal(res2.isValid, true);
  assert.equal(res2.normalized, '2347071095500');

  // Test invalid numbers
  const res3 = validateNigerianPhone('123456');
  assert.equal(res3.isValid, false);
  assert.match(res3.error || '', /valid Nigerian phone number/);

  // Test empty
  const res4 = validateNigerianPhone('');
  assert.equal(res4.isValid, false);
});

test('computes open/closed status correctly based on schedule', () => {
  // Tuesday at 14:30 (2:30 PM) -> Should be open
  const openDate = new Date(2026, 9, 20, 14, 30); // Oct 20, 2026 is a Tuesday
  const openStatus = getBusinessStatus(openDate, DEFAULT_SCHEDULE);
  assert.equal(openStatus.isOpen, true);
  assert.equal(openStatus.statusText, 'Open Now');
  assert.match(openStatus.detailText, /Closes at 7 PM/);

  // Tuesday at 21:00 (9:00 PM) -> Should be closed
  const closedEveningDate = new Date(2026, 9, 20, 21, 0);
  const closedStatus = getBusinessStatus(closedEveningDate, DEFAULT_SCHEDULE);
  assert.equal(closedStatus.isOpen, false);
  assert.equal(closedStatus.statusText, 'Closed Now');

  // Sunday at 12:00 PM -> Should be closed
  const sundayDate = new Date(2026, 9, 18, 12, 0); // Oct 18, 2026 is Sunday
  const sundayStatus = getBusinessStatus(sundayDate, DEFAULT_SCHEDULE);
  assert.equal(sundayStatus.isOpen, false);
  assert.equal(sundayStatus.statusText, 'Closed Today');
});

test('generates valid WhatsApp deep links with message', () => {
  const link = createWhatsAppBookingLink('2347071095500', 'Bridal Glam', 'Amina', '2026-10-25');
  assert.ok(link.startsWith('https://wa.me/2347071095500?text='));
  assert.ok(link.includes('Bridal%20Glam'));
  assert.ok(link.includes('Amina'));
  assert.ok(link.includes('2026-10-25'));
});
