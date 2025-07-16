import React, { useState, useEffect } from 'react';
import {
  Sparkles, Brain, Zap, Palette, Video, Music, FileText, Image,
  ArrowRight, Play, ChevronDown, Star, Users, Award, Clock,
  CheckCircle, X, Menu, Globe, Smartphone, Monitor, Tablet,
  MousePointer, Layers, Wand2, Mic, Camera, PenTool, Scissors,
  Calendar,
  Download, Share2, Heart, Eye, MessageSquare, TrendingUp,
  Rocket, Shield, Infinity, Target, Lightbulb, Settings
} from 'lucide-react';

const SoftRanchLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % aiFeatures.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const aiFeatures = [
    {
      icon: <Image size={32} />,
      title: 'AI Image Generation',
      description: 'Create stunning visuals from text prompts with our advanced AI models',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Video size={32} />,
      title: 'AI Video Creation',
      description: 'Generate professional videos with AI-powered editing and effects',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <FileText size={32} />,
      title: 'AI Content Writing',
      description: 'Craft compelling copy, articles, and scripts with intelligent assistance',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Music size={32} />,
      title: 'AI Music Composition',
      description: 'Compose original soundtracks and beats tailored to your projects',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Palette size={32} />,
      title: 'AI Design Studio',
      description: 'Create logos, graphics, and brand materials with AI precision',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: <Mic size={32} />,
      title: 'AI Voice Synthesis',
      description: 'Generate natural-sounding voiceovers in multiple languages',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const creativeTools = [
    {
      name: 'AI Canvas',
      description: 'Infinite creative workspace with AI assistance',
      icon: <Layers size={24} />,
      features: ['Smart layouts', 'Auto-suggestions', 'Real-time collaboration']
    },
    {
      name: 'Neural Brush',
      description: 'Paint with AI-powered artistic intelligence',
      icon: <PenTool size={24} />,
      features: ['Style transfer', 'Auto-completion', 'Texture generation']
    },
    {
      name: 'Smart Editor',
      description: 'Video editing with AI-powered automation',
      icon: <Scissors size={24} />,
      features: ['Auto-cuts', 'Scene detection', 'Color grading']
    },
    {
      name: 'Voice Studio',
      description: 'Professional audio creation and editing',
      icon: <Mic size={24} />,
      features: ['Noise removal', 'Voice cloning', 'Audio enhancement']
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Input Your Vision',
      description: 'Describe your creative idea or upload reference materials',
      icon: <Lightbulb size={24} />
    },
    {
      step: '02',
      title: 'AI Processing',
      description: 'Our neural networks analyze and interpret your requirements',
      icon: <Brain size={24} />
    },
    {
      step: '03',
      title: 'Smart Generation',
      description: 'Watch as AI creates multiple variations of your concept',
      icon: <Wand2 size={24} />
    },
    {
      step: '04',
      title: 'Refine & Perfect',
      description: 'Fine-tune results with our intuitive editing tools',
      icon: <Settings size={24} />
    }
  ];

  const showcaseItems = [
    {
      type: 'image',
      title: 'Digital Art Collection',
      category: 'AI Generated Art',
      likes: 2847,
      views: 15630,
      gradient: 'from-purple-600 via-pink-600 to-red-600'
    },
    {
      type: 'video',
      title: 'Brand Campaign Video',
      category: 'AI Video Production',
      likes: 1923,
      views: 8475,
      gradient: 'from-blue-600 via-cyan-600 to-teal-600'
    },
    {
      type: 'design',
      title: 'Logo Design Suite',
      category: 'AI Branding',
      likes: 3421,
      views: 12890,
      gradient: 'from-green-600 via-emerald-600 to-cyan-600'
    },
    {
      type: 'music',
      title: 'Ambient Soundscape',
      category: 'AI Music',
      likes: 1567,
      views: 6234,
      gradient: 'from-orange-600 via-amber-600 to-yellow-600'
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual creators and freelancers',
      features: [
        '100 AI generations/month',
        'HD quality outputs',
        'Basic editing tools',
        'Community support',
        '5GB cloud storage'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for agencies and growing businesses',
      features: [
        'Unlimited AI generations',
        '4K quality outputs',
        'Advanced editing suite',
        'Priority support',
        '100GB cloud storage',
        'Team collaboration',
        'Custom AI training'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Everything in Professional',
        'Unlimited storage',
        'Dedicated account manager',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'Creative Director at Pixel Studios',
      content: 'SoftRanch AI has revolutionized our creative workflow. What used to take days now takes hours, and the quality is absolutely mind-blowing.',
      avatar: '👩‍🎨',
      rating: 5,
      company: 'Pixel Studios'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Independent Filmmaker',
      content: 'The AI video tools are incredible. I can now create professional-grade content without a huge team or budget. Game changer!',
      avatar: '🎬',
      rating: 5,
      company: 'Rodriguez Films'
    },
    {
      name: 'Emily Thompson',
      title: 'Brand Designer',
      content: 'I\'ve never been more productive. The AI suggestions are spot-on and help me explore creative directions I never would have thought of.',
      avatar: '🎨',
      rating: 5,
      company: 'Thompson Design Co.'
    }
  ];

  const stats = [
    { number: '2M+', label: 'Creations Generated', icon: <Sparkles size={20} /> },
    { number: '50K+', label: 'Active Creators', icon: <Users size={20} /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield size={20} /> },
    { number: '150+', label: 'Countries Served', icon: <Globe size={20} /> }
  ];

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      lineHeight: 1.6,
      color: '#ffffff',
      backgroundColor: '#0a0b1e',
      overflow: 'hidden'
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.05) 0%, transparent 50%)',
        zIndex: -2
      }}>
        {/* Floating Orbs */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              background: `linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))`,
              borderRadius: '50%',
              filter: 'blur(1px)',
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: scrollY > 50 ? 'rgba(10, 11, 30, 0.95)' : 'rgba(10, 11, 30, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(99, 102, 241, 0.1)',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        boxShadow: scrollY > 50 ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)'
            }}>
              <Brain size={20} color="white" />
            </div>
            <span style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #ffffff, #6366f1)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              SoftRanch AI
            </span>
          </div>

          {/* Desktop Menu */}
          <div style={{
            display: window.innerWidth >= 768 ? 'flex' : 'none',
            gap: '2rem',
            alignItems: 'center'
          }}>
            {['Features', 'Tools', 'Pricing', 'Showcase', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  fontWeight: '600',
                  padding: '0.5rem 0',
                  transition: 'color 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                onMouseLeave={(e) => e.target.style.color = '#e2e8f0'}
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <button style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              padding: '0.75rem 1.5rem',
              fontSize: '0.9rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
              display: window.innerWidth >= 768 ? 'flex' : 'none',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(99, 102, 241, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.3)';
            }}
            >
              Start Creating
              <ArrowRight size={16} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                display: window.innerWidth < 768 ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                background: 'rgba(99, 102, 241, 0.1)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                borderRadius: '8px',
                color: '#6366f1',
                cursor: 'pointer'
              }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={{
            display: window.innerWidth < 768 ? 'block' : 'none',
            background: 'rgba(10, 11, 30, 0.95)',
            borderTop: '1px solid rgba(99, 102, 241, 0.1)',
            padding: '1rem 2rem'
          }}>
            {['Features', 'Tools', 'Pricing', 'Showcase', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  display: 'block',
                  color: '#e2e8f0',
                  textDecoration: 'none',
                  fontWeight: '600',
                  padding: '1rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              padding: '0.75rem 1.5rem',
              fontSize: '0.9rem',
              fontWeight: '600',
              cursor: 'pointer',
              marginTop: '1rem',
              width: '100%'
            }}>
              Start Creating
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '2rem',
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(99, 102, 241, 0.1)',
              borderRadius: '50px',
              padding: '0.5rem 1rem',
              marginBottom: '2rem',
              border: '1px solid rgba(99, 102, 241, 0.2)'
            }}>
              <Sparkles size={16} color="#6366f1" />
              <span style={{
                color: '#6366f1',
                fontWeight: '600',
                fontSize: '0.9rem'
              }}>
                AI-Powered Creative Studio
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: '900',
              lineHeight: '1.1',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #ffffff, #6366f1, #8b5cf6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Create Amazing Content with
              <span style={{ display: 'block', color: '#6366f1' }}>
                AI Intelligence
              </span>
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: '#94a3b8',
              marginBottom: '2.5rem',
              lineHeight: '1.7'
            }}>
              Transform your creative process with our revolutionary AI platform. Generate stunning visuals, videos, music, and content in minutes, not hours.
            </p>

            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}>
              <button style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 12px 35px rgba(99, 102, 241, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 25px rgba(99, 102, 241, 0.3)';
              }}
              >
                Start Free Trial
                <Rocket size={20} />
              </button>

              <button style={{
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#ffffff',
                border: '2px solid rgba(99, 102, 241, 0.3)',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(99, 102, 241, 0.1)';
                e.target.style.borderColor = 'rgba(99, 102, 241, 0.5)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                e.target.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                e.target.style.transform = 'translateY(0)';
              }}
              >
                <Play size={20} />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              {stats.slice(0, 2).map((stat, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(99, 102, 241, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6366f1'
                  }}>
                    {stat.icon}
                  </div>
                  <div>
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: '800',
                      color: '#ffffff'
                    }}>
                      {stat.number}
                    </div>
                    <div style={{
                      fontSize: '0.9rem',
                      color: '#94a3b8'
                    }}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '400px',
              height: '400px',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              animation: 'float 6s ease-in-out infinite'
            }}>
              {/* Rotating AI Icons */}
              {aiFeatures.slice(0, 4).map((feature, index) => (
                <div
                  key={index}
                  style={{
                    position: 'absolute',
                    width: '80px',
                    height: '80px',
                    background: `linear-gradient(135deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`,
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                    transform: `rotate(${index * 90}deg) translateX(150px) rotate(-${index * 90}deg)`,
                    animation: `orbit 20s linear infinite`,
                    animationDelay: `${index * 5}s`
                  }}
                >
                  {feature.icon}
                </div>
              ))}
              
              {/* Central AI Brain */}
              <div style={{
                width: '120px',
                height: '120px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                borderRadius: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)',
                animation: 'pulse 3s ease-in-out infinite'
              }}>
                <Brain size={50} color="white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Features Section */}
      <section id="features" style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, transparent 0%, rgba(99, 102, 241, 0.02) 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(99, 102, 241, 0.1)',
              borderRadius: '50px',
              padding: '0.5rem 1rem',
              marginBottom: '1rem',
              border: '1px solid rgba(99, 102, 241, 0.2)'
            }}>
              <Zap size={16} color="#6366f1" />
              <span style={{
                color: '#6366f1',
                fontWeight: '600',
                fontSize: '0.9rem'
              }}>
                AI-Powered Features
              </span>
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff, #6366f1)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Revolutionary AI Capabilities
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#94a3b8',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Experience the future of content creation with our cutting-edge AI technologies that understand and enhance your creative vision.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {aiFeatures.map((feature, index) => (
              <div
                key={index}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(99, 102, 241, 0.1)',
                  borderRadius: '20px',
                  padding: '2rem',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-10px)';
                  e.target.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                  e.target.style.boxShadow = '0 25px 50px rgba(99, 102, 241, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.borderColor = 'rgba(99, 102, 241, 0.1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: `linear-gradient(135deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`,
                  borderRadius: '50%',
                  opacity: 0.1,
                  transform: 'translate(30px, -30px)'
                }}></div>

                <div style={{
                  width: '70px',
                  height: '70px',
                  background: `linear-gradient(135deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  marginBottom: '1.5rem',
                  boxShadow: `0 8px 25px ${feature.color.split(' ')[1]}40`,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: '#ffffff',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: '#94a3b8',
                  lineHeight: '1.6',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Tools Section */}
      <section id="tools" style={{
        padding: '6rem 2rem',
        background: 'rgba(0, 0, 0, 0.2)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff, #8b5cf6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Professional Creative Tools
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#94a3b8',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Everything you need to bring your creative visions to life, powered by advanced AI algorithms.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {creativeTools.map((tool, index) => (
              <div
                key={index}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '2rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  marginBottom: '1.5rem'
                }}>
                  {tool.icon}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  marginBottom: '0.75rem',
                  color: '#ffffff'
                }}>
                  {tool.name}
                </h3>
                <p style={{
                  color: '#94a3b8',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  {tool.description}
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {tool.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.5rem',
                        color: '#e2e8f0',
                        fontSize: '0.9rem'
                      }}
                    >
                      <CheckCircle size={16} color="#10b981" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.02) 0%, transparent 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff, #ec4899)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              How SoftRanch AI Works
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#94a3b8',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              From idea to creation in four simple steps. Our AI handles the complexity while you focus on creativity.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(4, 1fr)' : '1fr',
            gap: '2rem'
          }}>
            {workflowSteps.map((step, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  textAlign: 'center',
                  padding: '2rem 1rem'
                }}
              >
                {/* Connection Line */}
                {index < workflowSteps.length - 1 && window.innerWidth >= 768 && (
                  <div style={{
                    position: 'absolute',
                    top: '80px',
                    right: '-50%',
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
                    zIndex: 0
                  }}></div>
                )}

                <div style={{
                  position: 'relative',
                  zIndex: 1
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    margin: '0 auto 1rem',
                    fontSize: '1.5rem',
                    fontWeight: '800',
                    boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
                    position: 'relative'
                  }}>
                    {step.step}
                    <div style={{
                      position: 'absolute',
                      inset: '-4px',
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      borderRadius: '50%',
                      zIndex: -1,
                      animation: 'pulse 3s ease-in-out infinite'
                    }}></div>
                  </div>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'rgba(99, 102, 241, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6366f1',
                    margin: '0 auto 1.5rem',
                    border: '2px solid rgba(99, 102, 241, 0.2)'
                  }}>
                    {step.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    color: '#ffffff'
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    color: '#94a3b8',
                    lineHeight: '1.6'
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" style={{
        padding: '6rem 2rem',
        background: 'rgba(0, 0, 0, 0.3)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff, #06b6d4)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Creative Showcase
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#94a3b8',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Discover amazing creations made by our community using SoftRanch AI AI tools.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {showcaseItems.map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-10px)';
                  e.target.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  height: '200px',
                  background: `linear-gradient(135deg, ${item.gradient})`,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)'
                  }}>
                    {item.type === 'image' && <Image size={24} color="white" />}
                    {item.type === 'video' && <Video size={24} color="white" />}
                    {item.type === 'design' && <Palette size={24} color="white" />}
                    {item.type === 'music' && <Music size={24} color="white" />}
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: '20px',
                    padding: '0.5rem 1rem',
                    fontSize: '0.8rem',
                    color: 'white'
                  }}>
                    {item.category}
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    color: '#ffffff'
                  }}>
                    {item.title}
                  </h3>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: '#94a3b8',
                    fontSize: '0.9rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <Heart size={16} />
                      {item.likes.toLocaleString()}
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <Eye size={16} />
                      {item.views.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.02) 0%, rgba(139, 92, 246, 0.02) 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff, #10b981)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Choose Your Plan
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#94a3b8',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Flexible pricing options to suit creators, professionals, and enterprises.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                style={{
                  background: plan.popular ? 
                    'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.05))' :
                    'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
                  backdropFilter: 'blur(20px)',
                  border: plan.popular ? '2px solid rgba(139, 92, 246, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '2rem',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-10px)';
                  e.target.style.boxShadow = plan.popular ? 
                    '0 25px 50px rgba(139, 92, 246, 0.2)' :
                    '0 25px 50px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {plan.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-1px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                    color: 'white',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '0 0 12px 12px',
                    fontSize: '0.85rem',
                    fontWeight: '600'
                  }}>
                    Most Popular
                  </div>
                )}

                <div style={{
                  textAlign: 'center',
                  marginBottom: '2rem',
                  paddingTop: plan.popular ? '1rem' : '0'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    color: '#ffffff'
                  }}>
                    {plan.name}
                  </h3>
                  <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'center',
                    gap: '0.25rem',
                    marginBottom: '1rem'
                  }}>
                    <span style={{
                      fontSize: '3rem',
                      fontWeight: '800',
                      background: `linear-gradient(135deg, ${plan.color.split(' ')[1]}, ${plan.color.split(' ')[3]})`,
                      color:"white"
                    }}>
                      {plan.price}
                    </span>
                    <span style={{
                      fontSize: '1rem',
                      color: '#94a3b8'
                    }}>
                      {plan.period}
                    </span>
                  </div>
                  <p style={{
                    color: '#94a3b8',
                    fontSize: '0.9rem'
                  }}>
                    {plan.description}
                  </p>
                </div>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 2rem 0'
                }}>
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '0.75rem',
                        color: '#e2e8f0',
                        fontSize: '0.95rem'
                      }}
                    >
                      <CheckCircle size={18} color="#10b981" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button style={{
                  width: '100%',
                  background: plan.popular ? 
                    'linear-gradient(135deg, #8b5cf6, #ec4899)' :
                    'rgba(99, 102, 241, 0.1)',
                  color: plan.popular ? 'white' : '#6366f1',
                  border: plan.popular ? 'none' : '2px solid rgba(99, 102, 241, 0.3)',
                  borderRadius: '12px',
                  padding: '1rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (plan.popular) {
                    e.target.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.4)';
                  } else {
                    e.target.style.background = 'rgba(99, 102, 241, 0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.popular) {
                    e.target.style.boxShadow = 'none';
                  } else {
                    e.target.style.background = 'rgba(99, 102, 241, 0.1)';
                  }
                }}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{
        padding: '6rem 2rem',
        background: 'rgba(0, 0, 0, 0.2)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff, #f59e0b)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              What Creators Say
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#94a3b8',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Join thousands of creators who have transformed their workflow with SoftRanch AI.
            </p>
          </div>

          <div style={{
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '3rem',
              textAlign: 'center',
              transition: 'all 0.5s ease'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.25rem',
                marginBottom: '1.5rem'
              }}>
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={20} color="#f59e0b" fill="#f59e0b" />
                ))}
              </div>
              
              <p style={{
                fontSize: '1.3rem',
                color: '#e2e8f0',
                lineHeight: '1.7',
                marginBottom: '2rem',
                fontStyle: 'italic'
              }}>
                "{testimonials[currentTestimonial].content}"
              </p>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem'
                }}>
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '0.25rem'
                  }}>
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#94a3b8'
                  }}>
                    {testimonials[currentTestimonial].title}
                  </div>
                  <div style={{
                    fontSize: '0.85rem',
                    color: '#6366f1'
                  }}>
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Indicators */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '2rem'
            }}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    background: index === currentTestimonial ? '#6366f1' : 'rgba(99, 102, 241, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '900',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #ffffff, #6366f1, #8b5cf6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Ready to Create Magic?
          </h2>
          <p style={{
            fontSize: '1.3rem',
            color: '#94a3b8',
            marginBottom: '2.5rem',
            lineHeight: '1.7'
          }}>
            Join millions of creators who are already using AI to bring their wildest ideas to life. Start your free trial today and experience the future of creativity.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            <button style={{
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              color: 'white',
              border: 'none',
              padding: '1.25rem 2.5rem',
              borderRadius: '50px',
              fontSize: '1.2rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(99, 102, 241, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 12px 35px rgba(99, 102, 241, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 25px rgba(99, 102, 241, 0.3)';
            }}
            >
              Start Free Trial
              <Sparkles size={20} />
            </button>

            <button style={{
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#ffffff',
              border: '2px solid rgba(99, 102, 241, 0.3)',
              padding: '1.25rem 2.5rem',
              borderRadius: '50px',
              fontSize: '1.2rem',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(99, 102, 241, 0.1)';
              e.target.style.borderColor = 'rgba(99, 102, 241, 0.5)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
              e.target.style.borderColor = 'rgba(99, 102, 241, 0.3)';
              e.target.style.transform = 'translateY(0)';
            }}
            >
              Book a Demo
              <Calendar size={20} />
            </button>
          </div>

          {/* Final Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #ffffff, #6366f1)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: '#94a3b8',
                  fontWeight: '600'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'rgba(0, 0, 0, 0.5)',
        padding: '3rem 2rem 1rem',
        borderTop: '1px solid rgba(99, 102, 241, 0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(4, 1fr)' : '1fr',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/* Company Info */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Brain size={16} color="white" />
                </div>
                <span style={{
                  fontSize: '1.25rem',
                  fontWeight: '800',
                  color: '#ffffff'
                }}>
                  SoftRanch AI
                </span>
              </div>
              <p style={{
                color: '#94a3b8',
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}>
                Empowering creators worldwide with AI-powered tools that transform imagination into reality.
              </p>
              <div style={{
                display: 'flex',
                gap: '0.5rem'
              }}>
                {['AI-Powered', 'Creator-First', 'Global'].map((badge) => (
                  <span
                    key={badge}
                    style={{
                      background: 'rgba(99, 102, 241, 0.1)',
                      color: '#6366f1',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 style={{
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#ffffff'
              }}>
                Product
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {['AI Image Generator', 'Video Creator', 'Music Composer', 'Design Studio', 'Voice Synthesis'].map((item) => (
                  <li key={item} style={{ marginBottom: '0.5rem' }}>
                    <a
                      href="#"
                      style={{
                        color: '#94a3b8',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                      onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 style={{
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#ffffff'
              }}>
                Company
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {['About Us', 'Careers', 'Press', 'Blog', 'Contact'].map((item) => (
                  <li key={item} style={{ marginBottom: '0.5rem' }}>
                    <a
                      href="#"
                      style={{
                        color: '#94a3b8',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                      onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 style={{
                fontWeight: '700',
                marginBottom: '1rem',
                color: '#ffffff'
              }}>
                Resources
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {['Documentation', 'API Reference', 'Community', 'Support', 'Status'].map((item) => (
                  <li key={item} style={{ marginBottom: '0.5rem' }}>
                    <a
                      href="#"
                      style={{
                        color: '#94a3b8',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#6366f1'}
                      onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(99, 102, 241, 0.1)',
            textAlign: 'center',
            color: '#94a3b8'
          }}>
            <p>
              © 2024 SoftRanch AI. All rights reserved. Powered by AI, created for humans.
            </p>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes orbit {
          from { transform: rotate(0deg) translateX(150px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
        }

        @media (max-width: 768px) {
          .responsive-hide {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default SoftRanchLanding;