import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Play,
  Star,
  Award,
  Users,
  BookOpen,
  GraduationCap,
  Brain,
  Globe,
  Microscope,
  Building,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Clock,
  TrendingUp,
  Shield,
  Zap,
  Target,
  Eye,
  Camera,
  Video,
  Wifi,
  Coffee,
  Car,
  Home,
  Laptop,
  MessageSquare,
  Search,
  Filter,
  Plus,
  CheckCircle,
  ArrowUp,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const UniversityLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProgram, setActiveProgram] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const programs = [
    {
      name: "Computer Science & AI",
      description:
        "Leading-edge programs in artificial intelligence, machine learning, and software development.",
      duration: "4 years",
      degree: "Bachelor of Science",
      features: [
        "AI Research Labs",
        "Industry Partnerships",
        "Internship Programs",
      ],
      color: "#1e40af",
    },
    {
      name: "Biomedical Engineering",
      description:
        "Innovative healthcare solutions through engineering principles and medical technology.",
      duration: "4 years",
      degree: "Bachelor of Engineering",
      features: [
        "Medical Device Labs",
        "Hospital Partnerships",
        "Research Opportunities",
      ],
      color: "#3b82f6",
    },
    {
      name: "Business Administration",
      description:
        "Comprehensive business education with focus on entrepreneurship and global markets.",
      duration: "4 years",
      degree: "Bachelor of Business",
      features: ["Startup Incubator", "Global Exchange", "Industry Mentorship"],
      color: "#60a5fa",
    },
    {
      name: "Sustainable Energy",
      description:
        "Advanced studies in renewable energy, environmental science, and green technology.",
      duration: "4 years",
      degree: "Bachelor of Science",
      features: [
        "Green Tech Labs",
        "Field Research",
        "Sustainability Projects",
      ],
      color: "#93c5fd",
    },
  ];

  const stats = [
    { number: "25,000+", label: "Students Enrolled", icon: Users },
    { number: "1,200+", label: "Faculty Members", icon: GraduationCap },
    { number: "150+", label: "Academic Programs", icon: BookOpen },
    { number: "95%", label: "Graduate Employment", icon: TrendingUp },
  ];

  const facilities = [
    {
      name: "Advanced Research Centers",
      description:
        "State-of-the-art facilities for cutting-edge research in AI, biotechnology, and quantum computing.",
      image: "/research-center.jpg",
      features: [
        "AI Computing Cluster",
        "Biotech Labs",
        "Quantum Research",
        "Innovation Hub",
      ],
    },
    {
      name: "Smart Campus Technology",
      description:
        "Fully connected campus with IoT sensors, smart classrooms, and digital learning platforms.",
      image: "/smart-campus.jpg",
      features: [
        "IoT Infrastructure",
        "Smart Classrooms",
        "Digital Libraries",
        "Virtual Reality Labs",
      ],
    },
    {
      name: "Sustainable Campus",
      description:
        "Eco-friendly campus design with renewable energy, green buildings, and zero-waste initiatives.",
      image: "/sustainable-campus.jpg",
      features: [
        "Solar Power Grid",
        "Green Buildings",
        "Carbon Neutral",
        "Recycling Programs",
      ],
    },
  ];

  const newsItems = [
    {
      title: "University Ranks #1 in AI Research Innovation",
      excerpt:
        "Our Computer Science department achieves top ranking in artificial intelligence research worldwide.",
      date: "2024-03-15",
      category: "Research",
      image: "/news-ai.jpg",
    },
    {
      title: "New $50M Biomedical Research Center Opens",
      excerpt:
        "State-of-the-art facility will advance medical technology and healthcare innovation.",
      date: "2024-03-10",
      category: "Campus",
      image: "/news-biomedical.jpg",
    },
    {
      title: "Students Win International Sustainability Challenge",
      excerpt:
        "Team develops breakthrough renewable energy solution, earning global recognition.",
      date: "2024-03-05",
      category: "Achievement",
      image: "/news-sustainability.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      title: "AI Research Director",
      message:
        "Our university provides the perfect environment for groundbreaking research and innovation.",
      image: "/faculty-sarah.jpg",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      title: "Computer Science Graduate",
      message:
        "The program prepared me exceptionally well for my career at a leading tech company.",
      image: "/student-marcus.jpg",
      rating: 5,
    },
    {
      name: "Dr. Emily Johnson",
      title: "Biomedical Engineering Professor",
      message:
        "The research facilities and collaboration opportunities here are world-class.",
      image: "/faculty-emily.jpg",
      rating: 5,
    },
  ];

  const navigationItems = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Campus", href: "#campus" },
    { name: "Research", href: "#research" },
    { name: "Admissions", href: "#admissions" },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
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
          borderBottom: "1px solid rgba(30, 64, 175, 0.1)",
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
                background: "linear-gradient(135deg, #1e40af, #3b82f6)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              <GraduationCap size={24} />
            </div>
            <div>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "800",
                  color: "#1f2937",
                }}
              >
                SoftRanch
              </span>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "#6b7280",
                  fontWeight: "500",
                }}
              >
                University
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div
            style={{
              display: window.innerWidth >= 768 ? "flex" : "none",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  color: "#4b5563",
                  textDecoration: "none",
                  fontWeight: "600",
                  padding: "0.5rem 0",
                  transition: "color 0.3s ease",
                  position: "relative",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#1e40af")}
                onMouseLeave={(e) => (e.target.style.color = "#4b5563")}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <a
              href="#admissions"
              style={{
                display: window.innerWidth >= 768 ? "flex" : "none",
                alignItems: "center",
                gap: "0.5rem",
                background: "linear-gradient(135deg, #1e40af, #3b82f6)",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: "600",
                transition: "transform 0.3s ease",
                boxShadow: "0 4px 15px rgba(30, 64, 175, 0.3)",
              }}
              onMouseEnter={(e) =>
                (e.target.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
            >
              Apply Now
              <ArrowRight size={18} />
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
                border: "2px solid #1e40af",
                borderRadius: "8px",
                color: "#1e40af",
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
              borderTop: "1px solid rgba(30, 64, 175, 0.1)",
              padding: "1rem 2rem",
            }}
          >
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
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
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, rgba(30, 64, 175, 0.05) 0%, rgba(59, 130, 246, 0.08) 100%)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          paddingTop: "100px",
          overflow: "hidden",
        }}
      >
        {/* Background Elements */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "-10%",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(30, 64, 175, 0.1), transparent)",
            borderRadius: "50%",
            filter: "blur(100px)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "-10%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.08), transparent)",
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
                background: "rgba(30, 64, 175, 0.1)",
                borderRadius: "50px",
                padding: "0.5rem 1rem",
                marginBottom: "2rem",
                border: "1px solid rgba(30, 64, 175, 0.2)",
              }}
            >
              <Award size={16} color="#1e40af" />
              <span
                style={{
                  color: "#1e40af",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Ranked #1 Innovation University 2024
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(3rem, 8vw, 5rem)",
                fontWeight: "900",
                lineHeight: "1.1",
                marginBottom: "1.5rem",
                background: "linear-gradient(135deg, #1f2937, #1e40af)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Future Starts
              <span style={{ display: "block", color: "#1e40af" }}>
                Here & Now
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
              Experience world-class education with cutting-edge technology,
              innovative research, and a sustainable future-focused curriculum
              that prepares you for tomorrow's challenges.
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
                  background: "linear-gradient(135deg, #1e40af, #3b82f6)",
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
                  boxShadow: "0 8px 25px rgba(30, 64, 175, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow =
                    "0 12px 35px rgba(30, 64, 175, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow =
                    "0 8px 25px rgba(30, 64, 175, 0.3)";
                }}
              >
                Explore Programs
                <ArrowRight size={20} />
              </button>

              <button
                style={{
                  background: "rgba(30, 64, 175, 0.1)",
                  color: "#1e40af",
                  border: "2px solid rgba(30, 64, 175, 0.3)",
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
                  e.target.style.background = "rgba(30, 64, 175, 0.15)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(30, 64, 175, 0.1)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <Play size={20} />
                Virtual Tour
              </button>
            </div>

            {/* Quick Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "2rem",
              }}
            >
              {[
                { number: "25,000+", label: "Students" },
                { number: "150+", label: "Programs" },
                { number: "95%", label: "Employment" },
                { number: "#1", label: "Innovation" },
              ].map((stat, index) => (
                <div key={index} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "800",
                      color: "#1e40af",
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

          {/* Hero Visual */}
          <div
            style={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 25px 50px rgba(30, 64, 175, 0.2)",
              background: "linear-gradient(135deg, #1e40af, #3b82f6)",
              minHeight: "600px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                textAlign: "center",
                color: "white",
                padding: "3rem",
              }}
            >
              <Brain size={80} style={{ marginBottom: "2rem", opacity: 0.9 }} />
              <h3
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
              >
                AI-Powered Learning
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  opacity: 0.9,
                  lineHeight: "1.6",
                }}
              >
                Experience personalized education with advanced artificial
                intelligence, adaptive learning systems, and immersive virtual
                reality classrooms.
              </p>
            </div>

            {/* Floating Elements */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "60px",
                height: "60px",
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "float 6s ease-in-out infinite",
              }}
            >
              <Microscope size={24} color="white" />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                width: "60px",
                height: "60px",
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "float 6s ease-in-out infinite 2s",
              }}
            >
              <Globe size={24} color="white" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
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
                background: "rgba(30, 64, 175, 0.1)",
                borderRadius: "50px",
                padding: "0.5rem 1rem",
                marginBottom: "1rem",
                border: "1px solid rgba(30, 64, 175, 0.2)",
              }}
            >
              <Target size={16} color="#1e40af" />
              <span
                style={{
                  color: "#1e40af",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                About SoftRanch University
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
              Pioneering the Future of Education
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#6b7280",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              For over 50 years, we've been at the forefront of educational
              innovation, combining traditional academic excellence with
              cutting-edge technology to prepare students for the challenges of
              tomorrow.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              marginBottom: "4rem",
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(30, 64, 175, 0.05), rgba(59, 130, 246, 0.02))",
                  border: "1px solid rgba(30, 64, 175, 0.1)",
                  borderRadius: "20px",
                  padding: "2.5rem",
                  textAlign: "center",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-10px)";
                  e.target.style.boxShadow =
                    "0 25px 50px rgba(30, 64, 175, 0.15)";
                  e.target.style.borderColor = "rgba(30, 64, 175, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                  e.target.style.borderColor = "rgba(30, 64, 175, 0.1)";
                }}
              >
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(135deg, #1e40af, #3b82f6)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    marginBottom: "1.5rem",
                    margin: "0 auto 1.5rem",
                    boxShadow: "0 8px 25px rgba(30, 64, 175, 0.3)",
                  }}
                >
                  <stat.icon size={32} />
                </div>
                <h3
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "800",
                    marginBottom: "0.5rem",
                    color: "#1e40af",
                  }}
                >
                  {stat.number}
                </h3>
                <p
                  style={{
                    color: "#6b7280",
                    fontWeight: "600",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              background: "linear-gradient(135deg, #1e40af, #3b82f6)",
              borderRadius: "20px",
              padding: "3rem",
              color: "white",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Join the Innovation Revolution
            </h3>
            <p
              style={{
                fontSize: "1.1rem",
                opacity: 0.9,
                marginBottom: "2rem",
                maxWidth: "600px",
                margin: "0 auto 2rem",
              }}
            >
              Be part of a community that's shaping the future through
              groundbreaking research, sustainable practices, and transformative
              education.
            </p>
            <button
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                color: "white",
                padding: "1rem 2rem",
                borderRadius: "50px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.3)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.2)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Learn More About Us
            </button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section
        id="programs"
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
                background: "rgba(30, 64, 175, 0.1)",
                borderRadius: "50px",
                padding: "0.5rem 1rem",
                marginBottom: "1rem",
                border: "1px solid rgba(30, 64, 175, 0.2)",
              }}
            >
              <BookOpen size={16} color="#1e40af" />
              <span
                style={{
                  color: "#1e40af",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Academic Programs
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
              Future-Ready Degree Programs
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#6b7280",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Discover innovative programs designed to prepare you for the
              careers of tomorrow with hands-on experience and industry
              partnerships.
            </p>
          </div>

          {/* Program Tabs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "3rem",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            {programs.map((program, index) => (
              <button
                key={index}
                onClick={() => setActiveProgram(index)}
                style={{
                  padding: "0.75rem 1.5rem",
                  background: activeProgram === index ? program.color : "white",
                  color: activeProgram === index ? "white" : "#6b7280",
                  border: `2px solid ${
                    activeProgram === index ? program.color : "#e5e7eb"
                  }`,
                  borderRadius: "50px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {program.name}
              </button>
            ))}
          </div>

          {/* Active Program Details */}
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "3rem",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              border: "1px solid #e5e7eb",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  window.innerWidth >= 768 ? "1fr 1fr" : "1fr",
                gap: "3rem",
                alignItems: "center",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: programs[activeProgram].color,
                    marginBottom: "1rem",
                  }}
                >
                  {programs[activeProgram].name}
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "#6b7280",
                    marginBottom: "2rem",
                    lineHeight: "1.7",
                  }}
                >
                  {programs[activeProgram].description}
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "2rem",
                  }}
                >
                  <div
                    style={{
                      padding: "1rem",
                      background: `${programs[activeProgram].color}10`,
                      borderRadius: "12px",
                      border: `1px solid ${programs[activeProgram].color}20`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: programs[activeProgram].color,
                        fontWeight: "600",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Duration
                    </div>
                    <div
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                        color: "#1f2937",
                      }}
                    >
                      {programs[activeProgram].duration}
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "1rem",
                      background: `${programs[activeProgram].color}10`,
                      borderRadius: "12px",
                      border: `1px solid ${programs[activeProgram].color}20`,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: programs[activeProgram].color,
                        fontWeight: "600",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Degree
                    </div>
                    <div
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                        color: "#1f2937",
                      }}
                    >
                      {programs[activeProgram].degree}
                    </div>
                  </div>
                </div>

                <button
                  style={{
                    background: `linear-gradient(135deg, ${programs[activeProgram].color}, #3b82f6)`,
                    color: "white",
                    border: "none",
                    padding: "1rem 2rem",
                    borderRadius: "50px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "translateY(-2px)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.transform = "translateY(0)")
                  }
                >
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>

              <div>
                <h4
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "#1f2937",
                    marginBottom: "1rem",
                  }}
                >
                  Program Features
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {programs[activeProgram].features.map((feature, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "1rem",
                        background: "#f9fafb",
                        borderRadius: "12px",
                        border: "1px solid #e5e7eb",
                      }}
                    >
                      <CheckCircle size={20} color="#10b981" />
                      <span
                        style={{
                          fontSize: "1rem",
                          color: "#1f2937",
                          fontWeight: "500",
                        }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities Section */}
      <section
        id="campus"
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
                background: "rgba(30, 64, 175, 0.1)",
                borderRadius: "50px",
                padding: "0.5rem 1rem",
                marginBottom: "1rem",
                border: "1px solid rgba(30, 64, 175, 0.2)",
              }}
            >
              <Building size={16} color="#1e40af" />
              <span
                style={{
                  color: "#1e40af",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Campus Facilities
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
              World-Class Smart Campus
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#6b7280",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Experience learning in a state-of-the-art environment with
              cutting-edge technology, sustainable design, and innovative
              research facilities.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
            }}
          >
            {facilities.map((facility, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid #e5e7eb",
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
                    height: "250px",
                    background: `linear-gradient(135deg, ${
                      index === 0
                        ? "#1e40af"
                        : index === 1
                        ? "#3b82f6"
                        : "#60a5fa"
                    }, #93c5fd)`,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    {index === 0 && <Microscope size={60} />}
                    {index === 1 && <Laptop size={60} />}
                    {index === 2 && <Globe size={60} />}
                    <h4
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        marginTop: "1rem",
                      }}
                    >
                      {facility.name}
                    </h4>
                  </div>
                </div>

                <div style={{ padding: "2rem" }}>
                  <p
                    style={{
                      color: "#6b7280",
                      marginBottom: "1.5rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {facility.description}
                  </p>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0.5rem",
                    }}
                  >
                    {facility.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          fontSize: "0.9rem",
                          color: "#4b5563",
                        }}
                      >
                        <CheckCircle size={14} color="#10b981" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section
        id="research"
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
                  background: "rgba(30, 64, 175, 0.1)",
                  borderRadius: "50px",
                  padding: "0.5rem 1rem",
                  marginBottom: "1rem",
                  border: "1px solid rgba(30, 64, 175, 0.2)",
                }}
              >
                <Brain size={16} color="#1e40af" />
                <span
                  style={{
                    color: "#1e40af",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                  }}
                >
                  Research Excellence
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
                Breakthrough Research & Innovation
              </h2>

              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#6b7280",
                  marginBottom: "2rem",
                  lineHeight: "1.7",
                }}
              >
                Our world-renowned research centers are advancing knowledge in
                AI, biotechnology, sustainable energy, and quantum computing,
                with over $500M in active research funding.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                {[
                  {
                    number: "500+",
                    label: "Research Projects",
                    icon: Microscope,
                  },
                  {
                    number: "$500M",
                    label: "Active Funding",
                    icon: TrendingUp,
                  },
                  {
                    number: "150+",
                    label: "Publications/Year",
                    icon: BookOpen,
                  },
                  { number: "50+", label: "Patent Applications", icon: Award },
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "1.5rem",
                      background: "white",
                      borderRadius: "12px",
                      border: "1px solid #e5e7eb",
                      textAlign: "center",
                    }}
                  >
                    <item.icon
                      size={24}
                      color="#1e40af"
                      style={{ marginBottom: "0.5rem" }}
                    />
                    <div
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#1e40af",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {item.number}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "#6b7280",
                        fontWeight: "500",
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <button
                style={{
                  background: "linear-gradient(135deg, #1e40af, #3b82f6)",
                  color: "white",
                  border: "none",
                  padding: "1rem 2rem",
                  borderRadius: "50px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.transform = "translateY(-2px)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.transform = "translateY(0)")
                }
              >
                Explore Research Centers
                <ArrowRight size={18} />
              </button>
            </div>

            <div
              style={{
                background: "linear-gradient(135deg, #1e40af, #3b82f6)",
                borderRadius: "20px",
                padding: "3rem",
                color: "white",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-50px",
                  right: "-50px",
                  width: "200px",
                  height: "200px",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  filter: "blur(40px)",
                }}
              ></div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <h3
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                  }}
                >
                  Leading Innovation
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    opacity: 0.9,
                    marginBottom: "2rem",
                    lineHeight: "1.6",
                  }}
                >
                  Our interdisciplinary approach to research addresses global
                  challenges and creates solutions that benefit humanity. Join
                  us in shaping tomorrow.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {[
                    "AI & Machine Learning Research",
                    "Sustainable Technology Development",
                    "Biomedical Engineering Innovation",
                    "Quantum Computing Advancement",
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                      }}
                    >
                      <CheckCircle size={18} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section
        id="admissions"
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
                background: "rgba(30, 64, 175, 0.1)",
                borderRadius: "50px",
                padding: "0.5rem 1rem",
                marginBottom: "1rem",
                border: "1px solid rgba(30, 64, 175, 0.2)",
              }}
            >
              <GraduationCap size={16} color="#1e40af" />
              <span
                style={{
                  color: "#1e40af",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Admissions
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
              Start Your Journey Today
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#6b7280",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Join our community of innovators, researchers, and future leaders.
              Your path to excellence starts here.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: window.innerWidth >= 768 ? "1fr 1fr" : "1fr",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Application Process */}
            <div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                  marginBottom: "2rem",
                }}
              >
                Application Process
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
                    step: "1",
                    title: "Online Application",
                    description:
                      "Complete our comprehensive online application form",
                  },
                  {
                    step: "2",
                    title: "Submit Documents",
                    description:
                      "Upload transcripts, essays, and recommendation letters",
                  },
                  {
                    step: "3",
                    title: "Interview Process",
                    description:
                      "Participate in our virtual or in-person interview",
                  },
                  {
                    step: "4",
                    title: "Admission Decision",
                    description:
                      "Receive your admission decision within 4-6 weeks",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      padding: "1.5rem",
                      background: "#f9fafb",
                      borderRadius: "12px",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "linear-gradient(135deg, #1e40af, #3b82f6)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontWeight: "bold",
                        flexShrink: 0,
                      }}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          color: "#1f2937",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "0.95rem",
                          color: "#6b7280",
                          margin: 0,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Apply */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 64, 175, 0.05), rgba(59, 130, 246, 0.02))",
                border: "1px solid rgba(30, 64, 175, 0.1)",
                borderRadius: "20px",
                padding: "2.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                  marginBottom: "1rem",
                }}
              >
                Quick Apply
              </h3>
              <p
                style={{
                  color: "#6b7280",
                  marginBottom: "2rem",
                }}
              >
                Get started with your application today. It only takes a few
                minutes to begin.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  style={{
                    padding: "1rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    fontSize: "1rem",
                  }}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  style={{
                    padding: "1rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    fontSize: "1rem",
                  }}
                />
                <select
                  style={{
                    padding: "1rem",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    fontSize: "1rem",
                  }}
                >
                  <option>Select Program Interest</option>
                  <option>Computer Science & AI</option>
                  <option>Biomedical Engineering</option>
                  <option>Business Administration</option>
                  <option>Sustainable Energy</option>
                </select>
              </div>

              <button
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, #1e40af, #3b82f6)",
                  color: "white",
                  border: "none",
                  padding: "1rem 2rem",
                  borderRadius: "50px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.transform = "translateY(-2px)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.transform = "translateY(0)")
                }
              >
                Start Application
                <ArrowRight size={18} />
              </button>

              <div
                style={{
                  marginTop: "1.5rem",
                  padding: "1rem",
                  background: "rgba(16, 185, 129, 0.1)",
                  borderRadius: "8px",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <CheckCircle size={16} color="#10b981" />
                  <span
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      color: "#065f46",
                    }}
                  >
                    Application Fee Waived
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#047857",
                    margin: 0,
                  }}
                >
                  Apply now and save $75 on your application fee for the Spring
                  2025 semester.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section
        id="news"
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
                background: "rgba(30, 64, 175, 0.1)",
                borderRadius: "50px",
                padding: "0.5rem 1rem",
                marginBottom: "1rem",
                border: "1px solid rgba(30, 64, 175, 0.2)",
              }}
            >
              <Calendar size={16} color="#1e40af" />
              <span
                style={{
                  color: "#1e40af",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Latest News
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
              University News & Updates
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#6b7280",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Stay informed with the latest achievements, research
              breakthroughs, and campus developments.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
            }}
          >
            {newsItems.map((news, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                  border: "1px solid #e5e7eb",
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
                    height: "250px",
                    background: `linear-gradient(135deg, ${
                      index === 0
                        ? "#1e40af"
                        : index === 1
                        ? "#3b82f6"
                        : "#60a5fa"
                    }, #93c5fd)`,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    {index === 0 && <Brain size={60} />}
                    {index === 1 && <Building size={60} />}
                    {index === 2 && <Award size={60} />}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      background: "rgba(255, 255, 255, 0.2)",
                      color: "white",
                      padding: "0.5rem 1rem",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                    }}
                  >
                    {news.category}
                  </div>
                </div>

                <div style={{ padding: "2rem" }}>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#6b7280",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {new Date(news.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>

                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      color: "#1f2937",
                      marginBottom: "1rem",
                      lineHeight: "1.4",
                    }}
                  >
                    {news.title}
                  </h3>

                  <p
                    style={{
                      color: "#6b7280",
                      marginBottom: "1.5rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {news.excerpt}
                  </p>

                  <button
                    style={{
                      background: "transparent",
                      color: "#1e40af",
                      border: "none",
                      padding: "0",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Read More
                    <ArrowRight size={16} />
                  </button>
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
                background: "rgba(30, 64, 175, 0.1)",
                borderRadius: "50px",
                padding: "0.5rem 1rem",
                marginBottom: "1rem",
                border: "1px solid rgba(30, 64, 175, 0.2)",
              }}
            >
              <Users size={16} color="#1e40af" />
              <span
                style={{
                  color: "#1e40af",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                }}
              >
                Testimonials
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
              What Our Community Says
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#6b7280",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Hear from our students, faculty, and alumni about their
              experiences at SoftRanch University.
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
                  border: "1px solid #e5e7eb",
                  transition: "all 0.3s ease",
                  position: "relative",
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
                  "{testimonial.message}"
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "linear-gradient(135deg, #1e40af, #3b82f6)",
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
          background: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
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
              Ready to Start Your Journey?
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                opacity: 0.9,
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Contact our admissions team to learn more about programs, campus
              life, and how to join our innovative community.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                window.innerWidth >= 768 ? "repeat(3, 1fr)" : "1fr",
              gap: "2rem",
              marginBottom: "3rem",
            }}
          >
            {[
              {
                icon: Phone,
                title: "Call Us",
                value: "+1 (555) 123-4567",
                description: "Monday - Friday, 9 AM - 5 PM",
              },
              {
                icon: Mail,
                title: "Email Us",
                value: "admissions@softranch.edu",
                description: "We respond within 24 hours",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                value: "123 Innovation Drive",
                description: "Tech Valley Campus, CA 94025",
              },
            ].map((contact, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  padding: "2rem",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.2)";
                  e.target.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.1)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <contact.icon size={32} style={{ marginBottom: "1rem" }} />
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                  }}
                >
                  {contact.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                >
                  {contact.value}
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    opacity: 0.8,
                  }}
                >
                  {contact.description}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              textAlign: "center",
            }}
          >
            <button
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                color: "white",
                padding: "1rem 2rem",
                borderRadius: "50px",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "all 0.3s ease",
                marginRight: "1rem",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.3)";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.2)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Schedule Campus Tour
              <Calendar size={20} />
            </button>

            <button
              style={{
                background: "white",
                color: "#1e40af",
                border: "none",
                padding: "1rem 2rem",
                borderRadius: "50px",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              Apply Now
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#1f2937",
          color: "white",
          padding: "4rem 2rem 2rem",
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
              gap: "3rem",
              marginBottom: "3rem",
            }}
          >
            {/* University Info */}
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
                    background: "linear-gradient(135deg, #1e40af, #3b82f6)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <GraduationCap size={20} />
                </div>
                <div>
                  <span
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "800",
                    }}
                  >
                    SoftRanch
                  </span>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      opacity: 0.8,
                    }}
                  >
                    University
                  </div>
                </div>
              </div>
              <p
                style={{
                  opacity: 0.8,
                  lineHeight: "1.6",
                  marginBottom: "1rem",
                }}
              >
                Pioneering the future of education through innovation, research
                excellence, and transformative learning experiences.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                {[Facebook, Twitter, Instagram, Linkedin, Youtube].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "rgba(30, 64, 175, 0.8)";
                        e.target.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.1)";
                        e.target.style.transform = "translateY(0)";
                      }}
                    >
                      <Icon size={18} />
                    </a>
                  )
                )}
              </div>
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
                  "About University",
                  "Academic Programs",
                  "Admissions",
                  "Research Centers",
                  "Campus Life",
                ].map((link) => (
                  <li key={link} style={{ marginBottom: "0.5rem" }}>
                    <a
                      href="#"
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#3b82f6")}
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

            {/* Programs */}
            <div>
              <h4
                style={{
                  fontWeight: "700",
                  marginBottom: "1rem",
                }}
              >
                Programs
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {[
                  "Computer Science",
                  "Engineering",
                  "Business",
                  "Medicine",
                  "Research",
                ].map((program) => (
                  <li key={program} style={{ marginBottom: "0.5rem" }}>
                    <a
                      href="#"
                      style={{
                        color: "rgba(255, 255, 255, 0.8)",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#3b82f6")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                      }
                    >
                      {program}
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
                  <span>info@softranch.edu</span>
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
                    123 Innovation Drive
                    <br />
                    Tech Valley, CA 94025
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <p
              style={{
                opacity: 0.8,
                margin: 0,
              }}
            >
              © 2024 SoftRanch University. All rights reserved.
            </p>
            <p
              style={{
                opacity: 0.6,
                margin: 0,
                fontSize: "0.9rem",
              }}
            >
              Powered by SoftRanch
            </p>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default UniversityLanding;
