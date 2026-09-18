/**
 * Mentroid — Shared Form Validation
 * ==================================
 * Pure, DOM-free validation logic shared by contact-form.js (contact form)
 * and script.js (Get a Quote modal). Both forms previously each rolled
 * their own inline `validate()` with slightly different rules and wording,
 * and neither enforced input length limits or a real phone-number format —
 * this file is the single source of truth for both, so validation errors
 * are consistent across the site.
 *
 * Deliberately has zero DOM dependencies (no `document`, no `window`
 * lookups) so it can be:
 *   - loaded as a plain <script> in index.html (sets window.MentroidValidate)
 *   - required directly in a plain Node script for testing, with no
 *     bundler/transpiler, matching this project's no-build-step setup
 *     (see tests/validation.test.js)
 */
(function (root, factory) {
  var api = factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.MentroidValidate = api;
  }
})(typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  // Reasonable, not overly strict, format checks. These intentionally
  // don't try to be a fully RFC-compliant email/phone parser -- just
  // enough to catch obviously-wrong input before it reaches EmailJS/
  // Web3Forms (this app's "business logic" / outgoing API calls).
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var PHONE_ALLOWED_CHARS_RE = /^[\d+\-\s()]+$/;
  var NAME_RE = /^[\p{L}][\p{L}\p{M}'\-. ]*$/u;

  var EMAIL_MAX_LENGTH = 254; // practical RFC 5321 limit
  var PHONE_MIN_DIGITS = 7;
  var PHONE_MAX_DIGITS = 15; // ITU E.164 upper bound

  function isString(value) {
    return typeof value === 'string';
  }

  function trimmed(value) {
    return isString(value) ? value.trim() : '';
  }

  function countDigits(value) {
    var matches = String(value).match(/\d/g);
    return matches ? matches.length : 0;
  }

  /** true/false format checks, exported for direct reuse/testing. */
  function isValidEmail(value) {
    if (!isString(value)) return false;
    var v = value.trim();
    return v.length > 0 && v.length <= EMAIL_MAX_LENGTH && EMAIL_RE.test(v);
  }

  function isValidPhone(value) {
    if (!isString(value)) return false;
    var v = value.trim();
    if (!v || !PHONE_ALLOWED_CHARS_RE.test(v)) return false;
    var digits = countDigits(v);
    return digits >= PHONE_MIN_DIGITS && digits <= PHONE_MAX_DIGITS;
  }

  function isValidName(value) {
    if (!isString(value)) return false;
    var v = value.trim();
    return v.length >= 2 && v.length <= 100 && NAME_RE.test(v);
  }

  /**
   * Generic "required text" check with a length ceiling. Returns an error
   * message string, or null when the value is acceptable.
   */
  function checkRequiredText(value, fieldDescription, options) {
    var opts = options || {};
    var max = typeof opts.max === 'number' ? opts.max : 2000;
    var v = trimmed(value);
    if (!v) {
      return 'Please enter ' + fieldDescription + '.';
    }
    if (v.length > max) {
      return (fieldDescription.charAt(0).toUpperCase() + fieldDescription.slice(1)) +
        ' is too long (max ' + max + ' characters).';
    }
    return null;
  }

  function checkName(value, fieldDescription) {
    var label = fieldDescription || 'your name';
    var v = trimmed(value);
    if (!v) return 'Please enter ' + label + '.';
    if (v.length > 100) return 'Name is too long (max 100 characters).';
    if (!isValidName(v)) return 'Please enter a valid ' + label.replace(/^your /, '') + ' (letters only).';
    return null;
  }

  function checkEmail(value) {
    var v = trimmed(value);
    if (!v) return 'Please enter your email address.';
    if (v.length > EMAIL_MAX_LENGTH) return 'Email address is too long.';
    if (!isValidEmail(v)) return 'Please enter a valid email address.';
    return null;
  }

  function checkPhone(value) {
    var v = trimmed(value);
    if (!v) return 'Please enter your mobile number.';
    if (!isValidPhone(v)) {
      return 'Please enter a valid mobile number (7-15 digits, digits/spaces/+/-/() only).';
    }
    return null;
  }

  /**
   * Validates the main contact form's field set.
   * @param {{from_name: string, from_email: string, subject: string, message: string}} values
   * @returns {{valid: boolean, field: string|null, message: string|null}}
   */
  function validateContactForm(values) {
    var v = values || {};

    var nameErr = checkName(v.from_name, 'your name');
    if (nameErr) return { valid: false, field: 'from_name', message: nameErr };

    var emailErr = checkEmail(v.from_email);
    if (emailErr) return { valid: false, field: 'from_email', message: emailErr };

    var subjectErr = checkRequiredText(v.subject, 'a subject', { max: 150 });
    if (subjectErr) return { valid: false, field: 'subject', message: subjectErr };

    var messageErr = checkRequiredText(v.message, 'your message', { max: 5000 });
    if (messageErr) return { valid: false, field: 'message', message: messageErr };

    return { valid: true, field: null, message: null };
  }

  /**
   * Validates the "Get a Quote" modal form's field set.
   * @param {{name: string, email: string, mobile: string, location: string,
   *          problem: string}} values
   * @returns {{valid: boolean, field: string|null, message: string|null}}
   */
  function validateQuoteForm(values) {
    var v = values || {};

    var nameErr = checkName(v.name, 'your full name');
    if (nameErr) return { valid: false, field: 'from_name', message: nameErr };

    var emailErr = checkEmail(v.email);
    if (emailErr) return { valid: false, field: 'from_email', message: emailErr };

    var phoneErr = checkPhone(v.mobile);
    if (phoneErr) return { valid: false, field: 'mobile', message: phoneErr };

    if (!trimmed(v.location)) {
      return { valid: false, field: 'location', message: 'Please select your location.' };
    }

    var problemErr = checkRequiredText(v.problem, 'your problem statement', { max: 3000 });
    if (problemErr) return { valid: false, field: 'problem_statement', message: problemErr };

    // Optional fields still get a length ceiling if the caller filled them
    // in, so an abusive/huge paste can't reach the outgoing email API.
    if (trimmed(v.general_details).length > 1000) {
      return { valid: false, field: 'general_details', message: 'Details are too long (max 1000 characters).' };
    }
    if (trimmed(v.solution).length > 2000) {
      return { valid: false, field: 'expected_solution', message: 'Expected solution is too long (max 2000 characters).' };
    }

    return { valid: true, field: null, message: null };
  }

  return {
    isValidEmail: isValidEmail,
    isValidPhone: isValidPhone,
    isValidName: isValidName,
    checkRequiredText: checkRequiredText,
    validateContactForm: validateContactForm,
    validateQuoteForm: validateQuoteForm,
  };
});
