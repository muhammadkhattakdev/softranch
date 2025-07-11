'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Mail, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import Navbar from '@/components/sections/Navbar'
import './login.css'

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const router = useRouter()
  const searchParams = useSearchParams()
  const { login, isAuthenticated } = useAuth()

  const redirectTo = searchParams?.get('redirect') || '/admin/dashboard'

  useEffect(() => {
    if (isAuthenticated) {
      router.push(redirectTo)
    }
  }, [isAuthenticated, router, redirectTo])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (error) setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const result = await login(formData.email, formData.password)

      if (result.success) {
        // Handle remember me
        if (rememberMe) {
          localStorage.setItem('rememberedEmail', formData.email)
        } else {
          localStorage.removeItem('rememberedEmail')
        }

        router.push(redirectTo)
      } else {
        setError(result.error || 'Login failed. Please try again.')
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail')
    if (rememberedEmail) {
      setFormData((prev) => ({ ...prev, email: rememberedEmail }))
      setRememberMe(true)
    }
  }, [])

  return (
    <>
      <Navbar />
      <div className="dash-login-wrapper">
        <div className="dash-login-bg">
          <div className="dash-login-glow dash-login-glow-1"></div>
          <div className="dash-login-glow dash-login-glow-2"></div>
        </div>

        <div className="dash-login-container">
          <div className="dash-login-box">
            <div className="dash-login-header">
              <h1 className="dash-login-title">Welcome Back</h1>
              <p className="dash-login-subtitle">Sign in to your dashboard</p>
            </div>

            {error && (
              <div className="dash-login-error">
                <AlertCircle size={20} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="dash-login-form">
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
                    className="dash-form-input"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

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
                    placeholder="Enter your password"
                    className="dash-form-input"
                    required
                    autoComplete="current-password"
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
              </div>

              <div className="dash-form-options">
                <label className="dash-checkbox-label">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="dash-checkbox"
                  />
                  <span>Remember me</span>
                </label>
                <Link href="/admin/forgot-password" className="dash-forgot-link">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="dash-login-btn"
              >
                {isLoading ? (
                  <>
                    <span className="dash-login-spinner"></span>
                    <span>Signing in...</span>
                  </>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            <div className="dash-login-footer">
              <p>
                Don't have an account?{' '}
                <Link href="/admin/register" className="dash-register-link">
                  Contact Admin
                </Link>
              </p>
            </div>
          </div>

          <div className="dash-login-brand">
            <Link href="/" className="dash-brand-logo">
              SoftRanch
            </Link>
            <p className="dash-brand-tagline">
              Empowering your digital presence
            </p>
          </div>
        </div>
      </div>
    </>
  )
}