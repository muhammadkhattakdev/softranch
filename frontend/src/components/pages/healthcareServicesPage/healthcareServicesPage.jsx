import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
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
  FileText
} from 'lucide-react';
import './style.css';

const HealthcareServices = () => {
  const features = [
    {
      icon: <Calendar size={32} />,
      title: "HIPAA-Compliant Appointment Booking",
      description: "Secure online scheduling with automated reminders, insurance verification, and patient portal integration that reduces no-shows by 40%."
    },
    {
      icon: <UserCheck size={32} />,
      title: "Patient Portal & Telehealth",
      description: "Secure patient portals with medical records access, prescription refills, and integrated telehealth capabilities for remote consultations."
    },
    {
      icon: <MapPin size={32} />,
      title: "Medical SEO & Local Rankings",
      description: "Dominate 'doctors near me' searches with medical-specific SEO, Google My Business optimization, and healthcare directory listings."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile-First Medical Design",
      description: "Responsive design optimized for patients on-the-go with fast loading, accessibility compliance, and intuitive navigation."
    },
    {
      icon: <Shield size={32} />,
      title: "HIPAA Compliance & Security",
      description: "Bank-level security with SSL encryption, HIPAA-compliant forms, secure data transmission, and regular security audits."
    },
    {
      icon: <FileText size={32} />,
      title: "Medical Content & Education",
      description: "Authoritative medical content, patient education resources, and condition-specific information that builds trust and expertise."
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp size={24} />,
      title: "50% More New Patient Inquiries",
      description: "Our medical SEO and website optimization strategies consistently attract more qualified patients seeking your specialized care."
    },
    {
      icon: <Clock size={24} />,
      title: "Reduce Administrative Burden",
      description: "Automated appointment booking, patient intake forms, and portal integration reduce staff workload by up to 60%."
    },
    {
      icon: <Users size={24} />,
      title: "Enhanced Patient Experience",
      description: "Seamless online experience from appointment booking to follow-up care improves patient satisfaction and retention."
    },
    {
      icon: <Heart size={24} />,
      title: "Build Medical Authority",
      description: "Establish yourself as a trusted healthcare expert with authoritative content and professional online presence."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Jennifer Walsh",
      title: "Family Medicine Practice, Denver",
      text: "Our patient inquiries increased 200% after launching our new website. The online booking system has revolutionized our practice management, and patients love the convenience.",
      rating: 5
    },
    {
      name: "Dr. Michael Thompson",
      title: "Orthopedic Surgeon, Phoenix",
      text: "SoftRanch created a website that perfectly represents our practice. We now rank #1 for orthopedic surgery in Phoenix, and our patient portal is used by 85% of our patients.",
      rating: 5
    }
  ];

  const servicePackages = [
    {
      title: "Essential Medical",
      price: "Starting at $3,997",
      features: [
        "HIPAA-Compliant Website",
        "Basic Appointment Booking",
        "Mobile-Responsive Design",
        "SSL Security Certificate",
        "Google My Business Setup",
        "Basic Medical SEO"
      ],
      popular: false
    },
    {
      title: "Professional Practice",
      price: "Starting at $6,497",
      features: [
        "Everything in Essential Package",
        "Advanced Patient Portal", 
        "Insurance Verification System",
        "Medical Content Library",
        "Review Management System",
        "Advanced Medical SEO",
        "HIPAA Training & Compliance"
      ],
      popular: true
    },
    {
      title: "Medical Enterprise",
      price: "Starting at $9,997",
      features: [
        "Everything in Professional Package",
        "Telehealth Integration",
        "Multi-Location Management",
        "Advanced Analytics Dashboard",
        "Medical Staff Directory",
        "Prescription Management",
        "24/7 Priority Support"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Medical Website Development & HIPAA-Compliant Patient Portals | Get Booked Solid | SoftRanch</title>
        <meta name="description" content="Transform your medical practice with HIPAA-compliant website development and patient portals. Increase new patient inquiries by 50%, reduce administrative burden, and dominate local medical search. Trusted by 400+ healthcare providers." />
        <meta name="keywords" content="medical website development, HIPAA compliant websites, patient portal development, medical SEO, healthcare website design, telehealth integration, doctor website, medical practice marketing" />
        <meta property="og:title" content="Medical Website Development & HIPAA-Compliant Patient Portals | SoftRanch" />
        <meta property="og:description" content="Attract 50% more patients with HIPAA-compliant medical websites and patient portals. Professional healthcare web development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softranch.com/medical-website-development-services" />
        <link rel="canonical" href="https://softranch.com/medical-website-development-services" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Medical Website Development",
            "description": "HIPAA-compliant medical website development with patient portals, appointment booking, and medical SEO for healthcare providers.",
            "provider": {
              "@type": "Organization", 
              "name": "SoftRanch",
              "url": "https://softranch.com"
            },
            "serviceType": "Medical Web Development",
            "offers": {
              "@type": "Offer",
              "priceRange": "$3,997 - $9,997"
            }
          })}
        </script>
      </Helmet>

      <div className="healthcare-services-wrapper">
        {/* Hero Section */}
        <section className="healthcare-hero">
          <div className="healthcare-hero-bg"></div>
          <div className="healthcare-glow-orb healthcare-glow-orb-1"></div>
          <div className="healthcare-glow-orb healthcare-glow-orb-2"></div>
          
          <div className="healthcare-container">
            <div className="healthcare-hero-content">
              <div className="healthcare-badge">
                <Stethoscope size={20} />
                <span>Healthcare Excellence</span>
              </div>
              
              <h1 className="healthcare-hero-title">
                Get Booked Solid Fast with
                <span className="healthcare-gradient-text"> HIPAA-Compliant</span>
                <br />
                Medical Websites
              </h1>
              
              <p className="healthcare-hero-description">
                Build trust and attract more patients with HIPAA-compliant websites designed for healthcare 
                professionals. Includes secure online appointment booking, patient portals, telehealth integration, 
                and medical SEO that helps patients find your practice when they need care most.
              </p>
              
              <div className="healthcare-hero-stats">
                <div className="healthcare-stat-item">
                  <span className="healthcare-stat-number">50%</span>
                  <span className="healthcare-stat-label">More Patients</span>
                </div>
                <div className="healthcare-stat-item">
                  <span className="healthcare-stat-number">400+</span>
                  <span className="healthcare-stat-label">Doctors Served</span>
                </div>
                <div className="healthcare-stat-item">
                  <span className="healthcare-stat-number">100%</span>
                  <span className="healthcare-stat-label">HIPAA Compliant</span>
                </div>
              </div>
              
              <div className="healthcare-hero-cta">
                <Link to="/contact" className="healthcare-cta-primary">
                  Get Your Free Medical Website Audit
                  <ArrowRight size={20} />
                </Link>
                <Link to="/portfolio" className="healthcare-cta-secondary">
                  View Medical Success Stories
                </Link>
              </div>
            </div>
            
            <div className="healthcare-hero-image">
              <img src="/api/placeholder/600/400" alt="Modern medical practice dashboard showing HIPAA-compliant patient portal and appointment booking system" />
              <div className="healthcare-image-overlay">
                <div className="healthcare-overlay-stat">
                  <Shield size={24} />
                  <span>HIPAA Secure</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="healthcare-features">
          <div className="healthcare-floating-glow healthcare-floating-glow-1"></div>
          <div className="healthcare-floating-glow healthcare-floating-glow-2"></div>
          
          <div className="healthcare-container">
            <div className="healthcare-section-header">
              <h2 className="healthcare-section-title">
                Everything You Need for Modern Medical Practice
              </h2>
              <p className="healthcare-section-subtitle">
                From HIPAA-compliant patient portals to telehealth integration, we provide the complete 
                healthcare digital ecosystem that enhances patient care and practice efficiency.
              </p>
            </div>
            
            <div className="healthcare-features-grid">
              {features.map((feature, index) => (
                <div key={index} className="healthcare-feature-card" data-index={index}>
                  <div className="healthcare-feature-icon">
                    {feature.icon}
                  </div>
                  <h3 className="healthcare-feature-title">{feature.title}</h3>
                  <p className="healthcare-feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="healthcare-benefits">
          <div className="healthcare-container">
            <div className="healthcare-benefits-content">
              <div className="healthcare-benefits-text">
                <h2 className="healthcare-section-title">
                  Why Healthcare Providers Choose SoftRanch
                </h2>
                <p className="healthcare-section-subtitle">
                  We understand the unique challenges of healthcare marketing and compliance. Our solutions 
                  are specifically designed to help medical practices attract more patients while maintaining 
                  the highest standards of privacy and security.
                </p>
                
                <div className="healthcare-benefits-list">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="healthcare-benefit-item">
                      <div className="healthcare-benefit-icon">{benefit.icon}</div>
                      <div className="healthcare-benefit-content">
                        <h3 className="healthcare-benefit-title">{benefit.title}</h3>
                        <p className="healthcare-benefit-description">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="healthcare-benefits-image">
                <img src="/api/placeholder/500/400" alt="Doctor using tablet to manage patient appointments and medical records in modern clinic" />
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="healthcare-packages">
          <div className="healthcare-packages-glow"></div>
          
          <div className="healthcare-container">
            <div className="healthcare-section-header">
              <h2 className="healthcare-section-title">
                Choose Your Medical Practice Success Package
              </h2>
              <p className="healthcare-section-subtitle">
                Transparent pricing designed to deliver maximum ROI for healthcare providers
              </p>
            </div>
            
            <div className="healthcare-packages-grid">
              {servicePackages.map((pkg, index) => (
                <div key={index} className={`healthcare-package-card ${pkg.popular ? 'healthcare-package-popular' : ''}`}>
                  {pkg.popular && (
                    <div className="healthcare-package-badge">Most Popular</div>
                  )}
                  
                  <div className="healthcare-package-header">
                    <h3 className="healthcare-package-title">{pkg.title}</h3>
                    <div className="healthcare-package-price">{pkg.price}</div>
                  </div>
                  
                  <ul className="healthcare-package-features">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="healthcare-package-feature">
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className="healthcare-package-cta">
                    Get Started Today
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="healthcare-testimonials">
          <div className="healthcare-container">
            <div className="healthcare-section-header">
              <h2 className="healthcare-section-title">
                Success Stories from Healthcare Providers
              </h2>
            </div>
            
            <div className="healthcare-testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="healthcare-testimonial-card">
                  <div className="healthcare-testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="healthcare-star-filled" />
                    ))}
                  </div>
                  <p className="healthcare-testimonial-text">"{testimonial.text}"</p>
                  <div className="healthcare-testimonial-author">
                    <h4 className="healthcare-author-name">{testimonial.name}</h4>
                    <p className="healthcare-author-title">{testimonial.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="healthcare-cta">
          <div className="healthcare-cta-glow"></div>
          
          <div className="healthcare-container">
            <div className="healthcare-cta-content">
              <h2 className="healthcare-cta-title">
                Ready to Transform Your Medical Practice?
              </h2>
              <p className="healthcare-cta-description">
                Join 400+ successful healthcare providers who've dramatically increased their patient base 
                and streamlined their practice operations with our HIPAA-compliant solutions.
              </p>
              
              <div className="healthcare-cta-buttons">
                <Link to="/contact" className="healthcare-cta-primary">
                  Get Free Medical Practice Consultation
                  <Phone size={20} />
                </Link>
                <a href="mailto:hello@softranch.com" className="healthcare-cta-secondary">
                  <Mail size={20} />
                  Email Us Directly
                </a>
              </div>
              
              <div className="healthcare-cta-guarantee">
                <CheckCircle size={20} />
                <span>30-day money-back guarantee • HIPAA compliance included • Free consultation</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HealthcareServices;