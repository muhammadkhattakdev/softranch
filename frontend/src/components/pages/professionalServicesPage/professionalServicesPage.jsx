import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Scale, 
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
  BarChart3,
  Clock,
  CreditCard,
  Calendar,
  MessageSquare,
  Shield,
  Heart,
  UserCheck,
  FileText,
  Briefcase,
  Award,
  BookOpen
} from 'lucide-react';
import './style.css';
import img1 from "../../../static/featured_services_images/lawyer_dashboard.png";
import img2 from "../../../static/featured_services_images/lawyer_website.png";

const ProfessionalServices = () => {
  const features = [
    {
      icon: <Scale size={32} />,
      title: "Authority-Building Website Design",
      description: "Professional websites that establish credibility and showcase your expertise with case studies, testimonials, and authoritative content."
    },
    {
      icon: <Calendar size={32} />,
      title: "Client Consultation Booking",
      description: "Seamless appointment scheduling with automated reminders, intake forms, and calendar integration to streamline client acquisition."
    },
    {
      icon: <MapPin size={32} />,
      title: "Legal & Professional SEO",
      description: "Dominate local searches for legal and professional services with specialized SEO strategies that attract high-value clients."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile-Optimized Experience",
      description: "Responsive design ensuring potential clients can easily access your services and contact you from any device, anywhere."
    },
    {
      icon: <FileText size={32} />,
      title: "Content Marketing & Blogging",
      description: "Expert content creation that demonstrates thought leadership and improves search rankings while educating potential clients."
    },
    {
      icon: <Award size={32} />,
      title: "Client Portal & Case Management",
      description: "Secure client portals for document sharing, case updates, and communication that enhances client experience and retention."
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp size={24} />,
      title: "Attract Premium Clients",
      description: "Professional web presence that attracts high-value clients willing to pay premium rates for quality legal and professional services."
    },
    {
      icon: <Target size={24} />,
      title: "Establish Market Authority",
      description: "Position yourself as the go-to expert in your field with content and design that showcases your expertise and track record."
    },
    {
      icon: <Users size={24} />,
      title: "Generate Quality Referrals",
      description: "Impressive online presence that existing clients are proud to share, leading to more word-of-mouth referrals."
    },
    {
      icon: <Zap size={24} />,
      title: "Streamlined Client Onboarding",
      description: "Automated intake processes and client portals that save time and create a professional first impression."
    }
  ];

  const testimonials = [
    {
      name: "David Patterson, Esq.",
      title: "Personal Injury Law Firm, Los Angeles",
      text: "Our new website increased client inquiries by 400%. The professional design and SEO optimization helped us attract higher-value cases and establish authority in our practice area.",
      rating: 5
    },
    {
      name: "Maria Rodriguez, CPA",
      title: "Tax & Accounting Services, Miami",
      text: "SoftRanch transformed our online presence. We now rank #1 for tax services in Miami, and our client portal has streamlined our entire practice management process.",
      rating: 5
    }
  ];

  const servicePackages = [
    {
      title: "Professional Foundation",
      price: "Starting at $3,497",
      features: [
        "Professional Website Design",
        "Basic Appointment Booking",
        "Mobile-Responsive Layout",
        "SSL Security & Compliance",
        "Google My Business Setup",
        "Basic Local SEO"
      ],
      popular: false
    },
    {
      title: "Authority Builder",
      price: "Starting at $5,997",
      features: [
        "Everything in Foundation Package",
        "Advanced SEO Optimization", 
        "Content Marketing Strategy",
        "Client Testimonial System",
        "Professional Blog Setup",
        "Social Media Integration",
        "Review Management System"
      ],
      popular: true
    },
    {
      title: "Market Leader",
      price: "Starting at $8,997",
      features: [
        "Everything in Authority Package",
        "Client Portal & Case Management",
        "Advanced Analytics Dashboard",
        "Multi-Location SEO",
        "Video Content Integration",
        "Automated Marketing Workflows",
        "Dedicated Account Manager"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Lawyer, Accountant & Consultant Website Development | Land Premium Clients | SoftRanch</title>
        <meta name="description" content="Professional website development for lawyers, accountants, and consultants. Attract premium clients, establish authority, and dominate local search. Specialized SEO for professional services. Trusted by 250+ professionals nationwide." />
        <meta name="keywords" content="lawyer website development, law firm SEO, accountant website design, consultant website, professional services SEO, legal website design, CPA website development, business consultant marketing" />
        <meta property="og:title" content="Lawyer, Accountant & Consultant Website Development | SoftRanch" />
        <meta property="og:description" content="Attract premium clients with professional websites for lawyers, accountants, and consultants. Authority-building design and specialized SEO." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softranch.com/lawyer-accountant-consultant-website-development-services" />
        <link rel="canonical" href="https://softranch.com/lawyer-accountant-consultant-website-development-services" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Professional Services Website Development",
            "description": "Specialized website development for lawyers, accountants, and consultants with authority-building design and professional services SEO.",
            "provider": {
              "@type": "Organization", 
              "name": "SoftRanch",
              "url": "https://softranch.com"
            },
            "serviceType": "Professional Services Web Development",
            "offers": {
              "@type": "Offer",
              "priceRange": "$3,497 - $8,997"
            }
          })}
        </script>
      </Helmet>

      <div className="professional-services-wrapper">
        {/* Hero Section */}
        <section className="professional-hero">
          <div className="professional-hero-bg"></div>
          <div className="professional-glow-orb professional-glow-orb-1"></div>
          <div className="professional-glow-orb professional-glow-orb-2"></div>
          
          <div className="professional-container">
            <div className="professional-hero-content">
              <div className="professional-badge">
                <Scale size={20} />
                <span>Professional Excellence</span>
              </div>
              
              <h1 className="professional-hero-title">
                Land Premium Clients with
                <span className="professional-gradient-text"> Authority Websites</span>
                <br />
                for Legal & Professional Services
              </h1>
              
              <p className="professional-hero-description">
                Position yourself as the go-to expert in your field with websites that showcase your expertise 
                and convert visitors into high-value clients. Features include case studies, client testimonials, 
                appointment scheduling, and SEO that attracts your ideal clients.
              </p>
              
              <div className="professional-hero-stats">
                <div className="professional-stat-item">
                  <span className="professional-stat-number">400%</span>
                  <span className="professional-stat-label">More Inquiries</span>
                </div>
                <div className="professional-stat-item">
                  <span className="professional-stat-number">250+</span>
                  <span className="professional-stat-label">Professionals Served</span>
                </div>
                <div className="professional-stat-item">
                  <span className="professional-stat-number">#1</span>
                  <span className="professional-stat-label">Local Rankings</span>
                </div>
              </div>
              
              <div className="professional-hero-cta">
                <Link to="/contact" className="professional-cta-primary">
                  Get Your Free Professional Website Audit
                  <ArrowRight size={20} />
                </Link>
                <Link to="/portfolio" className="professional-cta-secondary">
                  View Professional Success Stories
                </Link>
              </div>
            </div>
            
            <div className="professional-hero-image">
              <img src={img1} alt="Professional services website showcasing law firm case studies and client testimonials with appointment booking system" />
              <div className="professional-image-overlay">
                <div className="professional-overlay-stat">
                  <Briefcase size={24} />
                  <span>Authority Building</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="professional-features">
          <div className="professional-floating-glow professional-floating-glow-1"></div>
          <div className="professional-floating-glow professional-floating-glow-2"></div>
          
          <div className="professional-container">
            <div className="professional-section-header">
              <h2 className="professional-section-title">
                Everything You Need to Dominate Professional Services
              </h2>
              <p className="professional-section-subtitle">
                From authority-building design to client management systems, we provide the complete 
                digital ecosystem that transforms your practice into a client-attracting powerhouse.
              </p>
            </div>
            
            <div className="professional-features-grid">
              {features.map((feature, index) => (
                <div key={index} className="professional-feature-card" data-index={index}>
                  <div className="professional-feature-icon">
                    {feature.icon}
                  </div>
                  <h3 className="professional-feature-title">{feature.title}</h3>
                  <p className="professional-feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="professional-benefits">
          <div className="professional-container">
            <div className="professional-benefits-content">
              <div className="professional-benefits-text">
                <h2 className="professional-section-title">
                  Why Legal & Professional Service Providers Choose SoftRanch
                </h2>
                <p className="professional-section-subtitle">
                  We understand the unique challenges of professional services marketing. Our solutions 
                  are specifically designed to help lawyers, accountants, and consultants attract premium 
                  clients and establish market authority.
                </p>
                
                <div className="professional-benefits-list">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="professional-benefit-item">
                      <div className="professional-benefit-icon">{benefit.icon}</div>
                      <div className="professional-benefit-content">
                        <h3 className="professional-benefit-title">{benefit.title}</h3>
                        <p className="professional-benefit-description">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="professional-benefits-image">
                <img src={img2} alt="Professional consultant presenting to clients with tablet showing case studies and client portal" />
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="professional-packages">
          <div className="professional-packages-glow"></div>
          
          <div className="professional-container">
            <div className="professional-section-header">
              <h2 className="professional-section-title">
                Choose Your Professional Success Package
              </h2>
              <p className="professional-section-subtitle">
                Transparent pricing designed to deliver maximum ROI for professional service providers
              </p>
            </div>
            
            <div className="professional-packages-grid">
              {servicePackages.map((pkg, index) => (
                <div key={index} className={`professional-package-card ${pkg.popular ? 'professional-package-popular' : ''}`}>
                  {pkg.popular && (
                    <div className="professional-package-badge">Most Popular</div>
                  )}
                  
                  <div className="professional-package-header">
                    <h3 className="professional-package-title">{pkg.title}</h3>
                    <div className="professional-package-price">{pkg.price}</div>
                  </div>
                  
                  <ul className="professional-package-features">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="professional-package-feature">
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className="professional-package-cta">
                    Get Started Today
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="professional-testimonials">
          <div className="professional-container">
            <div className="professional-section-header">
              <h2 className="professional-section-title">
                Success Stories from Legal & Professional Service Providers
              </h2>
            </div>
            
            <div className="professional-testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="professional-testimonial-card">
                  <div className="professional-testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="professional-star-filled" />
                    ))}
                  </div>
                  <p className="professional-testimonial-text">"{testimonial.text}"</p>
                  <div className="professional-testimonial-author">
                    <h4 className="professional-author-name">{testimonial.name}</h4>
                    <p className="professional-author-title">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="professional-cta">
          <div className="professional-cta-glow"></div>
          
          <div className="professional-container">
            <div className="professional-cta-content">
              <h2 className="professional-cta-title">
                Ready to Transform Your Professional Practice?
              </h2>
              <p className="professional-cta-description">
                Join 250+ successful lawyers, accountants, and consultants who've dramatically increased 
                their client base and established market authority with our proven digital solutions.
              </p>
              
              <div className="professional-cta-buttons">
                <Link to="/contact" className="professional-cta-primary">
                  Get Free Professional Practice Consultation
                  <Phone size={20} />
                </Link>
                <a href="mailto:hello@softranch.com" className="professional-cta-secondary">
                  <Mail size={20} />
                  Email Us Directly
                </a>
              </div>
              
              <div className="professional-cta-guarantee">
                <CheckCircle size={20} />
                <span>30-day money-back guarantee • Free consultation • Authority-building design included</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProfessionalServices;