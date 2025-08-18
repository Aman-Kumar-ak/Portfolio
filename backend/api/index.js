const app = require('../app');

module.exports = (req, res) => {
  // When hitting /api directly, make it behave like the root of the API
  if (req.url === '/' || req.url === '') {
    req.url = '/';
  } else if (req.url && req.url.startsWith('/api')) {
    req.url = req.url.replace(/^\/api/, '') || '/';
  }
  return app(req, res);
};


