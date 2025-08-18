require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const content = require('./data/content');

const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_DEV = process.env.FRONTEND_DEV_ORIGIN || 'http://localhost:5173';

app.use(helmet());
app.use(cors({ origin: FRONTEND_DEV }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.get('/api/categories', (req, res) => {
  res.json(content.categories.map(({ slug, name, description }) => ({ slug, name, description })));
});

app.get('/api/categories/:slug', (req, res) => {
  const cat = content.categories.find(c => c.slug === req.params.slug);
  if (!cat) return res.status(404).json({ error: 'Category not found' });
  res.json(cat);
});

app.get('/api/hackathons', (req, res) => res.json(content.hackathons));
app.get('/api/courses', (req, res) => res.json(content.courses));
app.get('/api/certifications', (req, res) => res.json(content.certifications));

// Serve frontend build in production
const distPath = path.join(__dirname, '..', 'frontend', 'dist');
app.use(express.static(distPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));


