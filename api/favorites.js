/**
 * Favorites API — /api/favorites/{uid}
 * Uses Supabase for cross-device favorites sync
 */

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

function sendJson(res, status, body) {
  res.status(status).setHeader('Content-Type', 'application/json').end(JSON.stringify(body));
}

// GET — fetch favorites from Supabase
async function getFavorites(userId) {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/favorites?user_id=eq.${encodeURIComponent(userId)}&select=favorites`,
    {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      }
    }
  );
  const data = await res.json();
  if (data && data.length > 0) {
    return data[0].favorites;
  }
  return [];
}

// POST — save favorites to Supabase (upsert)
async function saveFavorites(userId, favorites) {
  // First try to update existing record
  const updateRes = await fetch(
    `${SUPABASE_URL}/rest/v1/favorites?user_id=eq.${encodeURIComponent(userId)}`,
    {
      method: 'PATCH',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({
        favorites: favorites,
        updated_at: new Date().toISOString()
      })
    }
  );

  // If no rows updated, insert new record
  if (updateRes.status === 200 || updateRes.status === 204) {
    const data = await updateRes.json();
    const count = Array.isArray(data) ? data.length : 0;
    if (count === 0) {
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
            user_id: userId,
            favorites: favorites
          })
        }
      );
    }
  } else {
    // If PATCH failed (404 case), try insert directly
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
          user_id: userId,
          favorites: favorites
        })
      }
    );
  }

  return { success: true, count: favorites.length };
}

// DELETE — clear favorites from Supabase
async function deleteFavorites(userId) {
  await fetch(
    `${SUPABASE_URL}/rest/v1/favorites?user_id=eq.${encodeURIComponent(userId)}`,
    {
      method: 'DELETE',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Prefer': 'return=minimal'
      }
    }
  );
  return { success: true };
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return sendJson(res, 204, {});
  }

  // Extract uid from URL: /api/favorites/{uid}
  const url = req.url || '';
  const match = url.match(/\/api\/favorites\/([^/\?]+)/);
  if (!match) {
    return sendJson(res, 400, { error: 'Missing user ID in URL' });
  }
  const userId = match[1];

  // GET — fetch favorites
  if (req.method === 'GET') {
    try {
      const favorites = await getFavorites(userId);
      return sendJson(res, 200, {
        favorites: favorites || [],
        syncedAt: new Date().toISOString()
      });
    } catch (err) {
      console.error('Supabase GET error:', err);
      return sendJson(res, 500, { error: 'Failed to fetch favorites' });
    }
  }

  // POST — save favorites (full replacement)
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

    const { favorites } = body;

    if (!Array.isArray(favorites)) {
      return sendJson(res, 400, { error: 'favorites must be an array' });
    }

    try {
      const result = await saveFavorites(userId, favorites);
      return sendJson(res, 200, {
        ...result,
        syncedAt: new Date().toISOString()
      });
    } catch (err) {
      console.error('Supabase POST error:', err);
      return sendJson(res, 500, { error: 'Failed to save favorites' });
    }
  }

  // DELETE — clear favorites
  if (req.method === 'DELETE') {
    try {
      const result = await deleteFavorites(userId);
      return sendJson(res, 200, {
        ...result,
        syncedAt: new Date().toISOString()
      });
    } catch (err) {
      console.error('Supabase DELETE error:', err);
      return sendJson(res, 500, { error: 'Failed to delete favorites' });
    }
  }

  sendJson(res, 405, { error: 'Method not allowed' });
};
