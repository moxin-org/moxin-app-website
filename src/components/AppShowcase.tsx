"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SealStamp from "./SealStamp";
import { useApp } from "@/context/AppContext";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const screenshotSrcs = [
  `${basePath}/images/moxin-studio/screenshot-image-gen.png`,
  `${basePath}/images/moxin-studio/screenshot-vlm.png`,
  `${basePath}/images/moxin-studio/screenshot-model-hub.png`,
  `${basePath}/images/moxin-studio/screenshot-history.png`,
];

const featureIcons = ["🗣", "🖼", "🧠", "🔧", "💬", "🎥"];
const voiceIcons = ["🎤", "🌍", "📡", "📊", "🔊", "🌙"];

function GitHubButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 mt-8 px-7 py-3 border border-seal/40 text-seal hover:bg-seal hover:text-white transition-all text-base rounded-sm group"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
      {label}
      <svg
        className="w-4 h-4 transition-transform group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </a>
  );
}

function ScreenshotGallery() {
  const [selected, setSelected] = useState(0);
  const { t } = useApp();
  const screenshots = t.apps.studio.screenshots;

  return (
    <div>
      <div className="relative rounded-lg overflow-hidden border border-surface/10 shadow-2xl shadow-black/30">
        <div className="relative aspect-[16/10] bg-ink">
          <Image
            src={screenshotSrcs[selected]}
            alt={screenshots[selected].label}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <p className="text-white text-sm font-medium">{screenshots[selected].label}</p>
          <p className="text-white/60 text-xs">{screenshots[selected].desc}</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-2">
        {screenshotSrcs.map((src, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`relative aspect-[16/10] rounded overflow-hidden border-2 transition-all ${
              i === selected
                ? "border-seal shadow-lg shadow-seal/20"
                : "border-surface/10 hover:border-surface/30 opacity-60 hover:opacity-100"
            }`}
          >
            <Image src={src} alt={screenshots[i].label} fill className="object-cover" sizes="150px" />
          </button>
        ))}
      </div>
    </div>
  );
}

function AutoplayVideo() {
  return (
    <div className="relative rounded-lg overflow-hidden border border-surface/10 shadow-2xl shadow-black/30">
      <div className="relative aspect-[16/10] bg-ink">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={`${basePath}/videos/moxin-studio-demo.mp4`} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

function BrushStrokeDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="py-20 flex justify-center">
      <motion.div
        className="h-[2px] bg-gradient-to-r from-transparent via-seal/30 to-transparent"
        initial={{ width: 0 }}
        animate={isInView ? { width: "300px" } : { width: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </div>
  );
}

export default function AppShowcase() {
  const { t } = useApp();

  return (
    <section id="apps" className="relative py-32 px-6">
      <div className="divider-ink mb-32" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-24">
          <span className="text-base tracking-[0.3em] uppercase text-gold/60 block mb-5">
            {t.apps.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-warm font-bold mb-8">
            {t.apps.title}
          </h2>
          <p className="text-warm/60 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            {t.apps.subtitle}
          </p>
        </ScrollReveal>

        {/* ── Moxin Studio ── */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-seal/10 via-transparent to-transparent rounded-lg pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-14 items-start">
            {/* Left: info + features */}
            <ScrollReveal>
              <div className="flex items-center gap-5 mb-8">
                <SealStamp text="坊" size="lg" />
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-warm font-bold">
                    {t.apps.studio.name}
                  </h3>
                  <p className="text-seal text-lg mt-2">{t.apps.studio.tagline}</p>
                </div>
              </div>

              <p className="text-warm/60 font-light leading-relaxed text-xl mb-8">
                {t.apps.studio.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.apps.studio.features.map((feature, i) => (
                  <div key={i} className="feature-card p-4 rounded-sm bg-surface/[0.02] border border-surface/[0.04] hover:border-seal/20">
                    <div className="flex items-start gap-3">
                      <span className="text-xl mt-0.5">{featureIcons[i]}</span>
                      <div>
                        <h4 className="text-warm text-base font-medium mb-0.5">{feature.title}</h4>
                        <p className="text-warm/50 text-sm font-light leading-relaxed">{feature.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <GitHubButton href="https://github.com/moxin-org/Moxin-Studio" label={t.apps.viewOnGithub} />
            </ScrollReveal>

            {/* Right: screenshots */}
            <ScrollReveal delay={0.15}>
              <ScreenshotGallery />
            </ScrollReveal>
          </div>
        </div>

        <BrushStrokeDivider />

        {/* ── Moxin Voice ── */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent rounded-lg pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-14 items-start">
            {/* Left: info + features */}
            <ScrollReveal className="md:order-2">
              <div className="flex items-center gap-5 mb-8">
                <SealStamp text="声" size="lg" />
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-warm font-bold">
                    {t.apps.voice.name}
                  </h3>
                  <p className="text-gold text-lg mt-2">{t.apps.voice.tagline}</p>
                </div>
              </div>

              <p className="text-warm/60 font-light leading-relaxed text-xl mb-8">
                {t.apps.voice.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.apps.voice.features.map((feature, i) => (
                  <div key={i} className="feature-card p-4 rounded-sm bg-surface/[0.02] border border-surface/[0.04] hover:border-gold/20">
                    <div className="flex items-start gap-3">
                      <span className="text-xl mt-0.5">{voiceIcons[i]}</span>
                      <div>
                        <h4 className="text-warm text-base font-medium mb-0.5">{feature.title}</h4>
                        <p className="text-warm/50 text-sm font-light leading-relaxed">{feature.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <GitHubButton href="https://github.com/moxin-org/Moxin-Voice" label={t.apps.viewOnGithub} />
            </ScrollReveal>

            {/* Right: video (rendered left via order) */}
            <div className="md:order-1">
              <ScrollReveal delay={0.2}>
                <AutoplayVideo />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
