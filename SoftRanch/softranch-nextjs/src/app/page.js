import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Features from '@/components/sections/Features'
import Portfolio from '@/components/sections/Portfolio'
import Team from '@/components/sections/Team'
import Testimonials from '@/components/sections/Testimonials'
import TrustedBy from '@/components/sections/TrustedBy'
import Featured from '@/components/sections/Featured'
import Mockup from '@/components/sections/Mockup'
import Finale from '@/components/sections/Finale'

// Dynamic imports for better performance
const DynamicPortfolio = dynamic(() => import('@/components/sections/Portfolio'), {
  loading: () => <div className="h-96 bg-gray-900/50 animate-pulse rounded-lg" />
})

const DynamicTestimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <div className="h-96 bg-gray-900/50 animate-pulse rounded-lg" />
})

// SEO Metadata
export const metadata = {
  title: 'SoftRanch - Premium Web Development Agency | Custom Websites & Applications',
  description: 'Transform your business with SoftRanch\'s expert web development services. We create stunning, high-performance websites and applications that drive results. Get started today!',
  keywords: [
    'web development agency',
    'custom website development',
    'web applications',
    'responsive design',
    'e-commerce development',
    'digital solutions',
    'software development',
    'mobile-friendly websites',
    'SEO optimization',
    'performance optimization'
  ],
  openGraph: {
    title: 'SoftRanch - Premium Web Development Agency',
    description: 'Transform your business with custom web development solutions. Expert team, cutting-edge technology, stunning results.',
    url: '/',
    type: 'website',
    images: [
      {
        url: '/images/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'SoftRanch - Premium Web Development Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoftRanch - Premium Web Development Agency',
    description: 'Transform your business with custom web development solutions.',
    images: ['/images/twitter-homepage.jpg'],
  },
  alternates: {
    canonical: '/',
  },
}

// Structured Data for Homepage
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'SoftRanch - Premium Web Development Agency',
  description: 'Professional web development services including custom websites, web applications, and digital solutions.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://softranch.com',
  mainEntity: {
    '@type': 'Organization',
    name: 'SoftRanch',
    description: 'Premium web development agency specializing in custom websites and applications',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://softranch.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://softranch.com'}/images/logo.png`,
    foundingDate: '2020',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Web Development',
            description: 'Bespoke website and web application development tailored to your business needs'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce Development',
            description: 'Complete e-commerce solutions and online stores with payment integration'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications for iOS and Android'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Optimization',
            description: 'Search engine optimization to improve your website\'s visibility and ranking'
          }
        }
      ]
    }
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: process.env.NEXT_PUBLIC_SITE_URL || 'https://softranch.com'
      }
    ]
  }
}

export default function Homepage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Page Content */}
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section aria-label="Hero section">
            <Hero />
          </section>

          {/* Services Section */}
          <section aria-label="Our services" className="py-20">
            <Services />
          </section>

          {/* Features Section */}
          <section aria-label="Key features" className="py-20">
            <Features />
          </section>

          {/* Mockup Section */}
          <section aria-label="Design showcase" className="py-20">
            <Mockup />
          </section>

          {/* Portfolio Section - Dynamically loaded */}
          <section aria-label="Our portfolio" className="py-20">
            <DynamicPortfolio />
          </section>

          {/* Featured Section */}
          <section aria-label="Featured projects" className="py-20">
            <Featured />
          </section>

          {/* Trusted By Section */}
          <section aria-label="Trusted by companies" className="py-20">
            <TrustedBy />
          </section>

          {/* Team Section */}
          <section aria-label="Our team" className="py-20">
            <Team />
          </section>

          {/* Testimonials Section - Dynamically loaded */}
          <section aria-label="Client testimonials" className="py-20">
            <DynamicTestimonials />
          </section>
        </main>

        {/* Footer */}
        <Finale />
      </div>
    </>
  )
}