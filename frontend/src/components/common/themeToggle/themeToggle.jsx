import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../../context/themeContext';
import './style.css';

const ThemeToggle = ({ variant = 'switch' }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  if (variant === 'button') {
    return (
      <button
        onClick={toggleTheme}
        className="theme-toggle-btn"
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        {isDark ? (
          <Sun size={24} />
        ) : (
          <Moon size={24} />
        )}
      </button>
    );
  }

  return (
    <div className="theme-toggle-wrapper">
      <span className="theme-toggle-label">
        <Sun size={18} />
      </span>
      
      <label className="theme-toggle-switch">
        <input
          type="checkbox"
          checked={isDark}
          onChange={toggleTheme}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        />
        <span className="theme-toggle-slider">
          <span className="theme-toggle-icon">
            {isDark ? (
              <Moon size={14} />
            ) : (
              <Sun size={14} />
            )}
          </span>
        </span>
      </label>
      
      <span className="theme-toggle-label">
        <Moon size={18} />
      </span>
    </div>
  );
};

export default ThemeToggle;