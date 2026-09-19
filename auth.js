/**
 * Mentroid — Authentication & Authorization Engine
 * =================================================
 * Production-grade, zero-dependency authentication and authorization module.
 *
 * Implements:
 *  - Secure password hashing with unique cryptographic salts (no plaintext passwords stored).
 *  - Strict password strength validation policy.
 *  - Signed, tamper-evident tokens with expiration tracking (HMAC-SHA256).
 *  - Role-Based Access Control (RBAC) with visitor, client, and admin roles.
 *  - Standard HTTP status code responses (200, 201, 400, 401, 403, 404, 409).
 *  - Route guarding for private client and admin resources.
 *  - UMD module: works in Node.js (npm test) and in browser as window.MentroidAuth.
 */
(function (root, factory) {
  'use strict';
  var api = factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
  if (root) {
    root.MentroidAuth = api;
  }
})(typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  // Environment detection
  var isNode = typeof process !== 'undefined' && process.versions && !!process.versions.node;
  var nodeCrypto = null;
  if (isNode) {
    try {
      nodeCrypto = require('node:crypto');
    } catch (e) {
      nodeCrypto = null;
    }
  }

  /* ──────────────────────────────────────────────────────────────────────────
   * 1. Cryptographic Primitives (Pure JS SHA-256 & HMAC with Node.js acceleration)
   * ────────────────────────────────────────────────────────────────────────── */

  // Compact, RFC 6234 compliant SHA-256 implementation for synchronous cross-platform execution
  function sha256Pure(ascii) {
    var mathPow = Math.pow;
    var maxWord = mathPow(2, 32);
    var lengthProperty = 'length';
    var i, j;
    var result = '';
    var words = [];
    var asciiBitLength = ascii[lengthProperty] * 8;
    var hash = [];
    var k = [];
    var primeCounter = 0;

    var isPrime = function (n) {
      for (var factor = 2, max = Math.sqrt(n); factor <= max; factor++) {
        if (n % factor === 0) return false;
      }
      return true;
    };

    for (var candidate = 2; primeCounter < 64; candidate++) {
      if (isPrime(candidate)) {
        if (primeCounter < 8) {
          hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
        }
        k[primeCounter] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
        primeCounter++;
      }
    }

    words[asciiBitLength >> 5] |= 0x80 << (24 - (asciiBitLength % 32));
    words[(((asciiBitLength + 64) >> 9) << 4) + 15] = asciiBitLength;

    for (i = 0; i < ascii[lengthProperty]; i++) {
      words[i >> 2] |= ascii.charCodeAt(i) << (24 - (i % 4) * 8);
    }

    for (j = 0; j < words[lengthProperty]; j += 16) {
      var w = words.slice(j, j + 16);
      var oldHash = hash.slice(0);

      for (i = 0; i < 64; i++) {
        var w15 = w[i - 15], w2 = w[i - 2];
        var s0 = ((w15 >>> 7) | (w15 << 25)) ^ ((w15 >>> 18) | (w15 << 14)) ^ (w15 >>> 3);
        var s1 = ((w2 >>> 17) | (w2 << 15)) ^ ((w2 >>> 19) | (w2 << 13)) ^ (w2 >>> 10);
        if (i >= 16) {
          w[i] = (w[i - 16] + s0 + w[i - 7] + s1) | 0;
        }

        var s1_maj = ((hash[4] >>> 6) | (hash[4] << 26)) ^ ((hash[4] >>> 11) | (hash[4] << 21)) ^ ((hash[4] >>> 25) | (hash[4] << 7));
        var ch = (hash[4] & hash[5]) ^ (~hash[4] & hash[6]);
        var temp1 = (hash[7] + s1_maj + ch + k[i] + w[i]) | 0;
        var s0_ch = ((hash[0] >>> 2) | (hash[0] << 30)) ^ ((hash[0] >>> 13) | (hash[0] << 19)) ^ ((hash[0] >>> 22) | (hash[0] << 10));
        var maj = (hash[0] & hash[1]) ^ (hash[0] & hash[2]) ^ (hash[1] & hash[2]);
        var temp2 = (s0_ch + maj) | 0;

        hash = [(temp1 + temp2) | 0, hash[0], hash[1], hash[2], (hash[3] + temp1) | 0, hash[4], hash[5], hash[6]];
      }

      for (i = 0; i < 8; i++) {
        hash[i] = (hash[i] + oldHash[i]) | 0;
      }
    }

    for (i = 0; i < 8; i++) {
      for (j = 3; j >= 0; j--) {
        var b = (hash[i] >> (8 * j)) & 255;
        result += (b < 16 ? '0' : '') + b.toString(16);
      }
    }
    return result;
  }

  function sha256Hex(str) {
    if (nodeCrypto) {
      return nodeCrypto.createHash('sha256').update(str, 'utf8').digest('hex');
    }
    return sha256Pure(str);
  }

  function hmacSha256Hex(key, message) {
    if (nodeCrypto) {
      return nodeCrypto.createHmac('sha256', key).update(message, 'utf8').digest('hex');
    }
    var blockSize = 64;
    var keyBytes = [];
    if (key.length > blockSize) {
      var hashedKeyHex = sha256Hex(key);
      for (var i = 0; i < hashedKeyHex.length; i += 2) {
        keyBytes.push(parseInt(hashedKeyHex.substr(i, 2), 16));
      }
    } else {
      for (var k = 0; k < key.length; k++) {
        keyBytes.push(key.charCodeAt(k));
      }
    }
    while (keyBytes.length < blockSize) {
      keyBytes.push(0);
    }

    var oPad = '', iPad = '';
    for (var b = 0; b < blockSize; b++) {
      oPad += String.fromCharCode(keyBytes[b] ^ 0x5c);
      iPad += String.fromCharCode(keyBytes[b] ^ 0x36);
    }

    var innerHash = sha256Hex(iPad + message);
    var innerHashChars = '';
    for (var h = 0; h < innerHash.length; h += 2) {
      innerHashChars += String.fromCharCode(parseInt(innerHash.substr(h, 2), 16));
    }
    return sha256Hex(oPad + innerHashChars);
  }

  function base64UrlEncode(str) {
    var base64;
    if (typeof Buffer !== 'undefined') {
      base64 = Buffer.from(str, 'utf8').toString('base64');
    } else if (typeof btoa !== 'undefined') {
      base64 = btoa(unescape(encodeURIComponent(str)));
    } else {
      base64 = str;
    }
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }

  function base64UrlDecode(str) {
    var base64 = str.replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4) {
      base64 += '=';
    }
    if (typeof Buffer !== 'undefined') {
      return Buffer.from(base64, 'base64').toString('utf8');
    } else if (typeof atob !== 'undefined') {
      return decodeURIComponent(escape(atob(base64)));
    }
    return base64;
  }

  function generateSalt(length) {
    var byteLen = length || 16;
    if (nodeCrypto) {
      return nodeCrypto.randomBytes(byteLen).toString('hex');
    }
    if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
      var buf = new Uint8Array(byteLen);
      window.crypto.getRandomValues(buf);
      var hex = '';
      for (var i = 0; i < buf.length; i++) {
        hex += (buf[i] < 16 ? '0' : '') + buf[i].toString(16);
      }
      return hex;
    }
    var chars = '0123456789abcdef';
    var out = '';
    for (var j = 0; j < byteLen * 2; j++) {
      out += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return out;
  }

  function timingSafeEqual(a, b) {
    if (typeof a !== 'string' || typeof b !== 'string') return false;
    if (nodeCrypto && typeof Buffer !== 'undefined') {
      var bufA = Buffer.from(a);
      var bufB = Buffer.from(b);
      if (bufA.length !== bufB.length) return false;
      return nodeCrypto.timingSafeEqual(bufA, bufB);
    }
    if (a.length !== b.length) return false;
    var diff = 0;
    for (var i = 0; i < a.length; i++) {
      diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    return diff === 0;
  }

  /* ──────────────────────────────────────────────────────────────────────────
   * 2. Password Handling & Validation
   * ────────────────────────────────────────────────────────────────────────── */

  var HASH_ITERATIONS = 2048;

  function hashPassword(password, salt) {
    if (typeof password !== 'string' || typeof salt !== 'string') {
      throw new Error('Password and salt must be strings');
    }
    var current = password + ':' + salt;
    for (var i = 0; i < HASH_ITERATIONS; i++) {
      current = sha256Hex(current + ':' + salt);
    }
    return current;
  }

  function verifyPassword(password, salt, storedHash) {
    if (!password || !salt || !storedHash) return false;
    var computed = hashPassword(password, salt);
    return timingSafeEqual(computed, storedHash);
  }

  function validatePasswordStrength(password) {
    if (typeof password !== 'string') {
      return { valid: false, message: 'Password must be a string.' };
    }
    if (password.length < 8) {
      return { valid: false, message: 'Password must be at least 8 characters long.' };
    }
    if (password.length > 128) {
      return { valid: false, message: 'Password must not exceed 128 characters.' };
    }
    if (!/[A-Z]/.test(password)) {
      return { valid: false, message: 'Password must contain at least one uppercase letter.' };
    }
    if (!/[a-z]/.test(password)) {
      return { valid: false, message: 'Password must contain at least one lowercase letter.' };
    }
    if (!/[0-9]/.test(password)) {
      return { valid: false, message: 'Password must contain at least one number.' };
    }
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~`]/.test(password)) {
      return { valid: false, message: 'Password must contain at least one special character.' };
    }
    return { valid: true, message: 'Password meets security requirements.' };
  }

  /* ──────────────────────────────────────────────────────────────────────────
   * 3. Token & Session Management
   * ────────────────────────────────────────────────────────────────────────── */

  var TOKEN_SECRET = 'mentroid_auth_secret_k820fj39x_2026';
  var DEFAULT_TOKEN_TTL_SECONDS = 3600; // 1 hour

  function signToken(payload, options) {
    var opts = options || {};
    var secret = opts.secret || TOKEN_SECRET;
    var ttl = typeof opts.expiresIn === 'number' ? opts.expiresIn : DEFAULT_TOKEN_TTL_SECONDS;
    var nowSec = Math.floor(Date.now() / 1000);

    var header = { alg: 'HS256', typ: 'JWT' };
    var body = Object.assign({}, payload, {
      iat: nowSec,
      exp: nowSec + ttl,
    });

    var headerEncoded = base64UrlEncode(JSON.stringify(header));
    var bodyEncoded = base64UrlEncode(JSON.stringify(body));
    var message = headerEncoded + '.' + bodyEncoded;
    var signature = hmacSha256Hex(secret, message);
    var signatureEncoded = base64UrlEncode(signature);

    return headerEncoded + '.' + bodyEncoded + '.' + signatureEncoded;
  }

  function verifyToken(token, options) {
    var opts = options || {};
    var secret = opts.secret || TOKEN_SECRET;
    var nowSec = typeof opts.currentTimeSec === 'number' ? opts.currentTimeSec : Math.floor(Date.now() / 1000);

    if (typeof token !== 'string' || !token.trim()) {
      return { valid: false, error: 'Token is required', status: 401 };
    }

    var parts = token.split('.');
    if (parts.length !== 3) {
      return { valid: false, error: 'Malformed token structure', status: 401 };
    }

    var headerPart = parts[0];
    var bodyPart = parts[1];
    var signaturePart = parts[2];

    var message = headerPart + '.' + bodyPart;
    var expectedSignature = hmacSha256Hex(secret, message);
    var expectedSignatureEncoded = base64UrlEncode(expectedSignature);

    if (!timingSafeEqual(signaturePart, expectedSignatureEncoded)) {
      return { valid: false, error: 'Invalid token signature', status: 401 };
    }

    var payload;
    try {
      payload = JSON.parse(base64UrlDecode(bodyPart));
    } catch (e) {
      return { valid: false, error: 'Invalid token payload', status: 401 };
    }

    if (typeof payload.exp === 'number' && nowSec >= payload.exp) {
      return { valid: false, expired: true, error: 'Session expired. Please log in again.', status: 401 };
    }

    return { valid: true, payload: payload, status: 200 };
  }

  /* ──────────────────────────────────────────────────────────────────────────
   * 4. Role-Based Access Control (RBAC)
   * ────────────────────────────────────────────────────────────────────────── */

  var ROLES = {
    VISITOR: 'visitor',
    CLIENT: 'client',
    ADMIN: 'admin',
  };

  var ROLE_PERMISSIONS = {
    visitor: ['read:public'],
    client: ['read:public', 'read:profile', 'read:projects', 'submit:quote', 'access:client_portal'],
    admin: [
      'read:public',
      'read:profile',
      'read:projects',
      'submit:quote',
      'access:client_portal',
      'access:admin_portal',
      'manage:users',
      'manage:leads',
      'view:system_metrics',
    ],
  };

  function hasRole(user, role) {
    if (!user || !user.role) return false;
    if (user.role === ROLES.ADMIN) return true; // Admin inherits all permissions
    return user.role === role;
  }

  function hasPermission(user, permission) {
    if (!user || !user.role) return false;
    var perms = ROLE_PERMISSIONS[user.role] || [];
    return perms.indexOf(permission) !== -1;
  }

  function authorize(user, options) {
    var opts = options || {};
    if (!user) {
      return { authorized: false, status: 401, error: 'Authentication required' };
    }

    if (opts.requiredRole && !hasRole(user, opts.requiredRole)) {
      return {
        authorized: false,
        status: 403,
        error: 'Forbidden: Insufficient role permissions (requires ' + opts.requiredRole + ')',
      };
    }

    if (opts.requiredPermission && !hasPermission(user, opts.requiredPermission)) {
      return {
        authorized: false,
        status: 403,
        error: 'Forbidden: Lacks required permission (' + opts.requiredPermission + ')',
      };
    }

    return { authorized: true, status: 200 };
  }

  /* ──────────────────────────────────────────────────────────────────────────
   * 5. User Store & Session Storage
   * ────────────────────────────────────────────────────────────────────────── */

  var usersDb = [];
  var activeTokens = {};

  var STORAGE_KEY_TOKEN = 'mentroid_session_token';
  var STORAGE_KEY_USER = 'mentroid_session_user';
  var memoryStore = {};

  var storage = {
    getItem: function (key) {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          return window.localStorage.getItem(key);
        }
      } catch (e) {}
      return memoryStore[key] || null;
    },
    setItem: function (key, val) {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          window.localStorage.setItem(key, val);
          return;
        }
      } catch (e) {}
      memoryStore[key] = String(val);
    },
    removeItem: function (key) {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          window.localStorage.removeItem(key);
          return;
        }
      } catch (e) {}
      delete memoryStore[key];
    },
  };

  function sanitizeUser(user) {
    if (!user) return null;
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    };
  }

  function seedDemoUsers() {
    usersDb = [];
    var adminSalt = generateSalt(16);
    var adminHash = hashPassword('Admin@Mentroid2026!', adminSalt);
    usersDb.push({
      id: 'usr_admin_001',
      name: 'Mentroid Admin',
      email: 'admin@mentroid.co.in',
      role: ROLES.ADMIN,
      salt: adminSalt,
      passwordHash: adminHash,
      createdAt: '2026-01-01T00:00:00.000Z',
    });

    var clientSalt = generateSalt(16);
    var clientHash = hashPassword('Client@Mentroid2026!', clientSalt);
    usersDb.push({
      id: 'usr_client_002',
      name: 'Acme Corp Client',
      email: 'client@mentroid.co.in',
      role: ROLES.CLIENT,
      salt: clientSalt,
      passwordHash: clientHash,
      createdAt: '2026-02-01T00:00:00.000Z',
    });
  }

  function resetDatabase() {
    usersDb = [];
    activeTokens = {};
    memoryStore = {};
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(STORAGE_KEY_TOKEN);
        window.localStorage.removeItem(STORAGE_KEY_USER);
      }
    } catch (e) {}
    seedDemoUsers();
  }

  seedDemoUsers();

  /* ──────────────────────────────────────────────────────────────────────────
   * 6. HTTP API Dispatcher & Endpoint Handler
   * ────────────────────────────────────────────────────────────────────────── */

  function handleRequest(request) {
    var req = request || {};
    var method = (req.method || 'GET').toUpperCase();
    var url = req.url || '';
    var headers = req.headers || {};
    var body = req.body || {};

    var authHeader = headers.Authorization || headers.authorization || '';
    var token = null;
    if (authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7).trim();
    } else if (req.token) {
      token = req.token;
    }

    // POST /api/auth/register
    if (method === 'POST' && url === '/api/auth/register') {
      var name = (body.name || '').trim();
      var email = (body.email || '').trim().toLowerCase();
      var password = body.password || '';
      var role = body.role === ROLES.ADMIN ? ROLES.ADMIN : ROLES.CLIENT;

      if (!name || name.length < 2) {
        return { status: 400, statusText: 'Bad Request', error: 'Valid full name is required (min 2 characters).' };
      }
      var emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
      if (!email || !emailCheck) {
        return { status: 400, statusText: 'Bad Request', error: 'Valid email address is required.' };
      }

      var strength = validatePasswordStrength(password);
      if (!strength.valid) {
        return { status: 400, statusText: 'Bad Request', error: strength.message };
      }

      var existing = usersDb.find(function (u) {
        return u.email === email;
      });
      if (existing) {
        return {
          status: 409,
          statusText: 'Conflict',
          error: 'An account with this email address already exists.',
        };
      }

      var salt = generateSalt(16);
      var passwordHash = hashPassword(password, salt);
      var newUser = {
        id: 'usr_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
        name: name,
        email: email,
        role: role,
        salt: salt,
        passwordHash: passwordHash,
        createdAt: new Date().toISOString(),
      };
      usersDb.push(newUser);

      return {
        status: 201,
        statusText: 'Created',
        data: {
          user: sanitizeUser(newUser),
          message: 'User registration successful.',
        },
      };
    }

    // POST /api/auth/login
    if (method === 'POST' && url === '/api/auth/login') {
      var loginEmail = (body.email || '').trim().toLowerCase();
      var loginPassword = body.password || '';

      if (!loginEmail || !loginPassword) {
        return {
          status: 400,
          statusText: 'Bad Request',
          error: 'Email and password are required.',
        };
      }

      var user = usersDb.find(function (u) {
        return u.email === loginEmail;
      });

      var dummySalt = '00000000000000000000000000000000';
      var dummyHash = '0000000000000000000000000000000000000000000000000000000000000000';
      var isValid = user
        ? verifyPassword(loginPassword, user.salt, user.passwordHash)
        : verifyPassword(loginPassword, dummySalt, dummyHash);

      if (!user || !isValid) {
        return {
          status: 401,
          statusText: 'Unauthorized',
          error: 'Invalid email or password.',
        };
      }

      var tokenTtl = typeof body.expiresIn === 'number' ? body.expiresIn : DEFAULT_TOKEN_TTL_SECONDS;
      var signedToken = signToken(
        {
          sub: user.id,
          email: user.email,
          role: user.role,
          name: user.name,
        },
        { expiresIn: tokenTtl }
      );

      activeTokens[signedToken] = true;

      return {
        status: 200,
        statusText: 'OK',
        data: {
          token: signedToken,
          expiresIn: tokenTtl,
          user: sanitizeUser(user),
        },
      };
    }

    // POST /api/auth/logout
    if (method === 'POST' && url === '/api/auth/logout') {
      if (token) {
        delete activeTokens[token];
      }
      return {
        status: 200,
        statusText: 'OK',
        data: { message: 'Logged out successfully.' },
      };
    }

    // GET /api/auth/me
    if (method === 'GET' && url === '/api/auth/me') {
      if (!token) {
        return {
          status: 401,
          statusText: 'Unauthorized',
          error: 'Authentication token required.',
        };
      }
      var tokenVerification = verifyToken(token);
      if (!tokenVerification.valid) {
        return {
          status: tokenVerification.status || 401,
          statusText: 'Unauthorized',
          error: tokenVerification.error,
        };
      }
      var foundUser = usersDb.find(function (u) {
        return u.id === tokenVerification.payload.sub;
      });
      if (!foundUser) {
        return {
          status: 401,
          statusText: 'Unauthorized',
          error: 'User account no longer exists.',
        };
      }
      return {
        status: 200,
        statusText: 'OK',
        data: { user: sanitizeUser(foundUser) },
      };
    }

    // GET /api/protected/portal (Protected Client Resource)
    if (method === 'GET' && url === '/api/protected/portal') {
      if (!token) {
        return {
          status: 401,
          statusText: 'Unauthorized',
          error: 'Authentication required to access client portal.',
        };
      }
      var portalTokenCheck = verifyToken(token);
      if (!portalTokenCheck.valid) {
        return {
          status: 401,
          statusText: 'Unauthorized',
          error: portalTokenCheck.error,
        };
      }

      var clientAuth = authorize(portalTokenCheck.payload, { requiredPermission: 'access:client_portal' });
      if (!clientAuth.authorized) {
        return {
          status: clientAuth.status,
          statusText: clientAuth.status === 403 ? 'Forbidden' : 'Unauthorized',
          error: clientAuth.error,
        };
      }

      return {
        status: 200,
        statusText: 'OK',
        data: {
          title: 'Client Project Dashboard',
          projects: [
            { id: 'proj-01', title: 'AI SaaS Dashboard', status: 'In Production', tier: 'Enterprise' },
            { id: 'proj-02', title: 'Customer Support LLM', status: 'Testing', tier: 'Professional' },
          ],
          requestedQuotes: 3,
        },
      };
    }

    // GET /api/protected/admin (Protected Admin Resource)
    if (method === 'GET' && url === '/api/protected/admin') {
      if (!token) {
        return {
          status: 401,
          statusText: 'Unauthorized',
          error: 'Authentication required to access admin resources.',
        };
      }
      var adminTokenCheck = verifyToken(token);
      if (!adminTokenCheck.valid) {
        return {
          status: 401,
          statusText: 'Unauthorized',
          error: adminTokenCheck.error,
        };
      }

      var adminAuth = authorize(adminTokenCheck.payload, { requiredRole: ROLES.ADMIN });
      if (!adminAuth.authorized) {
        return {
          status: 403,
          statusText: 'Forbidden',
          error: adminAuth.error,
        };
      }

      return {
        status: 200,
        statusText: 'OK',
        data: {
          title: 'Mentroid Master Admin Panel',
          registeredUsersCount: usersDb.length,
          activeLeads: 12,
          systemStatus: 'Operational (100% uptime)',
          recentInquiries: [
            { id: 'inq-101', name: 'Dr. Sharma', email: 'sharma@hospital.org', subject: 'ECG Signal Classifier' },
            { id: 'inq-102', name: 'TechLabs Inc', email: 'founder@techlabs.io', subject: 'Custom Chatbot Development' },
          ],
        },
      };
    }

    return {
      status: 404,
      statusText: 'Not Found',
      error: 'Endpoint ' + method + ' ' + url + ' does not exist.',
    };
  }

  /* ──────────────────────────────────────────────────────────────────────────
   * 7. Client-Side High-Level Session & Route Guard APIs
   * ────────────────────────────────────────────────────────────────────────── */

  function login(email, password, options) {
    var res = handleRequest({
      method: 'POST',
      url: '/api/auth/login',
      body: { email: email, password: password, expiresIn: options && options.expiresIn },
    });

    if (res.status === 200 && res.data && res.data.token) {
      storage.setItem(STORAGE_KEY_TOKEN, res.data.token);
      storage.setItem(STORAGE_KEY_USER, JSON.stringify(res.data.user));
    }
    return res;
  }

  function register(userData) {
    return handleRequest({
      method: 'POST',
      url: '/api/auth/register',
      body: userData,
    });
  }

  function logout() {
    var token = storage.getItem(STORAGE_KEY_TOKEN);
    handleRequest({
      method: 'POST',
      url: '/api/auth/logout',
      token: token,
    });
    storage.removeItem(STORAGE_KEY_TOKEN);
    storage.removeItem(STORAGE_KEY_USER);
  }

  function getToken() {
    return storage.getItem(STORAGE_KEY_TOKEN);
  }

  function getCurrentUser() {
    var token = getToken();
    if (!token) return null;
    var verification = verifyToken(token);
    if (!verification.valid) {
      storage.removeItem(STORAGE_KEY_TOKEN);
      storage.removeItem(STORAGE_KEY_USER);
      return null;
    }
    try {
      var cached = storage.getItem(STORAGE_KEY_USER);
      return cached ? JSON.parse(cached) : verification.payload;
    } catch (e) {
      return verification.payload;
    }
  }

  function isAuthenticated() {
    return !!getCurrentUser();
  }

  function guardRoute(options) {
    var opts = options || {};
    var token = getToken();

    if (!token) {
      var unauthResult = {
        allowed: false,
        status: 401,
        user: null,
        error: 'Unauthorized: Authentication required to view this protected resource.',
      };
      if (typeof opts.onUnauthorized === 'function') {
        opts.onUnauthorized(unauthResult);
      }
      return unauthResult;
    }

    var tokenVerification = verifyToken(token);
    if (!tokenVerification.valid) {
      storage.removeItem(STORAGE_KEY_TOKEN);
      storage.removeItem(STORAGE_KEY_USER);
      var expiredResult = {
        allowed: false,
        status: 401,
        user: null,
        error: tokenVerification.error || 'Unauthorized: Invalid or expired session.',
      };
      if (typeof opts.onUnauthorized === 'function') {
        opts.onUnauthorized(expiredResult);
      }
      return expiredResult;
    }

    var user = getCurrentUser() || tokenVerification.payload;
    var authCheck = authorize(user, {
      requiredRole: opts.requiredRole,
      requiredPermission: opts.requiredPermission,
    });

    if (!authCheck.authorized) {
      var forbiddenResult = {
        allowed: false,
        status: authCheck.status,
        user: user,
        error: authCheck.error,
      };
      if (typeof opts.onForbidden === 'function') {
        opts.onForbidden(forbiddenResult);
      }
      return forbiddenResult;
    }

    var okResult = {
      allowed: true,
      status: 200,
      user: user,
      error: null,
    };
    if (typeof opts.onAuthorized === 'function') {
      opts.onAuthorized(user);
    }
    return okResult;
  }

  return {
    ROLES: ROLES,
    ROLE_PERMISSIONS: ROLE_PERMISSIONS,
    sha256Hex: sha256Hex,
    hmacSha256Hex: hmacSha256Hex,
    generateSalt: generateSalt,
    hashPassword: hashPassword,
    verifyPassword: verifyPassword,
    validatePasswordStrength: validatePasswordStrength,
    signToken: signToken,
    verifyToken: verifyToken,
    hasRole: hasRole,
    hasPermission: hasPermission,
    authorize: authorize,
    handleRequest: handleRequest,
    login: login,
    register: register,
    logout: logout,
    getToken: getToken,
    getCurrentUser: getCurrentUser,
    isAuthenticated: isAuthenticated,
    guardRoute: guardRoute,
    resetDatabase: resetDatabase,
    seedDemoUsers: seedDemoUsers,
  };
});
