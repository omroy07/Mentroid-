
import Image from "next/image";

export default function MissionSection() {
  return (
    <section
      id="our-mission"
      data-navbar-theme="light"
      aria-labelledby="mission-heading"
      className="px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-14 lg:pb-24 lg:pt-20"
    >
      {/* Centered mission statement */}
      <div className="mx-auto max-w-[920px] text-center">
        {/* <p
          data-reveal="eyebrow"
          className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/50 sm:text-[11px]"
        >
          Our mission
        </p> */}

        <h2
          id="mission-heading"
          data-reveal="heading"
          className="mx-auto mt-5 max-w-[880px] text-[clamp(2.25rem,5.2vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.065em]"
        >
          Make advanced technology useful for real-world business.
        </h2>

        <p
          data-reveal="body"
          className="mx-auto mt-5 max-w-[700px] text-sm leading-7 text-black/60 sm:text-base sm:leading-8"
        >
          Mentroid brings AI, automation, machine learning, and software
          engineering together to help businesses solve meaningful problems.
          We start with the work that needs to get done, then build technology
          around the people and processes that make it happen.
        </p>
      </div>

      {/* Wide photographic section */}
      <figure
        data-reveal="image"
        className="mx-auto mt-10 max-w-[1120px] sm:mt-14"
      >
        <div className="group relative h-[250px] overflow-hidden rounded-xl bg-[#e8e8e8] sm:h-[390px] lg:h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85"
            alt="Modern collaborative workspace"
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 1120px"
            className="object-cover grayscale transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
          />
        </div>

        <figcaption className="mt-3 text-center text-[9px] uppercase tracking-[0.16em] text-black/40 sm:text-[10px]">
          Sehore, Madhya Pradesh, India · Working with teams across locations
        </figcaption>
      </figure>
    </section>
  );
}
