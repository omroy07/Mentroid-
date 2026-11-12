"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";

interface ProjectCardProps {
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
  label: string;
  note?: string;
}

export default function ProjectCard({
  number,
  category,
  title,
  description,
  image,
  href,
  label,
  note,
}: ProjectCardProps) {
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current, {
      scale: 1.025,
      duration: 0.7,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;

    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.7,
      ease: "power3.out",
    });
  };

  return (
    <Link
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="
        group
        grid
        gap-8
        py-12
        sm:py-14
        md:py-16
        lg:grid-cols-[0.18fr_0.82fr]
        lg:gap-10
        lg:py-20
        xl:grid-cols-[0.16fr_0.84fr]
      "
    >
      {/* NUMBER */}
      <div className="flex items-start justify-between lg:block">
        <span
          className="
            text-[11px]
            font-medium
            uppercase
            tracking-[0.08em]
            text-[#77736d]
          "
        >
          {number}
        </span>

        {/* MOBILE CATEGORY */}
        <span
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.08em]
            text-[#77736d]
            lg:hidden
          "
        >
          {category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-start lg:gap-12 xl:gap-20">

        {/* IMAGE */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[12px]
            bg-[#e4e1da]
            aspect-[16/10]
            order-2
            lg:order-1
          "
        >
          <div
            ref={imageRef}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={image}
              alt={`${title} project`}
              fill
              sizes="
                (max-width: 768px) 100vw,
                (max-width: 1280px) 58vw,
                55vw
              "
              className="
                object-cover
                transition-transform
                duration-700
                ease-out
              "
            />
          </div>

          {/* IMAGE OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-black/[0.03]
              transition-colors
              duration-500
              group-hover:bg-black-0
            "
          />

          {/* OPEN ICON */}
         {/* <div
             className="
              absolute
              right-5
              top-5
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white/90
              text-[#202020]
              opacity-0
              translate-y-2
              transition-all
              duration-500
              group-hover:translate-y-0
              group-hover:opacity-100
              sm:right-6
              sm:top-6
            "
          >
            <ArrowUpRight size={17} strokeWidth={1.5} />
          </div> */}
        </div>

        {/* TEXT */}
        <div className="order-1 flex flex-col lg:order-2">

          {/* CATEGORY */}
          <p
            className="
              mb-5
              hidden
              text-[10px]
              font-medium
              uppercase
              tracking-[0.1em]
              text-[#77736d]
              lg:block
            "
          >
            {category}
          </p>

          {/* TITLE */}
          <h3
            className="
              text-[clamp(38px,5vw,68px)]
              font-[450]
              leading-[0.98]
              tracking-[-0.06em]
              text-[#202020]
            "
          >
            {title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6
              max-w-[520px]
              text-[15px]
              leading-[1.6]
              tracking-[-0.01em]
              text-[#5b5853]
              sm:text-[16px]
            "
          >
            {description}
          </p>

          {/* META */}
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span
              className="
                rounded-full
                border
                border-[#202020]/15
                px-3
                py-1.5
                text-[9px]
                font-medium
                uppercase
                tracking-[0.08em]
                text-[#5f5c57]
              "
            >
              {label}
            </span>
          </div>

          {/* NOTE */}
          {note && (
            <p
              className="
                mt-5
                max-w-[500px]
                text-[11px]
                leading-[1.55]
                text-[#85817a]
              "
            >
              {note}
            </p>
          )}

          {/* ACTION */}
          <div
            className="
              mt-10
              flex
              items-center
              gap-3
              text-[11px]
              font-medium
              uppercase
              tracking-[0.08em]
              text-[#202020]
            "
          >
            <span className="border-b border-[#202020] pb-1">
              Explore {title}
            </span>

            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-500
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </div>

        </div>
      </div>
    </Link>
  );
}