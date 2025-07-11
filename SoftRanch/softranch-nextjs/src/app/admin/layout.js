'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  ChevronDown,
  Bell,
  Search,
  Sun,
  Moon
} from 'lucide-react'
import { useAuth, PERMISSIONS } from '@/context/AuthContext'
import { useTheme } from '@/context/ThemeContext'
import ThemeToggle from '@/components/common/ThemeToggle'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import './admin.css'

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout, hasPermission } = useAuth()
  const { theme } = useTheme()

  // Don't apply admin layout to login page
  if (pathname === '/admin/login') {
    return children
  }

  // Navigation items with permissions
  const navigationItems = [
    {
      path: '/admin',
      label: 'Dashboard',
      icon: LayoutDashboard,
      permission: null, // All authenticated users can see dashboard
    },
    {
      path: '/admin/blogs',
      label: 'Blog Management',
      icon: FileText,
      permission: PERMISSIONS.BLOGS,
    },
    {
      path: '/admin/team',
      label: 'Team Members',
      icon: Users,
      permission: PERMISSIONS.MANAGE_TEAM,
    },
    {
      path: '/admin/settings',
      label: 'Settings',
      icon: Settings,
      permission: PERMISSIONS.SETTINGS,
    },
  ]

  // Filter navigation items based on permissions
  const visibleNavItems = navigationItems.filter(item => 
    !item.permission || hasPermission(item.permission)
  )

  const handleLogout = async () => {
    await logout()
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen)
  }

  return (
    <ProtectedRoute>
      <div className={`dash-layout ${theme}`}>
        {/* Sidebar */}
        <aside className={`dash-sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="dash-sidebar-header">
            <Link href="/admin" className="dash-logo">
              SoftRanch
            </Link>
            <button 
              className="dash-sidebar-toggle desktop-only"
              onClick={toggleSidebar}
            >
              <X size={20} />
            </button>
          </div>

          <nav className="dash-nav">
            {visibleNavItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.path || (item.path !== '/admin' && pathname.startsWith(item.path))
              
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`dash-nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          <div className="dash-sidebar-footer">
            <button className="dash-logout-btn" onClick={handleLogout}>
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <div className="dash-main">
          {/* Header */}
          <header className="dash-header">
            <div className="dash-header-left">
              <button 
                className="dash-menu-toggle"
                onClick={toggleSidebar}
              >
                <Menu size={24} />
              </button>
              
              <div className="dash-search">
                <Search size={20} />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="dash-search-input"
                />
              </div>
            </div>

            <div className="dash-header-right">
              <ThemeToggle variant="admin" />
              
              <button className="dash-icon-btn dash-notification-btn">
                <Bell size={20} />
                <span className="dash-notification-badge">3</span>
              </button>

              <div className="dash-profile-dropdown">
                <button 
                  className="dash-profile-trigger"
                  onClick={toggleProfileDropdown}
                >
                  <div className="dash-profile-avatar">
                    {user?.avatar ? (
                      <img src={user.avatarUrl || user.avatar} alt={user.name} />
                    ) : (
                      <span>{user?.name?.charAt(0).toUpperCase()}</span>
                    )}
                  </div>
                  <div className="dash-profile-info">
                    <span className="dash-profile-name">{user?.name}</span>
                    <span className="dash-profile-role">{user?.role}</span>
                  </div>
                  <ChevronDown size={16} className={`dash-dropdown-arrow ${isProfileDropdownOpen ? 'open' : ''}`} />
                </button>

                {isProfileDropdownOpen && (
                  <div className="dash-dropdown-menu">
                    <Link href="/admin/profile" className="dash-dropdown-item">
                      My Profile
                    </Link>
                    <Link href="/admin/settings" className="dash-dropdown-item">
                      Settings
                    </Link>
                    <div className="dash-dropdown-divider"></div>
                    <button className="dash-dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="dash-content">
            {children}
          </main>
        </div>

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div 
            className="dash-sidebar-overlay"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
    </ProtectedRoute>
  )
}