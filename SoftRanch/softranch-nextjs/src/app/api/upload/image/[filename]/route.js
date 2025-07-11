import { NextResponse } from 'next/server';
import { unlink } from 'fs/promises';
import { join } from 'path';
import connectDB from '@/lib/utils/db';
import catchAsync from '@/lib/utils/catchAsync';
import { protect, restrictTo } from '@/lib/middleware/auth';

// DELETE /api/upload/image/[filename] - Delete image (admin only)
export const DELETE = catchAsync(async (req, { params }) => {
  await connectDB();
  
  // Protect route and restrict to admin
  const user = await protect(req);
  restrictTo('admin')(user);
  
  const { filename } = params;
  
  // Security check - prevent directory traversal
  if (filename.includes('..') || filename.includes('/')) {
    return NextResponse.json({
      status: 'fail',
      message: 'Invalid filename'
    }, { status: 400 });
  }
  
  const filepath = join(process.cwd(), 'public', 'uploads', filename);
  
  try {
    await unlink(filepath);
    
    return NextResponse.json({
      status: 'success',
      data: null
    }, { status: 204 });
  } catch (error) {
    return NextResponse.json({
      status: 'fail',
      message: 'Image not found'
    }, { status: 404 });
  }
});