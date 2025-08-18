# Vercel Deployment Guide

## 🚀 Quick Fix for Category Pages

Your frontend at [https://aman-kumar-ak.vercel.app/](https://aman-kumar-ak.vercel.app/) currently can't access category pages because the backend isn't deployed. Here's how to fix it:

## Option 1: Deploy Backend (Recommended)

### Prerequisites
- Vercel CLI installed: `npm i -g vercel`
- Node.js 18+ installed

### Deployment Steps

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Use the deployment script:**
   ```bash
   # On Windows (PowerShell):
   .\deploy.ps1
   
   # On Mac/Linux:
   ./deploy.sh
   ```

3. **Or deploy manually:**
   ```bash
   npm install
   vercel --prod
   ```

4. **After deployment, update the frontend API URL:**
   - Copy your backend URL from the deployment output
   - Update `frontend/src/api.js` line 5 with your backend URL

## Option 2: Use Fallback Data (Temporary)

The frontend now has fallback data built-in, so category pages will work even without the backend, but with limited content.

## 🔧 What Was Fixed

### Frontend Improvements
- ✅ Added error handling for API failures
- ✅ Built-in fallback data for categories
- ✅ Better loading states and error messages
- ✅ Dynamic category generation from API data

### Backend Configuration
- ✅ Fixed Vercel configuration conflicts
- ✅ Proper API function structure
- ✅ CORS headers configuration
- ✅ Error handling for serverless functions

## 📱 Current Status

- **Frontend**: ✅ Deployed and working at [aman-kumar-ak.vercel.app](https://aman-kumar-ak.vercel.app/)
- **Backend**: ❌ Not deployed yet (causing category page issues)
- **Category Pages**: ⚠️ Working with fallback data, but limited content

## 🎯 Next Steps

1. **Deploy the backend** using the scripts above
2. **Update the frontend API URL** with your backend URL
3. **Test all category pages** to ensure they work properly
4. **Add your real project data** to the backend content files

## 🐛 Troubleshooting

- **Category pages not loading**: Backend not deployed or API URL incorrect
- **API errors**: Check Vercel function logs and CORS configuration
- **Deployment fails**: Ensure Vercel CLI is installed and you're logged in

## 📁 File Structure

```
backend/
├── api/
│   ├── index.js          # Root API handler
│   └── [...all].js       # Catch-all API handler
├── app.js                # Express app
├── vercel.json           # Vercel configuration
├── deploy.sh             # Linux/Mac deployment script
├── deploy.ps1            # Windows deployment script
└── DEPLOYMENT.md         # This guide
```

## 🔗 API Endpoints

After deployment, these will be available:
- `GET /api` - API status
- `GET /api/categories` - List all categories
- `GET /api/categories/:slug` - Get specific category
- `GET /api/hackathons` - List hackathons
- `GET /api/courses` - List courses
- `GET /api/certifications` - List certifications
- `GET /api/health` - Health check

## 🚨 Important Notes

- **Don't use both `routes` and `rewrites`** in vercel.json (causes conflicts)
- **Update frontend API URL** after backend deployment
- **Test locally first** using `npm run dev` in backend directory
- **Check Vercel logs** if deployment fails
