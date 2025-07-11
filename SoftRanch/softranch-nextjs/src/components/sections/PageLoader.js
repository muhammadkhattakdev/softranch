'use client'

import React from 'react'
import './PageLoader.css'

const PageLoader = ({ 
  className = '',
  showText = true,
  text = 'Loading'
}) => {
  return (
    <div className={`page-loader-wrapper ${className}`}>
      <div className="page-loader-backdrop"></div>
      <div className="page-loader-glow"></div>
      
      <div className="page-loader-content">
        <div className="page-loader-logo">
          <span className="logo-text">SoftRanch</span>
          <div className="logo-underline"></div>
        </div>
        
        <div className="page-loader-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        
        {showText && (
          <div className="page-loader-text">
            <span className="loading-text">{text}</span>
            <span className="loading-dots">
              <span className="dot">.</span>
              <span className="dot">.</span>
              <span className="dot">.</span>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default PageLoader