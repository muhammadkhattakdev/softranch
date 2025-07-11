import { NextResponse } from 'next/server';
import crypto from 'crypto';
import connectDB from '@/lib/utils/db';
import User from '@/lib/models/User';
import catchAsync from '@/lib/utils/catchAsync';

export const GET = catchAsync(async (req, { params }) => {
  await connectDB();
  
  const { token } = params;
  
  // Hash the token
  const hashedToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');
  
  // Find user with token
  const user = await User.findOne({
    emailVerificationToken: hashedToken,
    emailVerificationExpires: { $gt: Date.now() }
  });
  
  if (!user) {
    return NextResponse.json({
      status: 'fail',
      message: 'Token is invalid or has expired'
    }, { status: 400 });
  }
  
  // Verify email
  user.isEmailVerified = true;
  user.emailVerificationToken = undefined;
  user.emailVerificationExpires = undefined;
  await user.save({ validateBeforeSave: false });
  
  return NextResponse.json({
    status: 'success',
    message: 'Email verified successfully'
  }, { status: 200 });
});