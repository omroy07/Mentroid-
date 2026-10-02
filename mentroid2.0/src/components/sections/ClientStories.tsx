"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Pause,
  Play,
} from "lucide-react";
import Image from "next/image";

type Story = {
  number: string;
  project: string;
  category: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  avatar: string;
   youtubeId: string;
};

const stories: Story[] = [
  {
    number: "01",
    project: "ECGenius",
    category: "Healthcare AI",
    quote:
      "Mentroid helped us turn a complex workflow into something our team could actually use.",
    name: "Rahul Sharma",
    role: "Founder",
    company: "ECGenius",
    initials: "RS",
    avatar: "/assets/clients/01.png",
    youtubeId: "YOUR_YOUTUBE_VIDEO_ID_1",
  },

  {
    number: "02",
    project: "LearnSphere",
    category: "Education",
    quote:
      "The system gave us a completely different way to think about our learning platform.",
    name: "Priya Patel",
    role: "Product Lead",
    company: "LearnSphere",
    initials: "PP",
    avatar: "/assets/clients/02.png",
    youtubeId: "YOUR_YOUTUBE_VIDEO_ID_2",
  },

  {
    number: "03",
    project: "AgriTech",
    category: "Agriculture AI",
    quote:
      "We were able to connect intelligence directly to the decisions happening on the ground.",
    name: "Amit Verma",
    role: "Co-founder",
    company: "AgriTech",
    initials: "AV",
    avatar: "/assets/clients/03.png",
    youtubeId: "YOUR_YOUTUBE_VIDEO_ID_3",
  },
];


const AUTOPLAY_TIME = 4.5;

export default function ClientStories() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const quoteRef = useRef<HTMLDivElement>(null);
  const clientRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  const autoplayRef = useRef<gsap.core.Tween | null>(null);
  const isAnimatingRef = useRef(false);

