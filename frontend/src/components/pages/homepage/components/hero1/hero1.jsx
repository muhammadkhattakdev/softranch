import React from 'react';
import './style.css';
import BrowserMockup from '../mockup/mockup';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span>Serving 200+ Businesses</span>
        </div>

        <h1 className="hero-title">
          Launch Fast. Grow Faster!
        </h1>

        <h2 className="hero-subtitle">
          It's All About You
        </h2>

        <p className="hero-description">
          Get your website up and running quickly with powerful, scalable SaaS solutions designed to boost performance and drive business growth effortlessly.
        </p>
        
        <div className="hero-buttons">
          <Link to='/contact' className="hero-button primary">
            Get started!
            <span className="arrow-icon">↗</span>
          </Link>
          <Link target='_blank' to='https://wa.me/923355398908/' className="hero-button secondary">
            Let's Chat
          </Link>
        </div>
      </div>
      
      <div className="hero-image">
        <BrowserMockup />
      </div>
    </div>
  );
};

export default Hero;
