// Khalti's return_url callback. Same principle as esewa-verify: never trust
// the query string Khalti redirects the browser back with - independently
// call Khalti's lookup API server-side with the pidx before treating
// anything as paid.
const { getOrderByTransactionUuid, markOrderPaid, markOrderFailed, upsertConsultancy } = require('../_lib/supabaseAdmin');

module.exports = async (req, res) => {
  const origin = `https://${req.headers.host}`;
  const fail = (reason) => {
    console.error('khalti-verify failed:', reason);
    res.writeHead(302, { Location: `${origin}/index.html?payment=failed&gateway=khalti` });
    res.end();
  };

  try {
    const { pidx, purchase_order_id } = req.query;
    if (!pidx || !purchase_order_id) return fail('missing pidx or purchase_order_id');

    const order = await getOrderByTransactionUuid(purchase_order_id);
    if (!order) return fail('no matching order for purchase_order_id ' + purchase_order_id);
    if (order.status === 'paid') {
      res.writeHead(302, { Location: `${origin}/index.html?payment=success&email=${encodeURIComponent(order.consultancy_email)}` });
      res.end();
      return;
    }

    const secretKey = process.env.KHALTI_SECRET_KEY;
    if (!secretKey) return fail('KHALTI_SECRET_KEY not set');

    const isProduction = process.env.KHALTI_MODE === 'production';
    const apiBase = isProduction ? 'https://khalti.com/api/v2' : 'https://dev.khalti.com/api/v2';

    const lookupRes = await fetch(`${apiBase}/epayment/lookup/`, {
      method: 'POST',
      headers: {
        Authorization: `Key ${secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pidx }),
    });
    const lookupJson = await lookupRes.json();

    const amountMatches = Math.round(Number(lookupJson.total_amount)) === Math.round(Number(order.amount) * 100);
    if (lookupJson.status !== 'Completed' || !amountMatches) {
      await markOrderFailed(purchase_order_id);
      return fail(`khalti lookup returned ${lookupJson.status}, amountMatches=${amountMatches}`);
    }

    await markOrderPaid(purchase_order_id, lookupJson.transaction_id || pidx);

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
    console.error('khalti-verify error:', err);
    fail(String(err.message || err));
  }
};
