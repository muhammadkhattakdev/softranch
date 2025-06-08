import express from 'express';
import * as userController from '../controllers/user.controller.js';
import { protect, restrictTo } from '../middleware/auth.middleware.js';
import { validateUpdateUser } from '../validators/user.validator.js';

const router = express.Router();

// Public routes
router.get('/authors', userController.getAuthors); // Get all active authors for blog pages

// Protected routes
router.use(protect);

// User profile routes
router.get('/me', userController.getMe);
router.patch('/me', validateUpdateUser, userController.updateMe);
router.delete('/me', userController.deleteMe);

// Admin routes
router.use(restrictTo('admin'));

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.patch('/:id/activate', userController.activateUser);
router.patch('/:id/deactivate', userController.deactivateUser);

export default router;