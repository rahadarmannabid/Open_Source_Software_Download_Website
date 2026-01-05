# Open Source Tools Platform

A modern, multi-tool showcase platform for displaying open-source educational and research tools. Built with Next.js 15, featuring Firebase integration, dynamic content loading, and a beautiful responsive design.

## 🌟 Featured Tools

- **Expert Goggles** - Chrome extension for data visualization learning with just-in-time guidance
- **DataVis Decomposer** - Chrome extension that breaks down complex visualizations with AI-powered annotations
- **Autosuggestion Quiz** - Web application for critical thinking about AI code suggestions

## ✨ Key Features

### Platform Features
- 🎨 **Modern Design**: Beautiful, responsive UI with dark mode support
- 🔥 **Multi-Tool Support**: Easily add new tools through configuration
- 🎯 **Smart Filtering**: Filter by tool type (Chrome Extension, Web App) and category (Education, Analysis)
- 📊 **Download/Launch Tracking**: Firebase-powered analytics for downloads and launches
- 💬 **User Reviews**: Full comment system with ratings for each tool
- 🖼️ **Dynamic Teasers**: Automatic image loading from organized folders
- 🎥 **Video Embedding**: Support for YouTube and Google Drive demo videos
- 👥 **Author Attribution**: Display authors and maintainers for each tool

### Technical Features
- ⚡ **Next.js 15**: Latest App Router with server and client components
- 🔐 **Firebase Integration**: Realtime Database for persistent storage
- 🎨 **Tailwind CSS**: Modern, utility-first styling
- 📱 **Fully Responsive**: Optimized for all device sizes
- 🚀 **Vercel Ready**: Optimized for edge deployment
- 📦 **TypeScript**: Full type safety throughout

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Firebase account (free tier works great)
- Vercel account (optional, for deployment)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rahadarmannabid/Open_Source_Software_Download_Website.git
   cd Open_Source_Software_Download_Website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Firebase:**
   
   Create a `.env.local` file in the root directory:
   ```bash
   # Firebase Configuration
   FIREBASE_DATABASE_URL=https://your-project.firebaseio.com
   
   # Service Account (JSON - get from Firebase Console)
   FIREBASE_SERVICE_ACCOUNT={"type":"service_account","project_id":"..."}
   ```

4. **Run locally:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it.

5. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## 🔧 Configuration

### Adding a New Tool

1. **Add tool data** in `lib/tools.ts`:
   ```typescript
   {
     id: "my-tool",
     name: "My Tool",
     tagline: "Short description",
     description: "Longer description",
     fullDescription: "Complete abstract/description",
     icon: "🎯",
     category: "Education", // or "Analysis"
     type: "extension", // or "webapp"
     authors: ["Author Name 1", "Author Name 2"],
     maintainer: "Maintainer Name", // optional
     features: [
       {
         icon: "🎨",
         title: "Feature Name",
         description: "Feature description"
       }
     ],
     downloadFile: "/downloads/my-tool/my-tool.zip", // for extensions
     webappUrl: "https://your-webapp.com", // for web apps
     demoVideo: "https://youtube.com/embed/...",
     installationSteps: [
       {
         title: "Step 1",
         description: "Step description"
       }
     ]
   }
   ```

2. **Add download files** (for extensions):
   ```bash
   public/downloads/my-tool/my-tool.zip
   ```

3. **Add teaser images** (optional):
   ```bash
   public/teasers/my-tool/
     ├── image1.png
     ├── image2.png
     └── image3.png
   ```

