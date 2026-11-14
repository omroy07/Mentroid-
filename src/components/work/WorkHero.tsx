"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function WorkHero() {
  return (
    <section
      className="
        relative
        flex
        min-h-[min(850px,78svh)]
        items-center
        overflow-hidden
        bg-[#f0eee9]
        px-5
        pb-20
        pt-[150px]

        sm:px-8
        sm:pb-24
        sm:pt-[165px]

        md:px-10
        md:pb-28
        md:pt-[175px]

        lg:px-12
        lg:pb-32
        lg:pt-[185px]

        xl:px-16
        2xl:px-20
      "
    >
      <div className="mx-auto w-full max-w-[1320px]">

        <div
          className="
            grid
            grid-cols-1
            gap-12

            lg:grid-cols-[minmax(0,1.25fr)_minmax(260px,0.55fr)]
            lg:items-end
            lg:gap-16

            xl:gap-24
            
          "
        >

          <div>
            <p
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
              Case Studies
            </p>

            <h1
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
              Explore selected AI
              <br className="hidden sm:block" />
              {" "}and software projects.
            </h1>
          </div>

          <div className="max-w-[500px] lg:pb-2">
            <p
              className="
                text-[16px]
                leading-[1.6]
                tracking-[-0.02em]
                text-[#454545]

                sm:text-[17px]

                lg:text-[18px]
              "
            >
              These portfolio projects show different applications of AI,
              machine learning and software interfaces. Open a project to
              understand its focus and the features described in the
              published portfolio.
            </p>

            <Link
              href="/contact/?topic=COM03"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-3
                border-b
                border-black/30
                pb-1.5
                text-[14px]
                font-medium
                transition-all
                duration-300
                hover:border-black
              "
            >
              Discuss a similar project

              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>
        </div>

        

      </div>
    </section>
  );
}