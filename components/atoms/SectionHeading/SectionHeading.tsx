"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

interface SectionHeadingProps {
  text: string;
  className?: string;
  showDot?: boolean;
}

export default function SectionHeading({
  text,
  className = "text-teal-300 font-semibold text-base mb-6",
  showDot = true,
}: SectionHeadingProps) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const finalText = showDot ? `● ${text}` : text;
  const showTypewriter = isInView;

  return (
    <h2 ref={ref} className={className}>
      {showTypewriter ? (
        <Typewriter
          words={[finalText]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={0}
          delaySpeed={2000}
        />
      ) : (
        "Loading"
      )}
    </h2>
  );
}
