"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Scene = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  media: string;
  type: "video" | "image";
};

const scenes: Scene[] = [
  {
    eyebrow: "INTELLIGENCE / 01",
    title: "Intelligence built",
    accent: "for what’s next.",
    description:
      "Mentroid builds intelligent systems that turn complex business problems into practical AI solutions.",
    media: "/videos/ai.mp4",
    type: "video",
  },
  {
    eyebrow: "AGENTIC AI / 02",
    title: "AI that understands.",
    accent: "AI that acts.",
    description:
      "From AI agents and RAG systems to custom copilots, we build AI that can reason, respond and execute.",
    media: "/videos/agentic-ai.mp4",
    type: "video",
  },
  {
    eyebrow: "AUTOMATION / 03",
    title: "From intelligence",
    accent: "to automation.",
    description:
      "Connect data, people and workflows through intelligent automation designed around your business.",
    media: "/videos/automation.mp4",
    type: "video",
  },
];

export default function Hero() {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const pinRef =
    useRef<HTMLDivElement | null>(null);

  const mediaRefs =
    useRef<(HTMLDivElement | null)[]>([]);

  const contentRefs =
    useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;

    if (!section || !pin) return;

    const ctx = gsap.context(() => {
      const media =
        mediaRefs.current.filter(
          Boolean
        ) as HTMLDivElement[];

      const content =
        contentRefs.current.filter(
          Boolean
        ) as HTMLDivElement[];

      if (!media.length || !content.length) {
        return;
      }

      /*
       * ========================================================
       * IMPORTANT:
       * Hide all scenes immediately.
       *
       * This prevents the refresh "text stacking" flash.
       * ========================================================
       */

      gsap.set(content, {
        autoAlpha: 0,
        y: 80,
        force3D: true,
      });

      gsap.set(content[0], {
        autoAlpha: 1,
        y: 0,
      });

      /*
       * ========================================================
       * MEDIA INITIAL STATE
       * ========================================================
       */

      gsap.set(media, {
        autoAlpha: 0,
        scale: 1.08,
        xPercent: 0,
        yPercent: 0,
        force3D: true,
      });

      gsap.set(media[0], {
        autoAlpha: 1,
        scale: 1,
      });

      /*
       * ========================================================
       * MAIN TIMELINE
       * ========================================================
       */

      const tl = gsap.timeline({
        defaults: {
          overwrite: "auto",
        },

        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: pin,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          /*
           * Prevent horizontal movement
           * from affecting page layout.
           */
          pinSpacing: true,
        },
      });

      /*
       * ========================================================
       * SCENE 01
       * ========================================================
       */

      tl.to(media[0], {
        scale: 1.1,
        xPercent: -2,
        yPercent: -3,
        duration: 1,
        ease: "none",
      });

      /*
       * ========================================================
       * SCENE 01 → 02
       * ========================================================
       */

      tl.to(
        content[0],
        {
          autoAlpha: 0,
          y: -70,
          duration: 0.35,
          ease: "power2.inOut",
        },
        "+=0.15"
      );

      tl.to(
        media[0],
        {
          autoAlpha: 0,
          scale: 1.14,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "<"
      );

      tl.to(
        media[1],
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.65,
          ease: "power2.out",
        },
        "<0.1"
      );

      tl.to(
        content[1],
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        "<0.1"
      );

      /*
       * ========================================================
       * SCENE 02 MOVEMENT
       * ========================================================
       */

      tl.to(media[1], {
        scale: 1.11,
        xPercent: 3,
        yPercent: -4,
        duration: 1,
        ease: "none",
      });

      /*
       * ========================================================
       * SCENE 02 → 03
       * ========================================================
       */

      tl.to(
        content[1],
        {
          autoAlpha: 0,
          y: -70,
          duration: 0.35,
          ease: "power2.inOut",
        },
        "+=0.1"
      );

      tl.to(
        media[1],
        {
          autoAlpha: 0,
          scale: 1.14,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "<"
      );

      tl.to(
        media[2],
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.65,
          ease: "power2.out",
        },
        "<0.1"
      );

      tl.to(
        content[2],
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        "<0.1"
      );

      /*
       * ========================================================
       * FINAL SCENE
       * ========================================================
       */

      tl.to(media[2], {
        scale: 1.12,
        xPercent: -3,
        yPercent: -4,
        duration: 1,
        ease: "none",
      });

      /*
       * ========================================================
       * GLOBAL PARALLAX
       * ========================================================
       */

      const parallaxElements =
        section.querySelectorAll(
          ".hero-parallax"
        );

      gsap.to(parallaxElements, {
        yPercent: -12,
        ease: "none",
        force3D: true,

        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      /*
       * ========================================================
       * REFRESH AFTER EVERYTHING EXISTS
       * ========================================================
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
      id="hero"
      className="
        relative
        h-[400vh]
        w-full
        max-w-full
        overflow-x-clip
        bg-black
      "
    >
      {/* ======================================================
          PINNED VIEWPORT
      ======================================================= */}

      <div
        ref={pinRef}
        className="
          relative
          h-screen
          w-full
          max-w-full
          overflow-hidden
          bg-black
        "
      >
        {/* ====================================================
            MEDIA
        ==================================================== */}

        <div
          className="
            absolute
            inset-0
            h-full
            w-full
            max-w-full
            overflow-hidden
          "
        >
          {scenes.map(
            (scene, index) => (
              <div
                key={scene.media}
                ref={(element) => {
                  mediaRefs.current[index] =
                    element;
                }}
               className={`
  absolute
  inset-0
  h-full
  w-full
  max-w-full
  overflow-hidden
  ${index === 0 ? "visible opacity-100" : "invisible opacity-0"}
`}
              >
                {scene.type ===
                "video" ? (
                  <video
                    className="
                      hero-parallax
                      absolute
                      inset-0
                      h-full
                      w-full
                      max-w-full
                      object-cover
                    "
                    src={scene.media}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  />
                ) : (
                  <img
                    className="
                      hero-parallax
                      absolute
                      inset-0
                      h-full
                      w-full
                      max-w-full
                      object-cover
                    "
                    src={scene.media}
                    alt=""
                  />
                )}
              </div>
            )
          )}
        </div>

        {/* ====================================================
            CINEMATIC OVERLAY
        ==================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[2]
            bg-black/25
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[3]
            bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.38)_35%,rgba(0,0,0,0.08)_75%,rgba(0,0,0,0.22)_100%)]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-[3]
            h-[30%]
            bg-gradient-to-t
            from-black/55
            to-transparent
          "
        />

        {/* ====================================================
            SCENE CONTENT
        ==================================================== */}

        <div
          className="
            absolute
            inset-0
            z-10
            flex
            items-center
            overflow-hidden
          "
        >
          <div
            className="
              w-full
              max-w-full
              px-6
              md:px-10
              lg:px-14
            "
          >
            <div
              className="
                relative
                min-h-[520px]
                w-full
                max-w-full
              "
            >
              {scenes.map(
                (
                  scene,
                  index
                ) => (
                  <div
                    key={
                      scene.title
                    }
                    ref={(
                      element
                    ) => {
                      contentRefs.current[
                        index
                      ] =
                        element;
                    }}
                   className={`
  absolute
  left-0
  top-1/2
  w-full
  max-w-[850px]
  -translate-y-1/2
  ${index === 0 ? "visible opacity-100" : "invisible opacity-0"}
`}
                  >
                    {/* EYEBROW */}

                    <div className="mb-7 flex items-center gap-3">
                      <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/70">
                        {
                          scene.eyebrow
                        }
                      </span>
                    </div>

                    {/* HEADING */}

                    <div className="overflow-hidden">
                      <h1
                        className="
                          text-[clamp(3.5rem,8vw,4.8rem)]
                          font-medium
                          leading-[0.88]
                          tracking-[-0.075em]
                          text-white
                        "
                      >
                        <span className="block">
                          {
                            scene.title
                          }
                        </span>

                        <span className="block text-white/60">
                          {
                            scene.accent
                          }
                        </span>
                      </h1>
                    </div>

                    {/* DESCRIPTION */}

                    <p
                      className="
                        mt-8
                        max-w-[480px]
                        text-sm
                        leading-7
                        text-white/65
                        md:text-base
                        md:leading-8
                      "
                    >
                      {
                        scene.description
                      }
                    </p>

                    {/* CTA */}

                    {index ===
                      0 && (
                      <div className="mt-9 flex items-center gap-3">
                        <a
                          href="#services"
                          className="
                            group
                            inline-flex
                            items-center
                            gap-3
                            rounded-full
                            bg-white
                            px-6
                            py-3.5
                            text-sm
                            font-medium
                            text-black
                            transition
                            hover:scale-[1.02]
                          "
                        >
                          Explore Mentroid

                          <ArrowUpRight
                            size={
                              16
                            }
                            className="
                              transition-transform
                              group-hover:translate-x-0.5
                              group-hover:-translate-y-0.5
                            "
                          />
                        </a>
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* ====================================================
            BOTTOM UI
        ==================================================== */}

        <div
          className="
            absolute
            bottom-7
            left-6
            right-6
            z-20
            flex
            items-end
            justify-between
            md:left-10
            md:right-10
            lg:left-14
            lg:right-14
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-white/50
            "
          >
            <ArrowDown size={13} />

            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
}