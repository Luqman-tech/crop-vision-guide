# Simplified Deployment Guide - CropCare AI

This guide covers deploying the simplified CropCare AI app (frontend only) to Netlify.

## What's Changed

The app has been simplified to remove:
- User authentication (login/register)
- Expert Q&A system
- Backend API dependencies
- Password reset functionality

**What remains:**
- ✅ Crop disease detection (AI model)
- ✅ Camera functionality
- ✅ Scan history (local storage)
- ✅ Treatment recommendations
- ✅ Offline capability

## Deployment Steps

### 1. Build the App

```bash
# Install dependencies
npm install

# Build for production
npm run build
```

This creates a `dist/` folder with the static files.

### 2. Deploy to Netlify

#### Option A: Deploy via Netlify UI
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "New site from Git"
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Base directory:** `.` (root of project)
5. Click "Deploy site"

#### Option B: Deploy via Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### 3. Configure Environment Variables (Optional)

If you need to customize the app behavior, add these in Netlify's environment variables:

```bash
VITE_APP_VERSION=1.0.0
VITE_BUILD_NUMBER=1
VITE_BUILD_DATE=2024-01-01
```

### 4. Custom Domain (Optional)

1. In Netlify dashboard, go to "Domain settings"
2. Add your custom domain
3. Configure DNS as instructed

## File Structure After Simplification

```
crop-vision-guide/
├── src/
│   ├── pages/
│   │   ├── Landing.tsx          # Landing page
│   │   ├── Index.tsx            # Home page
│   │   ├── Camera.tsx           # Camera interface
│   │   ├── Results.tsx          # Results display
│   │   ├── History.tsx          # Scan history
│   │   ├── Community.tsx        # Community features
│   │   └── ...                  # Other pages
│   ├── components/              # UI components
│   ├── lib/                     # Utilities
│   └── App.tsx                  # Main app component
├── public/
│   ├── models/                  # AI models
│   └── CropCareAIlogo.png       # Logo
├── package.json
├── vite.config.ts
└── deploy.config.js             # Updated config
```

## Features Available

### ✅ Working Features
- **AI Disease Detection:** Uses ONNX model for crop disease identification
- **Camera Integration:** Take photos directly in the app
- **Local History:** Save and view previous scans
- **Treatment Plans:** Get detailed treatment recommendations
- **Offline Mode:** Works without internet connection
- **PWA Support:** Can be installed as a mobile app

### ❌ Removed Features
- User accounts and authentication
- Expert consultation system
- Password reset functionality
- Backend API calls

## Testing the Deployment

1. **Test Camera:** Take a photo of a plant
2. **Test AI:** Verify disease detection works
3. **Test History:** Save and view scan history
4. **Test Offline:** Disconnect internet and test functionality

## Troubleshooting

### Common Issues

**Build fails:**
- Check that all dependencies are installed
- Verify Node.js version (16+ recommended)
- Check for TypeScript errors

**AI model not loading:**
- Ensure model files are in `public/models/`
- Check browser console for errors
- Verify model file paths in `deploy.config.js`

**Camera not working:**
- Ensure HTTPS is enabled (required for camera access)
- Check browser permissions
- Test on mobile device

### Performance Tips

1. **Optimize images:** Compress the logo and any images
2. **Enable compression:** Netlify automatically enables gzip
3. **Cache headers:** Static assets are cached by default
4. **CDN:** Netlify provides global CDN automatically

## Monitoring

- **Netlify Analytics:** Built-in analytics in dashboard
- **Error Tracking:** Check browser console for errors
- **Performance:** Use Lighthouse for performance audits

## Security

- **HTTPS:** Automatically enabled by Netlify
- **No sensitive data:** App doesn't store user credentials
- **Local storage:** Scan history is stored locally only

## Support

For issues with the simplified deployment:
1. Check browser console for errors
2. Verify all files are properly built
3. Test locally before deploying
4. Check Netlify build logs

---

**The simplified app is now ready for deployment!** 🚀 