
const faqs = [
  {
    question: "Where is Mentroid based?",
    answer:
      "Mentroid is based in Sehore, Madhya Pradesh, India. We collaborate with businesses on AI, automation, and software projects across locations.",
  },
  {
    question: "Does Mentroid work with clients outside India?",
    answer:
      "We can collaborate remotely with teams in other regions. Project fit, communication expectations, and delivery arrangements are discussed at the start of an engagement.",
  },
  {
    question: "What makes Mentroid different from a conventional development agency?",
    answer:
      "We bring AI, automation, and software engineering into the same conversation. We start by understanding the business problem, then choose a practical technical approach instead of forcing every project into a fixed template.",
  },
  {
    question: "Can Mentroid integrate with our existing tools?",
    answer:
      "Where technically appropriate, we can design solutions around existing applications, APIs, data sources, and workflows. The approach depends on your current systems and requirements.",
  },
];

export default function AboutFaq() {
  return (
    <section
      data-navbar-theme="light"
      aria-labelledby="about-faq-heading"
      className="border-t border-black/10 px-5 py-14 sm:px-8 sm:py-20 lg:px-14"
    >
      <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        {/* Section heading */}
        <div>
          <p
            data-reveal="eyebrow"
            className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/50 sm:text-[11px]"
          >
            Frequently asked questions
          </p>

          <h2
            id="about-faq-heading"
            data-reveal="heading"
            className="mt-4 max-w-[480px] text-[clamp(2.5rem,5vw,4.8rem)] font-medium leading-[0.94] tracking-[-0.065em]"
          >
            A little more about Mentroid.
          </h2>
        </div>

        {/* Expandable questions */}
        <div className="border-t border-black/15">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              data-reveal="faq"
              className="group border-b border-black/15 py-5 sm:py-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-medium tracking-[-0.02em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black sm:text-lg [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>

                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/20 text-lg font-normal text-black/65 transition-colors duration-300 group-open:bg-black group-open:text-white"
                >
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>

              <p className="max-w-[720px] pr-8 pt-4 text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
