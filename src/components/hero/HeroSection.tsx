"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";
import gsap from "gsap";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Expertise", href: "/expertise" },
  { label: "Company", href: "/about" },
];

/**
 * Mentroid's Cohere-inspired editorial hero.
 * Replace the two Unsplash image URLs with optimized local WebP/AVIF assets before launch.
 */
export default function MentroidHero() {
  const root = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  useLayoutEffect(() => {
    const element = root.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-hero-reveal]", {
        y: 22,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.12,
        clearProps: "all",
      });

      gsap.from("[data-hero-card]", {
        y: 32,
        opacity: 0,
        duration: 1,
        stagger: 0.14,
        ease: "power3.out",
        delay: 0.42,
        clearProps: "all",
      });

      gsap.to("[data-float]", {
        y: -7,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      data-navbar-theme="light"
      className="relative mt-15 isolate overflow-hidden bg-white text-[#171717]"
    >
    


      {/* Centered editorial headline */}
      <div className="mx-auto flex max-w-[1120px] flex-col items-center px-5 pb-12 pt-[62px] text-center sm:px-8 sm:pt-[76px] md:pt-[88px] lg:pt-[92px]">
       

        <h1 data-hero-reveal className="max-w-[960px] text-[clamp(2.65rem,6.1vw,5.55rem)] font-normal leading-[0.99] tracking-[-0.067em] text-[#171717]">
          Your next breakthrough,
          <br className="hidden sm:block" /> built with intelligence.
        </h1>

        <p data-hero-reveal className="mt-6 max-w-[610px] text-[18px] leading-7 text-[#555753] sm:mt-7 sm:text-[18px] sm:leading-[1.8]">
          Practical AI, intelligent automation and custom software to help your business work smarter — and move forward with confidence.
        </p>

        <div data-hero-reveal className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
          <Link
            href="/contact"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-[10px] bg-[#171717] px-6 text-[14px] font-medium text-white transition duration-200 hover:bg-[#29443b] sm:w-auto"
          >
            Start a conversation <ArrowUpRight size={16} className="ml-2" />
          </Link>
          <Link
            href="/services"
            className="group inline-flex min-h-12 items-center justify-center px-3 text-[14px] text-[#242424]"
          >
            <span className="border-b border-[#242424]/50 pb-1 transition group-hover:border-[#29443b] group-hover:text-[#29443b]">
              Explore our services
            </span>
            <ArrowDownRight size={15} className="ml-2 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Oversized editorial image cards, visible at the bottom of the first viewport */}
      <div className="mx-auto  max-w-[1660px] gap-3 px-5 pb-5 sm:px-8 md:grid-cols-[1.9fr_1fr] lg:gap-4 lg:px-12">
        <div
          
          data-hero-card
          className="group relative min-h-[250px] overflow-hidden rounded-[14px] bg-[#e9d5e8] sm:min-h-[320px] lg:min-h-[850px]"
          aria-label="Explore Mentroid AI solutions"
        >
          <img
            data-float
            src="/assets/hero/hero.webp"
            alt="Abstract sculptural shapes in warm, soft colors"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 flex items-end justify-between right-5 sm:bottom-7 sm:left-7 sm:right-7">
            
            
          </div>
        </div>

       
      </div>
    </section>
  );
}
