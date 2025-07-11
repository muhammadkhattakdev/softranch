'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const ScrollToTop = ({ 
  smooth = false, 
  behavior = 'instant' 
}) => {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? 'smooth' : behavior
    })
  }, [pathname, smooth, behavior])

  return null
}

export default ScrollToTop