'use client'

import React, { useRef, useState, useCallback } from 'react'
import { Upload, X, Image as ImageIcon, AlertCircle } from 'lucide-react'
import './ImageUpload.css'

const ImageUpload = ({
  value,
  onChange,
  error,
  accept = 'image/*',
  maxSize = 5,
  className = '',
  placeholder = 'Click to upload or drag and drop',
}) => {
  const fileInputRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [preview, setPreview] = useState(value)
  const [uploadError, setUploadError] = useState('')

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const validateFile = (file) => {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      return 'Please select an image file'
    }

    // Validate file size (in MB)
    if (file.size > maxSize * 1024 * 1024) {
      return `File size must be less than ${maxSize}MB`
    }

    return null
  }

  const handleFileSelect = useCallback((file) => {
    if (!file) return

    const validationError = validateFile(file)
    if (validationError) {
      setUploadError(validationError)
      return
    }

    setUploadError('')

    // Create preview
    const reader = new FileReader()
    reader.onload = (e) => {
      setPreview(e.target.result)
    }
    reader.onerror = () => {
      setUploadError('Failed to read file')
    }
    reader.readAsDataURL(file)

    // Pass file to parent
    if (onChange) {
      onChange(file)
    }
  }, [onChange, maxSize])

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    handleFileSelect(file)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files[0]
    handleFileSelect(file)
  }

  const handleRemove = () => {
    setPreview(null)
    setUploadError('')
    if (onChange) {
      onChange(null)
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const displayError = error || uploadError

  return (
    <div className={`dash-image-upload ${className} ${displayError ? 'error' : ''}`}>
      {preview ? (
        <div className="dash-image-preview">
          <img src={preview} alt="Preview" />
          <button
            type="button"
            onClick={handleRemove}
            className="dash-image-remove"
            title="Remove image"
            aria-label="Remove image"
          >
            <X size={20} />
          </button>
          <div className="image-overlay">
            <button
              type="button"
              onClick={handleClick}
              className="change-image-btn"
              title="Change image"
            >
              <Upload size={16} />
              <span>Change</span>
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`dash-upload-area ${isDragging ? 'dragging' : ''}`}
          onClick={handleClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handleClick()
            }
          }}
          aria-label="Upload image area"
        >
          <div className="dash-upload-content">
            <div className="dash-upload-icon">
              <Upload size={40} />
            </div>
            <p className="dash-upload-text">{placeholder}</p>
            <p className="dash-upload-hint">
              {accept === 'image/*' ? 'PNG, JPG, GIF, WebP up to ' : ''}
              {maxSize}MB
            </p>
          </div>
        </div>
      )}

      {displayError && (
        <div className="dash-upload-error">
          <AlertCircle size={16} />
          <span>{displayError}</span>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        aria-hidden="true"
      />
    </div>
  )
}

export default ImageUpload