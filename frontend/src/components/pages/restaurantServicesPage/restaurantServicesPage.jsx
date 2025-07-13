import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  UtensilsCrossed,
  TrendingUp,
  MapPin,
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
} from "lucide-react";
import "./style.css";
import img1 from "../../../static/featured_services_images/softFood.png";
import agent from "../../../static/featured_services_images/agent.jpg";


const RestaurantServices = () => {
  const features = [
    {
      icon: <UtensilsCrossed size={32} />,
      title: "Online Menu & Ordering System",
      description:
        "Commission-free online ordering with real-time menu management, customizable options, and integrated payment processing to maximize profits.",
    },
    {
      icon: <Calendar size={32} />,
      title: "Table Reservation System",
      description:
        "Automated booking system with real-time availability, customer management, and notification system to reduce no-shows by 60%.",
    },
    {
      icon: <MapPin size={32} />,
      title: "Local SEO Domination",
      description:
        "Outrank competitors in 'restaurants near me' searches with Google My Business optimization and location-based SEO strategies.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile-First Design",
      description:
        "Progressive Web App with instant loading, offline menu viewing, and seamless mobile ordering experience for on-the-go customers.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Customer Analytics & Insights",
      description:
        "Track customer preferences, peak hours, popular dishes, and revenue trends to optimize operations and increase profitability.",
    },
    {
      icon: <Camera size={32} />,
      title: "Food Photography Integration",
      description:
        "Professional food photography galleries, virtual menu displays, and social media integration to showcase your culinary creations.",
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp size={24} />,
      title: "130% More Revenue from Online Orders",
      description:
        "Restaurants with our online ordering systems generate significantly more revenue than those relying solely on third-party platforms.",
    },
    {
      icon: <Target size={24} />,
      title: "Fill Every Table with Smart Booking",
      description:
        "Automated reservation management and waitlist features help maximize seating capacity and reduce empty tables during peak hours.",
    },
    {
      icon: <Users size={24} />,
      title: "Build Customer Loyalty",
      description:
        "Integrated loyalty programs, email marketing, and personalized offers increase repeat visits and customer lifetime value.",
    },
    {
      icon: <Zap size={24} />,
      title: "Streamlined Operations",
      description:
        "Kitchen display systems, inventory alerts, and order management tools reduce operational complexity and improve efficiency.",
    },
  ];

  const testimonials = [
    {
      name: "Carlos Martinez",
      title: "Owner, Bella Vista Italian Kitchen",
      text: "Our online orders increased 250% after launching our new website. The commission-free ordering system saved us thousands in fees, and our reservation system is always full.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      title: "Manager, Dragon Palace Asian Cuisine",
      text: "SoftRanch transformed our digital presence. We now rank #1 for 'Chinese restaurant near me' and our customer base has tripled in just 6 months.",
      rating: 5,
    },
  ];

  const servicePackages = [
    {
      title: "Essential Restaurant",
      price: "Starting at $697",
      features: [
        "Professional Restaurant Website",
        "Online Menu Display",
        "Basic Reservation System",
        "Mobile-Responsive Design",
        "Google My Business Setup",
        "Basic Local SEO",
      ],
      popular: false,
    },
    {
      title: "Growth Package",
      price: "Starting at $2,499",
      features: [
        "Everything in Essential Package",
        "Commission-Free Online Ordering",
        "Advanced Reservation Management",
        "Customer Review Integration",
        "Social Media Integration",
        "Email Marketing Setup",
        "Local SEO Optimization",
      ],
      popular: true,
    },
    {
      title: "Restaurant Empire",
      price: "Starting at $4,498",
      features: [
        "Everything in Growth Package",
        "Multi-Location Management",
        "Loyalty Program Integration",
        "Advanced Analytics Dashboard",
        "Kitchen Display System",
        "Inventory Management",
        "24/7 Support & Maintenance",
      ],
      popular: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Restaurant Website Development & Online Ordering | Fill Every Table |
          SoftRanch
        </title>
        <meta
          name="description"
          content="Transform your restaurant with professional website development and commission-free online ordering. Increase foot traffic, boost online sales by 130%, and dominate local search. Trusted by 300+ restaurants nationwide."
        />
        <meta
          name="keywords"
          content="restaurant website development, online ordering system, restaurant SEO, table reservation system, restaurant marketing, food delivery website, menu management system, restaurant app development"
        />
        <meta
          property="og:title"
          content="Restaurant Website Development & Online Ordering | SoftRanch"
        />
        <meta
          property="og:description"
          content="Fill every table and boost online orders by 130% with professional restaurant websites and commission-free ordering systems."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://softranch.com/restaurant-website-development-services"
        />
        <link
          rel="canonical"
          href="https://softranch.com/restaurant-website-development-services"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Restaurant Website Development",
            description:
              "Professional restaurant website development with online ordering, reservation systems, and local SEO optimization for food service businesses.",
            provider: {
              "@type": "Organization",
              name: "SoftRanch",
              url: "https://softranch.com",
            },
            serviceType: "Restaurant Web Development",
            offers: {
              "@type": "Offer",
              priceRange: "$2,997 - $6,997",
            },
          })}
        </script>
      </Helmet>

      <div className="restaurant-services-wrapper">
        {/* Hero Section */}
        <section className="restaurant-hero">
          <div className="restaurant-hero-bg"></div>
          <div className="restaurant-glow-orb restaurant-glow-orb-1"></div>
          <div className="restaurant-glow-orb restaurant-glow-orb-2"></div>

          <div className="restaurant-container">
            <div className="restaurant-hero-content">
              <div className="restaurant-badge">
                <UtensilsCrossed size={20} />
                <span>Restaurant Excellence</span>
              </div>

              <h1 className="restaurant-hero-title">
                Fill Every Table with
                <span className="restaurant-gradient-text">
                  {" "}
                  Smart Digital Marketing
                </span>
                <br />& Commission-Free Ordering
              </h1>

              <p className="restaurant-hero-description">
                Increase foot traffic and online orders with websites built for
                hungry customers. Features include commission-free online
                ordering, smart reservation systems, Google My Business
                optimization, and local SEO that puts you on the culinary map.
              </p>

              <div className="restaurant-hero-stats">
                <div className="restaurant-stat-item">
                  <span className="restaurant-stat-number">130%</span>
                  <span className="restaurant-stat-label">More Revenue</span>
                </div>
                <div className="restaurant-stat-item">
                  <span className="restaurant-stat-number">300+</span>
                  <span className="restaurant-stat-label">
                    Restaurants Served
                  </span>
                </div>
                <div className="restaurant-stat-item">
                  <span className="restaurant-stat-number">#1</span>
                  <span className="restaurant-stat-label">Local Rankings</span>
                </div>
              </div>

              <div className="restaurant-hero-cta">
                <Link to="/contact" className="restaurant-cta-primary">
                  Get Your Free Restaurant Audit
                  <ArrowRight size={20} />
                </Link>
                <Link to="/portfolio" className="restaurant-cta-secondary">
                  View Success Stories
                </Link>
              </div>
            </div>

            <div className="restaurant-hero-image">
              <img
                src={img1}
                alt="Modern restaurant ordering system dashboard showing online orders and table reservations"
              />
              <div className="restaurant-image-overlay">
                <div className="restaurant-overlay-stat">
                  <Clock size={24} />
                  <span>Real-Time Orders</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="restaurant-features">
          <div className="restaurant-floating-glow restaurant-floating-glow-1"></div>
          <div className="restaurant-floating-glow restaurant-floating-glow-2"></div>

          <div className="restaurant-container">
            <div className="restaurant-section-header">
              <h2 className="restaurant-section-title">
                Everything You Need to Dominate Local Food Scene
              </h2>
              <p className="restaurant-section-subtitle">
                From commission-free ordering to smart reservations, we provide
                the complete digital ecosystem that transforms your restaurant
                into a customer magnet.
              </p>
            </div>

            <div className="restaurant-features-grid">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="restaurant-feature-card"
                  data-index={index}
                >
                  <div className="restaurant-feature-icon">{feature.icon}</div>
                  <h3 className="restaurant-feature-title">{feature.title}</h3>
                  <p className="restaurant-feature-description">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="restaurant-benefits">
          <div className="restaurant-container">
            <div className="restaurant-benefits-content">
              <div className="restaurant-benefits-text">
                <h2 className="restaurant-section-title">
                  Why Restaurant Owners Choose SoftRanch
                </h2>
                <p className="restaurant-section-subtitle">
                  We understand the unique challenges of the restaurant
                  industry. Our solutions are specifically designed to help
                  restaurants attract more diners, increase online orders, and
                  build lasting customer relationships.
                </p>

                <div className="restaurant-benefits-list">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="restaurant-benefit-item">
                      <div className="restaurant-benefit-icon">
                        {benefit.icon}
                      </div>
                      <div className="restaurant-benefit-content">
                        <h3 className="restaurant-benefit-title">
                          {benefit.title}
                        </h3>
                        <p className="restaurant-benefit-description">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="restaurant-benefits-image">
                <img
                  src={agent}
                  alt="Restaurant owner managing online orders and reservations on tablet device"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="restaurant-packages">
          <div className="restaurant-packages-glow"></div>

          <div className="restaurant-container">
            <div className="restaurant-section-header">
              <h2 className="restaurant-section-title">
                Choose Your Restaurant Success Package
              </h2>
              <p className="restaurant-section-subtitle">
                Transparent pricing designed to deliver maximum ROI for
                restaurant owners
              </p>
            </div>

            <div className="restaurant-packages-grid">
              {servicePackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`restaurant-package-card ${
                    pkg.popular ? "restaurant-package-popular" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="restaurant-package-badge">Most Popular</div>
                  )}

                  <div className="restaurant-package-header">
                    <h3 className="restaurant-package-title">{pkg.title}</h3>
                    <div className="restaurant-package-price">{pkg.price}</div>
                  </div>

                  <ul className="restaurant-package-features">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="restaurant-package-feature">
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="restaurant-package-cta">
                    Get Started Today
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="restaurant-testimonials">
          <div className="restaurant-container">
            <div className="restaurant-section-header">
              <h2 className="restaurant-section-title">
                Success Stories from Restaurant Owners
              </h2>
            </div>

            <div className="restaurant-testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="restaurant-testimonial-card">
                  <div className="restaurant-testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="restaurant-star-filled"
                      />
                    ))}
                  </div>
                  <p className="restaurant-testimonial-text">
                    "{testimonial.text}"
                  </p>
                  <div className="restaurant-testimonial-author">
                    {/* <h4 className="restaurant-author-name">
                      {testimonial.name}
                    </h4> */}
                    <p className="restaurant-author-title">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="restaurant-cta">
          <div className="restaurant-cta-glow"></div>

          <div className="restaurant-container">
            <div className="restaurant-cta-content">
              <h2 className="restaurant-cta-title">
                Ready to Transform Your Restaurant?
              </h2>
              <p className="restaurant-cta-description">
                Join 300+ successful restaurant owners who've dramatically
                increased their foot traffic and online orders with our proven
                digital solutions.
              </p>

              <div className="restaurant-cta-buttons">
                <Link to="/contact" className="restaurant-cta-primary">
                  Get Free Restaurant Consultation
                  <Phone size={20} />
                </Link>
                <a
                  href="mailto:hello@softranch.com"
                  className="restaurant-cta-secondary"
                >
                  <Mail size={20} />
                  Email Us Directly
                </a>
              </div>

              <div className="restaurant-cta-guarantee">
                <CheckCircle size={20} />
                <span>
                  30-day money-back guarantee • Free consultation •
                  Commission-free ordering
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RestaurantServices;
