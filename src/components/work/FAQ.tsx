"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Are these all customer case studies?",
    answer:
      "They are presented here as portfolio projects. A client engagement or production outcome should be identified only when its status and permission have been confirmed.",
  },
  {
    question: "Can we see a demonstration?",
    answer:
      "A walkthrough can be discussed where the project is available and the necessary permission exists.",
  },
  {
    question: "Can the same approach be used for our business?",
    answer:
      "The task, data and operating requirements need their own assessment. A related project is a starting point for discussion.",
  },
  {
    question: "How do you approach a new AI or software project?",
    answer:
      "We start by understanding the problem, users, existing systems, available data and desired outcome. From there, we determine the appropriate technical approach, define the scope, and identify what needs to be tested before moving toward a larger implementation.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        faqRef.current,
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        bg-[#f0eee9]
        px-5
        pt-20
        pb-24
        text-[#202020]
        sm:px-8
        sm:pt-24
        sm:pb-28
        md:px-10
        md:pt-28
        md:pb-32
        lg:px-12
        lg:pt-32
        lg:pb-40
        xl:px-16
        2xl:px-20
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1660px]
        "
      >

        {/* MAIN TWO COLUMN LAYOUT */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-start
            md:gap-10
            lg:gap-16
            xl:gap-24
          "
        >

          {/* =========================================
              LEFT — HEADING
          ========================================= */}
          <div
            ref={headingRef}
            className="
              mb-12
              w-full
              md:mb-0
              md:w-1/2
            "
          >
            <p
              className="
                mb-5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.1em]
                text-[#77736d]
                sm:text-[11px]
              "
            >
              Questions
            </p>

            <h2
              className="
                max-w-[650px]
                text-[clamp(40px,5vw,70px)]
                
                text-[#202020]
                font-[450]
                leading-[1.01]
                tracking-[-0.065em]

                sm:text-[clamp(56px,7vw,82px)]

                md:text-[clamp(62px,7vw,88px)]

                lg:text-[clamp(68px,6.8vw,92px)]

                xl:text-[clamp(74px,6.3vw,78px)]
              "
            >
              Frequently asked
              <br className="hidden sm:block" />
              questions
            </h2>
          </div>

          {/* =========================================
              RIGHT — FAQ LIST
          ========================================= */}
          <div
            ref={faqRef}
            className="
              w-full
              md:w-1/2
            "
          >
            <ul className="w-full">

              {faqs.map((faq, index) => {
                const isActive = activeIndex === index;

                return (
                  <li
                    key={faq.question}
                    className="
                      w-full
                      overflow-hidden
                    "
                  >

                    {/* FAQ ITEM */}
                    <div
                      className="
                        w-full
                        border-t
                        border-[#202020]
                        pt-2
                        bg-no-repeat
                        transition-colors
                        duration-300
                      "
                      style={{
                        borderTopColor: "transparent",
                        backgroundImage:
                          "linear-gradient(90deg, #FF765F 0%, #D66F9C 50%, #536FCE 100%)",
                        backgroundSize: "100% 2px",
                        backgroundPosition: "top",
                      }}
                    >

                      {/* QUESTION BUTTON */}
                      <button
                        type="button"
                        onClick={() => toggleFAQ(index)}
                        aria-expanded={isActive}
                        className="
                          flex
                          w-full
                          cursor-pointer
                          items-center
                          justify-between
                          gap-6
                          border-none
                          bg-transparent
                          pb-7
                          pt-1
                          text-left
                          sm:pb-8
                          md:pb-9
                        "
                      >

                        <h3
                          className="
                            max-w-[calc(100%-50px)]
                            text-[17px]
                            font-[450]
                            leading-[1.35]
                            tracking-[-0.035em]
                            text-[#202020]
                            sm:text-[19px]
                            lg:text-[20px]
                          "
                        >
                          {faq.question}
                        </h3>

                        {/* ARROW */}
                        <span
                          className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                          "
                        >
                          <ArrowDown
                            size={20}
                            strokeWidth={1.5}
                            className={`
                              text-[#202020]
                              transition-transform
                              duration-500
                              ease-in-out
                              ${
                                isActive
                                  ? "rotate-180"
                                  : "rotate-0"
                              }
                            `}
                          />
                        </span>

                      </button>

                      {/* ANSWER */}
                      <div
                        className={`
                          grid
                          overflow-hidden
                          transition-[grid-template-rows]
                          duration-700
                          ease-[cubic-bezier(0.16,1,0.3,1)]
                          ${
                            isActive
                              ? "grid-rows-[1fr]"
                              : "grid-rows-[0fr]"
                          }
                        `}
                      >
                        <div className="min-h-0">

                          <div
                            className="
                              mb-8
                              w-full
                              max-w-[calc(100%-50px)]
                            "
                          >
                            <p
                              className="
                                text-[16px]
                                font-[450]
                                leading-[1.6]
                                tracking-[-0.02em]
                                text-[#202020]
                                sm:text-[18px]
                              "
                            >
                              {faq.answer}
                            </p>
                          </div>

                        </div>
                      </div>

                    </div>

                  </li>
                );
              })}

            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}