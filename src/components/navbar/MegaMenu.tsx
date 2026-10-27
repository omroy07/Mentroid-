
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import type { MenuData, MenuKey } from "./Navbar";
import {
  fallbackPreviewImages,
  menuPreviewImages,
} from "./Navbar";

type MegaMenuProps = {
  menu: MenuData;
  menuKey: MenuKey;
  previewImage: string;
  onPreviewChange: (image: string) => void;
  onNavigate: () => void;
};

/* Main content enters gently from above */
const contentVariants = {
  hidden: {
    opacity: 0,
    y: -8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.32,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/* Group headings and links reveal in sequence */
const groupVariants = {
  hidden: {
    opacity: 0,
    y: -7,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.045,
      delayChildren: 0.035,
    },
  },
};

/* Individual links appear from top to bottom */
const linkVariants = {
  hidden: {
    opacity: 0,
    y: -6,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.26,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/* Right preview enters slightly after the content starts */
const previewVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function MegaMenu({
  menu,
  menuKey,
  previewImage,
  onPreviewChange,
  onNavigate,
}: MegaMenuProps) {
  const [imageStage, setImageStage] = useState(0);

const previewSources = [
  previewImage,
  menuPreviewImages[menuKey],
  "/assets/navbar/services.webp",
];

const safeImageSrc =
  previewSources[
    Math.min(imageStage, previewSources.length - 1)
  ];

  return (
    <div
      className="
        w-full
        max-w-full
        overflow-x-clip
        bg-white
        text-[#07111f]
        shadow-[0_20px_50px_rgba(0,0,0,0.10)]
      "
    >
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="
          mx-auto grid w-full max-w-[1440px] min-w-0
          grid-cols-1 gap-8 overflow-hidden
          px-6 py-8 sm:px-8
          lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]
          lg:gap-10 lg:px-10 lg:py-10
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          variants={contentVariants}
          className="
            grid min-w-0 grid-cols-2
            gap-x-8 lg:gap-x-10
          "
        >
          {menu.groups.map((group) => (
            <motion.div
              key={group.title}
              variants={groupVariants}
              className="min-w-0"
            >
              <motion.p
                variants={linkVariants}
                className="
                  mb-4 text-[10px] font-medium
                  uppercase tracking-[0.14em]
                  text-[#07111f]/45
                "
              >
                {group.title}
              </motion.p>

              <motion.div
                variants={groupVariants}
                className="space-y-0.5"
              >
                {group.items.map((item, index) => {
                  const image =
                    item.image ||
                    fallbackPreviewImages[
                      index % fallbackPreviewImages.length
                    ] ||
                    menuPreviewImages[menuKey];

                  return (
                    <motion.div
                      key={item.title}
                      variants={linkVariants}
                    >
                      <a
                        href={item.href}
                        onMouseEnter={() =>
                          onPreviewChange(image)
                        }
                        onFocus={() =>
                          onPreviewChange(image)
                        }
                        onClick={onNavigate}
                        className="
                          group relative flex min-w-0
                          items-center py-1.5
                          text-[16px] leading-6
                          tracking-[-0.015em]
                          text-[#07111f]
                          transition-colors duration-200
                          hover:text-[#07111f]/75
                        "
                      >
                        <span
                          className="
                            absolute -left-3 h-[2px]
                            w-0 bg-[#07111f]
                            transition-all duration-300
                            group-hover:w-1.5
                          "
                        />

                        <span className="truncate">
                          {item.title}
                        </span>

                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.7}
                          className="
                            ml-1 shrink-0 -translate-x-1
                            text-[#07111f] opacity-0
                            transition-all duration-200
                            group-hover:translate-x-0
                            group-hover:opacity-60
                          "
                        />
                      </a>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT  IMAGE */}
        <motion.div
          variants={previewVariants}
          initial="hidden"
          animate="visible"
          className="
            relative min-h-[240px] min-w-0
            overflow-hidden rounded-[12px]
            bg-[#f3f5f7]
            ring-1 ring-[#07111f]/[0.08]
            lg:min-h-[250px]
          "
        >
          <AnimatePresence mode="sync">
            <motion.img
              key={`${menuKey}-${safeImageSrc}`}
              src={safeImageSrc}
              alt=""
              onError={() => {
                setImageStage((current) =>
                  Math.min(
                    current + 1,
                    previewSources.length - 1
                  )
                );
              }}
              initial={{
                opacity: 0,
                scale: 1.04,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="
                absolute inset-0 h-full w-full
                object-cover
              "
            />
          </AnimatePresence>

          <div
            className="
              pointer-events-none absolute inset-0
              bg-black/20
            "
          />

          <div
            className="
              pointer-events-none absolute inset-x-0
              bottom-0 h-24
              bg-gradient-to-t
              from-black/50 to-transparent
            "
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
