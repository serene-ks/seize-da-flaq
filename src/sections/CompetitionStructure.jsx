import { useRef } from 'react';
import { useGsapReveal } from '@hooks/useGsapReveal';
import { eventConfig } from '@constants/eventConfig';
import Container from '@components/ui/Container';
import SectionHeading from '@components/ui/SectionHeading';
import GlassCard from '@components/ui/GlassCard';
import structureBg from "@assets/images/competition-bg.png";

export default function CompetitionStructure() {
  const sectionRef = useRef(null);
  useGsapReveal(sectionRef);
  const { structure } = eventConfig;

  return (
    <section id="competition-structure" ref={sectionRef} className="relative bg-navy/40 py-24 sm:py-32">
      <img
  src={structureBg}
  alt=""
  className="absolute inset-0 h-full w-full object-cover"
/>

<div className="absolute inset-0 bg-black/80" />

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-pink-500/20" />

<div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-orange-500/20" />
      <Container className="relative z-10">
        <SectionHeading
  eyebrow="MISSION FLOW"
  title="Competition Structure"
  description="Every participant begins with a single mission. Survive every phase, solve every challenge, and make it to the Final Heist."
/>

<div className="relative mt-20">

  {/* Vertical Timeline */}
  <div className="absolute left-6 top-0 hidden h-full w-[3px] bg-gradient-to-b from-neon-pink via-neon-orange to-neon-cyan lg:block" />

  <div className="space-y-12">

    {/* Mission 01 */}

    <div className="reveal-item relative flex items-start gap-8">

      <div className="hidden lg:flex h-12 w-12 items-center justify-center rounded-full bg-neon-pink font-bold text-black shadow-[0_0_25px_rgba(255,50,150,.7)]">
        01
      </div>

      <GlassCard
        glow="pink"
        className="flex-1 border border-white/10 hover:scale-[1.02] transition-all duration-500"
      >
        <span className="font-display text-xs uppercase tracking-[0.3em] text-neon-pink">
          Mission 01
        </span>

        <h3 className="mt-3 text-3xl font-bold text-white"> Qualification Round</h3>

        <ul className="mt-6 space-y-4 text-white/70 leading-7">

          <li>
            • Solve <span className="text-neon-pink">{structure.qualification.challengesLabel}</span> practical cybersecurity challenges.
          </li>

          <li>
            • Team Size:
            <span className="text-neon-cyan">
              {" "}
              {structure.qualification.teamSizeLabel}
            </span>
          </li>

          <li>
            • Online elimination round to qualify for the Grand Finale.
          </li>

        </ul>
      </GlassCard>

    </div>

    {/* Mission 02 */}

    <div className="reveal-item relative flex items-start gap-8">

      <div className="hidden lg:flex h-12 w-12 items-center justify-center rounded-full bg-neon-orange font-bold text-black shadow-[0_0_25px_rgba(255,140,0,.7)]">
        02
      </div>

      <GlassCard glow="cyan" className="flex-1 border border-white/10 hover:scale-[1.02] transition-all duration-500">
      
        <span className="font-display text-xs uppercase tracking-[0.3em] text-neon-orange">
          Mission 02
        </span>

        <h3 className="mt-3 text-3xl font-bold text-white">
          Grand Finale
        </h3>

        <ul className="mt-6 space-y-4 text-white/70 leading-7">

          <li>
            •
            <span className="text-neon-orange">
              {" "}
              {structure.grandFinale.qualifiedParticipantsLabel}
            </span>
            {" "}qualified participants.
          </li>

          <li>
            •
            <span className="text-neon-pink">
              {" "}
              {structure.mainCtf.totalChallengesLabel}
            </span>
            {" "}real-world challenges.
          </li>

          <li>
            •
            <span className="text-neon-cyan">
              {" "}
              {structure.mainCtf.wavesLabel}
            </span>
            {" "}progressive mission waves.
          </li>

          <li>
            • Top
            <span className="text-neon-pink">
              {" "}
              {structure.mainCtf.topTeamsPresentingLabel}
            </span>
            {" "}teams present their solutions.
          </li>

        </ul>

      </GlassCard>

    </div>

  </div>

</div>
      </Container>
    </section>
  );
}
