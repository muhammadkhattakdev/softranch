'use client'

import React, { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAuth, PERMISSIONS } from '@/context/AuthContext'

const ProtectedRoute = ({ 
  children, 
  Component,
  requiredPermissions = [], 
  requireAll = false,
  redirectTo = '/admin/login',
  fallback = null 
}) => {
  const { user, loading, isAuthenticated, hasPermission, hasAnyPermission, hasAllPermissions } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  // Security: Clear any stale auth data on mount
  useEffect(() => {
    const checkAuthIntegrity = () => {
      if (typeof window === 'undefined') return
      
      const token = localStorage.getItem(process.env.NEXT_PUBLIC_TOKEN_KEY || 'softranch_access_token')
      const storedUser = localStorage.getItem(process.env.NEXT_PUBLIC_USER_KEY || 'softranch_user')
      
      // If we have a token but no user, or user but no token, clear everything
      if ((token && !storedUser) || (!token && storedUser)) {
        localStorage.removeItem(process.env.NEXT_PUBLIC_TOKEN_KEY || 'softranch_access_token')
        localStorage.removeItem(process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY || 'softranch_refresh_token')
        localStorage.removeItem(process.env.NEXT_PUBLIC_USER_KEY || 'softranch_user')
      }
    }

    checkAuthIntegrity()
  }, [])

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push(`${redirectTo}?redirect=${encodeURIComponent(pathname)}`)
    }
  }, [loading, isAuthenticated, router, redirectTo, pathname])

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-3 border-primary-color border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white text-lg">Verifying authentication...</p>
        </div>
      </div>
    )
  }

  // Check authentication
  if (!isAuthenticated || !user) {
    return null // Router push will handle redirect
  }

  // Check email verification
  if (!user.isEmailVerified) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="glass max-w-md mx-auto p-8 rounded-2xl text-center">
          <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-white text-2xl font-bold mb-4">Email Verification Required</h2>
          <p className="text-gray-300 mb-4">Please verify your email address to access the dashboard.</p>
          <p className="text-gray-400 text-sm">Check your inbox for the verification email.</p>
        </div>
      </div>
    )
  }

  // Check if account is active
  if (!user.isActive) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="glass max-w-md mx-auto p-8 rounded-2xl text-center">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
            </svg>
          </div>
          <h2 className="text-white text-2xl font-bold mb-4">Account Deactivated</h2>
          <p className="text-gray-300 mb-4">Your account has been deactivated.</p>
          <p className="text-gray-400 text-sm">Please contact support for assistance.</p>
        </div>
      </div>
    )
  }

  // Check permissions if required
  if (requiredPermissions.length > 0) {
    const hasRequiredPermissions = requireAll 
      ? hasAllPermissions(requiredPermissions)
      : hasAnyPermission(requiredPermissions)

    if (!hasRequiredPermissions) {
      // If fallback component provided, show it
      if (fallback) {
        return fallback
      }

      // Otherwise show unauthorized message
      return (
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="glass max-w-md mx-auto p-8 rounded-2xl text-center">
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0-6V9m0 12a9 9 0 110-18 9 9 0 010 18z" />
              </svg>
            </div>
            <h2 className="text-white text-2xl font-bold mb-4">Access Denied</h2>
            <p className="text-gray-300 mb-4">You don't have permission to access this page.</p>
            <p className="text-primary-light text-sm">Required permissions: {requiredPermissions.join(', ')}</p>
          </div>
        </div>
      )
    }
  }

  // All checks passed, render children or Component
  return Component ? <Component /> : children
}

// HOC for easier route protection
export const withProtection = (Component, options = {}) => {
  return (props) => (
    <ProtectedRoute {...options}>
      <Component {...props} />
    </ProtectedRoute>
  )
}

export default ProtectedRoute