"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  MoveUpRight,
  Play,
  Quote,
  X,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type VideoType = "youtube" | "vimeo" | "local";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  videoType: VideoType;
  videoUrl: string;
}

/* ============================================================
   TESTIMONIAL DATA
   Exact client content from your previous component
   ============================================================ */

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder & CEO",
    company: "Nexora",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    text: "Working with this team completely transformed our digital experience. The attention to detail, creativity, and execution were exceptional.",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_1",
  },

  {
    id: 2,
    name: "Michael Anderson",
    role: "Creative Director",
    company: "Vertex Studio",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    text: "They understood our vision from day one and turned it into something far beyond what we imagined. The final product feels premium and incredibly polished.",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_2",
  },

  {
    id: 3,
    name: "Emily Williams",
    role: "Product Lead",
    company: "Orbit Labs",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    text: "The process was smooth, collaborative and extremely professional. Every interaction felt intentional and the results speak for themselves.",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_3",
  },

  {
    id: 4,
    name: "Daniel Carter",
    role: "CEO",
    company: "Northstar",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    text: "A rare combination of strong design thinking and flawless technical execution. Our new experience has completely changed how customers perceive our brand.",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_4",
  },
];

/* ============================================================
   HELPERS
   ============================================================ */

function getYoutubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);

    let videoId = "";

    if (parsed.hostname.includes("youtu.be")) {
      videoId = parsed.pathname.replace("/", "");
    }

    if (parsed.searchParams.get("v")) {
      videoId = parsed.searchParams.get("v") || "";
    }

    if (parsed.pathname.includes("/embed/")) {
      videoId = parsed.pathname.split("/embed/")[1];
    }

    if (!videoId) return url;

    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  } catch {
    return url;
  }
}

function getVimeoEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);

    const parts = parsed.pathname.split("/").filter(Boolean);

    const videoId = parts[parts.length - 1];

    if (!videoId) return url;

    return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
  } catch {
    return url;
  }
}

/* ============================================================
   COMPONENT
   ============================================================ */

