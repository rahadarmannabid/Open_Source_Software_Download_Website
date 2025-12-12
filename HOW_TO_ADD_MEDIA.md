# How to Add Video and Screenshots

## 📹 Adding Your Demo Video

### Option 1: Host Video on YouTube/Vimeo (Recommended)

1. **Upload your video** to YouTube or Vimeo
2. **Get the embed code** or video URL
3. **Update `app/page.tsx`** - Replace the placeholder:

Find this section (around line 140):

```tsx
<div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
  <div className="text-center">
    <svg className="w-16 h-16 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <p className="text-base text-gray-600 dark:text-gray-400">Demo video coming soon</p>
    <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Upload your demo video here</p>
  </div>
</div>
```

Replace with:

```tsx
<div className="aspect-video rounded-lg overflow-hidden border-2 border-gray-300 dark:border-gray-600">
  <iframe 
    className="w-full h-full" 
    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
    title="Expert Goggles Demo"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>
```

**For YouTube:** Replace `YOUR_VIDEO_ID` with your video ID from the URL
- URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Embed: `https://www.youtube.com/embed/dQw4w9WgXcQ`

**For Vimeo:** Use `https://player.vimeo.com/video/YOUR_VIDEO_ID`

### Option 2: Self-Host Video File

1. **Add video to public folder:**
```bash
cp /path/to/your/demo.mp4 public/demo.mp4
```

2. **Update `app/page.tsx`:**
```tsx
<div className="aspect-video rounded-lg overflow-hidden border-2 border-gray-300 dark:border-gray-600">
  <video className="w-full h-full" controls>
    <source src="/demo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
```

---

## 📸 Adding Screenshots

### Step 1: Prepare Your Screenshots

Create a screenshots folder:
```bash
mkdir -p public/screenshots
```

Add your images:
```bash
cp /path/to/screenshot1.png public/screenshots/main-interface.png
cp /path/to/screenshot2.png public/screenshots/learning-mode.png
cp /path/to/screenshot3.png public/screenshots/visualization.png
```

### Step 2: Update the Code

Find the screenshots section in `app/page.tsx` (around line 165):

```tsx
<div className="space-y-4">
  <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center border border-gray-300 dark:border-gray-600">
    <div className="text-center">
      <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <p className="text-sm text-gray-600 dark:text-gray-400">Screenshot 1</p>
    </div>
  </div>
```

Replace with:

```tsx
<div className="space-y-4">
  {/* Main Screenshot */}
  <div className="aspect-video rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
    <img 
      src="/screenshots/main-interface.png" 
      alt="Expert Goggles Main Interface"
      className="w-full h-full object-cover"
    />
  </div>
  
  {/* Small Screenshots Grid */}
  <div className="grid grid-cols-2 gap-2">
    <div className="aspect-video rounded overflow-hidden border border-gray-300 dark:border-gray-600">
      <img 
        src="/screenshots/learning-mode.png" 
        alt="Learning Mode"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="aspect-video rounded overflow-hidden border border-gray-300 dark:border-gray-600">
      <img 
        src="/screenshots/visualization.png" 
        alt="Visualization Example"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
```

---

## 🎨 Image Recommendations

### Video Specifications:
- **Format:** MP4 (H.264)
- **Resolution:** 1920x1080 (Full HD)
- **Duration:** 1-3 minutes
- **File Size:** < 50MB (if self-hosting)

### Screenshot Specifications:
- **Format:** PNG or JPG
- **Main screenshot:** 1920x1080 or 1600x900
- **Small screenshots:** 800x450 or similar
- **File Size:** < 500KB each (optimize with tools like TinyPNG)

---

## 🚀 Quick Example

Here's a complete working example:

### 1. Add files:
```bash
# Create directory
mkdir -p public/screenshots

# Copy your files
cp ~/Desktop/expert-goggles-demo.mp4 public/demo.mp4
cp ~/Desktop/screenshot-1.png public/screenshots/interface.png
cp ~/Desktop/screenshot-2.png public/screenshots/learning.png
cp ~/Desktop/screenshot-3.png public/screenshots/viz.png
```

### 2. Edit `app/page.tsx`:

Replace the **Video Demo** section:
```tsx
<div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Video Demo</h3>
  <div className="aspect-video rounded-lg overflow-hidden border-2 border-gray-300 dark:border-gray-600">
    <video className="w-full h-full" controls>
      <source src="/demo.mp4" type="video/mp4" />
    </video>
  </div>
</div>
```

Replace the **Screenshots** section:
```tsx
<div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Interface Screenshots</h3>
  <div className="space-y-4">
    <div className="aspect-video rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
      <img src="/screenshots/interface.png" alt="Main Interface" className="w-full h-full object-cover" />
    </div>
    <div className="grid grid-cols-2 gap-2">
      <div className="aspect-video rounded overflow-hidden border border-gray-300 dark:border-gray-600">
        <img src="/screenshots/learning.png" alt="Learning Mode" className="w-full h-full object-cover" />
      </div>
      <div className="aspect-video rounded overflow-hidden border border-gray-300 dark:border-gray-600">
        <img src="/screenshots/viz.png" alt="Visualization" className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</div>
```

### 3. Test:
```bash
npm run dev
```

Open http://localhost:3000 and verify your media appears!

---

## 🔧 Troubleshooting

### Video not showing?
- Check file path: `/public/demo.mp4` should be accessible at `/demo.mp4`
- Verify format: Use MP4 with H.264 codec
- Check file size: Vercel has 50MB limit per file

### Screenshots not loading?
- Verify files are in `public/screenshots/`
- Check file names match exactly (case-sensitive)
- Use relative paths starting with `/`

### Styling issues?
- All containers use `aspect-video` (16:9 ratio)
- Images use `object-cover` to fill containers
- Borders are consistent across all media

---

## 📝 Best Practices

1. **Optimize images** before uploading (use tools like ImageOptim, TinyPNG)
2. **Use descriptive filenames** (e.g., `expert-goggles-main-interface.png`)
3. **Add alt text** for accessibility
4. **Test on mobile** to ensure responsive design works
5. **Use YouTube/Vimeo** for large videos to save bandwidth

---

Your media section is ready! Just add your files and update the code. 🎉

