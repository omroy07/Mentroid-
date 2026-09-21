import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  Target,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: BrainCircuit,
    title: "AI Engineering",
    description:
      "We design intelligent systems around real business problems, data, workflows, and customer needs.",
  },
  {
    icon: Target,
    title: "Practical Solutions",
    description:
      "Our goal is to make AI accessible, practical, and impactful rather than simply adding AI for the sake of it.",
  },
  {
    icon: Sparkles,
    title: "Built to Create Impact",
    description:
      "From AI chatbots and ML models to automation and digital products, we turn ideas into working systems.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent-blue)]">
            About Mentroid
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            Intelligence built around real-world problems.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Mentroid is a next-generation AI solutions company focused on
            building intelligent systems that solve real-world problems.
            We design AI systems, build ML models, and deliver practical
            automation and digital solutions.
          </p>
        </div>

        {/* Mission / Vision / What We Do */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-black/10 bg-[#f7f9fb] p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <Icon
                    size={21}
                    strokeWidth={1.7}
                    className="text-[var(--accent-blue)]"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 flex flex-col justify-between gap-8 border-t border-black/10 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-lg font-medium leading-8 text-slate-800">
            We believe AI should fit the way a business actually works—not
            force a business to work around the technology.
          </p>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold"
          >
            Build with Mentroid
            <ArrowUpRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}