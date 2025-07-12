import React, { useState, useEffect, useRef } from 'react';
import { 
  Zap, 
  Sparkles, 
  Code, 
  Palette, 
  Rocket, 
  Eye, 
  Star, 
  Play,
  ArrowRight,
  Mouse,
  Globe,
  Smartphone,
  Monitor,
  Cpu,
  Layers,
  Wand2,
  ExternalLink,
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  ShoppingCart,
  Phone,
  MapPin
} from 'lucide-react';
import './style.css';

const NebulaStudios = () => {
  const [currentService, setCurrentService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef(null);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
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
          entry.target.classList.add('sample2__animate-in');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.sample2__animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Auto-rotating services
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService(prev => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Globe size={32} />,
      title: "Web Experiences",
      description: "Immersive websites that push boundaries",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Apps",
      description: "Native and cross-platform applications",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Cpu size={32} />,
      title: "AI Solutions",
      description: "Machine learning and automation",
      color: "from-green-400 to-cyan-500"
    },
    {
      icon: <Wand2 size={32} />,
      title: "Digital Art",
      description: "NFTs and generative masterpieces",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: <Layers size={32} />,
      title: "3D Experiences",
      description: "Virtual reality and immersive worlds",
      color: "from-indigo-400 to-purple-500"
    }
  ];

  const projects = [
    {
      title: "Cosmic E-commerce",
      category: "Web Design",
      description: "Next-gen shopping experience with AR integration",
      icon: <ShoppingCart size={40} />,
      secondaryIcon: <Eye size={24} />,
      tags: ["React", "Three.js", "WebXR"]
    },
    {
      title: "Neural Network Viz",
      category: "Data Visualization", 
      description: "Interactive machine learning dashboard",
      icon: <Cpu size={40} />,
      secondaryIcon: <Layers size={24} />,
      tags: ["D3.js", "Python", "TensorFlow"]
    },
    {
      title: "Metaverse Gallery",
      category: "3D Experience",
      description: "Virtual art gallery in the metaverse",
      icon: <Monitor size={40} />,
      secondaryIcon: <Sparkles size={24} />,
      tags: ["Unity", "WebGL", "Blockchain"]
    },
    {
      title: "AI Music Studio",
      category: "Mobile App", 
      description: "AI-powered music creation platform",
      icon: <Smartphone size={40} />,
      secondaryIcon: <Wand2 size={24} />,
      tags: ["React Native", "ML Kit", "Audio"]
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "Creative Director",
      bio: "Visionary designer with 10+ years creating digital experiences",
      avatar: "AC",
      icon: <Palette size={24} />,
      color: "from-cyan-400 to-blue-500"
    },
    {
      name: "Maya Rodriguez", 
      role: "Lead Developer",
      bio: "Full-stack wizard specializing in cutting-edge technologies",
      avatar: "MR",
      icon: <Code size={24} />,
      color: "from-purple-400 to-pink-500"
    },
    {
      name: "Kai Nakamura",
      role: "AI Specialist", 
      bio: "Machine learning expert pushing the boundaries of possibility",
      avatar: "KN",
      icon: <Cpu size={24} />,
      color: "from-green-400 to-cyan-500"
    }
  ];

  if (isLoading) {
    return (
      <div className="sample2__loading-screen">
        <div className="sample2__loading-animation">
          <div className="sample2__loading-circle"></div>
          <div className="sample2__loading-text">
            <span>Nebula</span>
            <span className="sample2__loading-studios">Studios</span>
          </div>
        </div>
        <div className="sample2__loading-particles"></div>
      </div>
    );
  }

  return (
    <div className="sample2__studio-wrapper">
      {/* Custom Cursor */}
      <div 
        className="sample2__custom-cursor"
        style={{ 
          left: mousePosition.x, 
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>

      {/* Background Effects */}
      <div className="sample2__bg-effects">
        <div className="sample2__stars"></div>
        <div className="sample2__nebula-bg"></div>
        <div className="sample2__floating-particles"></div>
      </div>

      {/* Navigation */}
      <nav className="sample2__navbar">
        <div className="sample2__nav-container">
          <div className="sample2__logo">
            <Sparkles size={28} />
            <span>Nebula<span className="sample2__logo-accent">Studios</span></span>
          </div>
          <div className="sample2__nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="sample2__nav-cta">
            <Rocket size={18} />
            <span>Start Project</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="sample2__hero" ref={heroRef}>
        <div className="sample2__hero-content">
          <div className="sample2__hero-badge">
            <Zap size={16} />
            <span>Digital Innovation Lab</span>
          </div>
          
          <h1 className="sample2__hero-title">
            We Create
            <span className="sample2__gradient-text"> Digital Magic </span>
            That Transcends Reality
          </h1>
          
          <p className="sample2__hero-description">
            Nebula Studios crafts immersive digital experiences that push the boundaries 
            of technology and creativity. From AI-powered applications to breathtaking 
            3D worlds, we transform ideas into extraordinary realities.
          </p>

          <div className="sample2__hero-stats">
            <div className="sample2__stat">
              <span className="sample2__stat-number">150+</span>
              <span className="sample2__stat-label">Projects Launched</span>
            </div>
            <div className="sample2__stat">
              <span className="sample2__stat-number">50+</span>
              <span className="sample2__stat-label">Happy Clients</span>
            </div>
            <div className="sample2__stat">
              <span className="sample2__stat-number">25+</span>
              <span className="sample2__stat-label">Awards Won</span>
            </div>
          </div>

          <div className="sample2__hero-buttons">
            <button className="sample2__btn-primary">
              <Play size={20} />
              <span>Watch Our Work</span>
            </button>
            <button className="sample2__btn-secondary">
              <span>Explore Projects</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="sample2__hero-visual">
          <div className="sample2__hero-orb">
            <div className="sample2__orb-inner">
              <div className="sample2__orb-content">
                <div className="sample2__orb-center">
                  <Cpu size={60} />
                </div>
                <div className="sample2__orb-rings">
                  <div className="sample2__ring sample2__ring-1">
                    <Code size={24} />
                  </div>
                  <div className="sample2__ring sample2__ring-2">
                    <Palette size={24} />
                  </div>
                  <div className="sample2__ring sample2__ring-3">
                    <Rocket size={24} />
                  </div>
                  <div className="sample2__ring sample2__ring-4">
                    <Sparkles size={24} />
                  </div>
                </div>
                <div className="sample2__orb-particles">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className={`sample2__particle sample2__particle-${i + 1}`}>
                      <div className="sample2__particle-dot"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="sample2__orb-glow"></div>
          </div>
        </div>

        <div className="sample2__scroll-indicator">
          <Mouse size={20} />
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="sample2__services">
        <div className="sample2__container">
          <div className="sample2__section-header sample2__animate-on-scroll">
            <h2 className="sample2__section-title">Our Cosmic Services</h2>
            <p className="sample2__section-subtitle">
              We specialize in cutting-edge technologies that shape the future of digital experiences
            </p>
          </div>

          <div className="sample2__services-showcase sample2__animate-on-scroll">
            <div className="sample2__service-visual">
              <div className="sample2__service-card-large">
                <div className={`sample2__service-icon-large bg-gradient-to-r ${services[currentService].color}`}>
                  {services[currentService].icon}
                </div>
                <h3>{services[currentService].title}</h3>
                <p>{services[currentService].description}</p>
              </div>
            </div>

            <div className="sample2__services-grid">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`sample2__service-card ${index === currentService ? 'active' : ''}`}
                  onClick={() => setCurrentService(index)}
                >
                  <div className={`sample2__service-icon bg-gradient-to-r ${service.color}`}>
                    {service.icon}
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="sample2__work">
        <div className="sample2__container">
          <div className="sample2__section-header sample2__animate-on-scroll">
            <h2 className="sample2__section-title">Featured Universe</h2>
            <p className="sample2__section-subtitle">
              Explore our latest creations that push the boundaries of digital innovation
            </p>
          </div>

          <div className="sample2__projects-grid sample2__animate-on-scroll">
            {projects.map((project, index) => (
              <div key={index} className="sample2__project-card">
                <div className="sample2__project-image">
                  <div className="sample2__project-visual">
                    <div className="sample2__project-bg-pattern"></div>
                    <div className="sample2__project-main-icon">
                      {project.icon}
                    </div>
                    <div className="sample2__project-secondary-icon">
                      {project.secondaryIcon}
                    </div>
                    <div className="sample2__project-grid-overlay">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="sample2__grid-dot"></div>
                      ))}
                    </div>
                  </div>
                  <div className="sample2__project-overlay">
                    <div className="sample2__project-actions">
                      <button className="sample2__project-btn">
                        <Eye size={20} />
                      </button>
                      <button className="sample2__project-btn">
                        <ExternalLink size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="sample2__project-content">
                  <div className="sample2__project-category">{project.category}</div>
                  <h3 className="sample2__project-title">{project.title}</h3>
                  <p className="sample2__project-description">{project.description}</p>
                  
                  <div className="sample2__project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="sample2__project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="sample2__work-cta sample2__animate-on-scroll">
            <button className="sample2__btn-primary">
              <span>View All Projects</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="sample2__team">
        <div className="sample2__container">
          <div className="sample2__section-header sample2__animate-on-scroll">
            <h2 className="sample2__section-title">Cosmic Creators</h2>
            <p className="sample2__section-subtitle">
              Meet the visionaries behind our extraordinary digital experiences
            </p>
          </div>

          <div className="sample2__team-grid sample2__animate-on-scroll">
            {team.map((member, index) => (
              <div key={index} className="sample2__team-card">
                <div className="sample2__team-image">
                  <div className={`sample2__team-avatar bg-gradient-to-r ${member.color}`}>
                    <div className="sample2__avatar-text">{member.avatar}</div>
                    <div className="sample2__avatar-icon">
                      {member.icon}
                    </div>
                  </div>
                  <div className="sample2__team-glow"></div>
                </div>
                
                <div className="sample2__team-content">
                  <h3 className="sample2__team-name">{member.name}</h3>
                  <div className="sample2__team-role">{member.role}</div>
                  <p className="sample2__team-bio">{member.bio}</p>
                  
                  <div className="sample2__team-social">
                    <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
                    <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
                    <a href="#" aria-label="Github"><Github size={18} /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sample2__cta">
        <div className="sample2__container">
          <div className="sample2__cta-content sample2__animate-on-scroll">
            <div className="sample2__cta-text">
              <h2>Ready to Create Something Extraordinary?</h2>
              <p>
                Let's collaborate and bring your wildest digital dreams to life. 
                From concept to launch, we'll be your partners in innovation.
              </p>
            </div>
            
            <div className="sample2__cta-form">
              <h3>Start Your Project</h3>
              <form className="sample2__contact-form">
                <div className="sample2__form-row">
                  <input type="text" placeholder="Your Name" className="sample2__form-input" />
                  <input type="email" placeholder="Email Address" className="sample2__form-input" />
                </div>
                <input type="text" placeholder="Company" className="sample2__form-input" />
                <select className="sample2__form-input">
                  <option>Select Service</option>
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>AI Solutions</option>
                  <option>3D Experience</option>
                  <option>Digital Art</option>
                </select>
                <textarea 
                  placeholder="Tell us about your project..."
                  className="sample2__form-textarea"
                ></textarea>
                <button type="submit" className="sample2__btn-primary sample2__form-submit">
                  <Rocket size={20} />
                  <span>Launch Project</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="sample2__contact">
        <div className="sample2__container">
          <div className="sample2__contact-content">
            <div className="sample2__contact-info sample2__animate-on-scroll">
              <h2>Let's Connect Across the Galaxy</h2>
              
              <div className="sample2__contact-details">
                <div className="sample2__contact-item">
                  <div className="sample2__contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4>Headquarters</h4>
                    <p>42 Innovation Drive<br />Tech District, San Francisco 94103</p>
                  </div>
                </div>
                
                <div className="sample2__contact-item">
                  <div className="sample2__contact-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4>Direct Line</h4>
                    <p>+1 (555) 123-SPACE<br />+1 (555) 123-77223</p>
                  </div>
                </div>
                
                <div className="sample2__contact-item">
                  <div className="sample2__contact-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4>Digital Inbox</h4>
                    <p>hello@nebulastudios.com<br />projects@nebulastudios.com</p>
                  </div>
                </div>
              </div>

              <div className="sample2__social-links">
                <a href="#" aria-label="Twitter"><Twitter size={24} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin size={24} /></a>
                <a href="#" aria-label="Github"><Github size={24} /></a>
              </div>
            </div>

            <div className="sample2__contact-visual sample2__animate-on-scroll">
              <div className="sample2__hologram">
                <div className="sample2__hologram-content">
                  <Monitor size={48} />
                  <h3>Virtual Consultation</h3>
                  <p>Schedule a holographic meeting</p>
                  <button className="sample2__hologram-btn">
                    <span>Book Now</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="sample2__footer">
        <div className="sample2__container">
          <div className="sample2__footer-content">
            <div className="sample2__footer-brand">
              <div className="sample2__footer-logo">
                <Sparkles size={24} />
                <span>Nebula<span className="sample2__logo-accent">Studios</span></span>
              </div>
              <p>Crafting digital experiences that transcend reality and push the boundaries of what's possible.</p>
            </div>
            
            <div className="sample2__footer-links">
              <div className="sample2__footer-column">
                <h4>Services</h4>
                <a href="#">Web Development</a>
                <a href="#">Mobile Apps</a>
                <a href="#">AI Solutions</a>
                <a href="#">3D Experiences</a>
              </div>
              
              <div className="sample2__footer-column">
                <h4>Company</h4>
                <a href="#">About Us</a>
                <a href="#">Our Team</a>
                <a href="#">Careers</a>
                <a href="#">Blog</a>
              </div>
              
              <div className="sample2__footer-column">
                <h4>Connect</h4>
                <a href="#">Contact</a>
                <a href="#">Support</a>
                <a href="#">Community</a>
                <a href="#">Newsletter</a>
              </div>
            </div>
          </div>
          
          <div className="sample2__footer-bottom">
            <p>&copy; 2024 Nebula Studios. All rights reserved. Made with ✨ cosmic energy.</p>
            <div className="sample2__footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NebulaStudios;