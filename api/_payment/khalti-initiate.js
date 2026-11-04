// Starts a real Khalti ePayment (KPG-2) transaction. Unlike eSewa, this is a
// simple server-to-server call that hands back a payment_url - the frontend
// just redirects the browser there, no signed form needed. The secret key
// (Authorization: Key ...) never leaves the server.
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
    const secretKey = process.env.KHALTI_SECRET_KEY;
    if (!secretKey) {
      res.status(500).json({ error: 'KHALTI_SECRET_KEY is not set. Get a free test-mode key instantly from your Khalti merchant dashboard (no approval needed for test mode), or your live key once approved for production.' });
      return;
    }

    const { planName, durationDays, consultancyName, accessToken } = req.body || {};

    // The email being charged comes from the caller's own verified login
    // session, never from a client-typed field - otherwise anyone could pay
    // for (or downgrade) a plan under an email they don't actually own.
    const user = await verifyAuthUser(accessToken);
    if (!user) {
      res.status(401).json({ error: 'Please log in to your consultancy account before checking out.' });
      return;
    }
    const consultancyEmail = user.email;

    if (!planName || !durationDays || !consultancyName) {
      res.status(400).json({ error: 'Missing planName, durationDays, or consultancyName' });
      return;
    }
    if (!PLAN_CAPACITY[planName]) {
      res.status(400).json({ error: 'Unknown plan: ' + planName });
      return;
    }
    const amount = resolveAmount(planName, durationDays);
    if (!amount) {
      res.status(400).json({ error: 'No price configured for that plan/duration combination' });
      return;
    }

    const isProduction = process.env.KHALTI_MODE === 'production';
    const apiBase = isProduction ? 'https://khalti.com/api/v2' : 'https://dev.khalti.com/api/v2';

    const transactionUuid = `vtp-${Date.now()}-${crypto.randomBytes(4).toString('hex')}`;
    const origin = req.headers.origin || `https://${req.headers.host}`;

    await insertOrder({
      transaction_uuid: transactionUuid,
      gateway: 'khalti',
      plan_name: planName,
      duration_days: Number(durationDays),
      amount,
      consultancy_name: consultancyName,
      consultancy_email: consultancyEmail,
      status: 'pending',
    });

    const khaltiRes = await fetch(`${apiBase}/epayment/initiate/`, {
      method: 'POST',
      headers: {
        Authorization: `Key ${secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        return_url: `${origin}/api/payment/khalti-verify`,
        website_url: origin,
        amount: Math.round(amount * 100), // Khalti wants paisa, not rupees
        purchase_order_id: transactionUuid,
        purchase_order_name: `${planName} Plan - ${durationDays} days`,
        customer_info: { name: consultancyName, email: consultancyEmail },
      }),
    });
    const khaltiJson = await khaltiRes.json();

    if (!khaltiRes.ok || !khaltiJson.payment_url) {
      // Full response logged server-side only - it can include Khalti account
      // config details that shouldn't be echoed back to the browser.
      console.error('khalti-initiate: khalti API rejected request', khaltiJson);
      res.status(502).json({ error: 'Khalti rejected the payment request. Please try again or contact support.' });
      return;
    }

    res.status(200).json({ paymentUrl: khaltiJson.payment_url, pidx: khaltiJson.pidx });
  } catch (err) {
    console.error('khalti-initiate error:', err);
    res.status(500).json({ error: 'Could not start Khalti payment. Please try again in a moment.' });
  }
};
