const express = require('express');
const path = require('path');
const crypto = require('crypto');

if (!process.env.SESSION_TOKEN_SECRET && !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  process.env.SESSION_TOKEN_SECRET = crypto.randomBytes(32).toString('hex');
}

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const ROOT_DIR = __dirname;

app.set('trust proxy', true);
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));

// CORS headers for /api/* matching vercel.json
app.use('/api', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Owner-Key, X-Session-Token');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// Adapter for Vercel serverless functions so req.params (e.g. [action].js)
// are also exposed on req.query just as Vercel does.
function wrapVercelHandler(handler) {
  return async (req, res, next) => {
    try {
      if (req.params && Object.keys(req.params).length > 0) {
        Object.defineProperty(req, 'query', {
          value: { ...req.query, ...req.params },
          configurable: true,
          enumerable: true,
          writable: true,
        });
      }
      await handler(req, res);
    } catch (err) {
      next(err);
    }
  };
}

// Mount all /api/* serverless handlers
app.all('/api/admin/orders', wrapVercelHandler(require('./api/admin/orders')));
app.all('/api/admin/roster', wrapVercelHandler(require('./api/admin/roster')));
app.all('/api/consultancy/account', wrapVercelHandler(require('./api/consultancy/account')));
app.all('/api/dev-notifications', wrapVercelHandler(require('./api/dev-notifications')));
app.all('/api/keepalive', wrapVercelHandler(require('./api/keepalive')));
app.all('/api/mock/submit', wrapVercelHandler(require('./api/mock/submit')));
app.all('/api/payment/:action', wrapVercelHandler(require('./api/payment/[action]')));
app.all('/api/reports', wrapVercelHandler(require('./api/reports')));
app.all('/api/student', wrapVercelHandler(require('./api/student/index')));
app.all('/api/student/index', wrapVercelHandler(require('./api/student/index')));
app.all('/api/test-answers', wrapVercelHandler(require('./api/test-answers')));
app.all('/api/writing/grade', wrapVercelHandler(require('./api/writing/grade')));

app.use('/api', (req, res) => {
  res.status(404).json({ ok: false, error: 'Unknown API endpoint' });
});

// Block direct static access to server-side code, configs, SQL files, and dotfiles
app.use((req, res, next) => {
  const reqPath = req.path.toLowerCase();
  if (
    reqPath.startsWith('/api/') ||
    reqPath === '/api' ||
    reqPath.startsWith('/scripts/') ||
    reqPath.startsWith('/tests/') ||
    reqPath.startsWith('/scratch/') ||
    reqPath.startsWith('/node_modules/') ||
    reqPath.startsWith('/.') ||
    reqPath === '/server.js' ||
    reqPath === '/package.json' ||
    reqPath === '/package-lock.json' ||
    reqPath === '/vercel.json' ||
    reqPath.endsWith('.sql')
  ) {
    return res.status(404).send('Not found');
  }
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Serve static HTML, JS, images, and audio assets from root
app.use(express.static(ROOT_DIR, {
  extensions: ['html'],
  index: 'index.html',
}));

app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  if (res.headersSent) return next(err);
  res.status(500).json({ ok: false, error: 'Internal Server Error' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`ViATestPrep server listening on http://0.0.0.0:${PORT}`);
});
