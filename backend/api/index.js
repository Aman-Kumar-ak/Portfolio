const app = require('../app');

module.exports = (req, res) => {
  // When hitting /api directly, make it behave like the root of the API
  if (req.url === '/' || req.url === '') {
    // Respond directly for the root so backend domain shows a friendly status
    res.type('text/plain').send('Portfolio API is running.');
    return;
  } else if (req.url && req.url.startsWith('/api')) {
    req.url = req.url.replace(/^\/api/, '') || '/';
  }
  return app(req, res);
};


