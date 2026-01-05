import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const toolId = searchParams.get('tool');

  if (!toolId) {
    return NextResponse.json({ error: 'Tool ID is required' }, { status: 400 });
  }

  try {
    // Path to the teaser folder for this tool
    const teaserPath = path.join(process.cwd(), 'public', 'teasers', toolId);

    // Check if directory exists
    if (!fs.existsSync(teaserPath)) {
      return NextResponse.json({ teasers: [] });
    }

    // Read all files in the directory
    const files = fs.readdirSync(teaserPath);

    // Filter for image files and create public URLs
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];
    const teasers = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return imageExtensions.includes(ext);
      })
      .sort() // Sort alphabetically
      .map(file => `/teasers/${toolId}/${file}`);

    return NextResponse.json({ teasers });
  } catch (error) {
    console.error('Error reading teaser images:', error);
    return NextResponse.json({ error: 'Failed to load teasers' }, { status: 500 });
  }
}

