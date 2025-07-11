import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import AppError from '../utils/appError.js';

// Protect routes - check if user is authenticated
export const protect = async (req) => {
  // Get token from header
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  
  if (!token) {
    throw new AppError('You are not logged in. Please log in to get access.', 401);
  }
  
  // Verify token
  const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
  
  // Check if user still exists
  const currentUser = await User.findById(decoded.id).select('-refreshToken');
  if (!currentUser) {
    throw new AppError('The user belonging to this token no longer exists.', 401);
  }
  
  // Check if user changed password after token was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    throw new AppError('User recently changed password. Please log in again.', 401);
  }
  
  // Check if user is active
  if (!currentUser.isActive) {
    throw new AppError('Your account has been deactivated. Please contact support.', 401);
  }
  
  // Grant access to protected route
  req.user = currentUser;
  return currentUser;
};

// Optional authentication - doesn't throw error if no token
export const optionalAuth = async (req) => {
  // Get token from header
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  
  if (!token) {
    return null;
  }
  
  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    
    // Check if user still exists
    const currentUser = await User.findById(decoded.id).select('-refreshToken');
    if (currentUser && currentUser.isActive && !currentUser.changedPasswordAfter(decoded.iat)) {
      req.user = currentUser;
      return currentUser;
    }
  } catch (error) {
    // If token is invalid, just continue without user
  }
  
  return null;
};

// Restrict to certain roles
export const restrictTo = (...roles) => {
  return (user) => {
    if (!roles.includes(user.role)) {
      throw new AppError('You do not have permission to perform this action', 403);
    }
    return true;
  };
};

// Check if user is verified
export const requireVerifiedEmail = (user) => {
  if (!user.isEmailVerified) {
    throw new AppError('Please verify your email to access this resource', 403);
  }
  return true;
};

// Verify refresh token from cookies
export const verifyRefreshToken = async (req) => {
  // Get refresh token from cookie
  const refreshToken = req.cookies?.refreshToken;
  
  if (!refreshToken) {
    throw new AppError('No refresh token provided', 401);
  }
  
  // Verify refresh token
  const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
  
  // Find user with refresh token
  const user = await User.findById(decoded.id).select('+refreshToken');
  
  if (!user || user.refreshToken !== refreshToken) {
    throw new AppError('Invalid refresh token', 401);
  }
  
  // Check if user changed password after token was issued
  if (user.changedPasswordAfter(decoded.iat)) {
    throw new AppError('User recently changed password. Please log in again.', 401);
  }
  
  // Attach user to request
  req.user = user;
  return user;
};