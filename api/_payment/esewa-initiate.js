// Starts a real eSewa ePay v2 transaction.
//
// eSewa's flow is a signed HTML form POST, not a simple redirect: the browser
// must submit a form directly to eSewa's own endpoint with an HMAC-SHA256
// signature attached, so eSewa can trust the amount wasn't tampered with in
// transit. This endpoint computes that signature server-side (the secret key
// must never reach the browser) and hands back the exact field values the
// frontend needs to build and auto-submit that form.
const crypto = require('crypto');
const { resolveAmount, PLAN_CAPACITY } = require('../_lib/plans');
const { insertOrder } = require('../_lib/supabaseAdmin');
const { verifyAuthUser } = require('../_lib/authUser');

// eSewa's own published UAT/sandbox test credentials - meant to be used by
// any developer testing against their rc-epay sandbox, not a real secret.
// Swap ESEWA_MERCHANT_CODE / ESEWA_SECRET_KEY / ESEWA_MODE=production env
// vars in once the real merchant account is approved.
const SANDBOX_MERCHANT_CODE = 'EPAYTEST';
const SANDBOX_SECRET_KEY = '8gBm/:&EnhH.1/q';

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
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

    const isProduction = process.env.ESEWA_MODE === 'production';
    const productCode = process.env.ESEWA_MERCHANT_CODE || SANDBOX_MERCHANT_CODE;
    const secretKey = process.env.ESEWA_SECRET_KEY || SANDBOX_SECRET_KEY;
    const formActionUrl = isProduction
      ? 'https://epay.esewa.com.np/api/epay/main/v2/form'
      : 'https://rc-epay.esewa.com.np/api/epay/main/v2/form';

    const transactionUuid = `vtp-${Date.now()}-${crypto.randomBytes(4).toString('hex')}`;
    const totalAmount = amount; // no tax/service/delivery charge on these plans

    await insertOrder({
      transaction_uuid: transactionUuid,
      gateway: 'esewa',
      plan_name: planName,
      duration_days: Number(durationDays),
      amount: totalAmount,
      consultancy_name: consultancyName,
      consultancy_email: consultancyEmail,
      status: 'pending',
    });

    const signedFieldNames = 'total_amount,transaction_uuid,product_code';
    const message = `total_amount=${totalAmount},transaction_uuid=${transactionUuid},product_code=${productCode}`;
    const signature = crypto.createHmac('sha256', secretKey).update(message).digest('base64');

    const origin = req.headers.origin || `https://${req.headers.host}`;

    res.status(200).json({
      formActionUrl,
      fields: {
        amount: String(totalAmount),
        tax_amount: '0',
        total_amount: String(totalAmount),
        transaction_uuid: transactionUuid,
        product_code: productCode,
        product_service_charge: '0',
        product_delivery_charge: '0',
        success_url: `${origin}/api/payment/esewa-verify`,
        failure_url: `${origin}/index.html?payment=failed&gateway=esewa`,
        signed_field_names: signedFieldNames,
        signature,
      },
    });
  } catch (err) {
    console.error('esewa-initiate error:', err);
    res.status(500).json({ error: 'Could not start eSewa payment. Please try again in a moment.' });
  }
};
