const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const content = require('./data/content');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Root status endpoints for both local dev (/) and Vercel function base (/api)
app.get('/', (req, res) => {
  res.type('text/plain').send('Portfolio API is running.');
});

app.get('/api', (req, res) => {
  res.type('text/plain').send('Portfolio API is running.');
});

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

module.exports = app;


