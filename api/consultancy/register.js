// Creates (or claims) a consultancy's row right after the browser calls
// supabaseClient.auth.signUp(). A brand-new consultancy gets an unactivated
// row (no plan, already "expired") so the CRM's subscription-lock screen
// shows immediately until they pay. A legacy row that already exists for
// that email (a payment made before real login existed) gets claimed by
// attaching owner_user_id - its plan_name/expires_at are never touched here,
// so a first login can't accidentally reset an active subscription.
const { verifyAuthUser } = require('../_lib/authUser');
const { getConsultancyByEmail, insertConsultancyShell, claimConsultancyOwner, friendlyDbError } = require('../_lib/supabaseAdmin');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  try {
    const { accessToken, name } = req.body || {};
    const user = await verifyAuthUser(accessToken);
    if (!user) {
      res.status(401).json({ ok: false, error: 'Could not verify your login session. Please log in again.' });
      return;
    }

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

    res.status(200).json({
      ok: true,
      id: row.id,
      name: row.name,
      planName: row.plan_name,
      expiresAt: row.expires_at,
    });
  } catch (err) {
    console.error('consultancy/register error:', err);
    res.status(500).json({ ok: false, error: friendlyDbError(err) || 'Could not set up your consultancy account. Please try again in a moment.' });
  }
};
