"use client";

import { cn } from "../../utils/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  const animationStyle = start
    ? {
        animation: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        animationPlayState: isPaused ? "paused" : "running",
      }
    : undefined;

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <ul
        ref={scrollerRef}
        style={animationStyle}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
        )}
      >
        {items.map((item, idx) => {
          const isSelected = idx % 2 === 0;
          return (
            <li
              className={cn(
                "relative w-[320px] max-w-full shrink-0 rounded-[1.75rem] border px-5 py-6 shadow-2xl backdrop-blur-xl md:w-[380px]",
                isSelected
                  ? "border-sky-400/20 bg-slate-950/100 shadow-sky-500/20"
                  : "border-white/10 bg-slate-950/85 shadow-black/10",
              )}
              key={item.name}
            >
              <div
                className={cn(
                  "absolute left-6 right-6 -top-6 h-16 rounded-[1.75rem] blur-3xl",
                  isSelected
                    ? "bg-gradient-to-r from-sky-500/20 via-slate-950/0 to-fuchsia-500/20"
                    : "bg-slate-900/70",
                )}
              />

              <div className="relative z-10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl border border-white/10 bg-slate-900/80 text-sky-400 shadow-lg shadow-sky-500/5">
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8">
                      <path d="M8 11.5c-.75 0-1.5.25-2.1.75A3.4 3.4 0 0 0 4 15.5V18h4.5c1.38 0 2.5-1.12 2.5-2.5V11.5H8ZM16 11.5c-.75 0-1.5.25-2.1.75A3.4 3.4 0 0 0 12 15.5V18h4.5c1.38 0 2.5-1.12 2.5-2.5V11.5H16Z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-white">
                      Client perspective
                    </p>
                    <p className="text-xs text-slate-400">
                      {isSelected ? "Premium review" : "Recent client insight"}
                    </p>
                  </div>
                </div>
              </div>

              <blockquote className="relative z-10 mt-6">
                <p className="text-base leading-7 text-slate-100">“{item.quote}”</p>
              </blockquote>

              <div className="relative z-10 mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                <div>
                  <p className="text-base font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.title}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
