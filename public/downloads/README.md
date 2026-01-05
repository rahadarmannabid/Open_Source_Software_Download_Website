# Downloads Directory

This directory contains downloadable files for each tool available on the website.

## Structure

Each tool has its own folder containing its downloadable ZIP file:

```
downloads/
├── expert-goggles/
│   └── expert-goggles.zip
├── datavis-decomposer/
│   └── datavis-decomposer.zip
└── autosuggestion-quiz/
    └── autosuggestion-quiz.zip
```

## Organization

- **Tool-specific folders**: Each tool has its own directory named after its tool ID
- **Consistent naming**: ZIP files are named to match their tool ID for easy identification
- **Version control friendly**: Organized structure makes it easier to track changes and updates

## Adding Downloads for a New Tool

1. Create a new folder with the tool's ID (e.g., `my-new-tool/`)
2. Add the ZIP file to that folder (e.g., `my-new-tool.zip`)
3. Update the `downloadFile` path in `lib/tools.ts`:
   ```typescript
   downloadFile: "/downloads/my-new-tool/my-new-tool.zip"
   ```

## Notes

- The autosuggestion-quiz folder exists for consistency but the tool is a web app (no actual download)
- Keep ZIP file sizes reasonable for download performance
- Test download links after adding or updating files
- Consider adding version numbers to filenames for major updates (e.g., `tool-name-v2.0.zip`)

