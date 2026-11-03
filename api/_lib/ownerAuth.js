// Shared gate for the owner-only admin endpoints (pending payment review,
// roster, dev notifications). The owner key now comes ONLY from the
// OWNER_BYPASS_KEY environment variable (Vercel > Settings > Environment
// Variables). There is deliberately no built-in default: a default in
// public source code is a password everyone can read. If the variable is
// unset, every owner request is refused.
const crypto = require('crypto');

const OWNER_BYPASS_KEY = process.env.OWNER_BYPASS_KEY || '';

function isOwner(candidateKey) {
  if (!OWNER_BYPASS_KEY || !candidateKey || typeof candidateKey !== 'string') return false;
  const a = Buffer.from(candidateKey);
  const b = Buffer.from(OWNER_BYPASS_KEY);
  // Constant-time comparison so response timing can't leak the key.
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

module.exports = { isOwner };