const [activeIndex, setActiveIndex] = useState(0);
const [isPaused, setIsPaused] = useState(false);
const [isVideoOpen, setIsVideoOpen] = useState(false);

  /**
   * -------------------------------------------------------
   * CHANGE STORY
   * -------------------------------------------------------
   */
  const changeStory = (nextIndex: number) => {
    if (isAnimatingRef.current) return;

    const normalizedIndex =
      (nextIndex + stories.length) % stories.length;

    if (normalizedIndex === activeIndex) return;

    const quote = quoteRef.current;
    const client = clientRef.current;
    const category = categoryRef.current;

    if (!quote || !client || !category) {
      setActiveIndex(normalizedIndex);
      return;
    }

    isAnimatingRef.current = true;

    autoplayRef.current?.kill();

    const direction =
      normalizedIndex > activeIndex ||
      (activeIndex === stories.length - 1 && normalizedIndex === 0)
        ? 1
        : -1;

    const nextStory = stories[normalizedIndex];

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimatingRef.current = false;
        setActiveIndex(normalizedIndex);
      },
    });

    /**
     * OUT
     */
    tl.to(
      [quote, client, category],
      {
        y: direction > 0 ? -28 : 28,
        opacity: 0,
        duration: 0.35,
        stagger: 0.025,
        ease: "power3.in",
      }
    );

    /**
     * CHANGE CONTENT
     */
    tl.call(() => {
      const quoteText = quote.querySelector(
        "[data-quote]"
      );

      const clientName = client.querySelector(
        "[data-client-name]"
      );

      const clientRole = client.querySelector(
        "[data-client-role]"
      );

     

      if (quoteText) {
        quoteText.textContent = `“${nextStory.quote}”`;
      }

      if (clientName) {
        clientName.textContent = nextStory.name;
      }

      if (clientRole) {
        clientRole.textContent = `${nextStory.role} · ${nextStory.company}`;
      }

     

      category.textContent = nextStory.category;
    });

    /**
     * RESET
     */
    tl.set([quote, client, category], {
      y: direction > 0 ? 28 : -28,
    });

    /**
     * IN
     */
    tl.to(
      [quote, client, category],
      {
        y: 0,
        opacity: 1,
        duration: 0.55,
        stagger: 0.045,
        ease: "power3.out",
      }
    );

    startAutoplay(normalizedIndex);
  };

  /**
   * -------------------------------------------------------
   * AUTOPLAY
   * -------------------------------------------------------
   */
  const startAutoplay = (currentIndex = activeIndex) => {
    autoplayRef.current?.kill();

    if (isPaused) return;

    autoplayRef.current = gsap.delayedCall(
      AUTOPLAY_TIME,
      () => {
        const next =
          (currentIndex + 1) % stories.length;

        changeStory(next);
      }
    );
  };

  /**
   * -------------------------------------------------------
   * INITIAL AUTOPLAY
   * -------------------------------------------------------
   */
  useEffect(() => {
    startAutoplay(0);

    return () => {
      autoplayRef.current?.kill();
    };
  }, []);

  /**
   * -------------------------------------------------------
   * PAUSE / RESUME
   * -------------------------------------------------------
   */
  useEffect(() => {
    if (isPaused) {
      autoplayRef.current?.kill();
    } else {
      startAutoplay(activeIndex);
    }
  }, [isPaused]);

  /**
   * -------------------------------------------------------
   * PROGRESS BARS
   * -------------------------------------------------------
   */
  useEffect(() => {
    progressRefs.current.forEach((bar, index) => {
      if (!bar) return;

      gsap.killTweensOf(bar);

      gsap.set(bar, {
        scaleX: index === activeIndex ? 0 : index < activeIndex ? 1 : 0,
        transformOrigin: "left center",
      });

      if (index === activeIndex && !isPaused) {
        gsap.to(bar, {
          scaleX: 1,
          duration: AUTOPLAY_TIME,
          ease: "none",
        });
      }
    });
  }, [activeIndex, isPaused]);

  /**
   * -------------------------------------------------------
   * KEYBOARD CONTROLS
   * -------------------------------------------------------
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        changeStory(activeIndex + 1);
      }

      if (event.key === "ArrowLeft") {
        changeStory(activeIndex - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  const activeStory = stories[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="client-stories"
       data-navbar-theme="light"
      className="
        relative
        w-full
        min-h-782vh
        overflow-hidden
        bg-[#f3f4f1]
        text-[#080808]
      "
    >
      <div
        ref={contentRef}
        className="
          relative
          min-h-screen
          px-6
          py-20
          md:px-10
          md:py-24
          lg:px-16
          lg:py-20
        "
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
      

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            mx-auto
            grid
            max-w-[1500px]
            grid-cols-1
            gap-10
         
           
           
            pt-10

            md:grid-cols-[1.4fr_0.6fr]
            md:gap-16
            md:pt-12

          
          "
        >
          <div>
            
            <h2
              className="
                max-w-[850px]
                text-[clamp(4rem,8.5vw,6rem)]
                font-medium
                leading-[0.78]
                tracking-[-0.09em]
              "
            >
              Client
            
              <span className="text-black/30"> Stories.
              </span>
            </h2>
          </div>

          <div className="flex items-end">
            <p
              className="
                max-w-[330px]
                text-[13px]
                leading-6
                text-black/45
                md:pb-1
              "
            >
              Great work is built through
              partnership. Here’s a look at the
              people and teams building with
              Mentroid.
            </p>
          </div>
        </div>

        {/* =====================================================
            MAIN STORY
        ====================================================== */}

        <div
          className="
            mx-auto
            grid
            min-h-[580px]
            max-w-[1500px]
            grid-cols-1
            gap-12
            py-16

            md:grid-cols-[0.7fr_1.3fr]
            md:gap-20
            md:py-20

            lg:min-h-[590px]
            lg:grid-cols-[0.65fr_1.35fr]
            lg:gap-24
          "
        >
          {/* ===================================================
              LEFT STORY INDEX
          ==================================================== */}

          <div
            className="
              flex
              flex-col
              justify-between
            "
          >
            <div>
              <div
                className="
                  mb-8
                  text-[9px]
                  uppercase
                  tracking-[0.22em]
                  text-black/30
                "
              >
                Stories
              </div>

              <div className="space-y-1">
                {stories.map((story, index) => {
                  const active = index === activeIndex;

                  return (
                    <button
                      key={story.number}
                      type="button"
                      onClick={() => changeStory(index)}
                      className="
                        group
                        flex
                        w-full
                        max-w-[270px]
                        items-center
                        gap-4
                        py-2
                        text-left
                      "
                    >
                      <span
                        className={`
                          w-6
                          text-[8px]
                          tracking-[0.16em]
                          transition-colors
                          duration-300
                          ${
                            active
                              ? "text-black"
                              : "text-black/25"
                          }
                        `}
                      >
                        {story.number}
                      </span>

                      <span
                        className={`
                          text-[12px]
                          uppercase
                          tracking-[0.12em]
                          transition-all
                          duration-300
                          ${
                            active
                              ? "translate-x-1 text-black"
                              : "text-black/25 group-hover:text-black/60"
                          }
                        `}
                      >
                        {story.project}
                      </span>

                      <span
                        className={`
                          ml-auto
                          h-px
                          transition-all
                          duration-500
                          ${
                            active
                              ? "w-8 bg-black/50"
                              : "w-0 bg-black/20"
                          }
                        `}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* NAVIGATION */}

            <div
              className="
                mt-12
                flex
                items-center
                gap-0
              "
            >
              <button
                type="button"
                onClick={() =>
                  changeStory(activeIndex - 1)
                }
                aria-label="Previous testimonial"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  border
                  border-black/10
                  text-black/50
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-white
                "
              >
                <ArrowLeft size={15} />
              </button>

              <button
                type="button"
                onClick={() =>
                  changeStory(activeIndex + 1)
                }
                aria-label="Next testimonial"
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  border
                  border-l-0
                  border-black/10
                  text-black/50
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-white
                "
              >
                <ArrowRight size={15} />
              </button>

              <button
                type="button"
                onClick={() =>
                  setIsPaused((value) => !value)
                }
                aria-label={
                  isPaused
                    ? "Resume autoplay"
                    : "Pause autoplay"
                }
                className="
                  ml-5
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  text-black/45
                  transition-all
                  duration-300
                  hover:border-black/30
                  hover:text-black
                "
              >
                {isPaused ? (
                  <Play size={12} />
                ) : (
                  <Pause size={12} />
                )}
              </button>
            </div>
          </div>

          {/* ===================================================
              RIGHT TESTIMONIAL
          ==================================================== */}

          <div
            className="
              relative
              flex
              flex-col
              justify-center
              border-t
              border-black/10
              pt-12

              md:border-t-0
              md:border-l
              md:border-black/10
              md:pl-14
              md:pt-0

              lg:pl-20
            "
          >
            {/* CATEGORY */}

            <div
              ref={categoryRef}
              className="
                mb-10
                text-[9px]
                uppercase
                tracking-[0.24em]
                text-black/35
              "
            >
              {activeStory.category}
            </div>

            {/* QUOTE */}

            <div
              ref={quoteRef}
              className="
                max-w-[661px]
                will-change-transform
              "
            >
              <div
                data-quote
                className="
                  text-[clamp(2.1rem,4.2vw,1.4rem)]
                  font-medium
                  leading-[0.98]
                  tracking-[-0.065em]
                  text-black/80
                "
              >
                “{activeStory.quote}”
              </div>
            </div>

            {/* CLIENT */}

            <div
              ref={clientRef}
              className="
                mt-14
                flex
                items-center
                justify-between
                gap-8
                will-change-transform
              "
            >
              <div className="flex items-center gap-4">
               <div
  data-avatar
  className="
    relative
    h-14
    w-14
    shrink-0
    rounded-full
    overflow-hidden
    rounded-[3px]
    bg-[#dedfdb]
  "
>
  <Image
    src={activeStory.avatar}
    alt={activeStory.name}
    fill
    sizes="56px"
    className="
      object-cover
      
      opacity-90
      transition-transform
      duration-700
      hover:scale-105
    "
  />
</div>

                <div>
                  <div
                    data-client-name
                    className="
                      text-[12px]
                      font-medium
                      text-black/75
                    "
                  >
                    {activeStory.name}
                  </div>

                  <div
                    data-client-role
                    className="
                      mt-1
                      text-[10px]
                      text-black/35
                    "
                  >
                    {activeStory.role} ·{" "}
                    {activeStory.company}
                  </div>
                </div>
              </div>

              {/* LISTEN / STORY */}

             <button
  type="button"
  onClick={() => {
    setIsVideoOpen(true);
    setIsPaused(true);
  }}
  className="
    hidden
    items-center
    gap-3
    text-[8px]
    uppercase
    tracking-[0.2em]
    text-black/40
    transition-colors
    hover:text-black
    md:flex
  "
>
  <span
    className="
      flex
      h-7
      w-7
      items-center
      justify-center
      rounded-full
      border
      border-black/15
      transition-all
      duration-300
      group-hover:bg-black
      group-hover:text-white
    "
  >
    <Play size={9} fill="currentColor" />
  </span>

  Listen to story
</button>
            </div>

            {/* PROGRESS */}

            <div
              className="
                mt-16
                flex
                w-full
                max-w-[760px]
                gap-2
              "
            >
              {stories.map((story, index) => (
                <button
                  key={story.number}
                  type="button"
                  onClick={() => changeStory(index)}
                  aria-label={`Go to ${story.project}`}
                  className="
                    relative
                    h-[2px]
                    flex-1
                    overflow-hidden
                    bg-black/10
                  "
                >
                  <div
                    ref={(el) => {
                      progressRefs.current[index] = el;
                    }}
                    className="
                      absolute
                      inset-y-0
                      left-0
                      w-full
                      origin-left
                      scale-x-0
                      bg-black/65
                    "
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            FOOTER
        ====================================================== */}

        {/* <div
          className="
            mx-auto
            flex
            max-w-[1500px]
            flex-col
            gap-6
            border-t
            border-black/10
            pt-7

            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div>
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-black/30
              "
            >
              {String(activeIndex + 1).padStart(2, "0")}{" "}
              /{" "}
              {String(stories.length).padStart(2, "0")}
            </span>
          </div>

          <button
            type="button"
            className="
              group
              flex
              items-center
              gap-4
              self-start
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-black/55
              sm:self-auto
            "
          >
            <span className="border-b border-black/30 pb-2">
              Become a client
            </span>

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-black/15
                transition-all
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            >
              <ArrowUpRight size={11} />
            </span>
          </button>
        </div> */}
      </div>
      {isVideoOpen && (
  <div
    className="
      fixed
      inset-0
      z-[9999]
      flex
      items-center
      justify-center
      bg-black/80
      p-5
      backdrop-blur-sm
      md:p-10
    "
    onClick={() => {
      setIsVideoOpen(false);
      setIsPaused(false);
    }}
  >
    <div
      className="
        relative
        w-full
        max-w-[1100px]
        overflow-hidden
        bg-black
        shadow-2xl
      "
      onClick={(event) => event.stopPropagation()}
    >
      {/* CLOSE */}
      <button
        type="button"
        onClick={() => {
          setIsVideoOpen(false);
          setIsPaused(false);
        }}
        aria-label="Close video"
        className="
          absolute
          right-4
          top-4
          z-20
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-white/10
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:bg-white
          hover:text-black
        "
      >
        ×
      </button>

      {/* VIDEO */}
      <div className="relative aspect-video w-full">
        <iframe
          key={activeStory.youtubeId}
          src={`https://www.youtube.com/embed/${activeStory.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={`${activeStory.project} — Client Story`}
          className="
            absolute
            inset-0
            h-full
            w-full
          "
          allow="
            autoplay;
            encrypted-media;
            picture-in-picture;
            fullscreen
          "
          allowFullScreen
        />
      </div>

      {/* VIDEO INFO */}
      <div
        className="
          flex
          items-center
          justify-between
          gap-6
          bg-[#111]
          px-5
          py-4
          text-white
          md:px-7
        "
      >
        <div>
          <div
            className="
              text-[8px]
              uppercase
              tracking-[0.22em]
              text-white/40
            "
          >
            Client story
          </div>

          <div className="mt-1 text-sm font-medium">
            {activeStory.project}
          </div>
        </div>

        <div
          className="
            hidden
            text-right
            text-[9px]
            uppercase
            tracking-[0.18em]
            text-white/40
            sm:block
          "
        >
          {activeStory.name}
          <br />
          {activeStory.company}
        </div>
      </div>
    </div>
  </div>
)}
    </section>
  );
}