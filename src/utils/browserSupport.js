/**
 * Browser feature detection utilities
 */

/**
 * Detects if the browser supports background-clip: text
 * @returns {boolean} True if supported, false otherwise
 */
export const supportsBackgroundClipText = () => {
  if (typeof window === 'undefined') return true; // SSR fallback
  
  const testEl = document.createElement('span');
  testEl.style.cssText = 'background-clip: text; -webkit-background-clip: text;';
  
  return (
    testEl.style.backgroundClip === 'text' || 
    testEl.style.webkitBackgroundClip === 'text'
  );
};

/**
 * Applies fallback classes to document body based on browser support
 * Should be called once on app initialization
 */
export const applyBrowserSupportClasses = () => {
  if (typeof document === 'undefined') return; // SSR guard
  
  if (!supportsBackgroundClipText()) {
    document.body.classList.add('no-bgclip');
  }
};

/**
 * Checks if the user prefers reduced motion
 * @returns {boolean} True if reduced motion is preferred
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Checks if the user prefers high contrast
 * @returns {boolean} True if high contrast is preferred
 */
export const prefersHighContrast = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-contrast: high)').matches;
};

