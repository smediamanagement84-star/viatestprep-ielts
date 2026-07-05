// Consultancy account: GET looks up the caller's own plan/expiry (used right
// after login and right after a payment redirect), POST registers/claims a
// consultancy row right after supabaseClient.auth.signUp(). Merged from what
// used to be register.js + lookup.js into a single GET/POST file to stay
// under Vercel Hobby's 12-serverless-function-per-deployment cap.
//
// Both branches require the caller's Supabase Auth access token and derive
// the email from that verified token (never from a raw query param) -
// otherwise anyone could pass ?accessToken=<someone else's> or
// {consultancyEmail: 'someone-else@x.com'} and read/initiate a checkout
// under an email they don't own. Done server-side with the service role key
// so `consultancies` never needs a public RLS SELECT/INSERT policy for the
// anon key.
const { verifyAuthUser } = require('../_lib/authUser');
const {
  getConsultancyByEmail, insertConsultancyShell, claimConsultancyOwner, friendlyDbError,
} = require('../_lib/supabaseAdmin');

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const user = await verifyAuthUser(req.query.accessToken);
      if (!user) {
        res.status(401).json({ ok: false, error: 'Could not verify your login session. Please log in again.' });
        return;
      }

      const data = await getConsultancyByEmail(user.email);
      if (!data) {
        res.status(404).json({ ok: false, error: 'No consultancy found for that account' });
        return;
      }

      res.status(200).json({ ok: true, id: data.id, name: data.name, planName: data.plan_name, expiresAt: data.expires_at });
    } catch (err) {
      console.error('consultancy/account GET error:', err);
      res.status(500).json({ ok: false, error: friendlyDbError(err) || 'Could not look up consultancy. Please try again in a moment.' });
    }
    return;
  }

  if (req.method === 'POST') {
    try {
      const { accessToken, name } = req.body || {};
      const user = await verifyAuthUser(accessToken);
      if (!user) {
        res.status(401).json({ ok: false, error: 'Could not verify your login session. Please log in again.' });
        return;
      }

      // A brand-new consultancy gets an unactivated row (no plan, already
      // "expired") so the CRM's subscription-lock screen shows immediately
      // until they pay. A legacy row that already exists for that email (a
      // payment made before real login existed) gets claimed by attaching
      // owner_user_id - its plan_name/expires_at are never touched here, so
      // a first login can't accidentally reset an active subscription.
      let row = await getConsultancyByEmail(user.email);
      if (row && !row.owner_user_id) {
        row = await claimConsultancyOwner(row.id, user.id);
      } else if (!row) {
        row = await insertConsultancyShell({
          name: (name || '').trim() || user.email,
          email: user.email,
          owner_user_id: user.id,
        });
      }

      res.status(200).json({ ok: true, id: row.id, name: row.name, planName: row.plan_name, expiresAt: row.expires_at });
    } catch (err) {
      console.error('consultancy/account POST error:', err);
      res.status(500).json({ ok: false, error: friendlyDbError(err) || 'Could not set up your consultancy account. Please try again in a moment.' });
    }
    return;
  }

  res.status(405).json({ ok: false, error: 'Method not allowed' });
};
