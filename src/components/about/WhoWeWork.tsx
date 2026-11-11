"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

type Audience = {
  number: string;
  
  title: string;
  description: string;
 
  image: string;
};

const audiences: Audience[] = [
  {
    number: "01",
    
    title: "Startup Founders",
    description:
      "Turn a promising idea into an AI MVP, or make an existing product more intelligent.",
  
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "02",
   
    title: "SME Owners",
    description:
      "Reduce repetitive work across customer support, lead handling, and everyday operations.",
   
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "03",
   
    title: "CTOs",
    description:
      "Add AI capabilities to existing platforms without treating your current systems as a blank slate.",
    
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "04",
  
    title: "Enterprise teams",
    description:
      "Connect internal knowledge, business tools, and workflows into systems teams can use responsibly.",
   
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90",
  },
  
  {
    number: "05",
    
    title: "Technical Teams",
    description:
      "Connect internal knowledge, business tools, and workflows into systems teams can use responsibly.",
   
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90",
  },
];

export default function WhoWeWork() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const [progress, setProgress] = useState(0);
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);
const [activeIndex, setActiveIndex] = useState(0);
  /*
   * Update arrows + progress while scrolling.
   */
  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const updateProgress = () => {
      const maxScroll =
        carousel.scrollWidth - carousel.clientWidth;

      const currentScroll = carousel.scrollLeft;

      const percentage =
        maxScroll > 0
          ? (currentScroll / maxScroll) * 100
          : 0;

      setProgress(Math.min(100, Math.max(0, percentage)));

      setCanGoPrev(currentScroll > 5);
      setCanGoNext(currentScroll < maxScroll - 5);
    };

    updateProgress();

    carousel.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      carousel.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  /*
   * Scroll one card at a time.
   */
  const scrollCarousel = (direction: "next" | "prev") => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const firstCard =
      carousel.querySelector<HTMLElement>(
        "[data-audience-card]"
      );

    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;

    const styles = window.getComputedStyle(carousel);
    const gap = parseFloat(styles.columnGap || styles.gap || "0");

    const amount = cardWidth + gap;

    carousel.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };
  useEffect(() => {
  const carousel = carouselRef.current;

  if (!carousel) return;

  const updateCarouselState = () => {
    const cards = Array.from(
      carousel.querySelectorAll<HTMLElement>("[data-audience-card]")
    );

    if (!cards.length) return;

    const scrollLeft = carousel.scrollLeft;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - scrollLeft);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);

    const maxScroll =
      carousel.scrollWidth - carousel.clientWidth;

    setCanGoPrev(scrollLeft > 5);
    setCanGoNext(scrollLeft < maxScroll - 5);
  };

  updateCarouselState();

  carousel.addEventListener("scroll", updateCarouselState, {
    passive: true,
  });

  window.addEventListener("resize", updateCarouselState);

  return () => {
    carousel.removeEventListener("scroll", updateCarouselState);
    window.removeEventListener("resize", updateCarouselState);
  };
}, []);

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#f5f5f2]
        text-[#080808]

        py-20

        sm:py-24

        md:py-32

        lg:py-36

        xl:py-40
      "
    >
      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1920px]
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className="
            px-5

            sm:px-8

            md:px-12

            lg:px-16

            xl:px-10
           
          "
        >
          {/* Eyebrow */}

      

          {/* Large editorial heading */}

          <h2 className="
  max-w-[1220px]
  text-[clamp(48px,6.15vw,63px)]
  font-[450]
  leading-[1.035]
  tracking-[-0.065em]
  [text-wrap:balance]

  min-[1500px]:max-w-[1350px]
  min-[1500px]:text-[clamp(60px,6vw,63px)]

  max-[900px]:max-w-[850px]
  max-[900px]:text-[clamp(48px,7.2vw,68px)]
  max-[900px]:leading-[1.06]

  max-[600px]:mx-auto
  max-[600px]:max-w-[500px]
  max-[600px]:text-center
  max-[600px]:text-[clamp(38px,10.2vw,54px)]
  max-[600px]:leading-[1.07]
  max-[600px]:tracking-[-0.06em]

  max-[380px]:text-[32px]
"

          >
            Who we build with.
          </h2>

         

          {/* =================================================
    DESCRIPTION + NAVIGATION
================================================= */}

<div
  className="
    
    flex
    w-full
    items-end
    justify-between
    gap-8 "
>
  

  {/* Navigation — RIGHT SIDE */}

  <div
    className="
     ml-auto
  hidden
  shrink-0
  items-center
  gap-3

  sm:flex
    "
  >
    <button
      type="button"
      aria-label="Previous audience"
      disabled={!canGoPrev}
      onClick={() => scrollCarousel("prev")}
      className="
        grid
        h-11
        w-11
        place-items-center

        rounded-full
        border
        border-black/15

        text-black/35

        transition-all
        duration-300

        hover:border-black/40
        hover:text-black

        disabled:cursor-default
        disabled:opacity-30
      "
    >
      <ArrowLeft
        size={17}
        strokeWidth={1.4}
      />
    </button>

    <button
      type="button"
      aria-label="Next audience"
      disabled={!canGoNext}
      onClick={() => scrollCarousel("next")}
      className="
        grid
        h-11
        w-11
        place-items-center

        rounded-full
        border
        border-black/15

        text-black

        transition-all
        duration-300

        hover:border-black/40
        hover:translate-x-0.5

        disabled:cursor-default
        disabled:opacity-30
      "
    >
      <ArrowRight
        size={17}
        strokeWidth={1.4}
      />
    </button>
  </div>
