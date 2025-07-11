import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import User from '@/lib/models/User';
import APIFeatures from '@/lib/utils/apiFeatures';
import catchAsync from '@/lib/utils/catchAsync';
import { protect, restrictTo } from '@/lib/middleware/auth';

// GET /api/users - Get all users (admin only)
export const GET = catchAsync(async (req) => {
  await connectDB();
  
  // Protect route and restrict to admin
  const user = await protect(req);
  restrictTo('admin')(user);
  
  const { searchParams } = new URL(req.url);
  const queryObj = Object.fromEntries(searchParams.entries());
  
  const features = new APIFeatures(User.find(), queryObj)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  
  const users = await features.query;
  
  return NextResponse.json({
    status: 'success',
    results: users.length,
    data: users
  }, { status: 200 });
});