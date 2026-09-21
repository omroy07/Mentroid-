"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide AI chatbot development, machine learning models, web and app development, IoT + ML solutions, GenAI projects, and consulting.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. Mentroid works with startups and businesses to build scalable AI and digital solutions around their specific requirements.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines depend on the complexity and scope of the work. Typical projects can take anywhere from one week to one month.",
  },
  {
    question: "Do you provide support after delivery?",
    answer:
      "Yes. Post-delivery support and maintenance are available depending on the project and engagement.",
  },
  {
    question: "Can you build a custom AI solution for my business?",
    answer:
      "Yes. Mentroid develops custom AI systems based on your business requirements, workflows, data, and desired outcomes.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-white py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent-blue)]">
            FAQ
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Questions, answered.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Everything you need to know before starting a project with
            Mentroid.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-14 divide-y divide-black/10 border-y border-black/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-slate-900 sm:text-lg">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-slate-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-6 pr-10">
                    <p className="text-sm leading-7 text-slate-600 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}