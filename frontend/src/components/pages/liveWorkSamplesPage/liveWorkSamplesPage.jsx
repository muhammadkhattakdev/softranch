import React, { memo, useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Globe,
  Coffee,
  TreePalm,
  Home,
  Stethoscope,
  GraduationCap,
  Camera,
  Car,
  Smartphone,
  Brain,
} from "lucide-react";
import "./style.css";

// Static image imports
import savoriaImg from "../../../static/portfolio_thumbs/saviora.PNG";
import commerceFlowImg from "../../../static/portfolio_thumbs/commerceFlow.PNG";
import plantoImg from "../../../static/portfolio_thumbs/planto.PNG";
import estateFlowImg from "../../../static/portfolio_thumbs/estateFlow.PNG";
import nebulaImg from "../../../static/portfolio_thumbs/nebula.PNG";
import innovateTechImg from "../../../static/innovateTech.png";
import photographyImg from "../../../static/portfolio_thumbs/photography.PNG";
import restaurantSaasImg from "../../../static/portfolio_thumbs/restaurantOS.PNG";
import softCommerceImg from "../../../static/portfolio_thumbs/softCommerce.PNG";
import softFoodImg from "../../../static/portfolio_thumbs/softFood.PNG";
import medicalDashboardImg from "../../../static/portfolio_thumbs/medicalDashboard.PNG";
import lawyerBookingImg from "../../../static/portfolio_thumbs/lawyer_website.png";
import dealershipImg from "../../../static/portfolio_thumbs/cars.png";
import constructionLandingImg from "../../../static/portfolio_thumbs/construction_website.png";
import constructionDashboardImg from "../../../static/portfolio_thumbs/construction_dashboard.png";
import educationDashboardImg from "../../../static/portfolio_thumbs/education_dashboard.png";
import universityWebsiteImg from "../../../static/portfolio_thumbs/university_landing_page.png";
import content_writerImg from "../../../static/portfolio_thumbs/content_writer.PNG";
import aiDashboardImg from "../../../static/portfolio_thumbs/ai_dashboard.PNG";
import aiLandingPageImg from "../../../static/portfolio_thumbs/ai_landing_page.PNG";

