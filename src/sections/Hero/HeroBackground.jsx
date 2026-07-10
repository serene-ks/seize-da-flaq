import bgImage from "@assets/images/gta6-bg.png";


import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { useMousePosition } from "@hooks/useMousePosition";
import { usePrefersReducedMotion } from "@hooks/usePrefersReducedMotion";


export default function HeroBackground() {
  const { x, y } = useMousePosition();

  const prefersReducedMotion = usePrefersReducedMotion();

  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setParticlesReady(true));
  }, [prefersReducedMotion]);

  const particleOptions = useMemo(
    () => ({
      fullScreen: { enable: false, },

      background: { color: "transparent", },

      particles: { number: { value: 18, },

        color: { value: ["#ff2d95", "#ff7a18"], },

        size: {
          value: { min: 1,max: 2, }, },
        opacity: { value: 0.3,},

        move: { enable: true,speed: 0.35,},

        links: { enable: false },
      },
      detectRetina: true,
    }),
    []
  );

  const parallax = prefersReducedMotion ? { x: 0, y: 0 } : {x: x * 6,y: y * 6,};

  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Background */}

      <img
        src={bgImage} alt="Background" className="absolute inset-0 h-full w-full object-cover" style={{
          transform: `translate3d(${parallax.x * 0.15}px,${parallax.y * 0.15}px,0) scale(1.08)`,
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/45" />

      {/* Pink Glow */}

      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-pink-500/20" />

      {/* Orange Glow */}

      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-orange-500/15" />

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 h-56 w-full bg-gradient-to-t from-[#08050f] to-transparent" />

      {/* Particles */}

      {!prefersReducedMotion && particlesReady && (
        <Particles
          id="hero-particles"
          options={particleOptions}
          className="absolute inset-0"
        />
      )}
    </div>
  );
}