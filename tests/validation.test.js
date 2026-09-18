/**
 * Mentroid — Validation Tests
 * ============================
 * Plain Node.js assertions against validation.js -- this project has no
 * build step and no test framework installed, so this is a dependency-free
 * test runner: run with `node tests/validation.test.js`. Exits with a
 * non-zero code if any assertion fails, so it can still be wired into CI
 * later without needing Jest/Mocha/etc.
 */
'use strict';

const assert = require('assert');
const path = require('path');
const {
  isValidEmail,
  isValidPhone,
  isValidName,
  checkRequiredText,
  validateContactForm,
  validateQuoteForm,
} = require(path.join(__dirname, '..', 'validation.js'));

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    passed++;
    console.log('  \u2713 ' + name);
  } catch (err) {
    failed++;
    console.error('  \u2717 ' + name);
    console.error('      ' + err.message);
  }
}

function section(title) {
  console.log('\n' + title);
}

// ---------------------------------------------------------------------
// isValidEmail
// ---------------------------------------------------------------------
section('isValidEmail');

test('accepts a normal email', () => {
  assert.strictEqual(isValidEmail('john@example.com'), true);
});
test('accepts an email with a subdomain and plus-tag', () => {
  assert.strictEqual(isValidEmail('john+test@mail.example.co.in'), true);
});
test('rejects missing @', () => {
  assert.strictEqual(isValidEmail('johnexample.com'), false);
});
test('rejects missing domain', () => {
  assert.strictEqual(isValidEmail('john@'), false);
});
test('rejects missing TLD', () => {
  assert.strictEqual(isValidEmail('john@example'), false);
});
test('rejects single-character TLD', () => {
  assert.strictEqual(isValidEmail('john@example.c'), false);
});
test('rejects spaces', () => {
  assert.strictEqual(isValidEmail('john doe@example.com'), false);
});
test('rejects empty string', () => {
  assert.strictEqual(isValidEmail(''), false);
});
test('rejects whitespace-only string', () => {
  assert.strictEqual(isValidEmail('   '), false);
});
test('rejects null', () => {
  assert.strictEqual(isValidEmail(null), false);
});
test('rejects undefined', () => {
  assert.strictEqual(isValidEmail(undefined), false);
});
test('rejects a non-string (number)', () => {
  assert.strictEqual(isValidEmail(12345), false);
});
test('rejects an overly long email (> 254 chars)', () => {
  const longLocal = 'a'.repeat(250);
  assert.strictEqual(isValidEmail(longLocal + '@example.com'), false);
});
test('trims surrounding whitespace before validating', () => {
  assert.strictEqual(isValidEmail('  john@example.com  '), true);
});

// ---------------------------------------------------------------------
// isValidPhone
// ---------------------------------------------------------------------
section('isValidPhone');

test('accepts a plain 10-digit number', () => {
  assert.strictEqual(isValidPhone('9876543210'), true);
});
test('accepts an international format with +', () => {
  assert.strictEqual(isValidPhone('+91 98765 43210'), true);
});
test('accepts a number with parentheses and dashes', () => {
  assert.strictEqual(isValidPhone('(987) 654-3210'), true);
});
test('rejects letters', () => {
  assert.strictEqual(isValidPhone('call me maybe'), false);
});
test('rejects too few digits', () => {
  assert.strictEqual(isValidPhone('12345'), false);
});
test('rejects too many digits', () => {
  assert.strictEqual(isValidPhone('1234567890123456'), false);
});
test('rejects empty string', () => {
  assert.strictEqual(isValidPhone(''), false);
});
test('rejects a string containing letters mixed with digits', () => {
  assert.strictEqual(isValidPhone('987abc3210'), false);
});
test('rejects null', () => {
  assert.strictEqual(isValidPhone(null), false);
});

// ---------------------------------------------------------------------
// isValidName
// ---------------------------------------------------------------------
section('isValidName');

