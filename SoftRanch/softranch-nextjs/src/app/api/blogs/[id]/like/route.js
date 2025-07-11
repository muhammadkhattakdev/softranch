import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import Blog from '@/lib/models/Blog';
import catchAsync from '@/lib/utils/catchAsync';
import { protect } from '@/lib/middleware/auth';

// POST /api/blogs/[id]/like - Like/Unlike blog
export const POST = catchAsync(async (req, { params }) => {
  await connectDB();
  
  // Protect route
  const user = await protect(req);
  
  const { id } = params;
  
  const blog = await Blog.findById(id);
  
  if (!blog) {
    return NextResponse.json({
      status: 'fail',
      message: 'No blog found with that ID'
    }, { status: 404 });
  }
  
  const isLiked = await blog.toggleLike(user._id);
  
  return NextResponse.json({
    status: 'success',
    liked: isLiked,
    likeCount: blog.likeCount
  }, { status: 200 });
});