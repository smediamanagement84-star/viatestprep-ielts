// Lists manual-QR payment submissions awaiting review (see
// /api/payment/manual-submit.js). Owner-only - gated by the same secret as
// the "?ownerkey=" CRM bypass, sent as a header rather than a URL param
// since this is a fetch() call, not a page navigation.
const { isOwner } = require('../_lib/ownerAuth');
const { listPendingReviewOrders } = require('../_lib/supabaseAdmin');

module.exports = async (req, res) => {
  try {
    const ownerKey = req.headers['x-owner-key'];
    if (!isOwner(ownerKey)) {
      res.status(401).json({ ok: false, error: 'Not authorized' });
      return;
    }

    const orders = await listPendingReviewOrders();
    res.status(200).json({ ok: true, orders });
  } catch (err) {
    console.error('admin/pending-orders error:', err);
    res.status(500).json({ ok: false, error: 'Could not load pending payments. Please try again in a moment.' });
  }
};
