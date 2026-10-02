"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight } from "lucide-react";
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

      /*
      ============================================================
      INITIAL STATE
      ============================================================
      */

      gsap.set(track, {
        x: "100vw",
      });

      gsap.set(panels, {
        opacity: 1,
      });

      gsap.set(visuals, {
        scale: 1.12,
        xPercent: 8,
      });

      /*
      ============================================================
      MAIN TIMELINE
      ============================================================
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
      ============================================================
      01 — INTRO
      ============================================================
      */

      timeline.to(intro, {
        yPercent: -120,
        opacity: 0,
        scale: 0.92,
        duration: 1,
        ease: "power3.inOut",
      });

      /*
      ============================================================
      02 — INTRO EXIT / FIRST PANEL ENTER
      ============================================================
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
      ============================================================
      03 — HORIZONTAL CAPABILITY MOVEMENT
      ============================================================
      */

      timeline.to(track, {
        x: () => {
          const distance = track.scrollWidth - window.innerWidth;
          return -distance;
        },
        duration: 5,
        ease: "none",
      });

      /*
      ============================================================
      VISUAL PARALLAX
      ============================================================
      */

      visuals.forEach((visual, index) => {
        gsap.fromTo(
          visual,
          {
            scale: 1.12,
            xPercent: index % 2 === 0 ? 8 : -8,
          },
          {
            scale: 1,
            xPercent: index % 2 === 0 ? -8 : 8,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${window.innerHeight * 6.5}`,
              scrub: 1.5,
            },
          }
        );
      });

      /*
      ============================================================
      CLEAN EXIT
      ============================================================
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

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="what-we-engineer"
       data-navbar-theme="dark"
      className="
        relative
        h-[750vh]
        w-full
        overflow-hidden
        bg-[#050505]
        text-white
      "
    >
      <div
        ref={stageRef}
        className="
          relative
          h-screen
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
            px-6
            md:px-10
            lg:px-16
          "
        >
          <div className="max-w-[1000px]">
            <div
              className="
                mb-8
                flex
                items-center
                gap-3
              "
            >
              {/* <span className="h-px w-12 bg-white/30" /> */}

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.24em]
                  text-white/35
                "
              >
                What we engineer
              </span>
            </div>

            <h2
              className="
                text-[clamp(4.5rem,9.5vw,10rem)]
                font-medium
                leading-[0.78]
                tracking-[-0.085em]
              "
            >
              We build intelligence
              {/* <br /> */}
              <span className="text-white/30"> that works.
              </span>
            </h2>

            <p
              className="
                mt-10
                max-w-[420px]
                text-[14px]
                leading-7
                text-white/40
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
                if (el) panelsRef.current[index] = el;
              }}
              className="
                relative
                h-screen
                w-screen
                shrink-0
                overflow-hidden
              "
            >
              {/* ==================================================
                  GIANT BACKGROUND NUMBER
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-18%]
                  right-[1%]
                  select-none
                  text-[42vw]
                  font-medium
                  leading-none
                  tracking-[-0.12em]
                  text-white/[0.025]
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
                  left-[6vw]
                  top-1/2
                  z-30
                  w-[54vw]
                  max-w-[820px]
                  -translate-y-1/2
                "
              >
                {/* LABEL */}

                <div
                  className="
                    mb-8
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.24em]
                      text-white/30
                    "
                  >
                    {item.number} / 06
                  </span>

                  {/* <span className="h-px w-10 bg-white/25" /> */}

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.24em]
                      text-white/45
                    "
                  >
                    {item.label}
                  </span>
                </div>

                {/* TITLE */}

                <h3
                  className="
                    whitespace-nowrap
                    text-[clamp(4rem,9vw,9.5rem)]
                    font-medium
                    leading-[0.78]
                    tracking-[-0.09em]
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
                    mt-10
                    max-w-[390px]
                    text-[14px]
                    leading-7
                    text-white/40
                    md:text-[15px]
                  "
                >
                  {item.description}
                </p>

                {/* SMALL LINK */}

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-3
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-white/25
                  "
                >
                  <span>Explore capability</span>

                  <ArrowUpRight size={13} />
                </div>
              </div>

          {/* ==================================================
    VISUAL
================================================== */}

<div
  ref={(el) => {
    if (el) visualRef.current[index] = el;
  }}
  className="
    absolute
    right-[7vw]
    top-1/2
    z-20
    h-[47vh]
    w-[31vw]
    min-w-[400px]
    max-w-[560px]
    -translate-y-1/2
    overflow-hidden
    border
    border-white/[0.08]
    bg-[#080808]
    will-change-transform

    max-md:left-6
    max-md:right-6
    max-md:top-auto
    max-md:bottom-[8vh]
    max-md:h-[26vh]
    max-md:w-[calc(100vw-48px)]
    max-md:min-w-0
    max-md:translate-y-0
  "
>
  <Image
    src={`/assets/whatweengineer/${item.number}.webp`}
    alt={item.label}
    fill
    priority={index === 0}
    sizes="
      (max-width: 768px) calc(100vw - 48px),
      31vw
    "
    className="
      object-cover
      grayscale
      scale-[1.08]
    "
  />

  {/* Subtle cinematic overlay */}

  <div
    className="
      pointer-events-none
      absolute
      inset-0
      bg-black/10
    "
  />

  {/* Top metadata */}
{/* 
  <div
    className="
      absolute
      left-5
      top-5
      z-10
      text-[8px]
      uppercase
      tracking-[0.2em]
      text-white/50
    "
  >
    MENTROID / {item.number}
  </div> */}

  {/* Bottom metadata */}

  <div
    className="
      absolute
      bottom-5
      right-5
      z-10
      text-[8px]
      uppercase
      tracking-[0.2em]
      text-white/40
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