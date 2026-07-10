import { useRef } from "react";
import { motion } from "framer-motion";

import {
  FiGlobe,
  FiLock,
  FiSearch,
  FiTerminal,
  FiCpu,
  FiEye,
  FiCode,
  FiDatabase,
  FiSmartphone,
  FiWifi,
  FiImage,
  FiSettings,
  FiBox
} from "react-icons/fi";

import { useGsapReveal } from "@hooks/useGsapReveal";
import { eventConfig } from "@constants/eventConfig";

const CATEGORY_ICONS = {
  Web: FiGlobe,
  Cryptography: FiLock,
  Reverse: FiTerminal,
  Forensics: FiSearch,
  Pwn: FiCpu,
  Misc: FiDatabase,
  OSINT: FiEye,
  Mobile: FiSmartphone,
  Network: FiWifi,
  Steganography: FiImage,
  SCADA: FiSettings,
  Blockchain: FiCode,
  AI: FiBox,
};

const defaultCategories = [
  {
    title: "Web Exploitation",
    key: "Web",
    description:
      "Identify vulnerabilities in web applications, bypass authentication, exploit insecure endpoints and capture hidden flags.",
    difficulty: "Beginner → Intermediate",
    points: "100 - 500",
  },

  {
    title: "Cryptography",
    key: "Cryptography",
    description:
      "Break encryption schemes, decode hidden messages and solve cryptographic puzzles using modern techniques.",
    difficulty: "Intermediate",
    points: "200 - 700",
  },

  {
    title: "Reverse Engineering",
    key: "Reverse",
    description:
      "Analyze executables, understand binary behavior, reverse engineer applications and uncover hidden logic.",
    difficulty: "Advanced",
    points: "300 - 900",
  },

  {
    title: "Digital Forensics",
    key: "Forensics",
    description:
      "Recover deleted data, inspect memory dumps, analyze logs and investigate digital evidence.",
    difficulty: "Beginner → Advanced",
    points: "150 - 600",
  },

  {
    title: "Binary Exploitation (Pwn)",
    key: "Pwn",
    description:
      "Exploit memory corruption, buffer overflows and low-level vulnerabilities to gain system access.",
    difficulty: "Expert",
    points: "500 - 1000",
  },

  {
    title: "Miscellaneous",
    key: "Misc",
    description:
      "A mix of creative, logical and unconventional challenges designed to test problem-solving skills.",
    difficulty: "All Levels",
    points: "100 - 600",
  },

  {
    title: "Open Source Intelligence (OSINT)",
    key: "OSINT",
    description:
      "Collect publicly available information, trace digital footprints and uncover hidden intelligence.",
    difficulty: "Beginner",
    points: "100 - 400",
  },

  {
    title: "Mobile Security",
    key: "Mobile",
    description:
      "Analyze Android and mobile applications, identify vulnerabilities and reverse engineer APKs.",
    difficulty: "Intermediate",
    points: "250 - 700",
  },

  {
    title: "Network Security",
    key: "Network",
    description:
      "Inspect network traffic, analyze protocols, exploit communication flaws and secure network services.",
    difficulty: "Intermediate → Advanced",
    points: "200 - 800",
  },

  {
    title: "Steganography",
    key: "Steganography",
    description:
      "Reveal hidden messages embedded in images, audio, video and other digital media files.",
    difficulty: "Beginner → Intermediate",
    points: "100 - 500",
  },

  {
    title: "SCADA Security",
    key: "SCADA",
    description:
      "Explore industrial control systems, critical infrastructure security and operational technology challenges.",
    difficulty: "Advanced",
    points: "400 - 900",
  },

  {
    title: "Blockchain Security",
    key: "Blockchain",
    description:
      "Audit smart contracts, identify blockchain vulnerabilities and solve decentralized security challenges.",
    difficulty: "Advanced",
    points: "400 - 900",
  },

  {
    title: "Automotive / AI Security",
    key: "AI",
    description:
      "Explore security challenges in connected vehicles, autonomous systems and artificial intelligence applications.",
    difficulty: "Expert",
    points: "500 - 1000",
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
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const CTFCategories = () => {
  const sectionRef = useRef(null);

  useGsapReveal(sectionRef);

  const categories =
    eventConfig?.ctf?.categories || defaultCategories;

  return (
    <section
      id="ctf-categories"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black px-6 py-24 text-white"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ff008033,transparent_40%)]" />

      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}

        <div className="reveal-item mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-4xl font-black uppercase tracking-widest text-transparent md:text-6xl"
          >
            CTF Categories
          </motion.h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm text-gray-400 md:text-base">
            Choose your battlefield. Master cybersecurity domains and
            capture hidden flags across multiple challenge zones.
          </p>
        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon =
              CATEGORY_ICONS[category.key] || FiTerminal;

            return (
              <motion.div
                key={category.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="reveal-item group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-pink-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-cyan-500/20 opacity-0 transition group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 shadow-lg">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-wide">
                    {category.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-gray-400">
                    {category.description}
                  </p>

                  <div className="mt-6 flex justify-between text-xs uppercase tracking-wider">
                    <span className="text-cyan-400">
                      {category.difficulty}
                    </span>

                    <span className="text-pink-400">
                      {category.points} pts
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CTFCategories;