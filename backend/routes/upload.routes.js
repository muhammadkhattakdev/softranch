import express from 'express';
import multer from 'multer';
import sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import fs from 'fs/promises';
import { protect, restrictTo } from '../middleware/auth.middleware.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';

const router = express.Router();

// Multer configuration
const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Ensure upload directory exists
const ensureUploadDir = async () => {
  const uploadDir = 'uploads';
  try {
    await fs.access(uploadDir);
  } catch {
    await fs.mkdir(uploadDir, { recursive: true });
  }
};

// Upload single image
export const uploadImage = catchAsync(async (req, res, next) => {
  if (!req.file) {
    return next(new AppError('No image uploaded', 400));
  }
  
  await ensureUploadDir();
  
  // Generate unique filename
  const filename = `img-${uuidv4()}-${Date.now()}.jpeg`;
  const filepath = path.join('uploads', filename);
  
  // Process image
  await sharp(req.file.buffer)
    .resize(1200, 1200, {
      fit: 'inside',
      withoutEnlargement: true
    })
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(filepath);
  
  res.status(200).json({
    status: 'success',
    data: {
      filename,
      url: `${process.env.SERVER_URL}/uploads/${filename}`
    }
  });
});

// Upload multiple images
export const uploadImages = catchAsync(async (req, res, next) => {
  if (!req.files || req.files.length === 0) {
    return next(new AppError('No images uploaded', 400));
  }
  
  await ensureUploadDir();
  
  const uploadPromises = req.files.map(async (file) => {
    const filename = `img-${uuidv4()}-${Date.now()}.jpeg`;
    const filepath = path.join('uploads', filename);
    
    await sharp(file.buffer)
      .resize(1200, 1200, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .toFormat('jpeg')
      .jpeg({ quality: 90 })
      .toFile(filepath);
    
    return {
      filename,
      url: `${process.env.SERVER_URL}/uploads/${filename}`
    };
  });
  
  const images = await Promise.all(uploadPromises);
  
  res.status(200).json({
    status: 'success',
    results: images.length,
    data: images
  });
});

// Upload avatar (profile picture)
export const uploadAvatar = catchAsync(async (req, res, next) => {
  if (!req.file) {
    return next(new AppError('No avatar uploaded', 400));
  }
  
  await ensureUploadDir();
  
  // Generate unique filename
  const filename = `avatar-${req.user.id}-${Date.now()}.jpeg`;
  const filepath = path.join('uploads', filename);
  
  // Process avatar - square crop
  await sharp(req.file.buffer)
    .resize(300, 300)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(filepath);
  
  // Update user avatar in database
  req.user.avatar = filename;
  await req.user.save({ validateBeforeSave: false });
  
  res.status(200).json({
    status: 'success',
    data: {
      filename,
      url: `${process.env.SERVER_URL}/uploads/${filename}`
    }
  });
});

// Delete image (admin only)
export const deleteImage = catchAsync(async (req, res, next) => {
  const { filename } = req.params;
  
  // Security check - prevent directory traversal
  if (filename.includes('..') || filename.includes('/')) {
    return next(new AppError('Invalid filename', 400));
  }
  
  const filepath = path.join('uploads', filename);
  
  try {
    await fs.unlink(filepath);
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    return next(new AppError('Image not found', 404));
  }
});

// Routes
router.use(protect); // All upload routes require authentication

router.post('/image', upload.single('image'), uploadImage);
router.post('/images', upload.array('images', 10), uploadImages);
router.post('/avatar', upload.single('avatar'), uploadAvatar);
router.delete('/image/:filename', restrictTo('admin'), deleteImage);

export default router;