test('accepts a simple two-part name', () => {
  assert.strictEqual(isValidName('John Doe'), true);
});
test('accepts a hyphenated name', () => {
  assert.strictEqual(isValidName('Mary-Jane'), true);
});
test('accepts an apostrophe in a name', () => {
  assert.strictEqual(isValidName("O'Connor"), true);
});
test('accepts a non-Latin-script name', () => {
  assert.strictEqual(isValidName('\u4e2d\u6587\u540d\u5b57'), true); // Chinese characters
});
test('rejects a purely numeric "name"', () => {
  assert.strictEqual(isValidName('12345'), false);
});
test('rejects a single character', () => {
  assert.strictEqual(isValidName('A'), false);
});
test('rejects symbols only', () => {
  assert.strictEqual(isValidName('####'), false);
});
test('rejects empty string', () => {
  assert.strictEqual(isValidName(''), false);
});
test('rejects a name over 100 characters', () => {
  assert.strictEqual(isValidName('A'.repeat(50) + ' ' + 'B'.repeat(51)), false);
});

// ---------------------------------------------------------------------
// checkRequiredText
// ---------------------------------------------------------------------
section('checkRequiredText');

test('returns null for valid non-empty text within the limit', () => {
  assert.strictEqual(checkRequiredText('Hello world', 'a message', { max: 100 }), null);
});
test('returns an error for empty text', () => {
  const err = checkRequiredText('', 'a subject', { max: 100 });
  assert.ok(err && /enter a subject/i.test(err));
});
test('returns an error for whitespace-only text', () => {
  const err = checkRequiredText('   ', 'a subject', { max: 100 });
  assert.ok(err && /enter a subject/i.test(err));
});
test('returns a "too long" error when the max length is exceeded', () => {
  const err = checkRequiredText('x'.repeat(101), 'a subject', { max: 100 });
  assert.ok(err && /too long/i.test(err));
});
test('accepts text exactly at the max length', () => {
  assert.strictEqual(checkRequiredText('x'.repeat(100), 'a subject', { max: 100 }), null);
});

// ---------------------------------------------------------------------
// validateContactForm — acceptance criteria: missing/invalid fields must
// not be treated as valid, and every case returns a clear, specific
// field + message so the UI can point at exactly what's wrong.
// ---------------------------------------------------------------------
section('validateContactForm');

const validContact = {
  from_name: 'Jane Smith',
  from_email: 'jane@example.com',
  subject: 'Project inquiry',
  message: 'I would like to discuss a chatbot project.',
};

test('accepts a fully valid submission', () => {
  const result = validateContactForm(validContact);
  assert.strictEqual(result.valid, true);
  assert.strictEqual(result.field, null);
});
test('rejects a missing name', () => {
  const result = validateContactForm(Object.assign({}, validContact, { from_name: '' }));
  assert.strictEqual(result.valid, false);
  assert.strictEqual(result.field, 'from_name');
});
test('rejects a numeric-only name', () => {
  const result = validateContactForm(Object.assign({}, validContact, { from_name: '12345' }));
  assert.strictEqual(result.valid, false);
  assert.strictEqual(result.field, 'from_name');
});
test('rejects a missing email', () => {
  const result = validateContactForm(Object.assign({}, validContact, { from_email: '' }));
  assert.strictEqual(result.valid, false);
  assert.strictEqual(result.field, 'from_email');
});
test('rejects a malformed email', () => {
  const result = validateContactForm(Object.assign({}, validContact, { from_email: 'not-an-email' }));
  assert.strictEqual(result.valid, false);
  assert.strictEqual(result.field, 'from_email');
});
test('rejects a missing subject', () => {
  const result = validateContactForm(Object.assign({}, validContact, { subject: '' }));
  assert.strictEqual(result.valid, false);
  assert.strictEqual(result.field, 'subject');
});
test('rejects an overly long subject', () => {
  const result = validateContactForm(Object.assign({}, validContact, { subject: 'x'.repeat(151) }));
  assert.strictEqual(result.valid, false);
  assert.strictEqual(result.field, 'subject');
});
test('rejects a missing message', () => {
  const result = validateContactForm(Object.assign({}, validContact, { message: '' }));
  assert.strictEqual(result.valid, false);
  assert.strictEqual(result.field, 'message');
});
test('rejects an overly long message', () => {
  const result = validateContactForm(Object.assign({}, validContact, { message: 'x'.repeat(5001) }));
  assert.strictEqual(result.valid, false);
  assert.strictEqual(result.field, 'message');
});
test('handles a completely empty payload without throwing', () => {
  const result = validateContactForm({});
  assert.strictEqual(result.valid, false);
  assert.strictEqual(result.field, 'from_name');
});
test('handles undefined payload without throwing', () => {
  const result = validateContactForm(undefined);
  assert.strictEqual(result.valid, false);
});

