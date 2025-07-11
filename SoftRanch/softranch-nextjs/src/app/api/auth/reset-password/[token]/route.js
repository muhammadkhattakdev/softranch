import { NextResponse } from 'next/server';
import crypto from 'crypto';
import connectDB from '@/lib/utils/db';
import User from '@/lib/models/User';
import catchAsync from '@/lib/utils/catchAsync';
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

export const PATCH = catchAsync(async (req, { params }) => {
  await connectDB();
  
  const { token } = params;
  const body = await req.json();
  const { password } = body;
  
  // Validate password
  validatePassword(body);
  
  // Get user based on token
  const hashedToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');
  
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() }
  });
  
  if (!user) {
    return NextResponse.json({
      status: 'fail',
      message: 'Token is invalid or has expired'
    }, { status: 400 });
  }
  
  // Set new password
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  user.loginAttempts = 0;
  user.lockUntil = undefined;
  await user.save();
  
  // Log user in with new password
  return await createSendToken(user, 200);
});