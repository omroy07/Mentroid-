"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    number: "01",
    label: "GENERATIVE AI",
    title: "Generative",
    accent: "AI",
    description:
      "Intelligent experiences built around your data, knowledge, customers and workflows.",
  },
  {
    number: "02",
    label: "AI AGENTS",
    title: "AI",
    accent: "Agents",
    description:
      "Systems that reason, use tools and execute tasks across your business.",
  },
  {
    number: "03",
    label: "RAG SYSTEMS",
    title: "Knowledge",
    accent: "Systems",
    description:
      "Grounded AI connected to your documents, knowledge and business context.",
  },
  {
    number: "04",
    label: "MACHINE LEARNING",
    title: "Machine",
    accent: "Learning",
    description:
      "Models designed to discover patterns, predict outcomes and support decisions.",
  },
  {
    number: "05",
    label: "AI PRODUCT ENGINEERING",
    title: "AI",
    accent: "Products",
    description:
      "Production-ready AI applications engineered from concept to deployment.",
  },
  {
    number: "06",
    label: "WORKFLOW AUTOMATION",
    title: "Workflow",
    accent: "Automation",
    description:
      "Intelligence connected to the systems and processes your business already runs.",
  },
];

export default function WhatWeEngineer() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const introRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const panelsRef = useRef<HTMLElement[]>([]);
  const visualRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const intro = introRef.current;
    const track = trackRef.current;

    if (!section || !stage || !intro || !track) return;

    const ctx = gsap.context(() => {
      const panels = panelsRef.current;
      const visuals = visualRef.current;

      if (!panels.length || !visuals.length) return;

      /*
       * ============================================================
       * INITIAL STATE
       * ============================================================
       */

      gsap.set(track, {
        x: "100vw",
        force3D: true,
      });

      gsap.set(panels, {
        opacity: 1,
      });

      gsap.set(visuals, {
        scale: 1.08,
        xPercent: 6,
        force3D: true,
      });

      /*
       * ============================================================
       * MAIN TIMELINE
       * ============================================================
       */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * 6.5}`,
          scrub: 1.1,
          pin: stage,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /*
       * ============================================================
       * INTRO EXIT
       * ============================================================
       */

      timeline.to(intro, {
        yPercent: -120,
        opacity: 0,
        scale: 0.92,
        duration: 1,
        ease: "power3.inOut",
      });

      /*
       * ============================================================
       * FIRST CAPABILITY ENTER
       * ============================================================
       */

      timeline.to(
        track,
        {
          x: 0,
          duration: 1,
          ease: "power3.inOut",
        },
        "<0.2"
      );

      /*
       * ============================================================
       * HORIZONTAL MOVEMENT
       * ============================================================
       */

      timeline.to(track, {
        x: () => {
          const distance =
            track.scrollWidth - window.innerWidth;

          return -Math.max(0, distance);
        },
        duration: 5,
        ease: "none",
      });

      /*
       * ============================================================
       * VISUAL PARALLAX
       * ============================================================
       */

      visuals.forEach((visual, index) => {
        gsap.fromTo(
          visual,
          {
            scale: 1.08,
            xPercent: index % 2 === 0 ? 6 : -6,
          },
          {
            scale: 1,
            xPercent: index % 2 === 0 ? -6 : 6,
            ease: "none",
            force3D: true,
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${window.innerHeight * 6.5}`,
              scrub: 1.5,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      /*
       * ============================================================
       * CLEAN EXIT
       * ============================================================
       */

      timeline.to(
        track,
        {
          scale: 0.96,
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
        },
        ">-0.25"
      );

      /*
       * ============================================================
       * REFRESH
       * ============================================================
       */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="what-we-engineer"
      data-navbar-theme="dark"
      className="
        relative
        z-30
        -mt-10
        h-[650vh]
        w-full
        overflow-hidden
        bg-[#050505]
        text-white

        sm:-mt-12

        md:-mt-16

        lg:-mt-24

        xl:-mt-28
      "
    >
      {/* ========================================================
          PINNED STAGE
      ======================================================== */}

      <div
        ref={stageRef}
        className="
          relative
          h-[100svh]
          w-full
          overflow-hidden
          bg-[#050505]
        "
      >
        {/* ======================================================
            INTRO
        ======================================================= */}

        <div
          ref={introRef}
          className="
            absolute
            inset-0
            z-40
            flex
            items-center
            px-5

            sm:px-6

            md:px-10

            lg:px-16

            xl:px-20
          "
        >
          <div className="w-full max-w-[1100px]">
            <div
              className="
                mb-5
                flex
                items-center
                gap-3

                sm:mb-6

                md:mb-8
              "
            >
              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.2em]
                  text-white/35

                  sm:text-[9px]
                  sm:tracking-[0.24em]
                "
              >
                What we engineer
              </span>
            </div>

            <h2
              className="
                max-w-[1050px]
                text-[clamp(3rem,12vw,5.2rem)]
                font-medium
                leading-[0.84]
                tracking-[-0.075em]

                sm:text-[clamp(3.8rem,10vw,7rem)]

                md:text-[clamp(5rem,8vw,8rem)]

                lg:text-[clamp(6rem,9vw,10rem)]

                xl:text-[clamp(7rem,8.5vw,10rem)]
              "
            >
              We build intelligence{" "}
              <span className="text-white/30">
                that works.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-[340px]
                text-[11px]
                leading-6
                text-white/40

                sm:mt-7
                sm:max-w-[400px]
                sm:text-[13px]
                sm:leading-7

                md:mt-10
                md:max-w-[420px]
                md:text-[14px]
                md:leading-7
              "
            >
              From generative AI and intelligent agents
              to machine learning and automation, we
              engineer systems around real business
              problems.
            </p>
          </div>
        </div>

        {/* ======================================================
            HORIZONTAL TRACK
        ======================================================= */}

        <div
          ref={trackRef}
          className="
            absolute
            left-0
            top-0
            flex
            h-full
            w-max
            will-change-transform
          "
        >
          {capabilities.map((item, index) => (
            <article
              key={item.number}
              ref={(el) => {
                if (el) {
                  panelsRef.current[index] = el;
                }
              }}
              className="
                relative
                h-[100svh]
                w-screen
                shrink-0
                overflow-hidden
              "
            >
              {/* ==================================================
                  BACKGROUND NUMBER
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-4%]
                  right-[3%]
                  select-none
                  text-[52vw]
                  font-medium
                  leading-none
                  tracking-[-0.12em]
                  text-white/[0.025]

                  sm:text-[45vw]

                  md:text-[38vw]

                  lg:text-[32vw]
                "
              >
                {item.number}
              </div>

              {/* ==================================================
                  CONTENT
              ================================================== */}

              <div
                className="
                  absolute
                  left-5
                  top-[12%]
                  z-30
                  w-[calc(100%-40px)]

                  sm:left-6
                  sm:top-[12%]
                  sm:w-[calc(100%-48px)]

                  md:left-[6vw]
                  md:top-1/2
                  md:w-[52vw]
                  md:max-w-[820px]
                  md:-translate-y-1/2

                  lg:w-[54vw]
                "
              >
                {/* LABEL */}

                <div
                  className="
                    mb-4
                    flex
                    items-center
                    gap-3

                    sm:mb-5

                    md:mb-8
                  "
                >
                  <span
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.18em]
                      text-white/30

                      sm:text-[8px]
                      sm:tracking-[0.2em]

                      md:text-[9px]
                      md:tracking-[0.24em]
                    "
                  >
                    {item.number} / 06
                  </span>

                  <span
                    className="
                      max-w-[180px]
                      truncate
                      text-[7px]
                      uppercase
                      tracking-[0.18em]
                      text-white/45

                      sm:text-[8px]
                      sm:tracking-[0.2em]

                      md:text-[9px]
                      md:tracking-[0.24em]
                    "
                  >
                    {item.label}
                  </span>
                </div>

                {/* TITLE */}

                <h3
                  className="
                    max-w-full
                    text-[clamp(2.7rem,11.5vw,4.3rem)]
                    font-medium
                    leading-[0.84]
                    tracking-[-0.075em]

                    sm:text-[clamp(3rem,10vw,5.2rem)]

                    md:whitespace-nowrap
                    md:text-[clamp(4rem,9vw,9.5rem)]
                    md:tracking-[-0.09em]

                    lg:text-[clamp(5rem,8.5vw,9.5rem)]
                  "
                >
                  {item.title}

                  <br />

                  <span className="text-white/30">
                    {item.accent}
                  </span>
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-4
                    max-w-[300px]
                    text-[11px]
                    leading-5
                    text-white/40

                    sm:mt-5
                    sm:max-w-[350px]
                    sm:text-[12px]
                    sm:leading-6

                    md:mt-10
                    md:max-w-[390px]
                    md:text-[15px]
                    md:leading-8
                  "
                >
                  {item.description}
                </p>

                {/* LINK */}

                <div
                  className="
                    mt-4
                    flex
                    items-center
                    gap-3
                    text-[7px]
                    uppercase
                    tracking-[0.16em]
                    text-white/25

                    sm:mt-5
                    sm:text-[8px]
                    sm:tracking-[0.18em]

                    md:mt-8
                    md:text-[9px]
                    md:tracking-[0.2em]
                  "
                >
                  <span>Explore capability</span>

                  <ArrowUpRight
                    size={12}
                    className="shrink-0"
                  />
                </div>
              </div>

              {/* ==================================================
                  VISUAL
              ================================================== */}

              <div
                ref={(el) => {
                  if (el) {
                    visualRef.current[index] = el;
                  }
                }}
                className="
                  absolute
                  z-20

                  left-5
                  right-13
                  top-[62%]

                  h-[21vh]
                  min-h-[180px]

                  -translate-y-1/2

                  overflow-hidden
                 
                  border
                  border-white/[0.08]
                  bg-[#080808]
                  will-change-transform

                  sm:left-6
                  sm:right-13
                  sm:top-[63%]
                  sm:h-[23vh]
                  sm:min-h-[180px]
                

                  md:left-6
                  md:right-6
                  md:top-auto
                  md:bottom-[6vh]
                  md:h-[28vh]
                  md:min-h-[220px]
                  md:-translate-y-0

                  lg:left-auto
                  lg:right-[7vw]
                  lg:top-1/2
                  lg:bottom-auto
                  lg:h-[45vh]
                  lg:w-[31vw]
                  lg:min-h-[300px]
                  lg:min-w-[360px]
                  lg:max-w-[560px]
                  lg:-translate-y-1/2
                  

                  xl:h-[47vh]
                "
              >
                <Image
  src={`/assets/whatweengineer/${item.number}.webp`}
  alt={item.label}
  fill
  loading="lazy"
  sizes="(max-width: 1023px) calc(100vw - 40px), 31vw"
  className="
    object-cover
    grayscale
    scale-[1.06]
  "
/>

                {/* CINEMATIC OVERLAY */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-black/10
                  "
                />

                {/* IMAGE LABEL */}

                <div
                  className="
                    absolute
                    bottom-3
                    right-3
                    z-10
                    max-w-[70%]
                    truncate
                    text-[6px]
                    uppercase
                    tracking-[0.16em]
                    text-white/40

                    sm:bottom-4
                    sm:right-4
                    sm:text-[7px]
                    sm:tracking-[0.18em]

                    md:bottom-5
                    md:right-5
                    md:text-[8px]
                    md:tracking-[0.2em]
                  "
                >
                  {item.label}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}