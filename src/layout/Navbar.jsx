import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

import { eventConfig } from "@constants/eventConfig";

const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "competition-overview", label: "Overview" },
  { id: "competition-structure", label: "Competition" },
  { id: "main-ctf", label: "Main CTF" },
  { id: "ctf-categories", label: "Categories" },
  { id: "registration", label: "Register" },
  { id: "sponsors", label: "Sponsors" },
  { id: "footer", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { branding } = eventConfig;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}

        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center"
        >
          {branding.wordmarkSrc ? (
            <img
              src={branding.wordmarkSrc}
              alt="SEIZE DA FLAQ"
              className="h-12 w-auto transition duration-300 hover:scale-105"
            />
          ) : (
            <h1 className="font-display text-2xl text-white">SEIZE DA FLAQ</h1>
          )}
        </button>

        {/* Desktop Menu */}

        <ul className="hidden items-center gap-8 lg:flex">

          {NAV_LINKS.map((item) => (

            <li key={item.id}>

              <button
                onClick={() => scrollToSection(item.id)}
                className="group relative font-display text-sm uppercase tracking-[0.2em] text-white transition hover:text-pink-400"
              >
                {item.label}

                <span
                  className="
                  absolute
                  left-0
                  -bottom-2
                  h-[2px]
                  w-0
                  bg-pink-500
                  transition-all
                  duration-300
                  group-hover:w-full
                  "
                />

              </button>

            </li>

          ))}

        </ul>

        {/* Register */}

        <button
          onClick={() => scrollToSection("registration")}
          className="hidden rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-500 px-7 py-3 font-display text-xs uppercase tracking-[0.2em] text-white shadow-[0_0_30px_rgba(255,0,120,.45)] transition hover:scale-105 lg:block"
        >
          Register Now
        </button>

        {/* Mobile */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white lg:hidden"
        >
          {mobileOpen ? (
            <FiX size={28} />
          ) : (
            <FiMenu size={28} />
          )}
        </button>

      </nav>

      {/* Mobile Menu */}

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="bg-black/95 backdrop-blur-xl lg:hidden"
          >

            <ul className="space-y-6 px-8 py-8">

              {NAV_LINKS.map((item) => (

                <li key={item.id}>

                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left font-display text-lg uppercase tracking-widest text-white transition hover:text-pink-400"
                  >
                    {item.label}
                  </button>

                </li>

              ))}

              <button
                onClick={() => scrollToSection("registration")}
                className="mt-6 w-full rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-500 py-4 font-display text-sm uppercase tracking-widest text-white"
              >
                Register Now
              </button>

            </ul>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}