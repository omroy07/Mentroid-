
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "AI & machine learning",
    description:
      "Purpose-built AI applications, language-model integrations, RAG systems, and machine-learning solutions designed around a clear use case.",
    link: "/services/ai-development",
    linkText: "Explore AI development",
  },
  {
    number: "02",
    title: "Automation & AI agents",
    description:
      "Connected workflows and intelligent assistants that help reduce repetitive work and make existing business systems work better together.",
    link: "/services/ai-automation",
    linkText: "Explore automation",
  },
  {
    number: "03",
    title: "Software & product engineering",
    description:
      "Web platforms, SaaS products, custom software, APIs, and digital experiences that turn ideas into usable products.",
    link: "/services/web-development",
    linkText: "Explore software engineering",
  },
];

function CapabilityLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group/link inline-flex min-h-11 items-center gap-2 text-sm text-white/75 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
    >
      {children}
      <ArrowUpRight
        size={15}
        aria-hidden="true"
        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
      />
    </Link>
  );
}

export default function CapabilitiesSection() {
  return (
    <section
      data-navbar-theme="dark"
      aria-labelledby="capabilities-heading"
      className="mx-3 rounded-2xl bg-black px-5 py-12 text-white sm:mx-5 sm:px-8 sm:py-16 lg:px-10 lg:py-16"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section introduction */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p
              data-reveal="eyebrow"
              className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 sm:text-[11px]"
            >
              What we do
            </p>

            <h2
              id="capabilities-heading"
              data-reveal="heading"
              className="mt-4 max-w-[720px] text-4xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-5xl lg:text-6xl"
            >
              Intelligence, engineered for use.
            </h2>
          </div>

          <p
            data-reveal="body"
            className="max-w-[390px] text-sm leading-7 text-white/55"
          >
            Different challenges need different tools. We bring the right
            disciplines together to make the result work in the real world.
          </p>
        </div>

        {/* Capability cards */}
        <div className="mt-9 grid gap-3 md:grid-cols-3 lg:mt-12">
          {capabilities.map((item) => (
            <article
              key={item.number}
              data-reveal="card"
              className="group/card flex min-h-[260px] flex-col border border-white/10 bg-[#202020] p-5 transition-colors duration-500 hover:border-white/25 hover:bg-[#292929] sm:min-h-[300px] sm:p-6 lg:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.16em] text-white/40">
                  {item.number} / 03
                </span>

                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                  className="text-white/45 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5"
                />
              </div>

              <h3 className="mt-10 text-2xl font-medium leading-tight tracking-[-0.04em] sm:mt-14 sm:text-3xl">
                {item.title}
              </h3>

              <p className="mt-4 max-w-[420px] text-sm leading-6 text-white/55">
                {item.description}
              </p>

              <div className="mt-auto pt-7">
                <CapabilityLink href={item.link}>
                  {item.linkText}
                </CapabilityLink>
              </div>
            </article>
          ))}
        </div>

        {/* Our approach */}
        <div
          data-reveal="approach"
          className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
            Our approach
          </p>

          <p className="max-w-[660px] text-sm leading-6 text-white/60 sm:text-right">
            Start with the problem. Choose the right technology. Build for
            people, integration, and the next stage of growth.
          </p>
        </div>
      </div>
    </section>
  );
}
