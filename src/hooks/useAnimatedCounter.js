import { useState, useEffect } from 'react';

/**
 * Custom hook for animated number counting
 * @param {number} targetValue - The final value to count to
 * @param {boolean} shouldAnimate - Whether to start the animation
 * @param {Object} options - Animation options
 * @param {number} options.duration - Animation duration in ms
 * @param {number} options.steps - Number of animation steps
 * @returns {number} - Current animated count value
 */
const useAnimatedCounter = (targetValue, shouldAnimate, options = {}) => {
  const { duration = 2000, steps = 60 } = options;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate || targetValue === 0) return;

    const increment = targetValue / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [shouldAnimate, targetValue, duration, steps]);

  return count;
};

export default useAnimatedCounter;

