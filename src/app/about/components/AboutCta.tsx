
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section
      data-navbar-theme="dark"
      aria-labelledby="about-cta-heading"
      className="px-4 pb-4 sm:px-6 sm:pb-6 lg:px-5 lg:pb-5"
    >
      <div
        data-reveal="cta"
        className="group relative mx-auto flex min-h-[300px] max-w-[1600px] items-end overflow-hidden rounded-2xl bg-[#171717] sm:min-h-[400px] lg:min-h-[490px]"
      >
        <div data-parallax-image className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=85"
            alt="Modern workspace interior"
            fill
            unoptimized
            sizes="100vw"
            className="object-cover grayscale transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10"
        />

        <div className="relative z-10 w-full p-6 text-white sm:p-10 lg:p-14">
          <p
            data-reveal="eyebrow"
            className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/65 sm:text-[11px]"
          >
            Let's build what comes next
          </p>

          <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2
              id="about-cta-heading"
              data-reveal="heading"
              className="max-w-[900px] text-[clamp(2.5rem,6.5vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.07em]"
            >
              Have a problem worth solving?
            </h2>

            <Link
              href="/contact"
              className="group/button inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start border border-white/60 bg-white px-5 text-sm font-medium text-black transition-colors duration-300 hover:bg-transparent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:self-auto"
            >
              Talk to Mentroid

              <ArrowUpRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
