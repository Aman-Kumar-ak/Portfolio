# Contact Form Setup Guide

## Overview
This guide explains how to set up the contact form functionality that allows users to send emails directly to your Gmail account.

## Backend Setup

### 1. Install Dependencies
The backend now includes Nodemailer for email functionality:
```bash
cd backend
npm install nodemailer
```

### 2. Configure Environment Variables
Create a `.env` file in the `backend` folder with your Gmail credentials:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=your-email@gmail.com

# Server Configuration
PORT=5000
```

### 3. Gmail App Password Setup
**Important**: You need to create an "App Password" for your Gmail account:

1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. Scroll down to "App passwords"
4. Generate a new app password for "Mail"
5. Use this password in your `.env` file (not your regular Gmail password)

### 4. Update Email in Contact Page
In `frontend/src/pages/Contact.jsx`, update the email address:
```jsx
<a href="mailto:your-email@gmail.com" style={{color: '#007bff', textDecoration: 'none'}}>
  your-email@gmail.com
</a>
```

## How It Works

### Frontend
- Contact form with fields: Name, Email, Subject, Message
- Form validation and error handling
- Success/error messages
- Responsive design matching your portfolio theme

### Backend
- POST `/api/contact` endpoint
- Input validation (required fields, email format)
- Email sending via Nodemailer
- HTML email template with user's message

### Email Flow
1. User fills out contact form
2. Frontend sends POST request to backend
3. Backend validates input and sends email via Gmail SMTP
4. You receive a formatted email in your Gmail inbox
5. User gets confirmation message

## Testing

### Local Development
1. Start backend: `cd backend && npm run dev`
2. Start frontend: `cd frontend && npm run dev`
3. Navigate to `/contact` route
4. Fill out form and test email sending

### Production Deployment
- Ensure your `.env` file is properly configured on your hosting platform
- Test the contact form after deployment
- Monitor email delivery

## Security Features

- Input validation and sanitization
- CORS protection
- Helmet security headers
- Rate limiting (can be added if needed)

## Troubleshooting

### Common Issues

1. **"Authentication failed" error**
   - Check your Gmail app password
   - Ensure 2FA is enabled on your Google account

2. **"Connection timeout" error**
   - Check your internet connection
   - Verify Gmail SMTP settings

3. **Form not submitting**
   - Check browser console for errors
   - Verify backend is running
   - Check API endpoint configuration

### Debug Mode
Enable debug logging in the email utility by adding:
```javascript
// In backend/utils/email.js
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  debug: true, // Add this line
  logger: true  // Add this line
});
```

## Customization

### Email Template
Modify the HTML email template in `backend/utils/email.js` to match your branding.

### Form Fields
Add/remove form fields by updating both the frontend form and backend validation.

### Styling
Update the CSS styles in the Contact component to match your portfolio design.

## Support
If you encounter issues, check:
1. Backend console logs
2. Frontend browser console
3. Gmail account settings
4. Environment variable configuration
