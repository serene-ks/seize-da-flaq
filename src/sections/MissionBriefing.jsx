import { useRef } from "react";
import {
  FiFlag,
  FiShield,
  FiUsers,
  FiTarget,
} from "react-icons/fi";

import overviewBg from "@assets/images/overview-bg.png";

import { useGsapReveal } from "@hooks/useGsapReveal";
import { eventConfig } from "@constants/eventConfig";
import Container from "@components/ui/Container";

const FEATURES = [
  {
    icon: <FiFlag size={34} />,
    title: "Story-Based Missions",
    description:
      "Progress through an immersive GTA-inspired cybersecurity storyline where every flag unlocks the next mission.",
  },
  {
    icon: <FiShield size={34} />,
    title: "Real-World Security",
    description:
      "Solve practical cybersecurity challenges covering Web, Crypto, Reverse Engineering, Forensics and more.",
  },
  {
    icon: <FiUsers size={34} />,
    title: "Strategic Team Play",
    description:
      "Work together with your squad, plan your approach, and dominate the leaderboard.",
  },
  {
    icon: <FiTarget size={34} />,
    title: "National Competition",
    description:
      "Compete against colleges across India in Cyberonites Club's largest Capture The Flag event.",
  },
];

export default function MissionBriefing() {
  const sectionRef = useRef(null);

  useGsapReveal(sectionRef);

  const { missionBriefing } = eventConfig;

  return (
    <section
      id="mission-briefing"
      ref={sectionRef}
      className="relative overflow-hidden py-28"
    >
      {/* Background Image */}
      <img
        src={overviewBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Pink Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-pink-500/20" />

      {/* Orange Glow */}
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-orange-500/15" />

      <Container className="relative z-10">

        {/* Heading */}

        <p className="reveal-item text-center font-display uppercase tracking-[0.35em] text-neon-pink">
          {missionBriefing.eyebrow}
        </p>

        <h2 className="reveal-item mt-4 text-center text-5xl font-bold text-white">
          {missionBriefing.title}
        </h2>

        <p className="reveal-item mx-auto mt-8 max-w-4xl text-center text-lg leading-8 text-white/75">
          {missionBriefing.paragraphs[0]}
        </p>

        {/* Cards */}

        <div className="reveal-item mt-20 grid gap-8 md:grid-cols-2">

          {FEATURES.map((feature) => (

            <div
              key={feature.title}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-pink-500/40
                hover:bg-white/10
              "
            >

              <div className="mb-6 inline-flex rounded-2xl bg-pink-500/10 p-4 text-pink-400 transition duration-500 group-hover:scale-110">
                {feature.icon}
              </div>

              <h3 className="font-display text-2xl text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-8 text-white/70">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

        {/* Status */}

        <div
          className="
            reveal-item
            mx-auto
            mt-24
            flex
            max-w-xl
            items-center
            justify-between
            rounded-full
            border
            border-pink-500/30
            bg-black/40
            px-8
            py-5
            backdrop-blur-xl
          "
        >
          <span className="font-display uppercase tracking-[0.25em] text-white/60">
            Mission Status
          </span>

          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>

            <span className="font-display text-pink-400">
              ACTIVE
            </span>
          </div>
        </div>

      </Container>
    </section>
  );
}