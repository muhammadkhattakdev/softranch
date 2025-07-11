import Link from 'next/link'
import { Metadata } from 'next'

export const metadata = {
  title: '404 - Page Not Found | SoftRanch',
  description: 'The page you are looking for could not be found. Return to SoftRanch homepage or explore our services.',
  robots: 'noindex, nofollow',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Animation */}
        <div className="mb-12">
          <div className="relative">
            {/* Large 404 */}
            <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-color via-primary-light to-purple-400 animate-pulse">
              404
            </h1>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-color/20 rounded-full animate-bounce animation-delay-1000"></div>
            <div className="absolute -top-8 right-8 w-6 h-6 bg-purple-400/20 rounded-full animate-bounce animation-delay-2000"></div>
            <div className="absolute -bottom-4 left-1/2 w-4 h-4 bg-pink-400/20 rounded-full animate-bounce animation-delay-3000"></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-400 text-lg mb-2">
            The page you're looking for seems to have wandered off into the digital void.
          </p>
          <p className="text-gray-500 text-base">
            Don't worry, even the best developers get lost sometimes!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link 
            href="/"
            className="btn-primary group"
          >
            <svg 
              className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          
          <Link 
            href="/contact"
            className="px-8 py-4 border border-white/20 rounded-full text-white hover:bg-white/5 transition-all duration-300 hover:border-primary-color group"
          >
            Contact Support
            <svg 
              className="w-5 h-5 ml-2 inline-block transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="glass p-6 rounded-2xl">
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <Link 
              href="/about" 
              className="text-gray-400 hover:text-primary-light transition-colors duration-200"
            >
              About Us
            </Link>
            <Link 
              href="/portfolio" 
              className="text-gray-400 hover:text-primary-light transition-colors duration-200"
            >
              Portfolio
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-400 hover:text-primary-light transition-colors duration-200"
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-400 hover:text-primary-light transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Fun Element */}
        <div className="mt-12 text-gray-600 text-sm">
          <p>Error Code: 404 | The requested resource could not be found</p>
          <p className="mt-2">🚀 Lost in space? Our development team is here to help!</p>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </div>
  )
}