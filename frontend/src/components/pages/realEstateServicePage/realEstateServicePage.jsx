import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Home, 
  TrendingUp, 
  MapPin, 
  Users, 
  Star, 
  Phone, 
  Mail, 
  ArrowRight,
  CheckCircle,
  Target,
  Zap,
  Globe,
  Search,
  Camera,
  Smartphone,
  BarChart3
} from 'lucide-react';
import './style.css';

import img1 from "../../../static/featured_services_images/real_estate1.png";
import img2 from "../../../static/featured_services_images/real_estate_agent.jpg";

const RealEstateServices = () => {
  const features = [
    {
      icon: <Search size={32} />,
      title: "IDX Integration & MLS Data",
      description: "Seamlessly integrate MLS data with advanced IDX functionality, allowing visitors to search properties directly on your website with real-time updates."
    },
    {
      icon: <Target size={32} />,
      title: "Lead Capture & Conversion",
      description: "Advanced lead capture forms, automated email sequences, and CRM integration to convert website visitors into qualified buyer and seller leads."
    },
    {
      icon: <MapPin size={32} />,
      title: "Local SEO Domination",
      description: "Outrank Zillow in local search results with location-based SEO strategies that put your listings at the top of 'homes for sale near me' searches."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile-First Design",
      description: "Responsive websites optimized for mobile users, ensuring perfect functionality across all devices with lightning-fast loading speeds."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Analytics & Lead Tracking",
      description: "Comprehensive analytics dashboard to track lead sources, conversion rates, and ROI from your digital marketing efforts."
    },
    {
      icon: <Camera size={32} />,
      title: "Virtual Tours & Media",
      description: "High-quality photo galleries, virtual tours, and video walkthroughs that showcase properties and increase engagement time."
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp size={24} />,
      title: "10x More Qualified Leads",
      description: "Generate significantly more high-quality leads than traditional marketing methods with targeted digital strategies."
    },
    {
      icon: <Globe size={24} />,
      title: "Beat Zillow in Local Search",
      description: "Dominate local search results and capture leads before they reach third-party platforms like Zillow or Realtor.com."
    },
    {
      icon: <Users size={24} />,
      title: "Build Your Brand Authority",
      description: "Establish yourself as the go-to real estate expert in your market with professional web presence and content marketing."
    },
    {
      icon: <Zap size={24} />,
      title: "Automated Lead Nurturing",
      description: "Convert more prospects with automated email sequences and personalized follow-up campaigns that work 24/7."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Top Real Estate Agent, Denver",
      text: "Since launching our new website with SoftRanch, we've seen a 300% increase in online leads. The IDX integration is seamless and our clients love the user experience.",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "Broker/Owner, Phoenix Realty",
      text: "We now rank #1 for 'Phoenix real estate agent' and generate 50+ qualified leads per month. Best investment we've made for our business growth.",
      rating: 5
    }
  ];

  const servicePackages = [
    {
      title: "Starter Package",
      price: "Starting at $499",
      features: [
        "Professional Real Estate Website",
        "Basic IDX Integration",
        "Mobile-Responsive Design",
        "Contact Forms & Lead Capture",
        "Google My Business Setup",
        "Basic Local SEO"
      ],
      popular: false
    },
    {
      title: "Professional Package",
      price: "Starting at $1,999",
      features: [
        "Everything in Starter Package",
        "Advanced IDX with Search Filters", 
        "CRM Integration",
        "Automated Email Marketing",
        "Social Media Integration",
        "Advanced Local SEO",
        "Google Ads Management (3 months)"
      ],
      popular: true
    },
    {
      title: "Premium Package",
      price: "Starting at $3,997",
      features: [
        "Everything in Professional Package",
        "Custom Property Portal",
        "Virtual Tour Integration",
        "Market Reports & Analytics",
        "Content Marketing Strategy",
        "Ongoing SEO Management",
        "24/7 Support & Maintenance"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Real Estate Website Development & Lead Generation | Generate 10x More Leads | SoftRanch</title>
        <meta name="description" content="Transform your real estate business with professional website development, IDX integration, and local SEO. Generate 10x more qualified leads and beat Zillow in search results. Trusted by 200+ real estate agents nationwide." />
        <meta name="keywords" content="real estate website development, real estate agent website, IDX integration, real estate lead generation, real estate SEO, MLS integration, realtor website design, real estate marketing, property search website" />
        <meta property="og:title" content="Real Estate Website Development & Lead Generation | SoftRanch" />
        <meta property="og:description" content="Generate 10x more qualified leads with professional real estate websites. IDX integration, local SEO, and conversion-optimized design." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softranch.com/real-estate-services" />
        <link rel="canonical" href="https://softranch.com/real-estate-services" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Real Estate Website Development",
            "description": "Professional real estate website development with IDX integration, lead generation, and local SEO optimization for real estate agents and brokers.",
            "provider": {
              "@type": "Organization", 
              "name": "SoftRanch",
              "url": "https://softranch.com"
            },
            "serviceType": "Real Estate Web Development",
            "offers": {
              "@type": "Offer",
              "priceRange": "$500 - $7,997"
            }
          })}
        </script>
      </Helmet>

      <div className="real-estate-services-wrapper">
        {/* Hero Section */}
        <section className="real-estate-hero">
          <div className="real-estate-hero-bg"></div>
          <div className="real-estate-glow-orb real-estate-glow-orb-1"></div>
          <div className="real-estate-glow-orb real-estate-glow-orb-2"></div>
          
          <div className="real-estate-container">
            <div className="real-estate-hero-content">
              <div className="real-estate-badge">
                <Home size={20} />
                <span>Real Estate Excellence</span>
              </div>
              
              <h1 className="real-estate-hero-title">
                Generate 10x More
                <span className="real-estate-gradient-text"> Qualified Leads</span>
                <br />
                Than Your Competition
              </h1>
              
              <p className="real-estate-hero-description">
                Beat Zillow in local search results and convert website visitors into qualified buyers and sellers. 
                Our real estate websites feature IDX integration, automated lead capture, local SEO optimization, 
                and mobile-first design that turns clicks into closings.
              </p>
              
              <div className="real-estate-hero-stats">
                <div className="real-estate-stat-item">
                  <span className="real-estate-stat-number">300%</span>
                  <span className="real-estate-stat-label">Lead Increase</span>
                </div>
                <div className="real-estate-stat-item">
                  <span className="real-estate-stat-number">200+</span>
                  <span className="real-estate-stat-label">Agents Served</span>
                </div>
                <div className="real-estate-stat-item">
                  <span className="real-estate-stat-number">#1</span>
                  <span className="real-estate-stat-label">Local Rankings</span>
                </div>
              </div>
              
              <div className="real-estate-hero-cta">
                <Link to="/contact" className="real-estate-cta-primary">
                  Get Your Free Strategy Session
                  <ArrowRight size={20} />
                </Link>
                <Link to="/portfolio" className="real-estate-cta-secondary">
                  View Live Work Samples
                </Link>
              </div>
            </div>
            
            <div className="real-estate-hero-image">
              <img src={img1} alt="Real Estate Website Dashboard showing IDX integration and lead management system" />
              <div className="real-estate-image-overlay">
                <div className="real-estate-overlay-stat">
                  <TrendingUp size={24} />
                  <span>Live Lead Generation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="real-estate-features">
          <div className="real-estate-floating-glow real-estate-floating-glow-1"></div>
          <div className="real-estate-floating-glow real-estate-floating-glow-2"></div>
          
          <div className="real-estate-container">
            <div className="real-estate-section-header">
              <h2 className="real-estate-section-title">
                Everything You Need to Dominate Your Local Market
              </h2>
              <p className="real-estate-section-subtitle">
                From IDX integration to lead nurturing, we provide the complete digital ecosystem 
                that transforms your online presence into a lead-generating machine.
              </p>
            </div>
            
            <div className="real-estate-features-grid">
              {features.map((feature, index) => (
                <div key={index} className="real-estate-feature-card" data-index={index}>
                  <div className="real-estate-feature-icon">
                    {feature.icon}
                  </div>
                  <h3 className="real-estate-feature-title">{feature.title}</h3>
                  <p className="real-estate-feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="real-estate-benefits">
          <div className="real-estate-container">
            <div className="real-estate-benefits-content">
              <div className="real-estate-benefits-text">
                <h2 className="real-estate-section-title">
                  Why Real Estate Agents Choose SoftRanch
                </h2>
                <p className="real-estate-section-subtitle">
                  We understand the unique challenges of real estate marketing. Our solutions are 
                  specifically designed to help agents and brokers capture more leads, build authority, 
                  and close more deals.
                </p>
                
                <div className="real-estate-benefits-list">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="real-estate-benefit-item">
                      <div className="real-estate-benefit-icon">{benefit.icon}</div>
                      <div className="real-estate-benefit-content">
                        <h3 className="real-estate-benefit-title">{benefit.title}</h3>
                        <p className="real-estate-benefit-description">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="real-estate-benefits-image">
                <img src={img2} alt="Real estate agent using mobile-optimized website to capture leads on the go" />
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="real-estate-packages">
          <div className="real-estate-packages-glow"></div>
          
          <div className="real-estate-container">
            <div className="real-estate-section-header">
              <h2 className="real-estate-section-title">
                Choose Your Real Estate Success Package
              </h2>
              <p className="real-estate-section-subtitle">
                Transparent pricing designed to deliver maximum ROI for real estate professionals
              </p>
            </div>
            
            <div className="real-estate-packages-grid">
              {servicePackages.map((pkg, index) => (
                <div key={index} className={`real-estate-package-card ${pkg.popular ? 'real-estate-package-popular' : ''}`}>
                  {pkg.popular && (
                    <div className="real-estate-package-badge">Most Popular</div>
                  )}
                  
                  <div className="real-estate-package-header">
                    <h3 className="real-estate-package-title">{pkg.title}</h3>
                    <div className="real-estate-package-price">{pkg.price}</div>
                  </div>
                  
                  <ul className="real-estate-package-features">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="real-estate-package-feature">
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className="real-estate-package-cta">
                    Get Started Today
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="real-estate-testimonials">
          <div className="real-estate-container">
            <div className="real-estate-section-header">
              <h2 className="real-estate-section-title">
                Success Stories from Real Estate Professionals
              </h2>
            </div>
            
            <div className="real-estate-testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="real-estate-testimonial-card">
                  <div className="real-estate-testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="real-estate-star-filled" />
                    ))}
                  </div>
                  <p className="real-estate-testimonial-text">"{testimonial.text}"</p>
                  <div className="real-estate-testimonial-author">
                    {/* <h4 className="real-estate-author-name">{testimonial.name}</h4> */}
                    <p className="real-estate-author-title">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="real-estate-cta">
          <div className="real-estate-cta-glow"></div>
          
          <div className="real-estate-container">
            <div className="real-estate-cta-content">
              <h2 className="real-estate-cta-title">
                Ready to Transform Your Real Estate Business?
              </h2>
              <p className="real-estate-cta-description">
                Join 200+ successful real estate agents who've dramatically increased their lead generation 
                and closed more deals with our proven website and marketing solutions.
              </p>
              
              <div className="real-estate-cta-buttons">
                <Link to="/contact" className="real-estate-cta-primary">
                  Schedule Free Consultation
                  <Phone size={20} />
                </Link>
                <a href="mailto:hello@softranch.com" className="real-estate-cta-secondary">
                  <Mail size={20} />
                  Email Us Directly
                </a>
              </div>
              
              <div className="real-estate-cta-guarantee">
                <CheckCircle size={20} />
                <span>30-day money-back guarantee • Free strategy session • No long-term contracts</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RealEstateServices;