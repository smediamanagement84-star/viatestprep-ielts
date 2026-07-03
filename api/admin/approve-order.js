// Approves or rejects a manual-QR payment submission (see
// /api/payment/manual-submit.js). Owner-only - same gate as
// pending-orders.js. Approving activates the consultancy exactly like a
// verified real-gateway payment would (esewa-verify.js/khalti-verify.js) -
// the only difference is a human confirmed the money arrived instead of
// eSewa/Khalti's own status API.
const { isOwner } = require('../_lib/ownerAuth');
const { getOrderById, markOrderApproved, markOrderRejected, upsertConsultancy } = require('../_lib/supabaseAdmin');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  try {
    const ownerKey = req.headers['x-owner-key'];
    if (!isOwner(ownerKey)) {
      res.status(401).json({ ok: false, error: 'Not authorized' });
      return;
    }

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
    console.error('admin/approve-order error:', err);
    res.status(500).json({ ok: false, error: 'Could not process this order. Please try again in a moment.' });
  }
};
