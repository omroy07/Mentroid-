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

      /*
      ============================================================
      SAFETY CHECK
      ============================================================
      */

      if (
        items.length !== industries.length ||
        images.length !== industries.length ||
        imageInners.length !== industries.length ||
        numbers.length !== industries.length
      ) {
        return;
      }

      /*
      ============================================================
      IMPORTANT:
      Calculate the movement from the REAL item position.
      This prevents the last SMEs item from ending too low.
      ============================================================
      */

    const getIndustryOffset = (index: number) => {
  const item = items[index];

  if (!item) return 0;

  /*
   * Position the active industry around 40% of
   * the viewport.
   *
   * No artificial clamp here.
   * The previous clamp was preventing the final
   * SMEs item from reaching the focal position.
   */
const targetY = window.innerHeight * 0.36;
  return targetY - item.offsetTop;
};

      /*
      ============================================================
      INITIAL STATE
      ============================================================
      */

      // Intro starts invisible.
      gsap.set(intro, {
        autoAlpha: 0,
        y: 70,
        scale: 1,
      });

      // Industry list completely hidden.
      gsap.set(list, {
        autoAlpha: 0,
        y: 0,
      });

      // All industry items hidden.
      gsap.set(items, {
        autoAlpha: 0,
        scale: 0.97,
      });

    // All images hidden initially.
gsap.set(images, {
  autoAlpha: 0,
  clipPath: "inset(10% 0% 10% 0%)",
});

// The first industry image is already visible
// during the intro.
gsap.set(images[0], {
  autoAlpha: 1,
  clipPath: "inset(0% 0% 0% 0%)",
});

gsap.set(imageInners, {
  scale: 1.1,
});

