import React, { memo, useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  ExternalLink,
  Eye,
  Globe,
  Smartphone,
  ShoppingCart,
  Stethoscope,
  Home,
  Briefcase,
  GraduationCap,
  Camera,
  Coffee,
  Car
} from 'lucide-react';
import "./style.css";

// Sample project data - you can replace these with actual thumbnails later
const sampleProjects = [
  {
    id: 1,
    title: "Modern Restaurant Website",
    category: "Restaurant & Food",
    description: "Elegant dining experience with online reservations and menu showcase",
    icon: <Coffee size={24} />,
    slug: "modern-restaurant",
    technologies: ["React", "Node.js", "MongoDB"],
    features: ["Online Reservations", "Menu Management", "Reviews System"],
    gradient: "from-orange-500 to-red-500",
    img: ''
  },
  {
    id: 2,
    title: "Healthcare Portal",
    category: "Healthcare",
    description: "Comprehensive patient management system with appointment booking",
    icon: <Stethoscope size={24} />,
    slug: "healthcare-portal",
    technologies: ["React", "Express", "PostgreSQL"],
    features: ["Appointment Booking", "Patient Records", "Telemedicine"],
    gradient: "from-blue-500 to-cyan-500",
    img: ''
  },
  {
    id: 3,
    title: "E-commerce Platform",
    category: "E-commerce",
    description: "Full-featured online store with payment integration and inventory management",
    icon: <ShoppingCart size={24} />,
    slug: "ecommerce-platform",
    technologies: ["React", "Stripe", "Firebase"],
    features: ["Payment Gateway", "Inventory Management", "Order Tracking"],
    gradient: "from-green-500 to-emerald-500",
    img: ''
  },
  {
    id: 4,
    title: "Real Estate Website",
    category: "Real Estate",
    description: "Property listing platform with virtual tours and mortgage calculator",
    icon: <Home size={24} />,
    slug: "real-estate-website",
    technologies: ["React", "Maps API", "CMS"],
    features: ["Property Search", "Virtual Tours", "Mortgage Calculator"],
    gradient: "from-purple-500 to-violet-500",
    img: ''
  },
  {
    id: 5,
    title: "Business Consulting",
    category: "Corporate",
    description: "Professional consulting firm website with client portal and resources",
    icon: <Briefcase size={24} />,
    slug: "business-consulting",
    technologies: ["React", "Auth0", "AWS"],
    features: ["Client Portal", "Resource Library", "Consultation Booking"],
    gradient: "from-indigo-500 to-blue-500",
    img: ''
  },
  {
    id: 6,
    title: "Education Platform",
    category: "Education",
    description: "Online learning management system with course creation and progress tracking",
    icon: <GraduationCap size={24} />,
    slug: "education-platform",
    technologies: ["React", "Video API", "LMS"],
    features: ["Course Creation", "Progress Tracking", "Certificates"],
    gradient: "from-teal-500 to-green-500",
    img: ''
  },
  {
    id: 7,
    title: "Photography Portfolio",
    category: "Portfolio",
    description: "Stunning visual portfolio with gallery management and client booking",
    icon: <Camera size={24} />,
    slug: "photography-portfolio",
    technologies: ["React", "Cloudinary", "Booking"],
    features: ["Gallery Management", "Client Booking", "Print Orders"],
    gradient: "from-pink-500 to-rose-500",
    img: ''
  },
  {
    id: 8,
    title: "Automotive Dealership",
    category: "Automotive",
    description: "Car dealership website with inventory management and financing options",
    icon: <Car size={24} />,
    slug: "automotive-dealership",
    technologies: ["React", "Inventory API", "Finance"],
    features: ["Inventory Search", "Finance Calculator", "Test Drive Booking"],
    gradient: "from-gray-600 to-gray-800",
    img: ''
  },
  {
    id: 9,
    title: "Mobile App Landing",
    category: "App Landing",
    description: "Modern app landing page with download tracking and user analytics",
    icon: <Smartphone size={24} />,
    slug: "mobile-app-landing",
    technologies: ["React", "Analytics", "SEO"],
    features: ["Download Tracking", "User Analytics", "App Store Integration"],
    gradient: "from-yellow-500 to-orange-500",
    img: ''
  },
  {
    id: 10,
    title: "Corporate Website",
    category: "Corporate",
    description: "Professional corporate website with team portal and investor relations",
    icon: <Globe size={24} />,
    slug: "corporate-website",
    technologies: ["React", "CMS", "Analytics"],
    features: ["Team Portal", "Investor Relations", "News Management"],
    gradient: "from-slate-600 to-slate-800",
    img: ''
  }
];

