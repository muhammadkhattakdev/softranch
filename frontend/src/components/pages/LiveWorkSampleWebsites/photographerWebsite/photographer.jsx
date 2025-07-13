import React from "react";
import "./style.css";
import headerImg from "../../../../static/photography_website/header.png";
import at_work from "../../../../static/photography_website/at_work.png";
import f1 from "../../../../static/photography_website/f1.png";
import f2 from "../../../../static/photography_website/f2.png";
import f3 from "../../../../static/photography_website/f3.png";
import f4 from "../../../../static/photography_website/f4.png";
import f5 from "../../../../static/photography_website/f5.png";
import f6 from "../../../../static/photography_website/f6.png";


const PhotographerPortfolio = () => {
  return (
    <div className="photographer-portfolio__container">
      {/* Hero Section */}
      <section className="photographer-portfolio__hero">
        <div className="photographer-portfolio__hero-content">
          <div className="photographer-portfolio__hero-text">
            <h1 className="photographer-portfolio__hero-title">
              CAPTURING LIFE'S
              <br />
              <span className="photographer-portfolio__hero-accent">
                AUTHENTIC MOMENTS
              </span>
            </h1>
            <p className="photographer-portfolio__hero-description">
              Professional photographer specializing in portraits, weddings, and
              lifestyle photography. Every frame tells a story, every moment
              becomes eternal.
            </p>
            <div className="photographer-portfolio__hero-buttons">
              <button className="photographer-portfolio__btn-primary">
                View Portfolio
              </button>
              <button className="photographer-portfolio__btn-secondary">
                Contact Me
              </button>
            </div>
          </div>
          <div className="photographer-portfolio__hero-image">
            <img
              src={headerImg}
              alt="Featured Photography"
              className="photographer-portfolio__hero-img"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="photographer-portfolio__about">
        <div className="photographer-portfolio__about-content">
          <div className="photographer-portfolio__about-text">
            <span className="photographer-portfolio__section-label">
              ABOUT ME
            </span>
            <h2 className="photographer-portfolio__about-title">
              A Passionate Visual
              <br />
              Storyteller
            </h2>
            <p className="photographer-portfolio__about-description">
              With over 8 years of experience behind the lens, I've dedicated my
              career to capturing the raw beauty and authentic emotions in every
              moment. My approach combines technical expertise with artistic
              vision to create timeless images that speak to the soul.
            </p>
            <div className="photographer-portfolio__about-stats">
              <div className="photographer-portfolio__stat">
                <span className="photographer-portfolio__stat-number">
                  500+
                </span>
                <span className="photographer-portfolio__stat-label">
                  Happy Clients
                </span>
              </div>
              <div className="photographer-portfolio__stat">
                <span className="photographer-portfolio__stat-number">
                  50k+
                </span>
                <span className="photographer-portfolio__stat-label">
                  Photos Captured
                </span>
              </div>
              <div className="photographer-portfolio__stat">
                <span className="photographer-portfolio__stat-number">8+</span>
                <span className="photographer-portfolio__stat-label">
                  Years Experience
                </span>
              </div>
            </div>
          </div>
          <div className="photographer-portfolio__about-image">
            <img
              src={at_work}
              alt="Photographer at work"
              className="photographer-portfolio__about-img"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="photographer-portfolio__gallery">
        <div className="photographer-portfolio__gallery-header">
          <span className="photographer-portfolio__section-label">
            PORTFOLIO
          </span>
          <h2 className="photographer-portfolio__gallery-title">
            Featured Work
          </h2>
          <p className="photographer-portfolio__gallery-subtitle">
            A curated collection of my most cherished captures
          </p>
        </div>

        <div className="photographer-portfolio__gallery-grid">
          <div className="photographer-portfolio__gallery-item photographer-portfolio__gallery-item--large">
            <img
              src={f2}
              alt="Featured Photography 1"
              className="photographer-portfolio__gallery-img"
            />
            <div className="photographer-portfolio__gallery-overlay">
              <span className="photographer-portfolio__gallery-category">
                Portrait
              </span>
            </div>
          </div>
          <div className="photographer-portfolio__gallery-item">
            <img
              src={f1}
              alt="Featured Photography 2"
              className="photographer-portfolio__gallery-img"
            />
            <div className="photographer-portfolio__gallery-overlay">
              <span className="photographer-portfolio__gallery-category">
                Wedding
              </span>
            </div>
          </div>
          <div className="photographer-portfolio__gallery-item">
            <img
              src={f3}
              alt="Featured Photography 3"
              className="photographer-portfolio__gallery-img"
            />
            <div className="photographer-portfolio__gallery-overlay">
              <span className="photographer-portfolio__gallery-category">
                Lifestyle
              </span>
            </div>
          </div>
          <div className="photographer-portfolio__gallery-item photographer-portfolio__gallery-item--wide">
            <img
              src={f4}
              alt="Featured Photography 4"
              className="photographer-portfolio__gallery-img"
            />
            <div className="photographer-portfolio__gallery-overlay">
              <span className="photographer-portfolio__gallery-category">
                Nature
              </span>
            </div>
          </div>
          <div className="photographer-portfolio__gallery-item">
            <img
              src={f5}
              alt="Featured Photography 5"
              className="photographer-portfolio__gallery-img"
            />
            <div className="photographer-portfolio__gallery-overlay">
              <span className="photographer-portfolio__gallery-category">
                Event
              </span>
            </div>
          </div>
          <div className="photographer-portfolio__gallery-item">
            <img
              src={f6}
              alt="Featured Photography 6"
              className="photographer-portfolio__gallery-img"
            />
            <div className="photographer-portfolio__gallery-overlay">
              <span className="photographer-portfolio__gallery-category">
                Commercial
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="photographer-portfolio__services">
        <div className="photographer-portfolio__services-header">
          <span className="photographer-portfolio__section-label">
            SERVICES
          </span>
          <h2 className="photographer-portfolio__services-title">
            What I Offer
          </h2>
        </div>

        <div className="photographer-portfolio__services-grid">
          <div className="photographer-portfolio__service-card">
            <div className="photographer-portfolio__service-icon">📸</div>
            <h3 className="photographer-portfolio__service-title">
              Portrait Photography
            </h3>
            <p className="photographer-portfolio__service-description">
              Professional headshots and personal portraits that capture your
              unique personality and essence.
            </p>
          </div>
          <div className="photographer-portfolio__service-card">
            <div className="photographer-portfolio__service-icon">💍</div>
            <h3 className="photographer-portfolio__service-title">
              Wedding Photography
            </h3>
            <p className="photographer-portfolio__service-description">
              Complete wedding coverage from engagement shoots to the big day,
              preserving every precious moment.
            </p>
          </div>
          <div className="photographer-portfolio__service-card">
            <div className="photographer-portfolio__service-icon">🏢</div>
            <h3 className="photographer-portfolio__service-title">
              Commercial Photography
            </h3>
            <p className="photographer-portfolio__service-description">
              Professional commercial and corporate photography for brands,
              products, and business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="photographer-portfolio__testimonials">
        <div className="photographer-portfolio__testimonials-header">
          <span className="photographer-portfolio__section-label">
            TESTIMONIALS
          </span>
          <h2 className="photographer-portfolio__testimonials-title">
            What Clients Say
          </h2>
        </div>

        <div className="photographer-portfolio__testimonials-grid">
          <div className="photographer-portfolio__testimonial-card">
            <p className="photographer-portfolio__testimonial-text">
              "Absolutely incredible work! The photos exceeded our expectations
              and captured our wedding day perfectly. Professional, creative,
              and a joy to work with."
            </p>
            <div className="photographer-portfolio__testimonial-author">
              <img
                src=""
                alt="Client"
                className="photographer-portfolio__testimonial-img"
              />
              <div className="photographer-portfolio__testimonial-info">
                <span className="photographer-portfolio__testimonial-name">
                  Sarah & Michael
                </span>
                <span className="photographer-portfolio__testimonial-role">
                  Wedding Clients
                </span>
              </div>
            </div>
          </div>
          <div className="photographer-portfolio__testimonial-card">
            <p className="photographer-portfolio__testimonial-text">
              "The corporate headshots were exactly what we needed. Professional
              quality and attention to detail that really made our team look
              their best."
            </p>
            <div className="photographer-portfolio__testimonial-author">
              <img
                src=""
                alt="Client"
                className="photographer-portfolio__testimonial-img"
              />
              <div className="photographer-portfolio__testimonial-info">
                <span className="photographer-portfolio__testimonial-name">
                  Jennifer Chen
                </span>
                <span className="photographer-portfolio__testimonial-role">
                  Marketing Director
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="photographer-portfolio__contact">
        <div className="photographer-portfolio__contact-content">
          <div className="photographer-portfolio__contact-text">
            <span className="photographer-portfolio__section-label">
              CONTACT
            </span>
            <h2 className="photographer-portfolio__contact-title">
              Let's Create Something
              <br />
              Beautiful Together
            </h2>
            <p className="photographer-portfolio__contact-description">
              Ready to capture your special moments? Get in touch and let's
              discuss how we can bring your vision to life.
            </p>
            <div className="photographer-portfolio__contact-info">
              <div className="photographer-portfolio__contact-item">
                <span className="photographer-portfolio__contact-label">
                  Email
                </span>
                <span className="photographer-portfolio__contact-value">
                  hello@photographer.com
                </span>
              </div>
              <div className="photographer-portfolio__contact-item">
                <span className="photographer-portfolio__contact-label">
                  Phone
                </span>
                <span className="photographer-portfolio__contact-value">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="photographer-portfolio__contact-item">
                <span className="photographer-portfolio__contact-label">
                  Location
                </span>
                <span className="photographer-portfolio__contact-value">
                  New York, NY
                </span>
              </div>
            </div>
          </div>
          <div className="photographer-portfolio__contact-form">
            <h3 className="photographer-portfolio__form-title">
              Send a Message
            </h3>
            <div className="photographer-portfolio__form">
              <input
                type="text"
                placeholder="Your Name"
                className="photographer-portfolio__form-input"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="photographer-portfolio__form-input"
              />
              <input
                type="text"
                placeholder="Project Type"
                className="photographer-portfolio__form-input"
              />
              <textarea
                placeholder="Tell me about your project..."
                className="photographer-portfolio__form-textarea"
              ></textarea>
              <button
                type="button"
                className="photographer-portfolio__form-submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotographerPortfolio;
