
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BrainCircuit,
  Zap,
  ShieldCheck,
  Rocket,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "Intelligent Innovation",
    description:
      "We combine AI, creativity and engineering to transform complex ideas into intelligent digital solutions.",
    icon: BrainCircuit,
    label: "INNOVATION",
  },
  {
    number: "02",
    title: "Precision & Performance",
    description:
      "Every line of code is crafted to deliver seamless experiences, speed and performance at scale.",
    icon: Zap,
    label: "PERFORMANCE",
  },
  {
    number: "03",
    title: "Built on Trust",
    description:
      "We prioritize security, transparency and reliability to create technology you can depend on.",
    icon: ShieldCheck,
    label: "RELIABILITY",
  },
  {
    number: "04",
    title: "Designed for Growth",
    description:
      "Flexible, scalable and future-ready solutions that evolve alongside your business.",
    icon: Rocket,
    label: "SCALABILITY",
  },
];

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-10 md:py-32 lg:px-20"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Moving light */}
      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? undefined : {
          y: [0, 100, 0],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -top-40 right-[-10%] h-[450px] w-[450px] rounded-full bg-white/[0.08] blur-[150px]"
      />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Top line */}
        <motion.div
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-16 h-px origin-left bg-white/20 md:mb-24"
        />

        {/* Heading */}
        <div className="mb-16 grid gap-10 md:mb-24 md:grid-cols-2 md:items-end">
          <div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-white" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-white/60">
                The Difference
              </span>
            </motion.div>

            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-6xl font-medium leading-[0.95] tracking-[-0.07em] sm:text-7xl md:text-8xl lg:text-[110px]"
            >
              Why
              <br />
              <span className="font-light text-white/35">
                choose us?
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:justify-self-end md:pb-2"
          >
            <p className="max-w-md text-sm leading-8 text-white/50 sm:text-base">
              We turn ambitious ideas into meaningful digital
              experiences through thoughtful design, advanced
              technology and purposeful innovation.
            </p>

            <div className="mt-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/70">
              <span className="h-px w-8 bg-white/50" />
              Beyond the ordinary
            </div>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={reduceMotion ? false : {
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: reduceMotion ? 0 : index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={reduceMotion ? undefined : {
                  backgroundColor: "#111111",
                }}
                className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden border-b border-r border-white/15 p-7 transition-colors duration-500 sm:min-h-[350px] sm:p-8 lg:min-h-[390px] lg:p-9"
              >
                {/* Animated outline */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-white"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                />

                {/* Top */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-xs text-white/40">
                    / {item.number}
                  </span>

                  <motion.div
                    whileHover={reduceMotion ? undefined : {
                      rotate: 45,
                    }}
                    transition={{ duration: 0.4 }}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-500 group-hover:border-white group-hover:bg-white group-hover:text-black"
                  >
                    <Icon size={19} strokeWidth={1.4} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-16">
                  <span className="mb-5 block text-[9px] tracking-[0.3em] text-white/40">
                    {item.label}
                  </span>

                  <h3 className="mb-4 max-w-[220px] text-2xl font-medium leading-tight tracking-[-0.04em] text-white transition-transform duration-500 group-hover:translate-x-1">
                    {item.title}
                  </h3>

                  <p className="max-w-[260px] text-sm leading-7 text-white/45 transition-colors duration-500 group-hover:text-white/70">
                    {item.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="relative z-10 mt-8 flex items-center justify-between">
                  <div className="h-px w-10 bg-white/25 transition-all duration-500 group-hover:w-16 group-hover:bg-white" />
                  <MoveUpRight
                    size={17}
                    strokeWidth={1}
                    className="text-white/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-col justify-between gap-8 border-b border-white/20 pb-8 md:mt-20 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-white/40">
              Let's create something impactful
            </p>
            <h3 className="max-w-xl text-3xl font-light leading-tight tracking-[-0.04em] sm:text-5xl">
              Your vision.
              <span className="text-white/40"> Our technology.</span>
            </h3>
          </div>

          <a
            href="#contact"
            className="group flex w-fit items-center gap-5 border border-white/30 px-6 py-4 text-[10px] uppercase tracking-[0.2em] transition-all duration-500 hover:bg-white hover:text-black"
          >
            Let's Talk
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>

        {/* Footer detail */}
        <div className="mt-6 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-white/30">
          <span>Technology / Innovation / Design</span>
          <span>Built for what's next.</span>
        </div>
      </div>
    </section>
  );
}