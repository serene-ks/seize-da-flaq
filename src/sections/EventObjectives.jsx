import { useRef } from 'react';
import { FiTarget } from 'react-icons/fi';
import { useGsapReveal } from '@hooks/useGsapReveal';
import { eventConfig } from '@constants/eventConfig';
import Container from '@components/ui/Container';
import SectionHeading from '@components/ui/SectionHeading';
import GlassCard from '@components/ui/GlassCard';

export default function EventObjectives() {
  const sectionRef = useRef(null);
  useGsapReveal(sectionRef, '.reveal-item', { stagger: 0.1 });
  const { objectives } = eventConfig;

  return (
    <section id="objectives" ref={sectionRef} className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Directive" title="Event Objectives" accent="pink" />

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {objectives.map((objective, i) => (
            <li key={objective}>
              <GlassCard glow="pink" className="reveal-item h-full">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-neon-pink/15 text-neon-pink">
                    <FiTarget size={16} aria-hidden="true" />
                  </span>
                  <p className="font-body text-sm text-white/80 sm:text-base">{objective}</p>
                </div>
                <span className="sr-only">
                  Objective {i + 1} of {objectives.length}
                </span>
              </GlassCard>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
