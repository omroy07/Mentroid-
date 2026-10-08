"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  number: string;
  title: string;
  category: string;
  image: string;
  href: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "ECGenius",
    category: "Healthcare / AI",
    image: "/assets/selected-work/01.webp",
    href: "https://ecgenius.vercel.app/",
  },
  {
    number: "02",
    title: "LearnSphere",
    category: "Education / AI",
    image: "/assets/selected-work/02.webp",
    href: "https://learn-sphere-2.vercel.app/",
  },
  {
    number: "03",
    title: "AgriTech",
    category: "Agriculture / ML",
    image: "/assets/selected-work/03.webp",
    href: "https://agri-tech-6rs5.vercel.app/",
  },
  {
    number: "04",
    title: "VisionSTRA",
    category: "Computer Vision",
    image: "/assets/selected-work/04.webp",
    href: "https://visionstra.vercel.app/",
  },
  {
    number: "05",
    title: "AI Automation",
    category: "Automation / AI",
    image: "/assets/selected-work/05.webp",
    href: "https://ai-money-mentor-nine.vercel.app/",
  },
  {
    number: "06",
    title: "AI Platform",
    category: "Product Engineering",
    image: "/assets/selected-work/06.webp",
    href: "https://ai-platform.vercel.app/",
  },
];

/* -------------------------------------------------------------------------- */
/* DESKTOP GEOMETRY                                                           */
/* -------------------------------------------------------------------------- */

const DESKTOP = {
  width: 320,
  height: 384,

  stepX: 240,
  stepY: -84,
  stepZ: -288,

  rotateY: -50,
  perspective: 2000,
  translateY: 100,
};

/* -------------------------------------------------------------------------- */
/* MOBILE GEOMETRY                                                            */
/* -------------------------------------------------------------------------- */

const MOBILE = {
  width: 220,
  height: 264,

  stepX: 165,
  stepY: -58,
  stepZ: -198,

  rotateY: -45,
  perspective: 1300,
  translateY: 55,
};

/* -------------------------------------------------------------------------- */
/* TABLET GEOMETRY                                                            */
/* -------------------------------------------------------------------------- */

const TABLET = {
  width: 280,
  height: 336,

  stepX: 205,
  stepY: -70,
  stepZ: -235,

  rotateY: -48,
  perspective: 1600,
  translateY: 75,
};

/*
 * 12 planes gives us the same continuous diagonal/depth effect
 * without making the DOM unnecessarily heavy.
 */
const PLANE_COUNT = 12;

