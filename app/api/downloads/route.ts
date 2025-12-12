import { NextResponse } from 'next/server';

// This will be replaced with Vercel KV when deployed
// For now, we'll use a simple counter API approach

export async function GET() {
  try {
    // Use a free counter API service that works globally
    const response = await fetch('https://api.countapi.xyz/get/expert-goggles-rahadarmannabid/downloads');
    const data = await response.json();
    
    return NextResponse.json({ count: data.value || 0 });
  } catch (error) {
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}

export async function POST() {
  try {
    // Increment the counter
    const response = await fetch('https://api.countapi.xyz/hit/expert-goggles-rahadarmannabid/downloads');
    const data = await response.json();
    
    return NextResponse.json({ count: data.value || 0 });
  } catch (error) {
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}

