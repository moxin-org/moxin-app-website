"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SealStampProps {
  text: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  sm: "text-sm px-2 py-1 border-2",
  md: "text-lg px-3 py-2 border-2",
  lg: "text-2xl px-4 py-3 border-3",
  xl: "text-4xl px-6 py-4 border-4",
};

export default function SealStamp({
  text,
  size = "md",
  className = "",
}: SealStampProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={`seal-stamp ${sizeMap[size]} ${className}`}
      initial={{ scale: 1.4, opacity: 0, rotate: -3 }}
      animate={
        isInView
          ? { scale: 1, opacity: 1, rotate: 0 }
          : { scale: 1.4, opacity: 0, rotate: -3 }
      }
      transition={{
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1],
      }}
    >
      {text}
    </motion.div>
  );
}
