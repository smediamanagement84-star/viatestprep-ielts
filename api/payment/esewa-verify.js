// eSewa's success_url callback. This URL is reachable by anyone who can
// construct a request to it (including a user replaying an old redirect), so
// it must NEVER trust the query string alone - it independently calls eSewa's
// own transaction-status API server-side before treating anything as paid.
// Only after that comes back COMPLETE (and the amount matches what we
// actually charged for, from our own `orders` row - not from the callback)
// does this activate the consultancy account.
const { getOrderByTransactionUuid, markOrderPaid, markOrderFailed, upsertConsultancy } = require('../_lib/supabaseAdmin');

module.exports = async (req, res) => {
  const origin = `https://${req.headers.host}`;
  const fail = (reason) => {
    console.error('esewa-verify failed:', reason);
    res.writeHead(302, { Location: `${origin}/index.html?payment=failed&gateway=esewa` });
    res.end();
  };

  try {
    const dataParam = req.query.data;
    if (!dataParam) return fail('missing data param');

    const decoded = JSON.parse(Buffer.from(dataParam, 'base64').toString('utf-8'));
    const { transaction_uuid, product_code, total_amount } = decoded;
    if (!transaction_uuid || !product_code || !total_amount) return fail('incomplete callback payload');

    const order = await getOrderByTransactionUuid(transaction_uuid);
    if (!order) return fail('no matching order for transaction_uuid ' + transaction_uuid);
    if (order.status === 'paid') {
      // Already processed (e.g. user refreshed the success page) - just send
      // them back in rather than double-activating.
      res.writeHead(302, { Location: `${origin}/index.html?payment=success&email=${encodeURIComponent(order.consultancy_email)}` });
      res.end();
      return;
    }

    const isProduction = process.env.ESEWA_MODE === 'production';
    const statusUrl = isProduction
      ? 'https://epay.esewa.com.np/api/epay/transaction/status/'
      : 'https://rc.esewa.com.np/api/epay/transaction/status/';

    const check = await fetch(`${statusUrl}?product_code=${encodeURIComponent(product_code)}&total_amount=${encodeURIComponent(total_amount)}&transaction_uuid=${encodeURIComponent(transaction_uuid)}`);
    const checkJson = await check.json();

    const amountMatches = Number(checkJson.total_amount) === Number(order.amount);
    if (checkJson.status !== 'COMPLETE' || !amountMatches) {
      await markOrderFailed(transaction_uuid);
      return fail(`esewa status check returned ${checkJson.status}, amountMatches=${amountMatches}`);
    }

    await markOrderPaid(transaction_uuid, checkJson.ref_id || decoded.transaction_code || null);

    const expiresAt = new Date(Date.now() + order.duration_days * 24 * 60 * 60 * 1000).toISOString();
    await upsertConsultancy({
      name: order.consultancy_name,
      email: order.consultancy_email,
      plan_name: order.plan_name,
      duration_days: order.duration_days,
      expires_at: expiresAt,
    });

    res.writeHead(302, { Location: `${origin}/index.html?payment=success&email=${encodeURIComponent(order.consultancy_email)}` });
    res.end();
  } catch (err) {
    console.error('esewa-verify error:', err);
    fail(String(err.message || err));
  }
};
