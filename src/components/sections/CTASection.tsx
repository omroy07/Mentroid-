"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-cta-content]",
        { y: 16, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12"
    >
      <div className="relative isolate flex rounded-2xl min-h-[300px] items-center justify-center overflow-hidden bg-[#163b31] px-5 py-16 text-center text-white sm:min-h-[360px] sm:py-20 lg:min-h-[660px]">
        {/* Background image */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/cta/cta.webp')",
          }}
        />

        {/* Subtle overlay for text contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-black/30"
        />

        <div className="w-full max-w-4xl">
          <h2
            data-cta-content
            className="text-3xl font-normal leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl lg:text-[70px]"
          >
            Ready to put AI to work?
          </h2>

          <a
            href="#contact"
            className=" mt-7
    group relative isolate inline-flex min-h-11 w-full
    items-center justify-center gap-2 overflow-hidden rounded-[10px]
    p-[2px]
    transition-transform duration-300 ease-out
    hover:-translate-y-0.5
    active:translate-y-0
    focus-visible:outline-none focus-visible:ring-2
    focus-visible:ring-[#29443b] focus-visible:ring-offset-2
    sm:w-auto sm:min-h-12 sm:gap-2.5
    md:px-0 lg:min-h-[52px] xl:px-0
  "
          >
            {/* White button surface */}
            <span
              className="
      relative isolate inline-flex min-h-10 w-full
      items-center justify-center gap-2 overflow-hidden rounded-[10px]
      bg-white px-5 py-3 text-xs font-medium text-black
      sm:min-h-11 sm:gap-2.5 sm:px-5 sm:text-sm
      md:px-6 lg:min-h-12 lg:px-7 xl:px-8
    "
            >
              {/* Sliding shine */}
              <span
                aria-hidden="true"
                className="
        pointer-events-none absolute inset-y-0 -left-1/2 z-0
        w-1/3 -skew-x-[20deg] bg-gradient-to-r
        from-transparent via-black/10 to-transparent
        transition-transform duration-700 ease-out
        group-hover:translate-x-[450%]
        motion-reduce:transition-none
      "
              />

              <span className="relative z-10">Start Your AI Project</span>

              <ArrowUpRight
                size={16}
                className="
        relative z-10 shrink-0 transition-transform duration-300
        group-hover:translate-x-0.5 group-hover:-translate-y-0.5
        sm:h-[17px] sm:w-[17px]
      "
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
