"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const revealElements = hero.querySelectorAll(
        "[data-hero-reveal]"
      );

      // Make sure content is visible before animation starts
      gsap.set(revealElements, {
        opacity: 1,
        y: 0,
      });

      if (reduceMotion) return;

      // ------------------------------------------------------------
      // TEXT REVEAL
      // ------------------------------------------------------------

      gsap.fromTo(
        revealElements,
        {
          opacity: 0,
          y: 26,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.14,
          ease: "power3.out",
          delay: 0.12,
          clearProps: "transform,opacity",
        }
      );
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      aria-labelledby="ma-about-hero-title"
      className="
        relative
        mt-5
        isolate
        flex
        min-h-[min(900px,60svh)]
        w-full
        flex-col
        items-center
        overflow-hidden
        bg-[#f0eee9]
        text-[#202020]

        px-6
        pt-[clamp(125px,15vh,165px)]

        /* Large desktop */
        2xl:min-h-[min(900px,62svh)]
        2xl:px-12
        2xl:pt-[clamp(140px,15vh,175px)]

        /* Desktop */
        xl:px-10
        xl:pt-[clamp(135px,14vh,165px)]

        /* Laptop */
        lg:min-h-[490px]
        lg:px-10
        lg:pt-[135px]

        /* Tablet */
        md:min-h-[760px]
        md:px-8
        md:pt-[130px]

        /* Small tablet */
        sm:min-h-[730px]
        sm:px-7
        sm:pt-[125px]

        /* Mobile */
        max-sm:min-h-[220px]
        max-sm:px-5
        max-sm:pt-[145px]

        /* Small mobile */
        max-[380px]:min-h-[700px]
        max-[380px]:px-4
        max-[380px]:pt-[140px]
      "
    >
      {/* ==========================================================
          HERO CONTENT
      ========================================================== */}

      <div
        className="
          relative
          z-[2]
          mx-auto
          w-full
          max-w-[1320px]
          text-center

          2xl:max-w-[1400px]

          xl:max-w-[1320px]

          lg:max-w-[1150px]

          md:max-w-[900px]

          sm:max-w-[720px]

          max-sm:max-w-full
        "
      >
        {/* ========================================================
            EYEBROW
        ======================================================== */}

        <p
          data-hero-reveal
          className="
            mb-5
            text-[12px]
            font-medium
            uppercase
            leading-[1.4]
            tracking-[0.035em]

            md:mb-5

            max-sm:mb-[19px]
            max-sm:text-[11px]
          "
        >
          About
        </p>

     <h1
  id="ma-about-hero-title"
  className="
    mx-auto
    max-w-[1220px]
    text-[clamp(48px,6.15vw,90px)]
    font-[450]
    leading-[1.035]
    tracking-[-0.065em]
    [text-wrap:balance]

    /* Large desktop */
    min-[1500px]:max-w-[1350px]
    min-[1500px]:text-[clamp(90px,6vw,104px)]

    /* Desktop */
    xl:max-w-[1220px]
    xl:text-[clamp(64px,6.15vw,90px)]

    /* Laptop */
    lg:max-w-[1050px]
    lg:text-[clamp(56px,6.5vw,78px)]
    lg:leading-[1.045]

    /* Tablet */
    md:max-w-[850px]
    md:text-[clamp(48px,7.2vw,68px)]
    md:leading-[1.06]

    /* Small tablet */
    sm:max-w-[680px]
    sm:text-[clamp(44px,8vw,62px)]

    /* Mobile */
    max-sm:mx-auto
    max-sm:max-w-[390px]
    max-sm:text-[clamp(40px,9.5vw,48px)]
    max-sm:leading-[1.08]
    max-sm:tracking-[-0.055em]
    max-sm:[text-wrap:pretty]

    /* Small mobile */
    max-[380px]:max-w-[340px]
    max-[380px]:text-[40px]
  "
>
  <span
    data-hero-reveal
    className="block"
  >
    Where practical AI
  </span>

  <span
    data-hero-reveal
    className="block"
  >
    <span className="whitespace-nowrap">
      meets real-world
    </span>{" "}
    work.
  </span>
</h1>

        {/* ========================================================
            DESCRIPTION
        ======================================================== */}

        <p
          data-hero-reveal
          className="
            mx-auto
            mt-[30px]
            max-w-[720px]
            text-[clamp(16px,1.35vw,20px)]
            font-normal
            leading-[1.55]
            tracking-[-0.025em]
            text-[#454545]
            [text-wrap:balance]

            /* Large desktop */
            min-[1500px]:max-w-[760px]

            /* Desktop */
            xl:max-w-[760px]

            /* Laptop */
            lg:mt-[28px]
            lg:max-w-[700px]
            lg:text-[18px]

            /* Tablet */
            md:mt-[26px]
            md:max-w-[620px]
            md:text-[17px]

            /* Small tablet */
            sm:max-w-[560px]
            sm:text-[16px]

            /* Mobile */
            max-sm:mt-[22px]
            max-sm:max-w-[440px]
            max-sm:text-[15px]
            max-sm:leading-[1.6]
            max-sm:tracking-[-0.015em]

            /* Small mobile */
            max-[380px]:max-w-[330px]
            max-[380px]:text-[14px]
          "
        >
          Mentroid brings AI, automation and software development together
          to help businesses solve meaningful problems and turn everyday
          work into measurable progress.
        </p>
      </div>
    </section>
  );
}