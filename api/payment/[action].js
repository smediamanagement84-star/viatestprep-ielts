// ONE serverless function that serves every /api/payment/* URL.
//
// Why: Vercel's Hobby plan allows at most 12 serverless functions per
// deployment, and each file in api/ (not starting with "_") counts as one.
// The five payment handlers lived in separate files and pushed the project
// to 14, which made EVERY deploy fail. The handlers are unchanged - they
// now live in api/_payment/ (underscore = not deployed as functions) and
// this file routes to them, so all the original URLs keep working:
//   /api/payment/esewa-initiate   /api/payment/esewa-verify
//   /api/payment/khalti-initiate  /api/payment/khalti-verify
//   /api/payment/manual-submit
// eSewa and Khalti send customers back to the two *-verify URLs after
// paying, so those paths must never change.
const handlers = {
  'esewa-initiate': require('../_payment/esewa-initiate'),
  'esewa-verify': require('../_payment/esewa-verify'),
  'khalti-initiate': require('../_payment/khalti-initiate'),
  'khalti-verify': require('../_payment/khalti-verify'),
  'manual-submit': require('../_payment/manual-submit'),
};

module.exports = async (req, res) => {
  const action = String((req.query && req.query.action) || '');
  const handler = Object.prototype.hasOwnProperty.call(handlers, action) ? handlers[action] : null;
  if (!handler) {
    res.status(404).json({ error: 'Unknown payment endpoint' });
    return;
  }
  return handler(req, res);
};

// Exposed so the automated tests can check each URL reaches the right handler.
module.exports.handlers = handlers;
