import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import User from '@/lib/models/User';
import catchAsync from '@/lib/utils/catchAsync';
import { validateLogin } from '@/lib/validators';

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
  
  // Save refresh token to database without triggering pre-save middleware
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

export const POST = catchAsync(async (req) => {
  await connectDB();
  
  const body = await req.json();
  const { email, password } = body;
  
  // Validate input
  validateLogin(body);
  
  // Check if user exists and password is correct
  const user = await User.findByEmail(email).select('+password');
  
  if (!user) {
    return NextResponse.json({
      status: 'fail',
      message: 'Invalid email or password'
    }, { status: 401 });
  }
  
  // Check if account is locked
  if (user.isLocked) {
    return NextResponse.json({
      status: 'fail',
      message: 'Account is locked due to too many failed login attempts. Please try again later.'
    }, { status: 423 });
  }
  
  // Check password
  const isPasswordCorrect = await user.comparePassword(password);
  
  if (!isPasswordCorrect) {
    await user.handleFailedLogin();
    return NextResponse.json({
      status: 'fail',
      message: 'Invalid email or password'
    }, { status: 401 });
  }
  
  // Check if user is active
  if (!user.isActive) {
    return NextResponse.json({
      status: 'fail',
      message: 'Your account has been deactivated. Please contact support.'
    }, { status: 401 });
  }
  
  // Reset login attempts on successful login
  await User.findByIdAndUpdate(
    user._id,
    { 
      loginAttempts: 0,
      lockUntil: undefined,
      lastLogin: new Date()
    },
    { new: false, validateBeforeSave: false }
  );
  
  return await createSendToken(user, 200);
});