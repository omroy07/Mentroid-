"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  Mail,
  MapPin,
  MoveUpRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* -------------------------------------------------------------------------- */
/*                                  DATA                                      */
/* -------------------------------------------------------------------------- */

const footerColumns = [
  {
    title: "Services",
    links: [
      "AI Development",
      "AI Automation",
      "Custom Chatbots",
      "ML Model Development",
      "AI SaaS Development",
      "Web & Software Development",
    ],
  },
  {
    title: "Expertise",
    links: [
      "Generative AI",
      "AI Agents",
      "RAG Systems",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Predictive Analytics",
      "Workflow Automation",
    ],
  },
  {
    title: "Solutions",
    links: [
      "24/7 AI Customer Support",
      "AI Lead Qualification",
      "WhatsApp AI Assistant",
      "Sales Automation",
      "Business Process Automation",
      "AI Knowledge Assistant",
      "AI Recommendation Systems",
      "Custom AI Platforms",
    ],
  },
  {
    title: "Industries",
    links: [
      "Startups & SaaS",
      "Education",
      "Agriculture",
      "Healthcare",
      "Finance",
      "Retail & E-commerce",
      "Professional Services",
      "SMEs",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                              SOCIAL ICONS                                  */
/* -------------------------------------------------------------------------- */

function FacebookIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8.2h2.75l.41-3.2H13.5V7.56c0-.93.26-1.56 1.6-1.56h1.7V3.14C16.5 3.05 15.5 3 14.35 3c-2.42 0-4.08 1.48-4.08 4.2v2.4H7.5v3.2h2.77V21h3.23Z" />
    </svg>
  );
}

function XIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.38L5.6 22H2.48l7.25-8.29L1.8 2h6.4l4.43 6.74L18.9 2Zm-1.1 18h1.73L7.27 3.88H5.41L17.8 20Z" />
    </svg>
  );
}

function YouTubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.56 12 3.56 12 3.56s-7.55 0-9.4.52A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.52 9.4.52 9.4.52s7.55 0 9.4-.52a3 3 0 0 0 2.1-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.55 15.6V8.4L15.8 12l-6.25 3.6Z" />
    </svg>
  );
}

function ThreadsIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18.1 11.1c-.35-4.2-2.5-6.4-6.1-6.4-4.1 0-6.7 2.8-6.7 7.3 0 4.6 2.5 7.4 6.6 7.4 3.3 0 5.5-1.7 5.5-4.3 0-2.1-1.5-3.5-3.8-3.5-2 0-3.4 1-3.4 2.6 0 1.2.9 2 2.2 2 1.8 0 3-1.4 3-3.6 0-2.7-1.4-4.3-3.8-4.3-1.2 0-2.1.4-2.8 1.2" />
      <path d="M14.7 8.1c2.8.7 4.7 2.4 5.1 5.1" />
    </svg>
  );
}

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.2 8.5H2.1V21h3.1V8.5ZM3.65 2.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM21.9 13.8c0-3.75-2-5.5-4.65-5.5a4 4 0 0 0-3.6 1.98V8.5h-3.1V21h3.1v-6.2c0-1.64.31-3.23 2.35-3.23 2.01 0 2.03 1.88 2.03 3.34V21h3.1l.77-7.2Z" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*                              FOOTER COLUMN                                 */
/* -------------------------------------------------------------------------- */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div className="footer-column">
      <div className="mb-5 flex items-center gap-2">
      

        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
          {title}
        </p>
      </div>

      <ul className="space-y-[9px]">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="#"
              className="group inline-flex items-center gap-1 text-[13px] leading-[1.45] text-neutral-300 transition-colors duration-300 hover:text-white"
            >
              <span>{link}</span>

              <ArrowUpRight
                size={11}
                strokeWidth={1.5}
                className="translate-y-[1px] opacity-0 transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              SOCIAL LINK                                   */
/* -------------------------------------------------------------------------- */

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="group flex h-9 w-9 items-center justify-center rounded-full border  hover:border-black hover:bg-black hover:text-white"
    >
      <span className="transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  FOOTER                                    */
