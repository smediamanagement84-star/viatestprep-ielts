// Looks up a consultancy's own plan/expiry - used right after login and
// right after a payment redirect. Requires the caller's Supabase Auth access
// token and derives the email from that verified token (never from a raw
// query param) - otherwise anyone could call ?email=someone-else@x.com and
// read that consultancy's billing info with no auth at all. Done server-side
// with the service role key so `consultancies` never needs a public RLS
// SELECT policy for the anon key to read directly.
const { verifyAuthUser } = require('../_lib/authUser');
const { getConsultancyByEmail, friendlyDbError } = require('../_lib/supabaseAdmin');

module.exports = async (req, res) => {
  try {
    const accessToken = req.query.accessToken || (req.body && req.body.accessToken);
    const user = await verifyAuthUser(accessToken);
    if (!user) {
      res.status(401).json({ ok: false, error: 'Could not verify your login session. Please log in again.' });
      return;
    }

    const data = await getConsultancyByEmail(user.email);
    if (!data) {
      res.status(404).json({ ok: false, error: 'No consultancy found for that account' });
      return;
    }

    res.status(200).json({
      ok: true,
      id: data.id,
      name: data.name,
      planName: data.plan_name,
      expiresAt: data.expires_at,
    });
  } catch (err) {
    console.error('consultancy/lookup error:', err);
    res.status(500).json({ ok: false, error: friendlyDbError(err) || 'Could not look up consultancy. Please try again in a moment.' });
  }
};
