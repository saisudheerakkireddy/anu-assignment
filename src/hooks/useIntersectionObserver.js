import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to observe element intersection with viewport
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Margin around root
 * @returns {[React.RefObject, boolean]} - Ref to attach to element and visibility state
 */
const useIntersectionObserver = (options = {}) => {
  const { threshold = 0.2, rootMargin = '0px' } = options;
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin }
    );

    const currentElement = elementRef.current;
    
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return [elementRef, isVisible];
};

export default useIntersectionObserver;

