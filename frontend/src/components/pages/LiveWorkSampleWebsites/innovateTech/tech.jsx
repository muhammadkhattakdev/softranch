import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Code, 
  Smartphone, 
  Cloud, 
  Bot, 
  Shield, 
  BarChart3, 
  CheckCircle, 
  Users, 
  Award, 
  Zap, 
  Clock,
  Mail,
  Phone,
  MapPin,
  Star,
  Play,
  ChevronDown,
  Menu,
  X,
  Rocket,
  Target,
  TrendingUp,
  Globe,
  Lock,
  Layers,
  Search,
  Heart,
  Coffee,
  Briefcase
} from 'lucide-react';
import "./style.css";

const CorporateLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: 500, suffix: '+', label: 'Projects Completed' },
    { number: 98, suffix: '%', label: 'Client Satisfaction' },
    { number: 15, suffix: '+', label: 'Years Experience' },
    { number: 24, suffix: '/7', label: 'Support Available' }
  ];

  const services = [
    {
      icon: <Code />,
      title: 'Custom Web Development',
      description: 'Cutting-edge web applications built with the latest technologies and best practices.',
      color: 'innovate-tech-website__from-blue-400 innovate-tech-website__to-purple-500'
    },
    {
      icon: <Smartphone />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      color: 'innovate-tech-website__from-green-400 innovate-tech-website__to-blue-500'
    },
    {
      icon: <Cloud />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies for modern businesses.',
      color: 'innovate-tech-website__from-purple-400 innovate-tech-website__to-pink-500'
    },
    {
      icon: <Bot />,
      title: 'AI Integration',
      description: 'Intelligent automation and machine learning solutions to boost productivity.',
      color: 'innovate-tech-website__from-orange-400 innovate-tech-website__to-red-500'
    },
    {
      icon: <Shield />,
      title: 'Cybersecurity',
      description: 'Advanced security measures to protect your digital assets and data.',
      color: 'innovate-tech-website__from-red-400 innovate-tech-website__to-pink-500'
    },
    {
      icon: <BarChart3 />,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with powerful analytics platforms.',
      color: 'innovate-tech-website__from-cyan-400 innovate-tech-website__to-blue-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO at TechFlow',
      content: 'InnovateTech transformed our entire digital infrastructure. Their team is absolutely phenomenal!',
      avatar: 'SJ',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO at DataDrive',
      content: 'The AI integration they built increased our efficiency by 300%. Outstanding work and support.',
      avatar: 'MC',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering at CloudCorp',
      content: 'Best development partner we\'ve ever worked with. They deliver beyond expectations every time.',
      avatar: 'ER',
      rating: 5
    }
  ];

  const team = [
    { name: 'Alex Thompson', role: 'Lead Developer', avatar: 'AT', specialty: 'Full-Stack' },
    { name: 'Maya Patel', role: 'UI/UX Designer', avatar: 'MP', specialty: 'Design Systems' },
    { name: 'David Kim', role: 'DevOps Engineer', avatar: 'DK', specialty: 'Cloud Architecture' },
    { name: 'Lisa Zhang', role: 'Data Scientist', avatar: 'LZ', specialty: 'AI/ML' }
  ];

  const Counter = ({ end, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      if (!hasAnimated) return;
      
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [hasAnimated, end, duration]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        },
        { threshold: 0.5 }
      );

      const element = document.getElementById(`counter-${end}`);
      if (element) observer.observe(element);

      return () => observer.disconnect();
    }, [hasAnimated, end]);

    return (
      <span id={`counter-${end}`}>
        {count}{suffix}
      </span>
    );
  };

  return (
    <div className="innovate-tech-website__corporate-landing">
      {/* Navigation */}
      <nav className="innovate-tech-website__navbar">
        <div className="innovate-tech-website__nav-container">
          <div className="innovate-tech-website__logo">
            <Rocket className="innovate-tech-website__logo-icon" />
            <span>InnovateTech</span>
          </div>
          
          <div className={`innovate-tech-website__nav-menu ${isMenuOpen ? 'innovate-tech-website__active' : ''}`}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#team">Team</a>
            <a href="#contact" className="innovate-tech-website__nav-cta">Get Started</a>
          </div>

          <button 
            className="innovate-tech-website__mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="innovate-tech-website__hero">
        <div className="innovate-tech-website__hero-bg">
          <div className="innovate-tech-website__floating-shape innovate-tech-website__shape-1"></div>
          <div className="innovate-tech-website__floating-shape innovate-tech-website__shape-2"></div>
          <div className="innovate-tech-website__floating-shape innovate-tech-website__shape-3"></div>
          <div className="innovate-tech-website__gradient-orb innovate-tech-website__orb-1"></div>
          <div className="innovate-tech-website__gradient-orb innovate-tech-website__orb-2"></div>
        </div>
        
        <div className="innovate-tech-website__hero-container">
          <div className="innovate-tech-website__hero-content">
            <div className="innovate-tech-website__hero-badge">
              <Star className="innovate-tech-website__badge-icon" />
              <span>Award-Winning Development Team</span>
            </div>
            
            <h1 className="innovate-tech-website__hero-title">
              Building the <span className="innovate-tech-website__gradient-text">Future</span> of
              <br />Digital Innovation
            </h1>
            
            <p className="innovate-tech-website__hero-description">
              Transform your business with cutting-edge technology solutions. 
              We create powerful, scalable applications that drive growth and 
              deliver exceptional user experiences.
            </p>
            
            <div className="innovate-tech-website__hero-buttons">
              <button className="innovate-tech-website__btn-primary">
                <span>Start Your Project</span>
                <ArrowRight className="innovate-tech-website__btn-icon" />
              </button>
              <button className="innovate-tech-website__btn-secondary">
                <Play className="innovate-tech-website__btn-icon" />
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="innovate-tech-website__hero-stats">
              <div className="innovate-tech-website__stat-item">
                <div className="innovate-tech-website__stat-number">500+</div>
                <div className="innovate-tech-website__stat-label">Projects</div>
              </div>
              <div className="innovate-tech-website__stat-item">
                <div className="innovate-tech-website__stat-number">98%</div>
                <div className="innovate-tech-website__stat-label">Satisfaction</div>
              </div>
              <div className="innovate-tech-website__stat-item">
                <div className="innovate-tech-website__stat-number">24/7</div>
                <div className="innovate-tech-website__stat-label">Support</div>
              </div>
            </div>
          </div>
          
          <div className="innovate-tech-website__hero-visual">
            <div className="innovate-tech-website__hero-card innovate-tech-website__main-card">
              <div className="innovate-tech-website__card-header">
                <div className="innovate-tech-website__card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="innovate-tech-website__card-title">Project Dashboard</div>
              </div>
              <div className="innovate-tech-website__card-content">
                <div className="innovate-tech-website__progress-bar">
                  <div className="innovate-tech-website__progress-fill"></div>
                </div>
                <div className="innovate-tech-website__card-stats">
                  <div className="innovate-tech-website__mini-stat">
                    <TrendingUp size={16} />
                    <span>+45%</span>
                  </div>
                  <div className="innovate-tech-website__mini-stat">
                    <Users size={16} />
                    <span>2.4K</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="innovate-tech-website__hero-card innovate-tech-website__floating-card-1">
              <Globe className="innovate-tech-website__card-icon" />
              <div className="innovate-tech-website__card-text">Global Reach</div>
            </div>
            
            <div className="innovate-tech-website__hero-card innovate-tech-website__floating-card-2">
              <Zap className="innovate-tech-website__card-icon" />
              <div className="innovate-tech-website__card-text">Lightning Fast</div>
            </div>
          </div>
        </div>
        
        <div className="innovate-tech-website__scroll-indicator">
          <ChevronDown />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="innovate-tech-website__about">
        <div className="innovate-tech-website__container">
          <div className="innovate-tech-website__section-header">
            <div className="innovate-tech-website__section-badge">
              <Target className="innovate-tech-website__badge-icon" />
              <span>About InnovateTech</span>
            </div>
            <h2 className="innovate-tech-website__section-title">
              Transforming Ideas Into 
              <span className="innovate-tech-website__gradient-text"> Digital Reality</span>
            </h2>
            <p className="innovate-tech-website__section-description">
              We're a passionate team of innovators, designers, and developers 
              dedicated to creating exceptional digital experiences that drive business growth.
            </p>
          </div>

          <div className="innovate-tech-website__about-grid">
            <div className="innovate-tech-website__about-content">
              <div className="innovate-tech-website__feature-list">
                <div className="innovate-tech-website__feature-item">
                  <CheckCircle className="innovate-tech-website__feature-icon" />
                  <div>
                    <h3>15+ Years of Excellence</h3>
                    <p>Proven track record delivering complex enterprise solutions</p>
                  </div>
                </div>
                <div className="innovate-tech-website__feature-item">
                  <CheckCircle className="innovate-tech-website__feature-icon" />
                  <div>
                    <h3>Cutting-Edge Technology</h3>
                    <p>Latest frameworks and tools for future-ready applications</p>
                  </div>
                </div>
                <div className="innovate-tech-website__feature-item">
                  <CheckCircle className="innovate-tech-website__feature-icon" />
                  <div>
                    <h3>Agile Development</h3>
                    <p>Fast iterations with continuous feedback and improvements</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="innovate-tech-website__about-visual">
              <div className="innovate-tech-website__visual-card">
                {/* Placeholder: Modern office space with developers collaborating, bright and airy environment, multiple monitors showing colorful dashboards and code */}
                <div className="innovate-tech-website__placeholder-content">
                  <div className="innovate-tech-website__placeholder-text">Team Collaboration Image</div>
                  <p>Modern office with developers working together on innovative projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="innovate-tech-website__services">
        <div className="innovate-tech-website__container">
          <div className="innovate-tech-website__section-header">
            <div className="innovate-tech-website__section-badge">
              <Layers className="innovate-tech-website__badge-icon" />
              <span>Our Services</span>
            </div>
            <h2 className="innovate-tech-website__section-title">
              Comprehensive <span className="innovate-tech-website__gradient-text">Digital Solutions</span>
            </h2>
            <p className="innovate-tech-website__section-description">
              From concept to deployment, we provide end-to-end development services 
              that bring your vision to life.
            </p>
          </div>

          <div className="innovate-tech-website__services-grid">
            {services.map((service, index) => (
              <div key={index} className="innovate-tech-website__service-card">
                <div className={`innovate-tech-website__service-icon innovate-tech-website__bg-gradient-to-r ${service.color}`}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="innovate-tech-website__service-btn">
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="innovate-tech-website__stats">
        <div className="innovate-tech-website__container">
          <div className="innovate-tech-website__stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="innovate-tech-website__stat-card">
                <div className="innovate-tech-website__stat-number">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="innovate-tech-website__stat-label">{stat.label}</div>
                <div className="innovate-tech-website__stat-decoration"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="innovate-tech-website__portfolio">
        <div className="innovate-tech-website__container">
          <div className="innovate-tech-website__section-header">
            <div className="innovate-tech-website__section-badge">
              <Award className="innovate-tech-website__badge-icon" />
              <span>Our Work</span>
            </div>
            <h2 className="innovate-tech-website__section-title">
              Success Stories & <span className="innovate-tech-website__gradient-text">Case Studies</span>
            </h2>
            <p className="innovate-tech-website__section-description">
              Explore our portfolio of successful projects across various industries.
            </p>
          </div>

          <div className="innovate-tech-website__portfolio-grid">
            <div className="innovate-tech-website__portfolio-card innovate-tech-website__featured">
              <div className="innovate-tech-website__portfolio-image">
                {/* Placeholder: E-commerce dashboard with clean UI, showing analytics charts, product management interface */}
                <div className="innovate-tech-website__placeholder-content">
                  <div className="innovate-tech-website__placeholder-text">E-Commerce Platform</div>
                  <p>Modern dashboard with analytics and management tools</p>
                </div>
              </div>
              <div className="innovate-tech-website__portfolio-content">
                <div className="innovate-tech-website__portfolio-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>AWS</span>
                </div>
                <h3>E-Commerce Revolution</h3>
                <p>Transformed a traditional retailer into a digital powerhouse with 300% increase in online sales.</p>
                <button className="innovate-tech-website__portfolio-btn">
                  View Case Study
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="innovate-tech-website__portfolio-card">
              <div className="innovate-tech-website__portfolio-image">
                {/* Placeholder: Healthcare app interface showing patient management system with clean medical design */}
                <div className="innovate-tech-website__placeholder-content">
                  <div className="innovate-tech-website__placeholder-text">HealthTech App</div>
                  <p>Patient management system with intuitive interface</p>
                </div>
              </div>
              <div className="innovate-tech-website__portfolio-content">
                <div className="innovate-tech-website__portfolio-tags">
                  <span>Vue.js</span>
                  <span>Python</span>
                  <span>HIPAA</span>
                </div>
                <h3>Healthcare Innovation</h3>
                <p>HIPAA-compliant platform serving 50+ medical facilities.</p>
              </div>
            </div>

            <div className="innovate-tech-website__portfolio-card">
              <div className="innovate-tech-website__portfolio-image">
                {/* Placeholder: Financial trading interface with real-time charts and dark theme */}
                <div className="innovate-tech-website__placeholder-content">
                  <div className="innovate-tech-website__placeholder-text">FinTech Platform</div>
                  <p>Real-time trading dashboard with advanced analytics</p>
                </div>
              </div>
              <div className="innovate-tech-website__portfolio-content">
                <div className="innovate-tech-website__portfolio-tags">
                  <span>Angular</span>
                  <span>Java</span>
                  <span>Real-time</span>
                </div>
                <h3>Trading Platform</h3>
                <p>High-frequency trading platform with millisecond latency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="innovate-tech-website__team">
        <div className="innovate-tech-website__container">
          <div className="innovate-tech-website__section-header">
            <div className="innovate-tech-website__section-badge">
              <Users className="innovate-tech-website__badge-icon" />
              <span>Our Team</span>
            </div>
            <h2 className="innovate-tech-website__section-title">
              Meet the <span className="innovate-tech-website__gradient-text">Innovators</span>
            </h2>
            <p className="innovate-tech-website__section-description">
              Passionate professionals dedicated to bringing your vision to life.
            </p>
          </div>

          <div className="innovate-tech-website__team-grid">
            {team.map((member, index) => (
              <div key={index} className="innovate-tech-website__team-card">
                <div className="innovate-tech-website__team-avatar">
                  <span>{member.avatar}</span>
                  <div className="innovate-tech-website__avatar-decoration"></div>
                </div>
                <h3>{member.name}</h3>
                <p className="innovate-tech-website__team-role">{member.role}</p>
                <div className="innovate-tech-website__team-specialty">
                  <Briefcase size={16} />
                  <span>{member.specialty}</span>
                </div>
                <div className="innovate-tech-website__team-social">
                  <button>Connect</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="innovate-tech-website__testimonials">
        <div className="innovate-tech-website__container">
          <div className="innovate-tech-website__section-header">
            <div className="innovate-tech-website__section-badge">
              <Heart className="innovate-tech-website__badge-icon" />
              <span>Client Love</span>
            </div>
            <h2 className="innovate-tech-website__section-title">
              What Our <span className="innovate-tech-website__gradient-text">Clients Say</span>
            </h2>
          </div>

          <div className="innovate-tech-website__testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="innovate-tech-website__testimonial-card">
                <div className="innovate-tech-website__testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p>"{testimonial.content}"</p>
                <div className="innovate-tech-website__testimonial-author">
                  <div className="innovate-tech-website__author-avatar">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="innovate-tech-website__technology">
        <div className="innovate-tech-website__container">
          <div className="innovate-tech-website__section-header">
            <div className="innovate-tech-website__section-badge">
              <Code className="innovate-tech-website__badge-icon" />
              <span>Technology Stack</span>
            </div>
            <h2 className="innovate-tech-website__section-title">
              Powered by <span className="innovate-tech-website__gradient-text">Modern Tech</span>
            </h2>
          </div>

          <div className="innovate-tech-website__tech-grid">
            <div className="innovate-tech-website__tech-category">
              <h3>Frontend</h3>
              <div className="innovate-tech-website__tech-items">
                <div className="innovate-tech-website__tech-item">React</div>
                <div className="innovate-tech-website__tech-item">Vue.js</div>
                <div className="innovate-tech-website__tech-item">Angular</div>
                <div className="innovate-tech-website__tech-item">TypeScript</div>
              </div>
            </div>
            <div className="innovate-tech-website__tech-category">
              <h3>Backend</h3>
              <div className="innovate-tech-website__tech-items">
                <div className="innovate-tech-website__tech-item">Node.js</div>
                <div className="innovate-tech-website__tech-item">Python</div>
                <div className="innovate-tech-website__tech-item">Java</div>
                <div className="innovate-tech-website__tech-item">Go</div>
              </div>
            </div>
            <div className="innovate-tech-website__tech-category">
              <h3>Cloud</h3>
              <div className="innovate-tech-website__tech-items">
                <div className="innovate-tech-website__tech-item">AWS</div>
                <div className="innovate-tech-website__tech-item">Azure</div>
                <div className="innovate-tech-website__tech-item">GCP</div>
                <div className="innovate-tech-website__tech-item">Docker</div>
              </div>
            </div>
            <div className="innovate-tech-website__tech-category">
              <h3>Database</h3>
              <div className="innovate-tech-website__tech-items">
                <div className="innovate-tech-website__tech-item">PostgreSQL</div>
                <div className="innovate-tech-website__tech-item">MongoDB</div>
                <div className="innovate-tech-website__tech-item">Redis</div>
                <div className="innovate-tech-website__tech-item">ElasticSearch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="innovate-tech-website__contact">
        <div className="innovate-tech-website__container">
          <div className="innovate-tech-website__section-header">
            <div className="innovate-tech-website__section-badge">
              <Coffee className="innovate-tech-website__badge-icon" />
              <span>Let's Talk</span>
            </div>
            <h2 className="innovate-tech-website__section-title">
              Ready to Start Your <span className="innovate-tech-website__gradient-text">Next Project?</span>
            </h2>
            <p className="innovate-tech-website__section-description">
              Let's discuss how we can bring your vision to life with cutting-edge technology.
            </p>
          </div>

          <div className="innovate-tech-website__contact-grid">
            <div className="innovate-tech-website__contact-form-container">
              <div className="innovate-tech-website__contact-form">
                <div className="innovate-tech-website__form-row">
                  <div className="innovate-tech-website__form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" />
                  </div>
                  <div className="innovate-tech-website__form-group">
                    <label>Email</label>
                    <input type="email" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="innovate-tech-website__form-group">
                  <label>Company</label>
                  <input type="text" placeholder="Your Company" />
                </div>
                <div className="innovate-tech-website__form-group">
                  <label>Project Details</label>
                  <textarea rows="4" placeholder="Tell us about your project..."></textarea>
                </div>
                <button onClick={() => alert('Message sent! We\'ll get back to you soon.')} className="innovate-tech-website__btn-primary innovate-tech-website__full-width">
                  <span>Send Message</span>
                  <ArrowRight className="innovate-tech-website__btn-icon" />
                </button>
              </div>
            </div>

            <div className="innovate-tech-website__contact-info">
              <div className="innovate-tech-website__contact-item">
                <div className="innovate-tech-website__contact-icon">
                  <Mail />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>hello@innovatetech.com</p>
                </div>
              </div>
              <div className="innovate-tech-website__contact-item">
                <div className="innovate-tech-website__contact-icon">
                  <Phone />
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="innovate-tech-website__contact-item">
                <div className="innovate-tech-website__contact-icon">
                  <MapPin />
                </div>
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Innovation Street<br />San Francisco, CA 94102</p>
                </div>
              </div>
              <div className="innovate-tech-website__contact-item">
                <div className="innovate-tech-website__contact-icon">
                  <Clock />
                </div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Mon-Fri: 9:00 AM - 6:00 PM PST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="innovate-tech-website__footer">
        <div className="innovate-tech-website__container">
          <div className="innovate-tech-website__footer-content">
            <div className="innovate-tech-website__footer-brand">
              <div className="innovate-tech-website__footer-logo">
                <Rocket className="innovate-tech-website__logo-icon" />
                <span>InnovateTech</span>
              </div>
              <p>Transforming businesses through innovative digital solutions and cutting-edge technology.</p>
              <div className="innovate-tech-website__footer-social">
                <button>LinkedIn</button>
                <button>Twitter</button>
                <button>GitHub</button>
              </div>
            </div>
            
            <div className="innovate-tech-website__footer-links">
              <div className="innovate-tech-website__footer-column">
                <h4>Services</h4>
                <a href="#">Web Development</a>
                <a href="#">Mobile Apps</a>
                <a href="#">Cloud Solutions</a>
                <a href="#">AI Integration</a>
              </div>
              <div className="innovate-tech-website__footer-column">
                <h4>Company</h4>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
              </div>
              <div className="innovate-tech-website__footer-column">
                <h4>Resources</h4>
                <a href="#">Documentation</a>
                <a href="#">Case Studies</a>
                <a href="#">Support</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
          
          <div className="innovate-tech-website__footer-bottom">
            <p>&copy; 2025 InnovateTech. All rights reserved.</p>
            <p>Crafted with <Heart size={16} /> and lots of <Coffee size={16} /></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CorporateLanding;