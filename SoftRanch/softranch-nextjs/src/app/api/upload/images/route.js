import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import sharp from 'sharp';
import connectDB from '@/lib/utils/db';
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

// POST /api/upload/images - Upload multiple images
export const POST = catchAsync(async (req) => {
  await connectDB();
  
  // Protect route
  await protect(req);
  
  const formData = await req.formData();
  const files = formData.getAll('images');
  
  if (!files || files.length === 0) {
    return NextResponse.json({
      status: 'fail',
      message: 'No images uploaded'
    }, { status: 400 });
  }
  
  // Limit to 10 images
  if (files.length > 10) {
    return NextResponse.json({
      status: 'fail',
      message: 'Maximum 10 images allowed'
    }, { status: 400 });
  }
  
  const uploadDir = await ensureUploadDir();
  
  const uploadPromises = files.map(async (file) => {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      throw new Error(`${file.name} is not an image`);
    }
    
    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      throw new Error(`${file.name} is too large. Maximum size is 5MB.`);
    }
    
    const filename = `img-${uuidv4()}-${Date.now()}.jpeg`;
    const filepath = join(uploadDir, filename);
    
    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Process image with Sharp
    const processedBuffer = await sharp(buffer)
      .resize(1200, 1200, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .toFormat('jpeg')
      .jpeg({ quality: 90 })
      .toBuffer();
    
    // Save processed image
    await writeFile(filepath, processedBuffer);
    
    return {
      filename,
      url: `${process.env.SERVER_URL}/uploads/${filename}`
    };
  });
  
  try {
    const images = await Promise.all(uploadPromises);
    
    return NextResponse.json({
      status: 'success',
      results: images.length,
      data: images
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      status: 'fail',
      message: error.message
    }, { status: 400 });
  }
});