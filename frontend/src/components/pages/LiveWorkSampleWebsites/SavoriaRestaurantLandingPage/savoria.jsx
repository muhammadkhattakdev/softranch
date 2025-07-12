import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ChefHat,
  Wine,
  Utensils,
  Calendar,
  Instagram,
  Facebook,
  Twitter,
  Play,
  Quote,
} from "lucide-react";
import "./style.css";
import headerImg from "../../../../static/saviora/header.webp";
import chefMarcus from "../../../../static/saviora/chef_marcus.webp";
import chef2 from "../../../../static/saviora/chef2.webp";
import wagyu from "../../../../static/saviora/wagyu.webp";
import chocolate from "../../../../static/saviora/chocolate.webp";
import dining from "../../../../static/saviora/dining.webp";
import w from "../../../../static/saviora/w.webp";
import openkitchen from "../../../../static/saviora/open.webp";


const SavoriaRestaurant = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("appetizers");

  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      ".sample1__animate-on-scroll"
    );
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const menuItems = {
    appetizers: [
      {
        name: "Truffle Arancini",
        description: "Crispy risotto balls with black truffle and parmesan",
        price: "$18",
      },
      {
        name: "Seared Scallops",
        description: "Pan-seared scallops with cauliflower purée and pancetta",
        price: "$24",
      },
      {
        name: "Burrata Caprese",
        description: "Fresh burrata with heirloom tomatoes and basil oil",
        price: "$16",
      },
    ],
    mains: [
      {
        name: "Wagyu Ribeye",
        description:
          "Dry-aged wagyu with roasted bone marrow and seasonal vegetables",
        price: "$68",
      },
      {
        name: "Mediterranean Branzino",
        description:
          "Whole roasted branzino with lemon, herbs, and olive tapenade",
        price: "$42",
      },
      {
        name: "Duck Confit",
        description: "Slow-cooked duck leg with cherry gastrique and wild rice",
        price: "$38",
      },
    ],
    desserts: [
      {
        name: "Chocolate Soufflé",
        description: "Dark chocolate soufflé with vanilla bean ice cream",
        price: "$14",
      },
      {
        name: "Lemon Tart",
        description:
          "Classic lemon tart with torched meringue and berry compote",
        price: "$12",
      },
      {
        name: "Tiramisu",
        description: "Traditional tiramisu with espresso and mascarpone",
        price: "$13",
      },
    ],
  };

  const testimonials = [
    {
      name: "Sofia Martinez",
      rating: 5,
      text: "An extraordinary culinary journey. Every dish was a masterpiece, and the ambiance was absolutely perfect for our anniversary dinner.",
      date: "2 weeks ago",
    },
    {
      name: "James Wilson",
      rating: 5,
      text: "The attention to detail is remarkable. From the presentation to the flavors, Savoria exceeds all expectations. Will definitely return.",
      date: "1 month ago",
    },
    {
      name: "Emma Thompson",
      rating: 5,
      text: "Impeccable service and outstanding food. The truffle risotto is to die for! A true fine dining experience.",
      date: "3 weeks ago",
    },
  ];

  return (
    <div className="sample1__restaurant-page-wrapper">
      {/* Navigation */}
      <nav className="sample1__navbar">
        <div className="sample1__nav-container">
          <div className="sample1__logo">
            <ChefHat size={32} />
            <span>Savoria</span>
          </div>
          <div className="sample1__nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#menu">Menu</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="sample1__reserve-btn">Reserve Table</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="sample1__hero">
        <div className="sample1__hero-bg">
          {/* Video placeholder - Add cooking/restaurant ambiance video */}
          <div className="sample1__hero-video">
            <img
              src={headerImg}
              alt="Elegant restaurant interior with warm lighting and beautifully plated dishes"
              className="sample1__hero-image"
            />
            <div className="sample1__video-overlay"></div>
            <button
              className="sample1__play-button"
              onClick={() => setIsVideoPlaying(true)}
            >
              <Play size={24} />
              <span>Watch Our Story</span>
            </button>
          </div>
        </div>

        <div className="sample1__hero-content">
          <div className="sample1__hero-text">
            <h1 className="sample1__hero-title">
              Where Culinary
              <span className="sample1__highlight"> Artistry </span>
              Meets Elegance
            </h1>
            <p className="sample1__hero-description">
              Experience exceptional dining in the heart of the city. Our
              chef-driven menu celebrates seasonal ingredients with innovative
              techniques and timeless flavors.
            </p>
            <div className="sample1__hero-buttons">
              <button className="sample1__btn-primary">Book Your Table</button>
              <button className="sample1__btn-secondary">View Menu</button>
            </div>
          </div>

          <div className="sample1__hero-info">
            <div className="sample1__info-item">
              <Clock size={20} />
              <div>
                <span className="sample1__info-label">Open Today</span>
                <span className="sample1__info-value">5:30 PM - 11:00 PM</span>
              </div>
            </div>
            <div className="sample1__info-item">
              <MapPin size={20} />
              <div>
                <span className="sample1__info-label">Location</span>
                <span className="sample1__info-value">
                  Downtown, 5th Avenue
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="sample1__about">
        <div className="sample1__container">
          <div className="sample1__about-content">
            <div className="sample1__about-text sample1__animate-on-scroll">
              <h2 className="sample1__section-title">
                Our Culinary Philosophy
              </h2>
              <p className="sample1__about-description">
                At Savoria, we believe that dining is an art form. Our passion
                lies in creating memorable experiences through carefully crafted
                dishes that tell a story. Using only the finest locally-sourced
                ingredients, our culinary team transforms seasonal produce into
                extraordinary plates.
              </p>
              <div className="sample1__features">
                <div className="sample1__feature">
                  <Wine size={24} />
                  <div>
                    <h4>Curated Wine Selection</h4>
                    <p>
                      Over 200 carefully selected wines from around the world
                    </p>
                  </div>
                </div>
                <div className="sample1__feature">
                  <ChefHat size={24} />
                  <div>
                    <h4>Award-Winning Chef</h4>
                    <p>Led by Chef Marcus Laurent, James Beard Award nominee</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sample1__about-images sample1__animate-on-scroll">
              <div className="sample1__image-grid">
                <img
                  src={chefMarcus}
                  alt="Chef Marcus Laurent in white chef coat standing in modern kitchen"
                  className="sample1__chef-image"
                />
                <img
                  src={chef2}
                  alt="Chef preparing artisanal dish with precision and attention to detail"
                  className="sample1__kitchen-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="sample1__menu">
        <div className="sample1__container">
          <div className="sample1__menu-header sample1__animate-on-scroll">
            <h2 className="sample1__section-title">Signature Menu</h2>
            <p className="sample1__section-subtitle">
              A curated selection of our most beloved dishes, crafted with
              passion and precision
            </p>
          </div>

          <div className="sample1__menu-nav">
            {Object.keys(menuItems).map((category) => (
              <button
                key={category}
                className={`sample1__menu-tab ${
                  activeMenuItem === category ? "active" : ""
                }`}
                onClick={() => setActiveMenuItem(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="sample1__menu-content sample1__animate-on-scroll">
            {menuItems[activeMenuItem].map((item, index) => (
              <div key={index} className="sample1__menu-item">
                <div className="sample1__menu-item-info">
                  <h4 className="sample1__menu-item-name">{item.name}</h4>
                  <p className="sample1__menu-item-desc">{item.description}</p>
                </div>
                <div className="sample1__menu-item-price">{item.price}</div>
              </div>
            ))}
          </div>

          <div className="sample1__menu-cta">
            <button className="sample1__btn-primary">View Full Menu</button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="sample1__gallery">
        <div className="sample1__container">
          <h2 className="sample1__section-title sample1__animate-on-scroll">
            Culinary Gallery
          </h2>

          <div className="sample1__gallery-grid sample1__animate-on-scroll">
            <div className="sample1__gallery-item sample1__gallery-large">
              <img
                src={wagyu}
                alt="Beautifully plated wagyu steak with seasonal vegetables and artistic presentation"
                className="sample1__gallery-image"
              />
              <div className="sample1__gallery-overlay">
                <h4>Signature Wagyu</h4>
                <p>Our most celebrated dish</p>
              </div>
            </div>

            <div className="sample1__gallery-item">
              <img
                src={chocolate}
                alt="Artistic chocolate dessert with gold leaf and berry garnish"
                className="sample1__gallery-image"
              />
              <div className="sample1__gallery-overlay">
                <h4>Dessert Artistry</h4>
                <p>Sweet endings</p>
              </div>
            </div>

            <div className="sample1__gallery-item">
              <img
                src={dining}
                alt="Elegant dining room with warm lighting, exposed brick, and modern furniture"
                className="sample1__gallery-image"
              />
              <div className="sample1__gallery-overlay">
                <h4>Intimate Ambiance</h4>
                <p>Perfect atmosphere</p>
              </div>
            </div>

            <div className="sample1__gallery-item">
              <img
                src={w}
                alt="Sommelier presenting wine bottle with extensive wine cellar in background"
                className="sample1__gallery-image"
              />
              <div className="sample1__gallery-overlay">
                <h4>Wine Expertise</h4>
                <p>Curated selection</p>
              </div>
            </div>

            <div className="sample1__gallery-item sample1__gallery-wide">
              <img
                src={openkitchen}
                alt="Modern open kitchen with chefs working, showing culinary preparation in action"
                className="sample1__gallery-image"
              />
              <div className="sample1__gallery-overlay">
                <h4>Open Kitchen</h4>
                <p>Watch culinary magic happen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="sample1__testimonials">
        <div className="sample1__container">
          <h2 className="sample1__section-title sample1__animate-on-scroll">
            What Our Guests Say
          </h2>

          <div className="sample1__testimonials-grid sample1__animate-on-scroll">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="sample1__testimonial-card">
                <div className="sample1__testimonial-header">
                  <div className="sample1__testimonial-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="sample1__testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <div className="sample1__rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <span className="sample1__testimonial-date">
                      {testimonial.date}
                    </span>
                  </div>
                </div>
                <Quote size={20} className="sample1__quote-icon" />
                <p className="sample1__testimonial-text">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="sample1__reservation">
        <div className="sample1__container">
          <div className="sample1__reservation-content sample1__animate-on-scroll">
            <div className="sample1__reservation-text">
              <h2>Reserve Your Experience</h2>
              <p>
                Join us for an unforgettable evening of exceptional cuisine and
                impeccable service.
              </p>
              <div className="sample1__reservation-info">
                <div className="sample1__res-info-item">
                  <Calendar size={20} />
                  <span>Book up to 30 days in advance</span>
                </div>
                <div className="sample1__res-info-item">
                  <Utensils size={20} />
                  <span>Private dining available</span>
                </div>
              </div>
            </div>

            <div className="sample1__reservation-form">
              <h3>Make a Reservation</h3>
              <form className="sample1__booking-form">
                <div className="sample1__form-row">
                  <input type="date" className="sample1__form-input" />
                  <select className="sample1__form-input">
                    <option>6:00 PM</option>
                    <option>6:30 PM</option>
                    <option>7:00 PM</option>
                    <option>7:30 PM</option>
                    <option>8:00 PM</option>
                    <option>8:30 PM</option>
                    <option>9:00 PM</option>
                  </select>
                </div>
                <div className="sample1__form-row">
                  <select className="sample1__form-input">
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5 Guests</option>
                    <option>6+ Guests</option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="sample1__form-input"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="sample1__form-input"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="sample1__form-input"
                />
                <textarea
                  placeholder="Special requests or dietary restrictions"
                  className="sample1__form-textarea"
                ></textarea>
                <button
                  type="submit"
                  className="sample1__btn-primary sample1__form-submit"
                >
                  Confirm Reservation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="sample1__contact">
        <div className="sample1__container">
          <div className="sample1__contact-content">
            <div className="sample1__contact-info sample1__animate-on-scroll">
              <h2>Visit Savoria</h2>
              <div className="sample1__contact-details">
                <div className="sample1__contact-item">
                  <MapPin size={24} />
                  <div>
                    <h4>Address</h4>
                    <p>
                      123 Culinary Boulevard
                      <br />
                      Downtown District, New York 10001
                    </p>
                  </div>
                </div>

                <div className="sample1__contact-item">
                  <Clock size={24} />
                  <div>
                    <h4>Hours</h4>
                    <p>
                      Tuesday - Saturday: 5:30 PM - 11:00 PM
                      <br />
                      Sunday: 5:00 PM - 10:00 PM
                      <br />
                      Closed Mondays
                    </p>
                  </div>
                </div>

                <div className="sample1__contact-item">
                  <Phone size={24} />
                  <div>
                    <h4>Reservations</h4>
                    <p>
                      (555) 123-FOOD
                      <br />
                      (555) 123-3663
                    </p>
                  </div>
                </div>

                <div className="sample1__contact-item">
                  <Mail size={24} />
                  <div>
                    <h4>Email</h4>
                    <p>
                      reservations@savoria.com
                      <br />
                      events@savoria.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="sample1__social-links">
                <a href="#" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="#" aria-label="Facebook">
                  <Facebook size={24} />
                </a>
                <a href="#" aria-label="Twitter">
                  <Twitter size={24} />
                </a>
              </div>
            </div>

            <div className="sample1__map-container sample1__animate-on-scroll">
              <div className="sample1__map-placeholder">
                <MapPin size={48} />
                <span>123 Culinary Boulevard, Downtown District</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="sample1__footer">
        <div className="sample1__container">
          <div className="sample1__footer-content">
            <div className="sample1__footer-brand">
              <div className="sample1__footer-logo">
                <ChefHat size={28} />
                <span>Savoria</span>
              </div>
              <p>
                Where culinary artistry meets elegance. Experience exceptional
                dining in the heart of the city.
              </p>
            </div>

            <div className="sample1__footer-links">
              <div className="sample1__footer-column">
                <h4>Restaurant</h4>
                <a href="#about">About Us</a>
                <a href="#menu">Menu</a>
                <a href="#gallery">Gallery</a>
                <a href="#contact">Contact</a>
              </div>

              <div className="sample1__footer-column">
                <h4>Services</h4>
                <a href="#">Private Dining</a>
                <a href="#">Catering</a>
                <a href="#">Wine Events</a>
                <a href="#">Gift Cards</a>
              </div>

              <div className="sample1__footer-column">
                <h4>Connect</h4>
                <a href="#">Newsletter</a>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Reviews</a>
              </div>
            </div>
          </div>

          <div className="sample1__footer-bottom">
            <p>&copy; 2024 Savoria Restaurant. All rights reserved.</p>
            <div className="sample1__footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SavoriaRestaurant;
