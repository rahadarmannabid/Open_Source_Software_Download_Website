# Deployment Guide for Expert Goggles Website

## 🚀 Quick Deploy to Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free tier available at [vercel.com](https://vercel.com))
- Your Chrome extension packaged as a ZIP file

### Step-by-Step Deployment

#### 1. Prepare Your Extension
Replace the placeholder file with your actual extension:
```bash
# Remove the placeholder
rm public/extension.zip

# Add your extension ZIP file
cp /path/to/your/extension.zip public/extension.zip
```

#### 2. Initialize Git Repository (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: Expert Goggles website"
```

#### 3. Push to GitHub
```bash
# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

#### 4. Deploy on Vercel

**Option A: Using Vercel Dashboard (Easiest)**
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"
6. Wait 1-2 minutes for deployment to complete
7. Your site will be live at `https://your-project.vercel.app`

**Option B: Using Vercel CLI**
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

### 5. Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS settings as instructed by Vercel

## 📊 Download Tracking

The website uses **CountAPI** for download tracking without a database:
- **Free**: No cost, no signup required
- **Simple**: Just API calls, no configuration
- **Persistent**: Counter persists across deployments

### Counter Namespace
Current namespace: `expert-goggles/downloads`

### Customize Counter
To use a different counter or reset:
1. Choose a unique namespace (e.g., `your-name-extension/downloads`)
2. Edit `app/page.tsx`:
   ```typescript
   // Change these URLs:
   fetch('https://api.countapi.xyz/get/YOUR-NAMESPACE/KEY')
   fetch('https://api.countapi.xyz/hit/YOUR-NAMESPACE/KEY')
   ```

### Alternative: GitHub Releases
If you prefer GitHub-based tracking:
1. Create a release on GitHub with your extension ZIP
2. Use GitHub API to fetch download count
3. Modify `app/page.tsx` to use GitHub API

## 🔧 Configuration

### Environment Variables
This project doesn't require environment variables for basic functionality.

If you add any in the future, create `.env.local`:
```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
```

Then add them in Vercel:
1. Project Settings → Environment Variables
2. Add your variables
3. Redeploy

### Update Extension Content
To update your extension description or features:
1. Edit `app/page.tsx`
2. Modify the text, colors, or features
3. Commit and push changes
4. Vercel auto-deploys on push

### Change Branding
**Colors**: Edit gradients in `app/page.tsx`
```tsx
// Primary gradient
from-blue-600 to-purple-600
// Change to your colors, e.g.:
from-green-600 to-teal-600
```

**Logo**: Replace the SVG icon in the hero section

**Favicon**: Add these files to `public/`:
- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`

## 🧪 Testing Locally

Before deploying, test locally:
```bash
# Development mode
npm run dev
# Open http://localhost:3000

# Production build test
npm run build
npm start
# Open http://localhost:3000
```

## 📈 Analytics (Optional)

### Vercel Analytics
1. Go to your project in Vercel Dashboard
2. Click "Analytics" tab
3. Enable Vercel Analytics (free tier available)
4. Add to your app:
   ```bash
   npm install @vercel/analytics
   ```
5. Update `app/layout.tsx`:
   ```tsx
   import { Analytics } from '@vercel/analytics/react';
   
   export default function RootLayout({ children }) {
     return (
       <html lang="en">
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     );
   }
   ```

## 🔒 Security Notes

- The extension ZIP file is served as a static file
- No user data is collected
- Download counter is public and incrementable by anyone
- CountAPI is a third-party service (consider rate limiting if needed)

## 🐛 Troubleshooting

### Build Fails on Vercel
- Check build logs in Vercel dashboard
- Ensure `package.json` has correct dependencies
- Try building locally first: `npm run build`

### Extension Download Doesn't Work
- Verify `public/extension.zip` exists and is valid
- Check browser console for errors
- Ensure ZIP file size is reasonable (<50MB recommended)

### Download Counter Not Updating
- Check browser console for API errors
- Verify CountAPI is accessible: `https://api.countapi.xyz/get/expert-goggles/downloads`
- Try a different namespace if needed

### Dark Mode Issues
- Ensure Tailwind CSS is configured correctly
- Check `tailwind.config.ts` includes all paths
- Verify dark mode classes in `app/globals.css`

## 🔄 Updating the Extension

When you release a new version:
1. Update `public/extension.zip` with new version
2. (Optional) Update version number in page content
3. Commit and push:
   ```bash
   git add public/extension.zip
   git commit -m "Update extension to v1.1.0"
   git push
   ```
4. Vercel automatically redeploys

## 📱 Mobile Responsiveness

The site is fully responsive and tested on:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1440px+)

## 🎨 Customization Examples

### Change Primary Color
```tsx
// In app/page.tsx, replace all instances of:
blue-600 → green-600
purple-600 → teal-600
```

### Add New Feature Card
```tsx
<div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
    {/* Your icon SVG */}
  </div>
  <h3 className="text-xl font-bold mb-3">Your Feature</h3>
  <p className="text-gray-600 dark:text-gray-400">Description</p>
</div>
```

## 📞 Support

If you encounter issues:
1. Check this guide thoroughly
2. Review Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
3. Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
4. Review CountAPI docs: [countapi.xyz](https://countapi.xyz)

---

Happy deploying! 🎉

