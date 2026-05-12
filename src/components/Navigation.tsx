"use client";

import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { useApp } from "@/context/AppContext";

function ThemeToggle() {
  const { resolvedTheme, theme, setTheme } = useApp();

  const cycle = () => {
    const next = theme === "system" ? "light" : theme === "light" ? "dark" : "system";
    setTheme(next);
  };

  return (
    <button
      onClick={cycle}
      className="p-2 text-warm/60 hover:text-seal transition-colors"
      title={theme === "system" ? "Auto" : resolvedTheme === "dark" ? "Dark" : "Light"}
    >
      {resolvedTheme === "dark" ? (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </button>
  );
}

function LangToggle() {
  const { lang, setLang } = useApp();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "zh" : "en")}
      className="px-2 py-1 text-sm text-warm/60 hover:text-seal transition-colors font-medium"
    >
      {lang === "en" ? "中文" : "EN"}
    </button>
  );
}

export default function Navigation() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const { t } = useApp();

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
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/moxin-logo.png`}
            alt="Moxin"
            width={40}
            height={40}
            className="transition-transform group-hover:scale-105"
          />
          <span className="font-serif text-2xl font-bold tracking-wider text-warm">
            {t.nav.brand}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#apps" className="text-base text-warm/70 hover:text-seal transition-colors">
            {t.nav.apps}
          </a>
          <a href="#technology" className="text-base text-warm/70 hover:text-seal transition-colors">
            {t.nav.tech}
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
          <div className="flex items-center gap-1 border-l border-surface/10 pl-4 ml-2">
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
