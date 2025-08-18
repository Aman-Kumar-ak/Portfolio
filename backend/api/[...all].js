const app = require('../app');

module.exports = (req, res) => {
  // Vercel invokes this for any path matching /api/*
  // Strip the /api prefix so our Express app can handle the routes properly
  if (req.url && req.url.startsWith('/api')) {
    req.url = req.url.replace(/^\/api/, '') || '/';
  }
  
  // Let the Express app handle the request with proper error handling
  try {
    return app(req, res);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


