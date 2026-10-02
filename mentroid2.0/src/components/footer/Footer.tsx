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

function InstagramIcon({
  size = 15,
}: {
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedinIcon({
  size = 15,
}: {
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 8.5V19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M5 5.25V5.3"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M10 19V8.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10 13.2C10 10.55 11.45 8.5 14.05 8.5C16.65 8.5 18 10.2 18 13.2V19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GithubIcon({
  size = 15,
}: {
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9.25 19.5C5.6 20.6 5.6 17.7 4.15 17.2M14.75 19.5V17.15C14.75 16.5 14.5 15.9 14.05 15.45C17.35 15.05 20.75 13.8 20.75 8.35C20.75 6.95 20.25 5.75 19.45 4.8C19.6 4.4 20.1 2.9 19.3 1.05C19.3 1.05 18.05 0.65 15.1 2.65C12.7 2 10.3 2 7.9 2.65C4.95 0.65 3.7 1.05 3.7 1.05C2.9 2.9 3.4 4.4 3.55 4.8C2.75 5.75 2.25 6.95 2.25 8.35C2.25 13.8 5.65 15.05 8.95 15.45C8.5 15.9 8.25 16.5 8.25 17.15V19.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
        <span className="h-[4px] w-[4px] rounded-full bg-current opacity-60" />

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
      className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black"
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
      className="relative overflow-hidden bg-[#090909] text-white"
    >
      {/* ------------------------------------------------------------------ */}
      {/* TOP CTA                                                             */}
      {/* ------------------------------------------------------------------ */}

    
  
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
                  className="inline-block text-[2.3rem] font-semibold tracking-[-0.065em]"
                >
                  mentroid
                  <span className="text-neutral-600">.</span>
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

                  <span>hello@mentroid.co.in</span>

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

            <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-600">
              Intelligence · Automation · Software
            </p>
          </div>

          {/* SOCIALS + BACK TO TOP */}
          <div className="flex items-center gap-3">
            <SocialLink
              href="https://www.instagram.com/"
              label="Instagram"
              icon={<InstagramIcon />}
            />

            <SocialLink
              href="https://www.linkedin.com/"
              label="LinkedIn"
              icon={<LinkedinIcon />}
            />

            <SocialLink
              href="https://github.com/"
              label="GitHub"
              icon={<GithubIcon />}
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

      <div
        aria-hidden="true"
        className="pointer-events-none overflow-hidden px-4 pb-[-1px] pt-10 sm:px-8"
      >
        <div className="select-none whitespace-nowrap text-center text-[25vw] font-semibold leading-[0.72] tracking-[-0.09em] text-white/[0.035]">
          mentroid
        </div>
      </div>
    </footer>
  );
}