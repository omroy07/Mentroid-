"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function BuildWithMentroid() {
  return (
    <section className="relative w-full bg-white px-5 py-14 text-black sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-12 lg:py-24 xl:px-16 2xl:px-20">
      <div className="mx-auto w-full max-w-[1600px]">
        <div
          className="
            flex
            w-full
            flex-col-reverse
            items-center
            justify-normal
            gap-10

            md:flex-row
            md:gap-10

            lg:gap-16

            xl:gap-24

            2xl:gap-32
          "
        >
          {/* LEFT — Content */}
          <div
            className="
              w-full
              md:w-1/2
              lg:max-w-[680px]
            "
          >
            <div className="max-w-[720px]">
             
              {/* Main Heading */}
              <h2
                className="
              
              max-w-[1000px]

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


  max-[600px]:max-w-[600px]
  
  max-[600px]:text-[clamp(38px,6.2vw,54px)]
  max-[600px]:leading-[1.07]
  max-[600px]:tracking-[-0.06em]

  max-[380px]:text-[32px]
              text-[#17171c]
                "
              >
                Want to build the future with AI technology?
              </h2>

           
              

              {/* CTA */}
              <div className="mt-8 sm:mt-10">
  <Link
    href="/careers"
    className="
      group
      inline-flex
      items-center
      gap-3
      rounded-[10px]
      bg-black/90
      px-5 py-3
      text-sm
      font-medium
      text-white

      transition-all
      duration-300

      hover:bg-[#000000]
      hover:px-7
     hover:shadow-[0_0_0_1px_rgba(74,222,128,0.3),0_10px_35px_rgba(74,222,128,0.4),0_0_60px_rgba(74,222,128,0.18)]
      sm:py-4
      sm:text-[15px]
    "
  >
    <span>Join us</span>
  </Link>
</div>
            </div>
          </div>

          {/* RIGHT — Image */}
          <div
            className="
              w-full
              md:w-1/2
              lg:max-w-[680px]
            "
          >
            <div
              className="
                relative
                w-full
                overflow-hidden
                rounded-xl
                sm:rounded-2xl
                lg:rounded-[20px]
              "
            >
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85"
                alt="Mentroid team collaborating"
                width={1360}
                height={1360}
                priority={false}
                className="
                  aspect-square
                  h-auto
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  hover:scale-[1.025]
                "
              />

              {/* Subtle overlay */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-black/[0.03]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}