"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    number: "01",
    name: "Healthcare",
    statement: "Intelligence for better decisions.",
    description:
      "AI systems that help healthcare organizations turn complex information into useful, actionable insight.",
    image: "/assets/industries/01.webp",
  },
  {
    number: "02",
    name: "Agriculture",
    statement: "Data that understands the field.",
    description:
      "Machine learning and predictive systems built around agricultural data, operations and outcomes.",
    image: "/assets/industries/02.webp",
  },
  {
    number: "03",
    name: "Education",
    statement: "Learning that adapts.",
    description:
      "Intelligent learning experiences that connect knowledge, personalization and engagement.",
    image: "/assets/industries/03.webp",
  },
  {
    number: "04",
    name: "Finance",
    statement: "Intelligence behind every decision.",
    description:
      "AI-powered systems for analysis, automation, customer experience and operational intelligence.",
    image: "/assets/industries/04.webp",
  },
  {
    number: "05",
    name: "SMEs",
    statement: "Enterprise intelligence without enterprise complexity.",
    description:
      "Practical AI systems designed around the unique workflows and resources of growing businesses.",
    image: "/assets/industries/05.webp",
  },
  {
    number: "06",
    name: "Startups & SaaS",
    statement: "Build intelligence into the product.",
    description:
      "AI-native product experiences and scalable systems designed to move quickly from idea to production.",
    image: "/assets/industries/06.webp",
  },
  {
    number: "07",
    name: "Retail & E-commerce",
    statement: "Every interaction becomes intelligent.",
    description:
      "Personalization, recommendations, customer support and automation designed for modern commerce.",
    image: "/assets/industries/07.webp",
  },
  {
    number: "08",
    name: "Professional Services",
    statement: "Automate expertise, not relationships.",
    description:
      "Intelligent workflows that help professional teams work faster without losing the human layer.",
    image: "/assets/industries/08.webp",
  },
];

