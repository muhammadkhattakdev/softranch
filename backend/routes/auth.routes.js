import express from 'express';
import * as authController from '../controllers/auth.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { verifyRefreshToken } from '../middleware/refresh.middleware.js';
import { validateRegister, validateLogin, validateEmail, validatePassword } from '../validators/auth.validator.js';

const router = express.Router();

// Public routes
router.post('/register', validateRegister, authController.register);
router.post('/login', validateLogin, authController.login);
router.post('/refresh-token', verifyRefreshToken, authController.refreshToken);
router.get('/verify-email/:token', authController.verifyEmail);
router.post('/forgot-password', validateEmail, authController.forgotPassword);
router.patch('/reset-password/:token', validatePassword, authController.resetPassword);

// Protected routes
router.use(protect); // All routes after this middleware are protected

router.post('/logout', authController.logout);
router.get('/me', authController.getMe);
router.patch('/update-password', authController.updatePassword);

export default router;