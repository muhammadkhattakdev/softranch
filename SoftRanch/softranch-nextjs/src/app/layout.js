import { Inter, Manrope, Poppins } from 'next/font/google'
import { AuthProvider } from '@/context/AuthContext'
import { ThemeProvider } from '@/context/ThemeContext'
import './globals.css'
import { Providers } from '@/components/providers'

// Font configurations for optimal loading
const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

// SEO Metadata
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://softranch.com'),
  title: {
    default: 'SoftRanch - Premium Web Development Agency | Custom Websites & Applications',
    template: '%s | SoftRanch - Web Development Agency'
  },
  description: 'SoftRanch is a leading web development agency specializing in custom websites, web applications, and digital solutions. Transform your business with our expert development team.',
  keywords: [
    'web development agency',
    'custom website development',
    'web applications',
    'digital solutions',
    'software development',
    'SoftRanch',
    'responsive design',
    'e-commerce development',
    'mobile apps'
  ],
  authors: [{ name: 'SoftRanch Team' }],
  creator: 'SoftRanch',
  publisher: 'SoftRanch',
  category: 'Web Development',
  classification: 'Business',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'SoftRanch',
    title: 'SoftRanch - Premium Web Development Agency',
    description: 'Transform your business with custom web development solutions. Expert team, cutting-edge technology, stunning results.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SoftRanch - Web Development Agency',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoftRanch - Premium Web Development Agency',
    description: 'Transform your business with custom web development solutions.',
    images: ['/images/twitter-image.jpg'],
    creator: '@softranch',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    yahoo: process.env.YAHOO_VERIFICATION,
  },
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  other: {
    'msapplication-TileColor': '#8a3ffc',
    'theme-color': '#8a3ffc',
  },
}

// Viewport configuration
export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

// Structured Data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SoftRanch',
  description: 'Premium web development agency specializing in custom websites and applications',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://softranch.com',
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://softranch.com'}/images/logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-XXX-XXX-XXXX',
    contactType: 'customer service',
    areaServed: 'Worldwide',
    availableLanguage: 'English'
  },
  sameAs: [
    'https://twitter.com/softranch',
    'https://linkedin.com/company/softranch',
    'https://github.com/softranch'
  ],
  foundingDate: '2020',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Your City',
    addressRegion: 'Your State',
    addressCountry: 'Your Country'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Web Development',
          description: 'Bespoke website and web application development'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-commerce Development',
          description: 'Complete e-commerce solutions and online stores'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile App Development',
          description: 'Native and cross-platform mobile applications'
        }
      }
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${manrope.variable} ${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="antialiased">
        <Providers>
          <ThemeProvider>
            <AuthProvider>
              <div className="app">
                {children}
              </div>
            </AuthProvider>
          </ThemeProvider>
        </Providers>
        
        {/* Performance and Analytics Scripts */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics */}
            {process.env.NEXT_PUBLIC_GA_ID && (
              <>
                <script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                />
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                        page_title: document.title,
                        page_location: window.location.href,
                      });
                    `,
                  }}
                />
              </>
            )}
          </>
        )}
      </body>
    </html>
  )
}