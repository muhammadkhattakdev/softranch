// src/hooks/useIntersectionObserver.js
import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = ({
  threshold = 0.1,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = false,
}) => {
  const [entry, setEntry] = useState(null);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);
  const observer = useRef(null);

  const isIntersecting = !!entry?.isIntersecting;

  useEffect(() => {
    const element = elementRef.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || !element) return;

    const observerParams = { threshold, root, rootMargin };
    const isThresholdArray = Array.isArray(threshold);

    observer.current = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
        
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }

        // If freezeOnceVisible is true, disconnect observer once visible
        if (freezeOnceVisible && entry.isIntersecting && observer.current) {
          observer.current.disconnect();
        }
      },
      observerParams
    );

    observer.current.observe(element);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [threshold, root, rootMargin, freezeOnceVisible, hasIntersected]);

  return [elementRef, isIntersecting, hasIntersected, entry];
};