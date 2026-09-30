"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
  id: "left",
  image: "/assets/solutions/01.jpg",
  eyebrow: "AI & ML SOLUTIONS",
  title: "Intelligence.\nBuilt to scale.",
  description: "AI systems, machine learning models, and intelligent workflows built around real business needs.",
  number: "15+",
},

{
  id: "middle",
  eyebrow: "PROJECTS COMPLETED",
  number: "4+",
  description: "From intelligent automation to custom AI solutions, we turn complex ideas into working products.",
},

{
  id: "right",
  image: "/assets/solutions/02.jpg",
  eyebrow: "OUR TEAM",
  title: "Different minds.\nOne vision.",
  number: "14+",
},
];

const partners = [
  "Credible",
  "Yellowtail",
  "UX Design",
  "Techni",
  "Octo",
];

export default function KeyFacts() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const stripsRef = useRef<HTMLDivElement[]>([]);

  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const cardImageRefs = useRef<HTMLDivElement[]>([]);
  const cardContentRefs = useRef<HTMLDivElement[]>([]);

  const partnersRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;

    if (!section || !stage) return;

    const ctx = gsap.context(() => {
      const strips = stripsRef.current;
      const cardsEls = cardRefs.current;
      const images = cardImageRefs.current;
      const contents = cardContentRefs.current;

      const heading = headingRef.current;
      const partnersEl = partnersRef.current;

      if (
        strips.length !== 7 ||
        cardsEls.length !== 3 ||
        images.length !== 3 ||
        contents.length !== 3 ||
        !heading ||
        !partnersEl
      ) {
        return;
      }

      const mm = gsap.matchMedia();

      /* ============================================================
         DESKTOP
      ============================================================ */

      mm.add("(min-width: 769px)", () => {
        /*
         * ----------------------------------------------------------
         * INITIAL STATE
         * ----------------------------------------------------------
         */

        /*
         * The actual reference begins with horizontal strips
         * covering the section.
         */
        gsap.set(strips, {
          xPercent: 0,
        });

        /*
         * Heading starts slightly below.
         */
        gsap.set(heading, {
          opacity: 0,
          y: 35,
        });

        /*
         * CARD INITIAL POSITIONS
         *
         * They are deliberately much smaller than the previous
         * version.
         *
         * All three originate around the center.
         */
   /* ============================================================
   CARDS — INITIAL
   NO HORIZONTAL MOVEMENT
============================================================ */

gsap.set(cardsEls, {
  x: 0,
  opacity: 0,
  transformOrigin: "50% 50%",
});

gsap.set(cardsEls[0], {
  y: 30,
  scale: 0.94,
});

gsap.set(cardsEls[1], {
  y: 40,
  scale: 0.94,
});

gsap.set(cardsEls[2], {
  y: 30,
  scale: 0.94,
});

        /*
         * Images start zoomed.
         */
        // gsap.set(images, {
        //   scale: 1.12,
        // });

        /*
         * Card text starts hidden.
         */
        gsap.set(contents, {
          opacity: 0,
          y: 12,
        });

        /*
         * Partners hidden.
         */
        // gsap.set(partnersEl, {
        //   opacity: 0,
        //   y: 15,
        // });

        /* ============================================================
           MASTER TIMELINE
        ============================================================ */

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${window.innerHeight * 5.8}`,
            pin: stage,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        /* ============================================================
           01 — STRIPS HOLD
        ============================================================ */

        tl.to({}, {
          duration: 0.35,
        });

        /* ============================================================
           02 — STRIPS EXIT
           
           THIS IS THE IMPORTANT PART.

           Alternating strips move in opposite directions,
           creating the exact horizontal band reveal.
        ============================================================ */

        tl.to(
          strips,
          {
            xPercent: (index) =>
              index % 2 === 0 ? -110 : 110,

            duration: 1.0,

            stagger: {
              each: 0.07,
            },

            ease: "power4.inOut",
          }
        );

        /* ============================================================
           03 — KEY FACTS HEADING
        ============================================================ */

        tl.to(
          heading,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.45"
        );

        /* ============================================================
           04 — LEFT CARD ENTER
        ============================================================ */

       /* ============================================================
   CARDS ENTER
   SAME HORIZONTAL POSITION — NO SPREAD
============================================================ */

tl.to(
  cardsEls,
  {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    duration: 0.8,
    stagger: 0.06,
    ease: "power4.out",
  },
  "-=0.35"
);

        /* ============================================================
           07 — IMAGE SETTLE
        ============================================================ */

        tl.to(
          images,
          {
            scale: 1,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.4"
        );

        /* ============================================================
           08 — CARD CONTENT
        ============================================================ */

        tl.to(
          contents,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.3"
        );

        /* ============================================================
           09 — PARTNERS
        ============================================================ */

        tl.to(
          partnersEl,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "+=0.25"
        );

        /* ============================================================
           10 — HOLD
        ============================================================ */

        tl.to({}, {
          duration: 1.2,
        });

        /* ============================================================
           11 — EXIT
        ============================================================ */

       /* ============================================================
   CARDS ENTER INTO THEIR GRID POSITIONS
============================================================ */

tl.to(
  cardsEls,
  {
    x: 0,
    y: 0,
    scale: 1,
    rotationZ: 0,
    opacity: 1,
    duration: 0.85,
    stagger: 0.08,
    ease: "power4.out",
  },
  "-=0.35"
);

        tl.to(
          partnersEl,
          {
            opacity: 0,
            y: -20,
            duration: 0.45,
          },
          "<0.15"
        );

        /*
         * Strips come back at the end so that the next section
         * can transition through the same visual language.
         */
        tl.to(
          strips,
          {
            xPercent: 0,
            duration: 0.9,
            stagger: {
              each: 0.07,
            },
            ease: "power4.inOut",
          },
          "-=0.15"
        );
      });

      /* ============================================================
         MOBILE
      ============================================================ */

      mm.add("(max-width: 768px)", () => {
        gsap.set(strips, {
          xPercent: 0,
        });

        gsap.set(heading, {
          opacity: 0,
          y: 25,
        });

        gsap.set(cardsEls, {
          x: 0,
          y: 50,
          scale: 0.88,
          opacity: 0,
          rotationZ: 0,
        });

        gsap.set(images, {
          scale: 1.08,
        });

        gsap.set(contents, {
          opacity: 0,
          y: 10,
        });

        gsap.set(partnersEl, {
          opacity: 0,
          y: 10,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${window.innerHeight * 5.4}`,
            pin: stage,
            scrub: 0.75,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        /*
         * STRIP ENTRY
         */
        tl.to(
          strips,
          {
            xPercent: (index) =>
              index % 2 === 0 ? -110 : 110,

            duration: 0.9,

            stagger: {
              each: 0.06,
            },

            ease: "power4.inOut",
          }
        );

        /*
         * TITLE
         */
        tl.to(
          heading,
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
          },
          "-=0.3"
        );

        /*
         * CARDS
         */
        tl.to(
          cardsEls,
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "power4.out",
          },
          "-=0.15"
        );

        tl.to(
          images,
          {
            scale: 1,
            duration: 0.5,
          },
          "<"
        );

        tl.to(
          contents,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.06,
          },
          "-=0.15"
        );

        tl.to(
          partnersEl,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
          },
          "+=0.25"
        );

        tl.to({}, {
          duration: 0.9,
        });

        /*
         * EXIT
         */
        tl.to(cardsEls, {
          y: -35,
          scale: 0.93,
          opacity: 0,
          duration: 0.6,
          stagger: 0.06,
        });

        tl.to(
          partnersEl,
          {
            opacity: 0,
            y: -15,
            duration: 0.3,
          },
          "<0.1"
        );

        /*
         * STRIPS RETURN
         */
        tl.to(
          strips,
          {
            xPercent: 0,
            duration: 0.8,
            stagger: {
              each: 0.06,
            },
            ease: "power4.inOut",
          },
          "-=0.1"
        );
      });

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
      id="mentroid-proof"
      className="
        relative
        h-[620vh]
        w-full
        -mt-[120vh]
        overflow-hidden
        bg-[#f1f1ef]
        text-[#111]
      "
    >
      <div
        ref={stageRef}
        className="
          relative
          h-screen
          w-full
          overflow-hidden
          bg-[#D8D8D8]
        "
      >
        {/* =========================================================
            TOP NAV / META
        ========================================================= */}

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
          

         
        </div>

        {/* =========================================================
            HORIZONTAL STRIP TRANSITION
        ========================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[90]
            overflow-hidden
          "
          aria-hidden="true"
        >
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  stripsRef.current[index] = el;
                }
              }}
              className="
                absolute
                left-0
                w-full
                overflow-hidden
                bg-[#111]
                will-change-transform
              "
              style={{
                top: `${(index / 7) * 100}%`,
                height: `${100 / 7 + 0.25}%`,
              }}
            />
          ))}
        </div>

        {/* =========================================================
            HEADING
        ========================================================= */}

        <div
          ref={headingRef}
          className="
            absolute
            left-1/2
            top-[6vh]
            z-20
            w-full
            -translate-x-1/2
            text-center
          "
        >
          <h2
            className="
              text-[clamp(2.5rem,4vw,5.5rem)]
              font-medium
              leading-none
              tracking-[-0.07em]
            "
          >
            Key facts
          </h2>

          <p
            className="
              mx-auto
              mt-2
              max-w-[280px]
              text-[9px]
              leading-[1.4]
              text-black/45
              md:text-[12px]
            "
          >
            A snapshot of our
            <br />
            experience and impact.
          </p>
        </div>
{/* =======================================================
    CARDS
======================================================= */}

{/* =======================================================
    CARDS
======================================================= */}

<div
  className="
    absolute
    left-1/2
    top-[28%]
    z-30
    w-full
    -translate-x-1/2
  "
>
  <div
    className="
      mx-auto
      grid
      w-[calc(100%-80px)]
      max-w-[980px]
      grid-cols-3
        gap-2
      md:gap-[10px]
      lg:gap-[12px]
  "
  >

    {/* =======================================================
        CARD 01
    ======================================================= */}

    <article
      ref={(el) => {
        if (el) cardRefs.current[0] = el;
      }}
      className="
        relative
        h-[260px]
        w-full
        overflow-hidden
        rounded-[10px]
        bg-[#202124]
        shadow-[0_20px_50px_rgba(0,0,0,0.08)]
        will-change-transform
        md:h-[390px]
      "
    >
      {/* IMAGE */}
      <div
        ref={(el) => {
          if (el) cardImageRefs.current[0] = el;
        }}
        className="
          absolute
          inset-0
          will-change-transform
        "
      >
        <Image
          src={cards[0].image}
          alt="Mentroid featured work"
          fill
          sizes="(max-width: 768px) calc(100vw - 40px), 33vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* CONTENT */}
      <div
        ref={(el) => {
          if (el) cardContentRefs.current[0] = el;
        }}
        className="
          absolute
          inset-x-6
          bottom-6
          z-10
        "
      >
        <p
          className="
            mb-2
            text-[7px]
            uppercase
            tracking-[0.16em]
            text-white/55
          "
        >
          {cards[0].eyebrow}
        </p>

        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <h3
              className="
                text-[28px]
                font-medium
                leading-[0.9]
                tracking-[-0.07em]
                text-white
                md:text-[34px]
              "
            >
              {cards[0].title}
            </h3>

            <p
              className="
                mt-3
                max-w-[150px]
                text-[8px]
                leading-[1.45]
                text-white/55
                md:text-[9px]
              "
            >
              {cards[0].description}
            </p>
          </div>

          <span
            className="
              shrink-0
              text-[30px]
              font-medium
              leading-none
              tracking-[-0.08em]
              text-white
              md:text-[36px]
            "
          >
            {cards[0].number}
          </span>
        </div>
      </div>
    </article>


    {/* =======================================================
        CARD 02 — METRIC
    ======================================================= */}

    <article
      ref={(el) => {
        if (el) cardRefs.current[1] = el;
      }}
      className="
        relative
        h-[260px]
        w-full
        overflow-hidden
        rounded-[10px]
        bg-[#e5e5e2]
        shadow-[0_20px_50px_rgba(0,0,0,0.05)]
        will-change-transform
        md:h-[390px]
      "
    >
      <div
        ref={(el) => {
          if (el) cardImageRefs.current[1] = el;
        }}
        className="
          absolute
          inset-0
          will-change-transform
        "
      >

        {/* TOP LABEL */}

        <div
          className="
            absolute
            left-6
            right-6
            top-6
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-[7px]
              uppercase
              tracking-[0.16em]
              text-black/40
            "
          >
            {cards[1].eyebrow}
          </span>

          <span
            className="
              text-[7px]
              uppercase
              tracking-[0.12em]
              text-black/25
            "
          >
            02
          </span>
        </div>


        {/* CENTER NUMBER */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            flex
            h-[125px]
            w-[125px]
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-[0_15px_45px_rgba(0,0,0,0.06)]
            md:h-[150px]
            md:w-[150px]
          "
        >
          <span
            className="
              text-[34px]
              font-medium
              tracking-[-0.08em]
              text-black
              md:text-[42px]
            "
          >
            {cards[1].number}
          </span>
        </div>


        {/* BOTTOM DESCRIPTION */}

        <p
          className="
            absolute
            bottom-6
            left-8
            right-8
            text-center
            text-[8px]
            leading-[1.5]
            text-black/40
            md:text-[9px]
          "
        >
          {cards[1].description}
        </p>

      </div>
    </article>


    {/* =======================================================
        CARD 03
    ======================================================= */}

    <article
      ref={(el) => {
        if (el) cardRefs.current[2] = el;
      }}
      className="
        relative
        h-[260px]
        w-full
        overflow-hidden
        rounded-[10px]
        bg-[#242528]
        shadow-[0_20px_50px_rgba(0,0,0,0.08)]
        will-change-transform
        md:h-[390px]
      "
    >

      {/* IMAGE */}

      <div
        ref={(el) => {
          if (el) cardImageRefs.current[2] = el;
        }}
        className="
          absolute
          inset-0
          will-change-transform
        "
      >
        <Image
          src={cards[2].image}
          alt="Mentroid team"
          fill
          sizes="(max-width: 768px) calc(100vw - 40px), 33vw"
          className="
            object-cover
            grayscale
          "
        />

        <div className="absolute inset-0 bg-black/35" />
      </div>


      {/* CONTENT */}

      <div
        ref={(el) => {
          if (el) cardContentRefs.current[2] = el;
        }}
        className="
          absolute
          inset-x-6
          bottom-6
          z-10
        "
      >
        <p
          className="
            mb-2
            text-[7px]
            uppercase
            tracking-[0.16em]
            text-white/50
          "
        >
          {cards[2].eyebrow}
        </p>

        <div className="flex items-end justify-between gap-4">

          <h3
            className="
              whitespace-pre-line
              text-[22px]
              font-medium
              leading-[0.9]
              tracking-[-0.06em]
              text-white
              md:text-[28px]
            "
          >
            {cards[2].title}
          </h3>

          <span
            className="
              shrink-0
              text-[30px]
              font-medium
              leading-none
              tracking-[-0.08em]
              text-white
              md:text-[36px]
            "
          >
            {cards[2].number}
          </span>

        </div>
      </div>

    </article>

  </div>
</div>

        {/* =========================================================
            PARTNERS
        ========================================================= */}

        <div
          ref={partnersRef}
          className="
            absolute
            bottom-[5vh]
            left-1/2
            z-40
            w-full
            -translate-x-1/2
            px-5
          "
        >
          <p
            className="
              mb-4
              text-center
              text-[16px]
              font-bold
              uppercase
              
              text-black/85
            "
          >
            OUR BUSINESS PARTNERS
          </p>

          <div
            className="
              mx-auto
              flex
              max-w-[500px]
              items-center
              justify-center
              gap-8
              md:gap-12
            "
          >
            {partners.map((partner) => (
              <span
                key={partner}
                className="
                  whitespace-nowrap
                  text-[6px]
                  font-medium
                  uppercase
                  tracking-[0.08em]
                  text-black/45
                "
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}