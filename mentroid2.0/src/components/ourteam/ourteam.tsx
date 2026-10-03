"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Member = {
  name: string;
  role: string;
  note: string;
  grad: string;
};

type Category = {
  name: string;
  members: Member[];
};

const categories: Category[] = [
  {
    name: "Leadership",
    members: [
      {
        name: "Șerban Georgescu",
        role: "Co-founder & Team Leader",
        note: "Shaping the studio's direction since day one — industrial luxury with a human edge.",
        grad: "linear-gradient(150deg,#3b3229,#8a6a3e)",
      },
      {
        name: "Raluca Ionescu",
        role: "Co-founder & Project Manager",
        note: "Keeps every build on schedule without losing the craft.",
        grad: "linear-gradient(150deg,#2c2420,#b08b4f)",
      },
      {
        name: "Iulia Dumitrescu",
        role: "Interior Architect",
        note: "Spatial thinker — turns raw rooms into finished stories.",
        grad: "linear-gradient(150deg,#332a24,#8f7350)",
      },
      {
        name: "Eugen Marinescu",
        role: "Interior Architect",
        note: "Detail-first, material-obsessed, quietly relentless.",
        grad: "linear-gradient(150deg,#26221e,#7a5b34)",
      },
    ],
  },
  {
    name: "Engineering",
    members: [
      {
        name: "Vlad Petrescu",
        role: "Lead Structural Engineer",
        note: "Turns architectural ambition into load-bearing reality.",
        grad: "linear-gradient(150deg,#20242b,#4d6a86)",
      },
      {
        name: "Ana Constantin",
        role: "Mechanical Systems",
        note: "HVAC, plumbing, and the systems no one sees but everyone feels.",
        grad: "linear-gradient(150deg,#1d2228,#3d5568)",
      },
      {
        name: "Mihai Radu",
        role: "Site Engineer",
        note: "On-site from groundbreak to final walkthrough.",
        grad: "linear-gradient(150deg,#242018,#6b5a3a)",
      },
      {
        name: "Cristina Enache",
        role: "Sustainability Engineer",
        note: "Builds efficiency into every material choice.",
        grad: "linear-gradient(150deg,#1f231d,#4d6b47)",
      },
    ],
  },
];

