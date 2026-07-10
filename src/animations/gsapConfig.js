import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register once, at app boot (imported from main.jsx). Individual
// section files should `import { gsap, ScrollTrigger } from
// '@animations/gsapConfig'` rather than importing gsap directly,
// so plugin registration can never be missed or duplicated.
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Shared easing tokens so every scroll-reveal/hero timeline feels
// like it belongs to the same system rather than ad-hoc curves.
export const EASE = {
  cinematic: 'expo.out',
  soft: 'power2.out',
  snappy: 'back.out(1.7)',
};

export { gsap, ScrollTrigger };
