
const technologies = [
  "Python",
  "PyTorch",
  "LLMs & RAG",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "SQL & APIs",
  "AI agents",
  "Workflow automation",
];

export default function TechStackSection() {
  return (
    <section
      data-navbar-theme="light"
      aria-labelledby="tech-stack-heading"
      className="border-y border-black/10 bg-[#f4f4f4] px-5 py-9 sm:px-8 sm:py-12 lg:px-14"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          {/* Introduction */}
          <div className="max-w-[320px] shrink-0">
            <p
              id="tech-stack-heading"
              data-reveal="eyebrow"
              className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/50 sm:text-[11px]"
            >
              Our engineering toolkit
            </p>

            <p
              data-reveal="body"
              className="mt-2 text-sm leading-6 text-black/60"
            >
              A considered stack, selected for the problem—not a checklist.
            </p>
          </div>

          {/* Technology labels */}
          <ul
            aria-label="Technologies and engineering disciplines"
            className="flex flex-wrap gap-2 lg:max-w-[900px] lg:justify-end"
          >
            {technologies.map((technology) => (
              <li
                key={technology}
                data-reveal="tech"
                className="border border-black/15 bg-white px-3 py-2 text-[11px] text-black/65 transition-colors duration-300 hover:border-black/40 hover:text-black sm:text-xs"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