export default function TeamSection() {
  const [catIdx, setCatIdx] = useState(0);
  const [memberIdx, setMemberIdx] = useState(0);
  const [fading, setFading] = useState(false);

  const cat = categories[catIdx];
  const active = cat.members[memberIdx];
  const next = categories[(catIdx + 1) % categories.length];

  function selectMember(i: number) {
    if (i === memberIdx) return;
    setFading(true);
    setTimeout(() => {
      setMemberIdx(i);
      setFading(false);
    }, 160);
  }

  function goNextCategory() {
    setFading(true);
    setTimeout(() => {
      setCatIdx((c) => (c + 1) % categories.length);
      setMemberIdx(0);
      setFading(false);
    }, 160);
  }

  return (

    <>

     <div
          
          className="px-6 py-20 text-center bg-black"
        >
          <h2 className="text-[clamp(2.4rem,4.4vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.04em] text-white">
            Our Team Members
          </h2>
          <p className="mx-auto mt-5 max-w-[480px] text-sm leading-7 text-white/55 md:text-base">
            Four reasons teams choose Mentroid to build the systems that run their business.
          </p>
        </div>
   
    <section
      id="team"
      className="
        relative
        w-full
        max-w-full
        overflow-hidden
        bg-black
      "
    >

        
      <div
        className="
          grid
          w-full
          max-w-full
          grid-cols-1
          md:grid-cols-[1.05fr_1fr]
        "
      >
        {/* ==================================================
            LEFT — PREVIEW
        ================================================== */}

        <div
          className="
            relative
            flex
            h-[52vh]
            items-end
            overflow-hidden
            border-b
            border-white/10
            md:h-screen
            md:border-b-0
            md:border-r
          "
        >
          <div className="absolute inset-0 grid place-items-center p-6 md:p-10">
            <div
              className="
                relative
                aspect-[3/4]
                w-[78%]
                overflow-hidden
                rounded-[2px]
                transition-transform
                duration-[1100ms]
                ease-[cubic-bezier(0.16,0.84,0.44,1)]
              "
              style={{
                background: active.grad,
                transform: fading ? "scale(1.04)" : "scale(1)",
              }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_55%,rgba(0,0,0,0.45)_100%)]" />
              <span
                className="
                  pointer-events-none
                  absolute
                  bottom-[8%]
                  right-[6%]
                  text-[6rem]
                  font-medium
                  leading-none
                  tracking-[-0.075em]
                  text-white/10
                  md:text-[11rem]
                "
              >
                {active.name.charAt(0)}
              </span>
            </div>
          </div>

          <div className="relative z-[2] flex w-full items-end justify-between gap-6 p-6 md:p-10 lg:p-14">
            <div
              className="transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
              style={{
                opacity: fading ? 0 : 1,
                transform: fading ? "translateY(6px)" : "translateY(0)",
              }}
            >
              <p className="text-[clamp(1.9rem,3.2vw,2.7rem)] font-medium leading-[0.95] tracking-[-0.075em] text-white">
                {active.name}
              </p>
              <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.25em] text-white/70">
                {active.role}
              </p>
            </div>

            <p className="hidden max-w-[220px] text-right text-sm leading-7 text-white/65 md:block">
              {active.note}
            </p>
          </div>
        </div>

        {/* ==================================================
            RIGHT — ROSTER
        ================================================== */}

        <div className="flex flex-col px-6 py-10 md:px-10 md:py-14 lg:px-14">
          <div className="mb-9 flex items-baseline justify-between">
            <h2 className="text-[clamp(1.6rem,2.6vw,2.1rem)] font-medium leading-[0.95] tracking-[-0.075em] text-white">
              {cat.name}
            </h2>
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/50">
              0{catIdx + 1} / 0{categories.length}
            </span>
          </div>

          <div className="flex flex-1 flex-col">
            {cat.members.map((m, i) => {
              const isActive = i === memberIdx;
              return (
                <div
                  key={m.name}
                  onMouseEnter={() => selectMember(i)}
                  onClick={() => selectMember(i)}
                  onTouchStart={() => selectMember(i)}
                  className="
                    relative
                    grid
                    cursor-pointer
                    grid-cols-[48px_1fr_auto]
                    items-center
                    gap-4
                    border-t
                    border-white/10
                    py-4
                    last:border-b
                    md:grid-cols-[64px_1fr_auto]
                  "
                >
                  <span
                    className="
                      absolute
                      left-0
                      top-0
                      bottom-0
                      w-[2px]
                      origin-top
                      bg-white
                      transition-transform
                      duration-300
                      ease-[cubic-bezier(0.22,0.61,0.36,1)]
                    "
                    style={{ transform: isActive ? "scaleY(1)" : "scaleY(0)" }}
                  />

                  <div
                    className="
                      aspect-square
                      w-12
                      rounded-[2px]
                      transition-transform
                      duration-[450ms]
                      ease-[cubic-bezier(0.22,0.61,0.36,1)]
                      md:w-16
                    "
                    style={{
                      background: m.grad,
                      transform: isActive ? "scale(1.06)" : "scale(1)",
                    }}
                  />

                  <div>
                    <p
                      className={`text-base font-medium tracking-[-0.02em] transition-colors ${
                        isActive ? "text-white" : "text-white/80"
                      }`}
                    >
                      {m.name}
                    </p>
                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                      {m.role}
                    </p>
                  </div>

                  <span
                    className="text-white transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateX(0)" : "translateX(-6px)",
                    }}
                  >
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
              Next — {next.name}
            </span>

            <button
              onClick={goNextCategory}
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-6
                py-3.5
                text-sm
                font-medium
                text-black
                transition
                hover:scale-[1.02]
              "
            >
              {next.name}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
     </>
  );
}