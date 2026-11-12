"use client";

import { ArrowUpRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    number: "01",
    category: "Education",
    title: "LearnSphere",
    description:
      "An educational platform with science and maths content, interactive simulations and an AI tutor. Explore the relationship between learning content and a conversational interface.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1800&q=90",
    href: "/work/learnsphere/",
    label: "Portfolio project",
  },
  {
    number: "02",
    category: "Agriculture",
    title: "AgriTech",
    description:
      "An agriculture platform bringing together crop-related models and plant disease detection. Explore how model outputs can be presented within an application.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1800&q=90",
    href: "/work/agritech/",
    label: "Portfolio project",
  },
  {
    number: "03",
    category: "Signal analysis",
    title: "ECGenius",
    description:
      "A deep learning application described in the Mentroid portfolio for ECG signal analysis and arrhythmia classification using PyTorch and Flask.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1800&q=90",
    href: "/work/ecgenius/",
    label: "Portfolio project",
    note: "This project overview does not establish suitability for clinical use.",
  },
  {
    number: "04",
    category: "Visual assistance",
    title: "VisionSTRA",
    description:
      "A visual assistance project described as using object detection and browser camera processing, with an interface designed around navigation support.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=90",
    href: "/work/visionstra/",
    label: "Portfolio project",
    note: "The listing does not establish safety or accessibility certification.",
  },
];

export default function SelectedProjects() {
  return (
    <section className="bg-[#f0eee9] px-5 py-0 sm:px-8 sm:py-28 md:px-10 md:py-32 lg:px-12 lg:py-0 xl:px-16 2xl:px-20">
      <div className="mx-auto max-w-[1660px]">

        {/* SECTION INTRO */}
        <div
          className="
            mb-16
            grid gap-8
            lg:mb-24
            lg:grid-cols-[0.8fr_1.2fr]
            lg:items-end
          "
        >
          {/* LEFT */}
          <div>
            <p
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.1em]
                text-[#77736d]
                sm:text-[11px]
              "
            >
              Case Studies
            </p>
          </div>

          {/* RIGHT */}
          <div className="max-w-[900px]">
            <h2
              className="
                text-[clamp(40px,5.4vw,76px)]
                
                text-[#202020]
                font-[450]
                leading-[1.01]
                tracking-[-0.065em]

                sm:text-[clamp(56px,7vw,82px)]

                md:text-[clamp(62px,7vw,88px)]

                lg:text-[clamp(68px,6.8vw,92px)]

                xl:text-[clamp(74px,6.3vw,96px)]
              "
            >
              Different problems.
              <br className="hidden sm:block" />
              Different ways to build.
            </h2>

            <p
              className="
                mt-7
                max-w-[680px]
                text-[15px]
                leading-[1.6]
                tracking-[-0.01em]
                text-[#5b5853]
                sm:text-[16px]
              "
            >
              These portfolio projects show different applications of AI,
              machine learning and software interfaces. Open a project to
              understand its focus and the features described in the
              published portfolio.
            </p>
          </div>
        </div>

        {/* PROJECT LIST */}
        <div>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

        {/* BOTTOM NOTE */}
        {/* <div className="mt-10 flex items-start justify-between gap-6 border-t border-[#202020]/10 pt-6">
          <p className="max-w-[620px] text-[12px] leading-[1.6] text-[#77736d] sm:text-[13px]">
            Client identity, deployment status and measured outcomes are
            separate claims and should be stated only when documented.
          </p>

          <ArrowUpRight
            size={18}
            strokeWidth={1.5}
            className="hidden shrink-0 text-[#77736d] sm:block"
          />
        </div> */}

      </div>
    </section>
  );
}