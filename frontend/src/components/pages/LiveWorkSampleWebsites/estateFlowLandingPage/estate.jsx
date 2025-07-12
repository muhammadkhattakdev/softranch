import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Heart,
  Eye,
  Filter,
  Phone,
  Mail,
  Star,
  TrendingUp,
  Shield,
  Clock,
  Award,
  Users,
  ChevronLeft,
  ChevronRight,
  Play,
  Calendar,
  DollarSign,
  Home,
  Building,
  ArrowRight,
  CheckCircle,
  Target,
  Zap,
  Globe
} from 'lucide-react';
import './style.css';
import team1 from "../../../../static/estateFlow/team1.webp";
import h1 from "../../../../static/estateFlow/h1.webp";
import h2 from "../../../../static/estateFlow/h2.webp";
import h3 from "../../../../static/estateFlow/h3.webp";
import h4 from "../../../../static/estateFlow/h4.webp";
import h5 from "../../../../static/estateFlow/h5.webp";
import h6 from "../../../../static/estateFlow/h6.webp";
import market_analysis from "../../../../static/estateFlow/market_analysis.webp";
import villa from "../../../../static/estateFlow/villa.webp";
import handshake from "../../../../static/estateFlow/handshake.webp";
import p1 from "../../../../static/estateFlow/p1.webp";

