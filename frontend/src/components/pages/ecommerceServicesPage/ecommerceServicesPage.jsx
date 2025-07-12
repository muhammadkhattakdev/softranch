import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  TrendingUp, 
  CreditCard, 
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
  Smartphone,
  BarChart3,
  Package,
  Truck,
  Shield,
  Cpu
} from 'lucide-react';
import './style.css';

const EcommerceServices = () => {
  const features = [
    {
      icon: <Package size={32} />,
      title: "AI-Powered Product Optimization",
      description: "Leverage AI for dynamic pricing, personalized recommendations, and automated inventory management to boost conversion rates and maximize revenue per visitor."
    },
    {
      icon: <Target size={32} />,
      title: "Conversion Rate Optimization",
      description: "Advanced A/B testing, heat mapping, and user behavior analysis to optimize checkout flow and reduce cart abandonment by up to 70%."
    },
    {
      icon: <CreditCard size={32} />,
      title: "Secure Payment Integration",
      description: "Multiple payment gateways including Apple Pay, Google Pay, and buy-now-pay-later options with PCI DSS compliance and fraud protection."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile-First Design",
      description: "Progressive Web App (PWA) technology with lightning-fast loading speeds and app-like experience across all devices and platforms."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Advanced Analytics & Insights",
      description: "Real-time sales tracking, customer lifetime value analysis, and predictive analytics to identify trends and optimize marketing spend."
    },
    {
      icon: <Search size={32} />,
      title: "SEO & Marketing Automation",
      description: "Product schema markup, automated email campaigns, abandoned cart recovery, and social media integration for maximum visibility."
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp size={24} />,
      title: "300% Increase in Online Sales",
      description: "Our e-commerce optimization strategies consistently deliver 3x revenue growth within the first 6 months of implementation."
    },
    {
      icon: <Truck size={24} />,
      title: "Streamlined Operations",
      description: "Automated inventory management, order processing, and shipping integration reduce operational costs by up to 40%."
    },
    {
      icon: <Users size={24} />,
      title: "Enhanced Customer Experience",
      description: "Personalized shopping experiences, instant customer support, and seamless checkout processes increase customer retention by 60%."
    },
    {
      icon: <Shield size={24} />,
      title: "Enterprise-Level Security",
      description: "Bank-grade security, SSL certificates, regular security audits, and compliance with international data protection regulations."
    }
  ];

  const testimonials = [
    {
      name: "Michael Rodriguez",
      title: "CEO, StyleHub Fashion",
      text: "SoftRanch transformed our struggling online store into a profit machine. Sales increased 400% in just 4 months, and our customer satisfaction scores are at an all-time high.",
      rating: 5
    },
    {
      name: "Sarah Kim",
      title: "Founder, EcoLife Products",
      text: "The AI-powered recommendations and conversion optimization features have been game-changers. Our average order value increased by 150% since the redesign.",
      rating: 5
    }
  ];

  const servicePackages = [
    {
      title: "Starter E-commerce",
      price: "Starting at $3,497",
      features: [
        "Professional E-commerce Website",
        "Up to 100 Products",
        "Mobile-Responsive Design",
        "Basic Payment Gateway Integration",
        "Inventory Management System",
        "Basic SEO Optimization"
      ],
      popular: false
    },
    {
      title: "Growth Package",
      price: "Starting at $5,997",
      features: [
        "Everything in Starter Package",
        "Unlimited Products", 
        "Advanced Analytics Dashboard",
        "Email Marketing Automation",
        "Social Media Integration",
        "Conversion Rate Optimization",
        "Multi-Channel Sales Integration"
      ],
      popular: true
    },
    {
      title: "Enterprise Solution",
      price: "Starting at $9,997",
      features: [
        "Everything in Growth Package",
        "AI-Powered Personalization",
        "Advanced Security Features",
        "Custom API Integrations",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "Advanced Marketing Automation"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>E-commerce Website Development & Online Store Solutions | Boost Sales 300% | SoftRanch</title>
        <meta name="description" content="Transform your online store with professional e-commerce website development. AI-powered features, conversion optimization, and mobile-first design that increase sales by 300%. Trusted by 500+ online retailers." />
        <meta name="keywords" content="ecommerce website development, online store design, ecommerce SEO, shopping cart development, mobile ecommerce, conversion optimization, payment gateway integration, inventory management system" />
        <meta property="og:title" content="E-commerce Website Development & Online Store Solutions | SoftRanch" />
        <meta property="og:description" content="Increase online sales by 300% with professional e-commerce websites. AI-powered features and conversion optimization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softranch.com/ecommerce-services" />
        <link rel="canonical" href="https://softranch.com/ecommerce-services" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "E-commerce Website Development",
            "description": "Professional e-commerce website development with AI-powered features, conversion optimization, and mobile-first design for online retailers.",
            "provider": {
              "@type": "Organization", 
              "name": "SoftRanch",
              "url": "https://softranch.com"
            },
            "serviceType": "E-commerce Web Development",
            "offers": {
              "@type": "Offer",
              "priceRange": "$3,497 - $9,997"
            }
          })}
        </script>
      </Helmet>

      <div className="ecommerce-services-wrapper">
        {/* Hero Section */}
        <section className="ecommerce-hero">
          <div className="ecommerce-hero-bg"></div>
          <div className="ecommerce-glow-orb ecommerce-glow-orb-1"></div>
          <div className="ecommerce-glow-orb ecommerce-glow-orb-2"></div>
          
          <div className="ecommerce-container">
            <div className="ecommerce-hero-content">
              <div className="ecommerce-badge">
                <ShoppingCart size={20} />
                <span>E-commerce Excellence</span>
              </div>
              
              <h1 className="ecommerce-hero-title">
                Double Your Online Sales
                <span className="ecommerce-gradient-text"> in Just 6 Months</span>
                <br />
                with AI-Powered E-commerce
              </h1>
              
              <p className="ecommerce-hero-description">
                Transform your struggling online store into a revenue-generating machine. Our e-commerce websites 
                feature lightning-fast loading speeds, AI-powered personalization, conversion optimization, 
                and mobile-first design that turns browsers into loyal customers.
              </p>
              
              <div className="ecommerce-hero-stats">
                <div className="ecommerce-stat-item">
                  <span className="ecommerce-stat-number">300%</span>
                  <span className="ecommerce-stat-label">Sales Increase</span>
                </div>
                <div className="ecommerce-stat-item">
                  <span className="ecommerce-stat-number">500+</span>
                  <span className="ecommerce-stat-label">Stores Launched</span>
                </div>
                <div className="ecommerce-stat-item">
                  <span className="ecommerce-stat-number">99.9%</span>
                  <span className="ecommerce-stat-label">Uptime</span>
                </div>
              </div>
              
              <div className="ecommerce-hero-cta">
                <Link to="/contact" className="ecommerce-cta-primary">
                  Get Your Free E-commerce Audit
                  <ArrowRight size={20} />
                </Link>
                <Link to="/portfolio" className="ecommerce-cta-secondary">
                  View Success Stories
                </Link>
              </div>
            </div>
            
            <div className="ecommerce-hero-image">
              <img src="/api/placeholder/600/400" alt="Modern e-commerce dashboard showing AI-powered analytics and sales growth metrics" />
              <div className="ecommerce-image-overlay">
                <div className="ecommerce-overlay-stat">
                  <TrendingUp size={24} />
                  <span>Live Sales Tracking</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="ecommerce-features">
          <div className="ecommerce-floating-glow ecommerce-floating-glow-1"></div>
          <div className="ecommerce-floating-glow ecommerce-floating-glow-2"></div>
          
          <div className="ecommerce-container">
            <div className="ecommerce-section-header">
              <h2 className="ecommerce-section-title">
                Everything You Need to Dominate Online Retail
              </h2>
              <p className="ecommerce-section-subtitle">
                From AI-powered personalization to advanced analytics, we provide the complete 
                e-commerce ecosystem that transforms your online store into a sales machine.
              </p>
            </div>
            
            <div className="ecommerce-features-grid">
              {features.map((feature, index) => (
                <div key={index} className="ecommerce-feature-card" data-index={index}>
                  <div className="ecommerce-feature-icon">
                    {feature.icon}
                  </div>
                  <h3 className="ecommerce-feature-title">{feature.title}</h3>
                  <p className="ecommerce-feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="ecommerce-benefits">
          <div className="ecommerce-container">
            <div className="ecommerce-benefits-content">
              <div className="ecommerce-benefits-text">
                <h2 className="ecommerce-section-title">
                  Why Online Retailers Choose SoftRanch
                </h2>
                <p className="ecommerce-section-subtitle">
                  We understand the unique challenges of e-commerce. Our solutions are specifically 
                  designed to help online retailers increase sales, reduce costs, and build lasting 
                  customer relationships.
                </p>
                
                <div className="ecommerce-benefits-list">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="ecommerce-benefit-item">
                      <div className="ecommerce-benefit-icon">{benefit.icon}</div>
                      <div className="ecommerce-benefit-content">
                        <h3 className="ecommerce-benefit-title">{benefit.title}</h3>
                        <p className="ecommerce-benefit-description">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="ecommerce-benefits-image">
                <img src="/api/placeholder/500/400" alt="E-commerce analytics dashboard showing conversion rates and sales metrics on mobile device" />
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="ecommerce-packages">
          <div className="ecommerce-packages-glow"></div>
          
          <div className="ecommerce-container">
            <div className="ecommerce-section-header">
              <h2 className="ecommerce-section-title">
                Choose Your E-commerce Success Package
              </h2>
              <p className="ecommerce-section-subtitle">
                Transparent pricing designed to deliver maximum ROI for online retailers
              </p>
            </div>
            
            <div className="ecommerce-packages-grid">
              {servicePackages.map((pkg, index) => (
                <div key={index} className={`ecommerce-package-card ${pkg.popular ? 'ecommerce-package-popular' : ''}`}>
                  {pkg.popular && (
                    <div className="ecommerce-package-badge">Most Popular</div>
                  )}
                  
                  <div className="ecommerce-package-header">
                    <h3 className="ecommerce-package-title">{pkg.title}</h3>
                    <div className="ecommerce-package-price">{pkg.price}</div>
                  </div>
                  
                  <ul className="ecommerce-package-features">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="ecommerce-package-feature">
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className="ecommerce-package-cta">
                    Get Started Today
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="ecommerce-testimonials">
          <div className="ecommerce-container">
            <div className="ecommerce-section-header">
              <h2 className="ecommerce-section-title">
                Success Stories from E-commerce Entrepreneurs
              </h2>
            </div>
            
            <div className="ecommerce-testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="ecommerce-testimonial-card">
                  <div className="ecommerce-testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="ecommerce-star-filled" />
                    ))}
                  </div>
                  <p className="ecommerce-testimonial-text">"{testimonial.text}"</p>
                  <div className="ecommerce-testimonial-author">
                    <h4 className="ecommerce-author-name">{testimonial.name}</h4>
                    <p className="ecommerce-author-title">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="ecommerce-cta">
          <div className="ecommerce-cta-glow"></div>
          
          <div className="ecommerce-container">
            <div className="ecommerce-cta-content">
              <h2 className="ecommerce-cta-title">
                Ready to Transform Your Online Store?
              </h2>
              <p className="ecommerce-cta-description">
                Join 500+ successful online retailers who've dramatically increased their sales 
                and built thriving e-commerce businesses with our proven solutions.
              </p>
              
              <div className="ecommerce-cta-buttons">
                <Link to="/contact" className="ecommerce-cta-primary">
                  Get Free E-commerce Consultation
                  <Phone size={20} />
                </Link>
                <a href="mailto:hello@softranch.com" className="ecommerce-cta-secondary">
                  <Mail size={20} />
                  Email Us Directly
                </a>
              </div>
              
              <div className="ecommerce-cta-guarantee">
                <CheckCircle size={20} />
                <span>30-day money-back guarantee • Free consultation • No setup fees</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EcommerceServices;