'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

// Loading component for initial hydration
const LoadingSpinner = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-3 border-primary-color border-t-transparent rounded-full animate-spin"></div>
      <p className="text-white text-lg font-medium">Loading SoftRanch...</p>
    </div>
  </div>
)

export function Providers({ children }) {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch
  if (!mounted) {
    return <LoadingSpinner />
  }

  return (
    <>
      {children}
      <PageAnalytics pathname={pathname} />
    </>
  )
}

// Simple page analytics component
function PageAnalytics({ pathname }) {
  useEffect(() => {
    // Track page views if analytics is enabled
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: pathname,
      })
    }
  }, [pathname])

  return null
}