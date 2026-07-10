import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { eventConfig } from "@constants/eventConfig";
import { usePrefersReducedMotion } from "@hooks/usePrefersReducedMotion";

export default function HeroStats() {
  const { stats } = eventConfig;

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3, });

  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section ref={ref} className="w-full">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat,index) => (
          <div
            key={stat.label}
            className="group relative overflow-hidden rounded-3xl border border-white/10
                       bg-white/5 p-6 backdrop-blur-xl
                       transition-all duration-500
                       hover:-translate-y-2
                       hover:border-neon-pink
                       hover:shadow-[0_0_30px_rgba(255,45,149,.45)]"
          >
            {/* Neon Glow */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-500
                         group-hover:opacity-100
                         bg-gradient-to-br
                         from-neon-pink/10
                         via-transparent
                         to-neon-orange/10"
            />

            {/* Top Accent Line */}
            <div
              className="absolute left-0 top-0 h-1 w-full
                         bg-gradient-to-r
                         from-neon-pink
                         via-neon-orange
                         to-neon-purple"
            />

            {/* Number */}
            <h3
              className="relative z-10 font-orbitron
                         text-3xl md:text-4xl
                         font-black
                         text-white"
            >
              {stat.prefix}

              {inView ? (
                <CountUp
                  end={stat.value}
                  duration={prefersReducedMotion ? 0 : 2}
                  separator=","
                />
              ) : (
                0
              )}

              {stat.suffix}
            </h3>

            {/* Label */}
            <p
              className="relative z-10 mt-3
                         text-sm
                         uppercase
                         tracking-[0.25em]
                         text-white/70"
            >
              {stat.displayLabel ?? stat.label}
            </p>

            {/* Decorative Glow */}
            <div
              className="absolute -bottom-10 -right-10
                         h-28 w-28 rounded-full
                         bg-neon-pink/10 blur-3xl
                         transition-all duration-500
                         group-hover:bg-neon-orange/20"
            />
          </div>
        ))}
      </div>
    </section>
  );
}