import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import Blog from '@/lib/models/Blog';
import catchAsync from '@/lib/utils/catchAsync';

// GET /api/blogs/[id]/related - Get related blogs
export const GET = catchAsync(async (req, { params }) => {
  await connectDB();
  
  const { id } = params;
  
  const blog = await Blog.findById(id);
  
  if (!blog) {
    return NextResponse.json({
      status: 'fail',
      message: 'No blog found with that ID'
    }, { status: 404 });
  }
  
  // Find related blogs based on category and tags
  const relatedBlogs = await Blog.find({
    _id: { $ne: blog._id },
    status: 'published',
    $or: [
      { category: blog.category },
      { tags: { $in: blog.tags } }
    ]
  })
    .limit(4)
    .sort('-publishedAt')
    .populate('author', 'name avatar');
  
  return NextResponse.json({
    status: 'success',
    results: relatedBlogs.length,
    data: relatedBlogs
  }, { status: 200 });
});