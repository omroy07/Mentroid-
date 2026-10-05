"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

type SmoothScrollProps = {
  children: React.ReactNode;
};

export default function SmoothScroll({
  children,
}: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.075,
      smoothWheel: true,
      autoRaf: false,
    });

    const updateScrollTrigger = () => {
      ScrollTrigger.update();
    };

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on(
      "scroll",
      updateScrollTrigger
    );

    gsap.ticker.add(raf);

    /*
     * Prevent GSAP from applying its own
     * lag smoothing on top of Lenis.
     */
    gsap.ticker.lagSmoothing(0);

    /*
     * Make sure ScrollTrigger calculates
     * positions after Lenis is initialized.
     */
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      lenis.off(
        "scroll",
        updateScrollTrigger
      );

      gsap.ticker.remove(raf);

      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}