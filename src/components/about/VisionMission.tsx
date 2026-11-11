
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VisionMission() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const elements = section.querySelectorAll("[data-vm-reveal]");

      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        gsap.set(elements, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        elements,
        { autoAlpha: 0, y: 22 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="ma-vision-mission-title"
      className="overflow-hidden bg-[#f0eee9] px-5 py-20 text-[#202020] sm:px-8 sm:py-24 lg:px-16 lg:py-32"
    >
      <div 
  className="
    mx-auto
    mt-0
    w-full
    max-w-[1280px]

    sm:-mt-20
    lg:-mt-40
  "
>
        {/* Centered image */}
      
{/* Full-width human–robot image */}
<div data-vm-reveal className="w-[105%]">
  <img
    src="/assets/about/hands1.png"
    alt="A human hand reaching toward a robotic hand, representing human and artificial intelligence"
    loading="lazy"
    decoding="async"
    className="relative left-[47%] block h-auto w-screen max-w-none -translate-x-1/2 object-contain"
  />
</div>


        {/* Mission and vision content */}
       {/* Mission and Vision content */}
<div
  className="
    mx-auto
    mt-12
    grid
    w-full
    max-w-[1050px]
    grid-cols-1
    gap-12

    sm:mt-16
    sm:gap-14

    lg:mt-20
    lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
    lg:gap-20

    xl:max-w-[1100px]
  "
>
  {/* Mission */}
  <article
    data-vm-reveal
    className="
      min-w-0
      w-full
    "
  >
    <h2
      id="ma-vision-mission-title"
      className="
        m-0
        text-[clamp(30px,3vw,38px)]
        font-[450]
        leading-[1.05]
        tracking-[-0.055em]
      "
    >
      Our Mission
    </h2>

    <p
      className="
        mt-5
        w-full
        max-w-[465px]

        text-[15px]
        leading-[1.55]
        text-[#454545]

        sm:text-base

        lg:text-[20px]
        lg:leading-[1.5]
      "
    >
      We bring AI, automation and software development together to help
      businesses solve challenges, simplify complex work and turn ideas
      into practical solutions.
    </p>
  </article>

  {/* Vision */}
  <article
    data-vm-reveal
    className="
      min-w-0
      w-full
    "
  >
    <h2
      className="
        m-0
        text-[clamp(30px,3vw,38px)]
        font-[450]
        leading-[1.05]
        tracking-[-0.055em]
      "
    >
      Our Vision
    </h2>

    <p
      className="
        mt-5
        w-full
        max-w-[465px]

        text-[15px]
        leading-[1.55]
        text-[#454545]

        sm:text-base

        lg:text-[20px]
        lg:leading-[1.5]
      "
    >
      We envision a future where intelligent technology helps businesses
      make better decisions, discover new possibilities and grow with
      confidence.
    </p>
  </article>
</div>
      </div>
    </section>
  );
}
