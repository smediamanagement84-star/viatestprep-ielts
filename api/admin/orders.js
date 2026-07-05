// Owner-only pending-payment review: GET lists submissions awaiting review
// (see /api/payment/manual-submit.js), POST approves/rejects one. Merged
// from what used to be pending-orders.js + approve-order.js into a single
// GET/POST file to stay under Vercel Hobby's 12-serverless-function-per-
// deployment cap - same owner-key gate either way.
const { isOwner } = require('../_lib/ownerAuth');
const {
  listPendingReviewOrders, getOrderById, markOrderApproved, markOrderRejected, upsertConsultancy,
} = require('../_lib/supabaseAdmin');

module.exports = async (req, res) => {
  const ownerKey = req.headers['x-owner-key'];
  if (!isOwner(ownerKey)) {
    res.status(401).json({ ok: false, error: 'Not authorized' });
    return;
  }

  if (req.method === 'GET') {
    try {
      const orders = await listPendingReviewOrders();
      res.status(200).json({ ok: true, orders });
    } catch (err) {
      console.error('admin/orders GET error:', err);
      res.status(500).json({ ok: false, error: 'Could not load pending payments. Please try again in a moment.' });
    }
    return;
  }

  if (req.method === 'POST') {
    try {
      const { orderId, action } = req.body || {};
      if (!orderId || (action !== 'approve' && action !== 'reject')) {
        res.status(400).json({ ok: false, error: 'Missing orderId or invalid action' });
        return;
      }

      const order = await getOrderById(orderId);
      if (!order) {
        res.status(404).json({ ok: false, error: 'Order not found' });
        return;
      }
      if (order.status !== 'pending_review') {
        res.status(409).json({ ok: false, error: `Order already ${order.status}` });
        return;
      }

      if (action === 'reject') {
        await markOrderRejected(orderId);
        res.status(200).json({ ok: true, status: 'rejected' });
        return;
      }

      await markOrderApproved(orderId, order.reference_id);
      const expiresAt = new Date(Date.now() + order.duration_days * 24 * 60 * 60 * 1000).toISOString();
      await upsertConsultancy({
        name: order.consultancy_name,
        email: order.consultancy_email,
        plan_name: order.plan_name,
        duration_days: order.duration_days,
        expires_at: expiresAt,
      });

      res.status(200).json({ ok: true, status: 'paid' });
    } catch (err) {
      console.error('admin/orders POST error:', err);
      res.status(500).json({ ok: false, error: 'Could not process this order. Please try again in a moment.' });
    }
    return;
  }

  res.status(405).json({ ok: false, error: 'Method not allowed' });
};
