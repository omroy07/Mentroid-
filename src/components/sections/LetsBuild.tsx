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
          desktop: "(min-width: 1025px)",
          tablet: "(min-width: 768px) and (max-width: 1024px)",
          mobile: "(max-width: 767px)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const conditions = context.conditions as {
            desktop: boolean;
            tablet: boolean;
            mobile: boolean;
            reduced: boolean;
          };

          const {
            desktop,
            tablet,
            mobile,
            reduced,
          } = conditions;

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
                finalLineOneRef.current,
                finalLineTwoRef.current,
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

            if (imageInnerRef.current) {
              gsap.set(imageInnerRef.current, {
                scale: 1,
                yPercent: 0,
              });
            }

            return;
          }

          /* =========================================================
             INITIAL STATES
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
            yPercent: 0,
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
                pin: stage,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            mobileTl
              /* INTRO */
              .to(
                introRef.current,
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  ease: "power3.out",
                },
                0
              )

              /* AXIS */
              .to(
                verticalLineRef.current,
                {
                  scaleY: 1,
                  duration: 0.7,
                  ease: "power3.inOut",
                },
                0
              )

              /* BUILD */
              .to(
                buildRef.current,
                {
                  x: 0,
                  opacity: 1,
                  duration: 0.8,
                  ease: "power4.out",
                },
                0.15
              )

              /* WITH */
              .to(
                withRef.current,
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 0.8,
                  ease: "power4.out",
                },
                0.32
              )

              /* INTELLIGENCE */
              .to(
                intelligenceRef.current,
                {
                  x: 0,
                  opacity: 1,
                  duration: 0.8,
                  ease: "power4.out",
                },
                0.48
              )

              /* IMAGE */
              .to(
                imageRef.current,
                {
                  opacity: 0.3,
                  scale: 1,
                  clipPath: "inset(0% 0% 0% 0%)",
                  duration: 0.9,
                  ease: "power3.inOut",
                },
                0.7
              )

              .to(
                imageInnerRef.current,
                {
                  scale: 1,
                  duration: 1,
                  ease: "none",
                },
                0.7
              )

              /* COMPOSITION EXIT */
              .to(
                [
                  buildRef.current,
                  withRef.current,
                  intelligenceRef.current,
                ],
                {
                  opacity: 0,
                  scale: 0.92,
                  duration: 0.7,
                  stagger: 0.04,
                  ease: "power3.in",
                },
                1.45
              )

              /* IMAGE EXIT */
              .to(
                imageRef.current,
                {
                  opacity: 0,
                  scale: 1.06,
                  duration: 0.55,
                  ease: "power3.inOut",
                },
                1.62
              )

              /* FINAL STATEMENT */
              .to(
                finalStatementRef.current,
                {
                  opacity: 1,
                  scale: 1,
                  duration: 0.75,
                  ease: "power3.out",
                },
                1.82
              )

              /* FINAL LINE 1 */
              .to(
                finalLineOneRef.current,
                {
                  x: 0,
                  opacity: 1,
                  duration: 0.65,
                  ease: "power4.out",
                },
                2
              )

              /* FINAL LINE 2 */
              .to(
                finalLineTwoRef.current,
                {
                  x: 0,
                  opacity: 1,
                  duration: 0.65,
                  ease: "power4.out",
                },
                2.12
              )

              /* CTA */
              .to(
                ctaWrapRef.current,
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.7,
                  ease: "power3.out",
                },
                2.38
              )

              /* FOOTER */
              .to(
                footerRef.current,
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  ease: "power3.out",
                },
                2.65
              );

            return;
          }

          /* =========================================================
             TABLET
          ========================================================= */

          if (tablet) {
            const tabletTl = gsap.timeline({
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom bottom",
                pin: stage,
                scrub: 1.15,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            tabletTl
              /* INTRO */
              .to(
                introRef.current,
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  ease: "power3.out",
                },
                0
              )

              /* AXIS */
              .to(
                verticalLineRef.current,
                {
                  scaleY: 1,
                  duration: 1,
                  ease: "power3.inOut",
                },
                0.1
              )

              /* BUILD */
              .to(
                buildRef.current,
                {
                  x: 0,
                  opacity: 1,
                  duration: 1,
                  ease: "power4.out",
                },
                0.25
              )

              /* WITH */
              .to(
                withRef.current,
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 0.95,
                  ease: "power4.out",
                },
                0.45
              )

              /* INTELLIGENCE */
              .to(
                intelligenceRef.current,
                {
                  x: 0,
                  opacity: 1,
                  duration: 1,
                  ease: "power4.out",
                },
                0.65
              )

              /* HOLD */
              .to({}, { duration: 0.7 })

              /* IMAGE */
              .to(
                imageRef.current,
                {
                  opacity: 0.32,
                  scale: 1,
                  clipPath: "inset(0% 0% 0% 0%)",
                  duration: 1.15,
                  ease: "power3.inOut",
                },
                "+=0.1"
              )

              .to(
                imageInnerRef.current,
                {
                  scale: 1,
                  yPercent: -5,
                  duration: 1.5,
                  ease: "none",
                },
                "<"
              )

              /* EXIT */
              .to(
                [
                  buildRef.current,
                  withRef.current,
                  intelligenceRef.current,
                ],
                {
                  opacity: 0,
                  scale: 0.9,
                  duration: 0.95,
                  stagger: 0.05,
                  ease: "power4.in",
                },
                "+=0.15"
              )

              .to(
                imageRef.current,
                {
                  opacity: 0,
                  scale: 1.08,
                  duration: 0.75,
                },
                "-=0.45"
              )

              /* FINAL */
              .to({}, { duration: 0.55 })

              .to(
                finalStatementRef.current,
                {
                  opacity: 1,
                  scale: 1,
                  duration: 1,
                  ease: "power4.out",
                },
                "+=0.1"
              )

              .to(
                finalLineOneRef.current,
                {
                  x: 0,
                  opacity: 1,
                  duration: 0.85,
                  ease: "power4.out",
                },
                "-=0.6"
              )

              .to(
                finalLineTwoRef.current,
                {
                  x: 0,
                  opacity: 1,
                  duration: 0.85,
                  ease: "power4.out",
                },
                "-=0.65"
              )

              .to({}, { duration: 0.5 })

              .to(
                ctaWrapRef.current,
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.8,
                  ease: "power3.out",
                },
                "+=0.1"
              )

              .to(
                footerRef.current,
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.65,
                },
                "-=0.25"
              );

            return;
          }

          /* =========================================================
             DESKTOP
          ========================================================= */

          if (desktop) {
            const desktopTl = gsap.timeline({
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
               01 — ESTABLISH
            ------------------------------------------------------- */

            desktopTl.to(
              introRef.current,
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
              },
              0
            );

            desktopTl.to(
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

            desktopTl.to({}, { duration: 0.8 });

            /* -------------------------------------------------------
               02 — BUILD
            ------------------------------------------------------- */

            desktopTl.to(
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
               03 — WITH
            ------------------------------------------------------- */

            desktopTl.to(
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
               04 — INTELLIGENCE
            ------------------------------------------------------- */

            desktopTl.to(
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
               HOLD
            ------------------------------------------------------- */

            desktopTl.to({}, { duration: 1.2 });

            /* -------------------------------------------------------
               05 — IMAGE
            ------------------------------------------------------- */

            desktopTl.to(
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

            desktopTl.to(
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

            desktopTl.to(
              imageInnerRef.current,
              {
                yPercent: -8,
                duration: 1.2,
                ease: "none",
              },
              "-=0.4"
            );

            /* -------------------------------------------------------
               06 — COLLAPSE
            ------------------------------------------------------- */

            desktopTl.to(
              [
                buildRef.current,
                withRef.current,
                intelligenceRef.current,
              ],
              {
                opacity: 0,
                scale: 0.88,
                duration: 1.1,
                stagger: 0.06,
                ease: "power4.in",
              },
              "+=0.2"
            );

            desktopTl.to(
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
               07 — BREATH
            ------------------------------------------------------- */

            desktopTl.to({}, { duration: 0.8 });

            /* -------------------------------------------------------
               08 — FINAL STATEMENT
            ------------------------------------------------------- */

            desktopTl.to(
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

            desktopTl.to(
              finalLineOneRef.current,
              {
                x: 0,
                opacity: 1,
                duration: 1.1,
                ease: "power4.out",
              },
              "-=0.7"
            );

            desktopTl.to(
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

            desktopTl.to({}, { duration: 1 });

            /* -------------------------------------------------------
               10 — CTA
            ------------------------------------------------------- */

            desktopTl.to(
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

            desktopTl.to(
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

            desktopTl.to({}, { duration: 1.4 });
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
            overwrite: true,
          });

          if (arrow) {
            gsap.to(arrow, {
              x: 5,
              y: -5,
              duration: 0.35,
              ease: "power3.out",
              overwrite: true,
            });
          }
        };

        const leave = () => {
          gsap.to(cta, {
            y: 0,
            duration: 0.35,
            ease: "power3.out",
            overwrite: true,
          });

          if (arrow) {
            gsap.to(arrow, {
              x: 0,
              y: 0,
              duration: 0.35,
              ease: "power3.out",
              overwrite: true,
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

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="lets-build"
      data-navbar-theme="dark"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        text-white

        h-[400vh]
        -mt-[30vh]

        sm:h-[430vh]
        sm:-mt-[35vh]

        md:h-[470vh]
        md:-mt-[45vh]

        lg:h-[540vh]
        lg:-mt-[60vh]

        xl:h-[560vh]
        xl:-mt-[65vh]
      "
    >
      <div
        ref={stageRef}
        className="
          relative
          h-[100svh]
          min-h-[560px]
          w-full
          overflow-hidden
          bg-[#050505]

          sm:min-h-[600px]

          md:min-h-[650px]

          lg:min-h-[700px]
        "
      >
        {/* =======================================================
            BACKGROUND
        ======================================================= */}

        <div className="absolute inset-0 bg-[#050505]" />

        {/* subtle central axis */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[50vh]
            w-px
            -translate-x-1/2
            -translate-y-1/2
            bg-white/[0.025]

            md:h-[55vh]
          "
        />

        {/* =======================================================
            HEADER
        ======================================================= */}

        <div
          ref={introRef}
          className="
            absolute
            left-5
            right-5
            top-5
            z-30

            flex
            items-start
            justify-between

            sm:left-7
            sm:right-7
            sm:top-7

            md:left-10
            md:right-10
            md:top-8

            lg:left-12
            lg:right-12
            lg:top-10

            xl:left-16
            xl:right-16
          "
        >
          {/* Keep your existing intro content here */}
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
            -translate-x-1/2
            bg-white/20

            -mt-[8vh]

            md:-mt-[15vh]

            lg:-mt-[20vh]
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
            left-[7%]
            right-[7%]
            top-[22%]
            bottom-[18%]
            z-[2]
            overflow-hidden

            sm:left-[9%]
            sm:right-[9%]
            sm:top-[20%]
            sm:bottom-[17%]

            md:left-[10%]
            md:right-[10%]
            md:top-[17%]
            md:bottom-[15%]

            lg:left-[12%]
            lg:right-[12%]
            lg:top-[16%]
            lg:bottom-[15%]
          "
        >
          <img
            ref={imageInnerRef}
            src="/assets/proof/01.webp"
            alt=""
            loading="lazy"
            decoding="async"
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

                text-[18vw]

                sm:text-[17vw]

                md:text-[14vw]

                lg:text-[13vw]
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
                text-white/45

                text-[13vw]

                sm:text-[12vw]

                md:text-[9vw]

                lg:text-[8.5vw]
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

                text-[9.5vw]

                sm:text-[10vw]

                md:text-[10.5vw]

                lg:text-[11.5vw]
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
            px-4

            sm:px-6

            md:px-10

            lg:px-12
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

                  text-[14vw]

                  sm:text-[14vw]

                  md:text-[12vw]

                  lg:text-[11.5vw]
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

                  text-[14vw]

                  sm:text-[14vw]

                  md:text-[12vw]

                  lg:text-[11.5vw]
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
            bottom-[9%]
            left-1/2
            z-40
            -translate-x-1/2

            sm:bottom-[10%]

            md:bottom-[12%]

            lg:bottom-[16%]
          "
        >
          <a
            ref={ctaRef}
            href="#contact"
            className="
              group
              relative
              flex
              min-w-max
              items-center
              gap-3
              whitespace-nowrap
              border
              border-white/30
              px-4
              py-3.5

              text-[9px]
              font-medium
              uppercase
              tracking-[0.16em]

              transition-colors
              duration-500

              hover:border-white

              sm:gap-4
              sm:px-5
              sm:py-3.5

              md:gap-5
              md:px-6
              md:py-4
              md:text-[10px]
              md:tracking-[0.2em]
            "
          >
            <span>
              Start a conversation
            </span>

            <span
              data-arrow
              className="
                flex
                h-6
                w-6
                shrink-0
                items-center
                justify-center
                border
                border-white/25

                transition-all
                duration-500

                group-hover:border-white

                md:h-7
                md:w-7
              "
            >
              <ArrowUpRight
                size={13}
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
          </a>
        </div>

        {/* =======================================================
            FOOTER
        ======================================================= */}

        <div
          ref={footerRef}
          className="
            absolute
            bottom-5
            left-5
            right-5
            z-30

            flex
            items-end
            justify-between

            text-[9px]
            uppercase
            tracking-[0.18em]
            text-white/40

            sm:bottom-6
            sm:left-7
            sm:right-7

            md:bottom-7
            md:left-10
            md:right-10

            lg:bottom-8
            lg:left-12
            lg:right-12
          "
        >
          <span>Mentroid</span>

          <span>AI / ML / AUTOMATION</span>
        </div>
      </div>
    </section>
  );
}