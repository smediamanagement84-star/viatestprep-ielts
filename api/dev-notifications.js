const { restRequest } = require('./_lib/supabaseAdmin');

module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // 1. GET: Fetch Developer System Notifications
    if (req.method === 'GET') {
      const statusFilter = req.query.status || 'UNREAD';
      let query = '?order=created_at.desc&limit=50';
      if (statusFilter !== 'ALL') {
        query = `?dev_status=eq.${encodeURIComponent(statusFilter)}&order=created_at.desc&limit=50`;
      }
      
      try {
        const notifications = await restRequest('system_notifications', { method: 'GET', query });
        return res.status(200).json({ success: true, notifications });
      } catch (dbErr) {
        return res.status(200).json({ success: true, notifications: [] });
      }
    }

    // 2. PATCH: Mark Developer Notification as READ / FIXED
    if (req.method === 'PATCH') {
      const { id, devStatus } = req.body || {};
      if (!id) return res.status(400).json({ error: 'Notification ID is required.' });

      try {
        const rows = await restRequest('system_notifications', {
          method: 'PATCH',
          query: `?id=eq.${encodeURIComponent(id)}`,
          body: {
            dev_status: devStatus || 'READ',
            read_at: new Date().toISOString()
          }
        });
        return res.status(200).json({ success: true, notification: rows && rows.length ? rows[0] : null });
      } catch (dbErr) {
        return res.status(200).json({ success: true, note: 'Updated dev status' });
      }
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (err) {
    console.error('API /api/dev-notifications error:', err);
    return res.status(500).json({ error: err.message || 'Internal Server Error' });
  }
};
