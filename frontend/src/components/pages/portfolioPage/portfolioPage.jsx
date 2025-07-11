import React, { memo, useState, useEffect, useCallback, useMemo } from 'react';
import "./style.css";

// Lazy load images - import them dynamically only when needed
const imageModules = {
  d1: () => import("../../../static/portfolio/d1.png"),
  d2: () => import("../../../static/portfolio/d2.png"),
  d3: () => import("../../../static/portfolio/d3.png"),
  d4: () => import("../../../static/portfolio/d4.png"),
  d5: () => import("../../../static/portfolio/d5.png"),
  d6: () => import("../../../static/portfolio/d6.png"),
  d7: () => import("../../../static/portfolio/d7.png"),
};

// Preload critical images (first 2-3 visible ones)
const preloadCriticalImages = () => {
  if (typeof window !== 'undefined') {
    // Preload first few images
    const criticalImages = ['d1', 'd2', 'd3'];
    criticalImages.forEach(async (key) => {
      try {
        const module = await imageModules[key]();
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = module.default;
        link.as = 'image';
        document.head.appendChild(link);
      } catch (error) {
        console.warn(`Failed to preload ${key}:`, error);
      }
    });
  }
};

// Optimized Image Component with Intersection Observer
const OptimizedImage = memo(({ src, alt, className, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(index < 2); // Load first 2 immediately
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (!isInView) return;

    const loadImage = async () => {
      try {
        const module = await imageModules[src]();
        setImageSrc(module.default);
      } catch (error) {
        console.warn(`Failed to load image ${src}:`, error);
      }
    };

    loadImage();
  }, [isInView, src]);

  useEffect(() => {
    if (index < 2) return; // Skip observer for critical images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    const element = document.querySelector(`[data-image-index="${index}"]`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [index]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    console.warn(`Failed to load image: ${alt}`);
  }, [alt]);

  return (
    <div className="portfolio-page-image-wrapper" data-image-index={index}>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
          loading={index < 2 ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />
      )}
      {!isLoaded && (
        <div className="image-placeholder" style={{
          background: 'linear-gradient(135deg, rgba(138, 63, 252, 0.1), rgba(138, 63, 252, 0.05))',
          height: '300px',
          borderRadius: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-tertiary)',
          fontSize: '0.9rem'
        }}>
          Loading...
        </div>
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

// Memoized Stats Component
const StatsSection = memo(() => (
  <div className="portfolio-page-stats">
    <div className="page-stats-glow-bg"></div>
    <div className="page-stat-item">
      <span className="page-stat-number">150+</span>
      <span className="page-stat-label">Projects Completed</span>
    </div>
    <div className="page-stat-item">
      <span className="page-stat-number">100%</span>
      <span className="page-stat-label">Client Satisfaction</span>
    </div>
    <div className="page-stat-item">
      <span className="page-stat-number">80+</span>
      <span className="page-stat-label">Happy Clients</span>
    </div>
  </div>
));

StatsSection.displayName = 'StatsSection';

// Memoized Glow Effects Component
const GlowEffects = memo(() => (
  <>
    <div className="page-glow-orb page-glow-orb-1"></div>
    <div className="page-glow-orb page-glow-orb-2"></div>
    <div className="page-glow-orb page-glow-orb-3"></div>
  </>
));

GlowEffects.displayName = 'GlowEffects';

// Memoized Grid Glow Effects
const GridGlowEffects = memo(() => (
  <>
    <div className="page-grid-glow-left"></div>
    <div className="page-grid-glow-right"></div>
    <div className="page-floating-glow page-floating-glow-1"></div>
    <div className="page-floating-glow page-floating-glow-2"></div>
  </>
));

GridGlowEffects.displayName = 'GridGlowEffects';

const PortfolioPage = () => {
  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && window.performance) {
      performance.mark('portfolio-page-start');
      
      const cleanup = () => {
        performance.mark('portfolio-page-end');
        performance.measure('portfolio-page-load', 'portfolio-page-start', 'portfolio-page-end');
      };

      window.addEventListener('load', cleanup);
      return () => window.removeEventListener('load', cleanup);
    }
  }, []);

  // Preload critical resources
  useEffect(() => {
    preloadCriticalImages();
    
    // Prefetch next page resources if needed
    const prefetchLink = document.createElement('link');
    prefetchLink.rel = 'prefetch';
    prefetchLink.href = '/contact';
    document.head.appendChild(prefetchLink);

    return () => {
      if (document.head.contains(prefetchLink)) {
        document.head.removeChild(prefetchLink);
      }
    };
  }, []);

  // Memoize projects data
  const projects = useMemo(() => [
    { id: 1, image: "d1", alt: "E-commerce Platform UI Design" },
    { id: 2, image: "d2", alt: "SaaS Dashboard UI Design" },
    { id: 3, image: "d3", alt: "Mobile Banking App UI Design" },
    { id: 4, image: "d4", alt: "Real Estate Website UI Design" },
    { id: 5, image: "d5", alt: "Food Delivery App UI Design" },
    { id: 6, image: "d6", alt: "Healthcare Portal UI Design" },
    { id: 7, image: "d7", alt: "Education Platform UI Design" },
  ], []);

  // Memoize column splits
  const { leftColumn, rightColumn } = useMemo(() => {
    const midPoint = Math.ceil(projects.length / 2);
    return {
      leftColumn: projects.slice(0, midPoint),
      rightColumn: projects.slice(midPoint),
    };
  }, [projects]);

  return (
    <div className="portfolio-page-wrapper">
      {/* Hero Section */}
      <section className="portfolio-page-hero">
        <div className="portfolio-page-hero-background"></div>
        <GlowEffects />
        <div className="portfolio-page-hero-content">
          <div className="portfolio-page-badge">
            <span>Our Work</span>
          </div>
          <h1 className="portfolio-page-hero-title">
            Portfolio Showcase
          </h1>
          <p className="portfolio-page-hero-description">
            Explore our latest web development projects. Each design represents our commitment 
            to creating exceptional digital experiences that drive results for our clients.
          </p>
          <StatsSection />
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-page-grid-section">
        <GridGlowEffects />
        <div className="portfolio-page-container">
          <div className="portfolio-page-columns">
            {/* Left Column */}
            <div className="portfolio-page-column">
              {leftColumn.map((project, index) => (
                <OptimizedImage
                  key={project.id}
                  src={project.image}
                  alt={project.alt}
                  className="portfolio-page-image"
                  index={index}
                />
              ))}
            </div>

            {/* Right Column */}
            <div className="portfolio-page-column">
              {rightColumn.map((project, index) => (
                <OptimizedImage
                  key={project.id}
                  src={project.image}
                  alt={project.alt}
                  className="portfolio-page-image"
                  index={index + leftColumn.length}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(PortfolioPage);