# How to Add a New Tool

This guide explains how to add a new tool to your multi-tool showcase website.

## Quick Steps

### 1. Add Tool Data

Edit `lib/tools.ts` and add a new tool object to the `tools` array:

```typescript
{
  id: "your-tool-id",                    // URL-friendly identifier
  name: "Your Tool Name",
  tagline: "Short compelling tagline",
  description: "Brief description for the card",
  fullDescription: "Detailed description for the tool page",
  icon: "🎯",                            // Emoji icon
  category: "Education",                 // or "Analysis", or create new category
  features: [
    {
      icon: "✨",
      title: "Feature Name",
      description: "Feature description"
    },
    // Add 3-4 features
  ],
  downloadFile: "/tools/your-tool.zip",
  demoVideo: "/demo/your-tool.mp4",      // Optional
  screenshots: [                          // Optional
    "/screenshots/tool1.png",
    "/screenshots/tool2.png"
  ],
  installationSteps: [
    {
      title: "Step Title",
      description: "Step description"
    },
    // Add all installation steps
  ],
  githubUrl: "https://github.com/user/repo",          // Optional
  documentationUrl: "https://docs.example.com"        // Optional
}
```

### 2. Add Your Files

Add your tool's files to the `public` directory:

```bash
# Add the tool ZIP file
cp your-tool.zip public/tools/your-tool.zip

# Add demo video (optional)
cp demo.mp4 public/demo/your-tool.mp4

# Add screenshots (optional)
cp screenshot1.png public/screenshots/your-tool-1.png
cp screenshot2.png public/screenshots/your-tool-2.png
```

### 3. Test Locally

```bash
npm run dev
```

Visit:
- **Home page**: http://localhost:3000
- **Your tool page**: http://localhost:3000/tools/your-tool-id

### 4. Deploy

```bash
git add .
git commit -m "Add [Tool Name]"
git push
```

Vercel will automatically deploy your changes!

---

## Example: Adding a New Tool

Let's add a tool called "Chart Builder":

### Step 1: Edit `lib/tools.ts`

```typescript
{
  id: "chart-builder",
  name: "Chart Builder",
  tagline: "Create stunning charts with drag-and-drop simplicity",
  description: "An intuitive tool for creating professional data visualizations without coding",
  fullDescription: "Chart Builder is a powerful yet easy-to-use tool that allows researchers and students to create professional-quality data visualizations through an intuitive drag-and-drop interface. No coding experience required!",
  icon: "📊",
  category: "Design",
  features: [
    {
      icon: "🎨",
      title: "Drag & Drop",
      description: "Build charts visually without writing code"
    },
    {
      icon: "📈",
      title: "Multiple Chart Types",
      description: "Bar, line, scatter, pie, and more"
    },
    {
      icon: "💾",
      title: "Export Options",
      description: "Save as PNG, SVG, or interactive HTML"
    },
    {
      icon: "🎯",
      title: "Data Import",
      description: "Import from CSV, Excel, or JSON"
    }
  ],
  downloadFile: "/tools/chart-builder.zip",
  demoVideo: "/demo/chart-builder.mp4",
  screenshots: [
    "/screenshots/chart-builder-1.png",
    "/screenshots/chart-builder-2.png",
    "/screenshots/chart-builder-3.png"
  ],
  installationSteps: [
    {
      title: "Download the Tool",
      description: "Click the download button to get the Chart Builder extension"
    },
    {
      title: "Extract Files",
      description: "Unzip the downloaded file to your computer"
    },
    {
      title: "Install Extension",
      description: "Load the extension in Chrome via chrome://extensions/"
    },
    {
      title: "Start Creating",
      description: "Click the Chart Builder icon and start making charts!"
    }
  ],
  githubUrl: "https://github.com/yourusername/chart-builder"
}
```

### Step 2: Add Files

```bash
# Create the ZIP file
cd public/tools
# Add your extension files here
cp ~/Downloads/chart-builder.zip .

# Add demo video
cd ../demo
cp ~/Downloads/chart-builder-demo.mp4 chart-builder.mp4

# Add screenshots
cd ../screenshots
cp ~/Downloads/cb1.png chart-builder-1.png
cp ~/Downloads/cb2.png chart-builder-2.png
cp ~/Downloads/cb3.png chart-builder-3.png
```

### Step 3: Test

```bash
npm run dev
```

Open http://localhost:3000 and verify:
- ✅ Tool appears on home page
- ✅ Tool card looks good
- ✅ Clicking opens tool detail page
- ✅ Download button works
- ✅ Demo video plays
- ✅ Screenshots display correctly

### Step 4: Deploy

```bash
git add .
git commit -m "Add Chart Builder tool"
git push
```

---

## Tips

### Categories

You can use existing categories or create new ones:
- `"Education"` - Learning tools
- `"Analysis"` - Data analysis tools
- `"Design"` - Design and creation tools
- `"Research"` - Research tools
- Or create your own!

### Icons

Use emojis for icons. Find emojis at:
- https://emojipedia.org/
- https://getemoji.com/

### File Sizes

Keep files reasonably sized:
- ZIP files: < 50 MB recommended
- Videos: < 20 MB recommended (compress if needed)
- Screenshots: < 2 MB each (optimize images)

### Screenshots

Best practices:
- Use high-quality screenshots
- Show key features
- Use consistent dimensions (1920x1080 recommended)
- Compress images with tools like TinyPNG

### Installation Steps

Tailor installation steps to your tool:
- Chrome extensions: 4-6 steps
- Standalone apps: 3-5 steps
- Web apps: 1-3 steps

---

## Categories Filter

The category filter automatically updates when you add tools with new categories. No additional configuration needed!

---

## Download Tracking

Download counts are tracked automatically per tool using Vercel KV (Redis). Each tool has its own counter:
- `downloads:expert-goggles`
- `downloads:datavis-decomposer`
- `downloads:your-tool-id`

No configuration needed - it just works!

---

## Troubleshooting

### Tool not appearing?
- Check that `id` is unique and URL-friendly (no spaces, lowercase)
- Verify the tool object is properly added to the `tools` array
- Restart the dev server

### Download not working?
- Verify the file path in `downloadFile` matches the actual file location
- Check that the file exists in the `public` directory
- File paths should start with `/` (e.g., `/tools/mytool.zip`)

### Images not loading?
- Ensure images are in the `public` directory
- Use paths starting with `/` (e.g., `/screenshots/image.png`)
- Check file names match exactly (case-sensitive)

### Category filter not working?
- Make sure `category` field is set correctly
- Category names are case-sensitive
- Clear browser cache and refresh

---

## Need Help?

If you encounter issues:
1. Check the browser console for errors (F12)
2. Verify all file paths are correct
3. Make sure Next.js dev server is running
4. Check for TypeScript errors in VS Code

---

Happy tool adding! 🚀

