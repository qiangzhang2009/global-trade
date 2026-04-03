/**
 * Auth API — /api/auth/{uid}
 * Simple token-based authentication for cross-device data sync
 */

const { readFileSync, writeFileSync, existsSync, mkdirSync } = require('fs');
const { join } = require('path');
const crypto = require('crypto');

const DATA_DIR = join(process.cwd(), '.auth_data');

function ensureDataDir() {
  try {
    if (!existsSync(DATA_DIR)) {
      mkdirSync(DATA_DIR, { recursive: true });
    }
  } catch (_) {}
}

function filePath(uid) {
  return join(DATA_DIR, `${uid}.json`);
}

function loadUser(uid) {
  try {
    const fp = filePath(uid);
    if (existsSync(fp)) {
      return JSON.parse(readFileSync(fp, 'utf8'));
    }
  } catch (_) {}
  return null;
}

function saveUser(uid, data) {
  ensureDataDir();
  writeFileSync(filePath(uid), JSON.stringify(data, null, 2), 'utf8');
}

function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}

function sendJson(res, status, body) {
  res.status(status).setHeader('Content-Type', 'application/json').end(JSON.stringify(body));
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return sendJson(res, 204, {});
  }

  // Extract uid from URL: /api/auth/{uid}
  const url = req.url || '';
  const match = url.match(/\/api\/auth\/([^/\?]+)/);
  if (!match) {
    return sendJson(res, 400, { error: 'Missing user ID in URL' });
  }
  const uid = match[1];

  const authHeader = req.headers['authorization'] || '';
  const token = authHeader.startsWith('Bearer ')
    ? authHeader.slice(7).trim()
    : null;

  // GET — verify token and get user info
  if (req.method === 'GET') {
    const user = loadUser(uid);
    if (!user) {
      return sendJson(res, 404, { error: 'User not found' });
    }
    if (token && token === user.token) {
      return sendJson(res, 200, {
        uid: user.uid,
        email: user.email,
        createdAt: user.createdAt,
        lastLogin: user.lastLogin
      });
    }
    return sendJson(res, 401, { error: 'Invalid token' });
  }

  // POST — create or update user (login/register)
  if (req.method === 'POST') {
    let body = {};
    try {
      if (req.body) {
        body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      }
    } catch (_) {
      body = {};
    }

    const { email } = body;

    if (!email) {
      return sendJson(res, 400, { error: 'Email is required' });
    }

    const existing = loadUser(uid);
    const newToken = generateToken();

    const userData = {
      uid,
      email,
      token: newToken,
      createdAt: existing?.createdAt || new Date().toISOString(),
      lastLogin: new Date().toISOString()
    };

    saveUser(uid, userData);

    return sendJson(res, 200, {
      success: true,
      uid,
      token: newToken
    });
  }

  sendJson(res, 405, { error: 'Method not allowed' });
};
