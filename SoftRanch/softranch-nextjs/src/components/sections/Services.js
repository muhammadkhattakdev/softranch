'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Code2, 
  Smartphone, 
  Palette, 
  ShoppingCart, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <Code2 size={32} />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.',
      features: ['Responsive Design', 'Fast Performance', 'SEO Optimized', 'Secure & Scalable'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'App Store Ready', 'Push Notifications'],
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive designs that engage users and drive conversions.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Brand Identity'],
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: <ShoppingCart size={32} />,
      title: 'E-commerce',
      description: 'Complete e-commerce solutions with payment integration and inventory management.',
      features: ['Payment Gateway', 'Inventory System', 'Order Management', 'Analytics'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance',
      description: 'Optimize your existing applications for speed, scalability, and better user experience.',
      features: ['Speed Optimization', 'Code Review', 'Performance Audit', 'Monitoring'],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Consulting',
      description: 'Strategic technology consulting to help you make informed decisions and grow your business.',
      features: ['Tech Strategy', 'Architecture Review', 'Best Practices', 'Team Training'],
      color: 'from-indigo-500 to-purple-600'
    }
  ]

  return (
    <section className="services" id="services" aria-label="Our Services">
      <div className="services-bg">
        <div className="services-grid-pattern"></div>
        <div className="services-glow services-glow-1"></div>
        <div className="services-glow services-glow-2"></div>
      </div>

      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <div className="services-badge">
            <Sparkles size={16} />
            <span>Our Services</span>
          </div>
          
          <h2 className="services-title">
            Comprehensive Digital
            <span className="services-title-gradient"> Solutions</span>
          </h2>
          
          <p className="services-description">
            From concept to deployment, we provide end-to-end digital solutions 
            that help your business thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" data-index={index}>
              <div className="service-card-inner">
                {/* Card Header */}
                <div className="service-header">
                  <div className={`service-icon bg-gradient-to-br ${service.color}`}>
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                </div>

                {/* Card Content */}
                <div className="service-content">
                  <p className="service-description">{service.description}</p>
                  
                  <ul className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="service-feature">
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer */}
                <div className="service-footer">
                  <button className="service-btn">
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

                {/* Hover Effect */}
                <div className="service-hover-effect"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="services-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Start Your Project?</h3>
            <p className="cta-text">
              Let's discuss your ideas and bring them to life with our expertise.
            </p>
          </div>
          <Link href="/contact" className="services-button">
            <span>Get Started</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services