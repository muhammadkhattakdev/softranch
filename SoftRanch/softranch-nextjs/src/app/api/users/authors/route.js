import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import User from '@/lib/models/User';
import catchAsync from '@/lib/utils/catchAsync';

// GET /api/users/authors - Get all authors (public)
export const GET = catchAsync(async (req) => {
  await connectDB();
  
  const authors = await User.find({
    role: { $in: ['author', 'admin', 'editor'] },
    isActive: true,
    isEmailVerified: true
  }).select('name bio jobTitle avatar socialLinks');
  
  return NextResponse.json({
    status: 'success',
    results: authors.length,
    data: authors
  }, { status: 200 });
});