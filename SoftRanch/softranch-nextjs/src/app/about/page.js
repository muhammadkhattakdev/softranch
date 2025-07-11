import Link from 'next/link'
import { Metadata } from 'next'
import { Rocket, Users, Award, Target, Zap, Heart, Code, Globe } from 'lucide-react'
import './about.css'

// SEO Metadata
export const metadata = {
  title: 'About SoftRanch - Innovative Web Development Team | Our Story',
  description: 'Learn about SoftRanch\'s journey, mission, and values. Meet our passionate team of developers creating cutting-edge web solutions since 2018. Discover what makes us different.',
  keywords: [
    'about SoftRanch',
    'web development team',
    'company story',
    'mission and values',
    'innovative developers',
    'software development agency',
    'tech team',
    'digital solutions experts'
  ],
  openGraph: {
    title: 'About SoftRanch - Innovative Web Development Team',
    description: 'Meet the passionate team behind SoftRanch. Learn our story, mission, and the values that drive us to create exceptional digital experiences.',
    url: '/about',
    type: 'website',
    images: [
      {
        url: '/images/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'SoftRanch Team - About Us',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About SoftRanch - Innovative Web Development Team',
    description: 'Meet the passionate team behind SoftRanch and learn our story.',
    images: ['/images/twitter-about.jpg'],
  },
  alternates: {
    canonical: '/about',
  },
}

// Structured Data for About Page
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About SoftRanch',
  description: 'Learn about SoftRanch web development agency, our mission, values, and team',
  url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
  mainEntity: {
    '@type': 'Organization',
    name: 'SoftRanch',
    foundingDate: '2018',
    description: 'Innovative web development agency specializing in cutting-edge digital solutions',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Web Development',
            description: 'Bespoke website and application development'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital Strategy',
            description: 'Comprehensive digital transformation consulting'
          }
        }
      ]
    }
  }
}

export default function AboutPage() {
  const values = [
    {
      icon: <Rocket size={32} />,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and methodologies to deliver solutions that put you ahead of the competition."
    },
    {
      icon: <Users size={32} />,
      title: "Client-Centric",
      description: "Your success is our success. We work closely with you to understand your vision and transform it into reality."
    },
    {
      icon: <Award size={32} />,
      title: "Excellence Always",
      description: "We don't compromise on quality. Every line of code, every pixel, every interaction is crafted to perfection."
    },
    {
      icon: <Target size={32} />,
      title: "Results Driven",
      description: "We focus on delivering measurable outcomes that drive your business growth and exceed expectations."
    }
  ]

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "80+", label: "Happy Clients" },
  ]

  const milestones = [
    { year: "2018", title: "The Beginning", description: "Started with a vision to revolutionize web development" },
    { year: "2020", title: "Rapid Growth", description: "Expanded our team and served 100+ clients globally" },
    { year: "2022", title: "Innovation Hub", description: "Pioneered AI-integrated development solutions" },
    { year: "2025", title: "Industry Leader", description: "Recognized as a top web development agency" }
  ]

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="about-wrapper">
        {/* Hero Section */}
        <section className="about-hero" aria-label="About SoftRanch Hero">
          <div className="about-hero-bg"></div>
          <div className="about-glow-orb about-glow-orb-1"></div>
          <div className="about-glow-orb about-glow-orb-2"></div>
          <div className="about-glow-orb about-glow-orb-3"></div>
          
          <div className="about-container">
            <div className="about-hero-content">
              <div className="about-badge">
                <span>About SoftRanch</span>
              </div>
              
              <h1 className="about-hero-title">
                We Build Digital
                <br />
                <span className="gradient-text">Experiences That Matter</span>
              </h1>
              
              <p className="about-hero-description">
                At SoftRanch, we're not just developers – we're digital architects crafting 
                the future of web experiences. With passion, innovation, and relentless 
                dedication, we transform ideas into powerful digital solutions.
              </p>
              
              <div className="about-hero-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-mission" aria-label="Our Mission">
          <div className="about-floating-glow about-floating-glow-1"></div>
          <div className="about-floating-glow about-floating-glow-2"></div>
          
          <div className="about-container">
            <div className="mission-grid">
              <div className="mission-content">
                <h2 className="section-title">Our Mission</h2>
                <p className="mission-text">
                  To empower businesses with cutting-edge web solutions that drive growth, 
                  enhance user experiences, and create lasting digital impact. We believe 
                  every business deserves a powerful online presence, and we're here to make 
                  that happen.
                </p>
                <Link href="/contact" className="mission-cta">
                  Start Your Journey
                  <Zap size={20} />
                </Link>
              </div>
              
              <div className="mission-visual">
                <div className="visual-card">
                  <Code size={48} />
                  <h3>Modern Tech Stack</h3>
                  <p>React, Next.js, Node.js, and beyond</p>
                </div>
                <div className="visual-card">
                  <Globe size={48} />
                  <h3>Global Reach</h3>
                  <p>Serving clients across 30+ countries</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values" aria-label="Our Core Values">
          <div className="about-container">
            <h2 className="section-title center">Our Core Values</h2>
            <p className="section-subtitle">The principles that guide everything we do</p>
            
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="about-journey" aria-label="Our Journey">
          <div className="journey-glow"></div>
          
          <div className="about-container">
            <h2 className="section-title center">Our Journey</h2>
            <p className="section-subtitle">From humble beginnings to industry leaders</p>
            
            <div className="journey-timeline">
              {milestones.map((milestone, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">{milestone.year}</span>
                    <h3 className="timeline-title">{milestone.title}</h3>
                    <p className="timeline-description">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="about-why" aria-label="Why Choose SoftRanch">
          <div className="about-container">
            <div className="why-content">
              <h2 className="section-title">Why Choose SoftRanch?</h2>
              
              <div className="why-grid">
                <div className="why-item">
                  <h3>Lightning Fast Delivery</h3>
                  <p>We understand time is money. Our agile approach ensures your project 
                  launches on schedule without compromising quality.</p>
                </div>
                
                <div className="why-item">
                  <h3>Transparent Communication</h3>
                  <p>Stay informed with bi-weekly progress updates. No surprises, no hidden 
                  agendas – just clear, honest communication.</p>
                </div>
                
                <div className="why-item">
                  <h3>Future-Proof Solutions</h3>
                  <p>Built with scalability in mind, our solutions grow with your business. 
                  Modern tech stack ensures longevity and performance.</p>
                </div>
                
                <div className="why-item">
                  <h3>Comprehensive Support</h3>
                  <p>From initial concept to post-launch maintenance, we're with you every 
                  step of the way. Your success is our commitment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta" aria-label="Get Started">
          <div className="cta-glow-bg"></div>
          
          <div className="about-container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Build Something Amazing?</h2>
              <p className="cta-description">
                Let's transform your vision into a digital reality that drives results
              </p>
              <div className="cta-buttons">
                <Link href="/contact" className="cta-button primary">
                  Get Started
                  <Rocket size={20} />
                </Link>
                <Link href="/portfolio" className="cta-button secondary">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}