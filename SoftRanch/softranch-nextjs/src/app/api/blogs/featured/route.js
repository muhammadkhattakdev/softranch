import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import Blog from '@/lib/models/Blog';
import catchAsync from '@/lib/utils/catchAsync';

// GET /api/blogs/featured - Get featured blogs
export const GET = catchAsync(async (req) => {
  await connectDB();
  
  const blogs = await Blog.findFeatured()
    .limit(6)
    .populate('author', 'name avatar');
  
  return NextResponse.json({
    status: 'success',
    results: blogs.length,
    data: blogs
  }, { status: 200 });
});