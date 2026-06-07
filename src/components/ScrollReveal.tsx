"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useStaticRender } from "@/hooks/useStaticRender";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  distance?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 50,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const staticRender = useStaticRender();

  // Safety net: if the IntersectionObserver never fires (reduced-motion,
  // programmatic scroll, prerender/headless contexts), reveal anyway after a
  // short delay so content is never stuck invisible. When this path is taken we
  // render a plain element — not framer-motion's animate — so visibility never
  // depends on the animation loop running.
  const [fallback, setFallback] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setFallback(true), 1000);
    return () => clearTimeout(id);
  }, []);

  if (staticRender || (fallback && !inView)) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  const initialPosition = {
    up: { y: distance, x: 0 },
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        ...initialPosition[direction],
      }}
      animate={
        inView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...initialPosition[direction] }
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
