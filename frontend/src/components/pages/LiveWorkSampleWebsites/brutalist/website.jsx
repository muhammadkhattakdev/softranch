import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import img1 from "../../../../static/content_writer.jpg";

const ContentWriterPortfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const observerRef = useRef(null);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active section tracking
  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: "-100px 0px",
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observerRef.current.observe(section);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Reveal animation on scroll
  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".brutalist-website-2__reveal-on-scroll"
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("brutalist-website-2__revealed");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      number: "01",
      title: "COPYWRITING",
      description:
        "Compelling copy that converts browsers into buyers. From sales pages to email campaigns.",
    },
    {
      number: "02",
      title: "CONTENT STRATEGY",
      description:
        "Strategic content planning that aligns with your business goals and audience needs.",
    },
    {
      number: "03",
      title: "BLOG WRITING",
      description:
        "Engaging blog posts that drive traffic, establish authority, and build communities.",
    },
    {
      number: "04",
      title: "TECHNICAL WRITING",
      description:
        "Clear, concise documentation that makes complex topics accessible to everyone.",
    },
  ];

  const portfolio = [
    {
      id: 1,
      title: "TECH STARTUP REBRAND",
      category: "COPYWRITING",
      client: "NEXUS AI",
      description:
        "Complete website copy overhaul resulting in 300% increase in conversions.",
      wordCount: "5,000 words",
      year: "2024",
    },
    {
      id: 2,
      title: "SUSTAINABILITY REPORT",
      category: "CONTENT STRATEGY",
      client: "GREEN CORP",
      description:
        "Comprehensive content strategy for environmental impact communications.",
      wordCount: "12,000 words",
      year: "2024",
    },
    {
      id: 3,
      title: "FINTECH BLOG SERIES",
      category: "BLOG WRITING",
      client: "CRYPTO DAILY",
      description:
        "20-part educational series on blockchain technology and digital assets.",
      wordCount: "25,000 words",
      year: "2023",
    },
    {
      id: 4,
      title: "API DOCUMENTATION",
      category: "TECHNICAL WRITING",
      client: "DEV TOOLS",
      description:
        "Developer-friendly API documentation with interactive examples.",
      wordCount: "8,000 words",
      year: "2023",
    },
  ];

  const testimonials = [
    {
      name: "SARAH CHEN",
      title: "MARKETING DIRECTOR",
      company: "TECH INNOVATIONS",
      quote:
        "Working with Alex transformed our content strategy. The clarity and impact of the writing exceeded all expectations.",
      rating: 5,
    },
    {
      name: "MICHAEL RODRIGUEZ",
      title: "FOUNDER",
      company: "STARTUP COLLECTIVE",
      quote:
        "Exceptional writer who understands both technical complexity and audience needs. Highly recommended.",
      rating: 5,
    },
    {
      name: "EMMA THOMPSON",
      title: "CEO",
      company: "DIGITAL AGENCY",
      quote:
        "Alex's copywriting skills are unmatched. Every project delivered on time and beyond expectations.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "150+", label: "PROJECTS COMPLETED" },
    { number: "50+", label: "SATISFIED CLIENTS" },
    { number: "2M+", label: "WORDS WRITTEN" },
    { number: "95%", label: "CLIENT RETENTION" },
  ];

  return (
    <div className="brutalist-website-2__content-writer-portfolio">
      {/* Scroll Progress */}
      <div className="brutalist-website-2__scroll-progress">
        <div
          className="brutalist-website-2__progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="brutalist-website-2__navigation">
        <div className="brutalist-website-2__nav-brand">
          <span className="brutalist-website-2__brand-alex">ALEX</span>
          <span className="brutalist-website-2__brand-writer">WRITER</span>
        </div>

        <div
          className={`brutalist-website-2__nav-menu ${
            isMenuOpen ? "brutalist-website-2__nav-menu-open" : ""
          }`}
        >
          <button
            className={`brutalist-website-2__nav-link ${
              activeSection === "hero" ? "brutalist-website-2__active" : ""
            }`}
            onClick={() => scrollToSection("hero")}
          >
            HOME
          </button>
          <button
            className={`brutalist-website-2__nav-link ${
              activeSection === "about" ? "brutalist-website-2__active" : ""
            }`}
            onClick={() => scrollToSection("about")}
          >
            ABOUT
          </button>
          <button
            className={`brutalist-website-2__nav-link ${
              activeSection === "services" ? "brutalist-website-2__active" : ""
            }`}
            onClick={() => scrollToSection("services")}
          >
            SERVICES
          </button>
          <button
            className={`brutalist-website-2__nav-link ${
              activeSection === "portfolio" ? "brutalist-website-2__active" : ""
            }`}
            onClick={() => scrollToSection("portfolio")}
          >
            PORTFOLIO
          </button>
          <button
            className={`brutalist-website-2__nav-link ${
              activeSection === "testimonials"
                ? "brutalist-website-2__active"
                : ""
            }`}
            onClick={() => scrollToSection("testimonials")}
          >
            TESTIMONIALS
          </button>
          <button
            className={`brutalist-website-2__nav-link ${
              activeSection === "contact" ? "brutalist-website-2__active" : ""
            }`}
            onClick={() => scrollToSection("contact")}
          >
            CONTACT
          </button>
        </div>

        <button
          className="brutalist-website-2__nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="brutalist-website-2__hero">
        <div className="brutalist-website-2__hero-background">
          <img
            src={img1}
            alt="Professional content writer in modern workspace with minimal aesthetic and focused lighting"
            className="brutalist-website-2__hero-image"
          />
        </div>

        <div className="brutalist-website-2__hero-overlay">
          <div className="brutalist-website-2__hero-content">
            <div className="brutalist-website-2__hero-badge brutalist-website-2__reveal-on-scroll">
              CONTENT WRITER
            </div>

            <h1 className="brutalist-website-2__hero-title brutalist-website-2__reveal-on-scroll">
              <span className="brutalist-website-2__title-line">WORDS</span>
              <span className="brutalist-website-2__title-line">THAT</span>
              <span className="brutalist-website-2__title-line brutalist-website-2__title-accent">
                CONVERT
              </span>
            </h1>

            <p className="brutalist-website-2__hero-description brutalist-website-2__reveal-on-scroll">
              Strategic content writer specializing in conversion-focused copy,
              technical documentation, and compelling brand narratives.
            </p>

            <div className="brutalist-website-2__hero-cta brutalist-website-2__reveal-on-scroll">
              <button
                className="brutalist-website-2__cta-primary"
                onClick={() => scrollToSection("portfolio")}
              >
                VIEW WORK
              </button>
              <button
                className="brutalist-website-2__cta-secondary"
                onClick={() => scrollToSection("contact")}
              >
                HIRE ME
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="brutalist-website-2__about">
        <div className="brutalist-website-2__about-content">
          <div className="brutalist-website-2__about-header brutalist-website-2__reveal-on-scroll">
            <h2 className="brutalist-website-2__section-title">ABOUT ME</h2>
            <div className="brutalist-website-2__section-number">01</div>
          </div>

          <div className="brutalist-website-2__about-text brutalist-website-2__reveal-on-scroll">
            <div className="brutalist-website-2__about-statement">
              <p>
                I believe words have the power to transform businesses, educate
                audiences, and create lasting connections.
              </p>
            </div>

            <div className="brutalist-website-2__about-details">
              <p>
                With over 5 years of experience crafting content for startups,
                enterprises, and everything in between, I specialize in creating
                clear, compelling copy that drives results.
              </p>

              <p>
                My approach combines strategic thinking with creative execution,
                ensuring every word serves a purpose and every sentence moves
                your audience closer to action.
              </p>
            </div>
          </div>
        </div>

        <div className="brutalist-website-2__about-stats brutalist-website-2__reveal-on-scroll">
          {stats.map((stat, index) => (
            <div key={index} className="brutalist-website-2__stat-item">
              <span className="brutalist-website-2__stat-number">
                {stat.number}
              </span>
              <span className="brutalist-website-2__stat-label">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="brutalist-website-2__services">
        <div className="brutalist-website-2__services-header brutalist-website-2__reveal-on-scroll">
          <h2 className="brutalist-website-2__section-title">WHAT I DO</h2>
          <div className="brutalist-website-2__section-number">02</div>
        </div>

        <div className="brutalist-website-2__services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="brutalist-website-2__service-item brutalist-website-2__reveal-on-scroll"
            >
              <div className="brutalist-website-2__service-number">
                {service.number}
              </div>
              <h3 className="brutalist-website-2__service-title">
                {service.title}
              </h3>
              <p className="brutalist-website-2__service-description">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="brutalist-website-2__portfolio">
        <div className="brutalist-website-2__portfolio-header brutalist-website-2__reveal-on-scroll">
          <h2 className="brutalist-website-2__section-title">SELECTED WORK</h2>
          <div className="brutalist-website-2__section-number">03</div>
        </div>

        <div className="brutalist-website-2__portfolio-grid">
          {portfolio.map((project, index) => (
            <div
              key={project.id}
              className="brutalist-website-2__portfolio-item brutalist-website-2__reveal-on-scroll"
            >
              <div className="brutalist-website-2__portfolio-meta">
                <span className="brutalist-website-2__portfolio-category">
                  {project.category}
                </span>
                <span className="brutalist-website-2__portfolio-year">
                  {project.year}
                </span>
              </div>

              <h3 className="brutalist-website-2__portfolio-title">
                {project.title}
              </h3>
              <div className="brutalist-website-2__portfolio-client">
                CLIENT: {project.client}
              </div>
              <p className="brutalist-website-2__portfolio-description">
                {project.description}
              </p>

              <div className="brutalist-website-2__portfolio-details">
                <span className="brutalist-website-2__portfolio-words">
                  {project.wordCount}
                </span>
                <button className="brutalist-website-2__portfolio-link">
                  VIEW PROJECT
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="brutalist-website-2__testimonials">
        <div className="brutalist-website-2__testimonials-header brutalist-website-2__reveal-on-scroll">
          <h2 className="brutalist-website-2__section-title">
            CLIENT FEEDBACK
          </h2>
          <div className="brutalist-website-2__section-number">04</div>
        </div>

        <div className="brutalist-website-2__testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="brutalist-website-2__testimonial-item brutalist-website-2__reveal-on-scroll"
            >
              <div className="brutalist-website-2__testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="brutalist-website-2__star">
                    ★
                  </span>
                ))}
              </div>

              <blockquote className="brutalist-website-2__testimonial-quote">
                "{testimonial.quote}"
              </blockquote>

              <div className="brutalist-website-2__testimonial-author">
                <div className="brutalist-website-2__author-name">
                  {testimonial.name}
                </div>
                <div className="brutalist-website-2__author-title">
                  {testimonial.title}
                </div>
                <div className="brutalist-website-2__author-company">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="brutalist-website-2__blog">
        <div className="brutalist-website-2__blog-header brutalist-website-2__reveal-on-scroll">
          <h2 className="brutalist-website-2__section-title">
            WRITING INSIGHTS
          </h2>
          <div className="brutalist-website-2__section-number">05</div>
        </div>

        <div className="brutalist-website-2__blog-grid">
          <article className="brutalist-website-2__blog-post brutalist-website-2__reveal-on-scroll">
            <div className="brutalist-website-2__blog-date">JAN 15, 2024</div>
            <h3 className="brutalist-website-2__blog-title">
              THE PSYCHOLOGY OF PERSUASIVE WRITING
            </h3>
            <p className="brutalist-website-2__blog-excerpt">
              Understanding cognitive biases and psychological triggers that
              make copy convert.
            </p>
            <button className="brutalist-website-2__blog-link">
              READ MORE
            </button>
          </article>

          <article className="brutalist-website-2__blog-post brutalist-website-2__reveal-on-scroll">
            <div className="brutalist-website-2__blog-date">DEC 28, 2023</div>
            <h3 className="brutalist-website-2__blog-title">
              CONTENT STRATEGY FOR STARTUPS
            </h3>
            <p className="brutalist-website-2__blog-excerpt">
              Building a content foundation that scales with your growing
              business.
            </p>
            <button className="brutalist-website-2__blog-link">
              READ MORE
            </button>
          </article>

          <article className="brutalist-website-2__blog-post brutalist-website-2__reveal-on-scroll">
            <div className="brutalist-website-2__blog-date">DEC 10, 2023</div>
            <h3 className="brutalist-website-2__blog-title">
              TECHNICAL WRITING BEST PRACTICES
            </h3>
            <p className="brutalist-website-2__blog-excerpt">
              Making complex technical concepts accessible to diverse audiences.
            </p>
            <button className="brutalist-website-2__blog-link">
              READ MORE
            </button>
          </article>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="brutalist-website-2__contact">
        <div className="brutalist-website-2__contact-content">
          <div className="brutalist-website-2__contact-header brutalist-website-2__reveal-on-scroll">
            <h2 className="brutalist-website-2__section-title">
              LET'S WORK TOGETHER
            </h2>
            <div className="brutalist-website-2__section-number">06</div>
          </div>

          <div className="brutalist-website-2__contact-text brutalist-website-2__reveal-on-scroll">
            <p className="brutalist-website-2__contact-statement">
              Ready to transform your content strategy? Let's discuss how words
              can work for your business.
            </p>
          </div>

          <div className="brutalist-website-2__contact-info brutalist-website-2__reveal-on-scroll">
            <div className="brutalist-website-2__contact-item">
              <h3>EMAIL</h3>
              <a href="mailto:alex@contentwriter.com">alex@contentwriter.com</a>
            </div>

            <div className="brutalist-website-2__contact-item">
              <h3>PHONE</h3>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>

            <div className="brutalist-website-2__contact-item">
              <h3>LOCATION</h3>
              <p>
                San Francisco, CA
                <br />
                United States
              </p>
            </div>
          </div>
        </div>

        <div className="brutalist-website-2__contact-form brutalist-website-2__reveal-on-scroll">
          <div className="brutalist-website-2__form-container">
            <div className="brutalist-website-2__form-group">
              <input type="text" placeholder="YOUR NAME" required />
            </div>
            <div className="brutalist-website-2__form-group">
              <input type="email" placeholder="YOUR EMAIL" required />
            </div>
            <div className="brutalist-website-2__form-group">
              <input type="text" placeholder="PROJECT TYPE" />
            </div>
            <div className="brutalist-website-2__form-group">
              <textarea
                placeholder="PROJECT DETAILS"
                rows="5"
                required
              ></textarea>
            </div>
            <button className="brutalist-website-2__form-submit">
              SEND MESSAGE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="brutalist-website-2__footer">
        <div className="brutalist-website-2__footer-content">
          <div className="brutalist-website-2__footer-brand">
            <span className="brutalist-website-2__brand-alex">ALEX</span>
            <span className="brutalist-website-2__brand-writer">WRITER</span>
          </div>

          <div className="brutalist-website-2__footer-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              LINKEDIN
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              TWITTER
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              MEDIUM
            </a>
          </div>

          <div className="brutalist-website-2__footer-copyright">
            © 2024 ALEX WRITER. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContentWriterPortfolio;