// ---------------------------------------------------------------------
// validateQuoteForm
// ---------------------------------------------------------------------
section('validateQuoteForm');

const validQuote = {
  name: 'Priya Sharma',
  email: 'priya@example.com',
  mobile: '+91 98765 43210',
  location: 'India',
  problem: 'We need a customer support chatbot for our e-commerce site.',
};

test('accepts a fully valid submission', () => {
  const result = validateQuoteForm(validQuote);
  assert.strictEqual(result.valid, true);
});
test('rejects a missing name', () => {
  const result = validateQuoteForm(Object.assign({}, validQuote, { name: '' }));
  assert.strictEqual(result.valid, false);
  assert.strictEqual(result.field, 'from_name');
});
test('rejects a missing/malformed email', () => {
  const result = validateQuoteForm(Object.assign({}, validQuote, { email: 'nope' }));
  assert.strictEqual(result.valid, false);
  assert.strictEqual(result.field, 'from_email');
});
test('rejects a missing mobile number', () => {
  const result = validateQuoteForm(Object.assign({}, validQuote, { mobile: '' }));
  assert.strictEqual(result.valid, false);
  assert.strictEqual(result.field, 'mobile');
});
test('rejects a mobile "number" that is actually text (previously accepted!)', () => {
  // Before this fix, any non-blank string passed as a mobile number --
  // this is the concrete "invalid value reaches business logic" bug this
  // issue is about.
  const result = validateQuoteForm(Object.assign({}, validQuote, { mobile: 'call me anytime' }));
  assert.strictEqual(result.valid, false);
  assert.strictEqual(result.field, 'mobile');
});
test('rejects a missing location', () => {
  const result = validateQuoteForm(Object.assign({}, validQuote, { location: '' }));
  assert.strictEqual(result.valid, false);
  assert.strictEqual(result.field, 'location');
});
test('rejects a missing problem statement', () => {
  const result = validateQuoteForm(Object.assign({}, validQuote, { problem: '' }));
  assert.strictEqual(result.valid, false);
  assert.strictEqual(result.field, 'problem_statement');
});
test('rejects an overly long problem statement', () => {
  const result = validateQuoteForm(Object.assign({}, validQuote, { problem: 'x'.repeat(3001) }));
  assert.strictEqual(result.valid, false);
  assert.strictEqual(result.field, 'problem_statement');
});
test('accepts optional fields when blank', () => {
  const result = validateQuoteForm(Object.assign({}, validQuote, {
    designation: '',
    general_details: '',
    solution: '',
  }));
  assert.strictEqual(result.valid, true);
});
test('rejects an overly long optional "general_details" field', () => {
  const result = validateQuoteForm(Object.assign({}, validQuote, { general_details: 'x'.repeat(1001) }));
  assert.strictEqual(result.valid, false);
  assert.strictEqual(result.field, 'general_details');
});
test('rejects an overly long optional "solution" field', () => {
  const result = validateQuoteForm(Object.assign({}, validQuote, { solution: 'x'.repeat(2001) }));
  assert.strictEqual(result.valid, false);
  assert.strictEqual(result.field, 'expected_solution');
});
test('handles a completely empty payload without throwing', () => {
  const result = validateQuoteForm({});
  assert.strictEqual(result.valid, false);
});

// ---------------------------------------------------------------------
console.log('\n' + '='.repeat(50));
console.log(`${passed} passed, ${failed} failed`);
console.log('='.repeat(50));

if (failed > 0) {
  process.exitCode = 1;
}
