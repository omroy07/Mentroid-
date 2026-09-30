"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    name: "ECGenius",
    category: "Healthcare / AI",
    description:
      "Intelligent healthcare technology designed to turn complex information into actionable insight.",
    image: "/assets/selected-work/01.jpg",
    tags: ["AI", "Healthcare", "ML"],
  },
  {
    number: "02",
    name: "LearnSphere",
    category: "Education / AI",
    description:
      "An intelligent learning experience built around personalized knowledge and engagement.",
    image: "/assets/selected-work/02.jpg",
    tags: ["AI", "Education", "SaaS"],
  },
  {
    number: "03",
    name: "AgriTech",
    category: "Agriculture / ML",
    description:
      "Machine learning systems helping transform agricultural data into practical decisions.",
    image: "/assets/selected-work/03.jpg",
    tags: ["ML", "Agriculture", "Analytics"],
  },
  {
    number: "04",
    name: "VisionSTRA",
    category: "Computer Vision",
    description:
      "Computer vision technology engineered to understand visual information at scale.",
    image: "/assets/selected-work/04.jpg",
    tags: ["Computer Vision", "AI", "ML"],
  },
];

export default function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const introRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const cardRefs = useRef<HTMLDivElement[]>([]);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const infoRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const grid = gridRef.current;

    if (!section || !stage || !grid) return;

    const ctx = gsap.context(() => {
      const cards = cardRefs.current;
      const images = imageRefs.current;
      const infos = infoRefs.current;

      if (
        cards.length !== projects.length ||
        images.length !== projects.length ||
        infos.length !== projects.length
      ) {
        return;
      }

      const mm = gsap.matchMedia();

      /*
      ============================================================
      DESKTOP
      ============================================================
      */

      mm.add("(min-width: 769px)", () => {
        /*
        ------------------------------------------------------------
        INITIAL POSITIONS
        ------------------------------------------------------------

        01 → top-left from upper-left
        02 → top-right from upper-right
        03 → bottom-left from lower-left
        04 → bottom-right from lower-right
        ------------------------------------------------------------
        */

        gsap.set(cards[0], {
          x: "-90vw",
          y: "-75vh",
          rotation: -7,
          scale: 0.84,
          opacity: 0,
        });

        gsap.set(cards[1], {
          x: "90vw",
          y: "-75vh",
          rotation: 7,
          scale: 0.84,
          opacity: 0,
        });

        gsap.set(cards[2], {
          x: "-90vw",
          y: "75vh",
          rotation: 7,
          scale: 0.84,
          opacity: 0,
        });

        gsap.set(cards[3], {
          x: "90vw",
          y: "75vh",
          rotation: -7,
          scale: 0.84,
          opacity: 0,
        });

        gsap.set(images, {
          scale: 1.13,
        });

        gsap.set(infos, {
          opacity: 0,
          y: 22,
        });

        /*
        ============================================================
        MASTER TIMELINE

        Because this is scrubbed:
        DOWN = forward
        UP   = exact reverse
        ============================================================
        */

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${window.innerHeight * 6.2}`,
            pin: stage,
            scrub: 0.7,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        /*
        ============================================================
        01 — INTRO ENTER
        ============================================================
        */

        timeline.fromTo(
          introRef.current,
          {
            opacity: 0,
            y: 70,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          }
        );

        /*
        ------------------------------------------------------------
        INTRO HOLD
        ------------------------------------------------------------
        */

        timeline.to({}, {
          duration: 0.5,
        });

        /*
        ============================================================
        02 — INTRO EXIT
        ============================================================
        */

        timeline.to(introRef.current, {
          opacity: 0,
          y: -60,
          scale: 0.96,
          duration: 0.55,
          ease: "power3.inOut",
        });

        /*
        ============================================================
        03 — CARDS ASSEMBLE
        ============================================================
        */

        timeline.to(
          cards[0],
          {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
          },
          "<0.05"
        );

        timeline.to(
          cards[1],
          {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
          },
          "<0.12"
        );

        timeline.to(
          cards[2],
          {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
          },
          "<0.12"
        );

        timeline.to(
          cards[3],
          {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
          },
          "<0.12"
        );

        /*
        ============================================================
        04 — IMAGE SETTLE
        ============================================================
        */

        timeline.to(
          images,
          {
            scale: 1,
            duration: 0.75,
            ease: "power3.out",
          },
          "<0.12"
        );

        /*
        ============================================================
        05 — PROJECT INFORMATION
        ============================================================
        */

        timeline.to(
          infos,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.08,
            ease: "power3.out",
          },
          "<0.18"
        );

        /*
        ============================================================
        06 — HOLD THE COMPLETE GRID
        ============================================================
        */

        timeline.to({}, {
          duration: 1.15,
        });

        /*
        ============================================================
        07 — SMALL SETTLE
        ============================================================
        */

        timeline.to(
          cards,
          {
            scale: 0.985,
            duration: 0.65,
            ease: "power2.inOut",
          }
        );

        timeline.to({}, {
          duration: 0.35,
        });

        /*
        ============================================================
        08 — DISASSEMBLE

        IMPORTANT:
        Each card returns to the EXACT direction from which it
        originally entered.

        Therefore scrolling UP reverses this perfectly.
        ============================================================
        */

        // 01 → upper-left
        timeline.to(
          cards[0],
          {
            x: "-90vw",
            y: "-75vh",
            rotation: -7,
            scale: 0.84,
            opacity: 0,
            duration: 0.9,
            ease: "power3.inOut",
          }
        );

        // 02 → upper-right
        timeline.to(
          cards[1],
          {
            x: "90vw",
            y: "-75vh",
            rotation: 7,
            scale: 0.84,
            opacity: 0,
            duration: 0.9,
            ease: "power3.inOut",
          },
          "<0.08"
        );

        // 03 → lower-left
        timeline.to(
          cards[2],
          {
            x: "-90vw",
            y: "75vh",
            rotation: 7,
            scale: 0.84,
            opacity: 0,
            duration: 0.9,
            ease: "power3.inOut",
          },
          "<0.08"
        );

        // 04 → lower-right
        timeline.to(
          cards[3],
          {
            x: "90vw",
            y: "75vh",
            rotation: -7,
            scale: 0.84,
            opacity: 0,
            duration: 0.9,
            ease: "power3.inOut",
          },
          "<0.08"
        );

        /*
        ------------------------------------------------------------
        FOOTER EXITS WITH THE GRID
        ------------------------------------------------------------
        */

        timeline.to(
          footerRef.current,
          {
            opacity: 0,
            y: -20,
            duration: 0.35,
            ease: "power2.inOut",
          },
          "<0.2"
        );

        /*
        ------------------------------------------------------------
        SMALL BREATHING SPACE BEFORE NEXT SECTION
        ------------------------------------------------------------
        */

        timeline.to({}, {
          duration: 0.3,
        });
      });

      /*
      ============================================================
      MOBILE
      ============================================================
      */

      mm.add("(max-width: 768px)", () => {
        /*
        ------------------------------------------------------------
        MOBILE INITIAL POSITIONS
        ------------------------------------------------------------
        */

        gsap.set(cards[0], {
          x: "-35vw",
          y: "-35vh",
          rotation: -5,
          scale: 0.9,
          opacity: 0,
        });

        gsap.set(cards[1], {
          x: "35vw",
          y: "-25vh",
          rotation: 5,
          scale: 0.9,
          opacity: 0,
        });

        gsap.set(cards[2], {
          x: "-35vw",
          y: "35vh",
          rotation: 5,
          scale: 0.9,
          opacity: 0,
        });

        gsap.set(cards[3], {
          x: "35vw",
          y: "35vh",
          rotation: -5,
          scale: 0.9,
          opacity: 0,
        });

        gsap.set(images, {
          scale: 1.08,
        });

        gsap.set(infos, {
          opacity: 0,
          y: 20,
        });

        /*
        ------------------------------------------------------------
        MOBILE TIMELINE
        ------------------------------------------------------------
        */

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${window.innerHeight * 5.5}`,
            pin: stage,
            scrub: 0.7,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        /*
        ------------------------------------------------------------
        INTRO
        ------------------------------------------------------------
        */

        timeline.fromTo(
          introRef.current,
          {
            opacity: 0,
            y: 45,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          }
        );

        timeline.to({}, {
          duration: 0.35,
        });

        timeline.to(introRef.current, {
          opacity: 0,
          y: -40,
          duration: 0.45,
          ease: "power3.inOut",
        });

        /*
        ------------------------------------------------------------
        MOBILE CARD ASSEMBLY
        ------------------------------------------------------------
        */

        timeline.to(
          cards,
          {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            opacity: 1,
            duration: 0.85,
            stagger: 0.1,
            ease: "power4.out",
          },
          "<0.08"
        );

        /*
        ------------------------------------------------------------
        IMAGE SETTLE
        ------------------------------------------------------------
        */

        timeline.to(
          images,
          {
            scale: 1,
            duration: 0.65,
            ease: "power3.out",
          },
          "<0.12"
        );

        /*
        ------------------------------------------------------------
        CONTENT
        ------------------------------------------------------------
        */

        timeline.to(
          infos,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.07,
            ease: "power3.out",
          },
          "<0.12"
        );

        /*
        ------------------------------------------------------------
        HOLD
        ------------------------------------------------------------
        */

        timeline.to({}, {
          duration: 0.9,
        });

        /*
        ------------------------------------------------------------
        MOBILE DISASSEMBLY
        ------------------------------------------------------------

        Same origin directions.
        Reverse scroll naturally reverses this.
        ------------------------------------------------------------
        */

        timeline.to(
          cards[0],
          {
            x: "-35vw",
            y: "-35vh",
            rotation: -5,
            scale: 0.9,
            opacity: 0,
            duration: 0.75,
            ease: "power3.inOut",
          }
        );

        timeline.to(
          cards[1],
          {
            x: "35vw",
            y: "-25vh",
            rotation: 5,
            scale: 0.9,
            opacity: 0,
            duration: 0.75,
            ease: "power3.inOut",
          },
          "<0.08"
        );

        timeline.to(
          cards[2],
          {
            x: "-35vw",
            y: "35vh",
            rotation: 5,
            scale: 0.9,
            opacity: 0,
            duration: 0.75,
            ease: "power3.inOut",
          },
          "<0.08"
        );

        timeline.to(
          cards[3],
          {
            x: "35vw",
            y: "35vh",
            rotation: -5,
            scale: 0.9,
            opacity: 0,
            duration: 0.75,
            ease: "power3.inOut",
          },
          "<0.08"
        );

        timeline.to(
          footerRef.current,
          {
            opacity: 0,
            y: -20,
            duration: 0.3,
          },
          "<0.15"
        );
      });

      /*
      ============================================================
      HOVER

      Do NOT animate card position here.
      ScrollTrigger owns card position.
      ============================================================
      */

      cards.forEach((card, index) => {
        const image = images[index];

        const handleEnter = () => {
          gsap.to(image, {
            scale: 1.045,
            duration: 0.6,
            ease: "power3.out",
            overwrite: "auto",
          });
        };

        const handleLeave = () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            overwrite: "auto",
          });
        };

        card.addEventListener("mouseenter", handleEnter);
        card.addEventListener("mouseleave", handleLeave);

        return () => {
          card.removeEventListener("mouseenter", handleEnter);
          card.removeEventListener("mouseleave", handleLeave);
        };
      });

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
      id="selected-work"
      className="
        relative
        h-[700vh]
        w-full
        overflow-hidden
        bg-[#f3f4f1]
        text-[#080808]
      "
    >
      <div
        ref={stageRef}
        className="
          relative
          h-screen
          w-full
          overflow-hidden
          bg-[#f3f4f1]
        "
      >
        {/* ========================================================
            TOP META
        ======================================================== */}

        <div
          className="
            absolute
            left-6
            right-6
            top-7
            z-[100]
            flex
            items-center
            justify-between
            md:left-10
            md:right-10
            lg:left-16
            lg:right-16
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
              text-[9px]
              uppercase
              tracking-[0.24em]
              text-black/45
            "
          >
            
          </div>

          <span
            className="
              hidden
              text-[9px]
              uppercase
              tracking-[0.24em]
              text-black/30
              md:block
            "
          >
       
          </span>
        </div>

        {/* ========================================================
            INTRO
        ======================================================== */}

        <div
          ref={introRef}
          className="
            absolute
            inset-0
            z-[90]
            flex
            items-center
            px-6
            md:px-10
            lg:px-16
          "
        >
          <div className="max-w-[950px]">
            <div
              className="
                mb-8
                flex
                items-center
                gap-3
              "
            >
             
            </div>

            <h2
              className="
                text-[clamp(4.2rem,9.5vw,9.5rem)]
                font-medium
                leading-[0.76]
                tracking-[-0.09em]
              "
            >
              Built for
              <br />
              <span className="text-black/30">
                problems
              </span>
              <br />
              worth solving.
            </h2>

            <p
              className="
                mt-9
                max-w-[430px]
                text-[14px]
                leading-7
                text-black/40
              "
            >
              A selection of intelligent products and
              systems built around real-world problems.
            </p>
          </div>
        </div>

        {/* ========================================================
            PROJECT GRID
        ======================================================== */}

        <div
          ref={gridRef}
          className="
            absolute
            left-[9vw]
            right-[9vw]
            top-[15vh]
            bottom-[12vh]
            z-20
            grid
            grid-cols-2
            grid-rows-2
            gap-[1.1vw]

            max-md:left-5
            max-md:right-5
            max-md:top-[19vh]
            max-md:bottom-[11vh]
            max-md:grid-cols-1
            max-md:grid-rows-4
            max-md:gap-3
          "
        >
          {projects.map((project, index) => (
            <article
              key={project.number}
              ref={(el) => {
                if (el) {
                  cardRefs.current[index] = el;
                }
              }}
              className="
                group
                relative
                min-h-0
                cursor-pointer
                overflow-hidden
                bg-[#dedfdb]
                will-change-transform
              "
            >
              {/* ==================================================
                  IMAGE
              ================================================== */}

              <div
                ref={(el) => {
                  if (el) {
                    imageRefs.current[index] = el;
                  }
                }}
                className="
                  absolute
                  inset-0
                  overflow-hidden
                  will-change-transform
                "
              >
                <Image
                  src={project.image}
                  alt={`${project.name} — ${project.category}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) calc(100vw - 40px), 40vw"
                  className="
                    object-cover
                    transition-[filter]
                    duration-500
                    group-hover:brightness-[0.82]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-black/[0.04]
                    transition-colors
                    duration-500
                    group-hover:bg-black/[0.14]
                  "
                />
              </div>

              {/* ==================================================
                  TOP META
              ================================================== */}

              <div
                className="
                  absolute
                  left-5
                  right-5
                  top-5
                  z-20
                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.22em]
                    text-white/75
                  "
                >
                  MENTROID / {project.number}
                </span>

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/25
                    bg-black/10
                    text-white/80
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                >
                  <ArrowUpRight size={12} />
                </span>
              </div>

              {/* ==================================================
                  PROJECT INFORMATION
              ================================================== */}

              <div
                ref={(el) => {
                  if (el) {
                    infoRefs.current[index] = el;
                  }
                }}
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  z-20
                "
              >
                <div
                  className="
                    mb-2
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-white/65
                  "
                >
                  {project.category}
                </div>

                <div className="flex items-end justify-between gap-4">
                  <h3
                    className="
                      text-[clamp(1.8rem,3vw,3.2rem)]
                      font-medium
                      leading-[0.85]
                      tracking-[-0.07em]
                      text-white
                    "
                  >
                    {project.name}
                  </h3>

                  <span
                    className="
                      hidden
                      text-[8px]
                      uppercase
                      tracking-[0.18em]
                      text-white/55
                      md:block
                    "
                  >
                    Case study
                  </span>
                </div>

                {/* Tags */}

                <div
                  className="
                    mt-3
                    flex
                    flex-wrap
                    gap-1.5
                    translate-y-2
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        border
                        border-white/20
                        px-2.5
                        py-1
                        text-[7px]
                        uppercase
                        tracking-[0.14em]
                        text-white/65
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ========================================================
            FOOTER
        ======================================================== */}

        <div
          ref={footerRef}
          className="
            absolute
            bottom-7
            left-6
            right-6
            z-50
            flex
            items-end
            justify-between
            md:left-10
            md:right-10
            lg:left-16
            lg:right-16
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
              text-black/45
            "
          >
            <span>Explore work</span>

            <ArrowUpRight size={13} />
          </div>
        </div>
      </div>
    </section>
  );
}