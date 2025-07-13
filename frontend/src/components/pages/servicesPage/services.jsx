import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Search,
  Code2,
  Database,
  Layers3,
  Palette,
  Smartphone,
  ShoppingCart,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Trophy,
  Clock,
  Shield,
  Rocket,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./style.css";

const ServicesPage = () => {
  const services = [
    {
      icon: <Search size={40} />,
      title: "SEO Optimization",
      description:
        "Boost your search rankings and drive organic traffic with our advanced SEO strategies and techniques.",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Keyword Research & Analysis",
        "On-Page SEO Optimization",
        "Technical SEO Audits",
        "Content Strategy Development",
        "Local SEO for Businesses",
        "Performance Tracking & Analytics",
      ],
      pricing: "Starting from $500/month",
      deliveryTime: "2-4 weeks",
    },
    {
      icon: <Code2 size={40} />,
      title: "Frontend Development",
      description:
        "Create stunning, responsive user interfaces using modern frameworks like React, Vue, and Angular.",
      color: "from-green-500 to-emerald-500",
      features: [
        "React, Vue & Angular Development",
        "Responsive Web Design",
        "Progressive Web Apps (PWAs)",
        "Performance Optimization",
        "Cross-Browser Compatibility",
        "Modern CSS & JavaScript",
      ],
      pricing: "Starting from $2,000",
      deliveryTime: "2-6 weeks",
    },
    {
      icon: <Database size={40} />,
      title: "Backend Development",
      description:
        "Build robust server-side applications with scalable databases and secure API integrations.",
      color: "from-purple-500 to-violet-500",
      features: [
        "Node.js, Python & PHP Development",
        "Database Design & Optimization",
        "RESTful & GraphQL APIs",
        "Cloud Integration (AWS, Azure)",
        "Security Implementation",
        "Server Management & DevOps",
      ],
      pricing: "Starting from $3,000",
      deliveryTime: "3-8 weeks",
    },
    {
      icon: <Layers3 size={40} />,
      title: "Full Stack Development",
      description:
        "End-to-end development solutions combining frontend and backend expertise for complete applications.",
      color: "from-orange-500 to-red-500",
      features: [
        "Complete Web Application Development",
        "Frontend + Backend Integration",
        "Database Architecture",
        "User Authentication & Authorization",
        "Payment Gateway Integration",
        "Deployment & Maintenance",
      ],
      pricing: "Starting from $5,000",
      deliveryTime: "4-12 weeks",
    },
    {
      icon: <Palette size={40} />,
      title: "UI/UX Design",
      description:
        "Design intuitive and beautiful user experiences that convert visitors into loyal customers.",
      color: "from-pink-500 to-rose-500",
      features: [
        "User Experience Research",
        "Wireframing & Prototyping",
        "Visual Design & Branding",
        "Usability Testing",
        "Design System Creation",
        "Mobile-First Design Approach",
      ],
      pricing: "Starting from $1,500",
      deliveryTime: "2-4 weeks",
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "E-commerce Solutions",
      description:
        "Complete online store development with payment integration and inventory management systems.",
      color: "from-teal-500 to-green-500",
      features: [
        "Custom E-commerce Development",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Processing Systems",
        "Multi-vendor Marketplaces",
        "Analytics & Reporting",
      ],
      pricing: "Starting from $4,000",
      deliveryTime: "4-10 weeks",
    },
    {
      icon: <Zap size={40} />,
      title: "Performance Optimization",
      description:
        "Speed up your website and optimize performance for better user experience and search rankings.",
      color: "from-yellow-500 to-orange-500",
      features: [
        "Website Speed Optimization",
        "Core Web Vitals Improvement",
        "Image & Asset Optimization",
        "Caching Strategies",
        "CDN Implementation",
        "Performance Monitoring",
      ],
      pricing: "Starting from $800",
      deliveryTime: "1-3 weeks",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Trophy size={30} />,
      title: "Award-Winning Team",
      description:
        "Our developers have won multiple industry awards and recognition for exceptional work.",
    },
    {
      icon: <Clock size={30} />,
      title: "Lightning Fast Delivery",
      description:
        "We deliver projects 40% faster than industry average without compromising quality.",
    },
    {
      icon: <Shield size={30} />,
      title: "100% Security Guarantee",
      description:
        "Your data and code are protected with enterprise-grade security measures.",
    },
    {
      icon: <Users size={30} />,
      title: "500+ Happy Clients",
      description:
        "Join hundreds of satisfied clients who trust us with their digital transformation.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description:
        "We dive deep into your business requirements, goals, and target audience to create the perfect strategy.",
    },
    {
      number: "02",
      title: "Planning & Design",
      description:
        "Detailed project planning with wireframes, mockups, and technical specifications for your approval.",
    },
    {
      number: "03",
      title: "Development & Testing",
      description:
        "Agile development process with regular updates, rigorous testing, and quality assurance.",
    },
    {
      number: "04",
      title: "Launch & Support",
      description:
        "Smooth deployment, comprehensive training, and ongoing support to ensure your success.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "SoftRanch transformed our outdated website into a modern, high-performing platform. Our conversion rates increased by 300%!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "E-Commerce Plus",
      text: "The team's expertise in full-stack development helped us build a scalable e-commerce platform that handles thousands of orders daily.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Pro",
      text: "Their SEO optimization service took our website from page 5 to page 1 on Google. Absolutely incredible results!",
      rating: 5,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Professional Web Development Services | SoftRanch - Expert Frontend,
          Backend & Full Stack Development
        </title>
        <meta
          name="description"
          content="Transform your business with SoftRanch's professional web development services. Specializing in React, Node.js, SEO optimization, e-commerce solutions, and mobile app development. 500+ satisfied clients worldwide."
        />
        <meta
          name="keywords"
          content="web development services, react development, nodejs development, frontend development, backend development, full stack development, SEO optimization, e-commerce development, mobile app development, UI UX design"
        />
        <meta
          property="og:title"
          content="Professional Web Development Services | SoftRanch"
        />
        <meta
          property="og:description"
          content="Expert web development services including React, Node.js, SEO, and e-commerce solutions. Transform your business with our award-winning team."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softranch.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Professional Web Development Services | SoftRanch"
        />
        <meta
          name="twitter:description"
          content="Expert web development services including React, Node.js, SEO, and e-commerce solutions."
        />
        <link rel="canonical" href="https://softranch.com/services" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SoftRanch",
            url: "https://softranch.com",
            description:
              "Professional web development services company specializing in React, Node.js, SEO optimization, and e-commerce solutions.",
            services: services.map((service) => ({
              "@type": "Service",
              name: service.title,
              description: service.description,
              provider: {
                "@type": "Organization",
                name: "SoftRanch",
              },
            })),
          })}
        </script>
      </Helmet>

      <div className="services-page-wrapper">
        {/* Hero Section */}
        <section className="services-page-hero">
          <div className="services-page-hero-bg"></div>
          <div className="services-page-glow-orb services-page-glow-orb-1"></div>
          <div className="services-page-glow-orb services-page-glow-orb-2"></div>

          <div className="services-page-container">
            <div className="services-page-hero-content">
              <div className="services-page-badge">
                <Rocket size={20} />
                <span>Professional Services</span>
              </div>

              <h1 className="services-page-hero-title">
                Transform Your Business
                <br />
                With Expert Development
              </h1>

              <p className="services-page-hero-description">
                From cutting-edge web applications to mobile solutions, our
                award-winning team delivers high-performance digital experiences
                that drive growth and exceed expectations.
              </p>

              <div className="services-page-hero-cta">
                <Link to="/contact" className="services-page-cta-primary">
                  Get Started Today
                  <ArrowRight size={20} />
                </Link>
                <Link to="/portfolio" className="services-page-cta-secondary">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="services-page-services">
          <div className="services-page-floating-glow services-page-floating-glow-1"></div>
          <div className="services-page-floating-glow services-page-floating-glow-2"></div>

          <div className="services-page-container">
            <div className="services-page-section-header">
              <h2 className="services-page-section-title">
                Our Comprehensive Services
              </h2>
              <p className="services-page-section-subtitle">
                We offer end-to-end development solutions tailored to your
                business needs
              </p>
            </div>

            <div className="services-page-services-grid">
              {services.map((service, index) => (
                <article
                  key={index}
                  className="services-page-service-card"
                  data-index={index}
                >
                  <div
                    className={`services-page-service-icon-wrapper services-page-gradient-${index}`}
                  >
                    <div className="services-page-service-icon">
                      {service.icon}
                    </div>
                  </div>

                  <div className="services-page-service-content">
                    <h3 className="services-page-service-title">
                      {service.title}
                    </h3>
                    <p className="services-page-service-description">
                      {service.description}
                    </p>

                    <ul className="services-page-service-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="services-page-service-feature">
                          <CheckCircle size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="services-page-service-meta">
                      {/* <div className="services-page-service-pricing">
                        <span className="services-page-pricing-label">
                          Starting at
                        </span>
                        <span className="services-page-pricing-value">
                          {service.pricing}
                        </span>
                      </div> */}
                      <div className="services-page-service-delivery">
                        <Clock size={16} />
                        <span>{service.deliveryTime}</span>
                      </div>
                    </div>

                    <Link to="/contact" className="services-page-service-cta">
                      Get Quote
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  <div className="services-page-service-hover-effect"></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="services-page-why-choose">
          <div className="services-page-container">
            <div className="services-page-section-header">
              <h2 className="services-page-section-title">
                Why Choose SoftRanch?
              </h2>
              <p className="services-page-section-subtitle">
                We don't just build websites – we create digital experiences
                that drive results
              </p>
            </div>

            <div className="services-page-why-grid">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="services-page-why-item">
                  <div className="services-page-why-icon">{item.icon}</div>
                  <h3 className="services-page-why-title">{item.title}</h3>
                  <p className="services-page-why-description">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="services-page-process">
          <div className="services-page-process-glow"></div>

          <div className="services-page-container">
            <div className="services-page-section-header">
              <h2 className="services-page-section-title">
                Our Proven Development Process
              </h2>
              <p className="services-page-section-subtitle">
                A transparent, collaborative approach that ensures your
                project's success
              </p>
            </div>

            <div className="services-page-process-timeline">
              {processSteps.map((step, index) => (
                <div key={index} className="services-page-process-step">
                  <div className="services-page-process-number">
                    {step.number}
                  </div>
                  <div className="services-page-process-content">
                    <h3 className="services-page-process-title">
                      {step.title}
                    </h3>
                    <p className="services-page-process-description">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="services-page-cta">
          <div className="services-page-cta-glow"></div>

          <div className="services-page-container">
            <div className="services-page-cta-content">
              <h2 className="services-page-cta-title">
                Ready to Transform Your Business?
              </h2>
              <p className="services-page-cta-description">
                Let's discuss your project and create something extraordinary
                together. Get a free consultation and custom quote today.
              </p>

              <div className="services-page-cta-buttons">
                <Link to="/contact" className="services-page-cta-primary">
                  Start Your Project
                  <Rocket size={20} />
                </Link>
                <a
                  target="_blank"
                  href="https://wa.me/923355398908"
                  className="services-page-cta-secondary"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
