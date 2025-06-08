import User from '../models/User.model.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';
import APIFeatures from '../utils/apiFeatures.js';

// Filter object to only include allowed fields
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

// Get all users (admin only)
export const getAllUsers = catchAsync(async (req, res) => {
  const features = new APIFeatures(User.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  
  const users = await features.query;
  
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: users
  });
});

// Get single user
export const getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  
  if (!user) {
    return next(new AppError('No user found with that ID', 404));
  }
  
  res.status(200).json({
    status: 'success',
    data: user
  });
});

// Get current user
export const getMe = catchAsync(async (req, res) => {
  res.status(200).json({
    status: 'success',
    data: req.user
  });
});

// Update current user
export const updateMe = catchAsync(async (req, res, next) => {
  // Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError('This route is not for password updates. Please use /update-password', 400));
  }
  
  // Filter out unwanted fields
  const filteredBody = filterObj(req.body, 'name', 'email', 'bio', 'jobTitle', 'socialLinks');
  
  // Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true
  });
  
  res.status(200).json({
    status: 'success',
    data: updatedUser
  });
});

// Delete current user (soft delete)
export const deleteMe = catchAsync(async (req, res) => {
  await User.findByIdAndUpdate(req.user.id, { isActive: false });
  
  res.status(204).json({
    status: 'success',
    data: null
  });
});

// Update user (admin only)
export const updateUser = catchAsync(async (req, res, next) => {
  // Don't allow password updates through this route
  if (req.body.password) {
    return next(new AppError('Cannot update password through this route', 400));
  }
  
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  
  if (!user) {
    return next(new AppError('No user found with that ID', 404));
  }
  
  res.status(200).json({
    status: 'success',
    data: user
  });
});

// Delete user (admin only)
export const deleteUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);
  
  if (!user) {
    return next(new AppError('No user found with that ID', 404));
  }
  
  res.status(204).json({
    status: 'success',
    data: null
  });
});

// Activate user (admin only)
export const activateUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { isActive: true },
    { new: true, runValidators: true }
  );
  
  if (!user) {
    return next(new AppError('No user found with that ID', 404));
  }
  
  res.status(200).json({
    status: 'success',
    data: user
  });
});

// Deactivate user (admin only)
export const deactivateUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { isActive: false },
    { new: true, runValidators: true }
  );
  
  if (!user) {
    return next(new AppError('No user found with that ID', 404));
  }
  
  res.status(200).json({
    status: 'success',
    data: user
  });
});

// Get all authors (public)
export const getAuthors = catchAsync(async (req, res) => {
  const authors = await User.find({
    role: { $in: ['author', 'admin', 'editor'] },
    isActive: true,
    isEmailVerified: true
  }).select('name bio jobTitle avatar socialLinks');
  
  res.status(200).json({
    status: 'success',
    results: authors.length,
    data: authors
  });
});