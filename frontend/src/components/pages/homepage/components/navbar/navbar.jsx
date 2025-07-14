import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Linkedin, 
  Instagram, 
  Facebook, 
  Menu, 
  X,
  ArrowUpRight,
  User,
  FileText,
  Phone,
  MessageCircle,
  Mail,
  Briefcase,
  Eye,
  Building2,
  ShoppingCart,
  UtensilsCrossed,
  Heart,
  Scale,
  Palette,
  Code,
  Smartphone,
  Search,
  Utensils,
  Building,
  Laptop,
  Car,
  HardHat
} from 'lucide-react';
import "./style.css";
import ThemeToggle from '../../../../common/themeToggle/themeToggle';

const EnhancedNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const location = useLocation();

  // Function to determine if a nav item should be active
  const isNavItemActive = (navItem) => {
    const pathname = location.pathname;
    
    switch (navItem) {
      case 'about':
        return pathname === '/about' || pathname === '/terms-and-conditions';
      case 'services':
        return pathname === '/services' || 
               pathname.includes('/real-estate-services') ||
               pathname.includes('/ecommerce-website-development-services') ||
               pathname.includes('/restaurant-website-development-services') ||
               pathname.includes('/healthcare-website-development-services') ||
               pathname.includes('/lawyer-accountant-consultant-website-development-services') ||
               pathname.includes('/car-dealership-website-development-services') ||
               pathname.includes('/construction-website-development-services');
      case 'portfolio':
        return pathname === '/portfolio' || 
               pathname === '/live-work-samples' ||
               pathname.includes('/live-work-samples/');
      case 'contact':
        return pathname === '/contact';
      default:
        return false;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleMouseEnter = (dropdown) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setDropdownTimeout(timeout);
  };

  const handleMobileToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
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

  // Dropdown content configurations
  const dropdownContent = {
    about: {
      title: "About SoftRanch",
      subtitle: "Learn more about our company and journey",
      sections: [
        {
          title: "Company",
          links: [
            {
              title: "About Us",
              description: "Our story, mission and values",
              href: "/about",
              icon: <User size={20} />,
              color: "gradient-blue"
            },
            {
              title: "Terms & Conditions",
              description: "Legal terms and policies",
              href: "/terms-and-conditions",
              icon: <FileText size={20} />,
              color: "gradient-purple"
            }
          ]
        }
      ]
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Ready to start your project? Let's connect",
      sections: [
        {
          title: "Contact Options",
          links: [
            {
              title: "Contact Page",
              description: "Fill out our contact form",
              href: "/contact",
              icon: <Phone size={20} />,
              color: "gradient-green"
            },
            {
              title: "WhatsApp Chat",
              description: "Quick chat on WhatsApp",
              href: "https://wa.me/923355398908/",
              icon: <MessageCircle size={20} />,
              color: "gradient-emerald",
              external: true
            },
            {
              title: "Send Email",
              description: "Drop us a line anytime",
              href: "mailto:welcome@softranch.com",
              icon: <Mail size={20} />,
              color: "gradient-red",
              external: true
            }
          ]
        }
      ]
    },
    portfolio: {
      title: "Our Work",
      subtitle: "Explore our portfolio and live demonstrations",
      sections: [
        {
          title: "Portfolio",
          links: [
            {
              title: "Live Demonstrations",
              description: "Interactive live work samples",
              href: "/live-work-samples",
              icon: <Eye size={20} />,
              color: "gradient-pink"
            },
            {
              title: "Work Samples",
              description: "Browse our portfolio gallery",
              href: "/portfolio",
              icon: <Briefcase size={20} />,
              color: "gradient-indigo"
            },
          ]
        },
        {
          title: "Featured Live Demos",
          links: [
            {
              title: "Restaurant Website",
              description: "Savoria Restaurant Demo",
              href: "/live-work-samples/savoria-restaurant-website",
              icon: <Utensils size={20} />,
              color: "gradient-orange"
            },
            {
              title: "Real Estate Platform",
              description: "EstateFlow Demo",
              href: "/live-work-samples/estate-flow-website",
              icon: <Building size={20} />,
              color: "gradient-teal"
            },
            {
              title: "Tech Company Site",
              description: "InnovateTech Demo",
              href: "/live-work-samples/innovate-tech-website",
              icon: <Laptop size={20} />,
              color: "gradient-cyan"
            }
          ]
        }
      ]
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive digital solutions for your business",
      sections: [
        {
          title: "Featured Services",
          links: [
            {
              title: "Real Estate Websites",
              description: "Generate 10x more leads",
              href: "/real-estate-services",
              icon: <Building2 size={20} />,
              color: "gradient-blue"
            },
            {
              title: "E-commerce Solutions",
              description: "Double your online sales",
              href: "/ecommerce-website-development-services",
              icon: <ShoppingCart size={20} />,
              color: "gradient-green"
            },
            {
              title: "Restaurant Websites",
              description: "Fill every table with customers",
              href: "/restaurant-website-development-services",
              icon: <UtensilsCrossed size={20} />,
              color: "gradient-orange"
            },
            {
              title: "Healthcare Platforms",
              description: "Attract more patients",
              href: "/healthcare-website-development-services",
              icon: <Heart size={20} />,
              color: "gradient-red"
            },

          ]
        },
        {
          title: "Core Services",
          links: [
            {
              title: "All Web Development Services",
              description: "Custom websites & applications",
              href: "/services",
              icon: <Code size={20} />,
              color: "gradient-indigo"
            },
            {
              title: "Professional Services",
              description: "Land premium clients",
              href: "/lawyer-accountant-consultant-website-development-services",
              icon: <Scale size={20} />,
              color: "gradient-purple"
            },
            {
              title: "Car Dealership Websites",
              description: "Sell 250% more vehicles",
              href: "/car-dealership-website-development-services",
              icon: <Car size={20} />,
              color: "gradient-red"
            },
            {
              title: "Construction Websites",
              description: "Get 400% more project leads",
              href: "/construction-website-development-services",
              icon: <HardHat size={20} />,
              color: "gradient-orange"
            }
          ]
        }
      ]
    }
  };

  const renderDropdown = (content) => {
    if (!content) return null;

    return (
      <div className="navbar-dropdown">
        <div className="dropdown-backdrop"></div>
        <div className="dropdown-container">
          <div className="dropdown-content">
            {content.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="dropdown-section">
                <div className="section-links">
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      to={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="dropdown-link"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className={`link-icon ${link.color}`}>
                        {link.icon}
                      </div>
                      <div className="link-content">
                        <span className="link-title">{link.title}</span>
                        <span className="link-description">{link.description}</span>
                      </div>
                      <ArrowUpRight size={16} className="link-arrow" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <nav className={`enhanced-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/" onClick={closeMobileMenu}>SoftRanch</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-links desktop-only">
            <div 
              className="navbar-link-wrapper"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/about" className={`navbar-link ${isNavItemActive('about') ? 'navbar-link--active' : ''}`}>About</Link>
            </div>
            
            <div 
              className="navbar-link-wrapper"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/services" className={`navbar-link ${isNavItemActive('services') ? 'navbar-link--active' : ''}`}>Services</Link>
            </div>
            
            <div 
              className="navbar-link-wrapper"
              onMouseEnter={() => handleMouseEnter('portfolio')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/portfolio" className={`navbar-link ${isNavItemActive('portfolio') ? 'navbar-link--active' : ''}`}>Portfolio</Link>
            </div>
            
            <div 
              className="navbar-link-wrapper"
              onMouseEnter={() => handleMouseEnter('contact')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/contact" className={`navbar-link ${isNavItemActive('contact') ? 'navbar-link--active' : ''}`}>Contact</Link>
            </div>
          </div>
          
          {/* Desktop Right Section */}
          <div className="navbar-right desktop-only">
            <div className="navbar-theme-toggle">
              <ThemeToggle variant="button" />
            </div>
            
            <div className="navbar-social">
              <a href="https://linkedin.com/company/softranch/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/softranch.agency/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
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

        {/* Dropdown */}
        {activeDropdown && (
          <div 
            className="dropdown-wrapper"
            onMouseEnter={() => handleMouseEnter(activeDropdown)}
            onMouseLeave={handleMouseLeave}
          >
            {renderDropdown(dropdownContent[activeDropdown])}
          </div>
        )}
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
                <Link to="/about" className={`mobile-nav-link ${isNavItemActive('about') ? 'mobile-nav-link--active' : ''}`} onClick={closeMobileMenu}>
                  About
                </Link>
                <Link to="/services" className={`mobile-nav-link ${isNavItemActive('services') ? 'mobile-nav-link--active' : ''}`} onClick={closeMobileMenu}>
                  Services
                </Link>
                <Link to="/live-work-samples" className={`mobile-nav-link ${isNavItemActive('live-work-samples') ? 'mobile-nav-link--active' : ''}`} onClick={closeMobileMenu}>
                  Portfolio
                </Link>
                <Link to="/contact" className={`mobile-nav-link ${isNavItemActive('contact') ? 'mobile-nav-link--active' : ''}`} onClick={closeMobileMenu}>
                  Contact
                </Link>
                <Link to="/terms-and-conditions" className={`mobile-nav-link ${location.pathname === '/terms-and-conditions' ? 'mobile-nav-link--active' : ''}`} onClick={closeMobileMenu}>
                  Terms and Conditions
                </Link>
              </div>
              
              <div className="mobile-menu-theme">
                <div className="mobile-menu-theme-label">
                  <span>Theme</span>
                </div>
                <ThemeToggle variant="switch" />
              </div>

              <div className="mobile-social">
                <a href="https://www.linkedin.com/company/softranch/" target="_blank" rel="noopener noreferrer" className="mobile-social-icon linkedin">
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

export default EnhancedNavbar;