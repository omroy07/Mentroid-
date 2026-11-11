"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

type CaseStudy = {
  id: number;
  category: string;
  date: string;
  title: string;
  image: string;
  href: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    category: "AI AUTOMATION",
    date: "Case Study — 2026",
    title:
      "Automating business workflows with intelligent AI systems",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85",
    href: "/case-studies/ai-automation",
  },
  {
    id: 2,
    category: "AI PLATFORM",
    date: "Case Study — 2026",
    title:
      "Building an intelligent platform around connected business data",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85",
    href: "/case-studies/ai-platform",
  },
  {
    id: 3,
    category: "WEB & SOFTWARE",
    date: "Case Study — 2026",
    title:
      "Designing a scalable digital product for a growing business",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
    href: "/case-studies/web-software",
  },
  {
    id: 4,
    category: "CUSTOM CHATBOTS",
    date: "Case Study — 2026",
    title:
      "Creating a conversational AI experience for customer support",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=85",
    href: "/case-studies/custom-chatbot",
  },
  {
    id: 5,
    category: "RAG SYSTEMS",
    date: "Case Study — 2026",
    title:
      "Turning scattered company knowledge into an intelligent assistant",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=85",
    href: "/case-studies/rag-system",
  },
  {
    id: 6,
    category: "AI AGENTS",
    date: "Case Study — 2026",
    title:
      "Building autonomous AI agents for repetitive business operations",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=85",
    href: "/case-studies/ai-agents",
  },
];

const ITEMS_PER_PAGE = 3;

