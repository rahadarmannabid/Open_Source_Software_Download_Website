import { NextResponse } from 'next/server';

// This will be replaced with Vercel KV when deployed
// For now, we'll use a simple counter API approach

export async function GET() {
  try {
    // Use a free counter API service that works globally
    const response = await fetch('https://api.countapi.xyz/get/expert-goggles-rahadarmannabid/downloads');
    
    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch counter' },
        { status: 500 }
      );
    }
    
    const data = await response.json();
    return NextResponse.json({ count: data.value || 0 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch counter' },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    // Increment the counter
    const response = await fetch('https://api.countapi.xyz/hit/expert-goggles-rahadarmannabid/downloads');
    
    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to increment counter' },
        { status: 500 }
      );
    }
    
    const data = await response.json();
    return NextResponse.json({ count: data.value || 0 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to increment counter' },
      { status: 500 }
    );
  }
}