Images are automatically detected and displayed!

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   ├── downloads/       # Download tracking API
│   │   ├── comments/        # Comment system API
│   │   └── teasers/         # Dynamic image loading API
│   ├── tools/[id]/          # Dynamic tool detail pages
│   └── page.tsx             # Home page
├── components/
│   └── CommentSection.tsx   # Reusable comment component
├── lib/
│   ├── tools.ts             # Tool configuration
│   └── firebase.ts          # Firebase initialization
├── public/
│   ├── downloads/           # Tool ZIP files
│   │   ├── expert-goggles/
│   │   ├── datavis-decomposer/
│   │   └── autosuggestion-quiz/
│   └── teasers/             # Tool teaser images
│       ├── expert-goggles/
│       ├── datavis-decomposer/
│       └── autosuggestion-quiz/
└── README.md
```

## 🌐 Deploy to Vercel

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Import Project"
3. Select your repository
4. Click "Deploy"

### Step 3: Add Environment Variables

In Vercel Dashboard → Your Project → Settings → Environment Variables:

1. Add `FIREBASE_DATABASE_URL`:
   - Value: Your Firebase database URL
   - Environments: Production, Preview, Development

2. Add `FIREBASE_SERVICE_ACCOUNT`:
   - Value: Your Firebase service account JSON (entire JSON string)
   - Environments: Production, Preview, Development

3. **Redeploy** after adding variables

## 🔥 Firebase Setup

### Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Go to **Realtime Database** → Create Database
4. Start in **test mode** (or configure rules)

### Get Credentials

1. **Database URL**: Found in Realtime Database settings
2. **Service Account**:
   - Go to Project Settings → Service Accounts
   - Click "Generate New Private Key"
   - Download the JSON file
   - Copy entire JSON content to `FIREBASE_SERVICE_ACCOUNT`

### Database Structure

The app automatically creates this structure:
```
{
  "downloads": {
    "expert-goggles": { "count": 42 },
    "datavis-decomposer": { "count": 28 }
  },
  "comments": {
    "expert-goggles": {
      "comment-id-1": {
        "username": "User",
        "rating": 5,
        "comment": "Great tool!",
        "timestamp": 1234567890
      }
    }
  }
}
```

## 🎨 Customization

### Change Theme Colors

Edit colors in Tailwind classes:
- Primary: `#9D2235` (Temple University Cherry)
- Accent: `purple-600`

Search and replace in files to change globally.

### Modify Layout

- **Home page**: `app/page.tsx`
- **Tool detail page**: `app/tools/[id]/page.tsx`
- **Global layout**: `app/layout.tsx`

## 📊 Analytics & Tracking

- **Download Tracking**: Firebase Realtime Database
- **Launch Tracking**: Same database, different metrics for web apps
- **Comments**: Stored with timestamps in Firebase
- **Real-time Updates**: Download counts update instantly

## 🛠️ Development

### Run Development Server
```bash
npm run dev
```

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

### Build
```bash
npm run build
```

## 📝 Documentation Files

- `FIREBASE_SETUP.md` - Detailed Firebase setup guide
- `FIREBASE_QUICK_START.md` - Quick Firebase integration guide
- `HOW_TO_ADD_NEW_TOOL.md` - Step-by-step tool addition guide
- `MULTI_TOOL_GUIDE.md` - Multi-tool architecture overview
- `COMMENTS_FEATURE.md` - Comment system documentation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

Open source - feel free to use and modify for your projects!

## 🙏 Credits

### Expert Goggles
- Authors: Stephen MacNeil, Parth Patel, Benjamin E. Smolin
- Maintained by: Rahad Arman Nabid

### DataVis Decomposer
- Authors: Rahad Arman Nabid, Victor Jimenez Lorenzo, Nur Siddiq, Stephen MacNeil

### Autosuggestion Quiz
- Authors: Stephen MacNeil, James Prather, Rahad Arman Nabid, Sebastian Gutierrez, Silas Carvalho, Saimon Shrestha, Paul Denny, Brent N. Reeves, Juho Leinonen, Rachel Louise Rossetti

## 🔗 Links

- **Live Site**: [www.opentool.store](https://www.opentool.store)
- **GitHub**: [rahadarmannabid/Open_Source_Software_Download_Website](https://github.com/rahadarmannabid/Open_Source_Software_Download_Website)
- **Documentation**: See docs in repository

## 🐛 Troubleshooting

### Firebase Errors
- Ensure environment variables are set correctly
- Check Firebase database rules allow read/write
- Verify service account has proper permissions

### Build Errors
- Run `npm install` to ensure dependencies are updated
- Check for TypeScript errors: `npm run type-check`
- Clear Next.js cache: `rm -rf .next`

### Deployment Issues
- Verify Vercel environment variables are set
- Check build logs in Vercel dashboard
- Ensure Firebase credentials are valid

---

Built with ❤️ using Next.js, TypeScript, and Firebase
