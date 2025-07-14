import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  Award,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Building2,
  Hammer,
  HardHat,
  Wrench,
  Home,
  Building,
  Factory,
  Truck,
  Calculator,
  Calendar,
  MessageSquare,
  TrendingUp,
  Target,
  Zap,
} from "lucide-react";
import headerImg from "../../../../static/construction_website_images/header.jpg";
import b1 from "../../../../static/construction_website_images/b1.jpg";
import b2 from "../../../../static/construction_website_images/b2.jpg";
import b3 from "../../../../static/construction_website_images/b3.jpg";
import b4 from "../../../../static/construction_website_images/b4.jpg";

const ConstructionLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: <Home size={32} />,
      title: "Residential Construction",
      description:
        "Custom homes, renovations, and residential projects built to perfection with attention to every detail.",
      features: [
        "Custom Home Building",
        "Home Renovations",
        "Kitchen & Bath Remodeling",
        "Additions & Extensions",
      ],
    },
    {
      icon: <Building size={32} />,
      title: "Commercial Construction",
      description:
        "Large-scale commercial projects delivering functional and aesthetic excellence for businesses.",
      features: [
        "Office Buildings",
        "Retail Spaces",
        "Warehouses",
        "Shopping Centers",
      ],
    },
    {
      icon: <Factory size={32} />,
      title: "Industrial Projects",
      description:
        "Heavy-duty industrial construction with specialized expertise in complex infrastructure.",
      features: [
        "Manufacturing Facilities",
        "Processing Plants",
        "Distribution Centers",
        "Industrial Complexes",
      ],
    },
    {
      icon: <Wrench size={32} />,
      title: "Renovation & Remodeling",
      description:
        "Transform existing spaces with modern designs and upgraded functionality.",
      features: [
        "Interior Renovations",
        "Exterior Makeovers",
        "Structural Updates",
        "Modern Upgrades",
      ],
    },
  ];

  const projects = [
    {
      title: "Modern Office Complex",
      category: "Commercial",
      description:
        "50,000 sq ft state-of-the-art office building with sustainable design features.",
      stats: {
        size: "50,000 sq ft",
        duration: "18 months",
        type: "Commercial",
      },
      img: b1,
    },
    {
      title: "Luxury Residential Villa",
      category: "Residential",
      description:
        "Custom-built luxury home featuring contemporary architecture and smart home technology.",
      stats: {
        size: "8,500 sq ft",
        duration: "14 months",
        type: "Residential",
      },
      img: b2,
    },
    {
      title: "Industrial Manufacturing Plant",
      category: "Industrial",
      description:
        "Advanced manufacturing facility with specialized equipment and safety systems.",
      stats: {
        size: "120,000 sq ft",
        duration: "24 months",
        type: "Industrial",
      },
      img: b3,
    },
    {
      title: "Shopping Center Renovation",
      category: "Renovation",
      description:
        "Complete transformation of aging shopping center into modern retail destination.",
      stats: {
        size: "200,000 sq ft",
        duration: "12 months",
        type: "Renovation",
      },
      img: b4,
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation & Planning",
      description:
        "We start with understanding your vision, requirements, and budget to create a comprehensive project plan.",
      icon: <MessageSquare size={24} />,
    },
    {
      step: "02",
      title: "Design & Engineering",
      description:
        "Our expert team creates detailed designs and engineering plans that bring your vision to life.",
      icon: <Building2 size={24} />,
    },
    {
      step: "03",
      title: "Permitting & Approval",
      description:
        "We handle all necessary permits and regulatory approvals to ensure your project meets all requirements.",
      icon: <CheckCircle size={24} />,
    },
    {
      step: "04",
      title: "Construction & Delivery",
      description:
        "With meticulous attention to detail, we construct your project on time and within budget.",
      icon: <Hammer size={24} />,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Property Developer",
      content:
        "Premier Construction delivered our office complex ahead of schedule and under budget. Their attention to detail and project management expertise is unmatched.",
      rating: 5,
      project: "Downtown Office Complex",
    },
    {
      name: "Michael Chen",
      title: "Homeowner",
      content:
        "Our dream home became a reality thanks to Premier Construction. The quality of workmanship and customer service exceeded our expectations.",
      rating: 5,
      project: "Custom Luxury Home",
    },
    {
      name: "David Rodriguez",
      title: "Industrial Manager",
      content:
        "The team understood our complex industrial requirements and delivered a facility that perfectly meets our operational needs.",
      rating: 5,
      project: "Manufacturing Facility",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      icon: <Building2 size={24} />,
    },
    { number: "25+", label: "Years Experience", icon: <Award size={24} /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star size={24} /> },
    { number: "50+", label: "Expert Team Members", icon: <Users size={24} /> },
  ];

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        lineHeight: 1.6,
        color: "#1f2937",
        backgroundColor: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background:
            scrollY > 50
              ? "rgba(255, 255, 255, 0.95)"
              : "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(249, 115, 22, 0.1)",
          zIndex: 1000,
          transition: "all 0.3s ease",
          boxShadow: scrollY > 50 ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "1rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                background: "linear-gradient(135deg, #f97316, #ea580c)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              <Building2 size={24} />
            </div>
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: "800",
                color: "#1f2937",
              }}
            >
              Premier<span style={{ color: "#f97316" }}>Build</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div
            style={{
              display: window.innerWidth >= 768 ? "flex" : "none",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            {["Home", "Services", "Projects", "About", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: "#4b5563",
                    textDecoration: "none",
                    fontWeight: "600",
                    padding: "0.5rem 0",
                    transition: "color 0.3s ease",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#f97316")}
                  onMouseLeave={(e) => (e.target.style.color = "#4b5563")}
                >
                  {item}
                </a>
              )
            )}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <a
              href="tel:+1234567890"
              style={{
                display: window.innerWidth >= 768 ? "flex" : "none",
                alignItems: "center",
                gap: "0.5rem",
                background: "linear-gradient(135deg, #f97316, #ea580c)",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: "600",
                transition: "transform 0.3s ease",
                boxShadow: "0 4px 15px rgba(249, 115, 22, 0.3)",
              }}
              onMouseEnter={(e) =>
                (e.target.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
            >
              <Phone size={18} />
              Call Now
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                display: window.innerWidth < 768 ? "flex" : "none",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                background: "transparent",
                border: "2px solid #f97316",
                borderRadius: "8px",
                color: "#f97316",
                cursor: "pointer",
              }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            style={{
              display: window.innerWidth < 768 ? "block" : "none",
              background: "white",
              borderTop: "1px solid rgba(249, 115, 22, 0.1)",
              padding: "1rem 2rem",
            }}
          >
            {["Home", "Services", "Projects", "About", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    display: "block",
                    color: "#4b5563",
                    textDecoration: "none",
                    fontWeight: "600",
                    padding: "1rem 0",
                    borderBottom: "1px solid #f3f4f6",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              )
            )}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, rgba(249, 115, 22, 0.05) 0%, rgba(234, 88, 12, 0.08) 100%)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          paddingTop: "100px",
        }}
      >
        {/* Background Elements */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "-10%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(249, 115, 22, 0.1), transparent)",
            borderRadius: "50%",
            filter: "blur(100px)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "-10%",
            width: "350px",
            height: "350px",
            background:
              "radial-gradient(circle, rgba(107, 114, 128, 0.08), transparent)",
            borderRadius: "50%",
            filter: "blur(100px)",
          }}
        ></div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "2rem",
            display: "grid",
            gridTemplateColumns: window.innerWidth >= 768 ? "1fr 1fr" : "1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(249, 115, 22, 0.1)",
                borderRadius: "50px",
                padding: "0.5rem 1rem",
                marginBottom: "2rem",
                border: "1px solid rgba(249, 115, 22, 0.2)",
              }}
            >
              <Award size={16} color="#f97316" />
              <span
                style={{
                  color: "#f97316",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Award-Winning Construction Company
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: "900",
                lineHeight: "1.1",
                marginBottom: "1.5rem",
                background: "linear-gradient(135deg, #1f2937, #f97316)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Building Dreams Into
              <span style={{ display: "block", color: "#f97316" }}>
                Lasting Reality
              </span>
            </h1>

            <p
              style={{
                fontSize: "1.25rem",
                color: "#6b7280",
                marginBottom: "2.5rem",
                lineHeight: "1.7",
              }}
            >
              From residential homes to commercial complexes, we deliver
              exceptional construction services with 25+ years of experience,
              unmatched quality, and on-time delivery.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginBottom: "3rem",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  background: "linear-gradient(135deg, #f97316, #ea580c)",
                  color: "white",
                  border: "none",
                  padding: "1rem 2rem",
                  borderRadius: "50px",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "all 0.3s ease",
                  boxShadow: "0 8px 25px rgba(249, 115, 22, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow =
                    "0 12px 35px rgba(249, 115, 22, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow =
                    "0 8px 25px rgba(249, 115, 22, 0.3)";
                }}
              >
                Get Free Quote
                <ArrowRight size={20} />
              </button>

              <button
                style={{
                  background: "rgba(249, 115, 22, 0.1)",
                  color: "#f97316",
                  border: "2px solid rgba(249, 115, 22, 0.3)",
                  padding: "1rem 2rem",
                  borderRadius: "50px",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(249, 115, 22, 0.15)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(249, 115, 22, 0.1)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                View Projects
              </button>
            </div>

            {/* Quick Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2rem",
              }}
            >
              {[
                { number: "500+", label: "Projects" },
                { number: "25+", label: "Years" },
                { number: "98%", label: "Satisfaction" },
              ].map((stat, index) => (
                <div key={index} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "800",
                      color: "#f97316",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#6b7280",
                      fontWeight: "600",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div
            style={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
            }}
          >
            <img
              src={headerImg}
              alt="Modern construction site with cranes and building under construction"
              style={{
                width: "100%",
                height: "600px",
                objectFit: "cover",
                transition: "transform 0.5s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "2rem",
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)",
                padding: "1rem 1.5rem",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "linear-gradient(135deg, #f97316, #ea580c)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <HardHat size={20} />
              </div>
              <div>
                <div style={{ fontWeight: "700", color: "#1f2937" }}>
                  Safety First
                </div>
                <div style={{ fontSize: "0.85rem", color: "#6b7280" }}>
                  Zero Accidents Record
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        style={{
          padding: "6rem 2rem",
          background: "white",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "4rem",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(249, 115, 22, 0.1)",
                borderRadius: "50px",
                padding: "0.5rem 1rem",
                marginBottom: "1rem",
                border: "1px solid rgba(249, 115, 22, 0.2)",
              }}
            >
              <Hammer size={16} color="#f97316" />
              <span
                style={{
                  color: "#f97316",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Our Services
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: "800",
                marginBottom: "1rem",
                color: "#1f2937",
              }}
            >
              Comprehensive Construction Solutions
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#6b7280",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              From concept to completion, we provide full-service construction
              solutions tailored to meet your specific needs and requirements.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(249, 115, 22, 0.02))",
                  border: "1px solid rgba(249, 115, 22, 0.1)",
                  borderRadius: "20px",
                  padding: "2.5rem",
                  transition: "all 0.4s ease",
                  backdropFilter: "blur(20px)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-10px)";
                  e.target.style.boxShadow =
                    "0 25px 50px rgba(249, 115, 22, 0.15)";
                  e.target.style.borderColor = "rgba(249, 115, 22, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                  e.target.style.borderColor = "rgba(249, 115, 22, 0.1)";
                }}
              >
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    marginBottom: "1.5rem",
                    boxShadow: "0 8px 25px rgba(249, 115, 22, 0.3)",
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    marginBottom: "1rem",
                    color: "#1f2937",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: "#6b7280",
                    marginBottom: "1.5rem",
                    lineHeight: "1.6",
                  }}
                >
                  {service.description}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        marginBottom: "0.5rem",
                        color: "#4b5563",
                        fontSize: "0.95rem",
                      }}
                    >
                      <CheckCircle size={16} color="#10b981" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        id="projects"
        style={{
          padding: "6rem 2rem",
          background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "4rem",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(249, 115, 22, 0.1)",
                borderRadius: "50px",
                padding: "0.5rem 1rem",
                marginBottom: "1rem",
                border: "1px solid rgba(249, 115, 22, 0.2)",
              }}
            >
              <Building2 size={16} color="#f97316" />
              <span
                style={{
                  color: "#f97316",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Featured Projects
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: "800",
                marginBottom: "1rem",
                color: "#1f2937",
              }}
            >
              Our Latest Construction Projects
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#6b7280",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Explore our portfolio of successful projects that showcase our
              expertise and commitment to excellence in construction.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-10px)";
                  e.target.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "250px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={project.img}
                    alt={`${project.title} - ${project.description}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.1)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      background: "rgba(249, 115, 22, 0.9)",
                      color: "white",
                      padding: "0.5rem 1rem",
                      borderRadius: "20px",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                    }}
                  >
                    {project.category}
                  </div>
                </div>
                <div style={{ padding: "2rem" }}>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "700",
                      marginBottom: "0.75rem",
                      color: "#1f2937",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      color: "#6b7280",
                      marginBottom: "1.5rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {project.description}
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "1rem",
                      paddingTop: "1rem",
                      borderTop: "1px solid #f3f4f6",
                    }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <div
                        style={{
                          fontSize: "1rem",
                          fontWeight: "700",
                          color: "#f97316",
                        }}
                      >
                        {project.stats.size}
                      </div>
                      <div
                        style={{
                          fontSize: "0.8rem",
                          color: "#6b7280",
                        }}
                      >
                        Size
                      </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div
                        style={{
                          fontSize: "1rem",
                          fontWeight: "700",
                          color: "#f97316",
                        }}
                      >
                        {project.stats.duration}
                      </div>
                      <div
                        style={{
                          fontSize: "0.8rem",
                          color: "#6b7280",
                        }}
                      >
                        Duration
                      </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div
                        style={{
                          fontSize: "1rem",
                          fontWeight: "700",
                          color: "#f97316",
                        }}
                      >
                        {project.stats.type}
                      </div>
                      <div
                        style={{
                          fontSize: "0.8rem",
                          color: "#6b7280",
                        }}
                      >
                        Type
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        style={{
          padding: "6rem 2rem",
          background: "white",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "4rem",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(249, 115, 22, 0.1)",
                borderRadius: "50px",
                padding: "0.5rem 1rem",
                marginBottom: "1rem",
                border: "1px solid rgba(249, 115, 22, 0.2)",
              }}
            >
              <Target size={16} color="#f97316" />
              <span
                style={{
                  color: "#f97316",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Our Process
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: "800",
                marginBottom: "1rem",
                color: "#1f2937",
              }}
            >
              How We Bring Your Vision to Life
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#6b7280",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Our proven 4-step process ensures your construction project is
              completed on time, within budget, and exceeds your expectations.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                window.innerWidth >= 768 ? "repeat(4, 1fr)" : "1fr",
              gap: "2rem",
            }}
          >
            {process.map((step, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  textAlign: "center",
                  padding: "2rem 1rem",
                }}
              >
                {/* Connection Line */}
                {index < process.length - 1 && window.innerWidth >= 768 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "80px",
                      right: "-50%",
                      width: "100%",
                      height: "2px",
                      background: "linear-gradient(90deg, #f97316, #ea580c)",
                      zIndex: 0,
                    }}
                  ></div>
                )}

                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "linear-gradient(135deg, #f97316, #ea580c)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      margin: "0 auto 1rem",
                      fontSize: "1.5rem",
                      fontWeight: "800",
                      boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)",
                    }}
                  >
                    {step.step}
                  </div>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "rgba(249, 115, 22, 0.1)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#f97316",
                      margin: "0 auto 1.5rem",
                      border: "2px solid rgba(249, 115, 22, 0.2)",
                    }}
                  >
                    {step.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "700",
                      marginBottom: "1rem",
                      color: "#1f2937",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      color: "#6b7280",
                      lineHeight: "1.6",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        style={{
          padding: "6rem 2rem",
          background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
          color: "white",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: 'url("/construction-pattern.png")',
            opacity: 0.1,
          }}
        ></div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "4rem",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: "800",
                marginBottom: "1rem",
              }}
            >
              Numbers That Speak for Themselves
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                opacity: 0.9,
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Our track record of success is built on years of experience,
              satisfied clients, and exceptional project delivery.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "3rem",
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  padding: "2rem",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.transform = "translateY(0)")
                }
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem",
                  }}
                >
                  {stat.icon}
                </div>
                <div
                  style={{
                    fontSize: "3rem",
                    fontWeight: "800",
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    opacity: 0.9,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        style={{
          padding: "6rem 2rem",
          background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "4rem",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(249, 115, 22, 0.1)",
                borderRadius: "50px",
                padding: "0.5rem 1rem",
                marginBottom: "1rem",
                border: "1px solid rgba(249, 115, 22, 0.2)",
              }}
            >
              <Users size={16} color="#f97316" />
              <span
                style={{
                  color: "#f97316",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Client Testimonials
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: "800",
                marginBottom: "1rem",
                color: "#1f2937",
              }}
            >
              What Our Clients Say About Us
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#6b7280",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Don't just take our word for it. Here's what our satisfied clients
              have to say about working with Premier Construction.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "2.5rem",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-5px)";
                  e.target.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "0.25rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} color="#fbbf24" fill="#fbbf24" />
                  ))}
                </div>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "#4b5563",
                    lineHeight: "1.7",
                    marginBottom: "2rem",
                    fontStyle: "italic",
                  }}
                >
                  "{testimonial.content}"
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    paddingTop: "1.5rem",
                    borderTop: "1px solid #f3f4f6",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "linear-gradient(135deg, #f97316, #ea580c)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: "700",
                      fontSize: "1.2rem",
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: "700",
                        color: "#1f2937",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        color: "#6b7280",
                      }}
                    >
                      {testimonial.title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        color: "#f97316",
                        marginTop: "0.25rem",
                      }}
                    >
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: "6rem 2rem",
          background: "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "4rem",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: "800",
                marginBottom: "1rem",
              }}
            >
              Ready to Start Your Construction Project?
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                opacity: 0.9,
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Get in touch with our expert team today for a free consultation
              and quote. Let's turn your construction dreams into reality.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: window.innerWidth >= 768 ? "1fr 1fr" : "1fr",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* Contact Info */}
            <div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "2rem",
                }}
              >
                Get in Touch
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {[
                  {
                    icon: <Phone size={24} />,
                    title: "Phone",
                    value: "+1 (555) 123-4567",
                    href: "tel:+15551234567",
                  },
                  {
                    icon: <Mail size={24} />,
                    title: "Email",
                    value: "info@premierbuild.com",
                    href: "mailto:info@premierbuild.com",
                  },
                  {
                    icon: <MapPin size={24} />,
                    title: "Address",
                    value: "123 Construction Ave, Builder City, BC 12345",
                    href: "#",
                  },
                ].map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1.5rem",
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      textDecoration: "none",
                      color: "white",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "rgba(249, 115, 22, 0.2)";
                      e.target.style.borderColor = "rgba(249, 115, 22, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "rgba(255, 255, 255, 0.1)";
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                    }}
                  >
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "linear-gradient(135deg, #f97316, #ea580c)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {contact.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontWeight: "700",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {contact.title}
                      </div>
                      <div
                        style={{
                          opacity: 0.9,
                        }}
                      >
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div
                style={{
                  marginTop: "2rem",
                  padding: "1.5rem",
                  background: "rgba(249, 115, 22, 0.1)",
                  borderRadius: "12px",
                  border: "1px solid rgba(249, 115, 22, 0.2)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1rem",
                  }}
                >
                  <Clock size={20} color="#f97316" />
                  <span style={{ fontWeight: "700" }}>Business Hours</span>
                </div>
                <div style={{ opacity: 0.9, lineHeight: "1.6" }}>
                  Monday - Friday: 7:00 AM - 6:00 PM
                  <br />
                  Saturday: 8:00 AM - 4:00 PM
                  <br />
                  Sunday: Emergency Calls Only
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                padding: "2.5rem",
                borderRadius: "20px",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "2rem",
                }}
              >
                Request a Free Quote
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <input
                    type="text"
                    placeholder="First Name"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "8px",
                      padding: "1rem",
                      color: "white",
                      fontSize: "1rem",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "8px",
                      padding: "1rem",
                      color: "white",
                      fontSize: "1rem",
                    }}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    padding: "1rem",
                    color: "white",
                    fontSize: "1rem",
                  }}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    padding: "1rem",
                    color: "white",
                    fontSize: "1rem",
                  }}
                />
                <select
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    padding: "1rem",
                    color: "white",
                    fontSize: "1rem",
                  }}
                >
                  <option value="">Select Project Type</option>
                  <option value="residential">Residential Construction</option>
                  <option value="commercial">Commercial Construction</option>
                  <option value="industrial">Industrial Construction</option>
                  <option value="renovation">Renovation & Remodeling</option>
                </select>
                <textarea
                  placeholder="Tell us about your project..."
                  rows="4"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "8px",
                    padding: "1rem",
                    color: "white",
                    fontSize: "1rem",
                    resize: "vertical",
                  }}
                ></textarea>
                <button
                  style={{
                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                    color: "white",
                    border: "none",
                    padding: "1.25rem 2rem",
                    borderRadius: "50px",
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    transition: "all 0.3s ease",
                    boxShadow: "0 8px 25px rgba(249, 115, 22, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0 12px 35px rgba(249, 115, 22, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow =
                      "0 8px 25px rgba(249, 115, 22, 0.3)";
                  }}
                >
                  Send Message
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#111827",
          color: "white",
          padding: "3rem 2rem 1rem",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                window.innerWidth >= 768 ? "repeat(4, 1fr)" : "1fr",
              gap: "2rem",
              marginBottom: "2rem",
            }}
          >
            {/* Company Info */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <Building2 size={20} />
                </div>
                <span
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "800",
                  }}
                >
                  Premier<span style={{ color: "#f97316" }}>Build</span>
                </span>
              </div>
              <p
                style={{
                  opacity: 0.8,
                  lineHeight: "1.6",
                  marginBottom: "1rem",
                }}
              >
                Building excellence for over 25 years. Your trusted partner for
                all construction needs.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                }}
              >
                {["Licensed", "Insured", "Bonded"].map((badge) => (
                  <span
                    key={badge}
                    style={{
                      background: "rgba(249, 115, 22, 0.2)",
                      color: "#f97316",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "12px",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4
                style={{
                  fontWeight: "700",
                  marginBottom: "1rem",
                }}
              >
                Services
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {[
                  "Residential Construction",
                  "Commercial Buildings",
                  "Industrial Projects",
                  "Renovations",
                ].map((service) => (
                  <li key={service} style={{ marginBottom: "0.5rem" }}>
                    <a
                      href="#"
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#f97316")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                      }
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                style={{
                  fontWeight: "700",
                  marginBottom: "1rem",
                }}
              >
                Quick Links
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {[
                  "About Us",
                  "Our Projects",
                  "Safety Standards",
                  "Careers",
                ].map((link) => (
                  <li key={link} style={{ marginBottom: "0.5rem" }}>
                    <a
                      href="#"
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#f97316")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                      }
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4
                style={{
                  fontWeight: "700",
                  marginBottom: "1rem",
                }}
              >
                Contact Info
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  opacity: 0.8,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Phone size={16} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Mail size={16} />
                  <span>info@premierbuild.com</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <MapPin size={16} />
                  <span>
                    123 Construction Ave
                    <br />
                    Builder City, BC 12345
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              textAlign: "center",
              opacity: 0.8,
            }}
          >
            <p>
              © 2024 Premier Construction. All rights reserved. | Licensed •
              Insured • Bonded
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ConstructionLanding;