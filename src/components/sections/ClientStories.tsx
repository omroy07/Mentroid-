"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Play,
  Quote,
  X,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  videoUrl?: string;
  companyInitials: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    company: "Company One",
    companyInitials: "C1",
    quote:
      "Mentroid helped us rethink how we approach technology. The team understood our challenges and translated our ideas into a practical digital solution.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1100&q=85",
    // Add a real video URL when available.
    videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    name: "Sarah Williams",
    role: "Head of Operations",
    company: "Company Two",
    companyInitials: "C2",
    quote:
      "What stood out was the team's ability to understand our workflow and identify opportunities to make our operations simpler, faster, and more effective.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1100&q=85",
    videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
  {
    name: "David Chen",
    role: "Product Director",
    company: "Company Three",
    companyInitials: "C3",
    quote:
      "We wanted a technology partner who could think beyond the brief. The collaboration helped us turn an ambitious idea into a clearer product direction.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1100&q=85",
    videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
];

const AUTOPLAY_DELAY = 7000;

function getEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);

    if (
      parsed.hostname.includes("youtube.com") ||
      parsed.hostname.includes("www.youtube.com")
    ) {
      const id = parsed.searchParams.get("v");

      if (id) {
        return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
      }

      if (parsed.pathname.startsWith("/embed/")) {
        return `${url}${url.includes("?") ? "&" : "?"}autoplay=1`;
      }
    }

    if (parsed.hostname === "youtu.be") {
      const id = parsed.pathname.slice(1);

      if (id) {
        return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
      }
    }

    if (parsed.hostname.includes("vimeo.com")) {
      const id = parsed.pathname.split("/").filter(Boolean).pop();

      if (id && /^\d+$/.test(id)) {
        return `https://player.vimeo.com/video/${id}?autoplay=1`;
      }
    }

    return url;
  } catch {
    return url;
  }
}

