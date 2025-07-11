'use client'

import React, { useRef, useEffect, useCallback } from 'react'
import {
  Bold,
  Italic,
  Underline,
  Link2,
  List,
  ListOrdered,
  Quote,
  Code,
  Heading1,
  Heading2,
  Heading3,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Image,
  Undo,
  Redo
} from 'lucide-react'
import './RichTextEditor.css'

const RichTextEditor = ({ 
  value = '', 
  onChange, 
  placeholder = 'Start writing...', 
  error,
  className = '',
  height = '400px'
}) => {
  const editorRef = useRef(null)
  const fileInputRef = useRef(null)

  useEffect(() => {
    if (editorRef.current && value !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = value
    }
  }, [value])

  const execCommand = useCallback((command, value = null) => {
    document.execCommand(command, false, value)
    editorRef.current?.focus()
    handleChange()
  }, [])

  const handleChange = useCallback(() => {
    if (onChange && editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }, [onChange])

  const handleKeyDown = (e) => {
    // Handle Tab key
    if (e.key === 'Tab') {
      e.preventDefault()
      execCommand('insertHTML', '&nbsp;&nbsp;&nbsp;&nbsp;')
    }
    
    // Handle Enter key for better formatting
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault()
      execCommand('insertHTML', '<br>')
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const text = e.clipboardData.getData('text/plain')
    execCommand('insertText', text)
  }

  const insertLink = () => {
    const selection = window.getSelection()
    const selectedText = selection.toString()
    const url = prompt('Enter URL:', 'https://')
    
    if (url && url !== 'https://') {
      if (selectedText) {
        execCommand('createLink', url)
      } else {
        execCommand('insertHTML', `<a href="${url}" target="_blank">${url}</a>`)
      }
    }
  }

  const insertImage = () => {
    fileInputRef.current?.click()
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file')
      return
    }

    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      alert('Image size should be less than 5MB')
      return
    }

    // Convert to base64 for simplicity
    // In production, you'd upload to server and get URL
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = `<img src="${e.target.result}" alt="Uploaded image" style="max-width: 100%; height: auto; margin: 1rem 0;" />`
      execCommand('insertHTML', img)
    }
    reader.readAsDataURL(file)
  }

  const formatBlock = (tag) => {
    execCommand('formatBlock', tag)
  }

  const checkCommandState = (command) => {
    try {
      return document.queryCommandState(command)
    } catch {
      return false
    }
  }

  const toolbarButtons = [
    { 
      icon: Undo, 
      command: 'undo', 
      title: 'Undo (Ctrl+Z)',
      type: 'command'
    },
    { 
      icon: Redo, 
      command: 'redo', 
      title: 'Redo (Ctrl+Y)',
      type: 'command'
    },
    'separator',
    { 
      icon: Bold, 
      command: 'bold', 
      title: 'Bold (Ctrl+B)',
      type: 'command'
    },
    { 
      icon: Italic, 
      command: 'italic', 
      title: 'Italic (Ctrl+I)',
      type: 'command'
    },
    { 
      icon: Underline, 
      command: 'underline', 
      title: 'Underline (Ctrl+U)',
      type: 'command'
    },
    'separator',
    { 
      icon: Heading1, 
      command: () => formatBlock('h1'), 
      title: 'Heading 1',
      type: 'custom'
    },
    { 
      icon: Heading2, 
      command: () => formatBlock('h2'), 
      title: 'Heading 2',
      type: 'custom'
    },
    { 
      icon: Heading3, 
      command: () => formatBlock('h3'), 
      title: 'Heading 3',
      type: 'custom'
    },
    'separator',
    { 
      icon: List, 
      command: 'insertUnorderedList', 
      title: 'Bullet List',
      type: 'command'
    },
    { 
      icon: ListOrdered, 
      command: 'insertOrderedList', 
      title: 'Numbered List',
      type: 'command'
    },
    { 
      icon: Quote, 
      command: () => formatBlock('blockquote'), 
      title: 'Quote',
      type: 'custom'
    },
    { 
      icon: Code, 
      command: () => formatBlock('pre'), 
      title: 'Code Block',
      type: 'custom'
    },
    'separator',
    { 
      icon: AlignLeft, 
      command: 'justifyLeft', 
      title: 'Align Left',
      type: 'command'
    },
    { 
      icon: AlignCenter, 
      command: 'justifyCenter', 
      title: 'Align Center',
      type: 'command'
    },
    { 
      icon: AlignRight, 
      command: 'justifyRight', 
      title: 'Align Right',
      type: 'command'
    },
    'separator',
    { 
      icon: Link2, 
      command: insertLink, 
      title: 'Insert Link (Ctrl+K)',
      type: 'custom'
    },
    { 
      icon: Image, 
      command: insertImage, 
      title: 'Insert Image',
      type: 'custom'
    },
  ]

  return (
    <div className={`dash-editor ${error ? 'error' : ''} ${className}`}>
      <div className="dash-editor-toolbar">
        {toolbarButtons.map((button, index) => {
          if (button === 'separator') {
            return <div key={index} className="dash-toolbar-separator" />
          }

          const Icon = button.icon
          const isActive = button.type === 'command' ? checkCommandState(button.command) : false
          
          return (
            <button
              key={index}
              type="button"
              onClick={() => {
                if (typeof button.command === 'function') {
                  button.command()
                } else {
                  execCommand(button.command)
                }
              }}
              className={`dash-toolbar-btn ${isActive ? 'active' : ''}`}
              title={button.title}
            >
              <Icon size={18} />
            </button>
          )
        })}
      </div>

      <div
        ref={editorRef}
        contentEditable
        className="dash-editor-content"
        style={{ minHeight: height }}
        onInput={handleChange}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        data-placeholder={placeholder}
        suppressContentEditableWarning={true}
      />

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
        aria-hidden="true"
      />
    </div>
  )
}

export default RichTextEditor