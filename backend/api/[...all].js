const app = require('../app');

module.exports = (req, res) => {
  // Vercel invokes this for any path matching /api/*
  // Our Express app defines routes without the /api prefix, so strip it
  if (req.url && req.url.startsWith('/api')) {
    req.url = req.url.replace(/^\/api/, '') || '/';
  }
  return app(req, res);
};


