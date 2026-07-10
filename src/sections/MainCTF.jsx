import { useRef } from "react";
import {
  FiFlag,
  FiLayers,
  FiTrendingUp,
  FiGift,
  FiTarget,
} from "react-icons/fi";

import mainCtfBg from "@assets/images/ctf-bg.png";

import { useGsapReveal } from "@hooks/useGsapReveal";
import { eventConfig } from "@constants/eventConfig";
import Container from "@components/ui/Container";
import SectionHeading from "@components/ui/SectionHeading";
import GlassCard from "@components/ui/GlassCard";

const FEATURES = [
  {
    icon: <FiFlag size={34} />,
    title: "80–90 Challenges",
    description:
      "Face real-world cybersecurity challenges spanning Web, Crypto, Reverse Engineering, Digital Forensics, OSINT and more.",
  },
  {
    icon: <FiLayers size={34} />,
    title: "Mission Waves",
    description:
      "Challenges unlock progressively through multiple mission waves, making every stage more intense than the last.",
  },
  {
    icon: <FiTrendingUp size={34} />,
    title: "Live Leaderboard",
    description:
      "Monitor rankings in real time and watch your team climb the leaderboard throughout the competition.",
  },
  {
    icon: <FiGift size={34} />,
    title: "Hidden Bonus Flags",
    description:
      "Discover secret objectives and Easter Eggs to unlock bonus points and surprise rewards.",
  },
  {
    icon: <FiTarget size={34} />,
    title: "Final Heist",
    description:
      "The top-performing teams qualify for the final presentation and battle for the championship.",
  },
];

export default function MainCTF() {
  const sectionRef = useRef(null);

  useGsapReveal(sectionRef);

  const { structure } = eventConfig;

  return (
    <section
      id="main-ctf"
      ref={sectionRef}
      className="relative overflow-hidden py-28"
    >
      {/* Background */}
      <img
        src={mainCtfBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Gradient Effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/15 via-transparent to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/20 via-transparent to-transparent" />

      <Container className="relative z-10">

        <SectionHeading
          eyebrow="THE MAIN EVENT"
          title="Main CTF Experience"
          description="The city becomes your battlefield. Solve missions, unlock new objectives, discover hidden flags, and fight your way to the Final Heist."
        />

        {/* Mission Counter */}

        <div className="reveal-item mx-auto mt-16 max-w-md rounded-3xl border border-pink-500/30 bg-white/5 p-10 text-center backdrop-blur-xl">

          <p className="font-display uppercase tracking-[0.35em] text-white/60">
            Active Challenges
          </p>

          <h2 className="mt-4 text-6xl font-black text-pink-400 drop-shadow-[0_0_25px_rgba(255,50,150,.7)]">
            {structure.mainCtf.totalChallengesLabel}
          </h2>

          <p className="mt-3 text-white/70">
            Real-world cybersecurity missions waiting to be conquered.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {FEATURES.map((feature) => (

            <GlassCard
              key={feature.title}
              glow="pink"
              className="reveal-item group border border-white/10 transition-all duration-500 hover:-translate-y-3 hover:border-pink-500/40"
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

            </GlassCard>

          ))}

        </div>

        {/* Bottom Status */}

        <div className="reveal-item mx-auto mt-24 max-w-4xl rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl">

          <div className="grid gap-8 text-center md:grid-cols-3">

            <div>

              <h3 className="text-5xl font-bold text-cyan-400">
                {structure.mainCtf.challengePoolLabel}
              </h3>

              <p className="mt-2 text-white/60">
                Total Challenge Pool
              </p>

            </div>

            <div>

              <h3 className="text-5xl font-bold text-pink-400">
                {structure.mainCtf.wavesLabel}
              </h3>

              <p className="mt-2 text-white/60">
                Mission Waves
              </p>

            </div>

            <div>

              <h3 className="text-5xl font-bold text-orange-400">
                {structure.mainCtf.topTeamsPresentingLabel}
              </h3>

              <p className="mt-2 text-white/60">
                Finalists
              </p>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}