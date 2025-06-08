import express from 'express';
import * as blogController from '../controllers/blog.controller.js';
import { protect, optionalAuth, restrictTo } from '../middleware/auth.middleware.js';
import { validateBlog, validateComment } from '../validators/blog.validator.js';

const router = express.Router();

// Public routes (with optional auth for viewing purposes)
router.use(optionalAuth);

router.get('/', blogController.getAllBlogs);
router.get('/featured', blogController.getFeaturedBlogs);
router.get('/search', blogController.searchBlogs);
router.get('/category/:category', blogController.getBlogsByCategory);
router.get('/tag/:tag', blogController.getBlogsByTag);
router.get('/:id', blogController.getBlog);
router.get('/:id/related', blogController.getRelatedBlogs);

// Protected routes - require authentication
router.use(protect);

router.post('/:id/like', blogController.toggleLike);
router.post('/:id/comments', validateComment, blogController.addComment);

// Author routes - can only modify their own blogs
router.post('/', validateBlog, blogController.createBlog);
router.patch('/:id', validateBlog, blogController.updateBlog);
router.delete('/:id', blogController.deleteBlog);

// Admin/Editor routes
router.patch('/:blogId/comments/:commentId/approve', 
  restrictTo('admin', 'editor'), 
  blogController.approveComment
);

// Admin only routes
router.get('/stats/overview', restrictTo('admin'), blogController.getBlogStats);

export default router;