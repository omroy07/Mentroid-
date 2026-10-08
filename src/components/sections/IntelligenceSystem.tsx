"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    id: "01",
    label: "APPLICATIONS",
    title: "AI systems that",
    accent: "actually work.",
    description:
      "Mentroid designs intelligent systems around real business problems — from customer experiences to complex operational workflows.",
    video: "/videos/ai.webm",
    side: "right",
    tag: "AI / SYSTEMS",
  },
  {
    id: "02",
    label: "DATA",
    title: "Intelligence",
    accent: "starts with data.",
    description:
      "We connect your knowledge, documents, conversations and business systems into a foundation AI can actually use.",
    video: "/videos/agentic-ai.webm",
    side: "left",
    tag: "DATA / KNOWLEDGE",
  },
  {
    id: "03",
    label: "AGENTIC AI",
    title: "From understanding",
    accent: "to action.",
    description:
      "AI agents connect intelligence to tools and workflows, allowing systems to reason, decide and execute.",
    video: "/videos/automation.webm",
    side: "right",
    tag: "AGENTS / ACTION",
  },
];

export default function IntelligenceSystem() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);

  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const visualRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;

    if (!section || !pin) return;

    const ctx = gsap.context(() => {
      const sceneElements = sceneRefs.current.filter(
        Boolean
      ) as HTMLDivElement[];

      const visuals = visualRefs.current.filter(
        Boolean
      ) as HTMLDivElement[];

      if (!sceneElements.length || !visuals.length) {
        return;
      }

      /*
       * ============================================================
       * INITIAL STATE
       * ============================================================
       */

      gsap.set(sceneElements, {
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(sceneElements[0], {
        autoAlpha: 1,
      });

      gsap.set(visuals, {
        opacity: 0,
        scale: 0.92,
        xPercent: 0,
        transformOrigin: "center center",
        force3D: true,
      });

      gsap.set(visuals[0], {
        opacity: 1,
        scale: 0.96,
      });

      /*
       * ============================================================
       * MAIN CINEMATIC TIMELINE
       * ============================================================
       */

      const timeline = gsap.timeline({
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
       * ============================================================
       * SCENE 01
       * ============================================================
       */

      timeline.to(
        visuals[0],
        {
          scale: 1.04,
          duration: 1,
          ease: "none",
        },
        0
      );

      /*
       * ============================================================
       * SCENE 01 → 02
       * ============================================================
       */

      timeline.to(
        sceneElements[0],
        {
          autoAlpha: 0,
          yPercent: -8,
          duration: 0.45,
          ease: "power2.inOut",
        },
        1
      );

      timeline.to(
        visuals[0],
        {
          opacity: 0,
          scale: 1.12,
          xPercent: -5,
          duration: 0.55,
          ease: "power2.inOut",
        },
        1
      );

      timeline.fromTo(
        sceneElements[1],
        {
          autoAlpha: 0,
          yPercent: 8,
        },
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        1.12
      );

      timeline.fromTo(
        visuals[1],
        {
          opacity: 0,
          scale: 0.9,
          xPercent: 5,
        },
        {
          opacity: 1,
          scale: 1,
          xPercent: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        1.12
      );

      /*
       * ============================================================
       * SCENE 02 CAMERA
       * ============================================================
       */

      timeline.to(
        visuals[1],
        {
          scale: 1.05,
          xPercent: 2,
          duration: 0.9,
          ease: "none",
        },
        1.75
      );

      /*
       * ============================================================
       * SCENE 02 → 03
       * ============================================================
       */

      timeline.to(
        sceneElements[1],
        {
          autoAlpha: 0,
          yPercent: -8,
          duration: 0.45,
          ease: "power2.inOut",
        },
        2.05
      );

      timeline.to(
        visuals[1],
        {
          opacity: 0,
          scale: 1.12,
          xPercent: 5,
          duration: 0.55,
          ease: "power2.inOut",
        },
        2.05
      );

      timeline.fromTo(
        sceneElements[2],
        {
          autoAlpha: 0,
          yPercent: 8,
        },
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        2.17
      );

      timeline.fromTo(
        visuals[2],
        {
          opacity: 0,
          scale: 0.9,
          xPercent: -5,
        },
        {
          opacity: 1,
          scale: 1,
          xPercent: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        2.17
      );

      /*
       * ============================================================
       * SCENE 03 FINAL CAMERA
       * ============================================================
       */

      timeline.to(
        visuals[2],
        {
          scale: 1.08,
          xPercent: -2,
          duration: 0.9,
          ease: "none",
        },
        2.8
      );

      /*
       * ============================================================
       * FINAL TEXT EXIT
       * ============================================================
       */

      timeline.to(
        sceneElements[2],
        {
          autoAlpha: 0,
          yPercent: -10,
          duration: 0.35,
          ease: "power2.in",
        },
        3.55
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
      id="intelligence-system"
      data-navbar-theme="dark"
      className="
        relative
        z-20
        -mt-[120px]
        h-[300vh]
        w-full
        overflow-x-clip
        bg-black
        text-white

        sm:-mt-[150px]

        md:-mt-[180px]

        lg:-mt-[220px]

        xl:-mt-[250px]
      "
    >
      {/* ========================================================
          PINNED VIEWPORT
      ======================================================== */}

      <div
        ref={pinRef}
        className="
          relative
          h-[100svh]
          min-h-[620px]
          w-full
          overflow-hidden
          bg-black

          sm:min-h-[650px]

          md:min-h-[680px]

          lg:min-h-[700px]
        "
      >
        {/* ======================================================
            SCENES
        ====================================================== */}

        {scenes.map((scene, index) => {
          const textLeft = scene.side === "left";

          return (
            <div
              key={scene.id}
              ref={(element) => {
                sceneRefs.current[index] = element;
              }}
              className="
                invisible
                absolute
                inset-0
              "
            >
              {/* ==================================================
                  TEXT
              ================================================== */}

              <div
                className={`
                  absolute
                  z-30
                  w-[calc(100%-40px)]
                  max-w-[520px]

                  -translate-y-1/2

                  left-5
                  top-[30%]

                  sm:left-6
                  sm:w-[calc(100%-48px)]
                  sm:top-[30%]

                  md:top-1/2
                  md:w-[min(42vw,520px)]

                  lg:w-[min(40vw,520px)]

                  xl:w-[min(38vw,520px)]

                  ${
                    textLeft
                      ? `
                        md:left-[5vw]
                        md:right-auto
                      `
                      : `
                        md:right-[5vw]
                        md:left-auto
                      `
                  }
                `}
              >
                {/* LABEL */}

                <div
                  className="
                    mb-5
                    flex
                    items-center
                    gap-3

                    sm:mb-6

                    md:mb-6
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      shrink-0
                      bg-white
                    "
                  />

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.18em]
                      text-white/45

                      sm:text-[9px]
                      sm:tracking-[0.2em]
                    "
                  >
                    {scene.label}
                  </span>
                </div>

                {/* TITLE */}

                <h2
                  className="
                    text-[clamp(2.65rem,10vw,4.5rem)]
                    font-medium
                    leading-[0.9]
                    tracking-[-0.065em]

                    sm:text-[clamp(3rem,8vw,5.2rem)]

                    md:text-[clamp(3.4rem,5.5vw,6rem)]

                    lg:text-[clamp(4rem,5.3vw,6.8rem)]

                    xl:text-[clamp(4.5rem,5vw,6.8rem)]
                  "
                >
                  {scene.title}

                  <br />

                  <span className="text-white/35">
                    {scene.accent}
                  </span>
                </h2>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-5
                    max-w-[360px]
                    text-[12px]
                    leading-6
                    text-white/45

                    sm:mt-6
                    sm:max-w-[400px]
                    sm:text-[13px]
                    sm:leading-7

                    md:mt-7
                    md:text-[15px]
                    md:leading-8
                  "
                >
                  {scene.description}
                </p>

                {/* TAG */}

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-3
                    text-[8px]
                    uppercase
                    tracking-[0.16em]
                    text-white/30

                    sm:mt-7
                    sm:text-[9px]
                    sm:tracking-[0.18em]

                    md:mt-8
                  "
                >
                  <span>{scene.tag}</span>

                  <ArrowUpRight size={13} />
                </div>
              </div>

              {/* ==================================================
                  VIDEO
              ================================================== */}

              <div
                className={`
                  absolute
                  z-20

                  left-5
                  right-5
                  top-[69%]

                  h-[28vh]
                  min-h-[190px]

                  -translate-y-1/2

                  sm:left-6
                  sm:right-6
                  sm:top-[69%]
                  sm:h-[30vh]
                  sm:min-h-[210px]

                  md:top-1/2
                  md:h-[48vh]
                  md:w-[min(48vw,650px)]
                  md:min-h-[300px]

                  lg:h-[52vh]
                  lg:w-[min(50vw,760px)]

                  xl:w-[min(52vw,820px)]

                  ${
                    textLeft
                      ? `
                        md:right-[4vw]
                        md:left-auto
                      `
                      : `
                        md:left-[4vw]
                        md:right-auto
                      `
                  }
                `}
              >
                {/* OUTER FRAME */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -inset-2
                    rounded-[20px]
                    border
                    border-white/[0.04]

                    sm:-inset-3
                    sm:rounded-[22px]

                    md:-inset-4
                    md:rounded-[24px]
                  "
                />

                {/* INNER FRAME */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -inset-1
                    rounded-[16px]
                    border
                    border-white/[0.025]

                    sm:-inset-2
                    sm:rounded-[18px]

                    md:rounded-[20px]
                  "
                />

                {/* VIDEO */}

                <div
                  ref={(element) => {
                    visualRefs.current[index] = element;
                  }}
                  className="
                    relative
                    h-full
                    w-full
                    overflow-hidden
                    rounded-[16px]
                    border
                    border-white/[0.08]
                    bg-[#080808]
                    shadow-[0_25px_70px_rgba(0,0,0,0.5)]

                    sm:rounded-[17px]

                    md:rounded-[18px]
                    md:shadow-[0_40px_100px_rgba(0,0,0,0.5)]
                  "
                >
                  <video
                    src={scene.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload={index === 0 ? "auto" : "metadata"}
                    className="
                      h-full
                      w-full
                      object-cover
                      opacity-90
                    "
                  />

                  {/* VIDEO OVERLAY */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-black/[0.08]
                    "
                  />

                  {/* VIDEO LABEL */}

                  <span
                    className="
                      absolute
                      left-4
                      top-4
                      text-[7px]
                      uppercase
                      tracking-[0.18em]
                      text-white/30

                      sm:left-5
                      sm:top-5
                      sm:text-[8px]
                      sm:tracking-[0.2em]
                    "
                  >
                    MENTROID
                  </span>

                  <span
                    className="
                      absolute
                      bottom-4
                      right-4
                      text-[7px]
                      uppercase
                      tracking-[0.18em]
                      text-white/25

                      sm:bottom-5
                      sm:right-5
                      sm:text-[8px]
                      sm:tracking-[0.2em]
                    "
                  >
                    {scene.id}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}