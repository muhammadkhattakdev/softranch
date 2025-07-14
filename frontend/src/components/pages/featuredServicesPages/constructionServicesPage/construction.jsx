import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Building2,
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
  HardHat,
  FileText,
  Award,
  Hammer,
  Home
} from "lucide-react";
import "./style.css";
// import img1 from "../../../static/featured_services_images/construction_dashboard.png";
import img2 from "../../../../static/featured_services_images/construction2.png";

const ConstructionServices = () => {
  const features = [
    {
      icon: <Building2 size={32} />,
      title: "Project Portfolio Showcase",
      description: "Stunning project galleries with before/after photos, detailed case studies, and interactive project timelines that demonstrate your construction expertise and quality workmanship."
    },
    {
      icon: <Calendar size={32} />,
      title: "Quote Request & Project Management",
      description: "Streamlined quote request forms, project scheduling tools, and client communication portals that simplify project management from initial contact to completion."
    },
    {
      icon: <MapPin size={32} />,
      title: "Local Construction SEO",
      description: "Dominate local searches for 'contractors near me' and 'construction companies' with location-based SEO strategies and Google My Business optimization."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile-Optimized Design",
      description: "Responsive websites that look perfect on all devices, allowing potential clients to view your projects and request quotes from anywhere, anytime."
    },
    {
      icon: <HardHat size={32} />,
      title: "Safety & Compliance Features",
      description: "Showcase your safety certifications, compliance standards, and insurance information to build trust and credibility with potential clients."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Lead Tracking & Analytics",
      description: "Monitor lead sources, track project inquiries, and analyze website performance to optimize your marketing efforts and grow your business."
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp size={24} />,
      title: "400% More Project Inquiries",
      description: "Our construction websites consistently generate more qualified leads through optimized project showcases and strategic lead capture systems."
    },
    {
      icon: <Home size={24} />,
      title: "Showcase Project Excellence",
      description: "Professional project galleries and detailed case studies that highlight your craftsmanship and attract higher-value construction projects."
    },
    {
      icon: <Users size={24} />,
      title: "Build Client Trust & Credibility",
      description: "Establish authority in your market with professional branding, client testimonials, and comprehensive service information."
    },
    {
      icon: <Clock size={24} />,
      title: "Streamlined Project Workflow",
      description: "Automated quote requests and project management tools reduce administrative time and improve client communication efficiency."
    }
  ];

  const testimonials = [
    {
      name: "Robert Martinez",
      title: "Owner, Phoenix",
      text: "Our website has transformed our business completely. We've seen a 350% increase in project inquiries, and the quality of leads is exceptional. The project gallery showcases our work beautifully.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      title: "General Manager, Netherlands",
      text: "SoftRanch delivered exactly what we needed. We now rank #1 for construction services in our area, and clients love browsing our project portfolio online. Outstanding results!",
      rating: 5
    }
  ];

  const servicePackages = [
    {
      title: "Foundation Package",
      price: "Starting at $1,297",
      features: [
        "Professional Construction Website",
        "Project Portfolio Gallery",
        "Mobile-Responsive Design",
        "Contact & Quote Request Forms",
        "Google My Business Setup",
        "Basic Construction SEO"
      ],
      popular: false
    },
    {
      title: "Professional Builder",
      price: "Starting at $2,997",
      features: [
        "Everything in Foundation Package",
        "Advanced Project Showcase",
        "Client Testimonial System",
        "Service Area Optimization",
        "Before/After Photo Galleries",
        "Advanced Local SEO",
        "Lead Tracking & Analytics"
      ],
      popular: true
    },
    {
      title: "Enterprise Construction",
      price: "Starting at $5,497",
      features: [
        "Everything in Professional Package",
        "Multi-Location Management",
        "Advanced Project Management Tools",
        "Client Portal & Communication",
        "Custom Integrations",
        "Ongoing SEO Management",
        "24/7 Priority Support"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>
          Construction Website Development | Get 400% More Project Leads | SoftRanch
        </title>
        <meta
          name="description"
          content="Transform your construction company with professional website development. Showcase projects, generate 400% more leads, and dominate local construction searches. Trusted by 200+ construction companies nationwide."
        />
        <meta
          name="keywords"
          content="construction website development, contractor website design, construction company marketing, building company SEO, construction lead generation, contractor portfolio website, construction project management, building services website"
        />
        <meta
          property="og:title"
          content="Construction Website Development | Get 400% More Project Leads | SoftRanch"
        />
        <meta
          property="og:description"
          content="Generate 400% more construction leads with professional websites. Project showcases and local SEO for construction companies."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://softranch.com/construction-website-development-services"
        />
        <link
          rel="canonical"
          href="https://softranch.com/construction-website-development-services"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Construction Website Development",
            description:
              "Professional construction website development with project portfolio showcases, lead generation tools, and local SEO optimization for construction companies and contractors.",
            provider: {
              "@type": "Organization",
              name: "SoftRanch",
              url: "https://softranch.com",
            },
            serviceType: "Construction Web Development",
            offers: {
              "@type": "Offer",
              priceRange: "$1,297 - $5,497",
            },
          })}
        </script>
      </Helmet>

      <div className="construction-services-wrapper">
        {/* Hero Section */}
        <section className="construction-hero">
          <div className="construction-hero-bg"></div>
          <div className="construction-glow-orb construction-glow-orb-1"></div>
          <div className="construction-glow-orb construction-glow-orb-2"></div>

          <div className="construction-container">
            <div className="construction-hero-content">
              <div className="construction-badge">
                <Building2 size={20} />
                <span>Construction Excellence</span>
              </div>

              <h1 className="construction-hero-title">
                Build Your Success with
                <span className="construction-gradient-text">
                  {" "}
                  Professional Construction
                </span>
                <br />
                Websites That Generate Leads
              </h1>

              <p className="construction-hero-description">
                Showcase your construction expertise and attract more high-value projects with 
                websites built for the construction industry. Features include stunning project 
                galleries, quote request systems, safety certifications, and local SEO that 
                puts your company at the top of construction searches.
              </p>

              <div className="construction-hero-stats">
                <div className="construction-stat-item">
                  <span className="construction-stat-number">400%</span>
                  <span className="construction-stat-label">More Project Leads</span>
                </div>
                <div className="construction-stat-item">
                  <span className="construction-stat-number">200+</span>
                  <span className="construction-stat-label">Builders Served</span>
                </div>
                <div className="construction-stat-item">
                  <span className="construction-stat-number">#1</span>
                  <span className="construction-stat-label">Local Rankings</span>
                </div>
              </div>

              <div className="construction-hero-cta">
                <Link to="/contact" className="construction-cta-primary">
                  Get Your Free Construction Website Audit
                  <ArrowRight size={20} />
                </Link>
                <Link to="/live-work-samples" className="construction-cta-secondary">
                  View Construction Success Stories
                </Link>
              </div>
            </div>

            <div className="construction-hero-image">
              <img
                src={"img1"}
                alt="Modern construction company website dashboard showing project management and lead tracking system"
              />
              <div className="construction-image-overlay">
                <div className="construction-overlay-stat">
                  <Hammer size={24} />
                  <span>Live Projects</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="construction-features">
          <div className="construction-floating-glow construction-floating-glow-1"></div>
          <div className="construction-floating-glow construction-floating-glow-2"></div>

          <div className="construction-container">
            <div className="construction-section-header">
              <h2 className="construction-section-title">
                Everything You Need to Dominate Construction Market
              </h2>
              <p className="construction-section-subtitle">
                From project portfolio showcases to lead generation tools, we provide 
                the complete construction digital ecosystem that transforms your company 
                into a project-winning machine.
              </p>
            </div>

            <div className="construction-features-grid">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="construction-feature-card"
                  data-index={index}
                >
                  <div className="construction-feature-icon">{feature.icon}</div>
                  <h3 className="construction-feature-title">{feature.title}</h3>
                  <p className="construction-feature-description">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="construction-benefits">
          <div className="construction-container">
            <div className="construction-benefits-content">
              <div className="construction-benefits-text">
                <h2 className="construction-section-title">
                  Why Construction Companies Choose SoftRanch
                </h2>
                <p className="construction-section-subtitle">
                  We understand the unique challenges of construction marketing and 
                  project acquisition. Our solutions are specifically designed to help 
                  construction companies showcase their work, attract quality clients, 
                  and build lasting business relationships.
                </p>

                <div className="construction-benefits-list">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="construction-benefit-item">
                      <div className="construction-benefit-icon">
                        {benefit.icon}
                      </div>
                      <div className="construction-benefit-content">
                        <h3 className="construction-benefit-title">
                          {benefit.title}
                        </h3>
                        <p className="construction-benefit-description">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="construction-benefits-image">
                <img
                  src={img2}
                  alt="Construction company owner reviewing project portfolio and client inquiries on tablet at construction site"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="construction-packages">
          <div className="construction-packages-glow"></div>

          <div className="construction-container">
            <div className="construction-section-header">
              <h2 className="construction-section-title">
                Choose Your Construction Success Package
              </h2>
              <p className="construction-section-subtitle">
                Transparent pricing designed to deliver maximum ROI for construction companies
              </p>
            </div>

            <div className="construction-packages-grid">
              {servicePackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`construction-package-card ${
                    pkg.popular ? "construction-package-popular" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="construction-package-badge">Most Popular</div>
                  )}

                  <div className="construction-package-header">
                    <h3 className="construction-package-title">{pkg.title}</h3>
                    <div className="construction-package-price">{pkg.price}</div>
                  </div>

                  <ul className="construction-package-features">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="construction-package-feature">
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="construction-package-cta">
                    Get Started Today
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="construction-testimonials">
          <div className="construction-container">
            <div className="construction-section-header">
              <h2 className="construction-section-title">
                Success Stories from Construction Company Owners
              </h2>
            </div>

            <div className="construction-testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="construction-testimonial-card">
                  <div className="construction-testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="construction-star-filled"
                      />
                    ))}
                  </div>
                  <p className="construction-testimonial-text">
                    "{testimonial.text}"
                  </p>
                  <div className="construction-testimonial-author">
                    <p className="construction-author-title">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="construction-cta">
          <div className="construction-cta-glow"></div>

          <div className="construction-container">
            <div className="construction-cta-content">
              <h2 className="construction-cta-title">
                Ready to Build Your Construction Empire?
              </h2>
              <p className="construction-cta-description">
                Join 200+ successful construction companies who've dramatically increased 
                their project inquiries and built thriving construction businesses with 
                our proven website and marketing solutions.
              </p>

              <div className="construction-cta-buttons">
                <Link to="/contact" className="construction-cta-primary">
                  Get Free Construction Consultation
                  <Phone size={20} />
                </Link>
                <a
                  href="mailto:hello@softranch.com"
                  className="construction-cta-secondary"
                >
                  <Mail size={20} />
                  Email Us Directly
                </a>
              </div>

              <div className="construction-cta-guarantee">
                <CheckCircle size={20} />
                <span>
                  30-day money-back guarantee • Free consultation • Project showcase tools included
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConstructionServices;