import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import Blog from '@/lib/models/Blog';
import catchAsync from '@/lib/utils/catchAsync';
import { protect } from '@/lib/middleware/auth';
import { validateComment } from '@/lib/validators';

// POST /api/blogs/[id]/comments - Add comment to blog
export const POST = catchAsync(async (req, { params }) => {
  await connectDB();
  
  // Protect route
  const user = await protect(req);
  
  const { id } = params;
  const body = await req.json();
  
  // Validate comment
  validateComment(body);
  
  const blog = await Blog.findById(id);
  
  if (!blog) {
    return NextResponse.json({
      status: 'fail',
      message: 'No blog found with that ID'
    }, { status: 404 });
  }
  
  if (!blog.isCommentEnabled) {
    return NextResponse.json({
      status: 'fail',
      message: 'Comments are disabled for this blog'
    }, { status: 403 });
  }
  
  const comment = await blog.addComment(user._id, body.content);
  
  // Populate user details for the new comment
  await blog.populate('comments.user', 'name avatar');
  
  return NextResponse.json({
    status: 'success',
    data: blog.comments.id(comment._id)
  }, { status: 201 });
});