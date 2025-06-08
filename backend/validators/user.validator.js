import { body, validationResult } from 'express-validator';
import AppError from '../utils/appError.js';

// Validation middleware
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    return next(new AppError(errorMessages.join('. '), 400));
  }
  next();
};

// Update user validation
export const validateUpdateUser = [
  body('name')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters'),
  
  body('email')
    .optional()
    .trim()
    .isEmail().withMessage('Please provide a valid email')
    .normalizeEmail(),
  
  body('bio')
    .optional()
    .trim()
    .isLength({ max: 500 }).withMessage('Bio cannot exceed 500 characters'),
  
  body('jobTitle')
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage('Job title cannot exceed 100 characters'),
  
  body('socialLinks.linkedin')
    .optional()
    .trim()
    .isURL().withMessage('Please provide a valid LinkedIn URL'),
  
  body('socialLinks.twitter')
    .optional()
    .trim()
    .isURL().withMessage('Please provide a valid Twitter URL'),
  
  body('socialLinks.github')
    .optional()
    .trim()
    .isURL().withMessage('Please provide a valid GitHub URL'),
  
  body('socialLinks.website')
    .optional()
    .trim()
    .isURL().withMessage('Please provide a valid website URL'),
  
  validate
];