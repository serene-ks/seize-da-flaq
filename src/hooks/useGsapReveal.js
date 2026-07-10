import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@animations/gsapConfig";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * Attaches a GSAP ScrollTrigger fade+rise reveal to every element
 * matching `selector` inside `scopeRef`.
 *
 * @param {React.RefObject} scopeRef
 * @param {string} selector
 * @param {{y?: number, duration?: number, stagger?: number}} options
 */
export function useGsapReveal(
  scopeRef,
  selector = ".reveal-item",
  options = {}
) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { y = 40, duration = 0.8, stagger = 0.12 } = options;

  useEffect(() => {
    if (!scopeRef?.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(selector, scopeRef.current);

      if (!items.length) return;

      if (prefersReducedMotion) {
        gsap.set(items, {
          opacity: 1,
          y: 0,
        });
        return;
      }

      gsap.from(items, {
        opacity: 0,
        y,
        duration,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: scopeRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });
    }, scopeRef);

    return () => ctx.revert();
  }, [
    scopeRef,
    selector,
    y,
    duration,
    stagger,
    prefersReducedMotion,
  ]);
}

export { ScrollTrigger };