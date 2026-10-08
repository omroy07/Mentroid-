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
   VIDEO HELPERS
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
  const imageRef = useRef<HTMLDivElement>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  const isAnimating = useRef(false);

  const current = testimonials[active];

  /* ============================================================
     QUOTE WORDS
     ============================================================ */

  const quoteWords = useMemo(() => {
    return current.text.split(" ");
  }, [current.text]);

  /* ============================================================
     QUOTE REVEAL
     ============================================================ */

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

  /* ============================================================
     SECTION REVEAL
     ============================================================ */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reveal = (
        selector: string,
        vars: gsap.TweenVars,
        trigger: string | Element = sectionRef.current!
      ) => {
        gsap.from(selector, {
          ...vars,
          scrollTrigger: {
            trigger,
            start: "top 82%",
            once: true,
          },
        });
      };

      reveal(".stories-eyebrow", {
        y: 25,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      reveal(".stories-heading", {
        y: 55,
        opacity: 0,
        duration: 1.1,
        delay: 0.05,
        ease: "power4.out",
      });

      reveal(".stories-description", {
        y: 25,
        opacity: 0,
        duration: 0.9,
        delay: 0.1,
        ease: "power3.out",
      });

      reveal(".stories-stage", {
        y: 55,
        opacity: 0,
        duration: 1.1,
        delay: 0.1,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ============================================================
     INITIAL QUOTE
     ============================================================ */

  useLayoutEffect(() => {
    const timer = window.setTimeout(() => {
      revealQuote();
    }, 200);

    return () => window.clearTimeout(timer);
  }, [active, revealQuote]);

  /* ============================================================
     CHANGE TESTIMONIAL
     ============================================================ */

  const changeTestimonial = useCallback(
    (direction: 1 | -1) => {
      if (isAnimating.current) return;

      isAnimating.current = true;

      const next =
        (active + direction + testimonials.length) %
        testimonials.length;

      const quoteWordsCurrent =
        quoteRef.current?.querySelectorAll(
          ".testimonial-word"
        );

      const tl = gsap.timeline({
        onComplete: () => {
          setActive(next);
          isAnimating.current = false;
        },
      });

      if (quoteWordsCurrent?.length) {
        tl.to(quoteWordsCurrent, {
          yPercent: direction === 1 ? -70 : 70,
          opacity: 0,
          duration: 0.3,
          stagger: 0.012,
          ease: "power2.in",
        });
      }

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

      if (imageRef.current) {
        tl.to(
          imageRef.current,
          {
            x: direction === 1 ? 30 : -30,
            scale: 1.04,
            opacity: 0,
            duration: 0.35,
            ease: "power2.in",
          },
          "<"
        );

        tl.set(imageRef.current, {
          x: direction === 1 ? -30 : 30,
          scale: 1.02,
        });

        tl.to(
          imageRef.current,
          {
            x: 0,
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: "power4.out",
          },
          ">"
        );
      }

      tl.to(
        ".testimonial-meta",
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power4.out",
        },
        "<"
      );
    },
    [active]
  );

  /* ============================================================
     IMAGE PARALLAX
     ============================================================ */

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!imageRef.current) return;

    /*
     * Disable the effect on touch devices.
     */
    if (window.matchMedia("(hover: none)").matches) return;

    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(imageRef.current, {
      x: x * 12,
      y: y * 12,
      duration: 0.6,
      ease: "power3.out",
      overwrite: true,
    });
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
      overwrite: true,
    });
  };

  /* ============================================================
     VIDEO MODAL
     ============================================================ */

  const openVideo = () => {
    setVideoOpen(true);

    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      if (!modalRef.current || !modalContentRef.current) {
        return;
      }

      gsap.fromTo(
        modalRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.35,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        modalContentRef.current,
        {
          y: 30,
          scale: 0.97,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "power4.out",
        }
      );
    });
  };

  /* ============================================================
     CLOSE VIDEO
     ============================================================ */

  const closeVideo = useCallback(() => {
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
      y: 20,
      scale: 0.97,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
    }).to(
      modalRef.current,
      {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      },
      "<"
    );
  }, []);

  /* ============================================================
     ESCAPE
     ============================================================ */

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
  }, [videoOpen, closeVideo]);

  /* ============================================================
     RESTORE SCROLL
     ============================================================ */

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* ============================================================
     VIDEO URL
     ============================================================ */

  const videoSrc =
    current.videoType === "youtube"
      ? getYoutubeEmbedUrl(current.videoUrl)
      : current.videoType === "vimeo"
        ? getVimeoEmbedUrl(current.videoUrl)
        : current.videoUrl;

  /* ============================================================
     RENDER
     ============================================================ */

  return (
    <>
      <section
        ref={sectionRef}
        data-navbar-theme="dark"
        className="
          relative
          overflow-hidden
          bg-[#050505]
       
          px-5
          py-24
          text-white

         sm:px-6
    sm:py-24

    md:px-10
    md:py-28

    lg:px-16
    lg:py-24

    xl:px-20
    xl:py-28
        "
      >
        {/* TOP LINE */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-px
            w-[calc(100%-40px)]
            -translate-x-1/2
            bg-white/10

            sm:w-[calc(100%-48px)]

            md:w-[calc(100%-80px)]
          "
        />

        {/* BACKGROUND NUMBER */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-8%]
            top-[10%]
            select-none
            text-[42vw]
            font-medium
            leading-none
            tracking-[-0.08em]
            text-white/[0.025]

            sm:text-[35vw]

            md:text-[30vw]

            lg:text-[25vw]
          "
        >
          06
        </div>

        <div className="relative mx-auto max-w-[1500px]">
          {/* ==================================================
              INTRO
          ================================================== */}

          <div
            className="
              mb-14
              grid
              grid-cols-1
              gap-8

              sm:mb-16
              sm:gap-10

              md:mb-20
              md:grid-cols-12
              md:items-end
              md:gap-12
            "
          >
            <div className="md:col-span-8">
              <div
                className="
                  stories-eyebrow
                  mb-5
                  flex
                  items-center
                  gap-3

                  sm:mb-6
                "
              >
               
               
              </div>

              <h2
                className="
                  stories-heading
                  max-w-[900px]
                  text-[clamp(3.5rem,16vw,5.8rem)]
                  font-medium
                  leading-[0.82]
                  tracking-[-0.075em]

                  sm:text-[clamp(4.5rem,11vw,7rem)]

                  md:text-8xl

                  lg:text-[108px]
                "
              >
                Client{" "}
                <span className="text-white/30">
                  Stories.
                </span>
              </h2>
            </div>

            <div
              className="
                stories-description
                md:col-span-4
                md:pb-2
              "
            >
              <p
                className="
                  max-w-sm
                  text-[12px]
                  leading-6
                  text-white/50

                  sm:text-[13px]
                  sm:leading-7

                  md:text-sm
                  md:leading-6
                "
              >
                Great work is built through partnership.
                Here’s a look at the people and teams
                building with Mentroid.
              </p>
            </div>
          </div>

          {/* ==================================================
              STORY STAGE
          ================================================== */}

          <div
            className="
              stories-stage
              relative
              overflow-visible

              min-h-0

               md:min-h-[450px]
    lg:min-h-[450px]
    xl:min-h-[620px]
            "
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* BACKGROUND INDEX */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-[20%]
                left-[-3%]
                select-none
                text-[45vw]
                font-medium
                leading-none
                tracking-[-0.09em]
                text-white/[0.035]

                sm:text-[38vw]

                md:text-[28vw]

                lg:text-[260px]
              "
            >
              {String(current.id).padStart(2, "0")}
            </div>

            {/* ==================================================
                MOBILE / TABLET IMAGE
            ================================================== */}

            <div
              ref={imageRef}
              className="
                relative
                z-20
                mb-8
                h-[56vw]
                min-h-[230px]
                max-h-[360px]
                w-full
                overflow-hidden
                rounded-[3px]

                sm:h-[48vw]
                sm:max-h-[380px]

                md:absolute
                md:bottom-10
                md:left-0
                md:mb-[150px]
                md:h-[350px]
                md:w-[260px]

                lg:h-[420px]
                lg:w-[320px]
              "
            >
              <img
                src={current.image}
                alt={current.name}
                loading="lazy"
                decoding="async"
                className="
                  h-full
                  w-full
                  object-cover
                  grayscale
                  transition-transform
                  duration-700
                  will-change-transform
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/55
                  via-transparent
                  to-transparent
                "
              />

             
            </div>

            {/* ==================================================
                MAIN STORY CONTENT
            ================================================== */}

            <div
              className="
                relative
                z-10
                ml-auto
                flex
                w-full
                max-w-[1080px]
                flex-col

                md:min-h-[600px]
                md:justify-between
                md:pl-[100px]

                lg:min-h-[450px]
                lg:pl-[140px]
              "
            >
              {/* TOP META */}

              <div
                className="
                  testimonial-meta
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                <div className="flex min-w-0 items-center gap-3">
                  <Quote
                    size={16}
                    strokeWidth={1.3}
                    className="shrink-0 text-white/40"
                  />

                  <span
                    className="
                      truncate
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-white/35

                      sm:text-[9px]
                      sm:tracking-[0.23em]
                    "
                  >
                    Healthcare AI
                  </span>
                </div>

                <span
                  className="
                    shrink-0
                    text-[8px]
                    uppercase
                    tracking-[0.18em]
                    text-white/25

                    sm:text-[9px]
                    sm:tracking-[0.2em]
                  "
                >
                  {String(current.id).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>

              {/* ==================================================
                  QUOTE
              ================================================== */}
<div
  ref={quoteRef}
  className="max-w-[1000px] my-6 sm:my-8 md:my-10"
>
  <p
    className="
      text-[clamp(1.6rem,8.5vw,3rem)]
      font-normal
      leading-[0.98]
      tracking-[-0.055em]
      text-white

      sm:text-[clamp(1.3rem,7vw,3.2rem)]

      md:text-[clamp(2.6rem,5.2vw,3.2rem)]
    "
  >
    <span className="testimonial-word inline-block opacity-0">
      “
    </span>{" "}

    {quoteWords.map((word, index) => (
      <span
        key={`${current.id}-${index}`}
        className="
          testimonial-word
          mr-[0.2em]
          inline-block
          opacity-0
        "
      >
        {word}
      </span>
    ))}

    {" "}
    <span className="testimonial-word inline-block opacity-0">
      ”
    </span>
  </p>
</div>
              {/* ==================================================
                  CLIENT INFO + ACTIONS
              ================================================== */}

              <div
                className="
                  testimonial-meta
                  flex
                  flex-col
                  gap-7
                  border-t
                  border-white/10
                  pt-5

                  sm:gap-8
                  sm:pt-6

                  md:flex-row
                  md:items-end
                  md:justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-[15px]
                      font-medium
                      tracking-[-0.02em]
                      text-white

                      sm:text-base
                    "
                  >
                    {current.name}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[12px]
                      text-white/40

                      sm:text-sm
                    "
                  >
                    {current.role} · {current.company}
                  </p>
                </div>

                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-4

                    sm:gap-5
                  "
                >
                  {/* LISTEN */}

                  <button
                    type="button"
                    onClick={openVideo}
                    className="
                      group
                      flex
                      min-h-10
                      items-center
                      gap-2.5
                      text-[8px]
                      uppercase
                      tracking-[0.16em]
                      text-white
                      transition-colors
                      duration-300
                      hover:text-white/60

                      sm:gap-3
                      sm:text-[10px]
                      sm:tracking-[0.2em]
                    "
                  >
                    <span
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        transition-all
                        duration-300

                        sm:h-10
                        sm:w-10

                        group-hover:border-white
                        group-hover:bg-white
                        group-hover:text-black
                      "
                    >
                      <Play
                        size={11}
                        fill="currentColor"
                        className="ml-[1px]"
                      />
                    </span>

                    <span>Listen to story</span>

                    <MoveUpRight
                      size={12}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </button>

                  {/* ARROWS */}

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        changeTestimonial(-1)
                      }
                      className="
                        group
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/15
                        transition-all
                        duration-300

                        sm:h-10
                        sm:w-10

                        hover:border-white
                        hover:bg-white
                        hover:text-black
                      "
                      aria-label="Previous testimonial"
                    >
                      <ArrowLeft
                        size={14}
                        className="
                          transition-transform
                          duration-300
                          group-hover:-translate-x-0.5
                        "
                      />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        changeTestimonial(1)
                      }
                      className="
                        group
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/15
                        transition-all
                        duration-300

                        sm:h-10
                        sm:w-10

                        hover:border-white
                        hover:bg-white
                        hover:text-black
                      "
                      aria-label="Next testimonial"
                    >
                      <ArrowRight
                        size={14}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-0.5
                        "
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          VIDEO MODAL
      ======================================================== */}

      {videoOpen && (
        <div
          ref={modalRef}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-black/90
            px-4
            py-6
            opacity-0
            backdrop-blur-xl

            sm:px-6
            sm:py-8

            md:px-8
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeVideo();
            }
          }}
        >
          <div
            ref={modalContentRef}
            className="
              relative
              w-full
              max-w-[900px]
              opacity-0
            "
          >
            {/* MODAL HEADER */}

            <div
              className="
                mb-3
                flex
                items-start
                justify-between
                gap-4

                sm:mb-4
                sm:gap-5
              "
            >
              <div className="min-w-0">
                <p
                  className="
                    mb-1
                    text-[8px]
                    uppercase
                    tracking-[0.25em]
                    text-white/35

                    sm:text-[9px]
                    sm:tracking-[0.3em]
                  "
                >
                  Client Story
                </p>

                <h3
                  className="
                    truncate
                    text-base
                    font-medium
                    tracking-[-0.035em]
                    text-white

                    sm:text-lg

                    md:text-xl
                  "
                >
                  {current.name}
                </h3>

                <p
                  className="
                    mt-1
                    truncate
                    text-[11px]
                    text-white/35

                    sm:text-xs
                  "
                >
                  {current.role} · {current.company}
                </p>
              </div>

              <button
                type="button"
                onClick={closeVideo}
                className="
                  group
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  text-white
                  transition-all
                  duration-300

                  sm:h-10
                  sm:w-10

                  hover:bg-white
                  hover:text-black
                "
                aria-label="Close video"
              >
                <X
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-90
                  "
                />
              </button>
            </div>

            {/* VIDEO */}

            <div
              className="
                relative
                aspect-video
                w-full
                overflow-hidden
                rounded-[5px]
                border
                border-white/10
                bg-black
                shadow-2xl
              "
            >
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
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>

            {/* MODAL FOOTER */}

            <div
              className="
                mt-3
                flex
                items-center
                justify-between
                gap-4
              "
            >
              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.2em]
                  text-white/25

                  sm:text-[8px]
                  sm:tracking-[0.25em]
                "
              >
                Mentroid / Client Stories
              </span>

              <span
                className="
                  hidden
                  items-center
                  gap-2
                  text-[7px]
                  uppercase
                  tracking-[0.18em]
                  text-white/25

                  sm:flex
                  sm:text-[8px]
                  sm:tracking-[0.2em]
                "
              >
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