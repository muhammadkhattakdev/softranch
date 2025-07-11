import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import User from '@/lib/models/User';
import catchAsync from '@/lib/utils/catchAsync';
import { protect, restrictTo } from '@/lib/middleware/auth';

// GET /api/users/[id] - Get single user
export const GET = catchAsync(async (req, { params }) => {
  await connectDB();
  
  // Protect route and restrict to admin
  const user = await protect(req);
  restrictTo('admin')(user);
  
  const { id } = params;
  
  const targetUser = await User.findById(id);
  
  if (!targetUser) {
    return NextResponse.json({
      status: 'fail',
      message: 'No user found with that ID'
    }, { status: 404 });
  }
  
  return NextResponse.json({
    status: 'success',
    data: targetUser
  }, { status: 200 });
});

// PATCH /api/users/[id] - Update user (admin only)
export const PATCH = catchAsync(async (req, { params }) => {
  await connectDB();
  
  // Protect route and restrict to admin
  const user = await protect(req);
  restrictTo('admin')(user);
  
  const { id } = params;
  const body = await req.json();
  
  // Don't allow password updates through this route
  if (body.password) {
    return NextResponse.json({
      status: 'fail',
      message: 'Cannot update password through this route'
    }, { status: 400 });
  }
  
  const updatedUser = await User.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true
  });
  
  if (!updatedUser) {
    return NextResponse.json({
      status: 'fail',
      message: 'No user found with that ID'
    }, { status: 404 });
  }
  
  return NextResponse.json({
    status: 'success',
    data: updatedUser
  }, { status: 200 });
});

// DELETE /api/users/[id] - Delete user (admin only)
export const DELETE = catchAsync(async (req, { params }) => {
  await connectDB();
  
  // Protect route and restrict to admin
  const user = await protect(req);
  restrictTo('admin')(user);
  
  const { id } = params;
  
  const deletedUser = await User.findByIdAndDelete(id);
  
  if (!deletedUser) {
    return NextResponse.json({
      status: 'fail',
      message: 'No user found with that ID'
    }, { status: 404 });
  }
  
  return NextResponse.json({
    status: 'success',
    data: null
  }, { status: 204 });
});