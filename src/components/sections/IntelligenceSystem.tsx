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
    title: "The intelligence",
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

      if (!sceneElements.length || !visuals.length) return;

      /*
      ============================================================
      INITIAL STATE
      ============================================================
      */

      gsap.set(sceneElements, {
        autoAlpha: 0,
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
      ============================================================
      MAIN CINEMATIC TIMELINE
      ============================================================
      */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: pin,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /*
      ============================================================
      SCENE 01
      ============================================================
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
      ============================================================
      SCENE 01 → 02
      ============================================================
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
          scale: 0.90,
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
      ============================================================
      SCENE 02 CAMERA MOVEMENT
      ============================================================
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
      ============================================================
      SCENE 02 → 03
      ============================================================
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
          scale: 0.90,
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
      ============================================================
      SCENE 03 FINAL CAMERA
      ============================================================
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
      ============================================================
      FINAL TEXT EXIT
      ============================================================
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
      ============================================================
      REFRESH
      ============================================================
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
        -mt-[250px]
        h-[360vh]
        w-full
        overflow-x-clip
        bg-[#000000]
        text-white
      "
    >
      {/* ========================================================
          PINNED VIEWPORT
      ======================================================== */}

      <div
        ref={pinRef}
        className="
          relative
          h-screen
          w-full
          overflow-hidden
          bg-[#00000]
        "
      >
        {/* ======================================================
            TOP LABEL
        ====================================================== */}

        <div
          className="
            absolute
            left-6
            right-6
            top-24
            z-50
            md:left-10
            md:right-10
            lg:left-14
            lg:right-14
          "
        >
         
        </div>

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
                absolute
                inset-0
                invisible
              "
            >
              {/* ==================================================
                  TEXT
              ================================================== */}

              <div
                className={`
                  absolute
                  top-1/2
                  z-30
                  w-[calc(100%-48px)]
                  max-w-[520px]
                  -translate-y-1/2

                  ${
                    textLeft
                      ? "left-6 md:left-10 lg:left-14"
                      : "right-6 md:right-10 lg:right-14"
                  }

                  max-md:!left-6
                  max-md:!right-6
                  max-md:!top-[34%]
                  max-md:!translate-y-0
                `}
              >
                {/* LABEL */}

                <div
                  className="
                    mb-6
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      bg-white
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-white/45
                    "
                  >
                    {scene.label}
                  </span>
                </div>

                {/* TITLE */}

                <h2
                  className="
                    text-[clamp(3rem,6vw,6.8rem)]
                    font-medium
                    leading-[0.88]
                    tracking-[-0.07em]
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
                    mt-7
                    max-w-[400px]
                    text-[14px]
                    leading-7
                    text-white/45
                    md:text-[15px]
                    md:leading-8
                  "
                >
                  {scene.description}
                </p>

                {/* TAG */}

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-3
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    text-white/30
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
                  top-1/2
                  z-20
                  h-[52vh]
                  w-[min(52vw,820px)]
                  min-h-[300px]
                  min-w-[300px]
                  -translate-y-1/2

                  ${
                    textLeft
                      ? "right-[4vw]"
                      : "left-[4vw]"
                  }

                  max-md:!left-6
                  max-md:!right-6
                  max-md:!top-[65%]
                  max-md:!h-[34vh]
                  max-md:!w-[calc(100%-48px)]
                  max-md:!-translate-y-1/2
                `}
              >
                {/* OUTER FRAME */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -inset-4
                    rounded-[24px]
                    border
                    border-white/[0.045]
                  "
                />

                {/* INNER FRAME */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -inset-2
                    rounded-[20px]
                    border
                    border-white/[0.025]
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
                    rounded-[18px]
                    border
                    border-white/[0.08]
                    bg-[#080808]
                    shadow-[0_40px_100px_rgba(0,0,0,0.5)]
                  "
                >
                  <video
                    src={scene.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
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
                      left-5
                      top-5
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-white/30
                    "
                  >
                    MENTROID
                  </span>

                  <span
                    className="
                      absolute
                      bottom-5
                      right-5
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-white/25
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