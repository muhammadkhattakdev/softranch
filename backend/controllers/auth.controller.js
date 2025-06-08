import User from '../models/User.model.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';
import sendEmail from '../utils/email.js';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

// Generate and send tokens
const createSendToken = (user, statusCode, res) => {
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();
  
  // Cookie options
  const cookieOptions = {
    expires: new Date(
      Date.now() + (process.env.JWT_COOKIE_EXPIRES_IN || 7) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
    path: '/'
  };
  
  // Send refresh token as httpOnly cookie
  res.cookie('refreshToken', refreshToken, cookieOptions);
  
  // Remove password and refreshToken from output
  user.password = undefined;
  user.refreshToken = undefined;
  
  // Save refresh token to database without triggering pre-save middleware
  User.findByIdAndUpdate(
    user._id,
    { refreshToken: refreshToken },
    { new: false, validateBeforeSave: false }
  ).exec();
  
  res.status(statusCode).json({
    status: 'success',
    accessToken,
    user
  });
};

// Register new user
export const register = catchAsync(async (req, res, next) => {
  const { name, email, password, role, bio, jobTitle } = req.body;
  
  // Check if user already exists
  const existingUser = await User.findByEmail(email);
  if (existingUser) {
    return next(new AppError('User with this email already exists', 400));
  }
  
  // Create new user
  const user = await User.create({
    name,
    email,
    password,
    role: role || 'author',
    bio,
    jobTitle
  });
  
  // Generate email verification token
  const verifyToken = user.generateEmailVerificationToken();
  await user.save({ validateBeforeSave: false });
  
  // Send verification email
  try {
    const verifyURL = `${process.env.CLIENT_URL}/verify-email/${verifyToken}`;
    
    await sendEmail({
      email: user.email,
      subject: 'Email Verification - SoftRanch',
      message: `Welcome to SoftRanch! Please verify your email by clicking the link: ${verifyURL}`
    });
    
    createSendToken(user, 201, res);
  } catch (err) {
    user.emailVerificationToken = undefined;
    user.emailVerificationExpires = undefined;
    await user.save({ validateBeforeSave: false });
    
    return next(new AppError('Error sending verification email. Please try again.', 500));
  }
});

// Login user
export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  
  // Check if email and password exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }
  
  // Check if user exists and password is correct
  const user = await User.findByEmail(email).select('+password');
  
  if (!user) {
    return next(new AppError('Invalid email or password', 401));
  }
  
  // Check if account is locked
  if (user.isLocked) {
    return next(new AppError('Account is locked due to too many failed login attempts. Please try again later.', 423));
  }
  
  // Check password
  const isPasswordCorrect = await user.comparePassword(password);
  
  if (!isPasswordCorrect) {
    await user.handleFailedLogin();
    return next(new AppError('Invalid email or password', 401));
  }
  
  // Check if user is active
  if (!user.isActive) {
    return next(new AppError('Your account has been deactivated. Please contact support.', 401));
  }
  
  // Reset login attempts on successful login - using update to avoid pre-save hooks
  await User.findByIdAndUpdate(
    user._id,
    { 
      loginAttempts: 0,
      lockUntil: undefined,
      lastLogin: new Date()
    },
    { new: false, validateBeforeSave: false }
  );
  
  createSendToken(user, 200, res);
});

// Logout user
export const logout = catchAsync(async (req, res) => {
  // Clear refresh token from database
  if (req.user) {
    await User.findByIdAndUpdate(
      req.user.id,
      { refreshToken: undefined },
      { new: false, validateBeforeSave: false }
    );
  }
  
  // Clear cookie
  res.cookie('refreshToken', '', {
    httpOnly: true,
    expires: new Date(0),
    path: '/'
  });
  
  res.status(200).json({
    status: 'success',
    message: 'Logged out successfully'
  });
});

// Refresh access token
export const refreshToken = catchAsync(async (req, res, next) => {
  // User is already attached by verifyRefreshToken middleware
  const user = req.user;
  
  // Generate new access token
  const accessToken = user.generateAccessToken();
  
  res.status(200).json({
    status: 'success',
    accessToken
  });
});

// Verify email
export const verifyEmail = catchAsync(async (req, res, next) => {
  // Get token from params
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');
  
  // Find user with token
  const user = await User.findOne({
    emailVerificationToken: hashedToken,
    emailVerificationExpires: { $gt: Date.now() }
  });
  
  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }
  
  // Verify email
  user.isEmailVerified = true;
  user.emailVerificationToken = undefined;
  user.emailVerificationExpires = undefined;
  await user.save({ validateBeforeSave: false });
  
  res.status(200).json({
    status: 'success',
    message: 'Email verified successfully'
  });
});

// Forgot password
export const forgotPassword = catchAsync(async (req, res, next) => {
  // Get user based on email
  const user = await User.findByEmail(req.body.email);
  
  if (!user) {
    return next(new AppError('No user found with that email address', 404));
  }
  
  // Generate reset token
  const resetToken = user.generatePasswordResetToken();
  await user.save({ validateBeforeSave: false });
  
  // Send reset email
  try {
    const resetURL = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;
    
    await sendEmail({
      email: user.email,
      subject: 'Password Reset - SoftRanch',
      message: `You requested a password reset. Please click the link to reset your password: ${resetURL}\n\nIf you didn't request this, please ignore this email.`
    });
    
    res.status(200).json({
      status: 'success',
      message: 'Password reset link sent to email'
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    
    return next(new AppError('Error sending email. Please try again.', 500));
  }
});

// Reset password
export const resetPassword = catchAsync(async (req, res, next) => {
  // Get user based on token
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');
  
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() }
  });
  
  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }
  
  // Set new password
  user.password = req.body.password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  user.loginAttempts = 0;
  user.lockUntil = undefined;
  await user.save();
  
  // Log user in with new password
  createSendToken(user, 200, res);
});

// Update password
export const updatePassword = catchAsync(async (req, res, next) => {
  // Get user from database
  const user = await User.findById(req.user.id).select('+password');
  
  // Check if current password is correct
  if (!(await user.comparePassword(req.body.currentPassword))) {
    return next(new AppError('Current password is incorrect', 401));
  }
  
  // Update password
  user.password = req.body.newPassword;
  user.passwordChangedAt = Date.now() - 1000;
  await user.save();
  
  // Send new tokens
  createSendToken(user, 200, res);
});

// Get current user
export const getMe = catchAsync(async (req, res) => {
  res.status(200).json({
    status: 'success',
    user: req.user
  });
});