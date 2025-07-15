import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Car,
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
  Settings,
  FileText,
  Award,
  Wrench,
} from "lucide-react";
import "./style.css";

// import img1 from "../../../../static/featured_services_images/cars1.png";
import img2 from "../../../../static/featured_services_images/cars2.png";

const CarDealershipServices = () => {
  const features = [
    {
      icon: <Car size={32} />,
      title: "Advanced Vehicle Inventory Management",
      description:
        "Dynamic inventory system with real-time updates, VIN decoding, high-quality image galleries, and detailed specifications that showcase every vehicle perfectly.",
    },
    {
      icon: <Target size={32} />,
      title: "Lead Generation & CRM Integration",
      description:
        "Capture more qualified leads with trade-in calculators, financing tools, and automated follow-up systems that convert website visitors into showroom customers.",
    },
    {
      icon: <MapPin size={32} />,
      title: "Local Automotive SEO",
      description:
        "Dominate local searches for 'car dealers near me' with location-based SEO, Google My Business optimization, and automotive directory listings.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile-First Automotive Design",
      description:
        "Responsive design optimized for mobile car shoppers with fast loading, intuitive vehicle browsing, and seamless contact forms.",
    },
    {
      icon: <CreditCard size={32} />,
      title: "Financing & Payment Tools",
      description:
        "Integrated financing calculators, payment estimators, credit applications, and secure payment processing for deposits and transactions.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Automotive Analytics & Insights",
      description:
        "Track vehicle views, lead sources, conversion rates, and customer behavior to optimize inventory and marketing strategies effectively.",
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp size={24} />,
      title: "250% More Qualified Leads",
      description:
        "Our automotive websites consistently generate more qualified leads through optimized vehicle showcases and strategic lead capture systems.",
    },
    {
      icon: <Users size={24} />,
      title: "Enhanced Customer Experience",
      description:
        "Seamless vehicle browsing, virtual tours, and instant financing tools create an exceptional online car shopping experience.",
    },
    {
      icon: <Clock size={24} />,
      title: "Faster Sales Cycles",
      description:
        "Pre-qualified leads and online financing applications reduce time-to-sale and increase customer satisfaction and loyalty.",
    },
    {
      icon: <Shield size={24} />,
      title: "Competitive Market Advantage",
      description:
        "Stand out from other dealerships with professional branding, advanced features, and superior online presence in your market.",
    },
  ];

  const testimonials = [
    {
      name: "Mike ",
      title: "General Manager, Premier Auto Group",
      text: "Our website traffic increased 300% and lead quality improved dramatically. The inventory management system is intuitive, and customers love the financing tools. Best investment we've made.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      title: "Owner, from Estonia",
      text: "SoftRanch transformed our online presence completely. We now rank #1 for auto dealers in our city, and our online vehicle sales have tripled in just 8 months.",
      rating: 5,
    },
  ];

  const servicePackages = [
    {
      title: "Starter Dealership",
      price: "Starting at $1,497",
      features: [
        "Professional Automotive Website",
        "Basic Vehicle Inventory System",
        "Mobile-Responsive Design",
        "Contact & Lead Capture Forms",
        "Google My Business Setup",
        "Basic Automotive SEO",
      ],
      popular: false,
    },
    {
      title: "Professional Dealership",
      price: "Starting at $3,497",
      features: [
        "Everything in Starter Package",
        "Advanced Inventory Management",
        "Financing Calculator Integration",
        "Trade-in Value Tools",
        "Customer Review System",
        "Advanced Automotive SEO",
        "CRM Integration & Lead Tracking",
      ],
      popular: true,
    },
    {
      title: "Enterprise Auto Group",
      price: "Starting at $6,997",
      features: [
        "Everything in Professional Package",
        "Multi-Location Management",
        "Advanced Analytics Dashboard",
        "Virtual Vehicle Tours",
        "Automated Marketing Campaigns",
        "Custom API Integrations",
        "24/7 Priority Support",
      ],
      popular: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Car Dealership Website Development | Sell 250% More Vehicles Online |
          SoftRanch
        </title>
        <meta
          name="description"
          content="Transform your car dealership with professional automotive website development. Advanced inventory management, lead generation tools, and local SEO that increase vehicle sales by 250%. Trusted by 150+ auto dealers nationwide."
        />
        <meta
          name="keywords"
          content="car dealership website development, automotive website design, auto dealer marketing, vehicle inventory management, car sales website, automotive SEO, auto dealer lead generation, dealership management system"
        />
        <meta
          property="og:title"
          content="Car Dealership Website Development | Sell 250% More Vehicles | SoftRanch"
        />
        <meta
          property="og:description"
          content="Increase vehicle sales by 250% with professional car dealership websites. Advanced inventory management and automotive marketing tools."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://softranch.com/car-dealership-website-development-services"
        />
        <link
          rel="canonical"
          href="https://softranch.com/car-dealership-website-development-services"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Car Dealership Website Development",
            description:
              "Professional automotive website development with vehicle inventory management, lead generation tools, and automotive SEO for car dealerships.",
            provider: {
              "@type": "Organization",
              name: "SoftRanch",
              url: "https://softranch.com",
            },
            serviceType: "Automotive Web Development",
            offers: {
              "@type": "Offer",
              priceRange: "$1,497 - $6,997",
            },
          })}
        </script>
      </Helmet>

      <div className="automotive-services-wrapper">
        {/* Hero Section */}
        <section className="automotive-hero">
          <div className="automotive-hero-bg"></div>
          <div className="automotive-glow-orb automotive-glow-orb-1"></div>
          <div className="automotive-glow-orb automotive-glow-orb-2"></div>

          <div className="automotive-container">
            <div className="automotive-hero-content">
              <div className="automotive-badge">
                <Car size={20} />
                <span>Automotive Excellence</span>
              </div>

              <h1 className="automotive-hero-title">
                Sell 250% More Vehicles with
                <span className="automotive-gradient-text">
                  {" "}
                  Professional Automotive
                </span>
                <br />
                Websites & Lead Systems
              </h1>

              <p className="automotive-hero-description">
                Transform your car dealership with cutting-edge websites
                designed for the automotive industry. Features include advanced
                vehicle inventory management, financing calculators, trade-in
                tools, and automotive SEO that drives qualified customers to
                your showroom.
              </p>

              <div className="automotive-hero-stats">
                <div className="automotive-stat-item">
                  <span className="automotive-stat-number">250%</span>
                  <span className="automotive-stat-label">
                    More Vehicle Sales
                  </span>
                </div>
                <div className="automotive-stat-item">
                  <span className="automotive-stat-number">150+</span>
                  <span className="automotive-stat-label">Dealers Served</span>
                </div>
                <div className="automotive-stat-item">
                  <span className="automotive-stat-number">#1</span>
                  <span className="automotive-stat-label">Local Rankings</span>
                </div>
              </div>

              <div className="automotive-hero-cta">
                <Link to="/contact" className="automotive-cta-primary">
                  Get Your Free Dealership Website Audit
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/live-work-samples"
                  className="automotive-cta-secondary"
                >
                  View Automotive Success Stories
                </Link>
              </div>
            </div>

            <div className="automotive-hero-image">
              <img
                src={"img1"}
                alt="Modern car dealership website dashboard showing vehicle inventory management and sales analytics"
              />
              <div className="automotive-image-overlay">
                <div className="automotive-overlay-stat">
                  <Settings size={24} />
                  <span>Live Inventory</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="automotive-features">
          <div className="automotive-floating-glow automotive-floating-glow-1"></div>
          <div className="automotive-floating-glow automotive-floating-glow-2"></div>

          <div className="automotive-container">
            <div className="automotive-section-header">
              <h2 className="automotive-section-title">
                Everything You Need to Dominate Automotive Sales
              </h2>
              <p className="automotive-section-subtitle">
                From advanced inventory management to lead generation tools, we
                provide the complete automotive digital ecosystem that
                transforms your dealership into a vehicle-selling machine.
              </p>
            </div>

            <div className="automotive-features-grid">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="automotive-feature-card"
                  data-index={index}
                >
                  <div className="automotive-feature-icon">{feature.icon}</div>
                  <h3 className="automotive-feature-title">{feature.title}</h3>
                  <p className="automotive-feature-description">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="automotive-benefits">
          <div className="automotive-container">
            <div className="automotive-benefits-content">
              <div className="automotive-benefits-text">
                <h2 className="automotive-section-title">
                  Why Car Dealerships Choose SoftRanch
                </h2>
                <p className="automotive-section-subtitle">
                  We understand the unique challenges of automotive sales and
                  marketing. Our solutions are specifically designed to help car
                  dealerships attract more customers, showcase inventory
                  effectively, and close more deals.
                </p>

                <div className="automotive-benefits-list">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="automotive-benefit-item">
                      <div className="automotive-benefit-icon">
                        {benefit.icon}
                      </div>
                      <div className="automotive-benefit-content">
                        <h3 className="automotive-benefit-title">
                          {benefit.title}
                        </h3>
                        <p className="automotive-benefit-description">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="automotive-benefits-image">
                <img
                  src={img2}
                  alt="Car dealership manager using tablet to manage vehicle inventory and customer leads"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="automotive-packages">
          <div className="automotive-packages-glow"></div>

          <div className="automotive-container">
            <div className="automotive-section-header">
              <h2 className="automotive-section-title">
                Choose Your Automotive Success Package
              </h2>
              <p className="automotive-section-subtitle">
                Transparent pricing designed to deliver maximum ROI for car
                dealerships
              </p>
            </div>

            <div className="automotive-packages-grid">
              {servicePackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`automotive-package-card ${
                    pkg.popular ? "automotive-package-popular" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="automotive-package-badge">Most Popular</div>
                  )}

                  <div className="automotive-package-header">
                    <h3 className="automotive-package-title">{pkg.title}</h3>
                    <div className="automotive-package-price">{pkg.price}</div>
                  </div>

                  <ul className="automotive-package-features">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="automotive-package-feature">
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="automotive-package-cta">
                    Get Started Today
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="automotive-testimonials">
          <div className="automotive-container">
            <div className="automotive-section-header">
              <h2 className="automotive-section-title">
                Success Stories from Car Dealership Owners
              </h2>
            </div>

            <div className="automotive-testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="automotive-testimonial-card">
                  <div className="automotive-testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="automotive-star-filled"
                      />
                    ))}
                  </div>
                  <p className="automotive-testimonial-text">
                    "{testimonial.text}"
                  </p>
                  <div className="automotive-testimonial-author">
                    <p className="automotive-author-title">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="automotive-cta">
          <div className="automotive-cta-glow"></div>

          <div className="automotive-container">
            <div className="automotive-cta-content">
              <h2 className="automotive-cta-title">
                Ready to Transform Your Car Dealership?
              </h2>
              <p className="automotive-cta-description">
                Join 150+ successful car dealerships who've dramatically
                increased their vehicle sales and built thriving automotive
                businesses with our proven website and marketing solutions.
              </p>

              <div className="automotive-cta-buttons">
                <Link to="/contact" className="automotive-cta-primary">
                  Get Free Automotive Consultation
                  <Phone size={20} />
                </Link>
                <a
                  href="mailto:hello@softranch.com"
                  className="automotive-cta-secondary"
                >
                  <Mail size={20} />
                  Email Us Directly
                </a>
              </div>

              <div className="automotive-cta-guarantee">
                <CheckCircle size={20} />
                <span>
                  30-day money-back guarantee • Free consultation • Advanced
                  inventory tools included
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CarDealershipServices;
