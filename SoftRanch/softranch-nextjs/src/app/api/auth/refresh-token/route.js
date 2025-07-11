import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import catchAsync from '@/lib/utils/catchAsync';
import { verifyRefreshToken } from '@/lib/middleware/auth';

export const POST = catchAsync(async (req) => {
  await connectDB();
  
  // User is verified by verifyRefreshToken middleware
  const user = await verifyRefreshToken(req);
  
  // Generate new access token
  const accessToken = user.generateAccessToken();
  
  return NextResponse.json({
    status: 'success',
    accessToken
  }, { status: 200 });
});