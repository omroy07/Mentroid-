"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    id: "01",
    label: "APPLICATIONS",
    eyebrow: "INTELLIGENCE / 01",
    title: "AI isn't a feature.",
    accent: "It's a system.",
    description:
      "Mentroid designs intelligent systems around real business problems — from customer experiences to complex operational workflows.",
    video: "/videos/ai.webm",
    position: "right",
  },
  {
    id: "02",
    label: "DATA",
    eyebrow: "INTELLIGENCE / 02",
    title: "Intelligence",
    accent: "starts with data.",
    description:
      "We connect your knowledge, documents, conversations and business systems into a foundation AI can actually use.",
    video: "/videos/agentic-ai.webm",
    position: "left",
  },
  {
    id: "03",
    label: "AGENTIC AI",
    eyebrow: "INTELLIGENCE / 03",
    title: "From understanding",
    accent: "to action.",
    description:
      "AI agents connect intelligence to tools and workflows, allowing systems to reason, decide and execute.",
    video: "/videos/automation.webm",
    position: "right",
  },
];

export default function IntelligenceLayer() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);

  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoInnerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;

    if (!section || !pin) return;

    const ctx = gsap.context(() => {
      const scenesEl = sceneRefs.current.filter(
        Boolean
      ) as HTMLDivElement[];

      const videosEl = videoRefs.current.filter(
        Boolean
      ) as HTMLDivElement[];

      const videoInnerEl = videoInnerRefs.current.filter(
        Boolean
      ) as HTMLDivElement[];

      if (!scenesEl.length || !videosEl.length) return;

      /*
      ============================================================
      INITIAL STATE
      ============================================================
      */

      gsap.set(scenesEl, {
        autoAlpha: 0,
      });

      gsap.set(scenesEl[0], {
        autoAlpha: 1,
      });

      gsap.set(videosEl, {
        opacity: 0,
        scale: 0.94,
        xPercent: 0,
        yPercent: 0,
        transformOrigin: "center center",
        force3D: true,
      });

      gsap.set(videosEl[0], {
        opacity: 1,
        scale: 1,
      });

      gsap.set(videoInnerEl, {
        scale: 1.08,
        transformOrigin: "center center",
        force3D: true,
      });

      /*
      ============================================================
      MAIN SCROLL STORY
      ============================================================
      */

      const tl = gsap.timeline({
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
      SCENE 01 — OPENING
      ============================================================
      */

      tl.to(
        videoInnerEl[0],
        {
          scale: 1,
          duration: 1,
          ease: "none",
        },
        0
      );

      /*
      Text slowly moves upward while the visual
      becomes slightly larger.
      */

      tl.to(
        scenesEl[0],
        {
          yPercent: -4,
          duration: 1,
          ease: "none",
        },
        0
      );

      tl.to(
        videosEl[0],
        {
          scale: 1.08,
          xPercent: -2,
          yPercent: -2,
          duration: 1,
          ease: "none",
        },
        0
      );

      /*
      ============================================================
      TRANSITION 01 → 02
      ============================================================
      */

      tl.to(
        scenesEl[0],
        {
          autoAlpha: 0,
          yPercent: -12,
          duration: 0.4,
          ease: "power2.inOut",
        },
        1
      );

      tl.to(
        videosEl[0],
        {
          opacity: 0,
          scale: 1.18,
          xPercent: -7,
          duration: 0.55,
          ease: "power2.inOut",
        },
        1
      );

      tl.fromTo(
        scenesEl[1],
        {
          autoAlpha: 0,
          yPercent: 10,
        },
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        1.12
      );

      tl.fromTo(
        videosEl[1],
        {
          opacity: 0,
          scale: 0.88,
          xPercent: 7,
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
      SCENE 02
      ============================================================
      */

      tl.to(
        videoInnerEl[1],
        {
          scale: 1,
          duration: 0.9,
          ease: "none",
        },
        1.75
      );

      tl.to(
        videosEl[1],
        {
          scale: 1.07,
          xPercent: 2,
          yPercent: -2,
          duration: 0.9,
          ease: "none",
        },
        1.75
      );

      tl.to(
        scenesEl[1],
        {
          yPercent: -4,
          duration: 0.9,
          ease: "none",
        },
        1.75
      );

      /*
      ============================================================
      TRANSITION 02 → 03
      ============================================================
      */

      tl.to(
        scenesEl[1],
        {
          autoAlpha: 0,
          yPercent: -12,
          duration: 0.4,
          ease: "power2.inOut",
        },
        2.65
      );

      tl.to(
        videosEl[1],
        {
          opacity: 0,
          scale: 1.18,
          xPercent: 7,
          duration: 0.55,
          ease: "power2.inOut",
        },
        2.65
      );

      tl.fromTo(
        scenesEl[2],
        {
          autoAlpha: 0,
          yPercent: 10,
        },
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        2.77
      );

      tl.fromTo(
        videosEl[2],
        {
          opacity: 0,
          scale: 0.88,
          xPercent: -7,
        },
        {
          opacity: 1,
          scale: 1,
          xPercent: 0,
          duration: 0.65,
          ease: "power3.out",
        },
        2.77
      );

      /*
      ============================================================
      SCENE 03 — FINAL MOVEMENT
      ============================================================
      */

      tl.to(
        videosEl[2],
        {
          scale: 1.1,
          xPercent: -2,
          yPercent: -2,
          duration: 1,
          ease: "none",
        },
        3.5
      );

      tl.to(
        scenesEl[2],
        {
          yPercent: -5,
          duration: 1,
          ease: "none",
        },
        3.5
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
      id="intelligence-layer"
      className="
        relative
        h-[420vh]
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
            VERY SUBTLE FILM GRAIN / VIGNETTE
        ======================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-40
            bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.48)_100%)]
          "
        />

        {/* ======================================================
            TOP META
        ======================================================= */}

        {/* <div
          className="
            absolute
            left-6
            right-6
            top-24
            z-50
            flex
            items-center
            justify-between
            md:left-10
            md:right-10
            lg:left-14
            lg:right-14
          "
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.22em]
              text-white/40
            "
          >
            02 / Intelligence
          </span>

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.22em]
              text-white/30
            "
          >
            Mentroid
          </span>
        </div> */}

        {/* ======================================================
            SCENES
        ======================================================= */}

        {scenes.map((scene, index) => {
          const textOnLeft = scene.position === "left";

          return (
            <div
              key={scene.id}
              ref={(el) => {
                sceneRefs.current[index] = el;
              }}
              className="
                absolute
                inset-0
                invisible
              "
            >
              {/* ==================================================
                  EDITORIAL TEXT
              ================================================== */}

              <div
                className={`
                  absolute
                  top-1/2
                  z-30
                  w-[calc(100%-48px)]
                  max-w-[570px]
                  -translate-y-1/2

                  ${
                    textOnLeft
                      ? "left-6 md:left-10 lg:left-14"
                      : "right-6 md:right-10 lg:right-14"
                  }

                  max-md:!left-6
                  max-md:!right-6
                  max-md:!top-[25%]
                  max-md:!translate-y-0
                `}
              >
                {/* EYEBROW */}

                <div
                  className="
                    mb-8
                    flex
                    items-center
                    gap-3
                  "
                >
                  {/* <span
                    className="
                      h-px
                      w-8
                      bg-white/40
                    "
                  /> */}

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.22em]
                      text-white/40
                    "
                  >
                    {scene.eyebrow}
                  </span>
                </div>

                {/* TITLE */}

                <h2
                  className="
                    text-[clamp(3.5rem,7vw,4.8rem)]
                    font-medium
                    leading-[0.82]
                    tracking-[-0.075em]
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
                    mt-9
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

                {/* SMALL META */}

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
                  <span>{scene.label}</span>

                  <ArrowUpRight size={13} />
                </div>
              </div>

              {/* ==================================================
                  CINEMATIC VIDEO
              ================================================== */}

              <div
                className={`
                  absolute
                  top-1/2
                  z-20
                  h-[58vh]
                  w-[min(55vw,900px)]
                  -translate-y-1/2

                  ${
                    textOnLeft
                      ? "right-[-2vw]"
                      : "left-[-2vw]"
                  }

                  max-md:!left-0
                  max-md:!right-0
                  max-md:!top-[64%]
                  max-md:!h-[38vh]
                  max-md:!w-full
                `}
              >
                {/* VIDEO FRAME */}

                <div
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  className="
                    absolute
                    inset-0
                    overflow-hidden
                    bg-[#080808]
                  "
                >
                  {/* VIDEO */}

                  <div
                    ref={(el) => {
                      videoInnerRefs.current[index] = el;
                    }}
                    className="
                      absolute
                      inset-[-5%]
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
                      "
                    />
                  </div>

                  {/* DARK OVERLAY */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-black/10
                    "
                  />

                  {/* EDGE FADE */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-[linear-gradient(90deg,#050505_0%,transparent_25%,transparent_75%,#050505_100%)]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-[linear-gradient(0deg,#050505_0%,transparent_30%,transparent_70%,#050505_100%)]
                    "
                  />
                </div>
              </div>
            </div>
          );
        })}

      
      </div>
    </section>
  );
}