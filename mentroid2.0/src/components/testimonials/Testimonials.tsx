"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowLeft, ArrowRight, Quote, MoveUpRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder & CEO",
    company: "Nexora",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    text: "Working with this team completely transformed our digital experience. The attention to detail, creativity, and execution were exceptional.",
  },
  {
    id: 2,
    name: "Michael Anderson",
    role: "Creative Director",
    company: "Vertex Studio",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    text: "They understood our vision from day one and turned it into something far beyond what we imagined. The final product feels premium and incredibly polished.",
  },
  {
    id: 3,
    name: "Emily Williams",
    role: "Product Lead",
    company: "Orbit Labs",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    text: "The process was smooth, collaborative and extremely professional. Every interaction felt intentional and the results speak for themselves.",
  },
  {
    id: 4,
    name: "Daniel Carter",
    role: "CEO",
    company: "Northstar",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    text: "A rare combination of strong design thinking and flawless technical execution. Our new experience has completely changed how customers perceive our brand.",
  },
];

export default function testimonial() {
  const sectionRef = useRef<HTMLSectionElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(0);
  const isAnimating = useRef(false);

  const current = testimonials[active];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-heading", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".testimonial-counter", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const changeTestimonial = (direction: 1 | -1) => {
    if (isAnimating.current) return;

    isAnimating.current = true;

    const next =
      (active + direction + testimonials.length) % testimonials.length;

    const tl = gsap.timeline({
      onComplete: () => {
        setActive(next);
        isAnimating.current = false;
      },
    });

    tl.to([cardRef.current, textRef.current], {
      y: direction === 1 ? -35 : 35,
      opacity: 0,
      duration: 0.35,
      ease: "power2.in",
      stagger: 0.03,
    })
      .to(
        imageRef.current,
        {
          scale: 1.12,
          opacity: 0,
          x: direction === 1 ? 30 : -30,
          duration: 0.3,
          ease: "power2.in",
        },
        "<"
      )
      .set([cardRef.current, textRef.current], {
        y: direction === 1 ? 35 : -35,
      })
      .set(imageRef.current, {
        x: direction === 1 ? -30 : 30,
      })
      .to([cardRef.current, textRef.current], {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power4.out",
      })
      .to(
        imageRef.current,
        {
          x: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
        },
        "<"
      );
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(imageRef.current, {
      x: x * 18,
      y: y * 18,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-5 py-28 text-white md:px-10 lg:px-20 lg:py-40"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-white blur-[120px]" />

      <div className="relative mx-auto max-w-[1500px]">
        {/* Header */}
        <div className="testimonial-heading mb-20 flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-white/45">
              What our clients say
            </p>

            <h2 className="max-w-4xl text-5xl font-medium leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[100px]">
              Happy
              <br />
              <span className="text-white/35">Clients.</span>
            </h2>
          </div>

          <div className="max-w-xs text-sm leading-6 text-white/55">
            Real experiences from people and teams we've collaborated with
            around the world.
          </div>
        </div>

        {/* Main testimonial */}
        <div
          className="relative min-h-[600px] md:min-h-[650px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Large background number */}
          <div className="pointer-events-none absolute -bottom-12 left-0 select-none text-[180px] font-medium leading-none tracking-[-0.08em] text-white/[0.035] md:text-[280px]">
            0{current.id}
          </div>

          {/* Testimonial Card */}
          <div
            ref={cardRef}
            className="relative z-10 ml-auto flex min-h-[520px] w-full max-w-[1050px] flex-col justify-between overflow-hidden rounded-[32px] bg-white p-7 text-black shadow-2xl md:p-12 lg:p-16"
          >
            {/* top */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15">
                  <Quote size={15} />
                </div>

                <span className="text-xs uppercase tracking-[0.2em] text-black/40">
                  Testimonial
                </span>
              </div>

              <span className="text-xs tracking-[0.2em] text-black/30">
                0{current.id} / 0{testimonials.length}
              </span>
            </div>

            {/* Quote */}
            <div ref={textRef} className="relative z-20 max-w-4xl">
              <h3 className="text-3xl font-normal leading-[1.1] tracking-[-0.035em] text-black sm:text-4xl md:text-5xl lg:text-[58px]">
                “{current.text}”
              </h3>
            </div>

            {/* bottom */}
            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
              <div>
                <p className="text-lg font-medium">{current.name}</p>

                <p className="mt-1 text-sm text-black/45">
                  {current.role} · {current.company}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => changeTestimonial(-1)}
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-black/15 transition-all duration-300 hover:bg-black hover:text-white"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                </button>

                <button
                  onClick={() => changeTestimonial(1)}
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-black/15 transition-all duration-300 hover:bg-black hover:text-white"
                  aria-label="Next testimonial"
                >
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Floating Client Image */}
          <div
            ref={imageRef}
            className="absolute bottom-10 left-0 z-30 hidden h-[300px] w-[230px] overflow-hidden rounded-[24px] shadow-2xl md:block lg:h-[370px] lg:w-[290px]"
          >
            <img
              src={current.image}
              alt={current.name}
              className="h-full w-full object-cover"
            />

            {/* image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Client
            </div>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="testimonial-counter mt-10 flex items-center justify-between border-t border-white/10 pt-6">
          <div className="flex gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  if (index === active) return;

                  const direction = index > active ? 1 : -1;
                  changeTestimonial(direction);
                }}
                className="group flex items-center gap-2"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <span
                  className={`block h-[2px] transition-all duration-500 ${
                    index === active
                      ? "w-10 bg-white"
                      : "w-4 bg-white/20 group-hover:w-7 group-hover:bg-white/50"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40">
            <span>Scroll</span>
            <MoveUpRight size={13} />
          </div>
        </div>
      </div>
    </section>
  );
}