import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import Blog from '@/lib/models/Blog';
import catchAsync from '@/lib/utils/catchAsync';
import { protect, optionalAuth, restrictTo } from '@/lib/middleware/auth';
import { validateBlog } from '@/lib/validators';

// GET /api/blogs/[id] - Get single blog by ID or slug
export const GET = catchAsync(async (req, { params }) => {
  await connectDB();
  
  // Optional auth
  const user = await optionalAuth(req);
  
  const { id } = params;
  
  // Check if id is a valid MongoDB ID or slug
  let blog;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    blog = await Blog.findById(id)
      .populate('author', 'name email avatar bio jobTitle socialLinks')
      .populate('relatedPosts', 'title slug excerpt featuredImage category readTime');
  } else {
    blog = await Blog.findOne({ slug: id })
      .populate('author', 'name email avatar bio jobTitle socialLinks')
      .populate('relatedPosts', 'title slug excerpt featuredImage category readTime');
  }
  
  if (!blog) {
    return NextResponse.json({
      status: 'fail',
      message: 'No blog found with that ID'
    }, { status: 404 });
  }
  
  // Check if user can view unpublished blogs
  if (blog.status !== 'published' && (!user || (user.role === 'author' && blog.author._id.toString() !== user._id.toString()))) {
    return NextResponse.json({
      status: 'fail',
      message: 'You do not have permission to view this blog'
    }, { status: 403 });
  }
  
  // Increment views for published blogs
  if (blog.status === 'published') {
    await blog.incrementViews();
  }
  
  return NextResponse.json({
    status: 'success',
    data: blog
  }, { status: 200 });
});

// PATCH /api/blogs/[id] - Update blog
export const PATCH = catchAsync(async (req, { params }) => {
  await connectDB();
  
  // Protect route
  const user = await protect(req);
  
  const { id } = params;
  const body = await req.json();
  
  const blog = await Blog.findById(id);
  
  if (!blog) {
    return NextResponse.json({
      status: 'fail',
      message: 'No blog found with that ID'
    }, { status: 404 });
  }
  
  // Check permissions
  if (user.role === 'author' && blog.author.toString() !== user._id.toString()) {
    return NextResponse.json({
      status: 'fail',
      message: 'You do not have permission to update this blog'
    }, { status: 403 });
  }
  
  // Validate blog data
  validateBlog({ ...blog.toObject(), ...body });
  
  // Track edit history
  if (blog.content !== body.content || blog.title !== body.title) {
    await blog.addEditHistory(user._id, 'Content or title updated');
  }
  
  // Update blog
  Object.assign(blog, body);
  await blog.save();
  
  // Populate author details
  await blog.populate('author', 'name email avatar bio jobTitle');
  
  return NextResponse.json({
    status: 'success',
    data: blog
  }, { status: 200 });
});

// DELETE /api/blogs/[id] - Delete blog
export const DELETE = catchAsync(async (req, { params }) => {
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
  
  // Check permissions
  if (user.role === 'author' && blog.author.toString() !== user._id.toString()) {
    return NextResponse.json({
      status: 'fail',
      message: 'You do not have permission to delete this blog'
    }, { status: 403 });
  }
  
  await Blog.findByIdAndDelete(id);
  
  return NextResponse.json({
    status: 'success',
    data: null
  }, { status: 204 });
});