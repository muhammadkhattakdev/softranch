import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  GraduationCap,
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
  BookOpen,
  Monitor,
  Brain,
  Database,
} from "lucide-react";
import "./style.css";
import img1 from "../../../../static/featured_services_images/education_dashboard.png";
import img2 from "../../../../static/featured_services_images/university_landing_page.png";

const EducationServices = () => {
  const features = [
    {
      icon: <Monitor size={32} />,
      title: "Learning Management System (LMS) Integration",
      description:
        "Advanced LMS platforms with AI-powered personalized learning, course management, automated grading, and seamless integration with existing school systems.",
    },
    {
      icon: <Database size={32} />,
      title: "Student Information System (SIS)",
      description:
        "Comprehensive student data management with enrollment tracking, grade reporting, attendance monitoring, and automated parent communication systems.",
    },
    {
      icon: <UserCheck size={32} />,
      title: "Parent & Student Portals",
      description:
        "Secure, user-friendly portals allowing parents and students to access grades, assignments, schedules, and communicate with teachers 24/7.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile-First Educational Design",
      description:
        "Responsive PWA (Progressive Web App) technology ensuring perfect functionality across all devices with offline learning capabilities.",
    },
    {
      icon: <Brain size={32} />,
      title: "AI-Powered Analytics & Insights",
      description:
        "Predictive analytics to identify at-risk students, personalized learning recommendations, and data-driven insights for educational improvement.",
    },
    {
      icon: <Shield size={32} />,
      title: "FERPA Compliance & Security",
      description:
        "Bank-level security with FERPA compliance, encrypted data transmission, secure authentication, and regular security audits for student data protection.",
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp size={24} />,
      title: "75% Increase in Student Engagement",
      description:
        "Interactive learning platforms and gamification features dramatically improve student participation and academic performance outcomes.",
    },
    {
      icon: <Clock size={24} />,
      title: "Reduce Administrative Workload by 60%",
      description:
        "Automated grading, attendance tracking, and parent communication systems free up valuable time for educators to focus on teaching.",
    },
    {
      icon: <Users size={24} />,
      title: "Enhanced Parent-Teacher Communication",
      description:
        "Real-time notifications, grade updates, and seamless communication portals improve parent engagement and student accountability.",
    },
    {
      icon: <Target size={24} />,
      title: "Improved Academic Outcomes",
      description:
        "Data-driven insights and personalized learning paths help identify learning gaps and improve overall student success rates by 40%.",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Principal, Lincoln Elementary School, California",
      text: "SoftRanch transformed our school's digital infrastructure. Parent engagement increased 200%, and our teachers save 10 hours per week on administrative tasks. The student portal is loved by both kids and parents.",
      rating: 5,
    },
    {
      name: "Prof. Michael Rodriguez",
      title: "IT Director, State University, Texas",
      text: "The LMS integration was seamless, and the analytics dashboard provides incredible insights into student performance. We've seen a 35% improvement in course completion rates since implementation.",
      rating: 5,
    },
  ];

  const servicePackages = [
    {
      title: "Essential Education",
      price: "Starting at $2,497",
      features: [
        "Professional Education Website",
        "Basic Student Portal",
        "Mobile-Responsive Design",
        "FERPA-Compliant Security",
        "Parent Communication System",
        "Basic Analytics Dashboard",
      ],
      popular: false,
    },
    {
      title: "Smart Campus",
      price: "Starting at $4,997",
      features: [
        "Everything in Essential Package",
        "Advanced LMS Integration",
        "Student Information System",
        "Automated Grading System",
        "AI-Powered Analytics",
        "Multi-Campus Management",
        "Third-Party App Integrations",
      ],
      popular: true,
    },
    {
      title: "Digital University",
      price: "Starting at $7,997",
      features: [
        "Everything in Smart Campus Package",
        "Custom Learning Pathways",
        "Advanced Virtual Classrooms",
        "Predictive Analytics Engine",
        "Alumni Management System",
        "Research & Publication Portal",
        "24/7 Priority Support",
      ],
      popular: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Education Website Development & Student Management Systems | Boost
          Engagement 75% | SoftRanch
        </title>
        <meta
          name="description"
          content="Transform your educational institution with cutting-edge website development, LMS integration, and student management systems. Increase student engagement by 75%, reduce admin workload by 60%. FERPA-compliant solutions for schools, colleges & universities."
        />
        <meta
          name="keywords"
          content="education website development, school website design, student management system, learning management system LMS, educational technology solutions, university website development, school portal development, student information system, education software development, academic website design"
        />
        <meta
          property="og:title"
          content="Education Website Development & Student Management Systems | SoftRanch"
        />
        <meta
          property="og:description"
          content="Boost student engagement by 75% with modern educational websites, LMS integration, and management systems. FERPA-compliant solutions for academic institutions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://softranch.agency/education-website-development-services"
        />
        <link
          rel="canonical"
          href="https://softranch.agency/education-website-development-services"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Education Website Development & Student Management Systems",
            description:
              "Comprehensive education technology solutions including website development, LMS integration, student management systems, and digital learning platforms for schools, colleges, and universities.",
            provider: {
              "@type": "Organization",
              name: "SoftRanch",
              url: "https://softranch.agency",
            },
            serviceType: "Education Technology Solutions",
            offers: {
              "@type": "Offer",
              priceRange: "$2,497 - $7,997",
            },
            audience: {
              "@type": "Audience",
              audienceType: [
                "Educational Institutions",
                "Schools",
                "Colleges",
                "Universities",
                "Training Centers",
              ],
            },
          })}
        </script>
      </Helmet>

      <div className="education-services-wrapper">
        {/* Hero Section */}
        <section className="education-hero">
          <div className="education-hero-bg"></div>
          <div className="education-glow-orb education-glow-orb-1"></div>
          <div className="education-glow-orb education-glow-orb-2"></div>

          <div className="education-container">
            <div className="education-hero-content">
              <div className="education-badge">
                <GraduationCap size={20} />
                <span>Education Excellence</span>
              </div>

              <h1 className="education-hero-title">
                Boost Student Engagement by
                <span className="education-gradient-text"> 75% with Smart</span>
                <br />
                Educational Technology
              </h1>

              <p className="education-hero-description">
                Transform your educational institution with cutting-edge
                websites, learning management systems, and student portals.
                Features include AI-powered analytics, automated grading, parent
                communication systems, and FERPA-compliant security that
                enhances learning outcomes and streamlines administration.
              </p>

              <div className="education-hero-stats">
                <div className="education-stat-item">
                  <span className="education-stat-number">75%</span>
                  <span className="education-stat-label">More Engagement</span>
                </div>
                <div className="education-stat-item">
                  <span className="education-stat-number">20+</span>
                  <span className="education-stat-label">Schools Served</span>
                </div>
                <div className="education-stat-item">
                  <span className="education-stat-number">100%</span>
                  <span className="education-stat-label">FERPA Compliant</span>
                </div>
              </div>

              <div className="education-hero-cta">
                <Link to="/contact" className="education-cta-primary">
                  Get Your Free Education Technology Audit
                  <ArrowRight size={20} />
                </Link>
                <Link to="/portfolio" className="education-cta-secondary">
                  View Education Success Stories
                </Link>
              </div>
            </div>

            <div className="education-hero-image">
              <img
                src={img1}
                alt="Modern education dashboard showing student management system with LMS integration and analytics"
              />
              <div className="education-image-overlay">
                <div className="education-overlay-stat">
                  <Brain size={24} />
                  <span>AI-Powered Learning</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="education-features">
          <div className="education-floating-glow education-floating-glow-1"></div>
          <div className="education-floating-glow education-floating-glow-2"></div>

          <div className="education-container">
            <div className="education-section-header">
              <h2 className="education-section-title">
                Complete Digital Ecosystem for Modern Education
              </h2>
              <p className="education-section-subtitle">
                From AI-powered learning management to student analytics, we
                provide the complete educational technology stack that
                transforms traditional institutions into digital-first learning
                environments.
              </p>
            </div>

            <div className="education-features-grid">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="education-feature-card"
                  data-index={index}
                >
                  <div className="education-feature-icon">{feature.icon}</div>
                  <h3 className="education-feature-title">{feature.title}</h3>
                  <p className="education-feature-description">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="education-benefits">
          <div className="education-container">
            <div className="education-benefits-content">
              <div className="education-benefits-text">
                <h2 className="education-section-title">
                  Why Educational Institutions Choose SoftRanch
                </h2>
                <p className="education-section-subtitle">
                  We understand the unique challenges of modern education. Our
                  solutions are specifically designed to enhance learning
                  outcomes, streamline administration, and prepare institutions
                  for the digital future of education.
                </p>

                <div className="education-benefits-list">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="education-benefit-item">
                      <div className="education-benefit-icon">
                        {benefit.icon}
                      </div>
                      <div className="education-benefit-content">
                        <h3 className="education-benefit-title">
                          {benefit.title}
                        </h3>
                        <p className="education-benefit-description">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="education-benefits-image">
                <img
                  src={img2}
                  alt="Students using tablets in modern classroom with digital learning tools and interactive displays"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="education-packages">
          <div className="education-packages-glow"></div>

          <div className="education-container">
            <div className="education-section-header">
              <h2 className="education-section-title">
                Choose Your Educational Technology Package
              </h2>
              <p className="education-section-subtitle">
                Transparent pricing designed to deliver maximum ROI for
                educational institutions
              </p>
            </div>

            <div className="education-packages-grid">
              {servicePackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`education-package-card ${
                    pkg.popular ? "education-package-popular" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="education-package-badge">Most Popular</div>
                  )}

                  <div className="education-package-header">
                    <h3 className="education-package-title">{pkg.title}</h3>
                    <div className="education-package-price">{pkg.price}</div>
                  </div>

                  <ul className="education-package-features">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="education-package-feature">
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="education-package-cta">
                    Get Started Today
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="education-testimonials">
          <div className="education-container">
            <div className="education-section-header">
              <h2 className="education-section-title">
                Success Stories from Educational Leaders
              </h2>
            </div>

            <div className="education-testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="education-testimonial-card">
                  <div className="education-testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="education-star-filled"
                      />
                    ))}
                  </div>
                  <p className="education-testimonial-text">
                    "{testimonial.text}"
                  </p>
                  <div className="education-testimonial-author">
                    <h4 className="education-author-name">
                      {testimonial.name}
                    </h4>
                    <p className="education-author-title">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="education-cta">
          <div className="education-cta-glow"></div>

          <div className="education-container">
            <div className="education-cta-content">
              <h2 className="education-cta-title">
                Ready to Transform Your Educational Institution?
              </h2>
              <p className="education-cta-description">
                Join 20+ successful schools, colleges, and universities who've
                dramatically improved student outcomes and streamlined
                operations with our cutting-edge educational technology
                solutions.
              </p>

              <div className="education-cta-buttons">
                <Link to="/contact" className="education-cta-primary">
                  Schedule Free Education Consultation
                  <Phone size={20} />
                </Link>
                <a
                  href="mailto:hello@softranch.agency"
                  className="education-cta-secondary"
                >
                  <Mail size={20} />
                  Email Us Directly
                </a>
              </div>

              <div className="education-cta-guarantee">
                <CheckCircle size={20} />
                <span>
                  30-day money-back guarantee • FERPA compliance included • Free
                  consultation
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EducationServices;
