// Works out WHO is calling an endpoint, from request headers only:
//   X-Owner-Key       -> the site owner (see ownerAuth.js)
//   X-Session-Token   -> a student or consultancy the server already verified
//                        at login (see sessionToken.js)
// Returns { role: 'owner' | 'student' | 'consultancy', id } or null.
// An id sent in a URL or request body is NEVER trusted on its own - it only
// counts if it matches the id inside the verified token.
const { isOwner } = require('./ownerAuth');
const { verifySession } = require('./sessionToken');

function getCaller(req) {
  const h = (req && req.headers) || {};
  if (isOwner(h['x-owner-key'])) return { role: 'owner', id: null };
  const s = verifySession(h['x-session-token']);
  return s ? { role: s.role, id: s.id } : null;
}

function canActAsStudent(caller, studentId) {
  if (!caller || !studentId) return false;
  return caller.role === 'owner' || (caller.role === 'student' && caller.id === String(studentId));
}

function canActAsConsultancy(caller, consultancyId) {
  if (!caller || !consultancyId) return false;
  return caller.role === 'owner' || (caller.role === 'consultancy' && caller.id === String(consultancyId));
}

module.exports = { getCaller, canActAsStudent, canActAsConsultancy };
