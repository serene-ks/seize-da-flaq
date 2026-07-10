import { useRef } from "react";
import { motion } from "framer-motion";

import {
  FiUsers,
  FiUserCheck,
  FiClipboard,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";

import { useGsapReveal } from "@hooks/useGsapReveal";
import { eventConfig } from "@constants/eventConfig";

import Container from "@components/ui/Container";
import SectionHeading from "@components/ui/SectionHeading";
import GlassCard from "@components/ui/GlassCard";
import Button from "@components/ui/Button";

import registrationBg from "@assets/images/registration-bg.png";

const STATUS_LABEL = {
  coming_soon: "REGISTRATIONS OPENING SOON",
  open: "REGISTRATIONS OPEN",
  closed: "REGISTRATIONS CLOSED",
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
      duration: 0.6,
    },
  }),
};

export default function RegistrationDetails() {

  const sectionRef = useRef(null);

  useGsapReveal(sectionRef);

  const { registration } = eventConfig;

  const details = [

    {
      icon: FiUsers,
      label: "Team Size",
      value: `${registration.teamSizeMin} – ${registration.teamSizeMax}`,
    },

    {
      icon: FiUserCheck,
      label: "Expected Participants",
      value: registration.expectedRegistrationsLabel,
    },

    {
      icon: FiClipboard,
      label: "Target Teams",
      value: registration.targetTeamsLabel,
    },

    {
      icon: FiClock,
      label: "Gameplay",
      value: "18 Hours",
    },

  ];

  return (

    <section
      id="registration"
      ref={sectionRef}
      className="relative overflow-hidden py-28"
    >

      {/* Background */}

      <img
        src={registrationBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/80" />

      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-pink-500/10" />

      <Container className="relative z-10">

        <SectionHeading
          eyebrow="MISSION ENLISTMENT"
          title="Ready to Accept the Mission?"
          description="Assemble your crew, sharpen your skills and prepare for India's most immersive National-Level Capture The Flag competition."
          accent="orange"
        />

        {/* Status */}

        <div
          className="
            reveal-item
            mx-auto
            mt-8
            flex
            w-fit
            items-center
            gap-3
            rounded-full
            border
            border-orange-500/40
            bg-orange-500/10
            px-6
            py-3
          "
        >

          <span
            className="
              h-3
              w-3
              rounded-full
              bg-orange-400
              animate-pulse
            "
          />

          <span
            className="
              font-display
              text-xs
              uppercase
              tracking-[0.25em]
              text-orange-300
            "
          >
            {STATUS_LABEL[registration.status]}
          </span>

        </div>

        <p
          className="
            reveal-item
            mx-auto
            mt-10
            max-w-3xl
            text-center
            text-lg
            leading-8
            text-white/70
          "
        >
          Registrations will open soon. Gather your team of up to three
          members and prepare to conquer real-world cybersecurity
          challenges, hidden missions, and live leaderboards.
        </p>

        {/* Cards */}

        <div
          className="
            mt-16
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {details.map(({ icon: Icon, label, value }, index) => (

            <motion.div
              key={label}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <GlassCard
                glow="orange"
                className="
                  reveal-item
                  h-full
                  border
                  border-orange-500/20
                  bg-white/5
                  text-center
                "
              >

                <div
                  className="
                    mx-auto
                    mb-5
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-orange-500/15
                    text-orange-400
                  "
                >

                  <Icon size={28} />

                </div>

                <h3
                  className="
                    text-3xl
                    font-display
                    font-bold
                    text-white
                  "
                >
                  {value}
                </h3>

                <p
                  className="
                    mt-2
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-white/60
                  "
                >
                  {label}
                </p>

              </GlassCard>

            </motion.div>

          ))}

        </div>

                {/* ===========================
              Registration CTA
        =========================== */}

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
            glow="orange"
            className="
              reveal-item
              overflow-hidden
              rounded-3xl
              border
              border-orange-500/20
              bg-white/5
              p-10
              text-center
            "
          >

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-orange-500/10
                via-transparent
                to-pink-500/10
              "
            />

            <div className="relative z-10">

              <h2
                className="
                  font-display
                  text-4xl
                  font-black
                  uppercase
                  text-white
                  lg:text-5xl
                "
              >
                Join India's Biggest
                <br />
                Student CTF Experience
              </h2>

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-3xl
                  text-lg
                  leading-8
                  text-white/70
                "
              >
                Whether you're a beginner or an experienced hacker,
                SEIZE DA FLAQ offers an unforgettable mission-based
                cybersecurity experience inspired by GTA.
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

                <Button
                  href={registration.link ?? "#"}
                  variant="primary"
                  disabled={!registration.link}
                  ariaLabel="Register for SEIZE DA FLAQ"
                >
                  {registration.link
                    ? "REGISTER NOW"
                    : "REGISTRATIONS OPEN SOON"}
                </Button>

                <button
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/20
                    px-8
                    py-4
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:border-orange-400
                    hover:bg-orange-500/10
                  "
                >

                  Download Brochure

                  <FiArrowRight />

                </button>

              </div>

            </div>

          </GlassCard>

        </motion.div>

        {/* ===========================
              Information
        =========================== */}

        <div
          className="
            reveal-item
            mx-auto
            mt-16
            max-w-4xl
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
          "
        >

          <h3
            className="
              text-center
              font-display
              text-2xl
              font-bold
              uppercase
              text-white
            "
          >
            Before You Register
          </h3>

          <div
            className="
              mt-8
              grid
              gap-6
              md:grid-cols-2
            "
          >

            <div>

              <h4 className="mb-3 text-orange-300 font-semibold">
                Eligibility
              </h4>

              <ul className="space-y-3 text-white/70 leading-7">

                <li>• Individual or team participation.</li>

                <li>
                  • Teams can have up to{" "}
                  {registration.teamSizeMax} members.
                </li>

                <li>
                  • Participants from colleges across India are welcome.
                </li>

              </ul>

            </div>

            <div>

              <h4 className="mb-3 text-orange-300 font-semibold">
                Important Notes
              </h4>

              <ul className="space-y-3 text-white/70 leading-7">

                <li>
                  • Registration dates will be announced soon.
                </li>

                <li>
                  • Competition guidelines will be shared before launch.
                </li>

                <li>
                  • Follow Cyberonites for all official updates.
                </li>

              </ul>

            </div>

          </div>

        </div>

        <p
          className="
            reveal-item
            mt-12
            text-center
            text-sm
            leading-7
            text-white/50
          "
        >
          Registration dates, competition schedule, and platform access
          details will be announced through Cyberonites' official
          communication channels.
        </p>

      </Container>

    </section>

  );

}