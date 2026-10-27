
"use client";

import { useLayoutEffect, useRef } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Metric = {
  number: string;
  label: string;
  title: string;
  description: string;
  image: string;
  href: string;
  background: string;
  hoverColor: string;
  imageAlt: string;
};

const metrics: Metric[] = [
  {
    number: "5+",
    label: "AI & ML SOLUTIONS",
    title: "Intelligence that earns its place.",
    description:
      "AI systems, machine learning models and automations shaped around real business needs.",
    image: "/assets/keyfacts/aimlservice.webp",
    href: "/services",
    background: "#f0eee9",
    hoverColor: "#8a7b5f",
    imageAlt: "Mentroid AI and machine learning solutions",
  },
  {
    number: "5+",
    label: "PROJECTS COMPLETED",
    title: "From idea to something real.",
    description:
      "Thoughtful digital products and intelligent workflows, built to move beyond the demo.",
    image: "/assets/keyfacts/project.webp",
    href: "/work",
    background: "#f0eee9",
    hoverColor: "#4f8a94",
    imageAlt: "Digital projects developed by Mentroid",
  },
  {
    number: "14+",
    label: "OUR TEAM",
    title: "Different minds. Shared momentum.",
    description:
      "Product thinking, engineering and AI expertise working towards one clear outcome.",
    image: "/assets/keyfacts/team.webp",
    href: "/about#team",
    background: "#f0eee9",
    hoverColor: "#b38c7b",
    imageAlt: "The people and team behind Mentroid",
  },
];



export default function WhatWeBringTogether() {
  const rootRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLAnchorElement[]>([]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 22, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      cardsRef.current.filter(Boolean).forEach((card, index) => {
        const image = card.querySelector(".story-card-image");

        gsap.fromTo(
          card,
          { y: 26, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          }
        );

        if (image) {
          gsap.fromTo(
            image,
            { scale: 1.045 },
            {
              scale: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            }
          );
        }
      });

      ScrollTrigger.refresh();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="mentroid-proof"
      className="w-full bg-white px-5 py-14 text-[#252525] sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-[1680px]">
        {/* Section heading */}
        <div
          ref={headingRef}
          className="mb-9 max-w-[720px] sm:mb-12"
        >
          <h2 className="text-3xl font-normal leading-[1.12] tracking-[-0.045em] sm:text-4xl lg:text-[64px]">
            Why businesses choose Mentroid
          </h2>
        </div>

        {/* Responsive card grid */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {metrics.map((metric, index) => (
            <Link
              key={metric.label}
              ref={(element) => {
                if (element) cardsRef.current[index] = element;
              }}
              href={metric.href}
              style={
                {
                  "--card-hover-color": metric.hoverColor,
                } as CSSProperties
              }
              className="group h-[70vh]  relative isolate flex min-h-[440px] min-w-0 flex-col overflow-hidden rounded-[22px] bg-[#f0eee9] text-[#252525] outline-none transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#536fce] focus-visible:ring-offset-4 sm:min-h-[460px] motion-reduce:transform-none"
            >
              {/* Animated color fill: bottom to top */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 origin-bottom scale-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100 motion-reduce:transition-none"
                style={{
                  backgroundColor: "var(--card-hover-color)",
                }}
              />

              {/* Card content */}
              <div className="relative z-10 flex flex-1 flex-col p-4 sm:p-5">
                {/* Landscape image */}
                <div className="relative mb-6 aspect-video w-full shrink-0 overflow-hidden rounded-lg bg-[#e3e0d8]">
                  <Image
                    src={metric.image}
                    alt={metric.imageAlt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="story-card-image object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                  />
                </div>

                {/* Category */}
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.12em] text-[#000000] sm:text-[12px]">
                  {metric.label}
                </p>

                {/* Title */}
                

                {/* Description */}
                <p className="mt-6 text-sm leading-6 text-[#000000] sm:text-[26px]">
                  {metric.description}
                </p>

               
              </div>


              {/* Read more interaction */}
              <div className="absolute inset-x-0 bottom-0 z-20 flex h-[62px] items-center justify-between px-4 sm:px-5">
                <span className="text-sm font-normal sm:text-base">
                  Read more
                </span>

                <span className="flex h-8 w-8 items-center justify-center">
                  <ArrowRight
                    size={22}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5 motion-reduce:transition-none"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
