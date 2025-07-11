import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import User from '@/lib/models/User';
import sendEmail from '@/lib/utils/email';
import catchAsync from '@/lib/utils/catchAsync';
import { validateEmail } from '@/lib/validators';

export const POST = catchAsync(async (req) => {
  await connectDB();
  
  const body = await req.json();
  const { email } = body;
  
  // Validate email
  validateEmail(body);
  
  // Get user based on email
  const user = await User.findByEmail(email);
  
  if (!user) {
    return NextResponse.json({
      status: 'fail',
      message: 'No user found with that email address'
    }, { status: 404 });
  }
  
  // Generate reset token
  const resetToken = user.generatePasswordResetToken();
  await user.save({ validateBeforeSave: false });
  
  // Send reset email
  try {
    const resetURL = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;
    
    await sendEmail({
      email: user.email,
      subject: 'Password Reset - SoftRanch',
      message: `You requested a password reset. Please click the link to reset your password: ${resetURL}\n\nIf you didn't request this, please ignore this email.`
    });
    
    return NextResponse.json({
      status: 'success',
      message: 'Password reset link sent to email'
    }, { status: 200 });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    
    return NextResponse.json({
      status: 'error',
      message: 'Error sending email. Please try again.'
    }, { status: 500 });
  }
});