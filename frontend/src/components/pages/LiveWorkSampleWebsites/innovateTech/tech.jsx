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
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: <Smartphone />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: <Cloud />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies for modern businesses.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: <Bot />,
      title: 'AI Integration',
      description: 'Intelligent automation and machine learning solutions to boost productivity.',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: <Shield />,
      title: 'Cybersecurity',
      description: 'Advanced security measures to protect your digital assets and data.',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: <BarChart3 />,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with powerful analytics platforms.',
      color: 'from-cyan-400 to-blue-500'
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
    <div className="corporate-landing">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <Rocket className="logo-icon" />
            <span>InnovateTech</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#team">Team</a>
            <a href="#contact" className="nav-cta">Get Started</a>
          </div>

          <button 
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
        
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Star className="badge-icon" />
              <span>Award-Winning Development Team</span>
            </div>
            
            <h1 className="hero-title">
              Building the <span className="gradient-text">Future</span> of
              <br />Digital Innovation
            </h1>
            
            <p className="hero-description">
              Transform your business with cutting-edge technology solutions. 
              We create powerful, scalable applications that drive growth and 
              deliver exceptional user experiences.
            </p>
            
            <div className="hero-buttons">
              <button className="btn-primary">
                <span>Start Your Project</span>
                <ArrowRight className="btn-icon" />
              </button>
              <button className="btn-secondary">
                <Play className="btn-icon" />
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-card main-card">
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="card-title">Project Dashboard</div>
              </div>
              <div className="card-content">
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
                <div className="card-stats">
                  <div className="mini-stat">
                    <TrendingUp size={16} />
                    <span>+45%</span>
                  </div>
                  <div className="mini-stat">
                    <Users size={16} />
                    <span>2.4K</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hero-card floating-card-1">
              <Globe className="card-icon" />
              <div className="card-text">Global Reach</div>
            </div>
            
            <div className="hero-card floating-card-2">
              <Zap className="card-icon" />
              <div className="card-text">Lightning Fast</div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <ChevronDown />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Target className="badge-icon" />
              <span>About InnovateTech</span>
            </div>
            <h2 className="section-title">
              Transforming Ideas Into 
              <span className="gradient-text"> Digital Reality</span>
            </h2>
            <p className="section-description">
              We're a passionate team of innovators, designers, and developers 
              dedicated to creating exceptional digital experiences that drive business growth.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-content">
              <div className="feature-list">
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <div>
                    <h3>15+ Years of Excellence</h3>
                    <p>Proven track record delivering complex enterprise solutions</p>
                  </div>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <div>
                    <h3>Cutting-Edge Technology</h3>
                    <p>Latest frameworks and tools for future-ready applications</p>
                  </div>
                </div>
                <div className="feature-item">
                  <CheckCircle className="feature-icon" />
                  <div>
                    <h3>Agile Development</h3>
                    <p>Fast iterations with continuous feedback and improvements</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-visual">
              <div className="visual-card">
                {/* Placeholder: Modern office space with developers collaborating, bright and airy environment, multiple monitors showing colorful dashboards and code */}
                <div className="placeholder-content">
                  <div className="placeholder-text">Team Collaboration Image</div>
                  <p>Modern office with developers working together on innovative projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Layers className="badge-icon" />
              <span>Our Services</span>
            </div>
            <h2 className="section-title">
              Comprehensive <span className="gradient-text">Digital Solutions</span>
            </h2>
            <p className="section-description">
              From concept to deployment, we provide end-to-end development services 
              that bring your vision to life.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className={`service-icon bg-gradient-to-r ${service.color}`}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="service-btn">
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-decoration"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Award className="badge-icon" />
              <span>Our Work</span>
            </div>
            <h2 className="section-title">
              Success Stories & <span className="gradient-text">Case Studies</span>
            </h2>
            <p className="section-description">
              Explore our portfolio of successful projects across various industries.
            </p>
          </div>

          <div className="portfolio-grid">
            <div className="portfolio-card featured">
              <div className="portfolio-image">
                {/* Placeholder: E-commerce dashboard with clean UI, showing analytics charts, product management interface */}
                <div className="placeholder-content">
                  <div className="placeholder-text">E-Commerce Platform</div>
                  <p>Modern dashboard with analytics and management tools</p>
                </div>
              </div>
              <div className="portfolio-content">
                <div className="portfolio-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>AWS</span>
                </div>
                <h3>E-Commerce Revolution</h3>
                <p>Transformed a traditional retailer into a digital powerhouse with 300% increase in online sales.</p>
                <button className="portfolio-btn">
                  View Case Study
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-image">
                {/* Placeholder: Healthcare app interface showing patient management system with clean medical design */}
                <div className="placeholder-content">
                  <div className="placeholder-text">HealthTech App</div>
                  <p>Patient management system with intuitive interface</p>
                </div>
              </div>
              <div className="portfolio-content">
                <div className="portfolio-tags">
                  <span>Vue.js</span>
                  <span>Python</span>
                  <span>HIPAA</span>
                </div>
                <h3>Healthcare Innovation</h3>
                <p>HIPAA-compliant platform serving 50+ medical facilities.</p>
              </div>
            </div>

            <div className="portfolio-card">
              <div className="portfolio-image">
                {/* Placeholder: Financial trading interface with real-time charts and dark theme */}
                <div className="placeholder-content">
                  <div className="placeholder-text">FinTech Platform</div>
                  <p>Real-time trading dashboard with advanced analytics</p>
                </div>
              </div>
              <div className="portfolio-content">
                <div className="portfolio-tags">
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
      <section id="team" className="team">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Users className="badge-icon" />
              <span>Our Team</span>
            </div>
            <h2 className="section-title">
              Meet the <span className="gradient-text">Innovators</span>
            </h2>
            <p className="section-description">
              Passionate professionals dedicated to bringing your vision to life.
            </p>
          </div>

          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">
                  <span>{member.avatar}</span>
                  <div className="avatar-decoration"></div>
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <div className="team-specialty">
                  <Briefcase size={16} />
                  <span>{member.specialty}</span>
                </div>
                <div className="team-social">
                  <button>Connect</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Heart className="badge-icon" />
              <span>Client Love</span>
            </div>
            <h2 className="section-title">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p>"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
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
      <section className="technology">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Code className="badge-icon" />
              <span>Technology Stack</span>
            </div>
            <h2 className="section-title">
              Powered by <span className="gradient-text">Modern Tech</span>
            </h2>
          </div>

          <div className="tech-grid">
            <div className="tech-category">
              <h3>Frontend</h3>
              <div className="tech-items">
                <div className="tech-item">React</div>
                <div className="tech-item">Vue.js</div>
                <div className="tech-item">Angular</div>
                <div className="tech-item">TypeScript</div>
              </div>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <div className="tech-items">
                <div className="tech-item">Node.js</div>
                <div className="tech-item">Python</div>
                <div className="tech-item">Java</div>
                <div className="tech-item">Go</div>
              </div>
            </div>
            <div className="tech-category">
              <h3>Cloud</h3>
              <div className="tech-items">
                <div className="tech-item">AWS</div>
                <div className="tech-item">Azure</div>
                <div className="tech-item">GCP</div>
                <div className="tech-item">Docker</div>
              </div>
            </div>
            <div className="tech-category">
              <h3>Database</h3>
              <div className="tech-items">
                <div className="tech-item">PostgreSQL</div>
                <div className="tech-item">MongoDB</div>
                <div className="tech-item">Redis</div>
                <div className="tech-item">ElasticSearch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Coffee className="badge-icon" />
              <span>Let's Talk</span>
            </div>
            <h2 className="section-title">
              Ready to Start Your <span className="gradient-text">Next Project?</span>
            </h2>
            <p className="section-description">
              Let's discuss how we can bring your vision to life with cutting-edge technology.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-form-container">
              <div className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input type="text" placeholder="Your Company" />
                </div>
                <div className="form-group">
                  <label>Project Details</label>
                  <textarea rows="4" placeholder="Tell us about your project..."></textarea>
                </div>
                <button onClick={() => alert('Message sent! We\'ll get back to you soon.')} className="btn-primary full-width">
                  <span>Send Message</span>
                  <ArrowRight className="btn-icon" />
                </button>
              </div>
            </div>

            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>hello@innovatetech.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone />
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin />
                </div>
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Innovation Street<br />San Francisco, CA 94102</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
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
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <Rocket className="logo-icon" />
                <span>InnovateTech</span>
              </div>
              <p>Transforming businesses through innovative digital solutions and cutting-edge technology.</p>
              <div className="footer-social">
                <button>LinkedIn</button>
                <button>Twitter</button>
                <button>GitHub</button>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <a href="#">Web Development</a>
                <a href="#">Mobile Apps</a>
                <a href="#">Cloud Solutions</a>
                <a href="#">AI Integration</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
              </div>
              <div className="footer-column">
                <h4>Resources</h4>
                <a href="#">Documentation</a>
                <a href="#">Case Studies</a>
                <a href="#">Support</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 InnovateTech. All rights reserved.</p>
            <p>Crafted with ❤️ and lots of ☕</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CorporateLanding;