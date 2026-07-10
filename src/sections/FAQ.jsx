import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

import { useGsapReveal } from "@hooks/useGsapReveal";
import { eventConfig } from "@constants/eventConfig";

import Container from "@components/ui/Container";
import SectionHeading from "@components/ui/SectionHeading";
import GlassCard from "@components/ui/GlassCard";

import faqBg from "@assets/images/faq-bg.png";

export default function FAQ() {

  const sectionRef = useRef(null);

  useGsapReveal(sectionRef);

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = eventConfig.faq;

  const toggleFAQ = (index) => {

    if (activeIndex === index) {

      setActiveIndex(null);

    } else {

      setActiveIndex(index);

    }

  };

  return (

    <section id="faq" ref={sectionRef} className="relative overflow-hidden py-28">

      {/* Background */}

      <img src={faqBg} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center"/>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/80" />

      {/* Glow */}

      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-cyan-500/10" />

      <Container className="relative z-10">

        <SectionHeading
          eyebrow="HELP CENTER"
          title="Frequently Asked Questions"
          description="Everything you need to know before joining SEIZE DA FLAQ."
          accent="purple"
        />

        <div className=" mx-auto mt-20 flex max-w-4xl flex-col gap-6 ">

          {faqs.map((faq, index) => (

            <motion.div
              key={faq.question}
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
                delay: index * 0.08,
              }}
            >

              <GlassCard
                glow="purple"
                className="
                  reveal-item
                  cursor-pointer
                  border
                  border-white/10
                  bg-white/5
                  transition-all
                  duration-300
                "
                onClick={() => toggleFAQ(index)}
              >

                <div className=" flex items-center justify-between gap-6 " >

                  <h3 className=" font-display text-lg font-bold text-white  " > {faq.question} </h3>

                  <motion.div
                   animate={{
                      rotate:
                        activeIndex === index
                          ? 180
                          : 0,
                    }}
                  >

                    {activeIndex === index ? (

                      <FiMinus size={24} className="text-purple-400" />

                    ) : (

                      <FiPlus size={24} className="text-cyan-300" />

                    )}

                  </motion.div>

                </div>

                <AnimatePresence>

                  {activeIndex === index && (

                    <motion.div
                      initial={{ height: 0,opacity: 0,}}
                        
                      animate={{ height: "auto",opacity: 1,}}
                        
                      exit={{height: 0,opacity: 0,}}
                        
                      transition={{duration: 0.35, ease: "easeInOut", }}

                      className="overflow-hidden" >

                      <div className=" mt-6 border-t border-white/10 pt-6" >

                        <p className=" leading-8 text-white/70">{faq.answer}</p>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </GlassCard>

            </motion.div>

          ))}

        </div>

        {/* Bottom Note */}

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
            delay: 0.4,
          }}
          className="
            reveal-item
            mx-auto
            mt-20
            max-w-3xl
            rounded-3xl
            border
            border-cyan-400/20
            bg-white/5
            p-8
            text-center
          "
        >

          <h3 className=" font-display text-2xl font-bold uppercase text-white "  >Still Have Questions?
          </h3>

          <p className=" mt-5 leading-8 text-white/70 " >
            If your question isn't answered above, stay connected with
            Cyberonites through our official website and social media
            channels. All announcements regarding registrations,
            schedules, rules, and event updates will be published there.
          </p>

        </motion.div>

      </Container>

    </section>

  );

}