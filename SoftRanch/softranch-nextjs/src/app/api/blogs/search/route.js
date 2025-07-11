import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import Blog from '@/lib/models/Blog';
import catchAsync from '@/lib/utils/catchAsync';

// GET /api/blogs/search - Search blogs
export const GET = catchAsync(async (req) => {
  await connectDB();
  
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q');
  
  if (!q) {
    return NextResponse.json({
      status: 'success',
      results: 0,
      data: []
    }, { status: 200 });
  }
  
  const blogs = await Blog.searchBlogs(q)
    .populate('author', 'name avatar');
  
  return NextResponse.json({
    status: 'success',
    results: blogs.length,
    data: blogs
  }, { status: 200 });
});