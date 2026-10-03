
"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Mail, MapPin, MoveUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const reveal = {
    hidden: {
      opacity: 0,
      y: 70,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black text-white"
    >
      {/* =========================================================
          INDUSTRIAL BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Technical grid */}
        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "70px 70px"],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Large white ambient light */}
        <motion.div
          className="absolute -left-48 top-20 h-[600px] w-[600px] rounded-full bg-white/[0.035] blur-[160px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-48 bottom-0 h-[600px] w-[600px] rounded-full bg-white/[0.025] blur-[160px]"
          animate={{
            x: [0, -100, 0],
            y: [0, -70, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Horizontal scanning line */}
        <motion.div
          className="absolute left-0 top-[42%] h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Vertical scanning line */}
        <motion.div
          className="absolute left-[25%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
          animate={{
            y: ["-100%", "100%"],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating particles */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[12%] top-[20%] h-1 w-1 rounded-full bg-white"
        />

        <motion.div
          animate={{
            y: [0, 40, 0],
            opacity: [0.1, 0.35, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[18%] top-[35%] h-1 w-1 rounded-full bg-white"
        />

        <motion.div
          animate={{
            y: [0, -25, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[20%] left-[45%] h-1 w-1 rounded-full bg-white"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 mt-20">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24">

          {/* =========================================================
              LEFT CONTENT
          ========================================================= */}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            {/* Eyebrow */}
            <motion.div
              variants={reveal}
              className="mb-8 flex items-center gap-3"
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
                className="h-px  bg-white"
              />

              <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/60">
                Get in Touch
              </p>

              <span className="text-[10px] text-white/25">
                01
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={reveal}
              className="max-w-2xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-7xl"
            >
              Have a problem
              <br />

              <motion.span
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-white/30"
              >
                worth solving?
              </motion.span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={reveal}
              className="mt-8 max-w-lg text-base leading-8 text-white/45 sm:text-lg"
            >
              Have questions, project ideas, or feedback? Tell us what
              you're building and let's explore how Mentroid can help.
            </motion.p>

            {/* Contact details */}
            <motion.div
              variants={stagger}
              className="mt-12 space-y-5"
            >
              {/* Email */}
              <motion.a
                variants={reveal}
                href="mailto:mentroid@mentroid.co.in"
                whileHover={{
                  x: 10,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="group flex w-fit items-center gap-4"
              >
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-colors duration-300 group-hover:border-white/30 group-hover:bg-white/[0.08]"
                >
                  <Mail
                    size={18}
                    className="text-white/60 transition-colors duration-300 group-hover:text-white"
                  />
                </motion.div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-white/75">
                    mentroid@mentroid.co.in
                  </p>
                </div>

                <MoveUpRight
                  size={15}
                  className="ml-2 text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                />
              </motion.a>

              {/* Location */}
              <motion.div
                variants={reveal}
                whileHover={{
                  x: 10,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="group flex w-fit items-center gap-4"
              >
                <motion.div
                  whileHover={{
                    rotate: -8,
                    scale: 1.08,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-colors duration-300 group-hover:border-white/30 group-hover:bg-white/[0.08]"
                >
                  <MapPin
                    size={18}
                    className="text-white/60 transition-colors duration-300 group-hover:text-white"
                  />
                </motion.div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-white/75">
                    Sehore, India
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Giant decorative number */}
            <motion.div
              initial={{
                opacity: 0,
                x: -80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.3,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-16 hidden text-[140px] font-semibold leading-none tracking-[-0.12em] text-white/[0.025] lg:block"
            >
              01
            </motion.div>
          </motion.div>

          {/* =========================================================
              FORM
          ========================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.94,
              rotateX: 8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1.1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Outer glow */}
            <motion.div
              animate={{
                opacity: [0.15, 0.3, 0.15],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-4 rounded-[34px] bg-white/[0.035] blur-2xl"
            />

            {/* Form card */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl sm:p-8 lg:p-10">

              {/* Animated top border */}
              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.4,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-0 top-0 h-px w-full origin-left bg-gradient-to-r from-white via-white/40 to-transparent"
              />

              {/* Corner decoration */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -right-16 -top-16 h-32 w-32 rounded-full border border-white/[0.05]"
              />

              <AnimatePresence mode="wait">
                {submitted ? (
                  /* =================================================
                     SUCCESS
                  ================================================= */

                  <motion.div
                    key="success"
                    initial={{
                      opacity: 0,
                      scale: 0.85,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex min-h-[520px] flex-col items-center justify-center text-center"
                  >
                    <motion.div
                      initial={{
                        scale: 0,
                        rotate: -45,
                      }}
                      animate={{
                        scale: 1,
                        rotate: 0,
                      }}
                      transition={{
                        delay: 0.2,
                        duration: 0.7,
                        type: "spring",
                        stiffness: 180,
                      }}
                      className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white text-black"
                    >
                      <ArrowUpRight size={27} />

                      <motion.span
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.4, 0, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="absolute inset-0 rounded-full border border-white"
                      />
                    </motion.div>

                    <h3 className="mt-7 text-3xl font-semibold tracking-tight">
                      Message received.
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-7 text-white/45">
                      Thank you for reaching out to Mentroid. We'll get
                      back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  /* =================================================
                     FORM
                  ================================================= */

                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                    className="space-y-6"
                  >
                    {/* Name */}
                    <motion.div variants={reveal}>
                      <label
                        htmlFor="name"
                        className="mb-2.5 block text-xs font-medium uppercase tracking-[0.14em] text-white/40"
                      >
                        Your Name
                      </label>

                      <motion.input
                        whileFocus={{
                          scale: 1.01,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Enter your name"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-white/40 focus:bg-white/[0.07] focus:shadow-[0_0_35px_rgba(255,255,255,0.05)]"
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div variants={reveal}>
                      <label
                        htmlFor="email"
                        className="mb-2.5 block text-xs font-medium uppercase tracking-[0.14em] text-white/40"
                      >
                        Email Address
                      </label>

                      <motion.input
                        whileFocus={{
                          scale: 1.01,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-white/40 focus:bg-white/[0.07] focus:shadow-[0_0_35px_rgba(255,255,255,0.05)]"
                      />
                    </motion.div>

                    {/* Subject */}
                    <motion.div variants={reveal}>
                      <label
                        htmlFor="subject"
                        className="mb-2.5 block text-xs font-medium uppercase tracking-[0.14em] text-white/40"
                      >
                        Subject
                      </label>

                      <motion.input
                        whileFocus={{
                          scale: 1.01,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        placeholder="What can we help you with?"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-white/40 focus:bg-white/[0.07] focus:shadow-[0_0_35px_rgba(255,255,255,0.05)]"
                      />
                    </motion.div>

                    {/* Message */}
                    <motion.div variants={reveal}>
                      <label
                        htmlFor="message"
                        className="mb-2.5 block text-xs font-medium uppercase tracking-[0.14em] text-white/40"
                      >
                        Message
                      </label>

                      <motion.textarea
                        whileFocus={{
                          scale: 1.01,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell us about your project..."
                        className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-white/40 focus:bg-white/[0.07] focus:shadow-[0_0_35px_rgba(255,255,255,0.05)]"
                      />
                    </motion.div>

                    {/* Submit */}
                    <motion.div
                      variants={reveal}
                      className="pt-2"
                    >
                      <motion.button
                        type="submit"
                        whileHover={{
                          y: -5,
                          scale: 1.015,
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                        className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-6 py-4 text-sm font-semibold text-black"
                      >
                        {/* White/grey sweep */}
                        <motion.span
                          initial={{
                            x: "-110%",
                          }}
                          whileHover={{
                            x: "0%",
                          }}
                          transition={{
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="absolute inset-0 bg-black"
                        />

                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                          Send Message
                        </span>

                        <motion.span
                          className="relative z-10"
                          whileHover={{
                            x: 6,
                            y: -6,
                          }}
                        >
                          <ArrowUpRight size={17} />
                        </motion.span>
                      </motion.button>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Bottom divider */}
        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.4,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-px origin-left bg-white/10"
        />
      </div>
    </section>
  );
}

