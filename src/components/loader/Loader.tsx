
"use client";

import { useEffect, useRef, useState } from "react";

type LoaderProps = {
  assets?: string[];
  onComplete?: () => void;
};

const INTRO_DURATION = 1800;
const REVEAL_TO_100_DURATION = 420;
const HUNDRED_HOLD = 180;
const TEXT_FADE_DURATION = 260;
const CURTAIN_DURATION = 850;
const CURTAIN_COUNT = 12;

const MILESTONES = [
  { time: 0, value: 0 },
  { time: 350, value: 25 },
  { time: 800, value: 60 },
  { time: 1200, value: 85 },
  { time: 1550, value: 95 },
  { time: INTRO_DURATION, value: 95 },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const easeInOut = (t: number) =>
  t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);
  const [curtainsOpening, setCurtainsOpening] = useState(false);
  const [loaderHidden, setLoaderHidden] = useState(false);

  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let rafId = 0;
    let disposed = false;
    let sequenceStarted = false;

    let textTimer = 0;
    let curtainTimer = 0;
    let finishTimer = 0;

    const html = document.documentElement;
    const body = document.body;

    const oldHtmlOverflow = html.style.overflow;
    const oldBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const start = performance.now();

    const finish = () => {
      if (disposed) return;

      setLoaderHidden(true);

      html.style.overflow = oldHtmlOverflow;
      body.style.overflow = oldBodyOverflow;

      onCompleteRef.current?.();
    };

    const startEndingSequence = () => {
      if (sequenceStarted || disposed) return;

      sequenceStarted = true;
      setProgress(100);

      // Hold 100% briefly before fading the loader content.
      textTimer = window.setTimeout(() => {
        if (disposed) return;

        setContentVisible(false);

        // Start curtains only after the content fades away.
        curtainTimer = window.setTimeout(() => {
          if (disposed) return;

          setCurtainsOpening(true);

          finishTimer = window.setTimeout(
            finish,
            CURTAIN_DURATION + (CURTAIN_COUNT - 1) * 32 + 100
          );
        }, TEXT_FADE_DURATION);
      }, HUNDRED_HOLD);
    };

    if (reducedMotion) {
      setProgress(100);
      setContentVisible(false);
      setCurtainsOpening(true);

      finishTimer = window.setTimeout(finish, 100);

      return () => {
        disposed = true;
        window.clearTimeout(finishTimer);
        html.style.overflow = oldHtmlOverflow;
        body.style.overflow = oldBodyOverflow;
      };
    }

    const render = (now: number) => {
      if (disposed || sequenceStarted) return;

      const elapsed = now - start;

      if (elapsed < INTRO_DURATION) {
        let value = 0;

        for (let i = 1; i < MILESTONES.length; i++) {
          const previous = MILESTONES[i - 1];
          const current = MILESTONES[i];

          if (elapsed <= current.time) {
            const duration = current.time - previous.time;
            const raw =
              duration > 0
                ? clamp(
                    (elapsed - previous.time) / duration,
                    0,
                    1
                  )
                : 1;

            const eased = raw * raw * (3 - 2 * raw);

            value =
              previous.value +
              (current.value - previous.value) * eased;

            break;
          }
        }

        setProgress(Math.floor(value));
        rafId = requestAnimationFrame(render);
        return;
      }

      const revealElapsed = elapsed - INTRO_DURATION;
      const revealT = clamp(
        revealElapsed / REVEAL_TO_100_DURATION,
        0,
        1
      );

      const value = 95 + 5 * easeInOut(revealT);
      setProgress(Math.floor(value));

      if (revealT < 1) {
        rafId = requestAnimationFrame(render);
        return;
      }

      startEndingSequence();
    };

    rafId = requestAnimationFrame(render);

    return () => {
      disposed = true;

      if (rafId) cancelAnimationFrame(rafId);

      window.clearTimeout(textTimer);
      window.clearTimeout(curtainTimer);
      window.clearTimeout(finishTimer);

      html.style.overflow = oldHtmlOverflow;
      body.style.overflow = oldBodyOverflow;
    };
  }, []);

  if (loaderHidden) return null;

  return (
    <div
      id="loader"
      role="status"
      aria-live="polite"
      aria-label="Loading Mentroid website"
      className="fixed inset-0 z-[99999] h-[100vh] h-[100dvh] w-full overflow-hidden bg-transparent"
    >
      {/* Staggered curtain panels */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex"
      >
        {Array.from({ length: CURTAIN_COUNT }, (_, index) => (
          <div
            key={index}
            className="h-full min-w-0 flex-1 bg-[#0a0a0a] will-change-transform"
            style={{
              transform: curtainsOpening
                ? "translate3d(0, -105%, 0)"
                : "translate3d(0, 0, 0)",
              transitionProperty: "transform",
              transitionDuration: `${CURTAIN_DURATION}ms`,
              transitionTimingFunction:
                "cubic-bezier(0.76, 0, 0.24, 1)",
              transitionDelay: curtainsOpening
                ? `${index * 32}ms`
                : "0ms",
            }}
          />
        ))}
      </div>

      {/* Counter and progress */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[min(78vw,320px)]"
        style={{
          opacity: contentVisible ? 1 : 0,
          transform: contentVisible
            ? "translate3d(-50%, -50%, 0)"
            : "translate3d(-50%, -56%, 0)",
          transition: `opacity ${TEXT_FADE_DURATION}ms ease, transform ${TEXT_FADE_DURATION}ms ease`,
        }}
      >
        <span className="block text-center font-mono text-[clamp(2.5rem,12vw,5.3125rem)] font-normal leading-none tracking-[-0.06em] text-white tabular-nums">
          {progress}%
        </span>

        <div className="mt-7 h-[2px] w-full overflow-hidden bg-white/20">
          <div
            className="h-full bg-white"
            style={{
              width: `${progress}%`,
              transition: "width 90ms linear",
            }}
          />
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/45">
            Mentroid
          </span>

          <span className="text-right text-[9px] uppercase tracking-[0.2em] text-white/45">
            Intelligence in motion
          </span>
        </div>
      </div>
    </div>
  );
}
