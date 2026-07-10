import { useRef } from "react";
import { FiClock, FiLayers, FiFlag, FiUsers } from "react-icons/fi";

import { useGsapReveal } from "@hooks/useGsapReveal";
import { eventConfig } from "@constants/eventConfig";

import Container from "@components/ui/Container";
import SectionHeading from "@components/ui/SectionHeading";
import GlassCard from "@components/ui/GlassCard";

import overviewBg from "@assets/images/overview-bg2.png";

export default function CompetitionOverview() {
  const sectionRef = useRef(null);

  useGsapReveal(sectionRef);

  const { structure } = eventConfig;

  const overviewCards = [
    {
      icon: FiClock,
      label: "Event Duration",
      value: `${structure.totalDurationDays} Days`,
      note: `Main CTF: ${structure.mainEventDurationHoursLabel} hrs total • ${structure.actualGameplayHours} hrs gameplay`,
    },
    {
      icon: FiLayers,
      label: "Challenge Pool",
      value: structure.mainCtf.totalChallengesLabel,
      note: `${structure.mainCtf.challengePoolLabel} total pool • released in ${structure.mainCtf.wavesLabel} waves`,
    },
    {
      icon: FiFlag,
      label: "Mission Waves",
      value: structure.mainCtf.wavesLabel,
      note: `~${structure.mainCtf.waveGapHours}-hour gap between waves`,
    },
    {
      icon: FiUsers,
      label: "Grand Finale",
      value: structure.grandFinale.qualifiedParticipantsLabel,
      note: "Qualified participants after pre-screening",
    },
  ];

  return (
    <section
      id="competition-overview"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden py-28"
    >
      {/* Background */}
      <img
        src={overviewBg} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center"/>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* Content */}
      <Container className="relative z-10">
        <SectionHeading eyebrow="Competition Format" title="Competition Overview"
          description="A structured multi-stage national cybersecurity competition designed to test participants across diverse domains through progressive challenge waves."
          accent="cyan"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {overviewCards.map(({ icon: Icon, label, value, note }) => (
            <GlassCard
              key={label}
              glow="cyan"
              className="reveal-item flex flex-col items-center rounded-3xl p-8 text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
                <Icon size={30} />
              </div>

              <h3 className="font-display text-3xl font-bold text-white">
                {value}
              </h3>

              <p className="mt-2 font-display text-sm uppercase tracking-[0.25em] text-cyan-300">
                {label}
              </p>

              <p className="mt-5 text-sm leading-7 text-white/65">
                {note}
              </p>
            </GlassCard>
          ))}
        </div>

        <div className="reveal-item mx-auto mt-14 max-w-3xl rounded-2xl border border-cyan-400/20 bg-white/5 p-6 text-center backdrop-blur-xl">
          <p className="text-sm leading-7 text-white/70">
            The top{" "}
            <span className="font-semibold text-cyan-300">
              {structure.mainCtf.topTeamsPresentingLabel}
            </span>{" "}
            teams will qualify for the Grand Finale, where they will present
            detailed solution walkthroughs, write-ups, and attack methodologies
            before the judging panel.
          </p>
        </div>
      </Container>
    </section>
  );
}