const EstateFlow = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentProperty, setCurrentProperty] = useState(0);
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    priceRange: 'any',
    propertyType: 'any',
    bedrooms: 'any'
  });

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('sample3__animate-in');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.sample3__animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const propertyTypes = [
    { id: 'all', label: 'All Properties', count: 1250 },
    { id: 'house', label: 'Houses', count: 680 },
    { id: 'apartment', label: 'Apartments', count: 420 },
    { id: 'condo', label: 'Condos', count: 150 }
  ];

  const featuredProperties = [
    {
      id: 1,
      title: "Modern Villa in Beverly Hills",
      price: "$2,850,000",
      location: "Beverly Hills, CA",
      beds: 5,
      baths: 4,
      area: "4,200 sq ft",
      type: "house",
      featured: true,
      image: h1
    },
    {
      id: 2,
      title: "Luxury Penthouse Downtown",
      price: "$1,950,000",
      location: "Downtown, NY",
      beds: 3,
      baths: 3,
      area: "2,800 sq ft",
      type: "apartment",
      featured: true,
      image: h2
    },
    {
      id: 3,
      title: "Waterfront Condo Miami",
      price: "$875,000",
      location: "Miami Beach, FL",
      beds: 2,
      baths: 2,
      area: "1,650 sq ft",
      type: "condo",
      featured: false,
      image: h3
    },
    {
      id: 4,
      title: "Contemporary Family Home",
      price: "$1,250,000",
      location: "Austin, TX",
      beds: 4,
      baths: 3,
      area: "3,100 sq ft",
      type: "house",
      featured: false,
      image: h4
    },
    {
      id: 5,
      title: "Urban Loft Space",
      price: "$725,000",
      location: "Portland, OR",
      beds: 2,
      baths: 2,
      area: "1,400 sq ft",
      type: "apartment",
      featured: false,
      image: h5
    },
    {
      id: 6,
      title: "Suburban Dream House",
      price: "$950,000",
      location: "Phoenix, AZ",
      beds: 4,
      baths: 3,
      area: "2,650 sq ft",
      type: "house",
      featured: false,
      image: h6
    }
  ];

  const services = [
    {
      icon: <Search size={32} />,
      title: "Smart Property Search",
      description: "AI-powered search with advanced filters and personalized recommendations",
      color: "blue"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Market Analysis",
      description: "Real-time market insights and property value predictions",
      color: "green"
    },
    {
      icon: <Shield size={32} />,
      title: "Secure Transactions",
      description: "End-to-end encrypted transactions with legal protection",
      color: "purple"
    },
    {
      icon: <Globe size={32} />,
      title: "Virtual Tours",
      description: "Immersive 3D virtual tours and AR visualization",
      color: "orange"
    }
  ];

  const statistics = [
    { number: "15K+", label: "Properties Listed", icon: <Home size={24} /> },
    { number: "8,500+", label: "Happy Clients", icon: <Users size={24} /> },
    { number: "95%", label: "Success Rate", icon: <Target size={24} /> },
    { number: "24/7", label: "Support Available", icon: <Clock size={24} /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "First-time Buyer",
      content: "EstateFlow made finding our dream home effortless. The virtual tours saved us so much time, and the agent was incredibly knowledgeable.",
      rating: 5,
      image: p1
    },
    {
      name: "Michael Chen",
      role: "Real Estate Investor",
      content: "The market analysis tools are phenomenal. I've made better investment decisions using their data-driven insights.",
      rating: 5,
      image: p1
    },
    {
      name: "Emily Rodriguez",
      role: "Property Seller",
      content: "Sold my house 20% above asking price in just 2 weeks. Their marketing strategy and professional photography were outstanding.",
      rating: 5,
      image: p1
    }
  ];

  const filteredProperties = activeFilter === 'all' 
    ? featuredProperties 
    : featuredProperties.filter(property => property.type === activeFilter);

  return (
    <div className="sample3__estate-wrapper">
      {/* Navigation */}
      <nav className="sample3__navbar">
        <div className="sample3__nav-container">
          <div className="sample3__logo">
            <div className="sample3__logo-icon">
              <Home size={28} />
            </div>
            <span>Estate<span className="sample3__logo-accent">Flow</span></span>
          </div>
          
          <div className="sample3__nav-links">
            <a href="#home">Home</a>
            <a href="#properties">Properties</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="sample3__nav-actions">
            <button className="sample3__nav-btn-secondary">
              <Phone size={18} />
              <span>(555) 123-HOME</span>
            </button>
            <button className="sample3__nav-btn-primary">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="sample3__hero">
        <div className="sample3__hero-bg"></div>
        <div className="sample3__hero-content">
          <div className="sample3__hero-text">
            <div className="sample3__hero-badge">
              <Award size={16} />
              <span>Trusted by 15,000+ Property Owners</span>
            </div>
            
            <h1 className="sample3__hero-title">
              Find Your Perfect
              <span className="sample3__gradient-text"> Dream Home</span>
              <br />in Minutes
            </h1>
            
            <p className="sample3__hero-description">
              Discover exceptional properties with our AI-powered search platform. 
              From luxury estates to cozy apartments, we have the perfect home waiting for you.
            </p>

            {/* Hero Search */}
            <div className="sample3__hero-search">
              <div className="sample3__search-container">
                <div className="sample3__search-input-group">
                  <MapPin size={20} />
                  <input 
                    type="text" 
                    placeholder="Enter location, city, or ZIP code"
                    value={searchFilters.location}
                    onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                  />
                </div>
                
                <select 
                  value={searchFilters.priceRange}
                  onChange={(e) => setSearchFilters({...searchFilters, priceRange: e.target.value})}
                >
                  <option value="any">Any Price</option>
                  <option value="0-500k">Under $500K</option>
                  <option value="500k-1m">$500K - $1M</option>
                  <option value="1m-2m">$1M - $2M</option>
                  <option value="2m+">$2M+</option>
                </select>
                
                <select 
                  value={searchFilters.propertyType}
                  onChange={(e) => setSearchFilters({...searchFilters, propertyType: e.target.value})}
                >
                  <option value="any">Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                </select>
                
                <button className="sample3__search-btn">
                  <Search size={20} />
                  <span>Search</span>
                </button>
              </div>
              
              <div className="sample3__search-suggestions">
                <span>Popular:</span>
                <button>Beverly Hills</button>
                <button>Manhattan</button>
                <button>Miami Beach</button>
              </div>
            </div>
          </div>

          <div className="sample3__hero-visual">
            <div className="sample3__hero-property-card">
              <div className="sample3__property-image">
                <img 
                  src={villa} 
                  alt="Stunning modern villa with panoramic city views and infinity pool"
                  className="sample3__hero-img"
                />
                <div className="sample3__property-badge">Featured</div>
                <button className="sample3__property-heart">
                  <Heart size={20} />
                </button>
              </div>
              <div className="sample3__property-info">
                <div className="sample3__property-price">$2,850,000</div>
                <h3>Modern Villa in Beverly Hills</h3>
                <div className="sample3__property-details">
                  <span><Bed size={16} /> 5 beds</span>
                  <span><Bath size={16} /> 4 baths</span>
                  <span><Square size={16} /> 4,200 sq ft</span>
                </div>
                <div className="sample3__property-location">
                  <MapPin size={14} />
                  <span>Beverly Hills, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="sample3__services">
        <div className="sample3__container">
          <div className="sample3__section-header sample3__animate-on-scroll">
            <h2 className="sample3__section-title">Why Choose EstateFlow</h2>
            <p className="sample3__section-subtitle">
              We leverage cutting-edge technology to make your property journey seamless and successful
            </p>
          </div>

          <div className="sample3__services-grid sample3__animate-on-scroll">
            {services.map((service, index) => (
              <div key={index} className={`sample3__service-card sample3__service-${service.color}`}>
                <div className="sample3__service-icon">
                  {service.icon}
                </div>
                <h3 className="sample3__service-title">{service.title}</h3>
                <p className="sample3__service-description">{service.description}</p>
                <div className="sample3__service-arrow">
                  <ArrowRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Separator */}
      <div className="sample3__wave-separator sample3__wave-2">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/>
        </svg>
      </div>

      {/* Explore Properties Section */}
      <section id="properties" className="sample3__explore">
        <div className="sample3__container">
          <div className="sample3__explore-header sample3__animate-on-scroll">
            <h2 className="sample3__section-title">Explore Premium Properties</h2>
            <p className="sample3__section-subtitle">
              Discover handpicked properties that match your lifestyle and budget
            </p>
          </div>

          {/* Property Filters */}
          <div className="sample3__property-filters sample3__animate-on-scroll">
            {propertyTypes.map((type) => (
              <button
                key={type.id}
                className={`sample3__filter-btn ${activeFilter === type.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(type.id)}
              >
                <span>{type.label}</span>
                <span className="sample3__filter-count">({type.count})</span>
              </button>
            ))}
          </div>

          {/* Properties Grid */}
          <div className="sample3__properties-grid sample3__animate-on-scroll">
            {filteredProperties.map((property, index) => (
              <div key={property.id} className="sample3__property-card">
                <div className="sample3__property-image-container">
                  <img 
                    src={property.image} 
                    alt={`${property.title} - ${property.description}`}
                    className="sample3__property-image"
                  />
                  {property.featured && (
                    <div className="sample3__featured-badge">
                      <Star size={14} />
                      <span>Featured</span>
                    </div>
                  )}
                  <button className="sample3__favorite-btn">
                    <Heart size={18} />
                  </button>
                  <div className="sample3__property-overlay">
                    <button className="sample3__view-btn">
                      <Eye size={16} />
                      <span>View Details</span>
                    </button>
                    <button className="sample3__tour-btn">
                      <Play size={16} />
                      <span>Virtual Tour</span>
                    </button>
                  </div>
                </div>
                
                <div className="sample3__property-content">
                  <div className="sample3__property-price">{property.price}</div>
                  <h3 className="sample3__property-title">{property.title}</h3>
                  
                  <div className="sample3__property-specs">
                    <span><Bed size={16} /> {property.beds}</span>
                    <span><Bath size={16} /> {property.baths}</span>
                    <span><Square size={16} /> {property.area}</span>
                  </div>
                  
                  <div className="sample3__property-location">
                    <MapPin size={14} />
                    <span>{property.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="sample3__explore-cta sample3__animate-on-scroll">
            <button className="sample3__btn-primary-large">
              <span>View All Properties</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="sample3__statistics">
        <div className="sample3__container">
          <div className="sample3__stats-grid sample3__animate-on-scroll">
            {statistics.map((stat, index) => (
              <div key={index} className="sample3__stat-card">
                <div className="sample3__stat-icon">
                  {stat.icon}
                </div>
                <div className="sample3__stat-content">
                  <div className="sample3__stat-number">{stat.number}</div>
                  <div className="sample3__stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Separator */}
      <div className="sample3__wave-separator sample3__wave-3">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,96L48,90.7C96,85,192,75,288,69.3C384,64,480,64,576,69.3C672,75,768,85,864,85.3C960,85,1056,75,1152,69.3C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"/>
        </svg>
      </div>

      {/* About/Why Choose Us Section */}
      <section id="about" className="sample3__about">
        <div className="sample3__container">
          <div className="sample3__about-content">
            <div className="sample3__about-text sample3__animate-on-scroll">
              <h2 className="sample3__section-title">Your Success is Our Mission</h2>
              <p className="sample3__about-description">
                With over a decade of experience in real estate, EstateFlow has revolutionized 
                how people buy, sell, and invest in properties. Our platform combines advanced 
                technology with personalized service to deliver exceptional results.
              </p>
              
              <div className="sample3__about-features">
                <div className="sample3__feature">
                  <CheckCircle size={20} />
                  <span>AI-Powered Property Matching</span>
                </div>
                <div className="sample3__feature">
                  <CheckCircle size={20} />
                  <span>Expert Market Analysis</span>
                </div>
                <div className="sample3__feature">
                  <CheckCircle size={20} />
                  <span>24/7 Professional Support</span>
                </div>
                <div className="sample3__feature">
                  <CheckCircle size={20} />
                  <span>Secure Transaction Process</span>
                </div>
              </div>

              <button className="sample3__btn-primary">
                <span>Learn More About Us</span>
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="sample3__about-visual sample3__animate-on-scroll">
              <div className="sample3__visual-grid">
                <div className="sample3__visual-card sample3__visual-large">
                  <img 
                    src={team1} 
                    alt="Professional real estate team in modern office discussing property strategies"
                    className="sample3__visual-img"
                  />
                </div>
                <div className="sample3__visual-card">
                  <img 
                    src={handshake} 
                    alt="Successful property deal handshake between client and agent"
                    className="sample3__visual-img"
                  />
                </div>
                <div className="sample3__visual-card">
                  <img 
                    src={market_analysis} 
                    alt="One-on-one property consultation with detailed market analysis"
                    className="sample3__visual-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="sample3__testimonials">
        <div className="sample3__container">
          <div className="sample3__testimonials-header sample3__animate-on-scroll">
            <h2 className="sample3__section-title">What Our Clients Say</h2>
            <p className="sample3__section-subtitle">
              Real stories from real people who found their dream homes with EstateFlow
            </p>
          </div>

          <div className="sample3__testimonials-slider sample3__animate-on-scroll">
            <div className="sample3__testimonial-track" style={{transform: `translateX(-${currentTestimonial * 100}%)`}}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="sample3__testimonial-card">
                  <div className="sample3__testimonial-content">
                    <div className="sample3__testimonial-stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="sample3__testimonial-text">"{testimonial.content}"</p>
                  </div>
                  
                  <div className="sample3__testimonial-author">
                    <div className="sample3__author-avatar">
                      <img 
                        src={testimonial.image} 
                        alt={`${testimonial.name} - ${testimonial.role}`}
                        className="sample3__avatar-img"
                      />
                    </div>
                    <div className="sample3__author-info">
                      <h4 className="sample3__author-name">{testimonial.name}</h4>
                      <p className="sample3__author-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="sample3__testimonial-navigation">
              <button 
                className="sample3__testimonial-btn"
                onClick={() => setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                className="sample3__testimonial-btn"
                onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter/CTA Section */}
      <section className="sample3__newsletter">
        <div className="sample3__container">
          <div className="sample3__newsletter-content sample3__animate-on-scroll">
            <div className="sample3__newsletter-text">
              <h2>Stay Updated with Market Insights</h2>
              <p>Get exclusive property alerts, market trends, and investment tips delivered to your inbox.</p>
            </div>
            
            <div className="sample3__newsletter-form">
              <div className="sample3__form-group">
                <input type="email" placeholder="Enter your email address" />
                <button className="sample3__btn-primary">
                  <span>Subscribe</span>
                  <ArrowRight size={18} />
                </button>
              </div>
              <p className="sample3__form-note">Join 25,000+ subscribers. No spam, unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="sample3__contact">
        <div className="sample3__container">
          <div className="sample3__contact-content">
            <div className="sample3__contact-info sample3__animate-on-scroll">
              <h2>Ready to Find Your Dream Home?</h2>
              <p>Let our experts help you navigate the real estate market with confidence.</p>
              
              <div className="sample3__contact-methods">
                <div className="sample3__contact-method">
                  <div className="sample3__contact-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4>Call Us</h4>
                    <p>(555) 123-HOME</p>
                    <span>Mon-Fri 8AM-8PM</span>
                  </div>
                </div>
                
                <div className="sample3__contact-method">
                  <div className="sample3__contact-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4>Email Us</h4>
                    <p>hello@estateflow.com</p>
                    <span>Response within 2 hours</span>
                  </div>
                </div>
                
                <div className="sample3__contact-method">
                  <div className="sample3__contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4>Visit Us</h4>
                    <p>123 Real Estate Blvd</p>
                    <span>Los Angeles, CA 90210</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="sample3__contact-form sample3__animate-on-scroll">
              <h3>Get a Free Consultation</h3>
              <form className="sample3__form">
                <div className="sample3__form-row">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone Number" />
                <select>
                  <option>I'm looking to...</option>
                  <option>Buy a home</option>
                  <option>Sell a property</option>
                  <option>Invest in real estate</option>
                  <option>Get market analysis</option>
                </select>
                <textarea placeholder="Tell us about your property needs..."></textarea>
                <button type="submit" className="sample3__btn-primary sample3__form-submit">
                  <span>Get Free Consultation</span>
                  <Calendar size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="sample3__footer">
        <div className="sample3__container">
          <div className="sample3__footer-content">
            <div className="sample3__footer-brand">
              <div className="sample3__footer-logo">
                <div className="sample3__logo-icon">
                  <Home size={24} />
                </div>
                <span>Estate<span className="sample3__logo-accent">Flow</span></span>
              </div>
              <p>Your trusted partner in real estate. We help you find, buy, sell, and invest in properties with confidence and expertise.</p>
              <div className="sample3__footer-social">
                <a href="#" aria-label="Facebook">FB</a>
                <a href="#" aria-label="Twitter">TW</a>
                <a href="#" aria-label="Instagram">IG</a>
                <a href="#" aria-label="LinkedIn">LI</a>
              </div>
            </div>
            
            <div className="sample3__footer-links">
              <div className="sample3__footer-column">
                <h4>Properties</h4>
                <a href="#">Buy Properties</a>
                <a href="#">Rent Properties</a>
                <a href="#">Luxury Homes</a>
                <a href="#">Commercial</a>
                <a href="#">New Developments</a>
              </div>
              
              <div className="sample3__footer-column">
                <h4>Services</h4>
                <a href="#">Property Valuation</a>
                <a href="#">Market Analysis</a>
                <a href="#">Investment Advice</a>
                <a href="#">Property Management</a>
                <a href="#">Legal Services</a>
              </div>
              
              <div className="sample3__footer-column">
                <h4>Company</h4>
                <a href="#">About Us</a>
                <a href="#">Our Team</a>
                <a href="#">Careers</a>
                <a href="#">Press & Media</a>
                <a href="#">Success Stories</a>
              </div>
              
              <div className="sample3__footer-column">
                <h4>Support</h4>
                <a href="#">Help Center</a>
                <a href="#">Contact Us</a>
                <a href="#">Live Chat</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </div>
          
          <div className="sample3__footer-bottom">
            <p>&copy; 2024 EstateFlow. All rights reserved. Licensed Real Estate Broker.</p>
            <div className="sample3__footer-legal">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
              <a href="#">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EstateFlow;