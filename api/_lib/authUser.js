// Verifies a Supabase Auth access token (the JWT a client gets back from
// supabaseClient.auth.signUp()/signInWithPassword()) and returns the real
// user it belongs to. This is what proves "the caller is actually logged in
// as this email" server-side - without it, anyone could POST an arbitrary
// {consultancyEmail: 'someone-else@x.com'} and initiate a paid checkout (or
// a free student registration) under an email they don't own.
//
// Uses the anon key, not the service role key: validating a user's own JWT
// is exactly what the anon key + GoTrue's /auth/v1/user endpoint is for, and
// this never needs to bypass RLS.
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://hcmhtxfmvutxtnwdbuur.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY
  || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjbWh0eGZtdnV0eHRud2RidXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwNDEwMjYsImV4cCI6MjA5ODYxNzAyNn0.lSW6zw5lS59dZF2MWD7kFQCtuoFtibnyS0x2nyQfZbA';

// Returns { id, email } for a valid token, or null if the token is missing,
// expired, or otherwise invalid. Never throws - callers just check for null.
async function verifyAuthUser(accessToken) {
  if (!accessToken) return null;
  try {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!res.ok) return null;
    const user = await res.json();
    if (!user || !user.id || !user.email) return null;
    return { id: user.id, email: user.email };
  } catch (err) {
    console.error('verifyAuthUser error:', err);
    return null;
  }
}

module.exports = { verifyAuthUser };
