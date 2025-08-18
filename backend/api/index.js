const path = require('path');
const app = require('../app');

module.exports = (req, res) => {
  // When hitting /api directly, make it behave like the root of the API
  if (req.url === '/' || req.url === '') {
    // Serve static index for root
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.sendFile(path.join(process.cwd(), 'backend', 'index.html'));
    return;
  } else if (req.url && req.url.startsWith('/api')) {
    req.url = req.url.replace(/^\/api/, '') || '/';
  }
  return app(req, res);
};


