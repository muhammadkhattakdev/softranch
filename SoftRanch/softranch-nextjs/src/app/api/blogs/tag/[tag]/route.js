import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import Blog from '@/lib/models/Blog';
import catchAsync from '@/lib/utils/catchAsync';

// GET /api/blogs/tag/[tag] - Get blogs by tag
export const GET = catchAsync(async (req, { params }) => {
  await connectDB();
  
  const { tag } = params;
  
  const blogs = await Blog.findByTag(tag)
    .populate('author', 'name avatar');
  
  return NextResponse.json({
    status: 'success',
    results: blogs.length,
    data: blogs
  }, { status: 200 });
});