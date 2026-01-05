# Teasers Directory

This directory contains teaser images for each tool displayed on the website.

## Structure

Each tool has its own folder named after its tool ID:

```
teasers/
├── expert-goggles/
│   ├── Screenshot1.png
│   ├── Screenshot2.png
│   └── Screenshot3.png
├── datavis-decomposer/
│   └── (add teaser images here)
└── autosuggestion-quiz/
    └── (add teaser images here)
```

## How It Works

1. The frontend automatically detects and loads all images from each tool's folder
2. Supported image formats: `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`
3. Images are sorted alphabetically and displayed in the "Teasers" section on each tool's page
4. No code changes needed - just add images to the appropriate folder!

## Adding Teasers for a New Tool

1. Create a new folder with the tool's ID (e.g., `my-new-tool/`)
2. Add teaser images to that folder
3. Images will automatically appear on the tool's detail page

## Notes

- Keep image file sizes reasonable for web performance (< 2MB per image recommended)
- Use descriptive filenames that will sort in the desired order
- Images are displayed in a responsive grid (3 columns on large screens, 2 on medium, 1 on mobile)

