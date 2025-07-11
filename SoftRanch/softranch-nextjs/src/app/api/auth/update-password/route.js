import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import User from '@/lib/models/User';
import catchAsync from '@/lib/utils/catchAsync';
import { protect } from '@/lib/middleware/auth';
import { validatePassword } from '@/lib/validators';

// Generate and send tokens
const createSendToken = async (user, statusCode) => {
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();
  
  // Cookie options
  const cookieOptions = {
    expires: new Date(
      Date.now() + (process.env.JWT_COOKIE_EXPIRES_IN || 7) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
    path: '/'
  };
  
  // Save refresh token to database
  await User.findByIdAndUpdate(
    user._id,
    { refreshToken: refreshToken },
    { new: false, validateBeforeSave: false }
  );
  
  // Remove password and refreshToken from output
  user.password = undefined;
  user.refreshToken = undefined;
  
  // Create response
  const response = NextResponse.json({
    status: 'success',
    accessToken,
    user
  }, { status: statusCode });
  
  // Set refresh token as httpOnly cookie
  response.cookies.set('refreshToken', refreshToken, cookieOptions);
  
  return response;
};

export const PATCH = catchAsync(async (req) => {
  await connectDB();
  
  // Protect route
  const currentUser = await protect(req);
  
  const body = await req.json();
  const { currentPassword, newPassword } = body;
  
  if (!currentPassword) {
    return NextResponse.json({
      status: 'fail',
      message: 'Current password is required'
    }, { status: 400 });
  }
  
  // Validate new password
  validatePassword({ password: newPassword });
  
  // Get user from database with password
  const user = await User.findById(currentUser._id).select('+password');
  
  // Check if current password is correct
  if (!(await user.comparePassword(currentPassword))) {
    return NextResponse.json({
      status: 'fail',
      message: 'Current password is incorrect'
    }, { status: 401 });
  }
  
  // Update password
  user.password = newPassword;
  user.passwordChangedAt = Date.now() - 1000;
  await user.save();
  
  // Send new tokens
  return await createSendToken(user, 200);
});