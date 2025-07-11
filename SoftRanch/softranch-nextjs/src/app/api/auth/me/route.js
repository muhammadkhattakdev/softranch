import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/db';
import catchAsync from '@/lib/utils/catchAsync';
import { protect } from '@/lib/middleware/auth';

export const GET = catchAsync(async (req) => {
  await connectDB();
  
  // Protect route
  const user = await protect(req);
  
  return NextResponse.json({
    status: 'success',
    user
  }, { status: 200 });
});