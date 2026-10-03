
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide AI chatbot development, machine learning models, web and app development, IoT + ML solutions, GenAI projects, and consulting.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. Mentroid works with startups and businesses to build scalable AI and digital solutions around their specific requirements.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines depend on the complexity and scope of the work. Typical projects can take anywhere from one week to one month.",
  },
  {
    question: "Do you provide support after delivery?",
    answer:
      "Yes. Post-delivery support and maintenance are available depending on the project and engagement.",
  },
  {
    question: "Can you build a custom AI solution for my business?",
    answer:
      "Yes. Mentroid develops custom AI systems based on your business requirements, workflows, data, and desired outcomes.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-black"
    >
      {/* Ambient background */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative 
              w-full
              max-w-full
              px-6
              md:px-10
              lg:px-14
            ">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-blue-400">
            FAQ
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Questions, answered.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50">
            Everything you need to know before starting a project with
            Mentroid.
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 border-y border-white/10"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                layout
                className="border-b border-white/10 last:border-b-0"
              >
                <motion.button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25 }}
                  className="group flex w-full items-center justify-between gap-6 py-7 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base font-semibold transition-colors duration-300 sm:text-lg ${
                      isOpen
                        ? "text-white"
                        : "text-white/75 group-hover:text-white"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{
                      rotate: isOpen ? 180 : 0,
                      scale: isOpen ? 1.1 : 1,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isOpen
                        ? "border-blue-400/50 bg-blue-400/10 text-blue-400"
                        : "border-white/10 bg-white/[0.03] text-white/40 group-hover:border-white/20 group-hover:text-white"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        opacity: {
                          duration: 0.25,
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-3xl pb-7 pr-12 text-sm leading-7 text-white/50 sm:text-base"
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

