// Shared gate for the owner-only admin endpoints (pending payment review).
// Uses the same secret as the client-side "?ownerkey=" bypass in index.html
// (JW99DMjLLV9KDC4E) so there's exactly one owner credential to remember,
// consistent with that bypass's existing trust model - a client-visible
// secret string, deliberately not linked or shown anywhere in the UI other
// than the CRM tab it unlocks. Override via OWNER_BYPASS_KEY if this is ever
// rotated.
const OWNER_BYPASS_KEY = process.env.OWNER_BYPASS_KEY || 'JW99DMjLLV9KDC4E';

function isOwner(candidateKey) {
  return !!candidateKey && candidateKey === OWNER_BYPASS_KEY;
}

module.exports = { isOwner };
