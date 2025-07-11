import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import User from '@/lib/models/User';
import catchAsync from '@/lib/utils/catchAsync';
import { protect, restrictTo } from '@/lib/middleware/auth';

// PATCH /api/users/[id]/deactivate - Deactivate user (admin only)
export const PATCH = catchAsync(async (req, { params }) => {
  await connectDB();
  
  // Protect route and restrict to admin
  const user = await protect(req);
  restrictTo('admin')(user);
  
  const { id } = params;
  
  const deactivatedUser = await User.findByIdAndUpdate(
    id,
    { isActive: false },
    { new: true, runValidators: true }
  );
  
  if (!deactivatedUser) {
    return NextResponse.json({
      status: 'fail',
      message: 'No user found with that ID'
    }, { status: 404 });
  }
  
  return NextResponse.json({
    status: 'success',
    data: deactivatedUser
  }, { status: 200 });
});