import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User,
  Key,
  AlertCircle,
  CheckCircle,
  Loader
} from 'lucide-react';
import { useAuth } from '../../../../context/authContext';

import './style.css';

const CreateAdminAccount = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    adminKey: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();
  const { register, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/dashboard', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (successMessage) setSuccessMessage('');
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, number, and special character';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    // For testing purposes, using a simple admin key
    if (!formData.adminKey) {
      newErrors.adminKey = 'Admin key is required';
    } else if (formData.adminKey !== 'SOFTRANCH_ADMIN_2024') {
      newErrors.adminKey = 'Invalid admin key';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const result = await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: 'admin'
      });
      
      if (result.success) {
        setSuccessMessage('Admin account created successfully!');
        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 1500);
      } else {
        setErrors({ submit: result.error || 'Registration failed. Please try again.' });
      }
    } catch (err) {
      console.error('Registration error:', err);
      setErrors({ submit: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="dash-create-admin-wrapper">
      <div className="dash-login-bg">
        <div className="dash-login-glow dash-login-glow-1"></div>
        <div className="dash-login-glow dash-login-glow-2"></div>
      </div>

      <div className="dash-login-container">
        <div className="dash-create-admin-box">
          <div className="dash-login-header">
            <h1 className="dash-login-title">Create Admin Account</h1>
            <p className="dash-login-subtitle">Set up your administrator account</p>
          </div>

          {errors.submit && (
            <div className="dash-login-error">
              <AlertCircle size={20} />
              <span>{errors.submit}</span>
            </div>
          )}

          {successMessage && (
            <div className="dash-success-message">
              <CheckCircle size={20} />
              <span>{successMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="dash-login-form">
            {/* Name Field */}
            <div className="dash-form-group">
              <label htmlFor="name" className="dash-form-label">
                Full Name
              </label>
              <div className="dash-input-wrapper">
                <User size={20} className="dash-input-icon" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`dash-form-input ${errors.name ? 'error' : ''}`}
                  required
                />
              </div>
              {errors.name && <span className="dash-field-error">{errors.name}</span>}
            </div>

            {/* Email Field */}
            <div className="dash-form-group">
              <label htmlFor="email" className="dash-form-label">
                Email Address
              </label>
              <div className="dash-input-wrapper">
                <Mail size={20} className="dash-input-icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`dash-form-input ${errors.email ? 'error' : ''}`}
                  required
                  autoComplete="email"
                />
              </div>
              {errors.email && <span className="dash-field-error">{errors.email}</span>}
            </div>

            {/* Password Field */}
            <div className="dash-form-group">
              <label htmlFor="password" className="dash-form-label">
                Password
              </label>
              <div className="dash-input-wrapper">
                <Lock size={20} className="dash-input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className={`dash-form-input ${errors.password ? 'error' : ''}`}
                  required
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="dash-input-toggle"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <span className="dash-field-error">{errors.password}</span>}
            </div>

            {/* Confirm Password Field */}
            <div className="dash-form-group">
              <label htmlFor="confirmPassword" className="dash-form-label">
                Confirm Password
              </label>
              <div className="dash-input-wrapper">
                <Lock size={20} className="dash-input-icon" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className={`dash-form-input ${errors.confirmPassword ? 'error' : ''}`}
                  required
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="dash-input-toggle"
                  tabIndex={-1}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmPassword && <span className="dash-field-error">{errors.confirmPassword}</span>}
            </div>

            {/* Admin Key Field */}
            <div className="dash-form-group">
              <label htmlFor="adminKey" className="dash-form-label">
                Admin Key
              </label>
              <div className="dash-input-wrapper">
                <Key size={20} className="dash-input-icon" />
                <input
                  type="password"
                  id="adminKey"
                  name="adminKey"
                  value={formData.adminKey}
                  onChange={handleChange}
                  placeholder="Enter admin key"
                  className={`dash-form-input ${errors.adminKey ? 'error' : ''}`}
                  required
                />
              </div>
              {errors.adminKey && <span className="dash-field-error">{errors.adminKey}</span>}
              <p className="dash-field-hint">
                For testing: SOFTRANCH_ADMIN_2024
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="dash-login-btn"
            >
              {isLoading ? (
                <>
                  <Loader size={20} className="dash-spinner" />
                  <span>Creating Account...</span>
                </>
              ) : (
                'Create Admin Account'
              )}
            </button>
          </form>

          <div className="dash-login-footer">
            <p>
              Already have an account?{' '}
              <Link to="/admin/login" className="dash-register-link">
                Sign In
              </Link>
            </p>
          </div>
        </div>

        <div className="dash-login-brand">
          <Link to="/" className="dash-brand-logo">
            SoftRanch
          </Link>
          <p className="dash-brand-tagline">
            Empowering your digital presence
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAdminAccount;