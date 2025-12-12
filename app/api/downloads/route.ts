import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

// Global download counter for all users worldwide
// Using Vercel KV (Redis) for persistent storage across all deployments

const COUNTER_KEY = 'expert-goggles-download-count';

export async function GET() {
  try {
    // Get current download count from KV
    const count = await kv.get<number>(COUNTER_KEY);
    return NextResponse.json({ count: count || 0 });
  } catch (error) {
    console.error('Error fetching download count:', error);
    return NextResponse.json({ count: 0 });
  }
}

export async function POST() {
  try {
    // Increment download count in KV
    const newCount = await kv.incr(COUNTER_KEY);
    return NextResponse.json({ count: newCount });
  } catch (error) {
    console.error('Error incrementing download count:', error);
    return NextResponse.json(
      { error: 'Failed to increment counter' },
      { status: 500 }
    );
  }
}