</div>
        </div>

        {/* ===================================================
            CAROUSEL
        =================================================== */}

        <div className="mt-12 sm:mt-14 md:mt-16 lg:mt-12 px-12">
          <div
  ref={carouselRef}
  className="
  flex
  gap-4
  overflow-x-auto
  scroll-smooth
  snap-x
  snap-mandatory
  pl-5
  pr-5
  sm:gap-5
  sm:pl-8
  sm:pr-8
  md:pl-10
  md:pr-10
  lg:gap-6
  lg:pl-16
  lg:pr-16
  xl:pl-20
  xl:pr-20
  2xl:pl-24
  2xl:pr-24
  [scrollbar-width:none]
  [&::-webkit-scrollbar]:hidden
"
>
            {audiences.map((audience) => (
              <article
                key={audience.number}
                data-audience-card
               className="
  group
  relative
  shrink-0
  snap-start

  w-[76vw]

  sm:w-[52vw]

  md:w-[40vw]

  lg:w-[29vw]

  xl:w-[26vw]

  2xl:w-[25vw]

  max-w-[500px]
"
              >
                {/* =================================================
                    IMAGE
                ================================================= */}

                <div
                  className="
                    relative
                    aspect-[0.92/1]
                    w-full
                    overflow-hidden

                    rounded-[18px]

                    bg-[#deded9]

                    sm:rounded-[20px]

                    md:rounded-[22px]

                    lg:rounded-[24px]
                  "
                >
                  {/* Remote image */}

                  <div
                    className="
                      absolute
                      inset-0

                      bg-cover
                      bg-center

                      transition-transform
                      duration-[900ms]
                      ease-[cubic-bezier(.2,.7,.2,1)]

                      group-hover:scale-[1.035]
                    "
                    style={{
                      backgroundImage: `url("${audience.image}")`,
                    }}
                  />

                  {/* Subtle image overlay */}

                  <div
                    className="
                      absolute
                      inset-0

                      bg-gradient-to-t
                      from-black/60
                      via-black/5
                      to-transparent

                      opacity-90
                    "
                  />

                

                  {/* Title */}

                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      right-5

                      sm:bottom-6
                      sm:left-6
                      sm:right-6

                      md:top-7
                      md:left-7
                      md:right-7
                    "
                  >
                    <h3
                      className="
                        max-w-[440px]
                    
                        text-[clamp(2rem,4vw,2.2rem)]
                        font-normal
                        leading-[0.9]
                        tracking-[-0.065em]
                        text-white/90
                      "
                    >
                      {audience.title}
                    </h3>
                  </div>

                

                 
                </div>

             
               
              </article>
            ))}
          </div>
        </div>

        {/* ===================================================
            PROGRESS
        =================================================== */}
<div className="mx-auto mt-8 w-full max-w-[540px] px-5 sm:mt-10 sm:px-0 md:mt-12">
  <div className="relative h-1 w-full overflow-hidden rounded-full">
    
    {/* Left + right inactive track */}
    <div className="absolute inset-0 h-1 rounded-full bg-black/10" />

    {/* Active moving indicator */}
    <div
      className="
        absolute
        left-0
        top-0
        h-1
        rounded-full
        bg-[linear-gradient(90deg,#FF765F_0%,#D66F9C_50%,#536FCE_100%)]
        transition-transform
        duration-500
        ease-in-out
      "
      style={{
        width: `${100 / audiences.length}%`,
        transform: `translateX(${activeIndex * 100}%)`,
      }}
    />
  </div>
</div>
        {/* ===================================================
            MOBILE NAVIGATION
        =================================================== */}

        <div
          className="
            mt-7
            flex
            justify-center
            gap-3

            md:hidden
          "
        >
          <button
            type="button"
            aria-label="Previous audience"
            disabled={!canGoPrev}
            onClick={() => scrollCarousel("prev")}
            className="
              grid
              h-10
              w-10
              place-items-center

              rounded-full
              border
              border-black/15

              text-black/40

              disabled:opacity-30
            "
          >
            <ArrowLeft
              size={16}
              strokeWidth={1.3}
            />
          </button>

          <button
            type="button"
            aria-label="Next audience"
            disabled={!canGoNext}
            onClick={() => scrollCarousel("next")}
            className="
              grid
              h-10
              w-10
              place-items-center

              rounded-full
              border
              border-black/15

              text-black
            "
          >
            <ArrowRight
              size={16}
              strokeWidth={1.3}
            />
          </button>
        </div>
      </div>
    </section>
  );
}