// Minimal server-side Supabase REST client using plain fetch - no
// @supabase/supabase-js dependency needed for the couple of operations these
// payment endpoints require, which keeps this a dependency-free serverless
// function (no npm install step, nothing that can fail a Vercel build).
//
// Uses the SERVICE ROLE key (full read/write, bypasses Row Level Security) -
// this must ONLY ever be read from an environment variable on the server.
// It is never sent to the browser and must never be the same key used in
// index.html (that one is the public anon key, safe to expose; this one is
// not).
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://hcmhtxfmvutxtnwdbuur.supabase.co';
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

function assertConfigured() {
  if (!SERVICE_ROLE_KEY) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is not set. Add it in your Vercel project env vars (Supabase dashboard -> Project Settings -> API -> service_role secret).');
  }
}

async function restRequest(table, { method = 'GET', query = '', body, headers = {} } = {}) {
  assertConfigured();
  const url = `${SUPABASE_URL}/rest/v1/${table}${query}`;
  const res = await fetch(url, {
    method,
    headers: {
      apikey: SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  if (!res.ok) {
    const err = new Error(`Supabase REST ${method} ${table} failed: ${res.status} ${text}`);
    err.status = res.status;
    throw err;
  }
  return data;
}

async function insertOrder(order) {
  const rows = await restRequest('orders', { method: 'POST', body: order });
  return rows[0];
}

async function getOrderByTransactionUuid(transactionUuid) {
  const rows = await restRequest('orders', {
    method: 'GET',
    query: `?transaction_uuid=eq.${encodeURIComponent(transactionUuid)}&limit=1`,
  });
  return rows[0] || null;
}

async function markOrderPaid(transactionUuid, gatewayRef) {
  const rows = await restRequest('orders', {
    method: 'PATCH',
    query: `?transaction_uuid=eq.${encodeURIComponent(transactionUuid)}`,
    body: { status: 'paid', gateway_ref: gatewayRef, verified_at: new Date().toISOString() },
  });
  return rows[0];
}

async function markOrderFailed(transactionUuid) {
  const rows = await restRequest('orders', {
    method: 'PATCH',
    query: `?transaction_uuid=eq.${encodeURIComponent(transactionUuid)}`,
    body: { status: 'failed' },
  });
  return rows[0];
}

async function upsertConsultancy({ name, email, plan_name, duration_days, expires_at }) {
  // Supabase PostgREST upsert via Prefer: resolution=merge-duplicates, keyed
  // on the unique `email` column from schema.sql.
  const rows = await restRequest('consultancies', {
    method: 'POST',
    headers: { Prefer: 'resolution=merge-duplicates,return=representation' },
    query: '?on_conflict=email',
    body: { name, email, plan_name, duration_days, expires_at },
  });
  return rows[0];
}

// Looks up a single student by their private access_token (the secret half of
// their "?student=<token>" login link). Done server-side with the service role
// key so we never need a public RLS SELECT policy on the whole `students`
// table just to support this one lookup - that would let anyone holding the
// anon key page through every consultancy's entire roster.
async function getStudentByAccessToken(token) {
  const rows = await restRequest('students', {
    method: 'GET',
    query: `?access_token=eq.${encodeURIComponent(token)}&limit=1`,
  });
  return rows[0] || null;
}

async function getStudentById(id) {
  const rows = await restRequest('students', {
    method: 'GET',
    query: `?id=eq.${encodeURIComponent(id)}&limit=1`,
  });
  return rows[0] || null;
}

async function insertMockResult(result) {
  const rows = await restRequest('mock_history', { method: 'POST', body: result });
  return rows[0];
}

module.exports = {
  insertOrder,
  getOrderByTransactionUuid,
  markOrderPaid,
  markOrderFailed,
  upsertConsultancy,
  getStudentByAccessToken,
  getStudentById,
  insertMockResult,
};
