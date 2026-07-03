// Interim payment path: until a real eSewa/Khalti *merchant* account is
// approved, the "real" gateway integration in esewa-initiate.js/
// khalti-initiate.js only works against sandbox test credentials - an actual
// paying customer cannot complete a payment through it at all (eSewa's
// rc-epay sandbox login rejects real accounts). This endpoint instead
// records a self-reported payment against a personal eSewa/Khalti QR (shown
// in the checkout UI) for a human to manually cross-check against real
// wallet activity and approve via /api/admin/approve-order.js.
//
// This is NOT verified automatically the way the real gateway flow is - it
// only exists because there's no merchant account yet. Swap back to the real
// buttons once ESEWA_MERCHANT_CODE/KHALTI_SECRET_KEY (production) are set.
const crypto = require('crypto');
const { resolveAmount, PLAN_CAPACITY } = require('../_lib/plans');
const { insertOrder } = require('../_lib/supabaseAdmin');
const { verifyAuthUser } = require('../_lib/authUser');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { planName, durationDays, consultancyName, accessToken, gateway, referenceId, payerPhone } = req.body || {};

    const user = await verifyAuthUser(accessToken);
    if (!user) {
      res.status(401).json({ error: 'Please log in to your consultancy account before submitting a payment.' });
      return;
    }

    if (!planName || !durationDays || !consultancyName || !referenceId || !payerPhone) {
      res.status(400).json({ error: 'Missing planName, durationDays, consultancyName, referenceId, or payerPhone' });
      return;
    }
    if (!PLAN_CAPACITY[planName]) {
      res.status(400).json({ error: 'Unknown plan: ' + planName });
      return;
    }
    if (gateway !== 'esewa-manual' && gateway !== 'khalti-manual') {
      res.status(400).json({ error: 'Unknown gateway' });
      return;
    }
    const amount = resolveAmount(planName, durationDays);
    if (!amount) {
      res.status(400).json({ error: 'No price configured for that plan/duration combination' });
      return;
    }

    const transactionUuid = `manual-${Date.now()}-${crypto.randomBytes(4).toString('hex')}`;
    await insertOrder({
      transaction_uuid: transactionUuid,
      gateway,
      plan_name: planName,
      duration_days: Number(durationDays),
      amount,
      consultancy_name: consultancyName,
      consultancy_email: user.email,
      status: 'pending_review',
      reference_id: String(referenceId).trim(),
      payer_phone: String(payerPhone).trim(),
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('payment/manual-submit error:', err);
    res.status(500).json({ error: 'Could not submit your payment for review. Please try again in a moment.' });
  }
};
