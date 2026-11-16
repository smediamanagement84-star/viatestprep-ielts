// Signed session tokens: proof that the server itself already verified who
// someone is. Issued right after a REAL login (a Supabase Auth login, or a
// student's private access link) and checked on every request that touches
// private data. Stateless - nothing is stored; a token is just
//   base64url(payload) + "." + HMAC-SHA256(payload, secret)
// so it cannot be forged or edited without the server-side secret.
//
// Secret: SESSION_TOKEN_SECRET if set, otherwise the Supabase service-role
// key (already a server-only secret). With neither, tokens can't be issued
// or accepted - it fails closed.
const crypto = require('crypto');

const DEFAULT_TTL_SECONDS = 30 * 24 * 60 * 60; // 30 days

function secret() {
  return process.env.SESSION_TOKEN_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY || '';
}

function hmac(key, data) {
  return crypto.createHmac('sha256', key).update(data).digest();
}

// role: 'student' | 'consultancy'. Returns a token string, or null if it
// can't be issued (no secret configured / missing role or id).
function signSession(role, id, ttlSeconds) {
  const key = secret();
  if (!key || !role || !id) return null;
  const ttl = typeof ttlSeconds === 'number' ? ttlSeconds : DEFAULT_TTL_SECONDS;
  const payload = Buffer.from(JSON.stringify({
    r: String(role),
    i: String(id),
    e: Math.floor(Date.now() / 1000) + ttl,
  })).toString('base64url');
  return payload + '.' + hmac(key, payload).toString('base64url');
}

// Returns { role, id } for a valid, unexpired token - otherwise null.
function verifySession(token) {
  const key = secret();
  if (!key || typeof token !== 'string' || token.length > 2000) return null;
  const parts = token.split('.');
  if (parts.length !== 2) return null;
  const expected = hmac(key, parts[0]);
  let given;
  try { given = Buffer.from(parts[1], 'base64url'); } catch (e) { return null; }
  if (given.length !== expected.length || !crypto.timingSafeEqual(given, expected)) return null;
  let p;
  try { p = JSON.parse(Buffer.from(parts[0], 'base64url').toString('utf8')); } catch (e) { return null; }
  if (!p || !p.r || !p.i || typeof p.e !== 'number' || p.e < Date.now() / 1000) return null;
  return { role: p.r, id: p.i };
}

module.exports = { signSession, verifySession, DEFAULT_TTL_SECONDS };
