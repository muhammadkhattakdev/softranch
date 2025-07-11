import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import sharp from 'sharp';
import connectDB from '@/lib/utils/db';
import User from '@/lib/models/User';
import catchAsync from '@/lib/utils/catchAsync';
import { protect } from '@/lib/middleware/auth';

// Ensure upload directory exists
const ensureUploadDir = async () => {
  const uploadDir = join(process.cwd(), 'public', 'uploads');
  try {
    await mkdir(uploadDir, { recursive: true });
  } catch (error) {
    // Directory already exists
  }
  return uploadDir;
};

// POST /api/upload/avatar - Upload avatar (profile picture)
export const POST = catchAsync(async (req) => {
  await connectDB();
  
  // Protect route
  const user = await protect(req);
  
  const formData = await req.formData();
  const file = formData.get('avatar');
  
  if (!file) {
    return NextResponse.json({
      status: 'fail',
      message: 'No avatar uploaded'
    }, { status: 400 });
  }
  
  // Validate file type
  if (!file.type.startsWith('image/')) {
    return NextResponse.json({
      status: 'fail',
      message: 'Not an image! Please upload only images.'
    }, { status: 400 });
  }
  
  // Validate file size (5MB limit)
  if (file.size > 5 * 1024 * 1024) {
    return NextResponse.json({
      status: 'fail',
      message: 'File too large. Maximum size is 5MB.'
    }, { status: 400 });
  }
  
  const uploadDir = await ensureUploadDir();
  
  // Generate unique filename
  const filename = `avatar-${user._id}-${Date.now()}.jpeg`;
  const filepath = join(uploadDir, filename);
  
  // Convert file to buffer
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  
  // Process avatar - square crop
  const processedBuffer = await sharp(buffer)
    .resize(300, 300)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toBuffer();
  
  // Save processed image
  await writeFile(filepath, processedBuffer);
  
  // Update user avatar in database
  await User.findByIdAndUpdate(
    user._id,
    { avatar: filename },
    { new: true, validateBeforeSave: false }
  );
  
  return NextResponse.json({
    status: 'success',
    data: {
      filename,
      url: `${process.env.SERVER_URL}/uploads/${filename}`
    }
  }, { status: 200 });
});