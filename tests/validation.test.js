'use strict';

// Exactly 20 dependency-free unit/integration tests. Run: npm test
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const validation = require('../validation.js');

let passed = 0;
let failed = 0;

async function test(name, fn) {
  try {
    await fn();
    passed += 1;
    console.log('  ✓ ' + name);
  } catch (error) {
    failed += 1;
    console.error('  ✗ ' + name + '\n    ' + error.message);
  }
}

function contactMail(config, extras) {
  const form = {
    addEventListener: () => {}, querySelectorAll: () => [], reset: () => {},
    from_name: { value: '' }, from_email: { value: '' }, subject: { value: '' }, message: { value: '' },
  };
  const status = { hidden: true, textContent: '', className: '' };
  const context = {
    window: { MENTROID_CONTACT: config, MentroidValidate: validation },
    document: { getElementById: id => id === 'contact-form' ? form : id === 'contact-form-status' ? status : null },
    console: { error: () => {} }, Promise, ...extras,
  };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '..', 'contact-form.js'), 'utf8'), context);
  return context.window.MentroidMail;
}

const contact = { from_name: 'Jane Smith', from_email: 'jane@example.com', subject: 'Project', message: 'Please contact me.' };
const quote = { name: 'Priya Sharma', email: 'priya@example.com', mobile: '+91 98765 43210', location: 'India', problem: 'We need a support chatbot.' };

(async () => {
  await test('1. accepts a normal email', () => assert.equal(validation.isValidEmail('jane@example.com'), true));
  await test('2. rejects malformed email', () => assert.equal(validation.isValidEmail('jane@example'), false));
  await test('3. rejects email over 254 characters', () => assert.equal(validation.isValidEmail('a'.repeat(250) + '@test.com'), false));
  await test('4. accepts international phone formatting', () => assert.equal(validation.isValidPhone('+91 (987) 654-3210'), true));
  await test('5. rejects a phone with too few digits', () => assert.equal(validation.isValidPhone('123456'), false));
  await test('6. rejects letters in a phone', () => assert.equal(validation.isValidPhone('987abc3210'), false));
  await test('7. accepts a Unicode name', () => assert.equal(validation.isValidName('中文名字'), true));
  await test('8. rejects an invalid name', () => assert.equal(validation.isValidName('1234'), false));
  await test('9. accepts required text at its length limit', () => assert.equal(validation.checkRequiredText('x'.repeat(10), 'a subject', { max: 10 }), null));
  await test('10. rejects required text over its length limit', () => assert.match(validation.checkRequiredText('x'.repeat(11), 'a subject', { max: 10 }), /too long/i));
  await test('11. accepts a valid contact request', () => assert.deepEqual(validation.validateContactForm(contact), { valid: true, field: null, message: null }));
  await test('12. rejects contact request without a name', () => assert.equal(validation.validateContactForm({ ...contact, from_name: '' }).field, 'from_name'));
  await test('13. rejects contact request with invalid email', () => assert.equal(validation.validateContactForm({ ...contact, from_email: 'bad' }).field, 'from_email'));
  await test('14. rejects a contact subject over 150 characters', () => assert.equal(validation.validateContactForm({ ...contact, subject: 'x'.repeat(151) }).field, 'subject'));
  await test('15. rejects a contact message over 5000 characters', () => assert.equal(validation.validateContactForm({ ...contact, message: 'x'.repeat(5001) }).field, 'message'));
  await test('16. accepts a valid quote request', () => assert.equal(validation.validateQuoteForm(quote).valid, true));
  await test('17. rejects quote request with non-numeric phone', () => assert.equal(validation.validateQuoteForm({ ...quote, mobile: 'call me' }).field, 'mobile'));
  await test('18. sends a successful EmailJS request', async () => {
    const calls = [];
    const mail = contactMail({ emailjs: { publicKey: 'key', serviceId: 'service', adminTemplateId: 'admin' } }, { emailjs: { init: arg => calls.push(['init', arg]), send: (...args) => { calls.push(['send', ...args]); return Promise.resolve(); } } });
    await mail.send(contact);
    assert.equal(calls[0][0], 'init');
    assert.equal(calls[0][1].publicKey, 'key');
    assert.deepEqual(calls[1].slice(0, 3), ['send', 'service', 'admin']);
    assert.equal(calls[1][3].from_email, contact.from_email);
  });
  await test('19. sends EmailJS confirmation when configured', async () => {
    const calls = [];
    const mail = contactMail({ toEmail: 'team@mentroid.test', emailjs: { publicKey: 'key', serviceId: 'service', adminTemplateId: 'admin', confirmationTemplateId: 'confirm' } }, { emailjs: { init: () => {}, send: (...args) => { calls.push(args); return Promise.resolve(); } } });
    await mail.send(contact);
    assert.equal(calls.length, 2);
    assert.deepEqual(calls[1].slice(0, 2), ['service', 'confirm']);
    assert.equal(calls[1][2].user_email, contact.from_email);
  });
  await test('20. rejects an unsuccessful Web3Forms API response', async () => {
    const mail = contactMail({ web3formsAccessKey: 'key' }, { fetch: () => Promise.resolve({ ok: false, json: () => Promise.resolve({ success: false, message: 'Invalid request' }) }) });
    await assert.rejects(() => mail.send(contact), /Invalid request/);
  });

  console.log(`\n${passed} passed, ${failed} failed (20 total)`);
  if (failed) process.exitCode = 1;
})();
