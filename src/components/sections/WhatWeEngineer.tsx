"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    id: "01",
    label: "GENERATIVE AI",
    title: "Systems that understand context.",
    description:
      "Generative AI experiences built around your knowledge, workflows and customers.",
    align: "left",
  },
  {
    id: "02",
    label: "AI AGENTS",
    title: "Systems that know what to do next.",
    description:
      "Agentic systems that reason, use tools and execute meaningful business tasks.",
    align: "right",
  },
  {
    id: "03",
    label: "RAG SYSTEMS",
    title: "Your knowledge, made intelligent.",
    description:
      "Retrieval systems that connect business knowledge with reliable AI responses.",
    align: "left",
  },
  {
    id: "04",
    label: "MACHINE LEARNING",
    title: "Models built around your data.",
    description:
      "Predictive and intelligent models designed around real operational problems.",
    align: "right",
  },
  {
    id: "05",
    label: "COMPUTER VISION",
    title: "Turning visual information into insight.",
    description:
      "Computer vision systems that detect, understand and act on visual data.",
    align: "left",
  },
  {
    id: "06",
    label: "WORKFLOW AUTOMATION",
    title: "Intelligence that gets things done.",
    description:
      "Automated workflows that connect AI capabilities with the systems your business already uses.",
    align: "right",
  },
];

