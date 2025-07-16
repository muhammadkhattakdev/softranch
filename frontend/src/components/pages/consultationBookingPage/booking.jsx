import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Building, 
  Target, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle,
  Globe,
  Sparkles
} from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './style.css';

const ConsultationBooking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: '',
    customIndustry: '',
    goal: '',
    selectedDate: null,
    selectedTime: '',
    timezone: 'America/Chicago' // CST default
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const industries = [
    'Technology & Software',
    'E-commerce & Retail',
    'Healthcare & Medical',
    'Real Estate',
    'Legal Services',
    'Financial Services',
    'Restaurants & Food Service',
    'Manufacturing',
    'Education',
    'Non-Profit Organizations',
    'Marketing & Advertising',
    'Consulting',
    'Construction',
    'Automotive',
    'Beauty & Wellness',
    'Travel & Tourism',
    'Entertainment & Media',
    'Sports & Fitness',
    'Agriculture',
    'Transportation & Logistics',
    'Energy & Utilities',
    'Fashion & Apparel',
    'Government',
    'Insurance',
    'Other (Please specify)'
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM'
  ];

  const timezones = [
    { value: 'America/Chicago', label: 'Central Time (CST/CDT)' },
    { value: 'America/New_York', label: 'Eastern Time (EST/EDT)' },
    { value: 'America/Denver', label: 'Mountain Time (MST/MDT)' },
    { value: 'America/Los_Angeles', label: 'Pacific Time (PST/PDT)' }
  ];

  const steps = [
    { number: 1, title: 'Personal Info', icon: <User size={20} /> },
    { number: 2, title: 'Business Details', icon: <Building size={20} /> },
    { number: 3, title: 'Consultation Goal', icon: <Target size={20} /> },
    { number: 4, title: 'Schedule', icon: <Calendar size={20} /> },
    { number: 5, title: 'Confirmation', icon: <CheckCircle size={20} /> }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    switch (step) {
      case 1:
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email';
        }
        break;
      case 2:
        if (!formData.industry) newErrors.industry = 'Please select your industry';
        if (formData.industry === 'Other (Please specify)' && !formData.customIndustry.trim()) {
          newErrors.customIndustry = 'Please specify your industry';
        }
        break;
      case 3:
        if (!formData.goal.trim()) newErrors.goal = 'Please tell us about your consultation goal';
        if (formData.goal.trim().length < 10) newErrors.goal = 'Please provide more details (at least 10 characters)';
        break;
      case 4:
        if (!formData.selectedDate) newErrors.selectedDate = 'Please select a date';
        if (!formData.selectedTime) newErrors.selectedTime = 'Please select a time';
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (validateStep(4)) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setCurrentStep(5);
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="consultation-booking__step-content">
            <div className="consultation-booking__step-header">
              <h2>Let's start with your details</h2>
              <p>We'll use this information to personalize your consultation experience</p>
            </div>
            
            <div className="consultation-booking__form-group">
              <label className="consultation-booking__label">
                <User size={16} />
                Full Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`consultation-booking__input ${errors.name ? 'error' : ''}`}
                placeholder="Enter your full name"
              />
              {errors.name && <span className="consultation-booking__error">{errors.name}</span>}
            </div>

            <div className="consultation-booking__form-group">
              <label className="consultation-booking__label">
                <Mail size={16} />
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`consultation-booking__input ${errors.email ? 'error' : ''}`}
                placeholder="Enter your email address"
              />
              {errors.email && <span className="consultation-booking__error">{errors.email}</span>}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="consultation-booking__step-content">
            <div className="consultation-booking__step-header">
              <h2>Tell us about your business</h2>
              <p>This helps us prepare relevant insights for your consultation</p>
            </div>

            <div className="consultation-booking__form-group">
              <label className="consultation-booking__label">
                <Building size={16} />
                Industry *
              </label>
              <select
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                className={`consultation-booking__select ${errors.industry ? 'error' : ''}`}
              >
                <option value="">Select your industry</option>
                {industries.map((industry, index) => (
                  <option key={index} value={industry}>{industry}</option>
                ))}
              </select>
              {errors.industry && <span className="consultation-booking__error">{errors.industry}</span>}
            </div>

            {formData.industry === 'Other (Please specify)' && (
              <div className="consultation-booking__form-group">
                <label className="consultation-booking__label">
                  <Building size={16} />
                  Please specify your industry
                </label>
                <input
                  type="text"
                  value={formData.customIndustry}
                  onChange={(e) => handleInputChange('customIndustry', e.target.value)}
                  className={`consultation-booking__input ${errors.customIndustry ? 'error' : ''}`}
                  placeholder="Enter your industry"
                />
                {errors.customIndustry && <span className="consultation-booking__error">{errors.customIndustry}</span>}
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="consultation-booking__step-content">
            <div className="consultation-booking__step-header">
              <h2>What's your consultation goal?</h2>
              <p>Help us understand what you'd like to achieve so we can provide the most valuable insights</p>
            </div>

            <div className="consultation-booking__form-group">
              <label className="consultation-booking__label">
                <Target size={16} />
                Consultation Goal *
              </label>
              <textarea
                value={formData.goal}
                onChange={(e) => handleInputChange('goal', e.target.value)}
                className={`consultation-booking__textarea ${errors.goal ? 'error' : ''}`}
                placeholder="Tell us about your goals, challenges, or what you'd like to discuss during our consultation..."
                rows="6"
              />
              <div className="consultation-booking__char-count">
                {formData.goal.length}/500 characters
              </div>
              {errors.goal && <span className="consultation-booking__error">{errors.goal}</span>}
            </div>

            <div className="consultation-booking__goal-examples">
              <h4>Example goals:</h4>
              <ul>
                <li>• Increase website conversions and sales</li>
                <li>• Improve online presence and brand visibility</li>
                <li>• Develop a mobile-responsive website</li>
                <li>• Implement e-commerce functionality</li>
                <li>• Optimize website performance and SEO</li>
              </ul>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="consultation-booking__step-content">
            <div className="consultation-booking__step-header">
              <h2>When works best for you?</h2>
              <p>Choose your preferred date and time for the consultation</p>
            </div>

            <div className="consultation-booking__schedule-grid">
              <div className="consultation-booking__calendar-section">
                <label className="consultation-booking__label">
                  <Calendar size={16} />
                  Select Date *
                </label>
                <div className="consultation-booking__calendar-wrapper">
                  <DatePicker
                    selected={formData.selectedDate}
                    onChange={(date) => handleInputChange('selectedDate', date)}
                    minDate={new Date()}
                    maxDate={new Date(Date.now() + 60 * 24 * 60 * 60 * 1000)} // 60 days from now
                    filterDate={(date) => date.getDay() !== 0 && date.getDay() !== 6} // Exclude weekends
                    inline
                    calendarClassName="consultation-booking__calendar"
                  />
                </div>
                {errors.selectedDate && <span className="consultation-booking__error">{errors.selectedDate}</span>}
              </div>

              <div className="consultation-booking__time-section">
                <div className="consultation-booking__form-group">
                  <label className="consultation-booking__label">
                    <Globe size={16} />
                    Timezone
                  </label>
                  <select
                    value={formData.timezone}
                    onChange={(e) => handleInputChange('timezone', e.target.value)}
                    className="consultation-booking__select"
                  >
                    {timezones.map((tz, index) => (
                      <option key={index} value={tz.value}>{tz.label}</option>
                    ))}
                  </select>
                </div>

                <div className="consultation-booking__form-group">
                  <label className="consultation-booking__label">
                    <Clock size={16} />
                    Available Times *
                  </label>
                  <div className="consultation-booking__time-slots">
                    {timeSlots.map((time, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleInputChange('selectedTime', time)}
                        className={`consultation-booking__time-slot ${
                          formData.selectedTime === time ? 'selected' : ''
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  {errors.selectedTime && <span className="consultation-booking__error">{errors.selectedTime}</span>}
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="consultation-booking__step-content">
            <div className="consultation-booking__confirmation">
              <div className="consultation-booking__success-icon">
                <CheckCircle size={48} />
              </div>
              <h2>Consultation Booked Successfully!</h2>
              <p>We're excited to help you achieve your goals. Here are your consultation details:</p>
              
              <div className="consultation-booking__booking-summary">
                <div className="consultation-booking__summary-item">
                  <strong>Name:</strong> {formData.name}
                </div>
                <div className="consultation-booking__summary-item">
                  <strong>Email:</strong> {formData.email}
                </div>
                <div className="consultation-booking__summary-item">
                  <strong>Industry:</strong> {formData.industry === 'Other (Please specify)' ? formData.customIndustry : formData.industry}
                </div>
                <div className="consultation-booking__summary-item">
                  <strong>Date:</strong> {formData.selectedDate?.toLocaleDateString()}
                </div>
                <div className="consultation-booking__summary-item">
                  <strong>Time:</strong> {formData.selectedTime} ({timezones.find(tz => tz.value === formData.timezone)?.label})
                </div>
              </div>

              <div className="consultation-booking__next-steps">
                <h3>What happens next?</h3>
                <ul>
                  <li>You'll receive a confirmation email within 5 minutes</li>
                  <li>We'll send you a calendar invite with meeting details</li>
                  <li>Our team will prepare personalized insights for your consultation</li>
                  <li>If you need to reschedule, just reply to the confirmation email</li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Free Website Development Consultation | Real Estate & Business Web Design | SoftRanch</title>
        <meta 
          name="description" 
          content="Book your FREE website development consultation with SoftRanch experts. Specializing in real estate websites, e-commerce, full-stack development, and business growth solutions. Get personalized insights and strategy for your online success."
        />
        <meta 
          name="keywords" 
          content="free website consultation, website development consultation, real estate website design, business website consultation, full stack development consultation, e-commerce website consultation, free web design consultation, website development services, real estate web development, business web development, SoftRanch consultation, website strategy consultation, online business consultation, web development expert consultation, free business website analysis, website redesign consultation, mobile website development, responsive web design consultation, SEO website consultation"
        />
        
        {/* Geographic and Local SEO */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="geo.position" content="39.50;-98.35" />
        <meta name="ICBM" content="39.50, -98.35" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Free Website Development Consultation | Real Estate & Business Web Design | SoftRanch" />
        <meta property="og:description" content="Book your FREE consultation with website development experts. Specializing in real estate websites, e-commerce, and business growth solutions. Get personalized strategy today!" />
        <meta property="og:url" content="https://softranch.agency/consultation-booking" />
        <meta property="og:site_name" content="SoftRanch - Website Development Experts" />
        <meta property="og:image" content="https://softranch.agency/static/consultation-booking-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free Website Development Consultation - SoftRanch" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@SoftRanch" />
        <meta name="twitter:creator" content="@SoftRanch" />
        <meta name="twitter:title" content="Free Website Development Consultation | SoftRanch" />
        <meta name="twitter:description" content="Book your FREE consultation with website development experts. Get personalized strategy for real estate, e-commerce & business websites." />
        <meta name="twitter:image" content="https://softranch.agency/static/consultation-booking-twitter.jpg" />
        <meta name="twitter:image:alt" content="Free Website Development Consultation - SoftRanch" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="SoftRanch Website Development Team" />
        <meta name="publisher" content="SoftRanch" />
        <meta name="copyright" content="SoftRanch" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* Mobile and App Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="SoftRanch Consultation" />
        
        {/* Canonical and Alternate URLs */}
        <link rel="canonical" href="https://softranch.agency/consultation-booking" />
        <link rel="alternate" hreflang="en-us" href="https://softranch.agency/consultation-booking" />
        <link rel="alternate" hreflang="x-default" href="https://softranch.agency/consultation-booking" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* Structured Data for Business Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Free Website Development Consultation",
            "serviceType": "Website Development Consultation",
            "description": "Comprehensive free consultation for website development, real estate web design, e-commerce solutions, and business growth strategies.",
            "provider": {
              "@type": "Organization",
              "@id": "https://softranch.agency/#organization",
              "name": "SoftRanch",
              "url": "https://softranch.agency",
              "logo": "https://softranch.agency/logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/softranch",
                "https://twitter.com/softranch",
                "https://www.facebook.com/softranch"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+92-335-5398908",
                "contactType": "customer service",
                "availableLanguage": "English"
              }
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Free consultation for website development and business growth strategies"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Website Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Real Estate Website Development",
                    "description": "Custom real estate websites with IDX integration, lead capture, and mobile optimization"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce Website Development",
                    "description": "Full-featured e-commerce solutions with payment integration and inventory management"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Business Website Development",
                    "description": "Professional business websites for lead generation and brand establishment"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Full Stack Web Development",
                    "description": "Complete web application development with frontend and backend solutions"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150",
              "bestRating": "5",
              "worstRating": "1"
            }
          })}
        </script>
        
        {/* Additional Structured Data for FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is the website development consultation really free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our initial consultation is completely free. We provide personalized insights and strategy recommendations with no obligation to work with us."
                }
              },
              {
                "@type": "Question",
                "name": "What types of websites do you specialize in?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We specialize in real estate websites, e-commerce platforms, business websites, healthcare portals, restaurant websites, and custom full-stack web applications."
                }
              },
              {
                "@type": "Question",
                "name": "How long does the consultation take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our consultation typically lasts 30-45 minutes, during which we analyze your current situation and provide actionable recommendations for your website project."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work with real estate agents and brokers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we have extensive experience creating high-converting real estate websites with IDX integration, lead capture systems, and local SEO optimization."
                }
              }
            ]
          })}
        </script>
        
        {/* Breadcrumb Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://softranch.agency"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://softranch.agency/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Free Consultation",
                "item": "https://softranch.agency/consultation"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="consultation-booking__wrapper">
        {/* Hero Section */}
        <section className="consultation-booking__hero">
          <div className="consultation-booking__hero-bg"></div>
          <div className="consultation-booking__glow-orb consultation-booking__glow-orb-1"></div>
          <div className="consultation-booking__glow-orb consultation-booking__glow-orb-2"></div>
          
          <div className="consultation-booking__container">
            <div className="consultation-booking__hero-content">
              <div className="consultation-booking__badge">
                <Sparkles size={20} />
                <span>Free Consultation</span>
              </div>
              
              <h1 className="consultation-booking__hero-title">
                Book Your Free Strategy
                <br />
                Consultation Today
              </h1>
              
              <p className="consultation-booking__hero-description">
                Get personalized insights from our web development experts. We'll analyze your current 
                situation and provide actionable strategies to grow your business online.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="consultation-booking__form-section">
          <div className="consultation-booking__floating-glow consultation-booking__floating-glow-1"></div>
          <div className="consultation-booking__floating-glow consultation-booking__floating-glow-2"></div>
          
          <div className="consultation-booking__container">
            <div className="consultation-booking__form-wrapper">
              {/* Progress Bar */}
              <div className="consultation-booking__progress-section">
                <div className="consultation-booking__progress-bar">
                  <div 
                    className="consultation-booking__progress-fill"
                    style={{ width: `${(currentStep / 5) * 100}%` }}
                  ></div>
                </div>
                
                <div className="consultation-booking__steps">
                  {steps.map((step) => (
                    <div 
                      key={step.number}
                      className={`consultation-booking__step ${
                        step.number === currentStep ? 'active' : 
                        step.number < currentStep ? 'completed' : ''
                      }`}
                    >
                      <div className="consultation-booking__step-icon">
                        {step.number < currentStep ? <CheckCircle size={20} /> : step.icon}
                      </div>
                      <span className="consultation-booking__step-title">{step.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <div className="consultation-booking__form-container">
                <div className="consultation-booking__form-glow"></div>
                
                <form className="consultation-booking__form">
                  {renderStepContent()}
                  
                  {/* Navigation Buttons */}
                  {currentStep < 5 && (
                    <div className="consultation-booking__form-navigation">
                      {currentStep > 1 && (
                        <button
                          type="button"
                          onClick={prevStep}
                          className="consultation-booking__btn consultation-booking__btn-secondary"
                        >
                          <ArrowLeft size={20} />
                          Previous
                        </button>
                      )}
                      
                      {currentStep < 4 ? (
                        <button
                          type="button"
                          onClick={nextStep}
                          className="consultation-booking__btn consultation-booking__btn-primary"
                        >
                          Continue
                          <ArrowRight size={20} />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                          className="consultation-booking__btn consultation-booking__btn-primary"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="consultation-booking__spinner"></div>
                              Booking...
                            </>
                          ) : (
                            <>
                              Book Consultation
                              <CheckCircle size={20} />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationBooking;