"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
};

const MEDIA = {
  timeline1:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=85",
  story:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
  timeline2:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=85",
  timeline3:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85",
  office:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85",
};

const founders: TeamMember[] = [
  {
    id: "founder-1",
    name: "Founder Name",
    role: "Founder & CEO",
    image: MEDIA.timeline1,
    bio: "Leading Mentroid's vision, strategy and growth, with a focus on building useful technology and long-term client relationships.",
    linkedin: "https://www.linkedin.com/in/replace-with-founder-profile/",
  },
  {
    id: "founder-2",
    name: "Co-founder Name",
    role: "Co-founder",
    image: MEDIA.story,
    bio: "Helping turn ideas into useful products and services through thoughtful planning, collaboration and execution.",
    linkedin: "https://www.linkedin.com/in/replace-with-cofounder-profile/",
  },
];

const executives: TeamMember[] = [
  {
    id: "executive-1",
    name: "Executive Name",
    role: "Chief Technology Officer",
    image: MEDIA.timeline1,
    bio: "Responsible for technology direction, engineering quality and helping deliver dependable solutions.",
    linkedin: "https://www.linkedin.com/in/replace-with-executive-profile/",
  },
  {
    id: "executive-2",
    name: "Executive Name",
    role: "Head of AI & Machine Learning",
    image: MEDIA.story,
    bio: "Guiding AI, machine learning and applied research initiatives with a focus on practical outcomes.",
    linkedin: "https://www.linkedin.com/in/replace-with-executive-profile/",
  },
  {
    id: "executive-3",
    name: "Executive Name",
    role: "Head of Engineering",
    image: MEDIA.timeline2,
    bio: "Helping deliver reliable software, maintainable systems and digital products.",
    linkedin: "https://www.linkedin.com/in/replace-with-executive-profile/",
  },
  {
    id: "executive-4",
    name: "Executive Name",
    role: "Head of Operations",
    image: MEDIA.office,
    bio: "Supporting clear processes, team collaboration and dependable delivery.",
    linkedin: "https://www.linkedin.com/in/replace-with-executive-profile/",
  },
  {
    id: "executive-5",
    name: "Executive Name",
    role: "Head of Product",
    image: MEDIA.timeline3,
    bio: "Connecting user needs, product decisions and implementation to help teams build useful solutions.",
    linkedin: "https://www.linkedin.com/in/replace-with-executive-profile/",
  },
];

const allTeamMembers = [...founders, ...executives];

export default function OurTeam() {
  const [openBio, setOpenBio] = useState<string | null>(null);

  /* Lock page scrolling while the profile modal is open */
  useEffect(() => {
    if (!openBio) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenBio(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [openBio]);

  return (
    <section
      id="team"
      data-team-reveal
      data-navbar-theme="dark"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#17171c]
        text-[#f4f2ed]

        px-5
        py-16

        sm:px-8
        sm:py-20

        md:px-12
        md:py-28

        lg:px-16
        lg:py-32
      "
    >
      {/* ---------------------------------------------------------
          TEAM CONTAINER
      --------------------------------------------------------- */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1800px]
        "
      >
        {/* -------------------------------------------------------
            HEADER
        ------------------------------------------------------- */}

        <header
          data-reveal
          className="
            mb-10

            sm:mb-12

            md:mb-14

            lg:mb-16
          "
        >
          <h2
            className="
              m-0
              max-w-[1000px]

              text-[clamp(2.6rem,7vw,5.25rem)]
              font-normal
              leading-[0.96]
              tracking-[-0.065em]
            "
          >
            Meet our team
          </h2>
        </header>

        {/* =======================================================
            FOUNDERS
        ======================================================= */}

        <div
          data-reveal
          className="
            mb-14

            sm:mb-16

            md:mb-20

            lg:mb-[76px]
          "
        >
          <h3
            className="
              m-0
              mb-7

              text-[clamp(1.25rem,1.6vw,1.75rem)]
              font-normal
              leading-[1.25]
              tracking-[-0.035em]

              sm:mb-8

              md:mb-9
            "
          >
            Founders
          </h3>

          <div
            className="
               grid
    grid-cols-1
    gap-6

    sm:grid-cols-2
    sm:gap-4

    md:grid-cols-3
    md:gap-5
      lg:grid-cols-3      
    lg:gap-6
            "
          >
            {founders.map((person) => (
              <button
                key={person.id}
                type="button"
                onClick={() => setOpenBio(person.id)}
                aria-label={`View ${person.name}, ${person.role}`}
                className="
                  group
                  relative
                  block
                  w-full
                  min-w-0
                  cursor-pointer
                  border-0
                  bg-transparent
                  p-0
                  text-left
                  text-inherit

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#a6c6ff]
                  focus-visible:ring-offset-4
                  focus-visible:ring-offset-[#17171c]

                  /* Mobile: compact horizontal layout */
                  max-[600px]:grid
                  max-[600px]:grid-cols-[112px_minmax(0,1fr)]
                  max-[600px]:items-center
                  max-[600px]:gap-4

                  /* Tablet/Desktop: image above text */
                  min-[601px]:block
                "
              >
                {/* Founder image */}
                <span
                  className="
    relative
    block
    w-full
     max-w-[420px]
    aspect-[464/510]
    overflow-hidden
    rounded-[8px]
    bg-[#34343a]

    max-[600px]:w-full
    max-[600px]:aspect-square
    max-[600px]:rounded-[7px]
  "
                >
                  <Image
                    src={person.image}
                    alt={`Portrait of ${person.name}`}
                    fill
                    sizes="
      (max-width: 600px) 112px,
      (max-width: 900px) 50vw,
      33vw
    "
                    className="
      object-cover
      object-center
      saturate-[0.8]

      transition-transform
      duration-[550ms]
      ease-[cubic-bezier(.2,.7,.2,1)]

      group-hover:scale-[1.035]
    "
                  />
                </span>

                {/* Founder information */}

                <span
                  className="
                    flex
                    flex-col
                    items-start

                    gap-[7px]
                    pt-[18px]
                    pr-[30px]

                    max-[600px]:gap-1.5
                    max-[600px]:p-0
                  "
                >
                  <span
                    className="
                      text-[clamp(1.25rem,1.65vw,1.8125rem)]
                      font-normal
                      leading-[1.2]
                      tracking-[-0.045em]

                      max-[600px]:text-[20px]
                    "
                  >
                    {person.name}
                  </span>

                  <span
                    className="
                      text-[clamp(0.8125rem,1.1vw,1.125rem)]
                      leading-[1.5]
                      text-[#f4f2ed]

                      max-[600px]:text-[13px]
                      max-[600px]:text-[#a5a4ad]
                    "
                  >
                    {person.role}
                  </span>
                </span>

                {/* Desktop hover arrow */}

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    right-20

                    grid
                    h-[30px]
                    w-[30px]
                    place-items-center

                    rounded-full
                    border
                    border-white/30

                    opacity-0
                    translate-y-1

                    transition-all
                    duration-200

                    group-hover:translate-y-0
                    group-hover:opacity-100

                    group-focus-visible:translate-y-0
                    group-focus-visible:opacity-100

                    max-[900px]:hidden
                  "
                >
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* =======================================================
            EXECUTIVE TEAM
        ======================================================= */}

        <div data-reveal>
          <h3
            className="
              m-0
              mb-7

              text-[clamp(1.25rem,1.6vw,1.75rem)]
              font-normal
              leading-[1.25]
              tracking-[-0.035em]

              sm:mb-8

              md:mb-9
            "
          >
            Executive team
          </h3>

          {/* Executive list */}

          <div
            className="
              w-full
              border-t
              border-[#777680]
            "
          >
            {executives.map((person) => (
              <button
                key={person.id}
                type="button"
                onClick={() => setOpenBio(person.id)}
                aria-label={`View ${person.name}, ${person.role}`}
                className="
                  group
                  relative
                  grid
                  w-full
                  min-h-[78px]
                  cursor-pointer
                  border-0
                  border-b
                  border-[#777680]
                  bg-transparent
                  py-[11px]
                  text-left
                  text-inherit

                  grid-cols-[minmax(0,1fr)_minmax(180px,0.8fr)_20px]
                  items-center
                  gap-5

                  transition-[padding,background]
                  duration-200

                  hover:bg-white/[0.025]
                  hover:px-2.5

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#a6c6ff]
                  focus-visible:ring-inset

                  max-[900px]:grid-cols-[minmax(0,1fr)_minmax(135px,0.8fr)_18px]
                  max-[900px]:gap-3
                  max-[900px]:min-h-[72px]

                  max-[600px]:grid-cols-[minmax(0,1fr)_16px]
                  max-[600px]:gap-2
                  max-[600px]:min-h-[78px]
                  max-[600px]:py-3
                "
              >
                {/* Person */}

                <span
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-[15px]

                    max-[900px]:gap-3
                  "
                >
                  {/* Avatar */}

                  <span
                    className="
                      relative
                      block
                      h-12
                      w-12
                      flex-[0_0_48px]
                      overflow-hidden
                      rounded-full
                      border
                      border-white/[0.145]
                      bg-[#34343a]

                      max-[900px]:h-[42px]
                      max-[900px]:w-[42px]
                      max-[900px]:flex-[0_0_42px]

                      max-[600px]:h-[43px]
                      max-[600px]:w-[43px]
                      max-[600px]:flex-[0_0_43px]
                    "
                  >
                    <Image
                      src={person.image}
                      alt={`Portrait of ${person.name}`}
                      fill
                      sizes="52px"
                      className="
                        object-cover
                        object-[center_30%]
                      "
                    />
                  </span>

                  {/* Name */}

                  <span
                    className="
                      min-w-0
                      overflow-hidden
                      text-ellipsis
                      whitespace-nowrap

                      text-[clamp(0.9375rem,1.2vw,1.3125rem)]
                      font-normal
                      tracking-[-0.025em]

                      max-[600px]:text-[15px]
                    "
                  >
                    {person.name}
                  </span>
                </span>

                {/* Role */}

                <span
                  className="
                    justify-self-end
                    text-right

                    text-[clamp(0.75rem,1vw,1.0625rem)]
                    leading-[1.5]
                    text-[#a5a4ad]

                    max-[600px]:col-start-1
                    max-[600px]:row-start-1
                    max-[600px]:mt-[43px]
                    max-[600px]:ml-[55px]
                    max-[600px]:justify-self-start
                    max-[600px]:text-left
                    max-[600px]:text-[12px]
                  "
                >
                  {person.role}
                </span>

                {/* Arrow */}

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.4}
                  aria-hidden="true"
                  className="
                    justify-self-end
                    text-[#a5a4ad]

                    opacity-0
                    -translate-x-1
                    translate-y-1

                    transition-all
                    duration-200

                    group-hover:translate-x-0
                    group-hover:translate-y-0
                    group-hover:opacity-100

                    group-focus-visible:translate-x-0
                    group-focus-visible:translate-y-0
                    group-focus-visible:opacity-100

                    max-[600px]:col-start-2
                    max-[600px]:row-start-1
                    max-[600px]:translate-x-0
                    max-[600px]:translate-y-0
                    max-[600px]:opacity-65
                  "
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================
          BIO MODAL
      ========================================================= */}

      {openBio &&
        (() => {
          const member = allTeamMembers.find((person) => person.id === openBio);

          if (!member) return null;

          return (
            <div
              className="
                fixed
                inset-0
                z-[100]
                grid
                place-items-center

                bg-[#09090b]/85

                p-[22px]

                backdrop-blur-[8px]

                max-[600px]:p-4
              "
              role="presentation"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  setOpenBio(null);
                }
              }}
            >
              {/* Modal panel */}

              <section
                className="
                  relative
                  grid
                  w-full
                  max-w-[800px]

                  max-h-[90dvh]
                  overflow-y-auto

                  grid-cols-[0.85fr_1.15fr]
                  items-stretch

                  gap-[30px]

                  rounded-[14px]
                  border
                  border-white/[0.11]

                  bg-[#1b1b21]
                  p-7

                  text-[#f4f2ed]

                  max-[600px]:grid-cols-1
                  max-[600px]:gap-[22px]
                  max-[600px]:max-h-[88dvh]
                  max-[600px]:p-[18px]
                "
                role="dialog"
                aria-modal="true"
                aria-labelledby="ma-bio-name"
              >
                {/* Profile image */}

                <div
                  className="
                    relative
                    min-h-[340px]
                    overflow-hidden
                    rounded-[8px]
                    bg-[#303038]

                    max-[600px]:min-h-0
                    max-[600px]:aspect-[1.3]
                  "
                >
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    fill
                    sizes="
                      (max-width: 600px) 100vw,
                      420px
                    "
                    className="
                      object-cover
                      object-[center_30%]
                    "
                  />
                </div>

                {/* Profile content */}

                <div
                  className="
                    flex
                    flex-col
                    items-start
                    justify-center

                    py-7

                    max-[600px]:px-0.5
                    max-[600px]:pb-2
                    max-[600px]:pt-0
                  "
                >
                  <h3
                    id="ma-bio-name"
                    className="
                      m-0

                      text-[clamp(2rem,4vw,3rem)]
                      font-normal
                      leading-[1.05]
                      tracking-[-0.06em]

                      break-words
                      [overflow-wrap:anywhere]

                      max-[600px]:pr-7
                      max-[600px]:text-[36px]
                    "
                  >
                    {member.name}
                  </h3>

                  <p
                    className="
                      m-0
                      mt-3

                      text-[14px]
                      leading-[1.5]
                      text-[#b4b3bd]
                    "
                  >
                    {member.role}
                  </p>

                  <p
                    className="
                      m-0
                      my-[25px]

                      text-[14px]
                      leading-[1.8]
                      text-[#dedde3]

                      max-[600px]:my-[18px]
                    "
                  >
                    {member.bio}
                  </p>

                  {/* LinkedIn */}

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${member.name}'s LinkedIn profile`}
                    className="
                      inline-flex
                      items-center
                      gap-2.5

                      rounded-full
                      border
                      border-white/30

                      px-[15px]
                      py-3

                      text-[13px]
                      text-[#f4f2ed]

                      transition-colors
                      duration-200

                      hover:border-[#f4f2ed]
                      hover:bg-[#f4f2ed]
                      hover:text-[#17171c]

                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#a6c6ff]
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-[#1b1b21]
                    "
                  >
                    {/* LinkedIn icon */}

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.554V9h3.565v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 22.222 24h.003Z" />
                    </svg>

                    <span>Connect on LinkedIn</span>

                    <ArrowUpRight size={16} strokeWidth={1.4} />
                  </a>
                </div>
              </section>
            </div>
          );
        })()}
    </section>
  );
}
