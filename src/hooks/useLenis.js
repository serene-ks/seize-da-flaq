import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

/**
 * Initializes Lenis smooth scrolling for the whole app.
 * Mounted once at the top level (App.jsx). Skips entirely when the
 * user prefers reduced motion — native scroll takes over instead.
 *
 * @returns {React.MutableRefObject<Lenis|null>} the live Lenis instance
 */
export function useLenis() {
  const lenisRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    let rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [prefersReducedMotion]);

  return lenisRef;
}
