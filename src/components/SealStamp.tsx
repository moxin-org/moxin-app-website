"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useStaticRender } from "@/hooks/useStaticRender";

interface SealStampProps {
  text: string;
  size?: "sm" | "md" | "lg" | "xl";
  accent?: "seal" | "gold";
  className?: string;
}

// Border width is handled by the .seal-stamp CSS; only size/padding here.
const sizeMap = {
  sm: "text-sm px-2 py-1",
  md: "text-lg px-3 py-2",
  lg: "text-2xl px-4 py-3",
  xl: "text-4xl px-6 py-4",
};

export default function SealStamp({
  text,
  size = "md",
  accent = "seal",
  className = "",
}: SealStampProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const staticRender = useStaticRender();
  const [fallback, setFallback] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setFallback(true), 1000);
    return () => clearTimeout(id);
  }, []);

  const cls = `seal-stamp ${accent === "gold" ? "seal-gold" : ""} ${sizeMap[size]} ${className}`;

  if (staticRender || (fallback && !inView)) {
    return <div className={cls}>{text}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cls}
      // "press the seal down" — drop in, slight overshoot, settle flat
      initial={{ scale: 1.5, opacity: 0, rotate: -4 }}
      animate={
        inView
          ? { scale: 1, opacity: 1, rotate: 0 }
          : { scale: 1.5, opacity: 0, rotate: -4 }
      }
      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {text}
    </motion.div>
  );
}
