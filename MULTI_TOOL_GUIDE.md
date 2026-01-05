# Multi-Tool Showcase Website

## 🎉 Overview

Your website has been transformed into a **multi-tool showcase platform** where you can display all your open-source research tools in one place!

## ✨ What's New

### 1. **Home Page** - Tool Grid
- Beautiful grid layout showing all your tools
- Category filter buttons (All, Education, Analysis)
- Each tool has a card with icon, description, and features preview
- Click any tool to view its detailed page

### 2. **Individual Tool Pages**
Each tool gets its own page at `/tools/{tool-id}`:
- **Expert Goggles**: `/tools/expert-goggles`
- **DataVis Decomposer**: `/tools/datavis-decomposer`
- **Autosuggestion Quiz**: `/tools/autosuggestion-quiz`

Each tool page includes:
- ✅ Tool name, icon, and tagline
- ✅ Detailed description
- ✅ Download button with counter
- ✅ Demo video (if available)
- ✅ Screenshots gallery
- ✅ Key features grid
- ✅ Step-by-step installation guide
- ✅ Links to GitHub and documentation

### 3. **Smart Download Tracking**
- Each tool has its own download counter
- Tracks downloads independently per tool
- Uses Vercel KV (Redis) for persistence
- No database setup required!

### 4. **Easy to Extend**
- Add new tools by editing one file (`lib/tools.ts`)
- Automatic routing and page generation
- Category filter updates automatically

---

## 📁 Project Structure

```
/
├── app/
│   ├── page.tsx                    # Home page with tool grid
│   ├── tools/
│   │   └── [id]/
│   │       └── page.tsx            # Dynamic tool detail pages
│   └── api/
│       └── downloads/
│           └── route.ts            # Download tracking API
├── lib/
│   └── tools.ts                    # All tool data (EDIT THIS!)
├── public/
│   ├── Extension.zip               # Expert Goggles
│   ├── tools/
│   │   ├── datavis-decomposer.zip
│   │   └── autosuggestion-quiz.zip
│   ├── demo/
│   │   └── *.mp4                   # Demo videos
│   └── screenshots/
│       └── *.png                   # Screenshots
└── HOW_TO_ADD_NEW_TOOL.md         # Guide for adding tools
```

---

## 🚀 Current Tools

### 1. Expert Goggles 🥽
- **Category**: Education
- **URL**: `/tools/expert-goggles`
- **Features**: Interactive learning, smart analysis, privacy-first
- **Status**: ✅ Complete with video and screenshots

### 2. DataVis Decomposer 🔬
- **Category**: Analysis
- **URL**: `/tools/datavis-decomposer`
- **Features**: Component analysis, design patterns, measurement tools
- **Status**: ⚠️ Placeholder (add your video/screenshots)

### 3. Autosuggestion Quiz 🎓
- **Category**: Education
- **URL**: `/tools/autosuggestion-quiz`
- **Features**: AI-powered, progress tracking, adaptive difficulty
- **Status**: ⚠️ Placeholder (add your video/screenshots)

---

## 🎨 Features

### Category Filtering
- Click "All" to show all tools
- Click "Education" to show only education tools
- Click "Analysis" to show only analysis tools
- Filter updates instantly without page reload

### Responsive Design
- Works perfectly on desktop, tablet, and mobile
- Beautiful dark mode support
- Smooth animations and transitions

### SEO Optimized
- Each tool gets its own URL
- Shareable links for each tool
- Proper meta tags and titles

---

## 📝 How to Add a New Tool

See **[HOW_TO_ADD_NEW_TOOL.md](./HOW_TO_ADD_NEW_TOOL.md)** for detailed instructions.

**Quick version:**
1. Edit `lib/tools.ts` and add tool data
2. Add ZIP file to `public/tools/`
3. Add video/screenshots to `public/`
4. Test locally with `npm run dev`
5. Deploy with `git push`

---

## 🔧 Customization

### Change Colors

The website uses Temple University's colors. To change:

**In `app/page.tsx`:**
```typescript
// Change from Temple red to your color
from-[#9D2235] to-[#7D1B2D]  →  from-blue-600 to-purple-600
```

**In `app/tools/[id]/page.tsx`:**
```typescript
// Same color changes
text-[#9D2235]  →  text-blue-600
bg-[#9D2235]    →  bg-blue-600
```

### Update Branding

**Header:**
- Edit `app/page.tsx` line 15-20 to change lab name

**Footer:**
- Edit footer section in both `page.tsx` and `tools/[id]/page.tsx`
- Update logo URL or replace with your logo

### Add New Categories

Just add a tool with a new category name:
```typescript
category: "Research"  // or "Design", "Utilities", etc.
```

