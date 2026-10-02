"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    number: "01",
    eyebrow: "CUSTOMER EXPERIENCE",
    title: "24/7 AI",
    accent: "Customer Support",
    description:
      "Give customers instant, intelligent support across the channels they already use.",
    image: "/assets/solutions/01.webp",
  },
  {
    number: "02",
    eyebrow: "GROWTH",
    title: "AI Lead",
    accent: "Qualification",
    description:
      "Identify, understand and prioritize high-intent leads automatically.",
    image: "/assets/solutions/02.webp",
  },
  {
    number: "03",
    eyebrow: "SALES",
    title: "Sales",
    accent: "Automation",
    description:
      "Connect intelligence to your sales workflow and eliminate repetitive manual work.",
    image: "/assets/solutions/03.webp",
  },
  {
    number: "04",
    eyebrow: "KNOWLEDGE",
    title: "AI Knowledge",
    accent: "Assistant",
    description:
      "Turn your internal knowledge into an intelligent system your team can actually use.",
    image: "/assets/solutions/04.webp",
  },
  {
    number: "05",
    eyebrow: "OPERATIONS",
    title: "Business Process",
    accent: "Automation",
    description:
      "Automate the processes that slow your teams down and connect the systems behind them.",
    image: "/assets/solutions/05.webp",
  },
  {
    number: "06",
    eyebrow: "INTELLIGENCE",
    title: "AI",
    accent: "Recommendation",
    description:
      "Use your data to deliver personalized recommendations and better decisions.",
    image: "/assets/solutions/06.webp",
  },
  {
    number: "07",
    eyebrow: "CONVERSATIONAL AI",
    title: "WhatsApp AI",
    accent: "Assistant",
    description:
      "Bring intelligent conversations directly into the channel your customers already trust.",
    image: "/assets/solutions/07.webp",
  },
  {
    number: "08",
    eyebrow: "PLATFORM",
    title: "Custom AI",
    accent: "Platforms",
    description:
      "Build a complete AI platform around the unique requirements of your organization.",
    image: "/assets/solutions/08.webp",
  },
];

