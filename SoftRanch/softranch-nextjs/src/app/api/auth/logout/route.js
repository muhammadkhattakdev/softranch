import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import User from '@/lib/models/User';
import catchAsync from '@/lib/utils/catchAsync';
import { protect } from '@/lib/middleware/auth';

export const POST = catchAsync(async (req) => {
  await connectDB();
  
  try {
    // Try to get user from token (optional for logout)
    const user = await protect(req);
    
    if (user) {
      // Clear refresh token from database
      await User.findByIdAndUpdate(
        user._id,
        { refreshToken: undefined },
        { new: false, validateBeforeSave: false }
      );
    }
  } catch (error) {
    // If token is invalid, still proceed with logout
  }
  
  // Create response
  const response = NextResponse.json({
    status: 'success',
    message: 'Logged out successfully'
  }, { status: 200 });
  
  // Clear refresh token cookie
  response.cookies.set('refreshToken', '', {
    httpOnly: true,
    expires: new Date(0),
    path: '/'
  });
  
  return response;
});