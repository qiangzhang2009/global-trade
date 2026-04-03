/**
 * Auth API — /api/auth
 * Handles user signup and login for cross-device data sync.
 * Stores: email, passwordHash, userId (UUID), createdAt
 *
 * POST /api/auth/signup — { email, password }
 * POST /api/auth/login  — { email, password }
 *
 * All responses are JSON. No cookies/sessions — client stores token in localStorage.
 */

const crypto = require('crypto');
const { readFileSync, writeFileSync, existsSync } = require('fs');
const { join } = require('path');

// Vercel serverless: use /tmp or current dir for storage
const STORE_FILE = join(process.cwd(), '.user_store.json');

function loadStore() {
  try {
    if (existsSync(STORE_FILE)) {
      return JSON.parse(readFileSync(STORE_FILE, 'utf8'));
    }
  } catch (_) {}
  return { users: {} };
}

function saveStore(store) {
  writeFileSync(STORE_FILE, JSON.stringify(store, null, 2), 'utf8');
}

function hashPassword(password, salt) {
  return crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
}

function generateId(prefix) {
  return prefix + '_' + Date.now().toString(36) + '_' + crypto.randomBytes(8).toString('hex');
}

function sendJson(res, status, body) {
  res.status(status).setHeader('Content-Type', 'application/json').end(JSON.stringify(body));
}

module.exports = async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return sendJson(res, 204, {});
  }

  const url = req.url || '';
  // Route: /api/auth/signup or /api/auth/login
  let action = 'unknown';
  if (url.includes('/signup')) action = 'signup';
  else if (url.includes('/login')) action = 'login';
  else return sendJson(res, 404, { error: 'Not found' });

  if (req.method !== 'POST') {
    return sendJson(res, 405, { error: 'Method not allowed' });
  }

  let body = {};
  try {
    body = JSON.parse(req.body || '{}');
  } catch (_) {
    return sendJson(res, 400, { error: 'Invalid JSON body' });
  }

  const { email, password } = body;

  // Validate inputs
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return sendJson(res, 400, { error: 'Invalid email address' });
  }
  if (!password || password.length < 6) {
    return sendJson(res, 400, { error: 'Password must be at least 6 characters' });
  }

  const store = loadStore();
  const emailKey = email.toLowerCase().trim();

  if (action === 'signup') {
    if (store.users[emailKey]) {
      return sendJson(res, 409, { error: 'Email already registered' });
    }

    const salt = crypto.randomBytes(32).toString('hex');
    const passwordHash = hashPassword(password, salt);
    const userId = generateId('u'); // stable cross-device UUID

    store.users[emailKey] = {
      email: emailKey,
      passwordHash,
      salt,
      userId,
      createdAt: new Date().toISOString()
    };
    saveStore(store);

    return sendJson(res, 200, {
      success: true,
      userId,
      email: emailKey,
      message: 'Account created. Your data will now sync across all your devices.'
    });
  }

  if (action === 'login') {
    const user = store.users[emailKey];
    if (!user) {
      return sendJson(res, 401, { error: 'Email not found' });
    }

    const hash = hashPassword(password, user.salt);
    if (hash !== user.passwordHash) {
      return sendJson(res, 401, { error: 'Incorrect password' });
    }

    return sendJson(res, 200, {
      success: true,
      userId: user.userId,
      email: user.email,
      message: 'Login successful. Your data is now synced across all devices.'
    });
  }
};
