"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function LetsBuild() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const introRef = useRef<HTMLDivElement | null>(null);
  const verticalLineRef = useRef<HTMLDivElement | null>(null);

  const buildRef = useRef<HTMLDivElement | null>(null);
  const withRef = useRef<HTMLDivElement | null>(null);
  const intelligenceRef = useRef<HTMLDivElement | null>(null);

  const imageRef = useRef<HTMLDivElement | null>(null);
  const imageInnerRef = useRef<HTMLImageElement | null>(null);

  const finalStatementRef = useRef<HTMLDivElement | null>(null);
  const finalLineOneRef = useRef<HTMLDivElement | null>(null);
  const finalLineTwoRef = useRef<HTMLDivElement | null>(null);

  const ctaWrapRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLAnchorElement | null>(null);

  const footerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;

    if (!section || !stage) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 769px)",
          mobile: "(max-width: 768px)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const conditions = context.conditions as {
            desktop: boolean;
            mobile: boolean;
            reduced: boolean;
          };

          const { desktop, mobile, reduced } = conditions;

          /* =========================================================
             REDUCED MOTION
          ========================================================= */

          if (reduced) {
            gsap.set(
              [
                introRef.current,
                verticalLineRef.current,
                buildRef.current,
                withRef.current,
                intelligenceRef.current,
                imageRef.current,
                finalStatementRef.current,
                ctaWrapRef.current,
                footerRef.current,
              ],
              {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotation: 0,
                clipPath: "inset(0% 0% 0% 0%)",
              }
            );

            return;
          }

          /* =========================================================
             INITIAL STATE
          ========================================================= */

          gsap.set(introRef.current, {
            opacity: 0,
            y: 18,
          });

          gsap.set(verticalLineRef.current, {
            scaleY: 0,
            transformOrigin: "top center",
          });

          gsap.set(buildRef.current, {
            x: "-42vw",
            opacity: 0,
          });

          gsap.set(withRef.current, {
            y: 80,
            opacity: 0,
            scale: 1.15,
          });

          gsap.set(intelligenceRef.current, {
            x: "42vw",
            opacity: 0,
          });

          gsap.set(imageRef.current, {
            opacity: 0,
            scale: 1.15,
            clipPath: "inset(100% 0% 0% 0%)",
          });

          gsap.set(imageInnerRef.current, {
            scale: 1.25,
          });

          gsap.set(finalStatementRef.current, {
            opacity: 0,
            scale: 1.12,
          });

          gsap.set(finalLineOneRef.current, {
            x: "-15vw",
            opacity: 0,
          });

          gsap.set(finalLineTwoRef.current, {
            x: "15vw",
            opacity: 0,
          });

          gsap.set(ctaWrapRef.current, {
            opacity: 0,
            y: 40,
            scale: 0.92,
          });

          gsap.set(footerRef.current, {
            opacity: 0,
            y: 15,
          });

          /* =========================================================
             MOBILE
          ========================================================= */

          if (mobile) {
            const mobileTl = gsap.timeline({
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                invalidateOnRefresh: true,
              },
            });

            mobileTl
              .to(
                introRef.current,
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                },
                0
              )
              .to(
                verticalLineRef.current,
                {
                  scaleY: 1,
                  duration: 0.8,
                  ease: "power3.inOut",
                },
                0
              )
              .to(
                buildRef.current,
                {
                  x: 0,
                  opacity: 1,
                  duration: 0.9,
                  ease: "power4.out",
                },
                0.2
              )
              .to(
                withRef.current,
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 0.9,
                  ease: "power4.out",
                },
                0.4
              )
              .to(
                intelligenceRef.current,
                {
                  x: 0,
                  opacity: 1,
                  duration: 0.9,
                  ease: "power4.out",
                },
                0.6
              )
              .to(
                imageRef.current,
                {
                  opacity: 0.28,
                  scale: 1,
                  clipPath: "inset(0% 0% 0% 0%)",
                  duration: 1,
                  ease: "power3.inOut",
                },
                0.8
              )
              .to(
                imageInnerRef.current,
                {
                  scale: 1,
                  duration: 1.2,
                  ease: "none",
                },
                0.8
              )
              .to(
                [buildRef.current, withRef.current, intelligenceRef.current],
                {
                  opacity: 0,
                  scale: 0.92,
                  duration: 0.8,
                  stagger: 0.05,
                  ease: "power3.in",
                },
                1.55
              )
              .to(
                imageRef.current,
                {
                  opacity: 0,
                  scale: 1.08,
                  duration: 0.6,
                },
                1.75
              )
              .to(
                finalStatementRef.current,
                {
                  opacity: 1,
                  scale: 1,
                  duration: 0.8,
                  ease: "power3.out",
                },
                2
              )
              .to(
                finalLineOneRef.current,
                {
                  x: 0,
                  opacity: 1,
                  duration: 0.7,
                  ease: "power4.out",
                },
                2.2
              )
              .to(
                finalLineTwoRef.current,
                {
                  x: 0,
                  opacity: 1,
                  duration: 0.7,
                  ease: "power4.out",
                },
                2.35
              )
              .to(
                ctaWrapRef.current,
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.8,
                  ease: "power3.out",
                },
                2.65
              )
              .to(
                footerRef.current,
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                },
                2.95
              );

            return;
          }

          /* =========================================================
             DESKTOP — CINEMATIC SEQUENCE
          ========================================================= */

          if (desktop) {
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                pin: stage,
                scrub: 1.25,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            /* -------------------------------------------------------
               01 — ESTABLISH FRAME
            ------------------------------------------------------- */

            tl.to(
              introRef.current,
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
              },
              0
            );

            tl.to(
              verticalLineRef.current,
              {
                scaleY: 1,
                duration: 1.5,
                ease: "power3.inOut",
              },
              0.1
            );

            /* -------------------------------------------------------
               PAUSE
            ------------------------------------------------------- */

            tl.to({}, { duration: 0.8 });

            /* -------------------------------------------------------
               02 — BUILD ENTERS FROM LEFT
            ------------------------------------------------------- */

            tl.to(
              buildRef.current,
              {
                x: 0,
                opacity: 1,
                duration: 1.35,
                ease: "power4.out",
              },
              "+=0.1"
            );

            /* -------------------------------------------------------
               03 — WITH ENTERS FROM CENTER
            ------------------------------------------------------- */

            tl.to(
              withRef.current,
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "power4.out",
              },
              "-=0.65"
            );

            /* -------------------------------------------------------
               04 — INTELLIGENCE ENTERS FROM RIGHT
            ------------------------------------------------------- */

            tl.to(
              intelligenceRef.current,
              {
                x: 0,
                opacity: 1,
                duration: 1.35,
                ease: "power4.out",
              },
              "-=0.65"
            );

            /* -------------------------------------------------------
               HOLD THE COMPOSITION
            ------------------------------------------------------- */

            tl.to({}, { duration: 1.2 });

            /* -------------------------------------------------------
               05 — IMAGE BLEEDS THROUGH
            ------------------------------------------------------- */

            tl.to(
              imageRef.current,
              {
                opacity: 0.34,
                scale: 1,
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 1.4,
                ease: "power3.inOut",
              },
              "+=0.1"
            );

            tl.to(
              imageInnerRef.current,
              {
                scale: 1,
                duration: 1.8,
                ease: "none",
              },
              "<"
            );

            /* -------------------------------------------------------
               IMAGE PARALLAX
            ------------------------------------------------------- */

            tl.to(
              imageInnerRef.current,
              {
                yPercent: -8,
                duration: 1.2,
                ease: "none",
              },
              "-=0.4"
            );

            /* -------------------------------------------------------
               06 — OLD COMPOSITION COLLAPSES
            ------------------------------------------------------- */

            tl.to(
              [buildRef.current, withRef.current, intelligenceRef.current],
              {
                opacity: 0,
                scale: 0.88,
                duration: 1.1,
                stagger: 0.06,
                ease: "power4.in",
              },
              "+=0.2"
            );

            tl.to(
              imageRef.current,
              {
                opacity: 0,
                scale: 1.1,
                duration: 0.9,
                ease: "power3.inOut",
              },
              "-=0.5"
            );

            /* -------------------------------------------------------
               07 — EMPTY BREATH
            ------------------------------------------------------- */

            tl.to({}, { duration: 0.8 });

            /* -------------------------------------------------------
               08 — FINAL STATEMENT
            ------------------------------------------------------- */

            tl.to(
              finalStatementRef.current,
              {
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "power4.out",
              },
              "+=0.1"
            );

            /* -------------------------------------------------------
               09 — SPLIT TEXT
            ------------------------------------------------------- */

            tl.to(
              finalLineOneRef.current,
              {
                x: 0,
                opacity: 1,
                duration: 1.1,
                ease: "power4.out",
              },
              "-=0.7"
            );

            tl.to(
              finalLineTwoRef.current,
              {
                x: 0,
                opacity: 1,
                duration: 1.1,
                ease: "power4.out",
              },
              "-=0.85"
            );

            /* -------------------------------------------------------
               HOLD
            ------------------------------------------------------- */

            tl.to({}, { duration: 1 });

            /* -------------------------------------------------------
               10 — CTA
            ------------------------------------------------------- */

            tl.to(
              ctaWrapRef.current,
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power3.out",
              },
              "+=0.15"
            );

            /* -------------------------------------------------------
               11 — FOOTER
            ------------------------------------------------------- */

            tl.to(
              footerRef.current,
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
              },
              "-=0.35"
            );

            /* -------------------------------------------------------
               12 — FINAL HOLD
            ------------------------------------------------------- */

            tl.to({}, { duration: 1.4 });
          }
        }
      );

      /* =========================================================
         CTA HOVER
      ========================================================= */

      const cta = ctaRef.current;

      if (cta) {
        const arrow = cta.querySelector(
          "[data-arrow]"
        ) as HTMLElement | null;

        const enter = () => {
          gsap.to(cta, {
            y: -5,
            duration: 0.35,
            ease: "power3.out",
          });

          if (arrow) {
            gsap.to(arrow, {
              x: 5,
              y: -5,
              duration: 0.35,
              ease: "power3.out",
            });
          }
        };

        const leave = () => {
          gsap.to(cta, {
            y: 0,
            duration: 0.35,
            ease: "power3.out",
          });

          if (arrow) {
            gsap.to(arrow, {
              x: 0,
              y: 0,
              duration: 0.35,
              ease: "power3.out",
            });
          }
        };

        cta.addEventListener("mouseenter", enter);
        cta.addEventListener("mouseleave", leave);

        return () => {
          cta.removeEventListener("mouseenter", enter);
          cta.removeEventListener("mouseleave", leave);
        };
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="lets-build"
      className="
        relative
        h-[560vh]
        -mt-[70vh]
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
        "
      >
        {/* =======================================================
            BACKGROUND
        ======================================================= */}

        <div className="absolute inset-0 bg-[#050505]" />

        {/* subtle central atmosphere — no glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[55vh]
            w-px
            -translate-x-1/2
            -translate-y-1/2
            bg-white/[0.025]
          "
        />

        {/* =======================================================
            HEADER
        ======================================================= */}

        <div
          ref={introRef}
          className="
            absolute
            left-6
            right-6
            top-6
            z-30

            flex
            items-start
            justify-between

            md:left-10
            md:right-10
            md:top-8
          "
        >
          

        </div>

        {/* =======================================================
            VERTICAL AXIS
        ======================================================= */}

        <div
          ref={verticalLineRef}
          className="
            absolute
            bottom-0
            left-1/2
            top-0
            z-10
            w-px
            -mt-[20vh]
            -translate-x-1/2
            bg-white/20
          "
        />

        {/* =======================================================
            IMAGE BLEED
        ======================================================= */}

        <div
          ref={imageRef}
          className="
            pointer-events-none
            absolute
            left-[12%]
            right-[12%]
            top-[16%]
            bottom-[15%]
            z-[2]
            overflow-hidden
          "
        >
          <img
            ref={imageInnerRef}
            src="/assets/proof/01.jpg"
            alt=""
            className="
              h-full
              w-full
              object-cover
              opacity-45
              grayscale
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[#050505]/70
            "
          />

          <div
            className="
              absolute
              inset-0
              border
              border-white/10
            "
          />
        </div>

        {/* =======================================================
            MAIN BUILD COMPOSITION
        ======================================================= */}

        <div
          className="
            absolute
            inset-0
            z-20
            flex
            items-center
            justify-center
          "
        >
          <div
            className="
              relative
              flex
              w-full
              flex-col
              items-center
              justify-center
              overflow-visible
            "
          >
            {/* BUILD */}

            <div
              ref={buildRef}
              className="
                select-none
                whitespace-nowrap
                font-medium
                uppercase
                leading-[0.72]
                tracking-[-0.075em]

                text-[20vw]
                md:text-[14vw]
              "
            >
              BUILD
            </div>

            {/* WITH */}

            <div
              ref={withRef}
              className="
                relative
                z-20
                select-none
                whitespace-nowrap
                font-light
                uppercase
                leading-[0.72]
                tracking-[-0.065em]

                text-[14vw]
                text-white/45

                md:text-[9vw]
              "
            >
              WITH
            </div>

            {/* INTELLIGENCE */}

            <div
              ref={intelligenceRef}
              className="
                select-none
                whitespace-nowrap
                font-medium
                uppercase
                leading-[0.72]
                tracking-[-0.075em]

                text-[16vw]
                md:text-[11.5vw]
              "
            >
              INTELLIGENCE
            </div>
          </div>
        </div>

        {/* =======================================================
            FINAL STATEMENT
        ======================================================= */}

        <div
          ref={finalStatementRef}
          className="
            absolute
            inset-0
            z-25
            flex
            items-center
            justify-center
            px-6
            md:px-10
          "
        >
          <div className="w-full">
            <div className="overflow-hidden">
              <div
                ref={finalLineOneRef}
                className="
                  whitespace-nowrap
                  text-center
                  font-medium
                  uppercase
                  leading-[0.78]
                  tracking-[-0.075em]

                  text-[17vw]
                  md:text-[12vw]
                "
              >
                WE BUILD
              </div>
            </div>

            <div className="overflow-hidden">
              <div
                ref={finalLineTwoRef}
                className="
                  whitespace-nowrap
                  text-center
                  font-light
                  uppercase
                  leading-[0.78]
                  tracking-[-0.095em]
                  text-white/40

                  text-[17vw]
                  md:text-[12vw]
                "
              >
                WHAT COMES NEXT
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            CTA
        ======================================================= */}

        <div
          ref={ctaWrapRef}
          className="
            absolute
            bottom-[16%]
            left-1/2
            z-40
            -translate-x-1/2
          "
        >
          <a
            ref={ctaRef}
            href="#contact"
            className="
              group
              relative
              flex
              items-center
              gap-5
              whitespace-nowrap
              border
              border-white/30
              px-6
              py-4

              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]

              transition-colors
              duration-500

              hover:border-white
            "
          >
            <span>Start a conversation</span>

            <span
              data-arrow
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                border
                border-white/25

                transition-all
                duration-500

                group-hover:border-white
              "
            >
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
              />
            </span>

            <span
              className="
                absolute
                inset-0
                -z-10
                origin-left
                scale-x-0
                bg-white

                transition-transform
                duration-500
                ease-out

                group-hover:scale-x-100
              "
            />

            <span
              className="
                pointer-events-none
                absolute
                inset-0
                text-black
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            />
          </a>
        </div>

        {/* =======================================================
            FOOTER
        ======================================================= */}

       

        {/* =======================================================
            SIDE LABEL
        ======================================================= */}

       
      </div>
    </section>
  );
}