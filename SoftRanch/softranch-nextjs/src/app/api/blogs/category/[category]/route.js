import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import Blog from '@/lib/models/Blog';
import catchAsync from '@/lib/utils/catchAsync';

// GET /api/blogs/category/[category] - Get blogs by category
export const GET = catchAsync(async (req, { params }) => {
  await connectDB();
  
  const { category } = params;
  
  const blogs = await Blog.findByCategory(category)
    .populate('author', 'name avatar');
  
  return NextResponse.json({
    status: 'success',
    results: blogs.length,
    data: blogs
  }, { status: 200 });
});