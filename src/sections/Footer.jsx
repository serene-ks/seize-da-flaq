import { useRef } from "react";
import { motion } from "framer-motion";

import {
  FaInstagram,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";

import { useGsapReveal } from "@hooks/useGsapReveal";
import { eventConfig } from "@constants/eventConfig";

import Container from "@components/ui/Container";

import footerBg from "@assets/images/footer-bg.png";

const links = [
  {
    title: "Mission",
    href: "#mission-briefing",
  },
  {
    title: "Categories",
    href: "#ctf-categories",
  },
  {
    title: "Overview",
    href: "#competition-overview",
  },
  {
    title: "Timeline",
    href: "#timeline",
  },
  {
    title: "Sponsors",
    href: "#sponsors",
  },
  {
    title: "Registration",
    href: "#registration",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
];

export default function Footer() {

  const sectionRef = useRef(null);

  useGsapReveal(sectionRef);

  const { event, branding, contact } = eventConfig;

  return (

    <footer
      id="footer"
      ref={sectionRef}
      className="relative overflow-hidden"
    >

      {/* Background */}

      <img
        src={footerBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/90" />

      {/* Glow */}

      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-pink-500/10" />

      <Container className="relative z-10 py-24">

        <div
          className="
            grid
            gap-16
            lg:grid-cols-4
          "
        >

          {/* ==========================
                Logo
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <img
              src={branding.wordmarkSrc}
              alt={event.name}
              className="w-56"
            />

            <p
              className="
                mt-8
                leading-8
                text-white/70
              "
            >
              {event.shortDescription}
            </p>

            <p
              className="
                mt-6
                font-display
                uppercase
                tracking-[0.25em]
                text-cyan-300
              "
            >
              {event.taglinePrimary}
            </p>

          </motion.div>

          {/* ==========================
                Quick Links
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.15,
            }}
          >

            <h3
              className="
                mb-6
                font-display
                text-xl
                uppercase
                text-white
              "
            >
              Quick Links
            </h3>

            <ul className="space-y-4">

              {links.map((item) => (

                <li key={item.title}>

                  <a
                    href={item.href}
                    className="
                      text-white/70
                      transition
                      duration-300
                      hover:text-cyan-300
                    "
                  >
                    {item.title}
                  </a>

                </li>

              ))}

            </ul>

          </motion.div>  
                    {/* ==========================
                Contact
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
            }}
          >

            <h3
              className="
                mb-6
                font-display
                text-xl
                uppercase
                text-white
              "
            >
              Contact
            </h3>

            <div className="space-y-5">

              <div>

                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-white/40">
                  Email
                </p>

                <a
                  href={`mailto:${contact.email}`}
                  className="text-white/70 transition hover:text-cyan-300"
                >
                  {contact.email}
                </a>

              </div>

              <div>

                <p className="mb-1 text-xs uppercase tracking-[0.2em] text-white/40">
                  Website
                </p>

                <a
                  href={contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition hover:text-cyan-300"
                >
                  {contact.website}
                </a>

              </div>

            </div>

          </motion.div>

          {/* ==========================
                Socials
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.45,
            }}
          >

            <h3
              className="
                mb-6
                font-display
                text-xl
                uppercase
                text-white
              "
            >
              Follow Us
            </h3>

            <div className="flex gap-5">

              <a
                href={contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-white
                  transition-all
                  duration-300
                  hover:border-pink-500
                  hover:bg-pink-500/10
                  hover:text-pink-400
                "
              >
                <FaInstagram size={22} />
              </a>

              <a
                href={contact.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-white
                  transition-all
                  duration-300
                  hover:border-cyan-500
                  hover:bg-cyan-500/10
                  hover:text-cyan-300
                "
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href={contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-white
                  transition-all
                  duration-300
                  hover:border-orange-500
                  hover:bg-orange-500/10
                  hover:text-orange-300
                "
              >
                <FaGlobe size={22} />
              </a>

            </div>

            <p
              className="
                mt-8
                text-sm
                leading-7
                text-white/60
              "
            >
              Stay connected with Cyberonites for registration updates,
              announcements, mission briefings, and competition news.
            </p>

          </motion.div>

        </div>

        {/* ==========================
              Bottom Footer
        ========================== */}

        <div
          className="
            mt-20
            border-t
            border-white/10
            pt-10
          "
        >

          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-6
              md:flex-row
            "
          >

            <p
              className="
                font-display
                text-sm
                uppercase
                tracking-[0.35em]
                text-cyan-300
              "
            >
              NO RULES. JUST FLAGS.
            </p>

            <p
              className="
                text-center
                text-sm
                text-white/50
              "
            >
              © {event.edition} {event.organizer}. All Rights Reserved.
            </p>

          </div>

        </div>

      </Container>

    </footer>

  );

}