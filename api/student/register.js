// Creates a free, self-serve student account right after the browser calls
// supabaseClient.auth.signUp(). This is the real replacement for the old
// "Access the free student portal" flow, which gave every anonymous visitor
// an identical, untracked session with no record of who they were.
//
// The caller must prove they actually own the Supabase Auth session they
// claim to (via accessToken) - otherwise anyone could POST an arbitrary
// {email} here and create student rows for people who never signed up.
const { verifyAuthUser } = require('../_lib/authUser');
const { getStudentByAuthUserId, insertSelfServeStudent, friendlyDbError } = require('../_lib/supabaseAdmin');

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

    // Idempotent - signUp's confirmation-email redirect (or a retried
    // request) can call this more than once for the same account.
    const existing = await getStudentByAuthUserId(user.id);
    if (existing) {
      res.status(200).json({ ok: true, id: existing.id, name: existing.name });
      return;
    }

    const row = await insertSelfServeStudent({
      name: (name || '').trim() || user.email,
      email: user.email,
      auth_user_id: user.id,
    });

    res.status(200).json({ ok: true, id: row.id, name: row.name });
  } catch (err) {
    console.error('student/register error:', err);
    res.status(500).json({ ok: false, error: friendlyDbError(err) || 'Could not create your student account. Please try again in a moment.' });
  }
};
