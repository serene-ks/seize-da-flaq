import { useRef } from 'react';
import { useGsapReveal } from '@hooks/useGsapReveal';
import { eventConfig } from '@constants/eventConfig';
import Container from '@components/ui/Container';
import SectionHeading from '@components/ui/SectionHeading';
import GlassCard from '@components/ui/GlassCard';

export default function AboutCyberonites() {
  const sectionRef = useRef(null);
  useGsapReveal(sectionRef);
  const { aboutCyberonites } = eventConfig;

  return (
    <section id="about-cyberonites" ref={sectionRef} className="relative bg-navy/40 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={aboutCyberonites.eyebrow}
          title={aboutCyberonites.title}
          accent="purple"
        />

        <GlassCard className="reveal-item mx-auto mt-10 max-w-3xl" glow="purple">
          <div className="space-y-4 font-body text-sm leading-relaxed text-white/80 sm:text-base">
            {aboutCyberonites.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}
