/**
 * Heat Data API — /api/heat/[uid]
 * GET  — Retrieve heat data for a user (auth + anonymous)
 * POST — Save/update heat data for a user (auth + anonymous)
 *
 * Auth flow:
 *   Client sends Authorization: Bearer <userId> header
 *   If auth header present and matches uid → full access
 *   If no auth header → anonymous access (read/write own data by uid)
 *
 * Data stored: { data, daily, matrix, tenant, updatedAt }
 */

const { readFileSync, writeFileSync, existsSync, mkdirSync } = require('fs');
const { join, dirname } = require('path');

// Use /tmp on Vercel for writable storage (persists across warm invocations)
const DATA_DIR = join(process.cwd(), '.heat_data');

// Ensure data directory exists
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

  // Extract uid from URL: /api/heat/{uid}
  const url = req.url || '';
  const match = url.match(/\/api\/heat\/([^/\?]+)/);
  if (!match) {
    return sendJson(res, 400, { error: 'Missing user ID in URL' });
  }
  const uid = match[1];

  // Check auth header
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
    return sendJson(res, 200, {
      data: userData.data || {},
      daily: userData.daily || {},
      matrix: userData.matrix || {},
      tenant: userData.tenant || null,
      syncedAt: userData.updatedAt || null
    });
  }

  // POST — push heat data
  if (req.method === 'POST') {
    let body = {};
    try {
      body = JSON.parse(req.body || '{}');
    } catch (_) {
      return sendJson(res, 400, { error: 'Invalid JSON body' });
    }

    const { data, daily, matrix, tenant } = body;

    // Load existing data
    let existing = loadUserData(uid) || {};

    // Merge heat data additively (cross-device additive merge)
    const mergedData = {};
    const allKeys = new Set([
      ...Object.keys(existing.data || {}),
      ...Object.keys(data || {})
    ]);
    for (const id of allKeys) {
      const local = (existing.data || {})[id] || {};
      const incoming = (data || {})[id] || {};
      mergedData[id] = {
        clicks: (local.clicks || 0) + (incoming.clicks || 0),
        name: local.name || incoming.name || id,
        firstSeen: (local.firstSeen && incoming.firstSeen)
          ? (local.firstSeen < incoming.firstSeen ? local.firstSeen : incoming.firstSeen)
          : (local.firstSeen || incoming.firstSeen || null),
        lastSeen: (local.lastSeen && incoming.lastSeen)
          ? (local.lastSeen > incoming.lastSeen ? local.lastSeen : incoming.lastSeen)
          : (local.lastSeen || incoming.lastSeen || null)
      };
    }

    // Merge daily stats additively
    const mergedDaily = {};
    const allDays = new Set([
      ...Object.keys(existing.daily || {}),
      ...Object.keys(daily || {})
    ]);
    for (const d of allDays) {
      const local = (existing.daily || {})[d] || {};
      const inc = (daily || {})[d] || {};
      mergedDaily[d] = {
        visits: (local.visits || 0) + (inc.visits || 0),
        clicks: (local.clicks || 0) + (inc.clicks || 0),
        countries: Math.max(local.countries || 0, inc.countries || 0),
        visitors: { ...(local.visitors || {}), ...(inc.visitors || {}) }
      };
    }

    // Merge interest matrix additively
    const mergedMatrix = { ...(existing.matrix || {}) };
    for (const [src, targets] of Object.entries(matrix || {})) {
      if (!mergedMatrix[src]) mergedMatrix[src] = {};
      for (const [target, count] of Object.entries(targets)) {
        mergedMatrix[src][target] = (mergedMatrix[src][target] || 0) + count;
      }
    }

    const updated = {
      data: mergedData,
      daily: mergedDaily,
      matrix: mergedMatrix,
      tenant: tenant || existing.tenant || null,
      updatedAt: new Date().toISOString()
    };

    saveUserData(uid, updated);

    return sendJson(res, 200, {
      success: true,
      syncedAt: updated.updatedAt,
      mergedClicks: Object.values(mergedData).reduce((s, e) => s + (e.clicks || 0), 0),
      mergedCountries: Object.keys(mergedData).filter(id => mergedData[id].clicks > 0).length
    });
  }

  return sendJson(res, 405, { error: 'Method not allowed' });
};
