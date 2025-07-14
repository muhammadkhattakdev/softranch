import React, { useState, useEffect } from 'react';
import {
  Calendar, Clock, User, Mail, Phone, MapPin, FileText, CheckCircle,
  ArrowRight, ArrowLeft, Scale, Shield, Award, Users, Star, MessageSquare,
  Briefcase, Building, Home, Car, Heart, CreditCard, ChevronDown,
  Check, AlertCircle, Sparkles, Zap, Target, Globe, Camera, Video
} from 'lucide-react';
import img1 from "../../../../static/lawyer_booking_header.jpg";

const LawyerBookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    legalArea: '',
    urgency: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    preferredDate: '',
    preferredTime: '',
    consultationType: 'in-person',
    caseDescription: '',
    budget: '',
    referralSource: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const totalSteps = 4;

  const serviceTypes = [
    { id: 'consultation', name: 'Legal Consultation', icon: MessageSquare, description: 'Initial consultation to discuss your legal needs', price: '$200/hr' },
    { id: 'contract', name: 'Contract Review', icon: FileText, description: 'Review and analysis of legal documents', price: '$150/hr' },
    { id: 'representation', name: 'Legal Representation', icon: Scale, description: 'Full legal representation for your case', price: 'Custom' },
    { id: 'business', name: 'Business Legal', icon: Building, description: 'Corporate and business law services', price: '$250/hr' }
  ];

  const legalAreas = [
    { id: 'business', name: 'Business Law', icon: Building },
    { id: 'family', name: 'Family Law', icon: Heart },
    { id: 'criminal', name: 'Criminal Law', icon: Shield },
    { id: 'property', name: 'Property Law', icon: Home },
    { id: 'personal-injury', name: 'Personal Injury', icon: Car },
    { id: 'employment', name: 'Employment Law', icon: Briefcase }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const urgencyLevels = [
    { id: 'low', name: 'Standard', description: 'Within 2 weeks', color: '#10b981' },
    { id: 'medium', name: 'Priority', description: 'Within 1 week', color: '#f59e0b' },
    { id: 'high', name: 'Urgent', description: 'Within 2-3 days', color: '#ef4444' },
    { id: 'emergency', name: 'Emergency', description: 'Same day/next day', color: '#dc2626' }
  ];

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitBooking = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return 'Select Service';
      case 2: return 'Your Information';
      case 3: return 'Schedule Appointment';
      case 4: return 'Review & Confirm';
      default: return 'Book Consultation';
    }
  };

  const isStepComplete = () => {
    switch (currentStep) {
      case 1: return formData.serviceType && formData.legalArea && formData.urgency;
      case 2: return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 3: return formData.preferredDate && formData.preferredTime;
      case 4: return true;
      default: return false;
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      marginTop:'-80px',
    }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Background Image Container */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0
        }}>
          <img
            src={img1}
            alt="Professional law office"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.4) contrast(1.1)'
            }}
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.8), rgba(16, 185, 129, 0.6))',
            zIndex: 1
          }}></div>
        </div>

        {/* Navigation */}
        <nav style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '20px 40px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #1e40af, #10b981)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Scale size={20} color="white" />
            </div>
            <span style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: 'white'
            }}>
              SoftRanch Legal
            </span>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center'
          }}>
            {['Services', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  opacity: 0.9,
                  transition: 'opacity 0.3s ease'
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero Content */}
        <div style={{
          position: 'relative',
          zIndex: 5,
          textAlign: 'center',
          color: 'white',
          maxWidth: '800px',
          padding: '0 20px'
        }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            fontWeight: '900',
            marginBottom: '24px',
            lineHeight: 1.1,
            textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
          }}>
            Book Now
          </h1>
          
          <p style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            marginBottom: '40px',
            opacity: 0.95,
            lineHeight: 1.5,
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
          }}>
            Schedule your consultation with our expert legal team.
            <br />Professional legal services when you need them most.
          </p>

          <div style={{
            display: 'flex',
            gap: '40px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}>
            {[
              { icon: Shield, text: '25+ Years Experience' },
              { icon: Award, text: '500+ Cases Won' },
              { icon: Users, text: '1000+ Satisfied Clients' }
            ].map((stat, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <stat.icon size={24} color="white" />
                <span style={{
                  fontSize: '16px',
                  fontWeight: '600'
                }}>
                  {stat.text}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '16px 32px',
              background: 'linear-gradient(135deg, #1e40af, #10b981)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              margin: '0 auto',
              boxShadow: '0 8px 25px rgba(30, 64, 175, 0.4)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 12px 35px rgba(30, 64, 175, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 25px rgba(30, 64, 175, 0.4)';
            }}
          >
            <Calendar size={20} />
            Start Booking Process
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking-form" style={{
        padding: '80px 20px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Form Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '12px'
            }}>
              {getStepTitle()}
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#6b7280'
            }}>
              Step {currentStep} of {totalSteps}
            </p>
          </div>

          {/* Progress Bar */}
          <div style={{
            width: '100%',
            height: '4px',
            backgroundColor: '#e5e7eb',
            borderRadius: '2px',
            marginBottom: '40px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${(currentStep / totalSteps) * 100}%`,
              height: '100%',
              background: 'linear-gradient(135deg, #1e40af, #10b981)',
              borderRadius: '2px',
              transition: 'width 0.5s ease'
            }}></div>
          </div>

          {/* Step Content */}
          <div style={{
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <div style={{
                animation: 'fadeIn 0.5s ease-in-out'
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '24px'
                }}>
                  What type of legal service do you need?
                </h3>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '16px',
                  marginBottom: '32px'
                }}>
                  {serviceTypes.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => updateFormData('serviceType', service.id)}
                      style={{
                        padding: '20px',
                        border: `2px solid ${formData.serviceType === service.id ? '#1e40af' : '#e5e7eb'}`,
                        borderRadius: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        backgroundColor: formData.serviceType === service.id ? '#eff6ff' : 'white'
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '8px'
                      }}>
                        <service.icon size={24} color={formData.serviceType === service.id ? '#1e40af' : '#6b7280'} />
                        <h4 style={{
                          fontSize: '16px',
                          fontWeight: '600',
                          color: '#1f2937',
                          margin: 0
                        }}>
                          {service.name}
                        </h4>
                        <span style={{
                          marginLeft: 'auto',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#1e40af'
                        }}>
                          {service.price}
                        </span>
                      </div>
                      <p style={{
                        fontSize: '14px',
                        color: '#6b7280',
                        margin: 0
                      }}>
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>

                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '16px'
                }}>
                  Area of Law
                </h3>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '12px',
                  marginBottom: '32px'
                }}>
                  {legalAreas.map((area) => (
                    <div
                      key={area.id}
                      onClick={() => updateFormData('legalArea', area.id)}
                      style={{
                        padding: '16px',
                        border: `2px solid ${formData.legalArea === area.id ? '#10b981' : '#e5e7eb'}`,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        backgroundColor: formData.legalArea === area.id ? '#ecfdf5' : 'white',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <area.icon size={20} color={formData.legalArea === area.id ? '#10b981' : '#6b7280'} />
                      <span style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#1f2937'
                      }}>
                        {area.name}
                      </span>
                    </div>
                  ))}
                </div>

                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '16px'
                }}>
                  Urgency Level
                </h3>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '12px'
                }}>
                  {urgencyLevels.map((level) => (
                    <div
                      key={level.id}
                      onClick={() => updateFormData('urgency', level.id)}
                      style={{
                        padding: '16px',
                        border: `2px solid ${formData.urgency === level.id ? level.color : '#e5e7eb'}`,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        backgroundColor: formData.urgency === level.id ? `${level.color}10` : 'white'
                      }}
                    >
                      <div style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#1f2937',
                        marginBottom: '4px'
                      }}>
                        {level.name}
                      </div>
                      <div style={{
                        fontSize: '12px',
                        color: '#6b7280'
                      }}>
                        {level.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Personal Information */}
            {currentStep === 2 && (
              <div style={{
                animation: 'fadeIn 0.5s ease-in-out'
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '24px'
                }}>
                  Tell us about yourself
                </h3>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '20px'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '8px'
                    }}>
                      First Name *
                    </label>
                    <div style={{
                      position: 'relative'
                    }}>
                      <User size={18} style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#6b7280'
                      }} />
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => updateFormData('firstName', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 12px 12px 40px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '14px',
                          outline: 'none',
                          transition: 'border-color 0.3s ease',
                          boxSizing: 'border-box'
                        }}
                        placeholder="Enter your first name"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '8px'
                    }}>
                      Last Name *
                    </label>
                    <div style={{
                      position: 'relative'
                    }}>
                      <User size={18} style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#6b7280'
                      }} />
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => updateFormData('lastName', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 12px 12px 40px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '14px',
                          outline: 'none',
                          transition: 'border-color 0.3s ease',
                          boxSizing: 'border-box'
                        }}
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '8px'
                    }}>
                      Email Address *
                    </label>
                    <div style={{
                      position: 'relative'
                    }}>
                      <Mail size={18} style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#6b7280'
                      }} />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 12px 12px 40px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '14px',
                          outline: 'none',
                          transition: 'border-color 0.3s ease',
                          boxSizing: 'border-box'
                        }}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '8px'
                    }}>
                      Phone Number *
                    </label>
                    <div style={{
                      position: 'relative'
                    }}>
                      <Phone size={18} style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#6b7280'
                      }} />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 12px 12px 40px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '14px',
                          outline: 'none',
                          transition: 'border-color 0.3s ease',
                          boxSizing: 'border-box'
                        }}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                <div style={{
                  marginTop: '24px'
                }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '8px'
                  }}>
                    Company/Organization (Optional)
                  </label>
                  <div style={{
                    position: 'relative'
                  }}>
                    <Building size={18} style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#6b7280'
                    }} />
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => updateFormData('company', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 12px 12px 40px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                        boxSizing: 'border-box'
                      }}
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div style={{
                  marginTop: '24px'
                }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '8px'
                  }}>
                    Brief Description of Your Case
                  </label>
                  <textarea
                    value={formData.caseDescription}
                    onChange={(e) => updateFormData('caseDescription', e.target.value)}
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                      resize: 'vertical',
                      boxSizing: 'border-box'
                    }}
                    placeholder="Please provide a brief description of your legal matter..."
                  />
                </div>
              </div>
            )}

            {/* Step 3: Schedule Appointment */}
            {currentStep === 3 && (
              <div style={{
                animation: 'fadeIn 0.5s ease-in-out'
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '24px'
                }}>
                  Schedule your consultation
                </h3>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
                  gap: '32px'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '12px'
                    }}>
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => updateFormData('preferredDate', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '14px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '12px'
                    }}>
                      Preferred Time
                    </label>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '8px'
                    }}>
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => updateFormData('preferredTime', time)}
                          style={{
                            padding: '10px',
                            border: `1px solid ${formData.preferredTime === time ? '#1e40af' : '#d1d5db'}`,
                            borderRadius: '6px',
                            backgroundColor: formData.preferredTime === time ? '#eff6ff' : 'white',
                            color: formData.preferredTime === time ? '#1e40af' : '#374151',
                            fontSize: '12px',
                            fontWeight: '500',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{
                  marginTop: '32px'
                }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '12px'
                  }}>
                    Consultation Type
                  </label>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '12px'
                  }}>
                    {[
                      { id: 'in-person', name: 'In-Person', icon: Building, description: 'Visit our office' },
                      { id: 'video', name: 'Video Call', icon: Video, description: 'Online meeting' },
                      { id: 'phone', name: 'Phone Call', icon: Phone, description: 'Traditional call' }
                    ].map((type) => (
                      <div
                        key={type.id}
                        onClick={() => updateFormData('consultationType', type.id)}
                        style={{
                          padding: '16px',
                          border: `1px solid ${formData.consultationType === type.id ? '#1e40af' : '#d1d5db'}`,
                          borderRadius: '8px',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          backgroundColor: formData.consultationType === type.id ? '#eff6ff' : 'white',
                          textAlign: 'center'
                        }}
                      >
                        <type.icon size={24} color={formData.consultationType === type.id ? '#1e40af' : '#6b7280'} style={{ margin: '0 auto 8px' }} />
                        <div style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#1f2937',
                          marginBottom: '4px'
                        }}>
                          {type.name}
                        </div>
                        <div style={{
                          fontSize: '12px',
                          color: '#6b7280'
                        }}>
                          {type.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review & Confirm */}
            {currentStep === 4 && (
              <div style={{
                animation: 'fadeIn 0.5s ease-in-out'
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '24px'
                }}>
                  Review your booking details
                </h3>
                
                <div style={{
                  backgroundColor: '#f9fafb',
                  borderRadius: '12px',
                  padding: '24px',
                  border: '1px solid #e5e7eb'
                }}>
                  <div style={{
                    display: 'grid',
                    gap: '16px'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingBottom: '12px',
                      borderBottom: '1px solid #e5e7eb'
                    }}>
                      <span style={{ fontWeight: '600', color: '#374151' }}>Service Type:</span>
                      <span style={{ color: '#1f2937' }}>
                        {serviceTypes.find(s => s.id === formData.serviceType)?.name}
                      </span>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingBottom: '12px',
                      borderBottom: '1px solid #e5e7eb'
                    }}>
                      <span style={{ fontWeight: '600', color: '#374151' }}>Legal Area:</span>
                      <span style={{ color: '#1f2937' }}>
                        {legalAreas.find(a => a.id === formData.legalArea)?.name}
                      </span>
                    </div>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingBottom: '12px',
                      borderBottom: '1px solid #e5e7eb'
                    }}>
                      <span style={{ fontWeight: '600', color: '#374151' }}>Client:</span>
                      <span style={{ color: '#1f2937' }}>
                        {formData.firstName} {formData.lastName}
                      </span>
                    </div>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingBottom: '12px',
                      borderBottom: '1px solid #e5e7eb'
                    }}>
                      <span style={{ fontWeight: '600', color: '#374151' }}>Contact:</span>
                      <span style={{ color: '#1f2937' }}>
                        {formData.email} • {formData.phone}
                      </span>
                    </div>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingBottom: '12px',
                      borderBottom: '1px solid #e5e7eb'
                    }}>
                      <span style={{ fontWeight: '600', color: '#374151' }}>Appointment:</span>
                      <span style={{ color: '#1f2937' }}>
                        {formData.preferredDate} at {formData.preferredTime}
                      </span>
                    </div>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <span style={{ fontWeight: '600', color: '#374151' }}>Type:</span>
                      <span style={{ color: '#1f2937', textTransform: 'capitalize' }}>
                        {formData.consultationType.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                </div>

                <div style={{
                  marginTop: '24px',
                  padding: '16px',
                  backgroundColor: '#ecfdf5',
                  borderRadius: '8px',
                  border: '1px solid #d1fae5'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '8px'
                  }}>
                    <CheckCircle size={20} color="#10b981" />
                    <span style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#065f46'
                    }}>
                      Booking Confirmation
                    </span>
                  </div>
                  <p style={{
                    fontSize: '14px',
                    color: '#047857',
                    margin: 0
                  }}>
                    You will receive a confirmation email with meeting details and next steps.
                    Our team will contact you 24 hours before your appointment to confirm.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Form Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '40px',
            paddingTop: '24px',
            borderTop: '1px solid #e5e7eb'
          }}>
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              style={{
                padding: '12px 24px',
                backgroundColor: currentStep === 1 ? '#f3f4f6' : 'white',
                color: currentStep === 1 ? '#9ca3af' : '#374151',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: currentStep === 1 ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
            >
              <ArrowLeft size={16} />
              Previous
            </button>

            {currentStep < totalSteps ? (
              <button
                onClick={nextStep}
                disabled={!isStepComplete()}
                style={{
                  padding: '12px 24px',
                  background: isStepComplete() ? 'linear-gradient(135deg, #1e40af, #10b981)' : '#f3f4f6',
                  color: isStepComplete() ? 'white' : '#9ca3af',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: isStepComplete() ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
              >
                Next
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={submitBooking}
                disabled={isSubmitting}
                style={{
                  padding: '12px 24px',
                  background: isSubmitting ? '#9ca3af' : 'linear-gradient(135deg, #1e40af, #10b981)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
              >
                {isSubmitting ? (
                  <>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid #ffffff',
                      borderTop: '2px solid transparent',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <CheckCircle size={16} />
                    Confirm Booking
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: '#1f2937',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            Why Choose SoftRanch Legal?
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#d1d5db',
            marginBottom: '60px',
            maxWidth: '600px',
            margin: '0 auto 60px'
          }}>
            Experience the difference of working with a premier legal team
            dedicated to your success.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            {[
              {
                icon: Scale,
                title: 'Expert Legal Team',
                description: '25+ years of combined experience across all major practice areas'
              },
              {
                icon: Shield,
                title: 'Proven Track Record',
                description: '500+ successful cases with a 95% client satisfaction rate'
              },
              {
                icon: Clock,
                title: 'Responsive Service',
                description: '24-hour response time and personalized attention to every case'
              },
              {
                icon: Award,
                title: 'Award-Winning Firm',
                description: 'Recognized by top legal publications and professional associations'
              }
            ].map((feature, index) => (
              <div key={index} style={{
                textAlign: 'center'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1e40af, #10b981)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  boxShadow: '0 8px 25px rgba(30, 64, 175, 0.3)'
                }}>
                  <feature.icon size={32} color="white" />
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  marginBottom: '12px'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#d1d5db',
                  lineHeight: 1.6
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{
        padding: '80px 20px',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '20px'
          }}>
            Need Immediate Assistance?
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6b7280',
            marginBottom: '40px'
          }}>
            Our legal team is available 24/7 for urgent matters.
            Contact us directly for immediate support.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(3, 1fr)' : '1fr',
            gap: '30px',
            marginBottom: '40px'
          }}>
            {[
              {
                icon: Phone,
                title: 'Call Us',
                value: '(555) 123-4567',
                description: '24/7 Emergency Line'
              },
              {
                icon: Mail,
                title: 'Email Us',
                value: 'legal@softranch.com',
                description: 'Response within 2 hours'
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                value: '123 Legal Street',
                description: 'Downtown Office'
              }
            ].map((contact, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '24px',
                backgroundColor: '#f9fafb',
                borderRadius: '12px',
                border: '1px solid #e5e7eb'
              }}>
                <contact.icon size={32} color="#1e40af" style={{ margin: '0 auto 16px' }} />
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '8px'
                }}>
                  {contact.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#1e40af',
                  marginBottom: '4px'
                }}>
                  {contact.value}
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#6b7280'
                }}>
                  {contact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccess && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '40px',
            maxWidth: '500px',
            margin: '20px',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px'
            }}>
              <CheckCircle size={40} color="white" />
            </div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '16px'
            }}>
              Booking Confirmed!
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#6b7280',
              marginBottom: '24px'
            }}>
              Thank you for choosing SoftRanch Legal. We've sent a confirmation
              email with your appointment details. Our team will contact you soon.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              style={{
                padding: '12px 24px',
                background: 'linear-gradient(135deg, #1e40af, #10b981)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LawyerBookingPage;