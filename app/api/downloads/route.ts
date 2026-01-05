import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { initAdmin } from '@/lib/firebase';

// Download counter for all tools
// Using Firebase Realtime Database for persistent storage across all deployments
// Each tool has its own counter at path: 'downloads/{toolId}'

export async function GET(request: NextRequest) {
  try {
    // Get tool parameter from query string
    const searchParams = request.nextUrl.searchParams;
    const toolId = searchParams.get('tool') || 'expert-goggles';
    
    // Get current download count from Firebase
    const db = initAdmin();
    const ref = db.ref(`downloads/${toolId}`);
    const snapshot = await ref.once('value');
    const count = snapshot.val() || 0;
    
    return NextResponse.json({ count, tool: toolId });
  } catch (error) {
    console.error('Error fetching download count:', error);
    return NextResponse.json({ count: 0 });
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get tool parameter from request body
    const body = await request.json();
    const toolId = body.tool || 'expert-goggles';
    
    // Increment download count in Firebase using transaction
    const db = initAdmin();
    const ref = db.ref(`downloads/${toolId}`);
    
    // Use transaction to safely increment the counter
    const result = await ref.transaction((currentValue) => {
      return (currentValue || 0) + 1;
    });
    
    const newCount = result.snapshot.val();
    return NextResponse.json({ count: newCount, tool: toolId });
  } catch (error) {
    console.error('Error incrementing download count:', error);
    return NextResponse.json(
      { error: 'Failed to increment counter' },
      { status: 500 }
    );
  }
}

