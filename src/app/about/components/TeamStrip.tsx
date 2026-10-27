
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const teamPhotos = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85",
    alt: "Colleagues collaborating around a table",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85",
    alt: "Team members discussing ideas",
  },
  {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
    alt: "People working together in a collaborative environment",
  },
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    alt: "A modern collaborative workspace",
  },
];

export default function TeamStrip() {
  return (
    <section
      data-navbar-theme="light"
      aria-labelledby="team-strip-heading"
      className="px-4 py-14 sm:px-6 sm:py-20 lg:px-5 lg:py-24"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Heading and team link */}
        <div className="mb-6 flex items-end justify-between gap-4 px-1 sm:mb-8 sm:px-0">
          <div>
            <p
              data-reveal="eyebrow"
              className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/50 sm:text-[11px]"
            >
              People behind the work
            </p>

            <h2
              id="team-strip-heading"
              data-reveal="heading"
              className="mt-3 text-3xl font-medium leading-tight tracking-[-0.055em] sm:text-5xl"
            >
              Better work, together.
            </h2>
          </div>

          <Link
            href="/team"
            className="group inline-flex min-h-11 shrink-0 items-center gap-2 text-sm text-black/70 transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <span className="hidden sm:inline">Meet the team</span>
            <span className="sm:hidden">Our team</span>
            <ArrowUpRight
              size={15}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Responsive photography strip */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {teamPhotos.map((photo, index) => (
            <div
              key={photo.src}
              data-reveal="team-photo"
              className="group relative h-[130px] overflow-hidden rounded-md bg-[#e8e8e8] sm:h-[180px] lg:h-[230px]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                unoptimized
                sizes="(max-width: 639px) 50vw, 25vw"
                className="object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <p className="mt-3 text-[9px] uppercase tracking-[0.16em] text-black/40 sm:text-[10px]">
          Temporary photography — replace with real Mentroid team images.
        </p>
      </div>
    </section>
  );
}