export default function Industries() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const introRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const itemRefs = useRef<HTMLDivElement[]>([]);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const imageInnerRefs = useRef<HTMLDivElement[]>([]);
  const numberRefs = useRef<HTMLSpanElement[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const intro = introRef.current;
    const list = listRef.current;

    if (!section || !stage || !intro || !list) return;

    const ctx = gsap.context(() => {
      const items = itemRefs.current;
      const images = imageRefs.current;
      const imageInners = imageInnerRefs.current;
      const numbers = numberRefs.current;

      if (
        items.length !== industries.length ||
        images.length !== industries.length ||
        imageInners.length !== industries.length ||
        numbers.length !== industries.length
      ) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          mobile: "(max-width: 767px)",
          tablet: "(min-width: 768px) and (max-width: 1023px)",
          desktop: "(min-width: 1024px)",
        },
        (context) => {
          const { mobile, tablet } = context.conditions as {
            mobile: boolean;
            tablet: boolean;
            desktop: boolean;
          };

          /*
          ============================================================
          RESPONSIVE SETTINGS
          ============================================================
          */

          const targetRatio = mobile
            ? 0.27
            : tablet
              ? 0.34
              : 0.36;

          /*
          ============================================================
          CALCULATE ACTIVE INDUSTRY POSITION
          ============================================================
          */

          const getIndustryOffset = (index: number) => {
            const item = items[index];

            if (!item) return 0;

            const targetY = window.innerHeight * targetRatio;

            return targetY - item.offsetTop;
          };

          /*
          ============================================================
          INITIAL STATE
          ============================================================
          */

          gsap.set(intro, {
            autoAlpha: 0,
            y: mobile ? 45 : 70,
            scale: 1,
          });

          gsap.set(list, {
            autoAlpha: 0,
            y: 0,
          });

          gsap.set(items, {
            autoAlpha: 0,
            scale: 0.97,
          });

          gsap.set(images, {
            autoAlpha: 0,
            clipPath: "inset(10% 0% 10% 0%)",
          });

          /*
          ------------------------------------------------------------
          FIRST IMAGE

          Desktop/tablet:
          visible subtly during intro.

          Mobile:
          hidden until intro finishes.
          ------------------------------------------------------------
          */

         gsap.set(images[0], {
  autoAlpha: 1,
  clipPath: "inset(0% 0% 0% 0%)",
});

          /*
          ------------------------------------------------------------
          IMAGE CAMERA
          ------------------------------------------------------------
          */

          gsap.set(imageInners, {
            scale: 1.08,
          });

          gsap.set(imageInners[0], {
            scale: 1.05,
          });

          /*
          ------------------------------------------------------------
          NUMBERS
          ------------------------------------------------------------
          */

          gsap.set(numbers, {
            autoAlpha: 0,
          });

          /*
          ============================================================
          MASTER SCROLL TIMELINE
          ============================================================
          */

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              pin: stage,
              scrub: 0.8,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          /*
          ============================================================
          01 — INTRO ENTER
          ============================================================
          */

          timeline.to(intro, {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          });

          /*
          ============================================================
          INTRO HOLD
          ============================================================
          */

          timeline.to({}, {
            duration: mobile ? 0.4 : 0.45,
          });

          /*
          ============================================================
          INTRO EXIT
          ============================================================
          */

          timeline.to(intro, {
            autoAlpha: 0,
            y: mobile ? -55 : -70,
            scale: mobile ? 0.98 : 0.96,
            duration: 0.55,
            ease: "power3.inOut",
          });

          /*
          ============================================================
          02 — SHOW INDUSTRY LIST
          ============================================================
          */

          timeline.set(list, {
            autoAlpha: 1,
          });

          /*
          ============================================================
          03 — FIRST INDUSTRY
          ============================================================
          */

          timeline.to(items[0], {
            autoAlpha: 1,
            scale: 1,
            duration: 0.45,
            ease: "power3.out",
          });

          /*
          ------------------------------------------------------------
          POSITION FIRST INDUSTRY
          ------------------------------------------------------------
          */

          timeline.to(
            list,
            {
              y: () => getIndustryOffset(0),
              duration: 0.45,
              ease: "power3.out",
            },
            "<"
          );

          /*
          ------------------------------------------------------------
          FIRST IMAGE REVEAL
          ------------------------------------------------------------
          */

      timeline.fromTo(
  images[0],
  {
    autoAlpha: 1,
    clipPath: "inset(0% 0% 0% 0%)",
  },
  {
    autoAlpha: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    duration: 0.65,
    ease: "power3.inOut",
  },
  "<0.05"
);

          /*
          ------------------------------------------------------------
          FIRST IMAGE CAMERA
          ------------------------------------------------------------
          */

          timeline.fromTo(
            imageInners[0],
            {
              scale: 1.05,
            },
            {
              scale: 1,
              duration: 0.75,
              ease: "power2.out",
            },
            "<"
          );

          /*
          ------------------------------------------------------------
          FIRST NUMBER
          ------------------------------------------------------------
          */

          timeline.to(
            numbers[0],
            {
              autoAlpha: 1,
              duration: 0.15,
            },
            "<0.15"
          );

          /*
          ============================================================
          04 — INDUSTRY TRANSITIONS
          ============================================================
          */

          industries.forEach((_, index) => {
            if (index === 0) return;

            const previousItem = items[index - 1];
            const currentItem = items[index];

            const previousImage = images[index - 1];
            const currentImage = images[index];

            const currentInner = imageInners[index];

            const previousNumber = numbers[index - 1];
            const currentNumber = numbers[index];

            /*
            ----------------------------------------------------------
            HOLD
            ----------------------------------------------------------
            */

            timeline.to({}, {
              duration: mobile ? 0.3 : 0.35,
            });

            /*
            ----------------------------------------------------------
            MOVE LIST
            ----------------------------------------------------------
            */

            timeline.to(list, {
              y: () => getIndustryOffset(index),
              duration: mobile ? 0.6 : 0.7,
              ease: "power3.inOut",
            });

            /*
            ----------------------------------------------------------
            PREVIOUS ITEM DIM
            ----------------------------------------------------------
            */

            timeline.to(
              previousItem,
              {
                autoAlpha: 0.18,
                scale: 0.97,
                duration: 0.35,
                ease: "power2.out",
              },
              "<0.08"
            );

            /*
            ----------------------------------------------------------
            CURRENT ITEM ACTIVE
            ----------------------------------------------------------
            */

            timeline.to(
              currentItem,
              {
                autoAlpha: 1,
                scale: 1,
                duration: 0.45,
                ease: "power3.out",
              },
              "<0.12"
            );

            /*
            ----------------------------------------------------------
            PREVIOUS IMAGE EXIT
            ----------------------------------------------------------
            */

            timeline.to(
              previousImage,
              {
                autoAlpha: 0,
                clipPath: "inset(8% 0% 8% 0%)",
                duration: 0.42,
                ease: "power2.inOut",
              },
              "<0.02"
            );

            /*
            ----------------------------------------------------------
            CURRENT IMAGE ENTER
            ----------------------------------------------------------
            */

            timeline.fromTo(
              currentImage,
              {
                autoAlpha: 0,
                clipPath: "inset(12% 0% 12% 0%)",
              },
              {
                autoAlpha: 1,
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 0.65,
                ease: "power3.inOut",
              },
              "<0.12"
            );

            /*
            ----------------------------------------------------------
            IMAGE CAMERA
            ----------------------------------------------------------
            */

            timeline.fromTo(
              currentInner,
              {
                scale: 1.08,
              },
              {
                scale: 1,
                duration: 0.75,
                ease: "power2.out",
              },
              "<"
            );

            /*
            ----------------------------------------------------------
            PREVIOUS NUMBER
            ----------------------------------------------------------
            */

            timeline.to(
              previousNumber,
              {
                autoAlpha: 0,
                duration: 0.12,
              },
              "<0.05"
            );

            /*
            ----------------------------------------------------------
            CURRENT NUMBER
            ----------------------------------------------------------
            */

            timeline.to(
              currentNumber,
              {
                autoAlpha: 1,
                duration: 0.12,
              },
              "<0.08"
            );
          });

          /*
          ============================================================
          05 — FINAL INDUSTRY
          ============================================================
          */

          const lastIndex = industries.length - 1;

          timeline.to(list, {
            y: () => getIndustryOffset(lastIndex),
            duration: 0.45,
            ease: "power3.out",
          });

          timeline.to(
            items[lastIndex],
            {
              autoAlpha: 1,
              scale: 1,
              duration: 0.2,
              ease: "power2.out",
            },
            "<"
          );

          /*
          ============================================================
          FINAL HOLD
          ============================================================
          */

          timeline.to({}, {
            duration: mobile ? 0.25 : 0.28,
          });

          /*
          ============================================================
          REFRESH
          ============================================================
          */

          requestAnimationFrame(() => {
            ScrollTrigger.refresh();
          });
        }
      );

      return () => {
        mm.revert();
      };
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="industries"
      data-navbar-theme="light"
      className="
        relative
        h-[900vh]
        w-full
        overflow-hidden
        bg-[#f4f4f1]
        text-[#080808]

        md:h-[950vh]

        lg:h-[1000vh]
      "
    >
      <div
        ref={stageRef}
        className="
          relative
          h-[100svh]
          w-full
          overflow-hidden
          bg-[#f4f4f1]

          md:h-screen
        "
      >
        {/* ==========================================================
            INTRO
        ========================================================== */}

        <div
          ref={introRef}
          className="
            absolute
            inset-0
            z-[100]
            flex
            items-center
            px-5

            sm:px-7

            md:px-10

            lg:px-16
          "
        >
          <div
            className="
              w-full
              max-w-[1050px]

}
            "
          >
            {/* Label */}

            <div
              className="
                mb-6
                flex
                items-center
                gap-3

                sm:mb-8
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-black/35
                "
              />

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.24em]
                  text-black/40

                  sm:text-[9px]
                "
              >
                Industries
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                max-w-[900px]
                text-[clamp(3.6rem,14vw,5.8rem)]
                font-medium
                leading-[0.78]
                tracking-[-0.09em]

                sm:text-[clamp(4.5rem,11vw,7rem)]

                md:text-[clamp(5.5rem,9.5vw,10rem)]
              "
            >
              Intelligence
              <br />
              for every
              <br />
              <span className="text-black/25">
                industry.
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-[330px]
                text-[12px]
                leading-6
                text-black/40

                sm:mt-9
                sm:max-w-[430px]
                sm:text-[14px]
                sm:leading-7

                md:text-[15px]
              "
            >
              Different industries. Different constraints.
              The same principle — intelligence built around
              how the business actually works.
            </p>
          </div>
        </div>

        {/* ==========================================================
            MOBILE INDUSTRY LIST
        ========================================================== */}

        <div
          ref={listRef}
          className="
            absolute
            left-5
            top-[20vh]
            z-30
            w-[calc(100%-40px)]
            will-change-transform
            opacity-0

            sm:left-7
            sm:top-[20vh]
            sm:w-[calc(100%-56px)]

            md:left-[6vw]
            md:top-[34vh]
            md:w-[52vw]

            lg:left-[6vw]
            lg:w-[52vw]
          "
        >
          {industries.map((industry, index) => (
            <div
              key={industry.number}
              ref={(el) => {
                if (el) {
                  itemRefs.current[index] = el;
                }
              }}
              className="
                group
                flex
                min-h-[62px]
                items-baseline
                gap-3
                border-b
                border-black/[0.08]
                py-3
                will-change-transform

                sm:min-h-[68px]
                sm:gap-4

                md:min-h-[7.5vw]
                md:gap-5
              "
            >
              {/* Number */}

              <span
                ref={(el) => {
                  if (el) {
                    numberRefs.current[index] = el;
                  }
                }}
                className="
                  w-6
                  shrink-0
                  text-[8px]
                  uppercase
                  tracking-[0.18em]
                  text-black/35

                  sm:w-7
                  sm:text-[9px]
                "
              >
                {industry.number}
              </span>

              {/* Industry */}

              <div className="min-w-0 flex-1">
                <h3
                  className="
                    max-w-full
                    text-[clamp(2rem,9vw,3.4rem)]
                    font-medium
                    leading-[0.82]
                    tracking-[-0.075em]

                    sm:text-[clamp(2.2rem,7vw,3.8rem)]

                    md:text-[clamp(2.6rem,6.3vw,4.8rem)]
                  "
                >
                  {industry.name}
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[300px]
                    text-[9px]
                    leading-5
                    text-black/35

                    sm:mt-3
                    sm:text-[10px]

                    md:max-w-[390px]
                    md:text-[12px]
                  "
                >
                  {industry.statement}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ==========================================================
            IMAGE WINDOW
        ========================================================== */}

   <div
  className="
    absolute
    left-5
    right-5
    bottom-[2vh]
    z-20
    h-[27vh]
    overflow-hidden
    bg-black

    sm:left-7
    sm:right-7
    sm:bottom-[3vh]
    sm:h-[27vh]

    md:left-auto
    md:right-[5vw]
    md:top-1/2
    md:bottom-auto
    md:h-[58vh]
    md:w-[38vw]
    md:-translate-y-1/2

    lg:right-[5vw]
    lg:h-[58vh]
    lg:w-[38vw]
  "
>
          {industries.map((industry, index) => (
            <div
              key={industry.number}
              ref={(el) => {
                if (el) {
                  imageRefs.current[index] = el;
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
              {/* Image */}

              <div
                ref={(el) => {
                  if (el) {
                    imageInnerRefs.current[index] = el;
                  }
                }}
                className="
                  absolute
                  inset-0
                  will-change-transform
                "
              >
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="
                    (max-width: 767px) 100vw,
                    (max-width: 1023px) 100vw,
                    38vw
                  "
                  className="
                    object-cover
                    grayscale
                  "
                />
              </div>

              {/* Overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-black/[0.08]
                "
              />

              {/* Top label */}

              <div
                className="
                  absolute
                  left-4
                  top-4
                  z-10
                  text-[7px]
                  uppercase
                  tracking-[0.2em]
                  text-white/60

                  sm:left-5
                  sm:top-5
                  sm:text-[8px]
                "
              >
                MENTROID / {industry.number}
              </div>

              {/* Bottom label */}

              <div
                className="
                  absolute
                  bottom-4
                  right-4
                  z-10
                  max-w-[70%]
                  text-right
                  text-[7px]
                  uppercase
                  tracking-[0.2em]
                  text-white/60

                  sm:bottom-5
                  sm:right-5
                  sm:text-[8px]
                "
              >
                {industry.name}
              </div>
            </div>
          ))}
        </div>

        {/* ==========================================================
            SIDE DESCRIPTION — DESKTOP ONLY
        ========================================================== */}

        <div
          className="
            absolute
            bottom-[8vh]
            right-[22vw]
            z-40
            hidden
            max-w-[320px]

            lg:block
          "
        >
          <p
            className="
              text-[14px]
              leading-6
              text-black/40
            "
          >
            Intelligence becomes useful when it understands
            the environment around it.
          </p>

          <div
            className="
              mt-5
              flex
              items-center
              gap-2
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-black/35
            "
          >
            <span>Explore industries</span>

            <ArrowUpRight size={12} />
          </div>
        </div>
      </div>
    </section>
  );
}