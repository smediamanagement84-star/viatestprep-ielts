// Daily keep-alive. Supabase's free tier PAUSES a project after about a week
// without activity, and a paused project makes every login fail (its web
// address stops existing). Vercel calls this once a day (see "crons" in
// vercel.json); the tiny read below counts as activity.
//
// Optional: set CRON_SECRET in Vercel and Vercel will send it automatically,
// so only Vercel's scheduler can trigger this.
const { restRequest } = require('./_lib/supabaseAdmin');

module.exports = async (req, res) => {
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && (req.headers.authorization || '') !== 'Bearer ' + cronSecret) {
    res.status(401).json({ ok: false, error: 'Unauthorized' });
    return;
  }
  try {
    await restRequest('students', { method: 'GET', query: '?select=id&limit=1' });
    res.status(200).json({ ok: true, at: new Date().toISOString() });
  } catch (err) {
    console.error('keepalive: Supabase unreachable:', err);
    res.status(500).json({ ok: false, error: 'Supabase unreachable' });
  }
};
