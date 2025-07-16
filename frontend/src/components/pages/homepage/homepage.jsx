import React, { lazy, Suspense, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './style.css';

// Critical above-the-fold components - load immediately
import Hero from './components/hero1/hero1';
import TrustedBy from './components/trustedBy/trustedBy';
import Services from './components/services/services';
import BlogSection from './components/blogSection/blog';

// Non-critical components - lazy load for better performance
const Features = lazy(() => import('./components/features/features'));
const Featured = lazy(() => import('./components/featured/featured'));
const Testimonials = lazy(() => import('./components/testimonials/tetimonials'));
const Team = lazy(() => import('./components/team/team'));
const Portfolio = lazy(() => import('./components/portfolio/portfolio'));

// Loading component for lazy-loaded sections
const SectionLoader = () => (
  <div className="homepage-section-loader">
    <div className="homepage-loader-shimmer"></div>
  </div>
);

const Homepage = () => {
  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && window.performance) {
      performance.mark('homepage-start');
      
      const handleLoad = () => {
        performance.mark('homepage-end');
        performance.measure('homepage-load', 'homepage-start', 'homepage-end');
        
        // Report Core Web Vitals
        if ('web-vital' in window) {
          window.webVitals?.getCLS?.(console.log);
          window.webVitals?.getFID?.(console.log);
          window.webVitals?.getLCP?.(console.log);
        }
      };

      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // Structured Data for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SoftRanch",
    "alternateName": "SoftRanch Web Development Agency",
    "url": "https://softranch.agency",
    "logo": "https://softranch.agency/logo.png",
    "description": "Professional web development agency specializing in custom websites, e-commerce platforms, mobile applications, and digital solutions for businesses worldwide.",
    "foundingDate": "2020",
    "email": "hello@softranch.agency",
    "telephone": "+92-335-5398908",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "District Nowshera",
      "addressLocality": "Nowshera",
      "addressRegion": "Peshawar",
      "addressCountry": "Pakistan"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.0151",
      "longitude": "71.9960"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Pakistan"
      },
      {
        "@type": "Country", 
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "Canada"
      },
      {
        "@type": "Country",
        "name": "Australia"
      }
    ],
    "sameAs": [
      "https://linkedin.com/company/softranch",
      "https://instagram.com/softranch",
      "https://facebook.com/softranch",
      "https://twitter.com/softranch"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+92-335-5398908",
        "contactType": "customer service",
        "availableLanguage": ["English", "Urdu"],
        "areaServed": "Worldwide"
      },
      {
        "@type": "ContactPoint",
        "email": "hello@softranch.agency",
        "contactType": "customer service",
        "availableLanguage": ["English", "Urdu"]
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Development",
            "description": "Professional custom website development using modern technologies like React, Node.js, and more."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Development",
            "description": "Complete e-commerce solutions with payment integration, inventory management, and admin panels."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Restaurant Website Development",
            "description": "Specialized restaurant websites with online reservations, menu management, and customer reviews."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Real Estate Website Development",
            "description": "Property listing platforms with virtual tours, mortgage calculators, and lead generation."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Healthcare Website Development",
            "description": "HIPAA-compliant healthcare websites with appointment booking and patient management."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Native and cross-platform mobile applications for iOS and Android."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Optimization",
            "description": "Search engine optimization to improve website rankings and organic traffic."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design",
            "description": "User interface and user experience design for websites and applications."
          }
        }
      ]
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewBody": "SoftRanch transformed our outdated website into a modern, high-performing platform. Our conversion rates increased by 300%!"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Michael Chen"
        },
        "reviewBody": "The team's expertise in full-stack development helped us build a scalable e-commerce platform that handles thousands of orders daily."
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SoftRanch - Professional Web Development Agency",
    "url": "https://softranch.agency",
    "description": "Leading web development agency creating custom websites, e-commerce platforms, and mobile applications for businesses worldwide.",
    "publisher": {
      "@type": "Organization",
      "name": "SoftRanch"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://softranch.agency/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://softranch.agency"
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>SoftRanch - Professional Web Development Agency | Custom Websites & Apps</title>
        <meta 
          name="title" 
          content="SoftRanch - Professional Web Development Agency | Custom Websites & Apps" 
        />
        <meta
          name="description"
          content="Leading web development agency creating stunning custom websites, e-commerce platforms, mobile apps & digital solutions. 500+ satisfied clients worldwide. Get your free quote today!"
        />
        <meta
          name="keywords"
          content="web development agency, custom website development, e-commerce development, mobile app development, React development, Node.js development, restaurant website development, real estate website development, healthcare website development, professional web design, SoftRanch, Pakistan web development, UI UX design, SEO optimization"
        />
        <meta name="author" content="SoftRanch" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Language and Region */}
        <meta name="language" content="English" />
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Nowshera, Pakistan" />
        <meta name="geo.position" content="34.0151;71.9960" />
        <meta name="ICBM" content="34.0151, 71.9960" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SoftRanch" />
        <meta property="og:url" content="https://softranch.agency" />
        <meta property="og:title" content="SoftRanch - Professional Web Development Agency | Custom Websites & Apps" />
        <meta
          property="og:description"
          content="Leading web development agency creating stunning custom websites, e-commerce platforms, mobile apps & digital solutions. 500+ satisfied clients worldwide."
        />
        <meta property="og:image" content="https://softranch.agency/og-image.jpg" />
        <meta property="og:image:alt" content="SoftRanch Web Development Agency - Custom Websites and Apps" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@softranch" />
        <meta name="twitter:creator" content="@softranch" />
        <meta name="twitter:url" content="https://softranch.agency" />
        <meta name="twitter:title" content="SoftRanch - Professional Web Development Agency" />
        <meta
          name="twitter:description"
          content="Leading web development agency creating stunning custom websites, e-commerce platforms, and mobile apps. 500+ satisfied clients worldwide."
        />
        <meta name="twitter:image" content="https://softranch.agency/twitter-image.jpg" />
        <meta name="twitter:image:alt" content="SoftRanch Web Development Agency" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#8a3ffc" />
        <meta name="msapplication-TileColor" content="#8a3ffc" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="SoftRanch" />
        
        {/* Performance and Loading Hints */}
        <link rel="canonical" href="https://softranch.agency" />
        <link rel="preload" as="style" href="/static/css/homepage.css" />
        <link rel="preload" as="font" href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" crossOrigin="" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Favicon and Icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Business Information */}
        <meta name="contact" content="hello@softranch.agency" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Rich Snippets Support */}
        <meta name="application-name" content="SoftRanch" />
        <meta name="msapplication-tooltip" content="Professional Web Development Agency" />
        <meta name="msapplication-starturl" content="https://softranch.agency" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        
        {/* Additional Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "SoftRanch Web Development Agency",
            "image": "https://softranch.agency/logo.png",
            "description": "Professional web development services including custom websites, e-commerce platforms, mobile applications, and digital solutions.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "District Nowshera",
              "addressLocality": "Nowshera", 
              "addressRegion": "Peshawar",
              "postalCode": "24100",
              "addressCountry": "PK"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 34.0151,
              "longitude": 71.9960
            },
            "url": "https://softranch.agency",
            "telephone": "+92-335-5398908",
            "email": "hello@softranch.agency",
            "priceRange": "$$",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday", 
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "paymentAccepted": ["Credit Card", "PayPal", "Bank Transfer"],
            "currenciesAccepted": ["USD", "PKR", "EUR", "GBP"],
            "serviceType": "Web Development",
            "areaServed": "Worldwide"
          })}
        </script>
      </Helmet>

      <div className="homepage">
        {/* Critical above-the-fold content */}
        <Hero />
        <TrustedBy />
        <Services />
        
        {/* Non-critical content with lazy loading */}
        <Suspense fallback={<SectionLoader />}>
          <Features />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Featured />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Team />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Portfolio />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <BlogSection />
        </Suspense>

      </div>
    </>
  );
};

export default Homepage;