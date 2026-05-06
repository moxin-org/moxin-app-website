"use client";

import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function Navigation() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-5 transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 border-b border-seal/10 backdrop-blur-xl"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/moxin-logo.png`}
            alt="Moxin"
            width={40}
            height={40}
            className="transition-transform group-hover:scale-105"
          />
          <span className="font-serif text-2xl font-bold tracking-wider text-warm">
            Moxin Apps
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          <a
            href="#apps"
            className="text-base text-warm/70 hover:text-seal transition-colors"
          >
            Applications
          </a>
          <a
            href="#technology"
            className="text-base text-warm/70 hover:text-seal transition-colors"
          >
            Technology
          </a>
          <a
            href="https://github.com/moxin-org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-warm/70 hover:text-seal transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://discord.gg/MzzC64xfu6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base px-5 py-2 border border-seal/40 text-seal hover:bg-seal hover:text-white transition-all rounded-sm"
          >
            Discord
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
