import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import Blog from '@/lib/models/Blog';
import APIFeatures from '@/lib/utils/apiFeatures';
import catchAsync from '@/lib/utils/catchAsync';
import { protect, optionalAuth } from '@/lib/middleware/auth';
import { validateBlog } from '@/lib/validators';

// GET /api/blogs - Get all blogs with filtering, sorting, pagination
export const GET = catchAsync(async (req) => {
  await connectDB();
  
  // Optional auth for viewing purposes
  const user = await optionalAuth(req);
  
  const { searchParams } = new URL(req.url);
  const queryObj = Object.fromEntries(searchParams.entries());
  
  // For public access, only show published blogs
  if (!user || user.role === 'author') {
    queryObj.status = 'published';
  }
  
  // Execute query with features
  const features = new APIFeatures(Blog.find(), queryObj)
    .filter()
    .sort()
    .limitFields()
    .paginate()
    .search();
  
  const blogs = await features.query.populate('author', 'name email avatar bio jobTitle');
  
  // Get total count for pagination
  const totalCount = await Blog.countDocuments(features.query._conditions);
  
  return NextResponse.json({
    status: 'success',
    results: blogs.length,
    totalCount,
    page: queryObj.page * 1 || 1,
    limit: queryObj.limit * 1 || 10,
    data: blogs
  }, { status: 200 });
});

// POST /api/blogs - Create new blog
export const POST = catchAsync(async (req) => {
  await connectDB();
  
  // Protect route
  const user = await protect(req);
  
  const body = await req.json();
  
  // Validate blog data
  validateBlog(body);
  
  // Set author to current user
  body.author = user._id;
  
  // Create blog
  const blog = await Blog.create(body);
  
  // Populate author details
  await blog.populate('author', 'name email avatar bio jobTitle');
  
  return NextResponse.json({
    status: 'success',
    data: blog
  }, { status: 201 });
});