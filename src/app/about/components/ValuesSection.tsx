
const values = [
  {
    number: "01",
    title: "Start with the problem.",
    description:
      "Understand the goal and constraints before choosing a model, framework, or platform.",
  },
  {
    number: "02",
    title: "Keep it practical.",
    description:
      "Prefer useful, maintainable solutions over complexity that does not improve the outcome.",
  },
  {
    number: "03",
    title: "Be transparent.",
    description:
      "Make scope, decisions, trade-offs, and next steps clear throughout the work.",
  },
  {
    number: "04",
    title: "Build with people in mind.",
    description:
      "Consider usability, oversight, and the real teams who will work with the system.",
  },
];

export default function ValuesSection() {
  return (
    <section
      data-navbar-theme="light"
      aria-labelledby="values-heading"
      className="px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1440px] gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Section introduction */}
        <div>
          <p
            data-reveal="eyebrow"
            className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/50 sm:text-[11px]"
          >
            What guides us
          </p>

          <h2
            id="values-heading"
            data-reveal="heading"
            className="mt-5 max-w-[600px] text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.94] tracking-[-0.065em]"
          >
            Thoughtful in our decisions. Clear in our delivery.
          </h2>

          <p
            data-reveal="body"
            className="mt-5 max-w-[460px] text-sm leading-7 text-black/60 sm:text-base sm:leading-8"
          >
            Our mission is not to add technology for its own sake. It is to
            make complex systems more useful, with engineering decisions that
            remain understandable and grounded in the needs of the people
            using them.
          </p>
        </div>

        {/* Principles */}
        <div className="border-t border-black/15">
          {values.map((value) => (
            <article
              key={value.number}
              data-reveal="value"
              className="grid gap-2 border-b border-black/15 py-5 sm:grid-cols-[48px_0.8fr_1fr] sm:gap-5 sm:py-6"
            >
              <span className="text-[10px] tracking-[0.12em] text-black/40">
                {value.number}
              </span>

              <h3 className="text-lg font-medium tracking-[-0.03em] sm:text-xl">
                {value.title}
              </h3>

              <p className="text-sm leading-6 text-black/60">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
