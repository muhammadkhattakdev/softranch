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

// Blog validation
export const validateBlog = [
  body('title')
    .trim()
    .notEmpty().withMessage('Title is required')
    .isLength({ max: 200 }).withMessage('Title cannot exceed 200 characters'),
  
  body('excerpt')
    .trim()
    .notEmpty().withMessage('Excerpt is required')
    .isLength({ max: 500 }).withMessage('Excerpt cannot exceed 500 characters'),
  
  body('content')
    .notEmpty().withMessage('Content is required')
    .isLength({ min: 100 }).withMessage('Content must be at least 100 characters'),
  
  body('featuredImage')
    .notEmpty().withMessage('Featured image is required'),
  
  body('category')
    .notEmpty().withMessage('Category is required')
    .isIn(['development', 'design', 'business', 'technology', 'general'])
    .withMessage('Invalid category'),
  
  body('tags')
    .optional()
    .isArray().withMessage('Tags must be an array')
    .custom((tags) => tags.every(tag => typeof tag === 'string'))
    .withMessage('All tags must be strings'),
  
  body('status')
    .optional()
    .isIn(['draft', 'published', 'archived']).withMessage('Invalid status'),
  
  body('metaTitle')
    .optional()
    .trim()
    .isLength({ max: 60 }).withMessage('Meta title cannot exceed 60 characters'),
  
  body('metaDescription')
    .optional()
    .trim()
    .isLength({ max: 160 }).withMessage('Meta description cannot exceed 160 characters'),
  
  body('relatedPosts')
    .optional()
    .isArray().withMessage('Related posts must be an array')
    .custom((posts) => posts.every(post => post.match(/^[0-9a-fA-F]{24}$/)))
    .withMessage('Invalid related post IDs'),
  
  validate
];

// Comment validation
export const validateComment = [
  body('content')
    .trim()
    .notEmpty().withMessage('Comment content is required')
    .isLength({ min: 1, max: 1000 }).withMessage('Comment must be between 1 and 1000 characters'),
  
  validate
];