/* -------------------------------------------------------------------------- */

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const columnsRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      /* Subtle drifting mist — kept monochrome and low contrast. */
      const fogLayers = footerRef.current?.querySelectorAll<HTMLElement>(".footer-fog");
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (fogLayers?.length && !reduceMotion) {
        fogLayers.forEach((layer, index) => {
          gsap.to(layer, {
            x: index === 0 ? 46 : -38,
            y: index === 0 ? -18 : 22,
            opacity: index === 0 ? 0.16 : 0.11,
            duration: index === 0 ? 13 : 17,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * -3,
          });
        });
      }

      /* CTA reveal */
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          {
            y: 80,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      /* Footer columns */
      if (columnsRef.current) {
        const columns =
          columnsRef.current.querySelectorAll(".footer-column");

        gsap.fromTo(
          columns,
          {
            y: 45,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: columnsRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      /* Bottom bar */
      if (bottomRef.current) {
        gsap.fromTo(
          bottomRef.current,
          {
            y: 25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bottomRef.current,
              start: "top 95%",
              once: true,
            },
          }
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative isolate overflow-hidden bg-black text-white"
    >
      
      {/* Full-footer smoke video overlay. Keep the video asset at public/videos/footer-smoke.webm. */}
      <video
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-35 mix-blend-screen"
      >
        <source src="/videos/footer-smoke.webm" type="video/webm" />
      </video>

      {/* Soft monochrome mist adds depth without a neon glow. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
      >
        <div className="footer-fog footer-fog--one absolute -left-24 top-[18%] h-64 w-[70%] rounded-full bg-white/[0.07] blur-[90px] opacity-[0.08]" />
        <div className="footer-fog footer-fog--two absolute -right-24 top-[48%] h-72 w-[65%] rounded-full bg-[#079dad]/[0.08] blur-[110px] opacity-[0.06]" />
      </div>

      <div className="relative z-[1]">
     
  
      {/* ------------------------------------------------------------------ */}
      {/* MAIN FOOTER                                                         */}
      {/* ------------------------------------------------------------------ */}

      <section data-navbar-theme="dark" >
        <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 md:py-20 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-[280px_1fr] xl:grid-cols-[340px_1fr]">
            {/* BRAND */}
            <div className="flex flex-col justify-between">
              <div>
                <Link
                  href="/"
                  aria-label="Mentroid home"
                  className="group inline-flex items-center"
                >
                  <img
                    src="/assets/mentroid-logo.png"
                    width={52}
                    height={52}
                    alt=""
                    className="h-11 w-11 shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.04] sm:h-12 sm:w-12"
                  />
                  <span className="ml-1.5 flex min-w-0 flex-col justify-center gap-[4px]">
                    <span className="whitespace-nowrap text-[21px] font-semibold leading-none tracking-[-0.045em] text-white sm:text-[23px]">
                      Mentroid
                    </span>
                    <span className="whitespace-nowrap text-[7px] font-medium uppercase leading-none tracking-[0.16em] text-[#079dad] sm:text-[8px]">
                      AI · ML SERVICES
                    </span>
                  </span>
                </Link>

                <p className="mt-5 max-w-[250px] text-[13px] leading-6 text-neutral-500">
                  AI, software and automation systems engineered for
                  businesses ready to build what&apos;s next.
                </p>
              </div>

              {/* CONTACT */}
              <div className="mt-10 space-y-3">
                <Link
                  href="mailto:hello@mentroid.co.in"
                  className="group flex items-center gap-3 text-[13px] text-neutral-300 transition-colors hover:text-white"
                >
                  <Mail
                    size={14}
                    strokeWidth={1.5}
                    className="text-neutral-500"
                  />

                  <span>mentroid@mentroid.co.in</span>

                  <ArrowUpRight
                    size={11}
                    strokeWidth={1.5}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  />
                </Link>

                <div className="flex items-center gap-3 text-[13px] text-neutral-500">
                  <MapPin
                    size={14}
                    strokeWidth={1.5}
                  />

                  <span>India · Global</span>
                </div>
              </div>
            </div>

            {/* NAVIGATION */}
            <div
              ref={columnsRef}
              className="grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-4"
            >
              {footerColumns.map((column) => (
                <FooterColumn
                  key={column.title}
                  title={column.title}
                  links={column.links}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* LOWER BAR                                                           */}
      {/* ------------------------------------------------------------------ */}

      <section className="border-t border-white/10">
        <div
          ref={bottomRef}
          className="mx-auto flex max-w-[1500px] flex-col gap-8 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12"
        >
          {/* COPYRIGHT */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-600">
              © {new Date().getFullYear()} Mentroid
            </p>

            <span className="hidden h-3 w-px bg-neutral-800 sm:block" />

           
             <nav
              aria-label="Legal links"
              className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:ml-1"
            >
              <Link
                href="/privacy"
                className="text-[10px] uppercase tracking-[0.14em] text-neutral-500 transition-colors duration-300 hover:text-white"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-[10px] uppercase tracking-[0.14em] text-neutral-500 transition-colors duration-300 hover:text-white"
              >
                Terms
              </Link>
              <Link
                href="/security"
                className="text-[10px] uppercase tracking-[0.14em] text-neutral-500 transition-colors duration-300 hover:text-white"
              >
                Security
              </Link>
            </nav>
          </div>

          {/* SOCIALS + BACK TO TOP */}
          <div className="flex items-center gap-3">
            <SocialLink
              href="https://www.facebook.com/profile.php?id=61581668020163"
              label="Facebook"
              icon={<FacebookIcon />}
            />

            <SocialLink
              href="https://x.com/mentroid29"
              label="X"
              icon={<XIcon />}
            />

            <SocialLink
              href="https://www.youtube.com/@MENTROID"
              label="YouTube"
              icon={<YouTubeIcon />}
            />

            <SocialLink
              href="https://www.linkedin.com/company/mentroid1/"
              label="LinkedIn"
              icon={<LinkedinIcon />}
            />

            <SocialLink
              href="https://www.instagram.com/mentroid_sol/"
              label="Instagram"
              icon={<InstagramIcon />}
            />

            <SocialLink
              href="https://www.threads.com/@mentroid_sol"
              label="Threads"
              icon={<ThreadsIcon />}
            />

            <button
              type="button"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              aria-label="Back to top"
              className="group ml-2 flex h-9 items-center gap-2 border-l border-white/10 pl-5 text-[10px] uppercase tracking-[0.15em] text-neutral-500 transition-colors hover:text-white"
            >
              <span>Top</span>

              <ArrowDown
                size={13}
                strokeWidth={1.5}
                className="rotate-180 transition-transform duration-300 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* GIANT BRAND MARK                                                    */}
      {/* ------------------------------------------------------------------ */}

      {/* <div
        aria-hidden="true"
        className="pointer-events-none overflow-hidden px-4 pb-[-1px] pt-10 sm:px-8"
      >
        <div className="select-none whitespace-nowrap text-center text-[25vw] font-semibold leading-[0.72] tracking-[-0.09em] text-white/[0.035]">
          mentroid
        </div>
      </div> */}
      </div>
    </footer>
  );
}