"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function ContactHero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-hero-content", {
        y: 45,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-5 pb-5 pt-34 sm:px-8 sm:pb-8 sm:pt-28 md:px-10 md:pb-10 md:pt-32 lg:px-12 lg:pb-12 lg:pt-36 xl:px-16 2xl:px-20"
    >
      <div className="mx-auto max-w-[1660px]">
        <div className="contact-hero-content group relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-[14px] bg-[#171717] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[565px]">
          
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.015]"
          >
            <source
              src="/assets/contact/contact-.webm"
              type="video/webm"
            />
          </video>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Content */}
          <div className="relative z-10 flex w-full items-center justify-center px-6 text-center sm:px-10 md:px-16">
            <div className="max-w-[1000px]">
              
             

              <h1 className="text-[clamp(48px,11vw,60px)] font-[450] leading-[0.88] tracking-[-0.075em] text-white sm:text-[clamp(58px,11vw,90px)] md:text-[clamp(58px,11vw,90px)] lg:text-[clamp(58px,11vw,90px)]">
                Contact
              </h1>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}