export default function SelectedWork() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const planesRef = useRef<HTMLDivElement | null>(null);

  const planeRefs = useRef<(HTMLElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const planesContainer = planesRef.current;

    if (!section || !viewport || !planesContainer) {
      return;
    }

    /*
     * Prevent raw image flash before GSAP applies the 3D transforms.
     */
    section.classList.remove("is-ready");

    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add(
        {
          desktop: "(min-width: 1201px)",
          tablet: "(min-width: 769px) and (max-width: 1200px)",
          mobile: "(max-width: 768px)",
        },
        (context) => {
          const isMobile = Boolean(context.conditions?.mobile);
          const isTablet = Boolean(context.conditions?.tablet);
          const config = isMobile
            ? MOBILE
            : isTablet
              ? TABLET
              : DESKTOP;

          const planes = planeRefs.current.filter(
            Boolean
          ) as HTMLElement[];

          if (!planes.length) {
            return;
          }

          /* ----------------------------------------------------------------
           * VIEWPORT
           * ---------------------------------------------------------------- */

          gsap.set(viewport, {
            perspective: config.perspective,
            transformStyle: "preserve-3d",
          });

          /* ----------------------------------------------------------------
           * PLANES CONTAINER
           * ---------------------------------------------------------------- */

          gsap.set(planesContainer, {
            y: config.translateY,
            x: 0,
            rotationZ: 0,
            transformStyle: "preserve-3d",
            force3D: true,
          });

          /* ----------------------------------------------------------------
           * INITIAL PLANE POSITIONS
           * ---------------------------------------------------------------- */

          const centerIndex = (PLANE_COUNT - 1) / 2;

          planes.forEach((plane, index) => {
            const position = index - centerIndex;

            gsap.set(plane, {
              width: config.width,
              height: config.height,

              x: position * config.stepX,
              y: position * config.stepY,
              z: position * config.stepZ,

              rotationY: config.rotateY,

              transformStyle: "preserve-3d",
              force3D: true,

              filter: "brightness(1)",
            });
          });

          /* ----------------------------------------------------------------
           * SCROLL STATE
           * ---------------------------------------------------------------- */

          const progress = {
            value: 0,
            velocity: 0,
          };

          let previousProgress = 0;

          /* ----------------------------------------------------------------
           * QUICK SETTERS
           * ---------------------------------------------------------------- */

          const setX = planes.map((plane) =>
            gsap.quickSetter(plane, "x", "px")
          );

          const setY = planes.map((plane) =>
            gsap.quickSetter(plane, "y", "px")
          );

          const setZ = planes.map((plane) =>
            gsap.quickSetter(plane, "z", "px")
          );

          const setRotationY = planes.map((plane) =>
            gsap.quickSetter(plane, "rotationY", "deg")
          );

          /* ----------------------------------------------------------------
           * WAVY 3D RENDERER
           *
           * The original diagonal geometry remains intact.
           * A very subtle sine wave is added to X/Y.
           *
           * Fast scrolling creates slightly more movement.
           * Slow scrolling remains clean.
           * ---------------------------------------------------------------- */

          const renderPlanes = () => {
            const movement = progress.value;

            const halfRange = PLANE_COUNT / 2;

            /*
             * Limit the wave intensity.
             * This keeps the effect elegant instead of exaggerated.
             */
            const velocityInfluence = Math.min(
              Math.abs(progress.velocity) * 4,
              1
            );

            planes.forEach((_, index) => {
              let position =
                index - centerIndex + movement;

              /*
               * Infinite wrapping.
               */
              position =
                ((((position + halfRange) % PLANE_COUNT) +
                  PLANE_COUNT) %
                  PLANE_COUNT) -
                halfRange;

              /*
               * Organic wave.
               */
              const wave =
                Math.sin(
                  position * 0.82 +
                    movement * 1.65
                ) *
                velocityInfluence;

              /*
               * Secondary smaller wave.
               */
              const secondaryWave =
                Math.sin(
                  position * 0.45 +
                    movement * 0.9
                ) *
                velocityInfluence;

              const x =
                position * config.stepX +
                wave * (isMobile ? 8 : 18);

              const y =
                position * config.stepY +
                secondaryWave * (isMobile ? 5 : 12);

              const z =
                position * config.stepZ;

              setX[index](x);
              setY[index](y);
              setZ[index](z);
              setRotationY[index](config.rotateY);
            });
          };

          /*
           * Initial state.
           */
          renderPlanes();

          /* ----------------------------------------------------------------
           * SCROLLTRIGGER
           * ---------------------------------------------------------------- */

          const trigger = ScrollTrigger.create({
            trigger: section,

            start: "top top",

            end: "bottom top",

            pin: viewport,

            /*
             * Slightly softer than a hard 1:1 movement.
             */
            scrub: 1.15,

            anticipatePin: 1,

            invalidateOnRefresh: true,

            onUpdate: (self) => {
              const nextProgress =
                self.progress *
                (PLANE_COUNT * 1.8);

              /*
               * Calculate our own progress velocity.
               *
               * IMPORTANT:
               * We do NOT use ScrollTrigger.getVelocity().
               */
              const delta =
                nextProgress -
                previousProgress;

              progress.velocity = delta;

              progress.value = nextProgress;

              previousProgress = nextProgress;

              renderPlanes();
            },
          });

          /* ----------------------------------------------------------------
           * REFRESH
           * ---------------------------------------------------------------- */

          requestAnimationFrame(() => {
            ScrollTrigger.refresh();

            requestAnimationFrame(() => {
              section.classList.add("is-ready");
            });
          });

          /* ----------------------------------------------------------------
           * CLEANUP
           * ---------------------------------------------------------------- */

          return () => {
            trigger.kill();

            gsap.set(planes, {
              clearProps: "all",
            });

            gsap.set(planesContainer, {
              clearProps: "all",
            });
          };
        }
      );

      return () => {
        media.revert();
      };
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-navbar-theme="dark"
      className="selected-work-section"
      aria-label="Selected work"
    >
      <div
        ref={viewportRef}
        className="selected-work-viewport"
      >
        {/* HEADER */}

        <header className="selected-work-header">
          <div className="selected-work-title">
            SELECTED WORK
          </div>

          <div className="selected-work-title selected-work-collection">
            PROJECTS
            <sup className="selected-work-count">
              ({String(projects.length).padStart(2, "0")})
            </sup>
          </div>
        </header>

        {/* SCROLL HINT */}

        <div className="selected-work-hint">
          SCROLL TO EXPLORE
        </div>

        {/* PLANES */}

        <div
          ref={planesRef}
          className="selected-work-planes"
        >
          {Array.from({
            length: PLANE_COUNT,
          }).map((_, index) => {
            const project =
              projects[index % projects.length];

            return (
              <article
                key={`${project.number}-${index}`}
                ref={(element) => {
                  planeRefs.current[index] =
                    element;
                }}
                className="selected-work-plane"
              >
                {/* CLICKABLE CARD */}

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="selected-work-card"
                  aria-label={`View ${project.title}`}
                >
                  <div className="selected-work-plane-image">
                    <Image
                      src={project.image}
                      alt={`${project.title} — ${project.category}`}
                      fill
                      sizes="(max-width: 480px) 190px, (max-width: 768px) 220px, (max-width: 1200px) 280px, 320px"
                      priority={index < 2}
                      draggable={false}
                      className="selected-work-image"
                    />

                    <span className="selected-work-card-arrow">
                      ↗
                    </span>
                  </div>
                </a>

                {/* NUMBER */}

                <div className="selected-work-index">
                  {project.number}
                </div>

                {/* PROJECT LABEL */}

                <div className="selected-work-label">
                  <span className="selected-work-label-line" />

                  <span className="selected-work-label-text">
                    {project.title}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        /* ================================================================
           SECTION
        ================================================================ */

        .selected-work-section {
          position: relative;
          width: 100%;
          height: 550vh;

          overflow: clip;

          background: #000;
          color: #fff;

          isolation: isolate;

          visibility: hidden;
          opacity: 0;

          transition: opacity 180ms ease;
        }

        .selected-work-section.is-ready {
          visibility: visible;
          opacity: 1;
        }

        /* ================================================================
           VIEWPORT
        ================================================================ */

        .selected-work-viewport {
          position: relative;

          width: 100%;
          height: 100vh;

          display: flex;
          align-items: center;
          justify-content: center;

          perspective: 2000px;
          perspective-origin: 10% 10%;

          overflow: hidden;

          background: #000;

          touch-action: pan-y;

          transform-style: preserve-3d;
        }

        /* ================================================================
           HEADER
        ================================================================ */

        .selected-work-header {
          position: absolute;

          z-index: 100;

          top: max(90px, 3vw);
          left: 3vw;

          pointer-events: none;

          font-family:
            "Geist",
            "Inter",
            Arial,
            sans-serif;

          font-weight: 500;
          letter-spacing: -0.02em;
        }

        .selected-work-title {
          color: #fff;

          margin-left: 4vw;

          font-size: clamp(
            32px,
            5vw,
            64px
          );

          line-height: 0.9;

          font-weight: 400;

          letter-spacing: -0.02em;

          white-space: nowrap;
        }

        .selected-work-collection {
          margin-left: 0;
        }

        .selected-work-count {
          position: relative;

          top: 0.65em;

          margin-left: 4px;

          font-size: clamp(
            10px,
            0.4em,
            0.4em
          );

          font-weight: 600;

          letter-spacing: normal;

          font-variant-numeric: tabular-nums;

          line-height: 0;

          vertical-align: top;
        }

        /* ================================================================
           HINT
        ================================================================ */

        .selected-work-hint {
          position: absolute;

          z-index: 100;

          right: 3vw;
          bottom: 3vw;

          color: #fff;

          font-family:
            "Geist Mono",
            "SFMono-Regular",
            Consolas,
            monospace;

          font-size: 10px;

          font-weight: 400;

          letter-spacing: 0.05em;

          text-transform: uppercase;

          pointer-events: none;
        }

        /* ================================================================
           PLANES CONTAINER
        ================================================================ */

        .selected-work-planes {
          position: relative;

          display: flex;
          align-items: center;
          justify-content: center;

          width: 0;
          height: 0;

          transform-style: preserve-3d;

          will-change: transform;
        }

        /* ================================================================
           PLANE
        ================================================================ */

        .selected-work-plane {
          position: absolute;

          display: flex;
          align-items: center;
          justify-content: center;

          width: 320px;
          height: 384px;

          color: #fff;

          transform-style: preserve-3d;

          will-change: transform;

          pointer-events: none;

          backface-visibility: visible;
        }

        /* ================================================================
           CLICKABLE CARD
        ================================================================ */

        .selected-work-card {
          position: absolute;

          inset: 0;

          display: block;

          width: 100%;
          height: 100%;

          overflow: visible;

          color: inherit;

          text-decoration: none;

          pointer-events: auto;

          cursor: pointer;

          transform:
            translate3d(0, 0, 0)
            scale(1);

          transform-style: preserve-3d;

          transition:
            transform 550ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              );
        }

        /*
         * Main hover lift.
         *
         * The card comes slightly upward
         * AND slightly toward the viewer.
         */

        .selected-work-card:hover {
          transform:
            translate3d(
              0,
              -10px,
              45px
            )
            scale(1.015);
        }

        /* ================================================================
           CARD OVERLAY
        ================================================================ */

        .selected-work-card::after {
          content: "";

          position: absolute;

          inset: 0;

          z-index: 1;

          background:
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.03) 20%,
              rgba(0, 0, 0, 0.58) 100%
            );

          opacity: 0;

          transition:
            opacity 350ms ease;

          pointer-events: none;
        }

        .selected-work-card:hover::after {
          opacity: 1;
        }

        /* ================================================================
           IMAGE
        ================================================================ */

        .selected-work-plane-image {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          overflow: hidden;

          background: #111;

          transform-style: preserve-3d;

          border-radius: 0;
        }

        .selected-work-image {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: cover;

          user-select: none;

          -webkit-user-drag: none;

          pointer-events: none;

          transform:
            scale(1)
            translateZ(0);

          transition:
            transform 550ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            filter 450ms ease;

          backface-visibility: hidden;
        }

        .selected-work-card:hover
          .selected-work-image {
          transform:
            scale(1.045)
            translateZ(0);

          filter: brightness(0.78);
        }

        /* ================================================================
           ARROW
        ================================== "";

          position: absolute;

          inset: 0;

          z-index: 1;

          background:
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.03) 20%,
              rgba(0, 0, 0, 0.58) 100%
            );

          opacity: 0;

          transition:
            opacity 350ms ease;

          pointer-events: none;
        }

        .selected-work-card:hover::after {
          opacity: 1;
        }

        /* ================================================================
           IMAGE
        ================================================================ */

        .selected-work-plane-image {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          overflow: hidden;

          background: #111;

          transform-style: preserve-3d;

          border-radius: 0;
        }

        .selected-work-image {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: cover;

          user-select: none;

          -webkit-user-drag: none;

          pointer-events: none;

          transform:
            scale(1)
            translateZ(0);

          transition:
            transform 550ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            filter 450ms ease;

          backface-visibility: hidden;
        }

        .selected-work-card:hover
          .selected-work-image {
          transform:
            scale(1.045)
            translateZ(0);

          filter: brightness(0.78);
        }

        /* ================================================================
           ARROW
        ================================================================ */

        .selected-work-card-arrow {
          position: absolute;

          top: 16px;
          right: 16px;

          z-index: 3;

          width: 36px;
          height: 36px;

          display: flex;

          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(255, 255, 255, 0.55);

          border-radius: 50%;

          color: #fff;

          font-family: Arial, sans-serif;

          font-size: 18px;

          line-height: 1;

          opacity: 0;

          transform:
            translateY(8px)
            scale(0.92);

          transition:
            opacity 320ms ease,
            transform 320ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            background 320ms ease;
        }

        .selected-work-card:hover
          .selected-work-card-arrow {
          opacity: 1;

          transform:
            translateY(0)
            scale(1);

          background:
            rgba(255, 255, 255, 0.08);
        }

        /* ================================================================
           INDEX
        ================================================================ */

        .selected-work-index {
          position: absolute;

          top: -24px;
          left: 0;

          color: #fff;

          font-family:
            "Geist Mono",
            "SFMono-Regular",
            Consolas,
            monospace;

          font-size: 10px;

          font-weight: 400;

          line-height: 1;

          letter-spacing: 0.05em;

          white-space: nowrap;

          pointer-events: none;
        }

        /* ================================================================
           LABEL
        ================================================================ */

        .selected-work-label {
          position: absolute;

          left: 100%;
          top: 50%;

          display: flex;

          align-items: center;

          margin-left: 12px;

          /*
           * Hidden by default.
           */
          opacity: 0.18;

          transform:
            translate3d(
              -18px,
              -50%,
              0
            );

          pointer-events: none;

          white-space: nowrap;

          transition:
            opacity 450ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            transform 450ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              );
        }

        /*
         * Hovering the plane activates its label.
         */

        .selected-work-plane:hover
          .selected-work-label {
          opacity: 1;

          transform:
            translate3d(
              0,
              -50%,
              0
            );
        }

        /* ================================================================
           LABEL LINE
        ================================================================ */

        .selected-work-label-line {
          display: block;

          width: 0;

          height: 1px;

          flex: 0 0 0;

          background: #fff;

          transform-origin: left center;

          opacity: 0;

          transition:
            width 500ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ),
            opacity 300ms ease;
        }

        .selected-work-plane:hover
          .selected-work-label-line {
          width: 120px;

          flex-basis: 120px;

          opacity: 1;
        }

        /* ================================================================
           LABEL TEXT
        ================================================================ */

        .selected-work-label-text {
          display: block;

          padding: 4px 8px;

          color: #fff;

          font-family:
            "Geist Mono",
            "SFMono-Regular",
            Consolas,
            monospace;

          font-size: 10px;

          font-weight: 400;

          line-height: 1;

          letter-spacing: 0.05em;

          text-transform: uppercase;

          opacity: 0;

          transform:
            translateX(-8px);

          transition:
            opacity 400ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ) 120ms,
            transform 400ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              ) 120ms;
        }

        .selected-work-plane:hover
          .selected-work-label-text {
          opacity: 1;

          transform:
            translateX(0);
        }

        /* ================================================================
           TABLET / MOBILE
        ================================================================ */

        @media (max-width: 768px) {
          .selected-work-section {
            height: 350vh;
          }

          .selected-work-viewport {
            perspective: 1300px;

            perspective-origin:
              10% 10%;
          }

          .selected-work-header {
            top: 72px;

            left: 24px;
          }

          .selected-work-title {
            margin-left: 20px;

            font-size: clamp(
              30px,
              11vw,
              46px
            );
          }

          .selected-work-collection {
            margin-left: 0;
          }

          .selected-work-plane {
            width: 220px;

            height: 264px;
          }

          .selected-work-card {
            width: 220px;

            height: 264px;
          }

          .selected-work-index {
            top: -20px;

            font-size: 9px;
          }

          .selected-work-label {
            margin-left: 8px;
          }

          .selected-work-label-line {
            width: 0;

            flex-basis: 0;
          }

          .selected-work-plane:hover
            .selected-work-label-line {
            width: 70px;

            flex-basis: 70px;
          }

          .selected-work-label-text {
            padding: 4px 6px;

            font-size: 9px;
          }

          .selected-work-card-arrow {
            width: 30px;

            height: 30px;

            top: 10px;

            right: 10px;

            font-size: 15px;
          }

          .selected-work-hint {
            right: 24px;

            bottom: 24px;

            font-size: 9px;
          }

          /*
           * Slightly smaller hover movement on touch-sized layouts.
           */

          .selected-work-card:hover {
            transform:
              translate3d(
                0,
                -7px,
                28px
              )
              scale(1.01);
          }
        }

        /* ================================================================
           SMALL MOBILE
        ================================================================ */

        @media (max-width: 480px) {
          .selected-work-header {
            top: 64px;

            left: 18px;
          }

          .selected-work-title {
            margin-left: 16px;

            font-size: 32px;
          }

          .selected-work-hint {
            right: 18px;

            bottom: 18px;
          }
        }

        /* ================================================================
           REDUCED MOTION
        ================================================================ */

        @media (
          prefers-reduced-motion: reduce
        ) {
          .selected-work-section {
            height: 100vh;
          }

          .selected-work-card,
          .selected-work-image,
          .selected-work-label,
          .selected-work-label-line,
          .selected-work-label-text,
          .selected-work-card-arrow {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}