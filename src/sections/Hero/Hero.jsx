import { useLayoutEffect, useRef, useState } from 'react';
import { FiChevronDown, FiVolume2, FiVolumeX } from 'react-icons/fi';
import { gsap } from '@animations/gsapConfig';
import { usePrefersReducedMotion } from '@hooks/usePrefersReducedMotion';
import { eventConfig } from '@constants/eventConfig';
import Container from '@components/ui/Container';
import Button from '@components/ui/Button';
import Countdown from '@components/Countdown';
import HeroBackground from './HeroBackground';
import HeroStats from './HeroStats';

export default function Hero() {
  const rootRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [musicOn, setMusicOn] = useState(false);
  const { event, branding } = eventConfig;

  useLayoutEffect(() => {
    if (!rootRef.current) return undefined;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.reveal-item', rootRef.current);
      if (prefersReducedMotion) {
        gsap.set(items, { opacity: 1, y: 0, scale: 1 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(
        rootRef.current,
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.1 }
      ).fromTo(
        items,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
        '-=0.5'
      );
    }, rootRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  function handleScrollToNext() {
    document.getElementById('mission-briefing')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section id="hero" ref={rootRef} className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-8">
      <HeroBackground />

    <Container className="relative z-10 flex min-h-screen flex-col items-center justify-start pt-4">

  {/* Logo */}
  <img
    src={branding.wordmarkSrc} alt={event.name}
    className="reveal-item w-[320px] sm:w-[420px] lg:w-[560px] drop-shadow-[0_0_45px_rgba(255,120,0,.55)] transition-all duration-500 hover:scale-105"/>

  {/* Heading */}
  <h2 className=" reveal-item mt-6 font-display text-lg uppercase tracking-[0.35em] text-neon-pink ">
    EVERY FLAG IS A MISSION. EVERY MISSION CHANGES THE CITY.</h2>

  {/* Subtitle */}
  <p className="reveal-item mt-3 text-xl italic text-white/70">No Rules. Just Flags.</p>

  {/* Description */}
  <p className="reveal-item mt-6 max-w-3xl text-center text-lg text-white/80">Cyberonites Club's biggest National-Level Capture The Flag competition — an immersive, mission-based cybersecurity experience.
  </p>

  {/* Mission Status */}
  <div
    className=" reveal-item mt-10 rounded-[32px] border border-neon-pink/30 bg-black/30 px-12 py-6 backdrop-blur-xl shadow-[0_0_40px_rgba(255,40,140,.25)] ">
    <div className="flex items-center gap-4">

      <span className="h-3 w-3 rounded-full bg-neon-pink animate-pulse"/>

      <span className="font-display text-xl text-neon-pink"> Mission Has Begun</span>

    </div>
  </div>

  {/* Buttons */}
  <div className="reveal-item mt-10 flex flex-wrap justify-center gap-6">

    <Button href={eventConfig.registration.link}>Register Now</Button>

    <Button variant="secondary" onClick={() => document.getElementById("event-overview")?.scrollIntoView({ behavior: "smooth" })}>Explore Missions</Button>

  </div>

  {/* Countdown */}
  <div className="reveal-item mt-12">
    <Countdown />
  </div>

  {/* Stats */}
  <div className="reveal-item mt-14 w-full max-w-6xl">
    <HeroStats />
  </div>

</Container>

      <button type="button" onClick={() => setMusicOn((prev) => !prev)} aria-pressed={musicOn} aria-label={musicOn ? 'Mute ambient music' : 'Play ambient music'}
        className="glass-panel absolute right-5 top-24 z-10 flex h-11 w-11 items-center justify-center rounded-full text-white/80 hover:text-neon-cyan sm:right-8">
        {musicOn ? <FiVolume2 size={18} /> : <FiVolumeX size={18} />}
      </button>

      <button type="button" onClick={handleScrollToNext} aria-label="Scroll to next section" className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white/60 hover:text-neon-cyan">
        <span className="font-display text-[10px] uppercase tracking-widest">Scroll</span>
        <FiChevronDown className={prefersReducedMotion ? '' : 'animate-bounce'} size={20} />
      </button>
    </section>
  );
}
