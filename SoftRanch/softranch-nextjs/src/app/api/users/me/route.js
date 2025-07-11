import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import User from '@/lib/models/User';
import catchAsync from '@/lib/utils/catchAsync';
import { protect } from '@/lib/middleware/auth';
import { validateUpdateUser } from '@/lib/validators';

// Filter object to only include allowed fields
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

// GET /api/users/me - Get current user
export const GET = catchAsync(async (req) => {
  await connectDB();
  
  // Protect route
  const user = await protect(req);
  
  return NextResponse.json({
    status: 'success',
    data: user
  }, { status: 200 });
});

// PATCH /api/users/me - Update current user
export const PATCH = catchAsync(async (req) => {
  await connectDB();
  
  // Protect route
  const user = await protect(req);
  
  const body = await req.json();
  
  // Create error if user POSTs password data
  if (body.password || body.passwordConfirm) {
    return NextResponse.json({
      status: 'fail',
      message: 'This route is not for password updates. Please use /api/auth/update-password'
    }, { status: 400 });
  }
  
  // Filter out unwanted fields
  const filteredBody = filterObj(body, 'name', 'email', 'bio', 'jobTitle', 'socialLinks');
  
  // Validate update data
  validateUpdateUser(filteredBody);
  
  // Update user document
  const updatedUser = await User.findByIdAndUpdate(user._id, filteredBody, {
    new: true,
    runValidators: true
  });
  
  return NextResponse.json({
    status: 'success',
    data: updatedUser
  }, { status: 200 });
});

// DELETE /api/users/me - Delete current user (soft delete)
export const DELETE = catchAsync(async (req) => {
  await connectDB();
  
  // Protect route
  const user = await protect(req);
  
  await User.findByIdAndUpdate(user._id, { isActive: false });
  
  return NextResponse.json({
    status: 'success',
    data: null
  }, { status: 204 });
});