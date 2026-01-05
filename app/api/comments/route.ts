import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { initAdmin } from '@/lib/firebase';

// Comments API for all tools
// Structure: comments/{toolId}/{commentId}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const toolId = searchParams.get('tool') || 'expert-goggles';
    
    // Get all comments for this tool
    const db = initAdmin();
    const ref = db.ref(`comments/${toolId}`);
    const snapshot = await ref.once('value');
    const commentsData = snapshot.val() || {};
    
    // Convert object to array and sort by timestamp (newest first)
    const comments = Object.entries(commentsData).map(([id, data]: [string, any]) => ({
      id,
      ...data,
    })).sort((a, b) => b.timestamp - a.timestamp);
    
    return NextResponse.json({ comments, tool: toolId });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json({ comments: [], error: 'Failed to fetch comments' });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { tool, username, rating, comment } = body;
    
    // Validation
    if (!tool || !username || !rating || !comment) {
      return NextResponse.json(
        { error: 'Missing required fields: tool, username, rating, comment' },
        { status: 400 }
      );
    }
    
    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }
    
    if (username.length > 50) {
      return NextResponse.json(
        { error: 'Username must be 50 characters or less' },
        { status: 400 }
      );
    }
    
    if (comment.length > 1000) {
      return NextResponse.json(
        { error: 'Comment must be 1000 characters or less' },
        { status: 400 }
      );
    }
    
    // Add comment to Firebase
    const db = initAdmin();
    const commentsRef = db.ref(`comments/${tool}`);
    const newCommentRef = commentsRef.push();
    
    const commentData = {
      username: username.trim(),
      rating: Number(rating),
      comment: comment.trim(),
      timestamp: Date.now(),
      date: new Date().toISOString(),
    };
    
    await newCommentRef.set(commentData);
    
    return NextResponse.json({ 
      success: true, 
      commentId: newCommentRef.key,
      comment: { id: newCommentRef.key, ...commentData }
    });
  } catch (error) {
    console.error('Error posting comment:', error);
    return NextResponse.json(
      { error: 'Failed to post comment' },
      { status: 500 }
    );
  }
}

