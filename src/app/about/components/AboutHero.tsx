
import Image from "next/image";


export default function AboutHero() {
  return (
    <section
      data-navbar-theme="light"
      aria-labelledby="about-heading"
      className="px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-5 lg:pb-20 lg:pt-28"
    >
      <div
        data-reveal="hero"
        className="group relative mx-auto h-[360px] max-w-[1600px] overflow-hidden rounded-2xl bg-[#222] sm:h-[470px] lg:h-[min(48vw,650px)] lg:rounded-[22px]"
      >
        <div data-parallax-image className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=85"
            alt="Team collaborating around a table"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover grayscale transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/10"
        />

        <div className="absolute inset-x-5 bottom-6 flex items-end justify-between gap-5 text-white sm:inset-x-8 sm:bottom-8 lg:inset-x-10 lg:bottom-10">
          <div>
           

            <h1
              id="about-heading"
              data-reveal="hero-title"
              className="mt-3 text-5xl font-medium leading-[0.92] tracking-[-0.065em] sm:text-6xl lg:text-5xl"
            >
              About 
            </h1>
          </div>

         
        </div>
      </div>
    </section>
  );
}
