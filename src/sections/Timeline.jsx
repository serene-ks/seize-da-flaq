import { useRef } from "react";
import { motion } from "framer-motion";

import {
  FiCalendar,
  FiUserPlus,
  FiLock,
  FiSend,
  FiFlag,
  FiLayers,
  FiTarget,
  FiAward,
} from "react-icons/fi";

import { useGsapReveal } from "@hooks/useGsapReveal";
import { eventConfig } from "@constants/eventConfig";

import Container from "@components/ui/Container";
import SectionHeading from "@components/ui/SectionHeading";
import GlassCard from "@components/ui/GlassCard";

import timelineBg from "@assets/images/timeline-bg.png";

const TIMELINE_ICONS = {
  briefing: FiCalendar,
  register: FiUserPlus,
  lock: FiLock,
  deploy: FiSend,
  flag: FiFlag,
  wave: FiLayers,
  target: FiTarget,
  trophy: FiSend,
  award: FiAward,
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

export default function Timeline() {
  const sectionRef = useRef(null);

  useGsapReveal(sectionRef);

  const timeline = eventConfig.timeline;

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative overflow-hidden py-28"
    >
      {/* Background */}

      <img
        src={timelineBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

      {/* Gradient Glow */}

      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-pink-500/10" />

      {/* Content */}

      <Container className="relative z-10">

        <SectionHeading
          eyebrow="MISSION PROGRESSION"
          title="Event Timeline"
          description="Every mission has a beginning. Follow the journey from registration to the Hall of Champions."
          accent="cyan"
        />

        {/* ============================
              Desktop Timeline
        ============================= */}
<div className="hidden lg:block mt-20">

    <div className="grid grid-cols-3 gap-10">

        {timeline.map((item, index) => {

            const Icon =
                TIMELINE_ICONS[item.icon] || FiCalendar;

            return (

                <motion.div
                    key={item.title}
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
                            relative
                            overflow-hidden
                            rounded-3xl
                            border
                            border-cyan-400/20
                            bg-white/5
                            text-center
                            p-8
                        "
                    >

                        <div
                            className="
                                mx-auto
                                mb-6
                                flex
                                h-16
                                w-16
                                items-center
                                justify-center
                                rounded-full
                                bg-cyan-400/10
                                border
                                border-cyan-400/40
                            "
                        >

                            <Icon
                                size={30}
                                className="text-cyan-300"
                            />

                        </div>

                        <span
                            className="
                                text-xs
                                uppercase
                                tracking-[0.3em]
                                text-cyan-300
                            "
                        >
                            {item.date}
                        </span>

                        <p
                            className="
                                mt-2
                                text-xs
                                text-white/40
                            "
                        >
                            {item.time}
                        </p>

                        <h3
                            className="
                                mt-5
                                text-2xl
                                font-display
                                font-bold
                                uppercase
                                text-white
                            "
                        >
                            {item.title}
                        </h3>

                        <p
                            className="
                                mt-4
                                text-sm
                                leading-7
                                text-white/65
                            "
                        >
                            {item.description}
                        </p>

                    </GlassCard>

                </motion.div>

            );

        })}

    </div>

</div>

                {/* ============================
              Mobile Timeline
        ============================= */}

        <div className="mt-20 flex flex-col gap-10 lg:hidden">

          {timeline.map((item, index) => {

            const Icon =
              TIMELINE_ICONS[item.icon] || FiCalendar;

            return (

              <motion.div
                key={item.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="relative pl-12"
              >

                {/* Vertical Line */}

                {index !== timeline.length - 1 && (

                  <div
                    className="
                      absolute
                      left-7
                      top-16
                      h-full
                      w-[2px]
                      bg-gradient-to-b
                      from-cyan-400
                      to-pink-500
                    "
                  />

                )}

                {/* Timeline Node */}

                <div
                  className="
                    absolute
                    left-0
                    top-2
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border-4
                    border-cyan-400
                    bg-[#08121d]
                    shadow-[0_0_25px_rgba(34,211,238,0.35)]
                  "
                >

                  <Icon
                    size={24}
                    className="text-cyan-300"
                  />

                </div>

                <GlassCard
                  glow="cyan"
                  className="
                    reveal-item
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                  "
                >

                  <span
                    className="
                      text-xs
                      uppercase
                      tracking-[0.25em]
                      text-cyan-300
                    "
                  >
                    {item.date}
                  </span>

                  <p
                    className="
                      mt-2
                      text-xs
                      text-white/50
                    "
                  >
                    {item.time}
                  </p>

                  <h3
                    className="
                      mt-4
                      font-display
                      text-xl
                      font-bold
                      uppercase
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-white/65
                    "
                  >
                    {item.description}
                  </p>

                </GlassCard>

              </motion.div>

            );

          })}

        </div>

      </Container>

    </section>

  );

}