export default function ClientStories() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoNotice, setVideoNotice] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const story = testimonials[active];

  const goTo = useCallback((direction: number) => {
    setActive((current) => {
      return (current + direction + testimonials.length) % testimonials.length;
    });

    setVideoNotice(false);
  }, []);

  useEffect(() => {
    if (paused || videoOpen) return;

    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % testimonials.length);
      setVideoNotice(false);
    }, AUTOPLAY_DELAY);

    return () => window.clearTimeout(timer);
  }, [active, paused, videoOpen]);

  // Animate the incoming image and testimonial content.
  useLayoutEffect(() => {
    const image = imageRef.current;
    const content = contentRef.current;
    const progress = progressRef.current;

    if (!image || !content) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        image,
        {
          opacity: 0.45,
          scale: 1.035,
          y: 8,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          overwrite: true,
        },
      );

      gsap.fromTo(
        content.children,
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.075,
          ease: "power2.out",
          clearProps: "transform",
          overwrite: true,
        },
      );

      if (progress) {
        gsap.fromTo(
          progress,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left center",
            duration: AUTOPLAY_DELAY / 1000,
            ease: "none",
          },
        );
      }
    }, sectionRef);

    return () => context.revert();
  }, [active]);

  // Reveal the section when it enters the viewport.
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.fromTo(
          section.querySelectorAll("[data-reveal]"),
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          },
        );
      },
    });

    return () => trigger.kill();
  }, []);

  useEffect(() => {
    if (!videoOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVideoOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [videoOpen]);

  const handleWatchStory = () => {
    if (!story.videoUrl) {
      setVideoNotice(true);
      return;
    }

    setVideoNotice(false);
    setVideoOpen(true);
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-white py-20 text-[#17191f] sm:py-24 lg:py-32"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-label="Client stories"
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-14">
          {/* Section heading */}

          <div data-reveal className="mb-14 text-center sm:mb-20 lg:mb-24">
            <h2 className="mx-auto max-w-5xl text-3xl font-medium leading-[1.15] tracking-[-0.055em] sm:text-5xl lg:text-[64px]">
              Hear Out From Our Clients
            </h2>
          </div>

          {/* Testimonial layout */}
          <div className="grid grid-cols-1 items-centre gap-8 lg:grid-cols-[0.85fr_1.15fr]  lg:grid-cols-[588px_minmax(0,1fr)] lg:gap-20 xl:gap-24">

          
            <div
              data-reveal
            className="relative mx-auto aspect-[4/4.15] w-full max-w-[588px] overflow-hidden rounded-[5px] bg-slate-100">
            
              <img
                ref={imageRef}
                key={story.image}
                src={story.image}
                alt={`Portrait of ${story.name}`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.opacity = "0";
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
            </div>

        
            <div
              ref={contentRef}
              className="flex min-w-0 flex-col justify-between py-2 sm:py-5 lg:py-8"
            >
              <div>
                <blockquote
                  key={`quote-${active}`}
                  className="text-[26px] font-medium leading-[1.35] tracking-[-0.035em] text-[#17191f] sm:text-3xl lg:text-[clamp(28px,3vw,43px)]"
                >
                  “{story.quote}”
                </blockquote>

                <div className="mt-8 border-t border-slate-200 pt-5">
                  <p className="text-sm font-semibold text-[#17191f]">
                    {story.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {story.role}, {story.company}
                  </p>
                </div>

              
                <div className="mt-7">
                  <button
                    type="button"
                    onClick={handleWatchStory}
                    className="group inline-flex min-h-11 items-center gap-3 border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-900 transition-colors duration-200 hover:border-[#29443b] hover:bg-[#29443b] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                    aria-label={`Watch ${story.name}'s story`}
                  >
                    <Play size={15} fill="currentColor" />
                    Watch story
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>

                  {videoNotice && (
                    <p role="status" className="mt-3 text-sm text-slate-500">
                      This story's video is coming soon. Add its video URL to
                      enable playback.
                    </p>
                  )}
                </div>
              </div>

              {/* Progress indicators and navigation */}
              <div className="mt-12 sm:mt-16">
                <div className="mb-7 grid grid-cols-3 gap-3">
                  {testimonials.map((item, index) => (
                    <button
                      type="button"
                      key={item.companyInitials}
                      onClick={() => {
                        setActive(index);
                        setVideoNotice(false);
                      }}
                      className="group min-w-0 text-left"
                      aria-label={`Show story ${index + 1}: ${item.name}`}
                      aria-current={active === index ? "true" : undefined}
                    >
                      <span className="relative mb-3 block h-[3px] overflow-hidden bg-slate-200">
                        {active === index && (
                          <span
                            ref={progressRef}
                            key={`progress-${active}`}
                            className="absolute inset-0 block origin-left bg-[#29443b]"
                          />
                        )}

                        {active !== index && index < active && (
                          <span className="absolute inset-0 bg-[#29443b]" />
                        )}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between  pt-5">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => goTo(-1)}
                      className="flex h-11 w-11 items-center justify-center border border-slate-200 text-slate-900 transition-colors hover:border-[#29443b] hover:bg-[#29443b] hover:text-white focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2"
                      aria-label="Previous testimonial"
                    >
                      <ArrowLeft size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={() => goTo(1)}
                      className="flex h-11 w-11 items-center justify-center border border-slate-200 text-slate-900 transition-colors hover:border-[#29443b] hover:bg-[#29443b] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      aria-label="Next testimonial"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video modal */}
      {videoOpen && story.videoUrl && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${story.name}'s client story video`}
          onMouseEnter={() => setPaused(true)}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setVideoOpen(false);
            }
          }}
        >
          <button
            type="button"
            onClick={() => setVideoOpen(false)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-white/25 text-white transition-colors hover:bg-white hover:text-slate-950 sm:right-8 sm:top-8"
            aria-label="Close video"
          >
            <X size={21} />
          </button>

          <div className="w-full max-w-5xl">
            <div className="mb-4 text-sm text-white/70">
              {story.name} — {story.company}
            </div>

            <div className="relative aspect-video overflow-hidden bg-black">
              <iframe
                key={story.videoUrl}
                src={getEmbedUrl(story.videoUrl)}
                title={`${story.name} client story`}
                className="absolute inset-0 h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
