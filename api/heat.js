/**
 * Heat Data API — /api/heat/{uid}
 * Dynamically handles any uid pattern
 */

const { readFileSync, writeFileSync, existsSync, mkdirSync } = require('fs');
const { join, dirname } = require('path');

const DATA_DIR = join(process.cwd(), '.heat_data');

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

function loadUserData(uid) {
  try {
    const fp = filePath(uid);
    if (existsSync(fp)) {
      return JSON.parse(readFileSync(fp, 'utf8'));
    }
  } catch (_) {}
  return null;
}

function saveUserData(uid, data) {
  ensureDataDir();
  writeFileSync(filePath(uid), JSON.stringify(data, null, 2), 'utf8');
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

  // Extract uid from URL: /api/heat/{uid} or /api/heat/{uid}?uid=xxx
  const url = req.url || '';
  const match = url.match(/\/api\/heat\/([^/\?]+)/);
  if (!match) {
    return sendJson(res, 400, { error: 'Missing user ID in URL' });
  }
  const uid = match[1];

  const authHeader = req.headers['authorization'] || '';
  const authUid = authHeader.startsWith('Bearer ')
    ? authHeader.slice(7).trim()
    : null;

  // GET — pull heat data
  if (req.method === 'GET') {
    const userData = loadUserData(uid);
    if (!userData) {
      return sendJson(res, 200, { data: {}, daily: {}, matrix: {}, tenant: null, syncedAt: null });
    }
    return sendJson(res, 200, userData);
  }

  // POST — save heat data
  if (req.method === 'POST') {
    let body = {};
    try {
      if (req.body) {
        body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      } else {
        const chunks = [];
        req.on('data', chunk => chunks.push(chunk));
        await new Promise(resolve => req.on('end', resolve));
        body = JSON.parse(Buffer.concat(chunks).toString() || '{}');
      }
    } catch (_) {
      body = {};
    }

    const { data, daily, matrix, tenant } = body;

    // If authenticated, only allow writing to own uid
    if (authUid && authUid !== uid) {
      return sendJson(res, 403, { error: 'Forbidden' });
    }

    const existing = loadUserData(uid) || {};
    const merged = {
      data: data || existing.data || {},
      daily: daily || existing.daily || {},
      matrix: matrix || existing.matrix || {},
      tenant: tenant || existing.tenant || null,
      updatedAt: new Date().toISOString()
    };

    saveUserData(uid, merged);
    return sendJson(res, 200, { success: true, uid, syncedAt: merged.updatedAt });
  }

  sendJson(res, 405, { error: 'Method not allowed' });
};
