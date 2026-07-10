import { useEffect, useState } from 'react';

/**
 * Tracks the user's `prefers-reduced-motion` OS setting reactively.
 * Any component driving a GSAP timeline, Framer variant, or particle
 * system should check this before running non-essential motion.
 *
 * @returns {boolean} true if the user prefers reduced motion
 */
export function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mediaQuery.matches);

    const handleChange = (e) => setPrefersReduced(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReduced;
}
