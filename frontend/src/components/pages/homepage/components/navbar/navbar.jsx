import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, Menu, X } from 'lucide-react';
import "./style.css";
import ThemeToggle from '../../../../common/themeToggle/themeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleMobileToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Mobile toggle clicked, current state:', isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('mobile-menu-overlay')) {
      closeMobileMenu();
    }
  };

  console.log('Navbar render - isMobileMenuOpen:', isMobileMenuOpen);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/" onClick={closeMobileMenu}>SoftRanch</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-links desktop-only">
            <Link to="/about" className="navbar-link">About</Link>
            <Link to="/services" className="navbar-link">Services</Link>
            <Link to="/portfolio" className="navbar-link">Portfolio</Link>
            <Link to="/contact" className="navbar-link">Contact</Link>
            <Link to="/terms-and-conditions" className="navbar-link">Terms and Conditions</Link>
          </div>
          
          {/* Desktop Right Section */}
          <div className="navbar-right desktop-only">
            <div className="navbar-theme-toggle">
              <ThemeToggle variant="button" />
            </div>
            
            <div className="navbar-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Right Section */}
          <div className="navbar-mobile-right mobile-only">
            <div className="navbar-theme-toggle mobile">
              <ThemeToggle variant="button" />
            </div>
            
            <button 
              className="mobile-menu-toggle"
              onClick={handleMobileToggle}
              aria-label="Toggle mobile menu"
              type="button"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay open"
          onClick={handleOverlayClick}
        >
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              <div className="mobile-nav-links">
                <Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>
                  About
                </Link>
                <Link to="/services" className="mobile-nav-link" onClick={closeMobileMenu}>
                  Services
                </Link>
                <Link to="/portfolio" className="mobile-nav-link" onClick={closeMobileMenu}>
                  Portfolio
                </Link>
                <Link to="/contact" className="mobile-nav-link" onClick={closeMobileMenu}>
                  Contact
                </Link>
                <Link to="/terms-and-conditions" className="mobile-nav-link" onClick={closeMobileMenu}>
                  Terms and Conditions
                </Link>
                <Link to="/blog" className="mobile-nav-link" onClick={closeMobileMenu}>
                  Blog
                </Link>
              </div>
              
              <div className="mobile-menu-theme">
                <div className="mobile-menu-theme-label">
                  <span>Theme</span>
                </div>
                <ThemeToggle variant="switch" />
              </div>
              
              <div className="mobile-social">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mobile-social-icon linkedin">
                  <Linkedin size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mobile-social-icon instagram">
                  <Instagram size={24} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mobile-social-icon facebook">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;