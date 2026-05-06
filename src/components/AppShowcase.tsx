"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import SealStamp from "./SealStamp";

interface AppData {
  seal: string;
  name: string;
  tagline: string;
  description: string;
  features: {
    icon: string;
    title: string;
    detail: string;
  }[];
  github: string;
  accentGradient: string;
}

const apps: AppData[] = [
  {
    seal: "坊",
    name: "Moxin Studio",
    tagline: "Your Complete Local AI Workbench",
    description:
      "A native desktop application that runs LLMs, generates images, clones voices, and transcribes speech — all locally on Apple Silicon. No cloud, no Python, no waiting.",
    features: [
      {
        icon: "🗣",
        title: "Voice I/O",
        detail: "Speech-to-text and text-to-speech with voice cloning",
      },
      {
        icon: "🖼",
        title: "Image Generation",
        detail: "FLUX, Z-Image-Turbo, and Qwen-Image models",
      },
      {
        icon: "🧠",
        title: "Model Hub",
        detail: "Discover, download, and manage models in-app",
      },
      {
        icon: "🔧",
        title: "MCP Integration",
        detail: "Model Context Protocol for extensible tool use",
      },
      {
        icon: "💬",
        title: "Multi-Model Chat",
        detail: "Qwen3, GLM-4, Mistral, DeepSeek, and more",
      },
      {
        icon: "🎥",
        title: "Video Generation",
        detail: "Wan2.2 5B for local video synthesis",
      },
    ],
    github: "https://github.com/moxin-org/Moxin-Studio",
    accentGradient: "from-seal/20 via-seal/5 to-transparent",
  },
  {
    seal: "声",
    name: "Moxin Voice",
    tagline: "GPU-Accelerated Speech Synthesis",
    description:
      "Clone any voice from just 5 seconds of audio. Generate natural speech in Chinese, English, Japanese, and Korean. Live translation with real-time bilingual subtitles.",
    features: [
      {
        icon: "🎤",
        title: "Zero-Shot Cloning",
        detail: "Clone voices from 5-30 seconds of reference audio",
      },
      {
        icon: "🌍",
        title: "Multilingual TTS",
        detail: "9 preset voices across 4 languages",
      },
      {
        icon: "📡",
        title: "Live Translation",
        detail: "Real-time bilingual subtitles from any audio source",
      },
      {
        icon: "📊",
        title: "Waveform Visualization",
        detail: "Real-time recording with live audio visualization",
      },
      {
        icon: "🔊",
        title: "Audio Export",
        detail: "Save generated speech as high-quality WAV files",
      },
      {
        icon: "🌙",
        title: "Native Dark Mode",
        detail: "GPU-rendered dark theme with bilingual UI",
      },
    ],
    github: "https://github.com/moxin-org/Moxin-Voice",
    accentGradient: "from-gold/20 via-gold/5 to-transparent",
  },
];

function FeatureGrid({ features, delay }: { features: AppData["features"]; delay: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
      {features.map((feature, i) => (
        <ScrollReveal key={feature.title} delay={delay + i * 0.08}>
          <div className="feature-card p-5 rounded-sm bg-white/[0.02] border border-white/[0.04] hover:border-seal/20">
            <div className="flex items-start gap-4">
              <span className="text-2xl mt-0.5">{feature.icon}</span>
              <div>
                <h4 className="text-warm text-lg font-medium mb-1">
                  {feature.title}
                </h4>
                <p className="text-warm/50 text-base font-light leading-relaxed">
                  {feature.detail}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
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

function AppCard({ app, index }: { app: AppData; index: number }) {
  const isReversed = index % 2 === 1;

  return (
    <div className="relative">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${app.accentGradient} rounded-lg opacity-30 blur-3xl pointer-events-none`}
      />

      <div
        className={`relative grid md:grid-cols-2 gap-14 items-start ${
          isReversed ? "md:direction-rtl" : ""
        }`}
      >
        <div className={isReversed ? "md:order-2" : ""}>
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-5 mb-8">
              <SealStamp text={app.seal} size="lg" />
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-warm font-bold">
                  {app.name}
                </h3>
                <p className="text-seal text-lg mt-2">{app.tagline}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-warm/60 font-light leading-relaxed text-xl">
              {app.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <a
              href={app.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10 px-7 py-3 border border-seal/40 text-seal hover:bg-seal hover:text-white transition-all text-base rounded-sm group"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </ScrollReveal>
        </div>

        <div className={isReversed ? "md:order-1" : ""}>
          <FeatureGrid features={app.features} delay={0.2} />
        </div>
      </div>
    </div>
  );
}

export default function AppShowcase() {
  return (
    <section id="apps" className="relative py-32 px-6">
      <div className="divider-ink mb-32" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-24">
          <span className="text-base tracking-[0.3em] uppercase text-gold/60 block mb-5">
            Applications
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-warm font-bold mb-8">
            Tools of the Craft
          </h2>
          <p className="text-warm/60 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Native AI applications built with the Moxin stack — each one a
            testament to what&apos;s possible when performance meets purpose.
          </p>
        </ScrollReveal>

        <div className="space-y-32">
          {apps.map((app, i) => (
            <div key={app.name}>
              <AppCard app={app} index={i} />
              {i < apps.length - 1 && <BrushStrokeDivider />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