// First image has a subtle camera position
// during the intro.
gsap.set(imageInners[0], {
  scale: 1.06,
});

      // Counters hidden.
      gsap.set(numbers, {
        autoAlpha: 0,
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

          /*
          IMPORTANT:
          We use the complete section height as the scroll range.
          This prevents unused blank scroll space after SMEs.
          */

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
        duration: 0.45,
      });

      /*
      ============================================================
      02 — INTRO EXIT
      ============================================================
      */

      timeline.to(intro, {
        autoAlpha: 0,
        y: -70,
        scale: 0.96,
        duration: 0.55,
        ease: "power3.inOut",
      });

      /*
      ============================================================
      03 — SHOW INDUSTRY LIST
      ============================================================
      */

      timeline.set(list, {
        autoAlpha: 1,
      });

      /*
      ============================================================
      04 — FIRST INDUSTRY
      ============================================================
      */

      timeline.to(items[0], {
        autoAlpha: 1,
        scale: 1,
        duration: 0.45,
        ease: "power3.out",
      });

      /*
      Position first item properly.
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
      First image.
      */

     timeline.fromTo(
  imageInners[0],
  {
    scale: 1.06,
  },
  {
    scale: 1,
    duration: 0.75,
    ease: "power2.out",
  },
  "<"
);
      /*
      First image camera movement.
      */

      timeline.fromTo(
        imageInners[0],
        {
          scale: 1.1,
        },
        {
          scale: 1,
          duration: 0.75,
          ease: "power2.out",
        },
        "<"
      );

      /*
      First number.
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
      05 — INDUSTRY TRANSITIONS
      ============================================================
      */

      industries.forEach((_, index) => {
        if (index === 0) return;

        const previousItem = items[index - 1];
        const currentItem = items[index];

        const previousImage = images[index - 1];
        const currentImage = images[index];

        const previousInner = imageInners[index - 1];
        const currentInner = imageInners[index];

        const previousNumber = numbers[index - 1];
        const currentNumber = numbers[index];

        /*
        ------------------------------------------------------------
        HOLD CURRENT SCENE
        ------------------------------------------------------------
        */

        timeline.to({}, {
          duration: 0.35,
        });

        /*
        ------------------------------------------------------------
        MOVE LIST TO REAL POSITION
        ------------------------------------------------------------
        */

        timeline.to(
          list,
          {
            y: () => getIndustryOffset(index),
            duration: 0.7,
            ease: "power3.inOut",
          }
        );

        /*
        ------------------------------------------------------------
        PREVIOUS INDUSTRY DIM
        ------------------------------------------------------------
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
        ------------------------------------------------------------
        CURRENT INDUSTRY ACTIVE
        ------------------------------------------------------------
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
        ------------------------------------------------------------
        PREVIOUS IMAGE EXIT
        ------------------------------------------------------------
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
        ------------------------------------------------------------
        CURRENT IMAGE ENTER
        ------------------------------------------------------------
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
        ------------------------------------------------------------
        IMAGE CAMERA ZOOM
        ------------------------------------------------------------
        */

        timeline.fromTo(
          currentInner,
          {
            scale: 1.1,
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
        COUNTER
        ------------------------------------------------------------
        */

        timeline.to(
          previousNumber,
          {
            autoAlpha: 0,
            duration: 0.12,
          },
          "<0.05"
        );

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
      06 — FINAL SMEs POSITION
      ============================================================
      */

      const lastIndex = industries.length - 1;

      /*
      Force the final item to its exact focal position.
      */

      timeline.to(
        list,
        {
          y: () => getIndustryOffset(lastIndex),
          duration: 0.45,
          ease: "power3.out",
        }
      );

      /*
      Final active state.
      */

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
      Short final breathing room.
      */

      timeline.to({}, {
        duration: 0.28,
      });

      /*
      IMPORTANT:
      There is NO stage fade-out here.

      The final frame remains visible until the section
      naturally ends and the next section enters.
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
      id="industries"
      data-navbar-theme="light"
      className="
        relative
        h-[850vh]
        -mt-[20vh]
        w-full
        overflow-hidden
        bg-[#f4f4f1]
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
          bg-[#f4f4f1]
        "
      >
       

    

        {/* ======================================================
            INTRO
        ======================================================= */}

        <div
          ref={introRef}
          className="
            absolute
            inset-0
            z-[100]
            flex
            items-center
            px-6

            md:px-10

            lg:px-16
          "
        >
          <div className="max-w-[1050px]">
            {/* Label */}

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
                  text-[9px]
                  uppercase
                  tracking-[0.24em]
                  text-black/40
                "
              >
                Industries
              </span> */}
            </div>

            {/* Heading */}

            <h2
              className="
                text-[clamp(4.5rem,10vw,10rem)]
                font-medium
                leading-[0.76]
                tracking-[-0.09em]
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
                mt-10
                max-w-[430px]
                text-[14px]
                leading-7
                text-black/40

                md:text-[15px]
              "
            >
              Different industries. Different constraints.
              The same principle — intelligence built around
              how the business actually works.
            </p>
          </div>
        </div>

        {/* ======================================================
            INDUSTRY LIST
        ======================================================= */}

       <div
  ref={listRef}
  className="
    absolute
    left-[6vw]
    top-[34vh]
    z-30
    w-[52vw]
    will-change-transform
    opacity-0

    max-md:left-6
    max-md:top-[26vh]
    max-md:w-[calc(100vw-48px)]
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
                min-h-[7.5vw]
                items-baseline
                gap-5
                border-b
                border-black/[0.08]
                py-3
                will-change-transform

                max-md:min-h-[15vw]
                max-md:py-3
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
                  w-7
                  shrink-0
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-black/35
                "
              >
                {industry.number}
              </span>

              {/* Industry content */}

              <div className="min-w-0">
                <h3
                  className="
                    text-[clamp(2.6rem,6.3vw,4.8rem)]
                    font-medium
                    leading-[0.82]
                    tracking-[-0.075em]
                  "
                >
                  {industry.name}
                </h3>

                <p
                  className="
                    mt-3
                    max-w-[390px]
                    text-[11px]
                    leading-5
                    text-black/35

                    md:text-[12px]
                  "
                >
                  {industry.statement}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ======================================================
            IMAGE WINDOW
        ======================================================= */}

        <div
          className="
            absolute
            right-[5vw]
            top-1/2
            z-20
            h-[58vh]
            w-[38vw]
            max-w-[650px]
            -translate-y-1/2
            overflow-hidden
            bg-black

            max-md:left-6
            max-md:right-6
            max-md:top-auto
            max-md:bottom-[8vh]
            max-md:h-[30vh]
            max-md:w-auto
            max-md:max-w-none
            max-md:translate-y-0
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
              {/* Image inner */}

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
                  priority={index === 0}
                  sizes="(max-width: 768px) calc(100vw - 48px), 38vw"
                  className="
                    object-cover
                    grayscale
                  "
                />
              </div>

              {/* Image overlay */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-black/[0.08]
                "
              />

              {/* Image top label */}

              <div
                className="
                  absolute
                  left-5
                  top-5
                  z-10
                  text-[8px]
                  uppercase
                  tracking-[0.2em]
                  text-white/60
                "
              >
                MENTROID / {industry.number}
              </div>

              {/* Image bottom label */}

              <div
                className="
                  absolute
                  bottom-5
                  right-5
                  z-10
                  text-[8px]
                  uppercase
                  tracking-[0.2em]
                  text-white/60
                "
              >
                {industry.name}
              </div>
            </div>
          ))}
        </div>

        {/* ======================================================
            SIDE DESCRIPTION
        ======================================================= */}

        <div
          className="
            absolute
            bottom-[8vh]
            right-[22vw]
            z-40
            max-w-[320px]

            max-md:hidden
          "
        >
          {/* <div className="mb-4 h-px w-10 bg-black/25" /> */}

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