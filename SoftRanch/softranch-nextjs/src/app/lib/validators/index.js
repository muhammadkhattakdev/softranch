import { body, validationResult } from 'express-validator';
import AppError from '../utils/appError.js';

// Helper function to handle validation results
export const handleValidationErrors = (req) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    throw new AppError(errorMessages.join('. '), 400);
  }
};

// Manual validation functions for Next.js API routes
export const validateRegister = (data) => {
  const errors = [];
  
  if (!data.name || data.name.trim().length < 2 || data.name.trim().length > 50) {
    errors.push('Name must be between 2 and 50 characters');
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please provide a valid email');
  }
  
  if (!data.password || data.password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }
  
  if (data.password && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(data.password)) {
    errors.push('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
  }
  
  if (data.role && !['admin', 'author', 'editor'].includes(data.role)) {
    errors.push('Invalid role');
  }
  
  if (data.bio && data.bio.length > 500) {
    errors.push('Bio cannot exceed 500 characters');
  }
  
  if (data.jobTitle && data.jobTitle.length > 100) {
    errors.push('Job title cannot exceed 100 characters');
  }
  
  if (errors.length > 0) {
    throw new AppError(errors.join('. '), 400);
  }
  
  return true;
};

export const validateLogin = (data) => {
  const errors = [];
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please provide a valid email');
  }
  
  if (!data.password) {
    errors.push('Password is required');
  }
  
  if (errors.length > 0) {
    throw new AppError(errors.join('. '), 400);
  }
  
  return true;
};

export const validateEmail = (data) => {
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    throw new AppError('Please provide a valid email', 400);
  }
  return true;
};

export const validatePassword = (data) => {
  const errors = [];
  
  if (!data.password || data.password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }
  
  if (data.password && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(data.password)) {
    errors.push('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
  }
  
  if (errors.length > 0) {
    throw new AppError(errors.join('. '), 400);
  }
  
  return true;
};

export const validateBlog = (data) => {
  const errors = [];
  
  if (!data.title || data.title.trim().length === 0) {
    errors.push('Title is required');
  }
  
  if (data.title && data.title.length > 200) {
    errors.push('Title cannot exceed 200 characters');
  }
  
  if (!data.excerpt || data.excerpt.trim().length === 0) {
    errors.push('Excerpt is required');
  }
  
  if (data.excerpt && data.excerpt.length > 500) {
    errors.push('Excerpt cannot exceed 500 characters');
  }
  
  if (!data.content || data.content.trim().length < 100) {
    errors.push('Content must be at least 100 characters');
  }
  
  if (!data.featuredImage) {
    errors.push('Featured image is required');
  }
  
  if (!data.category || !['development', 'design', 'business', 'technology', 'general'].includes(data.category)) {
    errors.push('Invalid category');
  }
  
  if (data.tags && (!Array.isArray(data.tags) || !data.tags.every(tag => typeof tag === 'string'))) {
    errors.push('Tags must be an array of strings');
  }
  
  if (data.status && !['draft', 'published', 'archived'].includes(data.status)) {
    errors.push('Invalid status');
  }
  
  if (data.metaTitle && data.metaTitle.length > 60) {
    errors.push('Meta title cannot exceed 60 characters');
  }
  
  if (data.metaDescription && data.metaDescription.length > 160) {
    errors.push('Meta description cannot exceed 160 characters');
  }
  
  if (errors.length > 0) {
    throw new AppError(errors.join('. '), 400);
  }
  
  return true;
};

export const validateComment = (data) => {
  const errors = [];
  
  if (!data.content || data.content.trim().length === 0) {
    errors.push('Comment content is required');
  }
  
  if (data.content && (data.content.length < 1 || data.content.length > 1000)) {
    errors.push('Comment must be between 1 and 1000 characters');
  }
  
  if (errors.length > 0) {
    throw new AppError(errors.join('. '), 400);
  }
  
  return true;
};

export const validateUpdateUser = (data) => {
  const errors = [];
  
  if (data.name && (data.name.trim().length < 2 || data.name.trim().length > 50)) {
    errors.push('Name must be between 2 and 50 characters');
  }
  
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please provide a valid email');
  }
  
  if (data.bio && data.bio.length > 500) {
    errors.push('Bio cannot exceed 500 characters');
  }
  
  if (data.jobTitle && data.jobTitle.length > 100) {
    errors.push('Job title cannot exceed 100 characters');
  }
  
  if (data.socialLinks) {
    const urlPattern = /^https?:\/\/.+/;
    if (data.socialLinks.linkedin && !urlPattern.test(data.socialLinks.linkedin)) {
      errors.push('Please provide a valid LinkedIn URL');
    }
    if (data.socialLinks.twitter && !urlPattern.test(data.socialLinks.twitter)) {
      errors.push('Please provide a valid Twitter URL');
    }
    if (data.socialLinks.github && !urlPattern.test(data.socialLinks.github)) {
      errors.push('Please provide a valid GitHub URL');
    }
    if (data.socialLinks.website && !urlPattern.test(data.socialLinks.website)) {
      errors.push('Please provide a valid website URL');
    }
  }
  
  if (errors.length > 0) {
    throw new AppError(errors.join('. '), 400);
  }
  
  return true;
};