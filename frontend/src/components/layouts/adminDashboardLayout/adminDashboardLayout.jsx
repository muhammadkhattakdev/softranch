import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
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
} from 'lucide-react';
import { useAuth, PERMISSIONS } from '../../../context/authContext';
import './style.css';

const AdminDashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, hasPermission } = useAuth();

  // Navigation items with permissions
  const navigationItems = [
    {
      path: '/admin/dashboard',
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
  ];

  // Filter navigation items based on permissions
  const visibleNavItems = navigationItems.filter(item => 
    !item.permission || hasPermission(item.permission)
  );

  const handleLogout = async () => {
    await logout();
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can implement theme persistence here
  };

  return (
    <div className={`dash-layout ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Sidebar */}
      <aside className={`dash-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="dash-sidebar-header">
          <Link to="/admin/dashboard" className="dash-logo">
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
            const Icon = item.icon;
            const isActive = location.pathname.startsWith(item.path);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`dash-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
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
            <button className="dash-icon-btn" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
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
                  <Link to="/admin/profile" className="dash-dropdown-item">
                    My Profile
                  </Link>
                  <Link to="/admin/settings" className="dash-dropdown-item">
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
          <Outlet />
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="dash-sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminDashboardLayout;