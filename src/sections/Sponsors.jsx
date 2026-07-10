import { useRef } from "react";
import { motion } from "framer-motion";

import {
  FiAward,
  FiStar,
  FiShield,
  FiBriefcase,
  FiArrowRight,
} from "react-icons/fi";

import { useGsapReveal } from "@hooks/useGsapReveal";

import Container from "@components/ui/Container";
import SectionHeading from "@components/ui/SectionHeading";
import GlassCard from "@components/ui/GlassCard";

import sponsorBg from "@assets/images/sponsors-bg.png";

const sponsors = [
  {
    tier: "TITLE PARTNER",
    icon: FiAward,
    color: "from-yellow-400 to-orange-500",
    description:
      "Become the Title Partner of India's most immersive National-Level CTF.",
  },
  {
    tier: "GOLD",
    icon: FiStar,
    color: "from-yellow-300 to-yellow-500",
    description:
      "Premium visibility throughout the competition and event promotions.",
  },
  {
    tier: "SILVER",
    icon: FiShield,
    color: "from-gray-300 to-gray-500",
    description:
      "Support the next generation of cybersecurity professionals.",
  },
  {
    tier: "BRONZE",
    icon: FiBriefcase,
    color: "from-orange-400 to-amber-700",
    description:
      "Associate your brand with innovation and cybersecurity excellence.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.6,
    },
  }),
};

export default function Sponsors() {
  const sectionRef = useRef(null);

  useGsapReveal(sectionRef);

  return (
    <section
      id="sponsors"
      ref={sectionRef}
      className="relative overflow-hidden py-28"
    >
      {/* Background */}

      <img
        src={sponsorBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/80" />

      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-pink-500/10" />

      <Container className="relative z-10">

        <SectionHeading
          eyebrow="PARTNERS"
          title="Our Sponsors"
          description="Powering India's Next Generation Cybersecurity Competition."
          accent="cyan"
        />

        {/* Title Sponsor */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-16"
        >
          <GlassCard
            glow="orange"
            className="
              reveal-item
              rounded-3xl
              border
              border-yellow-400/30
              bg-white/5
              text-center
              p-10
            "
          >
            <div
              className="
                mx-auto
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-yellow-400
                to-orange-500
                shadow-xl
              "
            >
              <FiAward
                size={42}
                className="text-black"
              />
            </div>

            <h3
              className="
                mt-8
                font-display
                text-3xl
                font-bold
                uppercase
                text-white
              "
            >
              Title Sponsor
            </h3>

            <p className="mt-5 text-white/70 max-w-2xl mx-auto leading-8">
              Your Brand Here
            </p>

            <p className="mt-4 text-white/50 max-w-3xl mx-auto">
              Become the official Title Partner of SEIZE DA FLAQ and
              showcase your brand to thousands of cybersecurity enthusiasts,
              students, professionals, and institutions across India.
            </p>

          </GlassCard>

        </motion.div>

        {/* Sponsor Cards */}

        <div className="mt-14 grid gap-6 md:grid-cols-3">           {sponsors.slice(1).map((sponsor, index) => {

            const Icon = sponsor.icon;

            return (

              <motion.div
                key={sponsor.tier}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >

                <GlassCard
                  glow="cyan"
                  className="
                    reveal-item
                    h-full
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    text-center
                    p-8
                  "
                >

                  <div
                    className={`
                      mx-auto
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-br
                      ${sponsor.color}
                    `}
                  >

                    <Icon
                      size={28}
                      className="text-black"
                    />

                  </div>

                  <h3
                    className="
                      mt-6
                      font-display
                      text-2xl
                      font-bold
                      uppercase
                      text-white
                    "
                  >
                    {sponsor.tier}
                  </h3>

                  <p
                    className="
                      mt-5
                      text-white/60
                      leading-7
                    "
                  >
                    {sponsor.description}
                  </p>

                  <div
                    className="
                      mt-8
                      rounded-xl
                      border
                      border-dashed
                      border-white/20
                      py-10
                      text-white/40
                    "
                  >

                    Sponsor Logo

                  </div>

                </GlassCard>

              </motion.div>

            );

          })}

        </div>

        {/* ===========================
              Become Sponsor CTA
        ============================ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-20"
        >

          <GlassCard
            glow="pink"
            className="
              reveal-item
              rounded-3xl
              border
              border-pink-500/30
              bg-white/5
              text-center
              p-12
            "
          >

            <h2
              className="
                font-display
                text-4xl
                font-black
                uppercase
                text-white
              "
            >
              Become a Sponsor
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                leading-8
                text-white/65
              "
            >
              Partner with SEIZE DA FLAQ and inspire thousands of future
              cybersecurity professionals while gaining nationwide brand
              visibility across one of India's most immersive CTF events.
            </p>

            <div
              className="
                mt-10
                flex
                flex-col
                items-center
                justify-center
                gap-5
                sm:flex-row
              "
            >

              <button
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-400
                  to-purple-500
                  px-8
                  py-4
                  font-semibold
                  text-black
                  transition
                  hover:scale-105
                "
              >

                Download Brochure

                <FiArrowRight />

              </button>

              <button
                className="
                  rounded-xl
                  border
                  border-white/20
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:border-cyan-400
                  hover:text-cyan-300
                "
              >

                Contact Us

              </button>

            </div>

          </GlassCard>

        </motion.div>

      </Container>

    </section>

  );

}