// Sample project data with static image references
const sampleProjects = [
  {
    id: 1,
    title: "Saviora Restaurant",
    category: "Restaurant | Food | Landing Page",
    description:
      "Elegant dining experience with online reservations and menu showcase",
    icon: <Coffee size={24} />,
    slug: "savoria-restaurant-website",
    image: savoriaImg,
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 18,
    title: "A.I Dashboard",
    category: "AI | SAAS",
    description:
      "Landing page for Lawyer booking services with authority design and visuals",
    icon: <Brain size={24} />,
    slug: "ai-dashboard-tools-website",
    image: aiDashboardImg,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: 2,
    title: "Construction Company Website",
    category: "Construction | Portfolio | Landing Page",
    description:
      "Complete website and management and booking tools for construction company with portfolio and about for authority building and social proof",
    icon: <Smartphone size={24} />,
    slug: "constructions-company-website",
    image: constructionLandingImg,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: 3,
    title: "CommerceFlow",
    category: "SaaS | Dashboard | E-commerce",
    description:
      "E-commerce management dashboard with analytics and inventory control",
    icon: <GraduationCap size={24} />,
    slug: "commerce-flow-saas-website",
    image: commerceFlowImg,
    gradient: "from-teal-500 to-green-500",
  },
  {
    id: 4,
    title: "Construction SaaS Dashboard",
    category: "Construction | SaaS | Dashboard",
    description:
      "Management dashboard for construction services with tools for project and booking handling",
    icon: <Smartphone size={24} />,
    slug: "constructions-company-saas-management-tool-website",
    image: constructionDashboardImg,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: 5,
    title: "Automotive Dealership",
    category: "Automotive | Dealership | Inventory",
    description:
      "Car dealership website with inventory management and financing",
    icon: <Car size={24} />,
    slug: "car-dealership-website",
    image: dealershipImg,
    gradient: "from-gray-600 to-gray-800",
  },
  {
    id: 6,
    title: "Ecommerce Dashboard",
    category: "E-commerce | SaaS | Dashboard",
    description:
      "Highly functional and feature-rich SaaS",
    icon: <Car size={24} />,
    slug: "soft-commerce-saas-website",
    image: softCommerceImg,
    gradient: "from-gray-600 to-gray-800",
  },
  {
    id: 7,
    title: "University Website",
    category: "Education | Landing Page | University",
    description:
      "Professional showcase of a University in a landing page with 5+ sections.",
    icon: <Home size={24} />,
    slug: "university-landing-page-website",
    image: universityWebsiteImg,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    id: 8,
    title: "SoftFood Management",
    category: "Restaurant | SaaS | Dashboard",
    description:
      "Complete management system for food businesses with dashboards and analytics.",
    icon: <Home size={24} />,
    slug: "softfood-restaurant-management-saas-website",
    image: softFoodImg,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    id: 9,
    title: "EduFlow",
    category: "Education | SaaS | Management",
    description:
      "SaaS dashboard for educational institute i.e Colleges, Universities to manage almost everything.",
    icon: <Home size={24} />,
    slug: "education-platform-saas-management-tool-website",
    image: educationDashboardImg,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    id: 10,
    title: "EstateFlow",
    category: "Real Estate | Property | Platform",
    description:
      "Property listing platform with virtual tours and mortgage calculator",
    icon: <Home size={24} />,
    slug: "estate-flow-website",
    image: estateFlowImg,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    id: 11,
    title: "Planto",
    category: "E-commerce | Plants | Gallery",
    description:
      "Buy and sell plants marketplace with stunning gallery showcase",
    icon: <TreePalm size={24} />,
    slug: "plants-website",
    image: plantoImg,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    id: 12,
    title: "Nebula Studios",
    category: "AI | Tech | Machine Learning",
    description: "Cutting-edge AI solutions and machine learning platform",
    icon: <Stethoscope size={24} />,
    slug: "nebula-studios-website",
    image: nebulaImg,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 13,
    title: "InnovateTech",
    category: "Corporate | Business | Technology",
    description:
      "Professional corporate website with modern design and functionality",
    icon: <Globe size={24} />,
    slug: "innovate-tech-website",
    image: innovateTechImg,
    gradient: "from-slate-600 to-slate-800",
  },

  {
    id: 19,
    title: "A.I Landing Page",
    category: "AI | Website | Landing Page",
    description:
      "Landing page for Lawyer booking services with authority design and visuals",
    icon: <Brain size={24} />,
    slug: "ai-powered-website-landing-page",
    image: aiLandingPageImg,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: 14,
    title: "Photography Portfolio",
    category: "Photography | Portfolio | Booking",
    description:
      "Stunning visual portfolio with gallery management and client booking",
    icon: <Camera size={24} />,
    slug: "photography-portfolio-website",
    image: photographyImg,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 15,
    title: "Restaurant Management",
    category: "Restaurant | SaaS | POS",
    description: "Complete restaurant management system with POS and analytics",
    icon: <Smartphone size={24} />,
    slug: "restaurant-management-saas-website",
    image: restaurantSaasImg,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: 20,
    title: "Content Writer Minimalist Portfolio",
    category: "Portfolio | Brutalist | Minimalist",
    description:
      "Minimalist Brutalist design portfolio website for content writer",
    icon: <Brain size={24} />,
    slug: "content-writer-minimalist-portfolio-website",
    image: content_writerImg,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: 16,
    title: "Medical Dashboard",
    category: "Healthcare | SaaS | Dashboard",
    description:
      "Complete medical/healthcare system with vital analytics tools",
    icon: <Smartphone size={24} />,
    slug: "medical-saas-website",
    image: medicalDashboardImg,
    gradient: "from-yellow-500 to-orange-500",
  },

  {
    id: 17,
    title: "Lawyer Website",
    category: "Law | Booking | Landing Page",
    description:
      "Landing page for Lawyer booking services with authority design and visuals",
    icon: <Smartphone size={24} />,
    slug: "lawyer-services-booking-website",
    image: lawyerBookingImg,
    gradient: "from-yellow-500 to-orange-500",
  },

];


