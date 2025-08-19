const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const content = require('./data/content');
const { sendEmail } = require('./utils/email');

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

app.get('/health', (req, res) => res.json({ ok: true }));

// API endpoints
app.get('/categories', (req, res) => {
  res.json(content.categories.map(({ slug, name, description }) => ({ slug, name, description })));
});

app.get('/categories/:slug', (req, res) => {
  const cat = content.categories.find(c => c.slug === req.params.slug);
  if (!cat) return res.status(404).json({ error: 'Category not found' });
  res.json(cat);
});

app.get('/hackathons', (req, res) => res.json(content.hackathons));
app.get('/courses', (req, res) => res.json(content.courses));
app.get('/certifications', (req, res) => res.json(content.certifications));

// Contact form endpoint
app.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'All fields are required' 
      });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Please enter a valid email address' 
      });
    }
    
    // Send email
    const result = await sendEmail({ name, email, subject, message });
    
    if (result.success) {
      res.json({ 
        success: true, 
        message: 'Message sent successfully! I will get back to you soon.' 
      });
    } else {
      console.error('Email sending failed:', result.error);
      res.status(500).json({ 
        success: false, 
        error: result.error || 'Failed to send message. Please try again later.' 
      });
    }
  } catch (error) {
    console.error('Contact endpoint error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Internal server error. Please try again later.' 
    });
  }
});

// Handle 404 for undefined routes
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

module.exports = app;


