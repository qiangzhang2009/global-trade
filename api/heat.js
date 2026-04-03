/**
 * Heat Data API — /api/heat/{uid}
 * Uses Supabase favorites table for heat data storage
 */

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

function sendJson(res, status, body) {
  res.status(status).setHeader('Content-Type', 'application/json').end(JSON.stringify(body));
}

// Load heat data from Supabase (using favorites table)
async function loadHeatData(uid) {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/favorites?user_id=eq.${encodeURIComponent(uid)}&select=*`,
    {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      }
    }
  );
  const data = await res.json();
  if (data && data.length > 0) {
    return data[0];
  }
  return null;
}

// Save heat data to Supabase (using favorites table as storage)
async function saveHeatData(uid, heatData) {
  const existing = await loadHeatData(uid);
  
  if (existing) {
    // Update existing
    await fetch(
      `${SUPABASE_URL}/rest/v1/favorites?user_id=eq.${encodeURIComponent(uid)}`,
      {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          favorites: heatData,
          updated_at: new Date().toISOString()
        })
      }
    );
  } else {
    // Insert new
    await fetch(
      `${SUPABASE_URL}/rest/v1/favorites`,
      {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          user_id: uid,
          favorites: heatData
        })
      }
    );
  }
  return { success: true };
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

  // GET — pull heat data
  if (req.method === 'GET') {
    try {
      const heatData = await loadHeatData(uid);
      if (!heatData || !heatData.favorites) {
        return sendJson(res, 200, { data: {}, daily: {}, matrix: {}, tenant: null, syncedAt: null });
      }
      const fav = heatData.favorites;
      return sendJson(res, 200, {
        data: fav.data || fav.heat_data || {},
        daily: fav.daily || fav.daily_data || {},
        matrix: fav.matrix || fav.matrix_data || {},
        tenant: fav.tenant || uid.split('_')[0] || 'globaltrade',
        syncedAt: heatData.updated_at
      });
    } catch (err) {
      console.error('Load error:', err);
      return sendJson(res, 500, { error: 'Failed to load heat data' });
    }
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

    try {
      await saveHeatData(uid, {
        data: data || {},
        daily: daily || {},
        matrix: matrix || {},
        tenant: tenant || uid.split('_')[0] || 'globaltrade'
      });
      return sendJson(res, 200, { success: true, uid, syncedAt: new Date().toISOString() });
    } catch (err) {
      console.error('Save error:', err);
      return sendJson(res, 500, { error: 'Failed to save heat data' });
    }
  }

  sendJson(res, 405, { error: 'Method not allowed' });
};