export default function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  const sceneRefs = useRef<HTMLDivElement[]>([]);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const titleRefs = useRef<HTMLDivElement[]>([]);
  const numberRefs = useRef<HTMLSpanElement[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;

    if (!section || !stage) return;

    const ctx = gsap.context(() => {
      const scenes = sceneRefs.current;
      const images = imageRefs.current;
      const titles = titleRefs.current;
      const numbers = numberRefs.current;

      /*
      ============================================================
      INITIAL STATE
      ============================================================
      */

      // EVERYTHING starts hidden.
      gsap.set(scenes, {
        autoAlpha: 0,
        xPercent: 0,
      });

      gsap.set(images, {
        clipPath: "inset(35% 25% 35% 25%)",
        scale: 1.12,
      });

      gsap.set(titles, {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(numbers, {
        opacity: 0,
      });

      /*
      ============================================================
      MASTER TIMELINE
      ============================================================
      */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * 10}`,
          pin: stage,
          scrub: 0.7,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /*
      ============================================================
      INTRO
      ============================================================
      */

      if (introRef.current) {
        // INTRO ENTER
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

        // INTRO HOLD
        timeline.to({}, {
          duration: 0.7,
        });

        // INTRO EXIT
        timeline.to(
          introRef.current,
          {
            opacity: 0,
            y: -100,
            scale: 0.94,
            duration: 0.7,
            ease: "power3.inOut",
          }
        );
      }

      /*
      ============================================================
      FIRST SCENE
      IMPORTANT:
      It only becomes visible AFTER intro has disappeared.
      ============================================================
      */

      timeline.set(scenes[0], {
        autoAlpha: 1,
        xPercent: 0,
      });

      timeline.fromTo(
        images[0],
        {
          clipPath: "inset(35% 25% 35% 25%)",
          scale: 1.12,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 0.8,
          ease: "power3.inOut",
        }
      );

      timeline.fromTo(
        titles[0],
        {
          yPercent: 110,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power3.out",
        },
        "<0.18"
      );

      timeline.to(
        numbers[0],
        {
          opacity: 1,
          duration: 0.2,
        },
        "<0.1"
      );

      /*
      ============================================================
      SCENE → SCENE
      ============================================================
      */

      for (let i = 0; i < solutions.length - 1; i++) {
        const currentScene = scenes[i];
        const nextScene = scenes[i + 1];

        const currentImage = images[i];
        const nextImage = images[i + 1];

        const currentTitle = titles[i];
        const nextTitle = titles[i + 1];

        const currentNumber = numbers[i];
        const nextNumber = numbers[i + 1];

        /*
        ------------------------------------------------------------
        HOLD CURRENT SCENE
        ------------------------------------------------------------
        */

        timeline.to({}, {
          duration: 0.55,
        });

        /*
        ------------------------------------------------------------
        CURRENT TITLE EXITS
        ------------------------------------------------------------
        */

        timeline.to(
          currentTitle,
          {
            yPercent: -110,
            opacity: 0,
            duration: 0.45,
            ease: "power3.inOut",
          }
        );

        /*
        ------------------------------------------------------------
        CURRENT IMAGE ZOOMS
        ------------------------------------------------------------
        */

        timeline.to(
          currentImage,
          {
            scale: 1.1,
            duration: 0.55,
            ease: "power2.inOut",
          },
          "<0.05"
        );

        /*
        ------------------------------------------------------------
        CURRENT SCENE EXITS
        ------------------------------------------------------------
        */

        timeline.to(
          currentScene,
          {
            xPercent: -7,
            opacity: 0,
            duration: 0.4,
            ease: "power3.inOut",
          },
          "<0.15"
        );

        /*
        ------------------------------------------------------------
        NEXT SCENE IS NOW ALLOWED TO APPEAR
        ------------------------------------------------------------
        */

        timeline.set(nextScene, {
          autoAlpha: 1,
          xPercent: 7,
        });

        /*
        ------------------------------------------------------------
        NEXT SCENE ENTER
        ------------------------------------------------------------
        */

        timeline.to(
          nextScene,
          {
            xPercent: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power3.out",
          }
        );

        /*
        ------------------------------------------------------------
        NEXT IMAGE REVEAL
        ------------------------------------------------------------
        */

        timeline.fromTo(
          nextImage,
          {
            clipPath: "inset(35% 25% 35% 25%)",
            scale: 1.12,
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 0.75,
            ease: "power3.inOut",
          },
          "<0.05"
        );

        /*
        ------------------------------------------------------------
        NEXT TITLE ENTER
        ------------------------------------------------------------
        */

        timeline.fromTo(
          nextTitle,
          {
            yPercent: 110,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "<0.2"
        );

        /*
        ------------------------------------------------------------
        NUMBER CHANGE
        ------------------------------------------------------------
        */

        timeline.to(
          currentNumber,
          {
            opacity: 0,
            duration: 0.15,
          },
          "<"
        );

        timeline.to(
          nextNumber,
          {
            opacity: 1,
            duration: 0.15,
          },
          "<0.1"
        );
      }

      /*
      ============================================================
      FINAL HOLD
      ============================================================
      */

      timeline.to({}, {
        duration: 0.6,
      });

      /*
      ============================================================
      FINAL EXIT
      ============================================================
      */

      timeline.to(
        titles[titles.length - 1],
        {
          yPercent: -100,
          opacity: 0,
          duration: 0.5,
          ease: "power3.inOut",
        }
      );

      timeline.to(
        images[images.length - 1],
        {
          scale: 1.08,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "<"
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
      id="solutions"
       data-navbar-theme="light"
      className="
        relative
        h-[1050vh]
        w-full
        overflow-hidden
        bg-[#f5f5f2]
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
          bg-[#f5f5f2]
        "
      >
        {/* ======================================================
            TOP META
        ======================================================= */}

        <div
          className="
            absolute
            left-6
            right-6
            top-24
            z-[110]
            flex
            items-center
            justify-between
            md:left-10
            md:right-10
            lg:left-16
            lg:right-16
          "
        >
         

          
        </div>

        {/* ======================================================
            INTRO
        ======================================================= */}

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
          <div className="max-w-[1000px]">
            <div
              className="
                mb-8
                flex
                items-center
                gap-3
              "
            >
              

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.24em]
                  text-black/40
                "
              >
               
              </span>
            </div>

            <h2
              className="
                text-[clamp(4rem,9.5vw,9.5rem)]
                font-medium
                leading-[0.76]
                tracking-[-0.09em]
              "
            >
              Intelligence
              <br />
              with an
              {/* <br /> */} <span className="text-black/30">  outcome.
              </span>
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
              We connect intelligence to the moments
              that matter — customers, sales, knowledge,
              operations and decisions.
            </p>
          </div>
        </div>

        {/* ======================================================
            SOLUTION SCENES
        ======================================================= */}

        {solutions.map((solution, index) => (
          <div
            key={solution.number}
            ref={(el) => {
              if (el) {
                sceneRefs.current[index] = el;
              }
            }}
            className="
              absolute
              inset-0
              overflow-hidden
              opacity-0
              will-change-transform
            "
          >
            {/* ==================================================
                GIANT BACKGROUND NUMBER
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                -bottom-[16vw]
                -left-[3vw]
                z-0
                select-none
                text-[42vw]
                font-medium
                leading-none
                tracking-[-0.12em]
                text-black/[0.035]
              "
            >
              {solution.number}
            </div>

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
                inset-[8vh_5vw]
                z-10
                overflow-hidden
                bg-black
                will-change-transform

                max-md:inset-[20vh_6vw_14vh]
              "
            >
              <Image
                src={solution.image}
                alt={solution.eyebrow}
                fill
                priority={index === 0}
                sizes="100vw"
                className="
                  object-cover
                  grayscale
                "
              />

              {/* Image overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-black/[0.12]
                "
              />

              {/* Image top label */}

              <div
                className="
                  absolute
                  left-6
                  top-6
                  z-20
                  text-[9px]
                  uppercase
                  tracking-[0.22em]
                  text-white/60
                "
              >
                MENTROID / {solution.number}
              </div>

              {/* Image bottom label */}

              <div
                className="
                  absolute
                  bottom-6
                  right-6
                  z-20
                  text-[9px]
                  uppercase
                  tracking-[0.22em]
                  text-white/60
                "
              >
                {solution.eyebrow}
              </div>
            </div>

            {/* ==================================================
                TITLE
            ================================================== */}

            <div
              ref={(el) => {
                if (el) {
                  titleRefs.current[index] = el;
                }
              }}
              className="
                absolute
                bottom-[7vh]
                left-[5vw]
                z-30
                will-change-transform

                max-md:left-6
                max-md:bottom-[7vh]
              "
            >
              <div
                className="
                  mb-5
                  flex
                  items-center
                  gap-3
                "
              >

                <span
                  className="
                    text-[9px]
                    px-2
                    uppercase
                    tracking-[0.22em]
                    text-white/70
                  "
                >
                  {solution.eyebrow}
                </span>
              </div>

              <h3
                className="
                  text-[clamp(3.2rem,7vw,7.5rem)]
                  font-medium
                  leading-[0.78]
                  tracking-[-0.09em]
                  text-white
                "
              >
                {solution.title}

                <br />

                <span className="text-white/45">
                  {solution.accent}
                </span>
              </h3>

              <p
                className="
                  mt-6
                  px-2
                  py-5
                  max-w-[390px]
                  text-[13px]
                  leading-6
                  text-white/65
                  md:text-[14px]
                "
              >
                {solution.description}
              </p>
            </div>
          </div>
        ))}

      

      
      </div>
    </section>
  );
}