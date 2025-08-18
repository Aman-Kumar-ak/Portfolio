const path = require('path');
const app = require('../app');

module.exports = (req, res) => {
  // When hitting /api directly, serve the main page
  if (req.url === '/' || req.url === '') {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.sendFile(path.join(process.cwd(), 'backend', 'index.html'));
    return;
  }
  
  // For other paths, let the Express app handle them
  // Ensure proper error handling for Vercel
  try {
    return app(req, res);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


