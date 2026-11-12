"use client";

import { ArrowDown } from "lucide-react";

export default function WorkHeroVideo() {
  return (
    <section
      className="
        px-5 pb-5
        sm:px-8 sm:pb-8
        md:px-10 md:pb-10
        lg:px-12 lg:pb-12
        xl:px-16
        2xl:px-20
      "
    >
      <div
        className="
          group relative mx-auto max-w-[1660px]
          overflow-hidden rounded-[14px] bg-[#171717]
          aspect-[4/3]
          sm:aspect-[16/9]
          lg:aspect-[16/8]
          xl:aspect-[16/7.5]
        "
      >
        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="
            absolute inset-0
            h-full w-full
            object-cover
            transition-transform duration-[1400ms] ease-out
            group-hover:scale-[1.015]
          "
        >
          <source
            src="/assets/work/workvideo.webm"
            type="video/webm"
          />
        </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/25" />

        {/* CENTER CONTENT */}
        <div
          className="
            absolute inset-0
            z-10
            flex items-center justify-center
            px-6
            sm:px-10
            md:px-16
            lg:px-20
          "
        >
          <div className="w-full max-w-[900px] text-center">

           
            
            {/* MAIN TEXT */}
            <h2
              className="
                mx-auto
                max-w-[850px]
                text-[clamp(38px,6vw,82px)]
                font-[450]
                leading-[1.02]
                tracking-[-0.06em]
                text-white
                [text-wrap:balance]
              "
            >
              Built around real problems.
              <br className="hidden sm:block" />
              Designed for real-world work.
            </h2>

            {/* META */}
            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-5
                gap-y-2
                text-[10px]
                font-medium
                uppercase
                tracking-[0.08em]
                text-white/60
                sm:mt-8
                sm:text-[11px]
              "
            >
              <span>AI</span>
              <span>Machine Learning</span>
              <span>Software</span>
              <span>Automation</span>
            </div>

            {/* OPTIONAL SCROLL INDICATOR */}
            {/* <div
              className="
                mx-auto
                mt-8
                flex
                items-center
                justify-center
                text-white/60
                sm:mt-10
              "
            >
              <ArrowDown
                size={18}
                strokeWidth={1.5}
                className="animate-bounce"
              />
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
}