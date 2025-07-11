'use client'

import React, { createContext, useState, useContext, useEffect, useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import api, { tokenManager } from '@/lib/api'

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// Permission constants
export const PERMISSIONS = {
  BLOGS: 'blogs',
  MANAGE_TEAM: 'manage_team',
  MANAGE_INVOICES: 'manage_invoices',
  MANAGE_CONTACTS: 'manage_contacts',
  ANALYTICS: 'analytics',
  SETTINGS: 'settings',
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const router = useRouter()
  const pathname = usePathname()

  // Load user from localStorage on mount
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = localStorage.getItem(process.env.NEXT_PUBLIC_USER_KEY || 'softranch_user')
        const token = tokenManager.getAccessToken()
        
        if (storedUser && token) {
          // Verify token by fetching current user
          const response = await api.auth.me()
          const userData = response.data.user || response.data.data
          setUser(userData)
          localStorage.setItem(process.env.NEXT_PUBLIC_USER_KEY || 'softranch_user', JSON.stringify(userData))
        }
      } catch (error) {
        console.error('Error loading user:', error)
        // Clear invalid tokens
        tokenManager.removeTokens()
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [])

  const login = useCallback(async (email, password) => {
    try {
      setError(null)
      const response = await api.auth.login({ email, password })
      const { accessToken, user: userData } = response.data
      
      // Store tokens and user data
      tokenManager.setAccessToken(accessToken)
      
      // Note: refreshToken is now handled as httpOnly cookie on the backend
      // We don't store it in localStorage for security
      
      localStorage.setItem(process.env.NEXT_PUBLIC_USER_KEY || 'softranch_user', JSON.stringify(userData))
      setUser(userData)
      
      return { success: true, user: userData }
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed'
      setError(message)
      return { success: false, error: message }
    }
  }, [])

  const logout = useCallback(async () => {
    try {
      await api.auth.logout()
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      tokenManager.removeTokens()
      setUser(null)
      
      // Redirect to login page if currently on admin route
      if (pathname?.startsWith('/admin')) {
        router.push('/admin/login')
      }
    }
  }, [router, pathname])

  const register = useCallback(async (userData) => {
    try {
      setError(null)
      const response = await api.auth.register(userData)
      const { accessToken, user: newUser } = response.data
      
      // Store tokens and user data
      tokenManager.setAccessToken(accessToken)
      
      // Note: refreshToken is now handled as httpOnly cookie on the backend
      
      localStorage.setItem(process.env.NEXT_PUBLIC_USER_KEY || 'softranch_user', JSON.stringify(newUser))
      setUser(newUser)
      
      return { success: true, user: newUser }
    } catch (error) {
      const message = error.response?.data?.message || 'Registration failed'
      setError(message)
      return { success: false, error: message }
    }
  }, [])

  const updateProfile = useCallback(async (data) => {
    try {
      const response = await api.users.updateMe(data)
      const updatedUser = response.data.data
      
      localStorage.setItem(process.env.NEXT_PUBLIC_USER_KEY || 'softranch_user', JSON.stringify(updatedUser))
      setUser(updatedUser)
      
      return { success: true, user: updatedUser }
    } catch (error) {
      const message = error.response?.data?.message || 'Update failed'
      return { success: false, error: message }
    }
  }, [])

  // Permission checking functions
  const hasPermission = useCallback((permission) => {
    if (!user) return false
    
    // Admins have all permissions
    if (user.role === 'admin') return true
    
    // Check specific permissions for other roles
    if (user.permissions && Array.isArray(user.permissions)) {
      return user.permissions.includes(permission)
    }
    
    // Default permissions by role
    switch (user.role) {
      case 'editor':
        return [PERMISSIONS.BLOGS, PERMISSIONS.ANALYTICS].includes(permission)
      case 'author':
        return permission === PERMISSIONS.BLOGS
      default:
        return false
    }
  }, [user])

  const hasAnyPermission = useCallback((permissions) => {
    return permissions.some(permission => hasPermission(permission))
  }, [hasPermission])

  const hasAllPermissions = useCallback((permissions) => {
    return permissions.every(permission => hasPermission(permission))
  }, [hasPermission])

  const isAdmin = useCallback(() => {
    return user?.role === 'admin'
  }, [user])

  const isEditor = useCallback(() => {
    return user?.role === 'editor' || user?.role === 'admin'
  }, [user])

  const isAuthor = useCallback(() => {
    return ['author', 'editor', 'admin'].includes(user?.role)
  }, [user])

  // Helper function to check if current user can access a route
  const canAccessRoute = useCallback((route, requiredPermissions = []) => {
    if (!user) return false
    
    // Public routes
    if (!route.startsWith('/admin')) return true
    
    // Admin routes require authentication
    if (!user.isEmailVerified || !user.isActive) return false
    
    // Check permissions if required
    if (requiredPermissions.length > 0) {
      return hasAnyPermission(requiredPermissions)
    }
    
    return true
  }, [user, hasAnyPermission])

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    register,
    updateProfile,
    hasPermission,
    hasAnyPermission,
    hasAllPermissions,
    isAdmin,
    isEditor,
    isAuthor,
    canAccessRoute,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}