The filter automatically includes new categories!

---

## 📊 Download Tracking

### How It Works
- Uses Vercel KV (Redis) for persistent storage
- Each tool has its own counter: `downloads:tool-id`
- Counter increments on each download
- Survives deployments and restarts

### Counter Keys
- Expert Goggles: `downloads:expert-goggles`
- DataVis Decomposer: `downloads:datavis-decomposer`
- Autosuggestion Quiz: `downloads:autosuggestion-quiz`
- Your tool: `downloads:your-tool-id`

### View Counts
Visit API endpoint:
```
GET /api/downloads?tool=expert-goggles
GET /api/downloads?tool=datavis-decomposer
```

---

## 🧪 Testing

The website has been tested and verified:
- ✅ Home page loads with all 3 tools
- ✅ Category filters work correctly
- ✅ Tool cards are clickable and navigate properly
- ✅ Individual tool pages display correctly
- ✅ Download buttons work
- ✅ Download counters initialize at 0
- ✅ Video player works (for Expert Goggles)
- ✅ Screenshot galleries display properly
- ✅ Installation guides show all steps
- ✅ Responsive on all screen sizes
- ✅ Dark mode works perfectly

---

## 🚀 Deployment

### Vercel (Recommended)

**First time:**
```bash
git add .
git commit -m "Multi-tool showcase website"
git push

# Then connect to Vercel at vercel.com
```

**Updates:**
```bash
git add .
git commit -m "Add new tool"
git push  # Auto-deploys!
```

### Environment Variables

For Vercel KV (download tracking), add in Vercel Dashboard:
- No environment variables needed!
- Vercel KV is automatically configured

---

## 📚 Key Files to Know

### `lib/tools.ts`
**Most important file!** Contains all tool data:
- Tool names, descriptions, features
- File paths for downloads, videos, screenshots
- Installation instructions
- GitHub/documentation links

Edit this file to:
- Add new tools
- Update tool information
- Change features or descriptions

### `app/page.tsx`
Home page component:
- Tool grid layout
- Category filtering
- Header and footer

### `app/tools/[id]/page.tsx`
Individual tool page template:
- Used for ALL tool pages
- Reads data from `lib/tools.ts`
- Dynamic routing based on tool ID

### `app/api/downloads/route.ts`
Download tracking API:
- GET: Fetch download count for a tool
- POST: Increment download count
- Stores in Vercel KV

---

## 💡 Tips

### Adding Content
1. **Start with tool data** in `lib/tools.ts`
2. **Add files** to `public/` directory
3. **Test locally** before deploying
4. **One commit per tool** for clean history

### Best Practices
- Use descriptive tool IDs (e.g., `data-analyzer` not `tool1`)
- Keep descriptions concise but informative
- Add 3-4 key features per tool
- Include screenshots showing main functionality
- Write clear installation steps

### Media Files
- **Videos**: Keep under 20 MB (compress if needed)
- **Screenshots**: Optimize with TinyPNG or similar
- **Icons**: Use emojis for consistency and fun
- **ZIP files**: Test downloads work correctly

---

## 🆘 Troubleshooting

### Tool not showing on home page?
- Check `lib/tools.ts` syntax
- Verify tool object is in the `tools` array
- Restart dev server: `npm run dev`

### Download not working?
- Check file path in `downloadFile` field
- Verify file exists in `public/` directory
- File path must start with `/`

### Category filter not working?
- Category names are case-sensitive
- Clear browser cache
- Check for console errors (F12)

### Page routing error?
- Tool `id` must match URL structure
- Use lowercase with hyphens (e.g., `my-tool` not `My Tool`)
- No spaces or special characters in IDs

---

## 📞 Support

For questions or issues:
1. Check [HOW_TO_ADD_NEW_TOOL.md](./HOW_TO_ADD_NEW_TOOL.md)
2. Review browser console for errors (F12)
3. Check Next.js docs: https://nextjs.org/docs
4. Verify Vercel deployment logs

---

## 🎯 Next Steps

1. **Replace placeholder files** for DataVis Decomposer and Autosuggestion Quiz
2. **Add your demo videos** for the new tools
3. **Add screenshots** showing each tool in action
4. **Update GitHub URLs** to your actual repositories
5. **Customize colors** to match your branding
6. **Add more tools** as you create them!

---

## 🎉 Congratulations!

You now have a professional, scalable platform for showcasing all your open-source research tools!

**Your website is ready to deploy at Vercel!** 🚀

---

*Built with Next.js, TypeScript, and Tailwind CSS*
*Hosted on Vercel with automatic deployments*
*Download tracking powered by Vercel KV*

