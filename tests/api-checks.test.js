// Guards for the serverless API folder.
//  1. Vercel's Hobby plan allows max 12 functions: going over makes EVERY deploy fail.
//  2. All five /api/payment/* URLs must keep reaching the right handler.
const fs = require('fs');
const path = require('path');
const API = path.join(__dirname, '..', 'api');

let pass = 0, fail = 0;
function ok(cond, label) {
  if (cond) { pass++; console.log('  PASS  ' + label); }
  else { fail++; console.log('  FAIL  ' + label); }
}

// A file in api/ becomes a function unless it (or a parent folder) starts with "_".
function functionFiles(dir, rel = '') {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    if (e.name.startsWith('_')) return [];
    const r = rel ? rel + '/' + e.name : e.name;
    if (e.isDirectory()) return functionFiles(path.join(dir, e.name), r);
    return /\.(js|ts|mjs|cjs)$/.test(e.name) ? [r] : [];
  });
}

function mockRes() {
  const r = { code: 200, body: undefined, headers: {} };
  r.status = (c) => { r.code = c; return r; };
  r.json = (b) => { r.body = b; return r; };
  r.send = (b) => { r.body = b; return r; };
  r.setHeader = (k, v) => { r.headers[k] = v; return r; };
  r.end = () => r;
  return r;
}

(async () => {
  console.log('A. Vercel function limit');
  const files = functionFiles(API);
  ok(files.length <= 12, files.length + ' of 12 allowed serverless functions in use: ' + files.join(', '));

  console.log('B. Payment URLs route to the right handler');
  const router = require(path.join(API, 'payment', '[action].js'));
  const names = ['esewa-initiate', 'esewa-verify', 'khalti-initiate', 'khalti-verify', 'manual-submit'];
  for (const n of names) {
    ok(router.handlers[n] === require(path.join(API, '_payment', n + '.js')), n + ' maps to its own handler');
  }
  for (const n of ['esewa-initiate', 'khalti-initiate', 'manual-submit']) {
    const res = mockRes();
    await router({ method: 'GET', query: { action: n }, headers: {} }, res);
    ok(res.code === 405, n + ' reached its real handler (GET refused with 405)');
  }
  const unknown = mockRes();
  await router({ method: 'GET', query: { action: 'nope' }, headers: {} }, unknown);
  ok(unknown.code === 404, 'unknown payment URL gets 404');
  const proto = mockRes();
  await router({ method: 'GET', query: { action: 'constructor' }, headers: {} }, proto);
  ok(proto.code === 404, 'inherited object names cannot be used as routes');

  console.log('\n' + pass + ' passed, ' + fail + ' failed');
  process.exit(fail ? 1 : 0);
})();
