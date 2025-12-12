# Expert Goggles Website

A beautiful landing page for the Expert Goggles Chrome Extension - an open-source data visualization learning tool.

## Features

✨ **Modern Design**: Beautiful, responsive UI with dark mode support
📊 **Download Tracking**: Track downloads without a database using CountAPI
🚀 **Vercel Ready**: Optimized for Vercel deployment
📦 **Simple Distribution**: Download extension as ZIP file

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your extension:**
   - Replace `public/extension.zip` with your actual Chrome extension ZIP file
   - Make sure the ZIP contains your extension files (manifest.json, etc.)

3. **Run locally:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it.

4. **Build for production:**
   ```bash
   npm run build
   ```

## Deploy to Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to link your project and deploy.

### Option 2: Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

That's it! Vercel will automatically detect Next.js and configure everything.

## Download Tracking

This site uses [CountAPI](https://countapi.xyz/) to track downloads without a database:
- Free service, no signup required
- Tracks download count at: `expert-goggles/downloads`
- To reset counter or use a different namespace, edit the API URL in `app/page.tsx`

## Customization

### Change Colors
Edit the gradient colors in `app/page.tsx`:
- Primary gradient: `from-blue-600 to-purple-600`
- Background: `from-blue-50 via-white to-purple-50`

### Update Content
- **Title/Description**: Edit `app/layout.tsx` for SEO metadata
- **Page Content**: Edit `app/page.tsx` for all page content
- **Features**: Modify the features section in `app/page.tsx`

### Add Favicon
Place your favicon files in the `public` directory:
- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Hosting**: Vercel
- **Analytics**: CountAPI (free, no database)

## License

Open source - feel free to use and modify!

