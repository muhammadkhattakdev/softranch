import React from 'react';
import './style.css';
import realEstate from "../../../../../static/Landing.png";
import landing2 from "../../../../../static/landing2.PNG";
import landing3 from "../../../../../static/landing3.png";
import landing4 from "../../../../../static/landing4.png";
import landing5 from "../../../../../static/landing5.png";
import { Link } from 'react-router-dom';

const Featured = () => {
  return (
    <section className="featured-section">
      <div className="featured-container">
        <div className="featured-header">
          <div className="featured-badge">
            <span>Featured Solutions</span>
          </div>
          
          <h2 className="featured-title">
            We Don't Just Build Websites<br />
            — We Build Business Growth Engines
          </h2>
          
          <p className="featured-description">
            From struggling startups to established enterprises, discover how our custom website solutions have helped thousands of businesses attract more customers, increase revenue, and dominate their local markets.
          </p>
        </div>
        
        <div className="featured-rows">
          {/* Row 1 - Real Estate Business */}
          <div className="featured-row">
            <div className="featured-image">
              <img src={realEstate} alt="Real Estate Lead Generation Dashboard" />
            </div>
            
            <div className="featured-content">
              <div className="featured-content-badge">
                <span>Real Estate Services</span>
              </div>
              
              <h3 className="featured-content-title">
                Real Estate Agent in U.S?<br />
                Generate 10x More Leads<br />
                Than Your Competition
              </h3>
              
              <p className="featured-content-description">
                Beat Zillow in local search results and convert website visitors into qualified buyers. Our real estate websites feature IDX integration, automated lead capture, local SEO optimization, and mobile-first design that turns clicks into closings.
              </p>
              
              <Link to={"/real-estate-services/"} className="featured-button">
                Learn More
                <span className="arrow-icon">↗</span>
              </Link>
            </div>
          </div>
          
          {/* Row 2 - E-commerce Business */}
          <div className="featured-row">
            <div className="featured-content">
              <div className="featured-content-badge">
                <span>E-commerce Solutions</span>
              </div>
              
              <h3 className="featured-content-title">
                Struggling E-commerce Store?<br />
                Double Your Sales with<br />
                High-Converting Websites
              </h3>
              
              <p className="featured-content-description">
                Transform your online store into a revenue-generating machine. Our e-commerce websites feature lightning-fast loading speeds, mobile optimization, abandoned cart recovery, and conversion-focused design that turns browsers into buyers.
              </p>
              
              <Link to={"/ecommerce-website-development-services/"} className="featured-button">
                Learn More
                <span className="arrow-icon">↗</span>
              </Link>
            </div>
            
            <div className="featured-image">
              <img src={landing2} alt="E-commerce Analytics Dashboard" />
            </div>
          </div>
          
          {/* Row 3 - Restaurant Business */}
          <div className="featured-row">
            <div className="featured-image">
              <img src={landing3} alt="Restaurant Online Ordering System" />
            </div>
            
            <div className="featured-content">
              <div className="featured-content-badge">
                <span>Restaurant & Food Services</span>
              </div>
              
              <h3 className="featured-content-title">
                Restaurant Owner?<br />
                Fill Every Table with<br />
                Smart Digital Marketing
              </h3>

              <p className="featured-content-description">
                Increase foot traffic and online orders with websites built for hungry customers. Features include online menu management, reservation systems, delivery integration, Google My Business optimization, and local SEO that puts you on the map.
              </p>
              
              <Link to={"/restaurant-website-development-services/"} className="featured-button">
                Learn More
                <span className="arrow-icon">↗</span>
              </Link>
            </div>
          </div>
          
          {/* Row 4 - Healthcare Business */}
          <div className="featured-row">
            <div className="featured-content">
              <div className="featured-content-badge">
                <span>Healthcare & Medical</span>
              </div>
              
              <h3 className="featured-content-title">
                Medical Practice Struggling<br />
                to Attract New Patients?<br />
                Get Booked Solid Fast
              </h3>
              
              <p className="featured-content-description">
                Build trust and attract more patients with HIPAA-compliant websites designed for healthcare professionals. Includes online appointment booking, patient portals, insurance verification, telehealth integration, and local SEO for medical practices.
              </p>
              
              <Link to={"/healthcare-website-development-services/"} className="featured-button">
                Learn More
                <span className="arrow-icon">↗</span>
              </Link>
            </div>
            
            <div className="featured-image">
              <img src={landing4} alt="Medical Practice Management System" />
            </div>
          </div>
          
          {/* Row 5 - Professional Services */}
          <div className="featured-row">
            <div className="featured-image">
              <img src={landing5} alt="Professional Services Client Portal" />
            </div>
            
            <div className="featured-content">
              <div className="featured-content-badge">
                <span>Professional Services</span>
              </div>              
              <h3 className="featured-content-title">
                Lawyer, Accountant, or<br />
                Consultant? Land Premium<br />
                Clients with Authority Websites
              </h3>
              <p className="featured-content-description">
                Position yourself as the go-to expert in your field with websites that showcase your expertise and convert visitors into high-value clients. Features include case studies, client testimonials, appointment scheduling, and SEO that attracts your ideal clients.
              </p>
              
              <Link to={"/lawyer-accountant-consultant-website-development-services/"} className="featured-button">
                Learn More
                <span className="arrow-icon">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="purple-glow-top-right"></div>
    </section>
  );
};

export default Featured;