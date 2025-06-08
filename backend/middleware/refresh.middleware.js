import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';

// Middleware to verify refresh token from cookies
export const verifyRefreshToken = catchAsync(async (req, res, next) => {
  // Get refresh token from cookie
  const { refreshToken } = req.cookies;
  
  if (!refreshToken) {
    return next(new AppError('No refresh token provided', 401));
  }
  
  // Verify refresh token
  const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
  
  // Find user with refresh token
  const user = await User.findById(decoded.id).select('+refreshToken');
  
  if (!user || user.refreshToken !== refreshToken) {
    return next(new AppError('Invalid refresh token', 401));
  }
  
  // Check if user changed password after token was issued
  if (user.changedPasswordAfter(decoded.iat)) {
    return next(new AppError('User recently changed password. Please log in again.', 401));
  }
  
  // Attach user to request
  req.user = user;
  next();
});