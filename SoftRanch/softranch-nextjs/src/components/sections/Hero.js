'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero-bg">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-glow hero-glow-3"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <Sparkles size={16} className="badge-icon" />
            <span>Premium Web Development Agency</span>
            <div className="badge-glow"></div>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            We Build
            <span className="hero-title-gradient"> Digital Experiences</span>
            <br />
            That Drive
            <span className="hero-title-gradient"> Results</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            Transform your vision into powerful digital solutions. From stunning websites 
            to complex web applications, we craft experiences that captivate users and 
            accelerate business growth.
          </p>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <Link href="/contact" className="hero-button primary">
              <span>Start Your Project</span>
              <ArrowRight size={20} />
              <div className="button-glow"></div>
            </Link>
            
            <Link href="/portfolio" className="hero-button secondary">
              <Play size={20} />
              <span>View Our Work</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="hero-trust">
            <p className="trust-text">Trusted by innovative companies worldwide</p>
            <div className="trust-badges">
              <div className="trust-badge">
                <Zap size={16} />
                <span>Lightning Fast</span>
              </div>
              <div className="trust-badge">
                <span>🎯</span>
                <span>Results Driven</span>
              </div>
              <div className="trust-badge">
                <span>🔒</span>
                <span>Secure & Reliable</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero-visual">
          <div className="visual-container">
            <div className="visual-card visual-card-1">
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="card-title">SoftRanch.com</span>
              </div>
              <div className="card-content">
                <div className="code-line"></div>
                <div className="code-line short"></div>
                <div className="code-line"></div>
                <div className="code-line medium"></div>
              </div>
            </div>
            
            <div className="visual-card visual-card-2">
              <div className="analytics-chart">
                <div className="chart-bar" style={{ height: '60%' }}></div>
                <div className="chart-bar" style={{ height: '80%' }}></div>
                <div className="chart-bar" style={{ height: '45%' }}></div>
                <div className="chart-bar" style={{ height: '90%' }}></div>
                <div className="chart-bar" style={{ height: '70%' }}></div>
              </div>
              <div className="analytics-label">Performance ↗</div>
            </div>
            
            <div className="visual-card visual-card-3">
              <div className="mobile-screen">
                <div className="mobile-header"></div>
                <div className="mobile-content">
                  <div className="mobile-item"></div>
                  <div className="mobile-item"></div>
                  <div className="mobile-item"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="floating-element floating-1">
            <Zap size={24} />
          </div>
          <div className="floating-element floating-2">
            <span>⚡</span>
          </div>
          <div className="floating-element floating-3">
            <span>🚀</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
        <div className="scroll-line"></div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </section>
  )
}

export default Hero