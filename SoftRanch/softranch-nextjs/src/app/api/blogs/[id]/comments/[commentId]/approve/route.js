import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import Blog from '@/lib/models/Blog';
import catchAsync from '@/lib/utils/catchAsync';
import { protect, restrictTo } from '@/lib/middleware/auth';

// PATCH /api/blogs/[id]/comments/[commentId]/approve - Approve comment (admin/editor only)
export const PATCH = catchAsync(async (req, { params }) => {
  await connectDB();
  
  // Protect route and restrict to admin/editor
  const user = await protect(req);
  restrictTo('admin', 'editor')(user);
  
  const { id, commentId } = params;
  
  const blog = await Blog.findById(id);
  
  if (!blog) {
    return NextResponse.json({
      status: 'fail',
      message: 'No blog found with that ID'
    }, { status: 404 });
  }
  
  const comment = await blog.approveComment(commentId);
  
  if (!comment) {
    return NextResponse.json({
      status: 'fail',
      message: 'No comment found with that ID'
    }, { status: 404 });
  }
  
  return NextResponse.json({
    status: 'success',
    data: comment
  }, { status: 200 });
});