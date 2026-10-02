"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   PROJECT DATA
   Change only these image paths if your actual files
   are stored somewhere else.
========================================================= */

const projects = [
  {
    id: "01",
    category: "EDUCATION",
    title: "Nitya CloudTech",
    description:
      "A digital education experience engineered around learning, discovery and conversion.",
    image: "/assets/proof/01.jpg",
  },
  {
    id: "02",
    category: "JEWELLERY",
    title: "Vishnu Jewellers",
    description:
      "A refined digital commerce experience built around a premium jewellery identity.",
    image: "/assets/proof/02.jpg",
  },
  {
    id: "03",
    category: "REAL ESTATE",
    title: "Estate Plotrix",
    description:
      "A property platform designed around discovery, information and conversion.",
    image: "/assets/proof/03.jpg",
  },
  {
    id: "04",
    category: "HOSPITALITY",
    title: "Urban House Hotel",
    description:
      "A refined hospitality platform focused on discovery, trust and digital engagement.",
    image: "/assets/proof/04.jpg",
  },
  {
    id: "05",
    category: "EDUCATION",
    title: "Little Scholars",
    description:
      "A digital school experience designed to bring information and engagement together.",
    image: "/assets/proof/05.jpg",
  },
  {
    id: "06",
    category: "HOSPITALITY",
    title: "Hotel Dharam Inn",
    description:
      "A focused hospitality experience built around clarity, information and conversion.",
    image: "/assets/proof/06.jpg",
  },
  {
    id: "07",
    category: "FASHION",
    title: "Rangriwaazz",
    description:
      "A contemporary fashion commerce experience with a strong visual identity.",
    image: "/assets/proof/07.jpg",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function Proof() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  const giantTextRef = useRef<HTMLDivElement | null>(null);

  const counterRef = useRef<HTMLSpanElement | null>(null);
  const categoryRef = useRef<HTMLSpanElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;

    if (!section || !stage) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(
        (card): card is HTMLElement => card !== null
      );

      if (cards.length === 0) return;

      const mm = gsap.matchMedia();

      /* =====================================================
         DESKTOP
      ===================================================== */

      mm.add("(min-width: 769px)", () => {
        /*
         * -----------------------------------------------
         * RESET
         * -----------------------------------------------
         */

        gsap.set(cards, {
          position: "absolute",
          left: "50%",
          top: "50%",
          xPercent: -50,
          yPercent: -50,

          opacity: 0,
          x: "45vw",

          scale: 0.9,
          rotation: 0,

          zIndex: 1,

          clipPath: "inset(0% 0% 0% 100%)",

          willChange:
            "transform, opacity, clip-path",
        });

        /*
         * -----------------------------------------------
         * FIRST PROJECT
         * -----------------------------------------------
         */

        gsap.set(cards[0], {
          opacity: 1,
          x: 0,
          scale: 1,
          rotation: 0,
          zIndex: 10,
          clipPath:
            "inset(0% 0% 0% 0%)",
        });

        /*
         * -----------------------------------------------
         * GIANT WORD
         * -----------------------------------------------
         */

        if (giantTextRef.current) {
          gsap.set(
            giantTextRef.current,
            {
              x: 0,
              willChange: "transform",
            }
          );
        }

        /*
         * -----------------------------------------------
         * TIMELINE
         * -----------------------------------------------
         */

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",

            pin: stage,

            scrub: 1.5,

            anticipatePin: 1,

            invalidateOnRefresh: true,

            /*
             * IMPORTANT:
             * onUpdate belongs here.
             *
             * We do NOT call:
             *
             * trigger.eventCallback(...)
             *
             * anymore.
             */

            onUpdate: (self) => {
              const progress =
                self.progress;

              /*
               * Keep the last project from
               * overshooting.
               */

              const projectIndex = Math.min(
                projects.length - 1,
                Math.floor(
                  progress *
                    projects.length
                )
              );

              const project =
                projects[projectIndex];

              if (
                counterRef.current
              ) {
                counterRef.current.textContent =
                  project.id;
              }

              if (
                categoryRef.current
              ) {
                categoryRef.current.textContent =
                  project.category;
              }

              if (
                titleRef.current
              ) {
                titleRef.current.textContent =
                  project.title;
              }

              if (
                descriptionRef.current
              ) {
                descriptionRef.current.textContent =
                  project.description;
              }
            },
          },
        });

        /*
         * -----------------------------------------------
         * INTRO HOLD
         * -----------------------------------------------
         */

        timeline.to(
          {},
          {
            duration: 1.6,
          }
        );

        /*
         * =================================================
         * PROJECT SEQUENCE
         * =================================================
         */

        cards.forEach(
          (currentCard, index) => {
            if (index === 0) return;

            const previousCard =
              cards[index - 1];

            /*
             * ---------------------------------------------
             * HOLD
             * ---------------------------------------------
             */

            timeline.to(
              {},
              {
                duration: 1.15,
              }
            );

            /*
             * ---------------------------------------------
             * PREVIOUS PROJECT EXITS
             * ---------------------------------------------
             *
             * Very controlled movement.
             *
             * NOT a flying card.
             */

            timeline.to(
              previousCard,
              {
                x: "-34vw",
                scale: 0.94,
                rotation: -1.2,
                opacity: 0,

                duration: 1.15,

                ease:
                  "power3.inOut",
              }
            );

            /*
             * ---------------------------------------------
             * NEXT PROJECT ENTERS
             * ---------------------------------------------
             */

            timeline.fromTo(
              currentCard,
              {
                x: "34vw",
                scale: 0.94,
                rotation: 1.2,
                opacity: 0,

                clipPath:
                  "inset(0% 0% 0% 100%)",
              },
              {
                x: 0,
                scale: 1,
                rotation: 0,
                opacity: 1,

                clipPath:
                  "inset(0% 0% 0% 0%)",

                duration: 1.35,

                ease:
                  "power3.inOut",

                zIndex: 10,
              },
              "<0.25"
            );

            /*
             * ---------------------------------------------
             * GIANT BACKGROUND WORD MOVES
             * ---------------------------------------------
             */

            if (
              giantTextRef.current
            ) {
              timeline.to(
                giantTextRef.current,
                {
                  x:
                    index % 2 === 0
                      ? "-7vw"
                      : "7vw",

                  duration: 1.35,

                  ease:
                    "power2.inOut",
                },
                "<"
              );
            }

            /*
             * ---------------------------------------------
             * HOLD THE NEW PROJECT
             * ---------------------------------------------
             */

            timeline.to(
              {},
              {
                duration: 1.25,
              }
            );
          }
        );

        /*
         * -----------------------------------------------
         * END HOLD
         * -----------------------------------------------
         */

        timeline.to(
          {},
          {
            duration: 1.2,
          }
        );

        /*
         * -----------------------------------------------
         * REFRESH
         * -----------------------------------------------
         */

        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      });

      /* =====================================================
         MOBILE
      ===================================================== */

      mm.add("(max-width: 768px)", () => {
        /*
         * No pinned cinematic sequence on mobile.
         *
         * The projects become a clean vertical
         * editorial case-study list.
         */

        gsap.set(cards, {
          clearProps:
            "all",
        });

        cards.forEach(
          (card) => {
            if (!card) return;

            card.style.position =
              "relative";

            card.style.left =
              "auto";

            card.style.top =
              "auto";

            card.style.transform =
              "none";

            card.style.opacity =
              "1";

            card.style.clipPath =
              "none";
          }
        );

        if (
          giantTextRef.current
        ) {
          gsap.set(
            giantTextRef.current,
            {
              clearProps:
                "all",
            }
          );
        }
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="proof"
      data-navbar-theme="light"
      className="
        relative
        h-[1050vh]
        overflow-hidden
        bg-[#d8d8d6]
        text-[#111111]
      "
    >
      {/* ===================================================
          PINNED STAGE
      =================================================== */}

      <div
        ref={stageRef}
        className="
          relative
          h-screen
          w-full
          overflow-hidden
        "
      >
        {/* =================================================
            SUBTLE EDITORIAL ARC
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[17%]
            z-0
            h-[63vh]
            w-[125vw]
            -translate-x-1/2
            rounded-[50%]
            border
            border-black/[0.07]
          "
        />

      

     

        {/* =================================================
            SELECTED WORK LABEL
        ================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-[27%]
            z-30
            -translate-x-1/2
          "
        >
         
        </div>

        {/* =================================================
            GIANT BACKGROUND TYPOGRAPHY
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-1/2
            z-[1]
            -translate-y-1/2
            overflow-visible
          "
        >
          <div
            ref={giantTextRef}
            className="
              whitespace-nowrap
              text-[clamp(120px,17vw,290px)]
              font-medium
              uppercase
              leading-[0.72]
              tracking-[-0.105em]
              text-black/[0.40]
              will-change-transform
            "
          >
            INTELLIGENCE
          </div>
        </div>

        {/* =================================================
            PROJECTS
        ================================================= */}

        <div
          className="
            absolute
            inset-0
            z-10

            max-md:static
            max-md:px-6
            max-md:pt-32
            max-md:pb-24
          "
        >
          {projects.map(
            (project, index) => (
              <article
                key={project.id}
                ref={(element) => {
                  cardsRef.current[
                    index
                  ] = element;
                }}
                className="
                  w-[min(54vw,760px)]

                  max-md:mb-20
                  max-md:w-full
                "
              >
                {/* =======================================
                    PROJECT IMAGE
                ======================================= */}

                <div
                  className="
                    relative
                    aspect-[1.5]
                    overflow-hidden
                    bg-[#c7c7c5]
                  "
                >
                  <img
                    src={
                      project.image
                    }
                    alt={
                      project.title
                    }
                    draggable={
                      false
                    }
                    className="
                      h-full
                      w-full
                      select-none
                      object-cover
                    "
                  />

                  {/* PROJECT NUMBER */}

                  <div
                    className="
                      absolute
                      left-5
                      top-5
                      z-10
                    "
                  >
                    <span
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.35em]
                        text-white/75
                      "
                    >
                      {project.id}
                    </span>
                  </div>

                  {/* OPEN ICON */}

                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      z-10
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/40
                      text-white
                      backdrop-blur-sm
                    "
                  >
                    <ArrowUpRight
                      size={13}
                      strokeWidth={1}
                    />
                  </div>
                </div>

                {/* =======================================
                    PROJECT META
                ======================================= */}

                <div
                  className="
                    mt-4
                    flex
                    items-start
                    justify-between
                    gap-8
                  "
                >
                  <div>
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-[8px]
                        uppercase
                        tracking-[0.28em]
                        text-black/40
                      "
                    >
                      <span>
                        {project.id}
                      </span>

                      <span>
                        /
                      </span>

                      <span>
                        {
                          project.category
                        }
                      </span>
                    </div>

                    <h3
                      className="
                        mt-2
                        text-[24px]
                        font-medium
                        tracking-[-0.055em]

                        md:text-[30px]
                      "
                    >
                      {
                        project.title
                      }
                    </h3>
                  </div>

                  <p
                    className="
                      hidden
                      max-w-[250px]
                      text-[10px]
                      leading-[1.45]
                      text-black/45

                      md:block
                    "
                  >
                    {
                      project.description
                    }
                  </p>
                </div>
              </article>
            )
          )}
        </div>

        {/* =================================================
            ACTIVE PROJECT INFORMATION
        ================================================= */}

        

        {/* =================================================
            BOTTOM LEFT DESCRIPTION
        ================================================= */}

        <div
          className="
            absolute
            bottom-8
            left-6
            z-40
            max-w-[285px]

            md:left-10
            lg:left-14

            max-md:hidden
          "
        >
          <p
            className="
              text-[10px]
              leading-[1.5]
              text-black/50
            "
          >
            Digital products, AI
            systems and intelligent
            experiences engineered
            around real business
            problems.
          </p>
        </div>

        {/* =================================================
            BOTTOM RIGHT
        ================================================= */}

        <div
          className="
            absolute
            bottom-8
            right-6
            z-40

            md:right-10
            lg:right-14

            max-md:hidden
          "
        >
          <a
            href="#work"
            className="
              group
              flex
              items-center
              gap-4
              border-b
              border-black/20
              pb-2
            "
          >
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.35em]
              "
            >
              EXPLORE OUR WORK
            </span>

            <ArrowUpRight
              size={13}
              strokeWidth={1}
              className="
                transition-transform
                duration-500

                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </a>
        </div>

        {/* =================================================
            MOBILE BOTTOM LABEL
        ================================================= */}

        <div
          className="
            hidden
            px-6
            pb-8

            max-md:block
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              border-t
              border-black/10
              pt-4
            "
          >
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-black/40
              "
            >
              07 / PROOF
            </span>

            <ArrowUpRight
              size={14}
              strokeWidth={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}