'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
  ArrowRight,
  Heart,
  ExternalLink
} from 'lucide-react'
import './Finale.css'

const Finale = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/about#team' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
    services: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'Mobile Apps', href: '/services/mobile-apps' },
      { label: 'UI/UX Design', href: '/services/design' },
      { label: 'Consulting', href: '/services/consulting' },
    ],
    resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Documentation', href: '/docs' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'GDPR', href: '/gdpr' },
    ]
  }

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/softranch', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/softranch', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/softranch', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com/softranch', label: 'Instagram' },
  ]

  const contactInfo = [
    { icon: Mail, text: 'hello@softranch.com', href: 'mailto:hello@softranch.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: 'San Francisco, CA', href: 'https://maps.google.com' },
  ]

  return (
    <footer className="finale">
      <div className="finale-bg">
        <div className="finale-glow"></div>
      </div>

      <div className="finale-container">
        {/* Main Footer Content */}
        <div className="finale-main">
          {/* Company Info */}
          <div className="finale-brand">
            <Link href="/" className="finale-logo">
              SoftRanch
            </Link>
            <p className="finale-tagline">
              Crafting digital experiences that drive results. We transform ideas 
              into powerful web solutions that help businesses grow and succeed.
            </p>
            
            {/* Contact Info */}
            <div className="finale-contact">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <Link 
                    key={index}
                    href={item.href}
                    className="contact-item"
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    <Icon size={16} />
                    <span>{item.text}</span>
                  </Link>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="finale-social">
              <p className="social-title">Follow Us</p>
              <div className="social-links">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      className="social-link"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={20} />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="finale-links">
            <div className="link-group">
              <h3 className="link-title">Company</h3>
              <ul className="link-list">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-group">
              <h3 className="link-title">Services</h3>
              <ul className="link-list">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-group">
              <h3 className="link-title">Resources</h3>
              <ul className="link-list">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-group">
              <h3 className="link-title">Legal</h3>
              <ul className="link-list">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="finale-newsletter">
          <div className="newsletter-content">
            <h3 className="newsletter-title">Stay Updated</h3>
            <p className="newsletter-text">
              Get the latest insights on web development, design trends, and tech innovations.
            </p>
          </div>
          <form className="newsletter-form">
            <div className="newsletter-input-group">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                <span>Subscribe</span>
                <ArrowRight size={18} />
              </button>
            </div>
            <p className="newsletter-privacy">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="finale-bottom">
          <div className="bottom-content">
            <p className="copyright">
              © {currentYear} SoftRanch. All rights reserved.
            </p>
            <p className="made-with">
              Made with <Heart size={16} className="heart-icon" /> by the SoftRanch team
            </p>
          </div>
          
          <div className="bottom-links">
            <Link href="/privacy" className="bottom-link">
              Privacy
            </Link>
            <Link href="/terms" className="bottom-link">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="bottom-link">
              Sitemap
              <ExternalLink size={14} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Finale