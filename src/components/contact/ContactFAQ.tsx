"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";

const questions = [
  {
    question: "Do we need a complete technical brief?",
    answer:
      "No. A concrete task and a clear description of the desired result are enough to start a fit discussion.",
  },
  {
    question: "Should we send private data with the enquiry?",
    answer:
      "No. Start with a non-sensitive overview. Any later access should be authorized and handled through an agreed process.",
  },
  {
    question: "Can we request a specific service?",
    answer:
      "Yes. Choose the project area or name it in the message. If you are unsure, describe the workflow instead.",
  },
];

export default function ContactFAQ() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-question-reveal]",
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        w-full
        bg-[#f0eee9]
        px-5
        py-10
        sm:px-8
        sm:py-28
        md:px-10
        md:py-32
        lg:px-12
        lg:py-5
        lg:pb-40
        xl:px-16
        2xl:px-20
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1660px]
          flex-col
          md:flex-row
          md:gap-10
          lg:gap-16
          xl:gap-0
        "
      >
        <div
          data-question-reveal
          className="
            mb-12
            w-full
            md:mb-0
            md:w-1/2
          "
        >
        

          <h2
            className="
              mt-5
              max-w-[620px]
              text-[clamp(40px,5vw,70px)]
              font-[450]
              leading-[1.02]
              tracking-[-0.06em]
              [text-wrap:balance]
            "
          >
            Frequently asked
            <br className="hidden sm:block" />
            questions
          </h2>
        </div>

        <div
          data-question-reveal
          className="w-full md:w-1/2"
        >
          <ul>
            {questions.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <li
                  key={item.question}
                  className="overflow-hidden"
                >
                  <div
                    className="
                      border-t
                      pt-2
                    "
                    style={{
                      borderTopColor: "transparent",
                      backgroundImage:
                        "linear-gradient(90deg, #FF765F 0%, #D66F9C 50%, #536FCE 100%)",
                      backgroundSize: "100% 2px",
                      backgroundPosition: "top",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <button
                      type="button"
                      aria-expanded={isActive}
                      onClick={() =>
                        setActiveIndex(
                          isActive ? -1 : index
                        )
                      }
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-6
                        bg-transparent
                        pb-7
                        pt-1
                        text-left
                        sm:pb-8
                      "
                    >
                      <h3
                        className="
                          max-w-[calc(100%-50px)]
                          text-[17px]
                          font-[450]
                          leading-[1.35]
                          tracking-[-0.035em]
                          sm:text-[19px]
                          lg:text-[20px]
                        "
                      >
                        {item.question}
                      </h3>

                      <ArrowDown
                        size={20}
                        strokeWidth={1.5}
                        className={`
                          shrink-0
                          transition-transform
                          duration-500
                          ${
                            isActive
                              ? "rotate-180"
                              : ""
                          }
                        `}
                      />
                    </button>

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
                        <p
                          className="
                            mb-8
                            max-w-[650px]
                            text-[16px]
                            font-[450]
                            leading-[1.6]
                            tracking-[-0.02em]
                            text-[#454545]
                            sm:text-[18px]
                          "
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}