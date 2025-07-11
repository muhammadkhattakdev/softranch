import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import User from '@/lib/models/User';
import sendEmail from '@/lib/utils/email';
import catchAsync from '@/lib/utils/catchAsync';
import { validateRegister } from '@/lib/validators';

// Generate and send tokens
const createSendToken = async (user, statusCode, res) => {
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
  const { name, email, password, role, bio, jobTitle } = body;
  
  // Validate input
  validateRegister(body);
  
  // Check if user already exists
  const existingUser = await User.findByEmail(email);
  if (existingUser) {
    return NextResponse.json({
      status: 'fail',
      message: 'User with this email already exists'
    }, { status: 400 });
  }
  
  // Create new user
  const user = await User.create({
    name,
    email,
    password,
    role: role || 'author',
    bio,
    jobTitle
  });
  
  // Generate email verification token
  const verifyToken = user.generateEmailVerificationToken();
  await user.save({ validateBeforeSave: false });
  
  // Send verification email
  try {
    const verifyURL = `${process.env.CLIENT_URL}/verify-email/${verifyToken}`;
    
    await sendEmail({
      email: user.email,
      subject: 'Email Verification - SoftRanch',
      message: `Welcome to SoftRanch! Please verify your email by clicking the link: ${verifyURL}`
    });
    
    return await createSendToken(user, 201);
  } catch (err) {
    user.emailVerificationToken = undefined;
    user.emailVerificationExpires = undefined;
    await user.save({ validateBeforeSave: false });
    
    return NextResponse.json({
      status: 'error',
      message: 'Error sending verification email. Please try again.'
    }, { status: 500 });
  }
});