export default function WhatWeEngineer() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);

  const introRef = useRef<HTMLDivElement | null>(null);
  const capabilityRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLDivElement | null)[]>([]);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;

    if (!section || !pin) return;

    const ctx = gsap.context(() => {
      const capabilitiesEl = capabilityRefs.current.filter(
        Boolean
      ) as HTMLDivElement[];

      const numbersEl = numberRefs.current.filter(
        Boolean
      ) as HTMLDivElement[];

      const labelsEl = labelRefs.current.filter(
        Boolean
      ) as HTMLDivElement[];

      /*
      ============================================================
      INITIAL STATE
      ============================================================
      */

      gsap.set(capabilitiesEl, {
        autoAlpha: 0,
        y: 80,
        scale: 0.96,
      });

      gsap.set(numbersEl, {
        opacity: 0,
        y: 20,
      });

      gsap.set(labelsEl, {
        opacity: 0,
        y: 20,
      });

      /*
      ============================================================
      MAIN TIMELINE
      ============================================================
      */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /*
      ============================================================
      INTRO
      ============================================================
      */

      tl.to(
        introRef.current,
        {
          yPercent: -25,
          scale: 0.92,
          opacity: 0,
          duration: 0.9,
          ease: "power2.inOut",
        },
        0.8
      );

      /*
      ============================================================
      CAPABILITIES
      ============================================================
      */

      capabilitiesEl.forEach((element, index) => {
        const number = numbersEl[index];
        const label = labelsEl[index];

        const start = 1 + index * 0.85;

        /*
        ENTER
        */

        tl.fromTo(
          element,
          {
            autoAlpha: 0,
            y: index % 2 === 0 ? 80 : -80,
            scale: 0.94,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            ease: "power3.out",
          },
          start
        );

        /*
        NUMBER
        */

        tl.to(
          number,
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out",
          },
          start + 0.08
        );

        /*
        LABEL
        */

        tl.to(
          label,
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out",
          },
          start + 0.14
        );

        /*
        HOLD
        */

        tl.to(
          element,
          {
            scale: 1.025,
            duration: 0.35,
            ease: "none",
          },
          start + 0.35
        );

        /*
        EXIT
        */

        if (index < capabilitiesEl.length - 1) {
          tl.to(
            element,
            {
              autoAlpha: 0,
              y: -index % 2 === 0 ? -55 : 55,
              scale: 0.97,
              duration: 0.42,
              ease: "power2.inOut",
            },
            start + 0.72
          );

          tl.to(
            number,
            {
              opacity: 0,
              duration: 0.25,
            },
            start + 0.72
          );

          tl.to(
            label,
            {
              opacity: 0,
              duration: 0.25,
            },
            start + 0.72
          );
        }
      });

      /*
      ============================================================
      FINAL HOLD
      ============================================================
      */

      tl.to(
        capabilitiesEl[capabilitiesEl.length - 1],
        {
          scale: 1.04,
          duration: 0.6,
          ease: "none",
        },
        6.15
      );

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
      className="
        relative
        h-[620vh]
        w-full
        overflow-x-clip
        bg-[#050505]
        text-white
      "
    >
      <div
        ref={pinRef}
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
            left-6
            top-1/2
            z-30
            w-[calc(100%-48px)]
            max-w-[1050px]
            -translate-y-1/2
            md:left-10
            lg:left-14
          "
        >
          <div
            className="
              mb-8
              flex
              items-center
              gap-3
            "
          >
            {/* <span className="h-px w-8 bg-white/40" /> */}

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.22em]
                text-white/40
              "
            >
              What we engineer
            </span>
          </div>

          <h2
            className="
              text-[clamp(4rem,10vw,8rem)]
              font-medium
              leading-[0.8]
              tracking-[-0.08em]
            "
          >
            We build 
            {/* <br /> */}
            <span className="text-white/35"> intelligence
            </span>
            <br />
            that works.
          </h2>

          <p
            className="
              mt-10
              max-w-[430px]
              text-[14px]
              leading-7
              text-white/40
              md:text-[15px]
              md:leading-8
            "
          >
            From generative AI to intelligent agents,
            Mentroid engineers systems that turn
            intelligence into real-world capability.
          </p>
        </div>

        {/* ======================================================
            CAPABILITY SCENES
        ======================================================= */}

        {capabilities.map((item, index) => {
          const alignRight = item.align === "right";

          return (
            <div
              key={item.id}
              ref={(el) => {
                capabilityRefs.current[index] = el;
              }}
              className="
                absolute
                inset-0
                invisible
              "
            >
              {/* NUMBER */}

              <div
                ref={(el) => {
                  numberRefs.current[index] = el;
                }}
                className={`
                  absolute
                  top-[27%]
                  z-30

                  ${
                    alignRight
                      ? "right-6 md:right-10 lg:right-14"
                      : "left-6 md:left-10 lg:left-14"
                  }
                `}
              >
                {/* <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.22em]
                    text-white/30
                  "
                >
                  {item.id} / 06
                </span> */}
              </div>

              {/* MAIN CONTENT */}

              <div
                className={`
                  absolute
                  top-1/2
                  z-30
                  w-[calc(100%-48px)]
                  max-w-[1000px]
                  -translate-y-1/2

                  ${
                    alignRight
                      ? "right-6 text-right md:right-10 lg:right-14"
                      : "left-6 md:left-10 lg:left-14"
                  }
                `}
              >
                {/* LABEL */}

                <div
                  ref={(el) => {
                    labelRefs.current[index] = el;
                  }}
                  className={`
                    mb-7
                    flex
                    items-center
                    gap-3

                    ${
                      alignRight
                        ? "justify-end"
                        : "justify-start"
                    }
                  `}
                >
                  {/* {!alignRight && (
                    <span className="h-px w-10 bg-white/30" />
                  )} */}

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.22em]
                      text-white/40
                    "
                  >
                    {item.label}
                  </span>

                  {/* {alignRight && (
                    <span className="h-px w-10 bg-white/30" />
                  )} */}
                </div>

                {/* TITLE */}

                <h3
                  className="
                    max-w-[1000px]
                    text-[clamp(3.2rem,7.5vw,8rem)]
                    font-medium
                    leading-[0.82]
                    tracking-[-0.075em]
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className={`
                    mt-9
                    max-w-[430px]
                    text-[14px]
                    leading-7
                    text-white/40
                    md:text-[15px]
                    md:leading-8

                    ${
                      alignRight
                        ? "ml-auto"
                        : ""
                    }
                  `}
                >
                  {item.description}
                </p>

                {/* SMALL LINK */}

                <div
                  className={`
                    mt-8
                    flex
                    items-center
                    gap-3
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    text-white/25

                    ${
                      alignRight
                        ? "justify-end"
                        : "justify-start"
                    }
                  `}
                >
                  <span>Explore capability</span>

                  <ArrowUpRight size={13} />
                </div>
              </div>

              {/* ==================================================
                  LARGE BACKGROUND INDEX
              ================================================== */}

              <div
                className={`
                  pointer-events-none
                  absolute
                  bottom-[-8%]
                  z-10
                  select-none
                  text-[25vw]
                  font-medium
                  leading-none
                  tracking-[-0.1em]
                  text-white/[0.025]

                  ${
                    alignRight
                      ? "left-[-2%]"
                      : "right-[-2%]"
                  }
                `}
              >
                {item.id}
              </div>
            </div>
          );
        })}

      
      </div>
    </section>
  );
}