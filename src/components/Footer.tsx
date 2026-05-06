"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/moxin-logo.png"
              alt="Moxin"
              width={36}
              height={36}
            />
            <span className="font-serif text-xl font-bold tracking-wider text-warm/60">
              Moxin Apps
            </span>
          </div>

          <div className="flex items-center gap-10">
            <a
              href="https://github.com/moxin-org/Moxin-Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-warm/50 hover:text-seal transition-colors"
            >
              Moxin Studio
            </a>
            <a
              href="https://github.com/moxin-org/Moxin-Voice"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-warm/50 hover:text-seal transition-colors"
            >
              Moxin Voice
            </a>
            <a
              href="https://github.com/moxin-org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-warm/50 hover:text-seal transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://discord.gg/MzzC64xfu6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-warm/50 hover:text-seal transition-colors"
            >
              Discord
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-warm/30 font-light">
            Apache 2.0 — AI crafted in pure Rust
          </p>
          <p className="text-sm text-warm/30 font-light">
            Moxin Applications &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
