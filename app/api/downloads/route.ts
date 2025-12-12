import { NextResponse } from 'next/server';

// Global download counter for all users worldwide
// Simple solution that works immediately and can be upgraded to Vercel KV later

// In-memory counter (persists during server runtime)
// When deployed to Vercel, upgrade to Vercel KV for true persistence
let downloadCounter = 0;

export async function GET() {
  // Return current download count
  return NextResponse.json({ count: downloadCounter });
}

export async function POST() {
  // Increment download count
  downloadCounter++;
  return NextResponse.json({ count: downloadCounter });
}