// Image placeholder component
const ImagePlaceholder = ({ gradient, icon, title }) => (
  <div
    className={`live-samples-placeholder-gradient bg-gradient-to-br ${gradient}`}
  >
    <div className="live-samples-placeholder-content">
      <div className="live-samples-placeholder-icon">{icon}</div>
    </div>
  </div>
);

// Optimized Sample Card Component using portfolio design
const SampleCard = memo(({ project, index }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadProjectImage = async () => {
      if (!project.image) {
        setIsLoading(false);
        setHasError(true);
        return;
      }

      try {
        // Simulate loading delay for staggered effect
        await new Promise((resolve) => setTimeout(resolve, index * 100));

        if (isMounted) {
          setHasError(false);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setHasError(true);
          setIsLoading(false);
        }
      }
    };

    loadProjectImage();

    return () => {
      isMounted = false;
    };
  }, [project.image, index]);

  return (
    <div className="live-samples-portfolio-item" data-index={index}>
      <Link
        to={`/live-work-samples/${project.slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="live-samples-portfolio-link"
      >
        <div className="live-samples-portfolio-image">
          {isLoading ? (
            <div className="live-samples-image-skeleton">
              <div className="live-samples-skeleton-shimmer"></div>
            </div>
          ) : hasError || !project.image ? (
            <ImagePlaceholder
              gradient={project.gradient}
              icon={project.icon}
              title={project.title}
            />
          ) : (
            <img
              src={project.image}
              alt={`${project.title} - Live Website Demo`}
              loading="lazy"
              decoding="async"
              className="live-samples-portfolio-img"
            />
          )}

          <div className="live-samples-portfolio-overlay">
            <div className="live-samples-portfolio-info">
              <h3 className="live-samples-project-title">{project.title}</h3>
              <p className="live-samples-project-category">
                {project.category}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
});

SampleCard.displayName = "SampleCard";

// Stats Component
const StatsSection = memo(() => (
  <div className="live-samples-stats">
    <div className="live-samples-stats-glow"></div>
    <div className="live-samples-stat-item">
      <span className="live-samples-stat-number">15+</span>
      <span className="live-samples-stat-label">Live Demos</span>
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

StatsSection.displayName = "StatsSection";

// Glow Effects Component
const GlowEffects = memo(() => (
  <>
    <div className="live-samples-glow-orb live-samples-glow-orb-1"></div>
    <div className="live-samples-glow-orb live-samples-glow-orb-2"></div>
    <div className="live-samples-glow-orb live-samples-glow-orb-3"></div>
  </>
));

GlowEffects.displayName = "GlowEffects";

// Grid Glow Effects
const GridGlowEffects = memo(() => (
  <>
    <div className="live-samples-grid-glow-left"></div>
    <div className="live-samples-grid-glow-right"></div>
    <div className="live-samples-floating-glow live-samples-floating-glow-1"></div>
    <div className="live-samples-floating-glow live-samples-floating-glow-2"></div>
  </>
));

GridGlowEffects.displayName = "GridGlowEffects";

const LiveWorkSamplesPage = () => {
  // Performance monitoring
  useEffect(() => {
    if (typeof window !== "undefined" && window.performance) {
      performance.mark("live-samples-page-start");

      const cleanup = () => {
        performance.mark("live-samples-page-end");
        performance.measure(
          "live-samples-page-load",
          "live-samples-page-start",
          "live-samples-page-end"
        );
      };

      window.addEventListener("load", cleanup);
      return () => window.removeEventListener("load", cleanup);
    }
  }, []);

  // Memoize projects with staggered animation delays
  const projectsWithDelay = useMemo(
    () =>
      sampleProjects.map((project, index) => ({
        ...project,
        animationDelay: index * 0.1,
      })),
    []
  );

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Live Website Demos - SoftRanch Web Development Samples",
    description:
      "Explore our live website demonstrations across various industries including restaurants, real estate, e-commerce, healthcare, and more. See our web development expertise in action.",
    url: "https://softranch.agency/live-work-samples",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: sampleProjects.map((project, index) => ({
        "@type": "WebSite",
        position: index + 1,
        name: project.title,
        description: project.description,
        url: `https://softranch.agency/live-work-samples/${project.slug}`,
        applicationCategory: project.category,
        creator: {
          "@type": "Organization",
          name: "SoftRanch",
          url: "https://softranch.agency",
        },
      })),
    },
    provider: {
      "@type": "Organization",
      name: "SoftRanch",
      url: "https://softranch.agency",
      description:
        "Professional web development agency specializing in custom websites and applications",
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Live Website Demos & Interactive Samples | SoftRanch Web Development
          Agency
        </title>
        <meta
          name="description"
          content="Explore 10+ live website demonstrations by SoftRanch. Interactive demos across restaurants, real estate, e-commerce, healthcare & more industries. See our web development expertise in action."
        />
        <meta
          name="keywords"
          content="live website demos, interactive website samples, web development portfolio, restaurant website demo, real estate website demo, e-commerce demo, healthcare website demo, SoftRanch portfolio, website development examples, live web demos"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Live Website Demos & Interactive Samples | SoftRanch"
        />
        <meta
          property="og:description"
          content="Explore 10+ live website demonstrations across various industries. See our web development expertise with fully functional interactive demos."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://softranch.agency/live-work-samples"
        />
        <meta property="og:site_name" content="SoftRanch" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Live Website Demos | SoftRanch Web Development"
        />
        <meta
          name="twitter:description"
          content="Interactive website demonstrations across 8+ industries. See our development expertise in action."
        />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://softranch.agency/live-work-samples" />

        {/* Performance & Loading */}
        <link rel="preload" as="style" href="/static/css/live-samples.css" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin=""
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        {/* Additional Schema for Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SoftRanch",
            url: "https://softranch.agency",
            description:
              "Professional web development agency creating custom websites and applications for businesses worldwide",
            foundingDate: "2020",
            numberOfEmployees: "10-50",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nowshera",
              addressRegion: "Peshawar",
              addressCountry: "Pakistan",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+92-335-5398908",
              contactType: "customer service",
              availableLanguage: "English",
            },
            sameAs: [
              "https://linkedin.com/company/softranch",
              "https://instagram.com/softranch",
              "https://facebook.com/softranch",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Web Development Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Restaurant Website Development",
                    description:
                      "Custom restaurant websites with online reservations and menu management",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Real Estate Website Development",
                    description:
                      "Property listing platforms with virtual tours and lead generation",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "E-commerce Website Development",
                    description:
                      "Online stores with payment integration and inventory management",
                  },
                },
              ],
            },
          })}
        </script>
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
              Interactive Website Demos
            </h1>
            <p className="live-samples-hero-description">
              Explore fully functional website demonstrations across different
              industries. Click on any demo to interact with live features and
              experience our development expertise firsthand.
            </p>
            <StatsSection />
          </div>
        </section>

        {/* Samples Grid */}
        <section className="live-samples-grid-section">
          <GridGlowEffects />
          <div className="live-samples-container">

            <div className="live-samples-portfolio-grid">
              {projectsWithDelay.map((project, index) => (
                <SampleCard key={project.id} project={project} index={index} />
              ))}
            </div>

            <div className="live-samples-grid-footer">
              <p className="live-samples-footer-text">
                More interactive demos coming soon! Each demonstration showcases
                unique features and industry-specific functionalities to help
                you visualize your next project.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default memo(LiveWorkSamplesPage);