export default function CaseStudies() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(
    caseStudies.length / ITEMS_PER_PAGE
  );

  const visibleStudies = useMemo(() => {
    const start = currentPage * ITEMS_PER_PAGE;

    return caseStudies.slice(
      start,
      start + ITEMS_PER_PAGE
    );
  }, [currentPage]);

  const goToPage = (page: number) => {
    setCurrentPage(
      Math.max(0, Math.min(page, totalPages - 1))
    );
  };

  return (
    <section
      className="
        relative
        w-full
        bg-white
        px-5
        py-16
        text-black

        sm:px-8
        sm:py-20

        md:px-10
        md:py-24

        lg:px-12
        lg:py-28

        xl:px-16
        xl:py-32

        2xl:px-20
      "
    >
      <div className="mx-auto w-full max-w-[1800px]">

        {/* ------------------------------------------------ */}
        {/* HEADER */}
        {/* ------------------------------------------------ */}

        <div
          className="
            max-w-[1600px]
            mx-auto
          "
        >
          <div
            className="
              max-w-[350px]

              sm:max-w-[600px]

              md:max-w-[800px]

              lg:max-w-[1000px]
            "
          >
            

            <h2
              className="
                max-w-[1000px]
                text-[clamp(2rem,5vw,3.5rem)]
                font-medium
                leading-[0.98]
                tracking-[-0.045em]
                text-black
              "
            >
              Case Studies
            
            </h2>
          </div>
        </div>

        {/* ------------------------------------------------ */}
        {/* CARDS */}
        {/* ------------------------------------------------ */}

        <div
          className="
            mx-auto
            mt-10
            grid
            w-full
            max-w-[1600px]
            grid-cols-1
            gap-5

            sm:mt-12
            sm:gap-6

            md:grid-cols-2

            
            lg:grid-cols-3
            lg:gap-6

            xl:gap-8
          "
        >
          {visibleStudies.map((study, index) => (
            <Link
              key={study.id}
              href={study.href}
              className="
                group
                relative
                flex
                min-h-full
                w-full
                flex-col
                overflow-hidden
                rounded-2xl
                bg-[#f0eee9]
                text-black
                transition-transform
                duration-500
                ease-out
                hover:-translate-y-1

                sm:rounded-[20px]

                lg:rounded-[22px]
              "
            >
              {/* ------------------------------------------ */}
              {/* CARD CONTENT */}
              {/* ------------------------------------------ */}

              <div
                className="
                  flex
                  flex-1
                  flex-col
                  justify-between
                  p-4

                  sm:p-5

                  lg:p-5
                  xl:p-6
                "
              >
                {/* IMAGE */}

                <div
                  className="
                    relative
                    aspect-[16/10]
                    w-full
                    overflow-hidden
                    rounded-lg

                    sm:rounded-xl

                    lg:rounded-[12px]
                  "
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="
                      h-full
                      w-full
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.035]
                    "
                  />

                  {/* Image overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/[0.04]
                      transition-colors
                      duration-500
                      group-hover:bg-black/[0.01]
                    "
                  />
                </div>

                {/* META */}

                <div className="pt-5 sm:pt-6">
                  <div
                    className="
                      mb-4
                      flex
                      flex-wrap
                      items-center
                      justify-between
                      gap-2
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.16em]
                        text-black/90

                        sm:text-[11px]
                      "
                    >
                      {study.category}
                    </span>

                    <span
                      className="
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.12em]
                        text-black/85

                        sm:text-[11px]
                      "
                    >
                      {study.date}
                    </span>
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      max-w-[520px]
                      text-[20px]
                      font-medium
                      leading-[1.12]
                      tracking-[-0.025em]
                      text-black

                      sm:text-[22px]

                      lg:text-[24px]

                      xl:text-[26px]
                    "
                  >
                    {study.title}
                  </h3>
                </div>
              </div>

              {/* ------------------------------------------ */}
              {/* BOTTOM CTA AREA */}
              {/* ------------------------------------------ */}

              <div
                className="
                  relative
                  mt-auto
                  flex
                  min-h-[82px]
                  items-center
                  justify-between
                
                  px-4

                  sm:min-h-[88px]
                  sm:px-5

                  lg:min-h-[96px]
                  lg:px-6
                "
              >
                <span
                  className="
                    text-sm
                    font-medium
                    text-black

                    sm:text-[15px]

                    lg:text-base
                  "
                >
                  View case study
                </span>

                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-black/10
                    transition-all
                    duration-300

                    group-hover:border-black
                    group-hover:bg-black
                    group-hover:text-white

                    sm:h-10
                    sm:w-10
                  "
                >
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.7}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-[2px]
                      group-hover:-translate-y-[2px]
                    "
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* ------------------------------------------------ */}
        {/* PAGINATION */}
        {/* ------------------------------------------------ */}

        <div
          className="
            mx-auto
            mt-10
            flex
            w-full
            justify-center

            sm:mt-12

            lg:mt-16
          "
        >
          <nav
            aria-label="Case studies pagination"
            className="flex items-center"
          >
            {/* PREVIOUS */}

            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 0}
              aria-label="Previous case studies"
              className="
                mr-3
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                text-black
                transition-all
                duration-300
                hover:bg-black/5
                disabled:cursor-not-allowed
                disabled:opacity-30

                sm:mr-4
              "
            >
              <ArrowLeft
                size={17}
                strokeWidth={1.6}
              />
            </button>

            {/* PAGE NUMBERS */}

            <div className="flex items-center">
              {Array.from(
                { length: totalPages },
                (_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goToPage(index)}
                    aria-current={
                      currentPage === index
                        ? "page"
                        : undefined
                    }
                    className={`
                      mx-2
                      flex
                      min-w-[28px]
                      items-center
                      justify-center
                      py-2
                      text-xs
                      transition-colors
                      duration-300

                      sm:mx-3
                      sm:text-sm

                      ${
                        currentPage === index
                          ? "font-medium text-[#536FCE] underline underline-offset-4"
                          : "text-black/45 hover:text-black"
                      }
                    `}
                  >
                    {index + 1}
                  </button>
                )
              )}
            </div>

            {/* NEXT */}

            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={
                currentPage === totalPages - 1
              }
              aria-label="Next case studies"
              className="
                ml-3
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                text-black
                transition-all
                duration-300
                hover:bg-black/5
                disabled:cursor-not-allowed
                disabled:opacity-30

                sm:ml-4
              "
            >
              <ArrowRight
                size={17}
                strokeWidth={1.6}
              />
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}