// Optimized Sample Card Component
const SampleCard = memo(({ project, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Link 
      to={`/live-work-samples/${project.slug}`}
      className="live-samples-card"
      data-index={index}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="live-samples-card-inner">
        {/* Website Thumbnail Image */}
        <div className="live-samples-thumbnail">
          <div className="live-samples-image-container">
            <img 
              src={project.img} 
              alt={project.title}
              className="live-samples-website-image"
              onError={(e) => {
                // Fallback to placeholder if image doesn't exist
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className={`live-samples-placeholder-gradient bg-gradient-to-br ${project.gradient}`} style={{display: 'none'}}>
              <div className="live-samples-placeholder-icon">
                {project.icon}
              </div>
            </div>
            <div className="live-samples-overlay">
              <div className="live-samples-view-icon">
                <Eye size={20} />
                <span>View Live</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="live-samples-card-content">
          <div className="live-samples-category">
            {project.category}
          </div>
          
          <h3 className="live-samples-title">
            {project.title}
          </h3>
          
          <p className="live-samples-description">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="live-samples-technologies">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="live-samples-tech-tag">
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          <div className="live-samples-features">
            {project.features.map((feature, idx) => (
              <div key={idx} className="live-samples-feature">
                <div className="live-samples-feature-dot"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="live-samples-cta">
            <span className="live-samples-cta-text">View Live Sample</span>
            <ExternalLink size={16} />
          </div>
        </div>

        {/* Hover Effects */}
        <div className="live-samples-card-glow"></div>
      </div>
    </Link>
  );
});

SampleCard.displayName = 'SampleCard';

// Stats Component
const StatsSection = memo(() => (
  <div className="live-samples-stats">
    <div className="live-samples-stats-glow"></div>
    <div className="live-samples-stat-item">
      <span className="live-samples-stat-number">10+</span>
      <span className="live-samples-stat-label">Live Samples</span>
    </div>
    <div className="live-samples-stat-item">
      <span className="live-samples-stat-number">100%</span>
      <span className="live-samples-stat-label">Functional</span>
    </div>
    <div className="live-samples-stat-item">
      <span className="live-samples-stat-number">8+</span>
      <span className="live-samples-stat-label">Industries</span>
    </div>
  </div>
));

StatsSection.displayName = 'StatsSection';

// Glow Effects Component
const GlowEffects = memo(() => (
  <>
    <div className="live-samples-glow-orb live-samples-glow-orb-1"></div>
    <div className="live-samples-glow-orb live-samples-glow-orb-2"></div>
    <div className="live-samples-glow-orb live-samples-glow-orb-3"></div>
  </>
));

GlowEffects.displayName = 'GlowEffects';

// Grid Glow Effects
const GridGlowEffects = memo(() => (
  <>
    <div className="live-samples-grid-glow-left"></div>
    <div className="live-samples-grid-glow-right"></div>
    <div className="live-samples-floating-glow live-samples-floating-glow-1"></div>
    <div className="live-samples-floating-glow live-samples-floating-glow-2"></div>
  </>
));

GridGlowEffects.displayName = 'GridGlowEffects';

const LiveWorkSamplesPage = () => {
  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && window.performance) {
      performance.mark('live-samples-page-start');
      
      const cleanup = () => {
        performance.mark('live-samples-page-end');
        performance.measure('live-samples-page-load', 'live-samples-page-start', 'live-samples-page-end');
      };

      window.addEventListener('load', cleanup);
      return () => window.removeEventListener('load', cleanup);
    }
  }, []);

  // Memoize projects with staggered animation delays
  const projectsWithDelay = useMemo(() => 
    sampleProjects.map((project, index) => ({
      ...project,
      animationDelay: index * 0.1
    })), 
    []
  );

  return (
    <>
      <Helmet>
        <title>Live Work Samples | SoftRanch - Interactive Website Demos</title>
        <meta
          name="description"
          content="Explore our live website samples across various industries. See our web development work in action with fully functional demos including restaurants, healthcare, e-commerce, and more."
        />
        <meta
          name="keywords"
          content="live website samples, web development demos, portfolio examples, interactive websites, restaurant websites, healthcare portals, e-commerce platforms, SoftRanch work samples"
        />
        <meta property="og:title" content="Live Work Samples | SoftRanch" />
        <meta
          property="og:description"
          content="Explore our live website samples across various industries. Fully functional demos showcasing our web development expertise."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softranch.com/live-work-samples" />
        <link rel="canonical" href="https://softranch.com/live-work-samples" />
      </Helmet>

      <div className="live-samples-wrapper">
        {/* Hero Section */}
        <section className="live-samples-hero">
          <div className="live-samples-hero-background"></div>
          <GlowEffects />
          <div className="live-samples-hero-content">
            <div className="live-samples-badge">
              <Globe size={20} />
              <span>Live Demos</span>
            </div>
            <h1 className="live-samples-hero-title">
              Our Live Work Samples
            </h1>
            <p className="live-samples-hero-description">
              Explore fully functional website demos across different industries. 
              Click on any sample to interact with live features and see our development 
              expertise in action.
            </p>
            <StatsSection />
          </div>
        </section>

        {/* Samples Grid */}
        <section className="live-samples-grid-section">
          <GridGlowEffects />
          <div className="live-samples-container">
            <div className="live-samples-section-header">
              <h2 className="live-samples-section-title">
                Interactive Website Demos
              </h2>
              <p className="live-samples-section-subtitle">
                Click on any sample to explore a fully functional website demo
              </p>
            </div>

            <div className="live-samples-grid">
              {projectsWithDelay.map((project, index) => (
                <SampleCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>

            <div className="live-samples-grid-footer">
              <p className="live-samples-footer-text">
                More samples coming soon! Each demo represents a different industry 
                and showcases unique features and functionalities.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default memo(LiveWorkSamplesPage);