"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: "left",
    image: "/assets/solutions/01.webp",
    eyebrow: "AI & ML SOLUTIONS",
    title: "Intelligence.\nBuilt to scale.",
    description:
      "AI systems, machine learning models, and intelligent workflows built around real business needs.",
    number: "15+",
    type: "image" as const,
  },
  {
    id: "middle",
    eyebrow: "PROJECTS COMPLETED",
    number: "4+",
    description:
      "From intelligent automation to custom AI solutions, we turn complex ideas into working products.",
    type: "metric" as const,
  },
  {
    id: "right",
    image: "/assets/solutions/02.webp",
    eyebrow: "OUR TEAM",
    title: "Different minds.\nOne vision.",
    number: "14+",
    type: "image" as const,
  },
];

const partners = [
  {
    name: "Credible",
    logo: "/assets/partners/01.png",
  },
  {
    name: "Yellowtail",
    logo: "/assets/partners/02.png",
  },
  {
    name: "UX Design",
    logo: "/assets/partners/03.png",
  },
  {
    name: "Techni",
    logo: "/assets/partners/04.png",
  },
  {
    name: "Octo",
    logo: "/assets/partners/05.png",
  },
];

export default function KeyFacts() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const stripsRef = useRef<HTMLDivElement[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);

  const cardsTrackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLElement[]>([]);
  const cardImageRefs = useRef<HTMLDivElement[]>([]);
  const cardContentRefs = useRef<HTMLDivElement[]>([]);

  const partnersRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const cardsTrack = cardsTrackRef.current;

    if (!section || !stage || !cardsTrack) return;

    const ctx = gsap.context(() => {
      const strips = stripsRef.current;
      const cardEls = cardRefs.current;
      const images = cardImageRefs.current;
      const contents = cardContentRefs.current;

      const heading = headingRef.current;
      const partnersEl = partnersRef.current;

      if (
        strips.length !== 7 ||
        cardEls.length !== 3 ||
        images.length !== 3 ||
        contents.length !== 3 ||
        !heading ||
        !partnersEl
      ) {
        return;
      }

      const mm = gsap.matchMedia();

      /* ============================================================
         DESKTOP / TABLET
      ============================================================ */

      mm.add("(min-width: 769px)", () => {
        gsap.set(strips, {
          xPercent: 0,
        });

        gsap.set(heading, {
          autoAlpha: 0,
          y: 35,
        });

        gsap.set(cardEls, {
          opacity: 0,
          y: 35,
          scale: 0.94,
          x: 0,
          rotationZ: 0,
        });

        gsap.set(images, {
          scale: 1.06,
        });

        gsap.set(contents, {
          autoAlpha: 0,
          y: 12,
        });

        gsap.set(partnersEl, {
          autoAlpha: 0,
          y: 20,
        });

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

        /* OPEN */

        tl.to(strips, {
          xPercent: (index) =>
            index % 2 === 0 ? -110 : 110,
          duration: 1,
          stagger: 0.07,
          ease: "power4.inOut",
        });

        /* HEADING */

        tl.to(
          heading,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.45"
        );

        /* CARDS */

        tl.to(
          cardEls,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.07,
            ease: "power4.out",
          },
          "-=0.3"
        );

        /* IMAGE */

        tl.to(
          images,
          {
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.45"
        );

        /* CONTENT */

        tl.to(
          contents,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.3"
        );

        /* PARTNERS */

        tl.to(
          partnersEl,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "+=0.3"
        );

        /* HOLD */

        tl.to({}, {
          duration: 1,
        });

        /* EXIT */

        tl.to(
          cardEls,
          {
            y: -35,
            scale: 0.97,
            opacity: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: "power3.inOut",
          }
        );

        tl.to(
          partnersEl,
          {
            autoAlpha: 0,
            y: -15,
            duration: 0.35,
          },
          "<0.1"
        );

        tl.to(
          strips,
          {
            xPercent: 0,
            duration: 0.8,
            stagger: 0.07,
            ease: "power4.inOut",
          },
          "-=0.1"
        );

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });

      /* ============================================================
         MOBILE
         
         Horizontal card movement.
         
         This is the important part.
      ============================================================ */

      mm.add("(max-width: 768px)", () => {
        /*
         * Measure the actual horizontal distance.
         *
         * The track contains:
         *
         * 85vw + gap
         * 85vw + gap
         * 85vw
         */

        const getHorizontalDistance = () => {
          const viewport = window.innerWidth;

          const firstCard = cardEls[0];

          if (!firstCard) {
            return viewport * 1.7;
          }

          const cardWidth = firstCard.getBoundingClientRect().width;

          const gap = 16;

          const totalWidth =
            cardWidth * cardEls.length +
            gap * (cardEls.length - 1);

          return Math.max(
            0,
            totalWidth - viewport + 32
          );
        };

        /* INITIAL STATE */

        gsap.set(strips, {
          xPercent: 0,
        });

        gsap.set(heading, {
          autoAlpha: 0,
          y: 25,
        });

        gsap.set(cardsTrack, {
          x: 0,
        });

        gsap.set(cardEls, {
          opacity: 1,
          y: 0,
          scale: 1,
        });

        gsap.set(images, {
          scale: 1.04,
        });

        gsap.set(contents, {
          autoAlpha: 1,
          y: 0,
        });

        gsap.set(partnersEl, {
          autoAlpha: 0,
          y: 20,
        });

        /*
         * Horizontal scrolling timeline.
         */

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,

            start: "top top",

            /*
             * The section itself owns the scrolling distance.
             */
            end: () => `+=${window.innerHeight * 5.2}`,

            pin: stage,

            scrub: 0.9,

            anticipatePin: 1,

            invalidateOnRefresh: true,
          },
        });

        /* ==========================================================
           01 — OPEN STRIPS
        ========================================================== */

        tl.to(strips, {
          xPercent: (index) =>
            index % 2 === 0 ? -110 : 110,

          duration: 0.7,

          stagger: 0.05,

          ease: "power4.inOut",
        });

        /* ==========================================================
           02 — HEADING
        ========================================================== */

        tl.to(
          heading,
          {
            autoAlpha: 1,
            y: 0,

            duration: 0.45,

            ease: "power3.out",
          },
          "-=0.2"
        );

        /* ==========================================================
           03 — HORIZONTAL CARD MOVEMENT
        ========================================================== */

        tl.to(
          cardsTrack,
          {
            x: () => -getHorizontalDistance(),

            duration: 3.2,

            ease: "none",
          },
          "+=0.15"
        );

        /* ==========================================================
           04 — PARTNERS APPEAR
        ========================================================== */

        tl.to(
          partnersEl,
          {
            autoAlpha: 1,
            y: 0,

            duration: 0.45,

            ease: "power3.out",
          },
          "-=0.15"
        );

        /* ==========================================================
           05 — HOLD
        ========================================================== */

        tl.to({}, {
          duration: 0.55,
        });

        /* ==========================================================
           06 — CARDS EXIT
        ========================================================== */

        tl.to(
          cardEls,
          {
            y: -25,
            scale: 0.97,
            opacity: 0,

            duration: 0.55,

            stagger: 0.05,

            ease: "power3.inOut",
          }
        );

        /* ==========================================================
           07 — PARTNERS EXIT
        ========================================================== */

        tl.to(
          partnersEl,
          {
            autoAlpha: 0,
            y: -15,

            duration: 0.3,

            ease: "power3.inOut",
          },
          "<0.1"
        );

        /* ==========================================================
           08 — STRIPS CLOSE
        ========================================================== */

        tl.to(
          strips,
          {
            xPercent: 0,

            duration: 0.7,

            stagger: 0.05,

            ease: "power4.inOut",
          },
          "-=0.1"
        );

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
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
      data-navbar-theme="light"
      className="
        relative
        w-full
        overflow-visible
        bg-[#f1f1ef]
        text-[#111]

        /*
         * MOBILE
         */
        mt-0
        h-[560vh]

        /*
         * TABLET
         */
        md:-mt-[110vh]
        md:h-[680vh]

        /*
         * DESKTOP
         */
        lg:-mt-[120vh]
        lg:h-[700vh]

        xl:-mt-[125vh]
        xl:h-[710vh]

        md:overflow-hidden
      "
    >
      {/* ============================================================
          STAGE
      ============================================================ */}

      <div
        ref={stageRef}
        className="
          relative
          h-[100svh]
          min-h-[680px]
          w-full
          overflow-hidden
          bg-[#D8D8D8]

          max-[380px]:min-h-[650px]

          sm:min-h-[720px]

          md:h-screen
          md:min-h-0
        "
      >
        {/* ==========================================================
            STRIPS
        ========================================================== */}

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

        {/* ==========================================================
            HEADING
        ========================================================== */}

        <div
          ref={headingRef}
          className="
            absolute
            left-1/2
            top-[8vh]
            z-20
            w-[calc(100%-40px)]
            -translate-x-1/2
            text-center

            max-[380px]:top-[12vh]

            sm:top-[8vh]
            sm:w-[calc(100%-48px)]

            md:top-[6vh]
            md:w-full
          "
        >
          <h2
            className="
              text-[clamp(2.8rem,12vw,4.5rem)]
              font-medium
              leading-[0.88]
              tracking-[-0.075em]

              max-[380px]:text-[2.7rem]

              sm:text-[clamp(3.3rem,9vw,5rem)]

              md:text-[clamp(2.5rem,4vw,4.3rem)]
              md:leading-none
            "
          >
            Key facts
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-[260px]
              text-[9px]
              leading-[1.5]
              text-black/45

              sm:max-w-[300px]
              sm:text-[10px]

              md:mt-2
              md:max-w-[280px]
              md:text-[12px]
            "
          >
            A snapshot of our
            <br />
            experience and impact.
          </p>
        </div>

        {/* ==========================================================
            CARD TRACK
        ========================================================== */}

       <div
  ref={cardsTrackRef}
  className="
    absolute
    left-0
    top-[28%]
    z-30

    flex
    w-max
    items-stretch
    gap-4

    px-4

    will-change-transform

    md:top-[21vh]
     md:left-[40vh]
    md:mx-auto
    md:flex
    md:w-[calc(100%-80px)]
    md:max-w-[980px]
    md:translate-x-0
    md:grid
    md:grid-cols-3
    md:gap-[10px]
    md:px-0

    lg:gap-[12px]
  "
>
          {cards.map((card, index) => (
            <article
              key={card.id}
              ref={(el) => {
                if (el) {
                  cardRefs.current[index] = el;
                }
              }}
              className={`
                relative
                shrink-0
                overflow-hidden
                rounded-[10px]
                shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                will-change-transform

                /*
                 * MOBILE
                 *
                 * Same idea as the reference:
                 * almost the entire viewport width.
                 */
                w-[85vw]
                h-[50svh]
                min-h-[300px]
                max-h-[410px]

                /*
                 * SMALL PHONE
                 */
                max-[380px]:w-[86vw]
                max-[380px]:h-[46svh]
                max-[380px]:min-h-[280px]

                /*
                 * SMALL TABLET
                 */
                sm:w-[80vw]
                sm:max-w-[620px]

                /*
                 * DESKTOP
                 */
                md:w-full
                md:max-w-none
                md:h-[390px]

                lg:h-[400px]

                xl:h-[420px]

                ${
                  card.type === "metric"
                    ? "bg-[#e5e5e2]"
                    : "bg-[#202124]"
                }
              `}
            >
              {card.type === "metric" ? (
                <MetricCard
                  card={card}
                  imageRef={(el) => {
                    if (el) {
                      cardImageRefs.current[index] = el;
                    }
                  }}
                  contentRef={(el) => {
                    if (el) {
                      cardContentRefs.current[index] = el;
                    }
                  }}
                />
              ) : (
                <ImageCard
                  card={card}
                  index={index}
                  imageRef={(el) => {
                    if (el) {
                      cardImageRefs.current[index] = el;
                    }
                  }}
                  contentRef={(el) => {
                    if (el) {
                      cardContentRefs.current[index] = el;
                    }
                  }}
                />
              )}
            </article>
          ))}
        </div>

        {/* ==========================================================
            BUSINESS PARTNERS
        ========================================================== */}

  <div
  ref={partnersRef}
  className="
    absolute
    bottom-[4vh]
    left-1/2
    z-40
    w-full
    -translate-x-1/2
    overflow-hidden

    max-[380px]:bottom-[12vh]

    sm:bottom-[4vh]

    md:bottom-[5vh]
  "
>
  {/* TITLE */}

  <p
    className="
      mb-4
      text-center
      text-[8px]
      font-bold
      uppercase
      tracking-[0.08em]
      text-black/70

      sm:mb-5
      sm:text-[9px]

      md:mb-6
      md:text-[16px]
    "
  >
    OUR BUSINESS PARTNERS
  </p>

  {/* MARQUEE */}

  <div
    className="
      relative
      w-full
      overflow-hidden
    "
  >
    <div
      className="
        flex
        w-max
        items-center
        gap-8
        animate-partner-marquee

        max-[380px]:gap-6

        sm:gap-10

        md:gap-14

        lg:gap-16
      "
    >
      {/* FIRST SET */}

      {partners.map((partner) => (
        <div
          key={`first-${partner.name}`}
          className="
            flex
            h-[24px]
            w-[70px]
            shrink-0
            items-center
            justify-center

            max-[380px]:h-[35px]
            max-[380px]:w-[55px]

            sm:h-[27px]
            sm:w-[80px]

            md:h-[34px]
            md:w-[110px]

            lg:h-[38px]
            lg:w-[125px]
          "
        >
          <Image
            src={partner.logo}
            alt={`${partner.name} logo`}
            width={125}
            height={40}
            className="
              h-full
              w-full
              object-contain
              
              opacity-50
              mix-blend-multiply
            "
          />
        </div>
      ))}

      {/* SECOND SET
          Required for seamless looping
      */}

      {partners.map((partner) => (
        <div
          key={`second-${partner.name}`}
          className="
            flex
            h-[24px]
            w-[70px]
            shrink-0
            items-center
            justify-center

            max-[380px]:h-[35px]
            max-[380px]:w-[55px]

            sm:h-[27px]
            sm:w-[80px]

            md:h-[34px]
            md:w-[110px]

            lg:h-[38px]
            lg:w-[125px]
          "
        >
          <Image
            src={partner.logo}
            alt=""
            aria-hidden="true"
            width={125}
            height={40}
            className="
              h-full
              w-full
              object-contain
            
              opacity-50
              mix-blend-multiply
            "
          />
        </div>
      ))}
    </div>
  </div>
</div>
      </div>
    </section>
  );
}

/* ==================================================================
   IMAGE CARD
================================================================== */

function ImageCard({
  card,
  index,
  imageRef,
  contentRef,
}: {
  card: (typeof cards)[number];
  index: number;
  imageRef: (el: HTMLDivElement | null) => void;
  contentRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <>
      <div
        ref={imageRef}
        className="
          absolute
          inset-0
          overflow-hidden
          will-change-transform
        "
      >
        <Image
          src={card.image ?? ""}
          alt={
            index === 0
              ? "Mentroid featured work"
              : "Mentroid team"
          }
          fill
          sizes="
            (max-width: 768px) 85vw,
            (max-width: 1023px) calc((100vw - 80px) / 3),
            33vw
          "
          className="
            object-cover
            object-center
            md:grayscale
          "
        />

        <div
          className={`
            absolute
            inset-0
            ${
              index === 0
                ? "bg-black/25"
                : "bg-black/35"
            }
          `}
        />
      </div>

      <div
        ref={contentRef}
        className="
          absolute
          inset-x-5
          bottom-5
          z-10

          max-[380px]:inset-x-4
          max-[380px]:bottom-4

          sm:inset-x-6
          sm:bottom-6

          md:inset-x-6
          md:bottom-6
        "
      >
        <p
          className="
            mb-2
            text-[7px]
            uppercase
            tracking-[0.16em]
            text-white/60

            max-[380px]:text-[6px]

            sm:text-[8px]

            md:text-[7px]
          "
        >
          {card.eyebrow}
        </p>

        <div
          className="
            flex
            items-end
            justify-between
            gap-4
          "
        >
          <div className="min-w-0">
            <h3
              className="
                whitespace-pre-line
                text-[27px]
                font-medium
                leading-[0.88]
                tracking-[-0.075em]
                text-white

                max-[380px]:text-[23px]

                sm:text-[32px]

                md:text-[34px]
              "
            >
              {card.title}
            </h3>

            {card.description && (
              <p
                className="
                  mt-3
                  max-w-[230px]
                  text-[7px]
                  leading-[1.45]
                  text-white/60

                  max-[380px]:max-w-[205px]
                  max-[380px]:text-[6px]

                  sm:max-w-[270px]
                  sm:text-[8px]

                  md:max-w-[150px]
                  md:text-[9px]
                "
              >
                {card.description}
              </p>
            )}
          </div>

          <span
            className="
              shrink-0
              text-[30px]
              font-medium
              leading-none
              tracking-[-0.08em]
              text-white

              max-[380px]:text-[25px]

              sm:text-[34px]

              md:text-[36px]
            "
          >
            {card.number}
          </span>
        </div>
      </div>
    </>
  );
}

/* ==================================================================
   METRIC CARD
================================================================== */

function MetricCard({
  card,
  imageRef,
  contentRef,
}: {
  card: (typeof cards)[number];
  imageRef: (el: HTMLDivElement | null) => void;
  contentRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <>
      <div
        ref={imageRef}
        className="
          absolute
          inset-0
          will-change-transform
        "
      />

      {/* TOP LABEL */}

      <div
        className="
          absolute
          left-5
          right-5
          top-5
          z-10
          flex
          items-center
          justify-between

          max-[380px]:left-4
          max-[380px]:right-4
          max-[380px]:top-4

          sm:left-6
          sm:right-6
          sm:top-6

          md:left-6
          md:right-6
          md:top-6
        "
      >
        <span
          className="
            text-[7px]
            uppercase
            tracking-[0.14em]
            text-black/40

            max-[380px]:text-[6px]

            sm:text-[8px]

            md:text-[7px]
          "
        >
          {card.eyebrow}
        </span>

        <span
          className="
            text-[7px]
            uppercase
            tracking-[0.1em]
            text-black/25

            max-[380px]:text-[6px]

            sm:text-[8px]
          "
        >
          02
        </span>
      </div>

      {/* CENTER CIRCLE */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          flex
          h-[150px]
          w-[150px]
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-[0_15px_45px_rgba(0,0,0,0.06)]

          max-[380px]:h-[115px]
          max-[380px]:w-[115px]

          sm:h-[150px]
          sm:w-[150px]

          md:h-[150px]
          md:w-[150px]
        "
      >
        <span
          className="
            text-[42px]
            font-medium
            tracking-[-0.08em]
            text-black

            max-[380px]:text-[34px]

            sm:text-[42px]
          "
        >
          {card.number}
        </span>
      </div>

      {/* DESCRIPTION */}

      <p
        ref={contentRef}
        className="
          absolute
          bottom-5
          left-5
          right-5
          z-10
          text-center
          text-[7px]
          leading-[1.5]
          text-black/45

          max-[380px]:bottom-4
          max-[380px]:left-4
          max-[380px]:right-4
          max-[380px]:text-[6px]

          sm:bottom-6
          sm:text-[8px]

          md:bottom-6
          md:left-8
          md:right-8
          md:text-[9px]
        "
      >
        {card.description}
      </p>
    </>
  );
}