export default function ClientStories() {
  const sectionRef = useRef<HTMLElement>(null);

  const quoteRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  const isAnimating = useRef(false);

  const current = testimonials[active];

  /* ==========================================================
     SPLIT QUOTE INTO WORDS
     ========================================================== */

  const quoteWords = useMemo(() => {
    return current.text.split(" ");
  }, [current.text]);

  /* ==========================================================
     QUOTE REVEAL
     ========================================================== */

  const revealQuote = useCallback(() => {
    if (!quoteRef.current) return;

    const words = quoteRef.current.querySelectorAll(
      ".testimonial-word"
    );

    gsap.killTweensOf(words);

    gsap.fromTo(
      words,
      {
        yPercent: 110,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.025,
        ease: "power4.out",
        clearProps: "transform",
      }
    );
  }, []);

  /* ==========================================================
     INITIAL SCROLL ANIMATIONS
     ========================================================== */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stories-eyebrow", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".stories-heading", {
        y: 70,
        opacity: 0,
        duration: 1.2,
        delay: 0.05,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".stories-description", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".stories-stage", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        delay: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".stories-stage",
          start: "top 82%",
        },
      });

      gsap.from(".stories-footer", {
        y: 20,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".stories-footer",
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ==========================================================
     REVEAL INITIAL QUOTE
     ========================================================== */

  useLayoutEffect(() => {
    const timer = window.setTimeout(() => {
      revealQuote();
    }, 250);

    return () => window.clearTimeout(timer);
  }, [active, revealQuote]);

  /* ==========================================================
     TESTIMONIAL CHANGE
     ========================================================== */

  const changeTestimonial = (direction: 1 | -1) => {
    if (isAnimating.current) return;

    isAnimating.current = true;

    const next =
      (active + direction + testimonials.length) %
      testimonials.length;

    const quoteWordsCurrent = quoteRef.current?.querySelectorAll(
      ".testimonial-word"
    );

    const tl = gsap.timeline({
      onComplete: () => {
        setActive(next);
        isAnimating.current = false;
      },
    });

    /* Quote exits */

    if (quoteWordsCurrent?.length) {
      tl.to(quoteWordsCurrent, {
        yPercent: direction === 1 ? -70 : 70,
        opacity: 0,
        duration: 0.3,
        stagger: 0.012,
        ease: "power2.in",
      });
    }

    /* Card information exits */

    tl.to(
      ".testimonial-meta",
      {
        y: direction === 1 ? -15 : 15,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      },
      "<"
    );

    /* Image exits */

    tl.to(
      imageRef.current,
      {
        x: direction === 1 ? 35 : -35,
        scale: 1.06,
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
      },
      "<"
    );

    /* Prepare */

    tl.set(
      ".testimonial-meta",
      {
        y: direction === 1 ? 15 : -15,
      },
      ">"
    );

    tl.set(imageRef.current, {
      x: direction === 1 ? -35 : 35,
      scale: 1.04,
    });

    /* Bring back */

    tl.to(".testimonial-meta", {
      y: 0,
      opacity: 1,
      duration: 0.65,
      ease: "power4.out",
    });

    tl.to(
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

  /* ==========================================================
     IMAGE PARALLAX
     ========================================================== */

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!imageRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(imageRef.current, {
      x: x * 16,
      y: y * 16,
      duration: 0.7,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  /* ==========================================================
     VIDEO MODAL OPEN
     ========================================================== */

  const openVideo = () => {
    setVideoOpen(true);

    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      if (!modalRef.current || !modalContentRef.current) return;

      gsap.fromTo(
        modalRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        modalContentRef.current,
        {
          y: 45,
          scale: 0.96,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: "power4.out",
        }
      );
    });
  };

  /* ==========================================================
     VIDEO MODAL CLOSE
     ========================================================== */

  const closeVideo = () => {
    if (!modalRef.current || !modalContentRef.current) {
      setVideoOpen(false);
      document.body.style.overflow = "";
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setVideoOpen(false);
        document.body.style.overflow = "";
      },
    });

    tl.to(modalContentRef.current, {
      y: 25,
      scale: 0.97,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    }).to(
      modalRef.current,
      {
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
      },
      "<"
    );
  };

  /* ==========================================================
     ESCAPE KEY
     ========================================================== */

  useEffect(() => {
    if (!videoOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeVideo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [videoOpen]);

  /* ==========================================================
     RESTORE BODY SCROLL
     ========================================================== */

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* ==========================================================
     VIDEO URL
     ========================================================== */

  const videoSrc =
    current.videoType === "youtube"
      ? getYoutubeEmbedUrl(current.videoUrl)
      : current.videoType === "vimeo"
        ? getVimeoEmbedUrl(current.videoUrl)
        : current.videoUrl;

  /* ==========================================================
     RENDER
     ========================================================== */

  return (
    <>
      <section
        ref={sectionRef}
        data-navbar-theme="dark"
        className="relative overflow-hidden bg-[#050505] px-5 py-28 text-white md:px-10 lg:px-16 xl:px-20 lg:py-40"
      >
        {/* ====================================================
            TOP LINE
            ==================================================== */}

        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[calc(100%-40px)] -translate-x-1/2 bg-white/10 md:w-[calc(100%-80px)]" />

        {/* ====================================================
            BACKGROUND NUMBER
            ==================================================== */}

        <div className="pointer-events-none absolute right-[-5%] top-[12%] select-none text-[25vw] font-medium leading-none tracking-[-0.08em] text-white/[0.025]">
          06
        </div>

        <div className="relative mx-auto max-w-[1500px]">
          {/* ==================================================
              SECTION INTRO
              ================================================== */}

          <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              

              <h2 className="stories-heading max-w-[900px] text-[15vw] font-medium leading-[0.82] tracking-[-0.065em] sm:text-7xl md:text-8xl lg:text-[108px]">
                Client <span className="text-white/30"> Stories.
                </span>
              </h2>
            </div>

            <div className="stories-description md:col-span-4 md:pb-2">
              <p className="max-w-sm text-sm leading-6 text-white/50">
                Great work is built through partnership. Here’s
                a look at the people and teams building with
                Mentroid.
              </p>
            </div>
          </div>

          {/* ==================================================
              STORY NAVIGATION
              ================================================== */}

          {/* <div className="mb-8 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/10 pt-5">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
              Stories
            </span>

            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  disabled={isAnimating.current}
                  onClick={() => {
                    if (index === active || isAnimating.current)
                      return;

                    const direction =
                      index > active ? 1 : -1;

                    changeTestimonial(direction);
                  }}
                  className={`group flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                    index === active
                      ? "text-white"
                      : "text-white/30 hover:text-white/70"
                  }`}
                >
                  <span
                    className={`transition-all duration-500 ${
                      index === active
                        ? "h-px w-7 bg-white"
                        : "h-px w-0 bg-white group-hover:w-4"
                    }`}
                  />

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="hidden sm:inline">
                    {item.company}
                  </span>
                </button>
              ))}
            </div>
          </div> */}

          {/* ==================================================
              STORY STAGE
              ================================================== */}

          <div
            className="stories-stage relative min-h-[680px] overflow-visible"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Background index */}

            <div className="pointer-events-none absolute bottom-0 left-[-2%] select-none text-[28vw] font-medium leading-none tracking-[-0.09em] text-white/[0.035] md:text-[260px]">
              {String(current.id).padStart(2, "0")}
            </div>

            {/* =================================================
                CLIENT IMAGE
                ================================================= */}

            <div
              ref={imageRef}
              className="absolute bottom-16 left-0 z-20 hidden h-[350px] w-[260px] overflow-hidden rounded-[3px] md:block lg:h-[420px] lg:w-[320px]"
            >
              <img
                src={current.image}
                alt={current.name}
                className="h-full w-full object-cover grayscale transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white">
                <span className="h-1 w-1 rounded-full bg-white" />
                Client story
              </div>
            </div>

            {/* =================================================
                MAIN STORY CONTENT
                ================================================= */}

            <div className="relative z-10 ml-auto flex min-h-[600px] w-full max-w-[1080px] flex-col justify-between  py-10 md:pl-[100px] lg:pl-[140px]">
              {/* Top metadata */}

              <div className="testimonial-meta flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Quote
                    size={17}
                    strokeWidth={1.3}
                    className="text-white/40"
                  />

                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                    Healthcare AI
                  </span>
                </div>

                <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                  {String(current.id).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>

              {/* =================================================
                  QUOTE
                  ================================================= */}

              <div
                ref={quoteRef}
                className="max-w-[1000px] py-16 md:py-20 lg:py-24"
              >
                <p className="text-[clamp(2.5rem,5.2vw,3.2rem)] font-normal leading-[0.98] tracking-[-0.055em] text-white">
                  “{" "}
                  {quoteWords.map((word, index) => (
                    <span
                      key={`${current.id}-${index}`}
                      className="testimonial-word mr-[0.25em] inline-block opacity-0"
                    >
                      {word}
                    </span>
                  ))}{" "}
                  ”
                </p>
              </div>

              {/* =================================================
                  CLIENT INFO + STORY CTA
                  ================================================= */}

              <div className="testimonial-meta flex flex-col justify-between gap-10 border-t border-white/10 pt-6 sm:flex-row sm:items-end">
                <div>
                  <p className="text-base font-medium tracking-[-0.02em] text-white">
                    {current.name}
                  </p>

                  <p className="mt-1 text-sm text-white/40">
                    {current.role} · {current.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  {/* Listen */}

                  <button
                    type="button"
                    onClick={openVideo}
                    className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:text-white/60"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                      <Play
                        size={12}
                        fill="currentColor"
                        className="ml-[1px]"
                      />
                    </span>

                    <span>Listen to story</span>

                    <MoveUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </button>

                  {/* Arrows */}

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => changeTestimonial(-1)}
                      className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                      aria-label="Previous testimonial"
                    >
                      <ArrowLeft
                        size={15}
                        className="transition-transform duration-300 group-hover:-translate-x-0.5"
                      />
                    </button>

                    <button
                      type="button"
                      onClick={() => changeTestimonial(1)}
                      className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                      aria-label="Next testimonial"
                    >
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================
          VIDEO MODAL
          ====================================================== */}

     {/* ======================================================
    VIDEO MODAL
    ====================================================== */}

{videoOpen && (
  <div
    ref={modalRef}
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 px-5 py-8 opacity-0 backdrop-blur-xl md:px-8"
    onMouseDown={(event) => {
      if (event.target === event.currentTarget) {
        closeVideo();
      }
    }}
  >
    <div
      ref={modalContentRef}
      className="relative w-full max-w-[900px] opacity-0"
    >
      {/* Modal header */}

      <div className="mb-4 flex items-center justify-between gap-5">
        <div>
          <p className="mb-1.5 text-[9px] uppercase tracking-[0.3em] text-white/35">
            Client Story
          </p>

          <h3 className="text-lg font-medium tracking-[-0.035em] text-white md:text-xl">
            {current.name}
          </h3>

          <p className="mt-1 text-xs text-white/35">
            {current.role} · {current.company}
          </p>
        </div>

        <button
          type="button"
          onClick={closeVideo}
          className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 hover:bg-white hover:text-black"
          aria-label="Close video"
        >
          <X
            size={17}
            className="transition-transform duration-300 group-hover:rotate-90"
          />
        </button>
      </div>

      {/* Video */}

      <div className="relative aspect-video overflow-hidden rounded-[6px] border border-white/10 bg-black shadow-2xl">
        {current.videoType === "local" ? (
          <video
            src={videoSrc}
            autoPlay
            controls
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <iframe
            src={videoSrc}
            title={`${current.name} client story`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>

      {/* Modal footer */}

      <div className="mt-3 flex items-center justify-between">
        <span className="text-[8px] uppercase tracking-[0.25em] text-white/25">
          Mentroid / Client Stories
        </span>

        <span className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-white/25">
          Watch their experience
          <ExternalLink size={9} />
        </span>
      </div>
    </div>
  </div>
)}
    </>
  );
}