import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Brain,
  TrendingUp,
  MessageCircle,
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
  Settings,
  FileText,
  Award,
  Wrench,
  Bot,
  Cpu,
  Database,
  Eye,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import "./style.css";

import img1 from "../../../../static/featured_services_images/ai_dashboard.png";
import img2 from "../../../../static/featured_services_images/ai_website.png";

const AIWebsitesServices = () => {
  const features = [
    {
      icon: <MessageCircle size={32} />,
      title: "ChatGPT & AI Chatbot Integration",
      description:
        "Seamlessly integrate ChatGPT-4, Claude, and custom AI chatbots that provide 24/7 intelligent customer support, lead qualification, and personalized user interactions that feel genuinely human.",
    },
    {
      icon: <Brain size={32} />,
      title: "Intelligent Automation & Workflows",
      description:
        "Deploy AI-powered automation that handles repetitive tasks, processes customer inquiries, schedules appointments, and streamlines business operations without human intervention.",
    },
    {
      icon: <Target size={32} />,
      title: "AI-Powered Personalization Engine",
      description:
        "Create dynamic, personalized experiences for each visitor using machine learning algorithms that adapt content, recommendations, and user journeys in real-time.",
    },
    {
      icon: <Eye size={32} />,
      title: "Predictive Analytics & Insights",
      description:
        "Harness AI to predict customer behavior, identify sales opportunities, analyze user patterns, and provide actionable business intelligence that drives growth.",
    },
    {
      icon: <Sparkles size={32} />,
      title: "AI Content Generation & Optimization",
      description:
        "Automated content creation, SEO optimization, and dynamic content updates powered by advanced language models that maintain your brand voice and maximize engagement.",
    },
    {
      icon: <Database size={32} />,
      title: "Smart Data Processing & Learning",
      description:
        "Implement neural networks that continuously learn from user interactions, optimize conversion paths, and improve website performance through intelligent data analysis.",
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp size={24} />,
      title: "500% More Lead Conversions",
      description:
        "AI-powered websites consistently generate more qualified leads through intelligent chatbots, predictive user targeting, and optimized conversion funnels.",
    },
    {
      icon: <Clock size={24} />,
      title: "24/7 Autonomous Customer Support",
      description:
        "Never miss a customer inquiry with AI assistants that provide instant, accurate responses and seamlessly hand off complex issues to human agents.",
    },
    {
      icon: <Zap size={24} />,
      title: "90% Reduction in Operational Costs",
      description:
        "Automate routine tasks, customer service, content management, and data processing while maintaining superior quality and user satisfaction.",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Competitive AI Advantage",
      description:
        "Stay ahead of competitors with cutting-edge AI features that provide unique value propositions and establish your brand as an industry innovator.",
    },
  ];

  const testimonials = [
    {
      name: "Alex Rodriguez",
      title: "CEO, TechForward Solutions",
      text: "Our AI-powered website has revolutionized our customer experience. The ChatGPT integration handles 80% of inquiries automatically, and our conversion rates increased by 400%. It's like having a genius sales team working 24/7.",
      rating: 5,
    },
    {
      name: "Sarah Kim",
      title: "Director of Digital Innovation, Global Enterprises",
      text: "SoftRanch built us an AI website that feels like something from the future. The predictive analytics helped us identify $2M in new revenue opportunities, and our customers love the personalized experience.",
      rating: 5,
    },
  ];

  const servicePackages = [
    {
      title: "AI Starter Package",
      price: "Starting at $2,997",
      features: [
        "ChatGPT-4 Integration & Custom Chatbot",
        "AI-Powered Contact Forms & Lead Capture",
        "Basic Intelligent Automation Workflows",
        "Smart Content Optimization",
        "Predictive User Analytics Dashboard",
        "AI SEO & Performance Optimization",
      ],
      popular: false,
    },
    {
      title: "AI Professional Package",
      price: "Starting at $7,997",
      features: [
        "Everything in AI Starter Package",
        "Advanced Multi-Language AI Assistants",
        "Predictive Customer Behavior Analytics",
        "AI-Powered Personalization Engine",
        "Intelligent Recommendation Systems",
        "Custom Machine Learning Models",
        "Advanced Automation & CRM Integration",
        "Voice AI & Natural Language Processing",
      ],
      popular: true,
    },
    {
      title: "AI Enterprise Package",
      price: "Starting at $15,997",
      features: [
        "Everything in AI Professional Package",
        "Custom Neural Network Development",
        "Advanced AI Data Processing Pipelines",
        "Multi-Platform AI Agent Deployment",
        "Real-Time Learning & Optimization",
        "Enterprise AI Security & Compliance",
        "Dedicated AI Strategy Consultation",
        "24/7 AI System Monitoring & Support",
      ],
      popular: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          AI Website Development & ChatGPT Integration | Transform Your Business
          with 500% More Conversions | SoftRanch
        </title>
        <meta
          name="description"
          content="Revolutionize your business with AI-powered websites featuring ChatGPT integration, intelligent automation, and predictive analytics. Increase conversions by 500% and reduce operational costs by 90%. Leading AI web development company trusted by Fortune 500 companies."
        />
        <meta
          name="keywords"
          content="AI website development, ChatGPT integration, AI chatbot development, intelligent website design, AI-powered websites, conversational AI development, machine learning websites, AI automation, smart web applications, AI customer support, neural network development, predictive analytics websites"
        />
        <meta
          property="og:title"
          content="AI Website Development & ChatGPT Integration | 500% More Conversions | SoftRanch"
        />
        <meta
          property="og:description"
          content="Transform your business with AI-powered websites. ChatGPT integration, intelligent automation, and machine learning that increase conversions by 500%."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://softranch.agency/ai-website-development-services"
        />
        <link
          rel="canonical"
          href="https://softranch.agency/ai-website-development-services"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Website Development & ChatGPT Integration",
            description:
              "Professional AI-powered website development with ChatGPT integration, intelligent automation, predictive analytics, and machine learning capabilities for businesses seeking competitive advantage.",
            provider: {
              "@type": "Organization",
              name: "SoftRanch",
              url: "https://softranch.agency",
            },
            serviceType: "AI Web Development",
            offers: {
              "@type": "Offer",
              priceRange: "$2,997 - $15,997",
            },
          })}
        </script>
      </Helmet>

      <div className="featured-service-ai__services-wrapper">
        {/* Hero Section */}
        <section className="featured-service-ai__hero">
          <div className="featured-service-ai__hero-bg"></div>
          <div className="featured-service-ai__glow-orb featured-service-ai__glow-orb-1"></div>
          <div className="featured-service-ai__glow-orb featured-service-ai__glow-orb-2"></div>

          <div className="featured-service-ai__container">
            <div className="featured-service-ai__hero-content">
              <div className="featured-service-ai__badge">
                <Brain size={20} />
                <span>AI-Powered Excellence</span>
              </div>

              <h1 className="featured-service-ai__hero-title">
                Increase Conversions by 500% with
                <span className="featured-service-ai__gradient-text">
                  {" "}
                  AI-Powered Websites
                </span>
                <br />& ChatGPT Integration
              </h1>

              <p className="featured-service-ai__hero-description">
                Transform your business with cutting-edge AI websites that
                think, learn, and adapt. Features include ChatGPT-4 integration,
                intelligent automation, predictive analytics, personalized user
                experiences, and 24/7 AI customer support that converts visitors
                into customers while you sleep.
              </p>

              <div className="featured-service-ai__hero-stats">
                <div className="featured-service-ai__stat-item">
                  <span className="featured-service-ai__stat-number">500%</span>
                  <span className="featured-service-ai__stat-label">
                    More Conversions
                  </span>
                </div>
                <div className="featured-service-ai__stat-item">
                  <span className="featured-service-ai__stat-number">90%</span>
                  <span className="featured-service-ai__stat-label">
                    Cost Reduction
                  </span>
                </div>
                <div className="featured-service-ai__stat-item">
                  <span className="featured-service-ai__stat-number">24/7</span>
                  <span className="featured-service-ai__stat-label">
                    AI Support
                  </span>
                </div>
              </div>

              <div className="featured-service-ai__hero-cta">
                <Link
                  to="/consultation-booking/"
                  className="featured-service-ai__cta-primary"
                >
                  Book Your Free AI Strategy Session
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/live-work-samples"
                  className="featured-service-ai__cta-secondary"
                >
                  Experience AI Demos Live
                </Link>
              </div>
            </div>

            <div className="featured-service-ai__hero-image">
              <img
                src={img1}
                alt="AI-powered website dashboard showing ChatGPT integration, predictive analytics, and intelligent automation systems"
              />
              <div className="featured-service-ai__image-overlay">
                <div className="featured-service-ai__overlay-stat">
                  <Bot size={24} />
                  <span>Live AI Assistant</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="featured-service-ai__features">
          <div className="featured-service-ai__floating-glow featured-service-ai__floating-glow-1"></div>
          <div className="featured-service-ai__floating-glow featured-service-ai__floating-glow-2"></div>

          <div className="featured-service-ai__container">
            <div className="featured-service-ai__section-header">
              <h2 className="featured-service-ai__section-title">
                Revolutionary AI Features That Transform Businesses
              </h2>
              <p className="featured-service-ai__section-subtitle">
                From ChatGPT integration to neural networks, we build AI-powered
                websites that think, learn, and evolve to deliver extraordinary
                results for your business.
              </p>
            </div>

            <div className="featured-service-ai__features-grid">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="featured-service-ai__feature-card"
                  data-index={index}
                >
                  <div className="featured-service-ai__feature-icon">
                    {feature.icon}
                  </div>
                  <h3 className="featured-service-ai__feature-title">
                    {feature.title}
                  </h3>
                  <p className="featured-service-ai__feature-description">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="featured-service-ai__benefits">
          <div className="featured-service-ai__container">
            <div className="featured-service-ai__benefits-content">
              <div className="featured-service-ai__benefits-text">
                <h2 className="featured-service-ai__section-title">
                  Why Industry Leaders Choose SoftRanch for AI Development
                </h2>
                <p className="featured-service-ai__section-subtitle">
                  We're not just building websites—we're creating intelligent
                  digital ecosystems that revolutionize how businesses operate,
                  engage customers, and drive unprecedented growth through AI.
                </p>

                <div className="featured-service-ai__benefits-list">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="featured-service-ai__benefit-item"
                    >
                      <div className="featured-service-ai__benefit-icon">
                        {benefit.icon}
                      </div>
                      <div className="featured-service-ai__benefit-content">
                        <h3 className="featured-service-ai__benefit-title">
                          {benefit.title}
                        </h3>
                        <p className="featured-service-ai__benefit-description">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="featured-service-ai__benefits-image">
                <img
                  src={img2}
                  alt="Business owner using AI-powered website analytics dashboard showing real-time customer insights and predictive data"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="featured-service-ai__packages">
          <div className="featured-service-ai__packages-glow"></div>

          <div className="featured-service-ai__container">
            <div className="featured-service-ai__section-header">
              <h2 className="featured-service-ai__section-title">
                Choose Your AI Transformation Package
              </h2>
              <p className="featured-service-ai__section-subtitle">
                Transparent pricing designed to deliver maximum ROI through
                intelligent automation and AI-powered growth
              </p>
            </div>

            <div className="featured-service-ai__packages-grid">
              {servicePackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`featured-service-ai__package-card ${
                    pkg.popular ? "featured-service-ai__package-popular" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="featured-service-ai__package-badge">
                      Most Popular
                    </div>
                  )}

                  <div className="featured-service-ai__package-header">
                    <h3 className="featured-service-ai__package-title">
                      {pkg.title}
                    </h3>
                    <div className="featured-service-ai__package-price">
                      {pkg.price}
                    </div>
                  </div>

                  <ul className="featured-service-ai__package-features">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="featured-service-ai__package-feature"
                      >
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="featured-service-ai__package-cta"
                  >
                    Start AI Transformation
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="featured-service-ai__testimonials">
          <div className="featured-service-ai__container">
            <div className="featured-service-ai__section-header">
              <h2 className="featured-service-ai__section-title">
                Success Stories from AI-Powered Businesses
              </h2>
            </div>

            <div className="featured-service-ai__testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="featured-service-ai__testimonial-card"
                >
                  <div className="featured-service-ai__testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="featured-service-ai__star-filled"
                      />
                    ))}
                  </div>
                  <p className="featured-service-ai__testimonial-text">
                    "{testimonial.text}"
                  </p>
                  <div className="featured-service-ai__testimonial-author">
                    <p className="featured-service-ai__author-title">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="featured-service-ai__cta">
          <div className="featured-service-ai__cta-glow"></div>

          <div className="featured-service-ai__container">
            <div className="featured-service-ai__cta-content">
              <h2 className="featured-service-ai__cta-title">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="featured-service-ai__cta-description">
                Join forward-thinking companies who've revolutionized their
                operations with AI-powered websites. Experience the future of
                business automation and intelligent customer engagement today.
              </p>

              <div className="featured-service-ai__cta-buttons">
                <Link
                  to="/contact"
                  className="featured-service-ai__cta-primary"
                >
                  Get Free AI Consultation
                  <Phone size={20} />
                </Link>
                <a
                  href="mailto:hello@softranch.agency"
                  className="featured-service-ai__cta-secondary"
                >
                  <Mail size={20} />
                  Email Our AI Experts
                </a>
              </div>

              <div className="featured-service-ai__cta-guarantee">
                <CheckCircle size={20} />
                <span>
                  30-day money-back guarantee • Free AI strategy session • Live
                  demo included
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIWebsitesServices;
