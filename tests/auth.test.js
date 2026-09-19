'use strict';

/**
 * Mentroid — Authentication & Authorization Test Suite
 * =====================================================
 * Zero-dependency unit and integration tests verifying:
 *  - Password strength validation & secure PBKDF2/SHA-256 salted hashing
 *  - No plaintext passwords or salts leaked in responses/sessions
 *  - Signed token generation, tampering protection, and expiration handling
 *  - Role-Based Access Control (visitor, client, admin)
 *  - Standard HTTP status codes (200, 201, 400, 401, 403, 404, 409)
 *  - Route guard enforcement for protected client and admin resources
 *  - Session management and logout
 */

const assert = require('node:assert/strict');
const auth = require('../auth.js');

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

(async () => {
  // Always start tests with a clean, seeded state
  auth.resetDatabase();

  console.log('\n--- Authentication & Authorization Tests ---');

  // 1. Password Strength Validation
  await test('1. accepts strong password meeting all complexity rules', () => {
    const res = auth.validatePasswordStrength('Mentroid@2026Secure!');
    assert.equal(res.valid, true);
  });

  await test('2. rejects password shorter than 8 characters', () => {
    const res = auth.validatePasswordStrength('Short1!');
    assert.equal(res.valid, false);
    assert.match(res.message, /at least 8 characters/i);
  });

  await test('3. rejects password missing uppercase, lowercase, numbers, or special chars', () => {
    assert.equal(auth.validatePasswordStrength('alllowercase123!').valid, false);
    assert.equal(auth.validatePasswordStrength('ALLUPPERCASE123!').valid, false);
    assert.equal(auth.validatePasswordStrength('NoSpecialChars123').valid, false);
    assert.equal(auth.validatePasswordStrength('NoNumbersHere!@#').valid, false);
  });

  // 2. Cryptographic Salt & Password Hashing
  await test('4. generates unique cryptographic salts for different invocations', () => {
    const salt1 = auth.generateSalt(16);
    const salt2 = auth.generateSalt(16);
    assert.notEqual(salt1, salt2);
    assert.equal(salt1.length, 32); // 16 bytes = 32 hex chars
  });

  await test('5. hashes password and produces different hashes for identical passwords with different salts', () => {
    const pwd = 'SharedPassword123!';
    const saltA = auth.generateSalt(16);
    const saltB = auth.generateSalt(16);
    const hashA = auth.hashPassword(pwd, saltA);
    const hashB = auth.hashPassword(pwd, saltB);
    assert.notEqual(hashA, hashB);
    assert.notEqual(hashA, pwd); // Plaintext is never stored
    assert.equal(auth.verifyPassword(pwd, saltA, hashA), true);
    assert.equal(auth.verifyPassword('WrongPassword123!', saltA, hashA), false);
  });

  // 3. User Registration (POST /api/auth/register)
  await test('6. rejects registration with missing or weak password (400 Bad Request)', () => {
    const res = auth.handleRequest({
      method: 'POST',
      url: '/api/auth/register',
      body: { name: 'Test User', email: 'test@mentroid.co.in', password: 'weak' },
    });
    assert.equal(res.status, 400);
    assert.match(res.error, /8 characters/i);
  });

  await test('7. registers a new user with valid credentials (201 Created) without exposing secrets', () => {
    const res = auth.handleRequest({
      method: 'POST',
      url: '/api/auth/register',
      body: {
        name: 'Jane Doe',
        email: 'jane.doe@enterprise.com',
        password: 'ValidPassword2026@!',
        role: 'client',
      },
    });
    assert.equal(res.status, 201);
    assert.equal(res.statusText, 'Created');
    assert.equal(res.data.user.email, 'jane.doe@enterprise.com');
    assert.equal(res.data.user.name, 'Jane Doe');
    assert.equal(res.data.user.role, 'client');
    // Ensure sensitive fields (password, passwordHash, salt) are NOT exposed in user payload
    assert.equal(res.data.user.password, undefined);
    assert.equal(res.data.user.passwordHash, undefined);
    assert.equal(res.data.user.salt, undefined);
  });

  await test('8. rejects duplicate email registration with conflict (409 Conflict)', () => {
    const res = auth.handleRequest({
      method: 'POST',
      url: '/api/auth/register',
      body: {
        name: 'Duplicate Jane',
        email: 'jane.doe@enterprise.com',
        password: 'ValidPassword2026@!',
      },
    });
    assert.equal(res.status, 409);
    assert.equal(res.statusText, 'Conflict');
    assert.match(res.error, /already exists/i);
  });

  // 4. User Login (POST /api/auth/login)
  await test('9. rejects login with invalid password (401 Unauthorized)', () => {
    const res = auth.handleRequest({
      method: 'POST',
      url: '/api/auth/login',
      body: { email: 'jane.doe@enterprise.com', password: 'WrongPassword!' },
    });
    assert.equal(res.status, 401);
    assert.equal(res.statusText, 'Unauthorized');
    assert.match(res.error, /invalid email or password/i);
  });

  await test('10. rejects login with non-existent email (401 Unauthorized)', () => {
    const res = auth.handleRequest({
      method: 'POST',
      url: '/api/auth/login',
      body: { email: 'nonexistent@nowhere.com', password: 'ValidPassword2026@!' },
    });
    assert.equal(res.status, 401);
    assert.match(res.error, /invalid email or password/i);
  });

  await test('11. logs in successfully with valid credentials and returns signed token (200 OK)', () => {
    const res = auth.handleRequest({
      method: 'POST',
      url: '/api/auth/login',
      body: { email: 'admin@mentroid.co.in', password: 'Admin@Mentroid2026!' },
    });
    assert.equal(res.status, 200);
    assert.equal(res.statusText, 'OK');
    assert.ok(res.data.token);
    assert.equal(res.data.user.role, 'admin');
    assert.equal(res.data.user.password, undefined);
    assert.equal(res.data.user.passwordHash, undefined);
  });

  // 5. Token Verification & Expiration
  await test('12. rejects tampered token with signature mismatch (401 Unauthorized)', () => {
    const validToken = auth.signToken({ sub: 'usr_123', email: 'tamper@test.com', role: 'client' });
    const parts = validToken.split('.');
    // Tamper with payload (modify role to admin)
    const tamperedPayload = Buffer.from(JSON.stringify({ sub: 'usr_123', email: 'tamper@test.com', role: 'admin' })).toString('base64url');
    const forgedToken = parts[0] + '.' + tamperedPayload + '.' + parts[2];

    const result = auth.verifyToken(forgedToken);
    assert.equal(result.valid, false);
    assert.equal(result.status, 401);
    assert.match(result.error, /invalid token signature/i);
  });

  await test('13. handles expired token gracefully and reports session expired (401 Unauthorized)', () => {
    // Generate token with 1 second TTL
    const shortToken = auth.signToken({ sub: 'usr_123', email: 'test@test.com' }, { expiresIn: 1 });
    // Verify in future (current time + 10s)
    const futureSec = Math.floor(Date.now() / 1000) + 10;
    const result = auth.verifyToken(shortToken, { currentTimeSec: futureSec });
    assert.equal(result.valid, false);
    assert.equal(result.expired, true);
    assert.equal(result.status, 401);
    assert.match(result.error, /session expired/i);
  });

  // 6. Protected Resources & Endpoint Authorization (RBAC)
  await test('14. blocks access to protected profile without token (401 Unauthorized)', () => {
    const res = auth.handleRequest({
      method: 'GET',
      url: '/api/auth/me',
    });
    assert.equal(res.status, 401);
    assert.match(res.error, /token required/i);
  });

  await test('15. grants access to profile when valid token provided (200 OK)', () => {
    const loginRes = auth.handleRequest({
      method: 'POST',
      url: '/api/auth/login',
      body: { email: 'client@mentroid.co.in', password: 'Client@Mentroid2026!' },
    });
    const token = loginRes.data.token;

    const meRes = auth.handleRequest({
      method: 'GET',
      url: '/api/auth/me',
      headers: { Authorization: 'Bearer ' + token },
    });
    assert.equal(meRes.status, 200);
    assert.equal(meRes.data.user.email, 'client@mentroid.co.in');
    assert.equal(meRes.data.user.role, 'client');
  });

  await test('16. grants client access to client portal resource (200 OK)', () => {
    const clientToken = auth.signToken({ sub: 'usr_client', role: 'client' });
    const res = auth.handleRequest({
      method: 'GET',
      url: '/api/protected/portal',
      headers: { Authorization: 'Bearer ' + clientToken },
    });
    assert.equal(res.status, 200);
    assert.ok(Array.isArray(res.data.projects));
  });

  await test('17. blocks non-admin client from admin-only endpoint (403 Forbidden)', () => {
    const clientToken = auth.signToken({ sub: 'usr_client', role: 'client' });
    const res = auth.handleRequest({
      method: 'GET',
      url: '/api/protected/admin',
      headers: { Authorization: 'Bearer ' + clientToken },
    });
    assert.equal(res.status, 403);
    assert.equal(res.statusText, 'Forbidden');
    assert.match(res.error, /forbidden|insufficient/i);
  });

  await test('18. grants admin access to admin-only endpoint (200 OK)', () => {
    const adminToken = auth.signToken({ sub: 'usr_admin', role: 'admin' });
    const res = auth.handleRequest({
      method: 'GET',
      url: '/api/protected/admin',
      headers: { Authorization: 'Bearer ' + adminToken },
    });
    assert.equal(res.status, 200);
    assert.equal(res.statusText, 'OK');
    assert.ok(res.data.recentInquiries);
  });

  await test('19. returns 404 Not Found for non-existent endpoint', () => {
    const res = auth.handleRequest({
      method: 'GET',
      url: '/api/protected/unknown-route',
    });
    assert.equal(res.status, 404);
  });

  // 7. Route Guarding & High-Level APIs
  await test('20. route guard denies unauthenticated access and allows authorized access', () => {
    auth.resetDatabase();

    // 1. When not logged in -> denied (401)
    let unauthorizedTriggered = false;
    const guardRes1 = auth.guardRoute({
      requiredRole: 'client',
      onUnauthorized: (err) => { unauthorizedTriggered = true; },
    });
    assert.equal(guardRes1.allowed, false);
    assert.equal(guardRes1.status, 401);
    assert.equal(unauthorizedTriggered, true);

    // 2. Log in as client
    auth.login('client@mentroid.co.in', 'Client@Mentroid2026!');
    assert.equal(auth.isAuthenticated(), true);

    // 3. Client checks client route -> allowed (200)
    let authorizedTriggered = false;
    const guardRes2 = auth.guardRoute({
      requiredRole: 'client',
      onAuthorized: (u) => { authorizedTriggered = true; },
    });
    assert.equal(guardRes2.allowed, true);
    assert.equal(guardRes2.status, 200);
    assert.equal(authorizedTriggered, true);

    // 4. Client attempts admin route -> forbidden (403)
    let forbiddenTriggered = false;
    const guardRes3 = auth.guardRoute({
      requiredRole: 'admin',
      onForbidden: (err) => { forbiddenTriggered = true; },
    });
    assert.equal(guardRes3.allowed, false);
    assert.equal(guardRes3.status, 403);
    assert.equal(forbiddenTriggered, true);

    // 5. Logout clears active session
    auth.logout();
    assert.equal(auth.isAuthenticated(), false);
    assert.equal(auth.getCurrentUser(), null);
  });

  console.log(`\n${passed} passed, ${failed} failed (20 total)`);
  if (failed) process.exitCode = 1;
})();
