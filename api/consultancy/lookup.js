// Looks up a consultancy's plan/expiry by email right after a successful
// payment redirect. Done server-side with the service role key so the
// `consultancies` table (every paying customer's name, email, plan, and
// subscription expiry) never needs a public RLS SELECT policy for the anon
// key to read - that would let anyone holding the anon key dump every
// consultancy's billing info directly via the Supabase REST API, bypassing
// this app entirely. See schema.sql's RLS section.
const { getConsultancyByEmail } = require('../_lib/supabaseAdmin');

module.exports = async (req, res) => {
  try {
    const email = (req.query.email || '').trim();
    if (!email) {
      res.status(400).json({ ok: false, error: 'Missing email' });
      return;
    }

    const data = await getConsultancyByEmail(email);
    if (!data) {
      res.status(404).json({ ok: false, error: 'No consultancy found for that email' });
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
    res.status(500).json({ ok: false, error: 'Could not look up consultancy. Please try again in a moment.' });
  }
};
