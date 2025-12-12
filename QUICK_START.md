# Quick Start Guide

## 🎯 Get Your Website Live in 5 Minutes

### Step 1: Add Your Extension (Required)
```bash
# Replace the placeholder with your actual Chrome extension
rm public/extension.zip
cp /path/to/your-extension.zip public/extension.zip
```

### Step 2: Test Locally
```bash
npm run dev
```
Visit `http://localhost:3000` to see your site.

### Step 3: Deploy to Vercel
```bash
# Initialize git if you haven't already
git init
git add .
git commit -m "Initial commit"

# Push to GitHub (create repo first on github.com)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### Step 4: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Select your repository
5. Click "Deploy"

✅ Done! Your site is live at `https://your-project.vercel.app`

## 🎨 Customize (Optional)

### Update Text
Edit `app/page.tsx` to change:
- Extension name and description
- Features
- Installation instructions

### Change Colors
Search and replace in `app/page.tsx`:
- `blue-600` → your primary color
- `purple-600` → your secondary color

### Add Logo/Favicon
Place your files in `public/`:
- `favicon.ico`
- `logo.png`

## 📊 Track Downloads

Downloads are automatically tracked using CountAPI (no database needed!).
View your count at: `https://api.countapi.xyz/get/expert-goggles/downloads`

## 🔄 Update Extension

When you have a new version:
```bash
# Replace the file
cp /path/to/new-version.zip public/extension.zip

# Deploy
git add public/extension.zip
git commit -m "Update extension"
git push
```

Vercel automatically redeploys on push!

## 📚 More Help

- Full deployment guide: See `DEPLOYMENT.md`
- Technical details: See `README.md`
- Issues? Check browser console and Vercel logs

---

Need help? The website is already configured and ready to deploy! 🚀

