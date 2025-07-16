import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth, PERMISSIONS } from '../../context/authContext';
import './style.css';

const ProtectedRoute = ({ 
  children, 
  Component,
  requiredPermissions = [], 
  requireAll = false,
  redirectTo = '/admin/login',
  fallback = null 
}) => {
  const { user, loading, isAuthenticated, hasPermission, hasAnyPermission, hasAllPermissions } = useAuth();
  const location = useLocation();

  // Security: Clear any stale auth data on mount
  useEffect(() => {
    const checkAuthIntegrity = () => {
      const token = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY || 'softranch_access_token');
      const storedUser = localStorage.getItem(process.env.REACT_APP_USER_KEY || 'softranch_user');
      
      // If we have a token but no user, or user but no token, clear everything
      if ((token && !storedUser) || (!token && storedUser)) {
        localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY || 'softranch_access_token');
        localStorage.removeItem(process.env.REACT_APP_REFRESH_TOKEN_KEY || 'softranch_refresh_token');
        localStorage.removeItem(process.env.REACT_APP_USER_KEY || 'softranch_user');
      }
    };

    checkAuthIntegrity();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <div className="protected-route-loader">
        <div className="protected-route-spinner"></div>
        <p>Verifying authentication...</p>
      </div>
    );
  }

  // Check authentication
  if (!isAuthenticated || !user) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  // Check email verification
  if (!user.isEmailVerified) {
    return (
      <div className="protected-route-unverified">
        <div className="unverified-container">
          <h2>Email Verification Required</h2>
          <p>Please verify your email address to access the dashboard.</p>
          <p>Check your inbox for the verification email.</p>
        </div>
      </div>
    );
  }

  // Check if account is active
  if (!user.isActive) {
    return (
      <div className="protected-route-inactive">
        <div className="inactive-container">
          <h2>Account Deactivated</h2>
          <p>Your account has been deactivated. Please contact support for assistance.</p>
        </div>
      </div>
    );
  }

  // Check permissions if required
  if (requiredPermissions.length > 0) {
    const hasRequiredPermissions = requireAll 
      ? hasAllPermissions(requiredPermissions)
      : hasAnyPermission(requiredPermissions);

    if (!hasRequiredPermissions) {
      // If fallback component provided, show it
      if (fallback) {
        return fallback;
      }

      // Otherwise show unauthorized message
      return (
        <div className="protected-route-unauthorized">
          <div className="unauthorized-container">
            <h2>Access Denied</h2>
            <p>You don't have permission to access this page.</p>
            <p>Required permissions: {requiredPermissions.join(', ')}</p>
          </div>
        </div>
      );
    }
  }

  // All checks passed, render children or Component
  return Component ? <Component /> : children;
};

// HOC for easier route protection
export const withProtection = (Component, options = {}) => {
  return (props) => (
    <ProtectedRoute {...options}>
      <Component {...props} />
    </ProtectedRoute>
  );
};

export default ProtectedRoute;