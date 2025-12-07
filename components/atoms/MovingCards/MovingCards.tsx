"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const MovingCards = ({
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
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLLIElement;
      scrollerRef.current?.appendChild(duplicatedItem);
    });

    if (direction === "left") {
      containerRef.current.style.setProperty(
        "--animation-direction",
        "forwards"
      );
    } else {
      containerRef.current.style.setProperty(
        "--animation-direction",
        "reverse"
      );
    }

    if (speed === "fast") {
      containerRef.current.style.setProperty("--animation-duration", "20s");
    } else if (speed === "normal") {
      containerRef.current.style.setProperty("--animation-duration", "40s");
    } else {
      containerRef.current.style.setProperty("--animation-duration", "80s");
    }

    scrollerRef.current.classList.add("animate-scroll");
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          pauseOnHover && "hover:paused"
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-teal-300/20 bg-[#111c2f] px-8 py-6 md:w-[450px] shadow-[0_0_40px_rgba(34,211,238,0.08)]"
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%+4px)] w-[calc(100%+4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] font-normal text-white">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-normal text-teal-300">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] font-normal text-gray-400">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovingCards;
