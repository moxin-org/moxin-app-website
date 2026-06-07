"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SealStamp from "./SealStamp";
import { useApp } from "@/context/AppContext";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/* ════════════════════════════════════════════════════════════════════════
   MEDIA  —  the single place to swap assets.

   • Each product has ONE overview demo video (shown by default, and again
     whenever the user clicks the product title / seal).
   • Each FEATURE maps to its own still (or a placeholder if no asset yet).
     Clicking a feature swaps the stage to that feature's image.

   Feature media order MUST match the `functions` order in src/translations.ts.

   👉 TO REPLACE A PLACEHOLDER: drop the file under public/images/<app>/ and
      change that entry from { kind:"placeholder", … } to
      { kind:"image", src:`${basePath}/images/<app>/<file>.png` }.
   ════════════════════════════════════════════════════════════════════════ */

type Media =
  | { kind: "video"; src: string }
  | { kind: "image"; src: string }
  | { kind: "placeholder" };

const STUDIO_VIDEO: Media = { kind: "video", src: `${basePath}/videos/moxin-studio-demo.mp4` };
const VOICE_VIDEO: Media = { kind: "video", src: `${basePath}/videos/moxin-voice-translate.mp4` };

// Order matches t.apps.studio.functions: 话 视 绘 声 库 联
const studioFeatureMedia: Media[] = [
  { kind: "image", src: `${basePath}/images/moxin-studio/screenshot-vlm.png` },      // Multi-Model Chat
  { kind: "image", src: `${basePath}/images/moxin-studio/screenshot-vlm.png` },      // Vision Models (VLM "describe the image")
  { kind: "placeholder" },                                                            // Image Generation  ⚠️ need: public/images/moxin-studio/image-gen.png
  { kind: "placeholder" },                                                            // Voice I/O         ⚠️ need: public/images/moxin-studio/voice-io.png
  { kind: "image", src: `${basePath}/images/moxin-studio/screenshot-model-hub.png` },// Model Hub
  { kind: "image", src: `${basePath}/images/moxin-studio/screenshot-history.png` },  // MCP Tools (providers/settings)
];

// Order matches t.apps.voice.functions: 仿 音 译 录 听 存
const voiceFeatureMedia: Media[] = [
  { kind: "placeholder" },                                                            // Zero-Shot Cloning ⚠️ need: public/images/moxin-voice/clone.png
  { kind: "placeholder" },                                                            // Text to Speech    ⚠️ need: public/images/moxin-voice/tts.png
  { kind: "image", src: `${basePath}/images/moxin-voice/translate.png` },            // Live Translation
  { kind: "placeholder" },                                                            // Audio Recording   ⚠️ need: public/images/moxin-voice/record.png
  { kind: "placeholder" },                                                            // ASR Transcription ⚠️ need: public/images/moxin-voice/asr.png
  { kind: "placeholder" },                                                            // WAV Export        ⚠️ need: public/images/moxin-voice/export.png
];

type Accent = "seal" | "gold";

/* ─────────────────────────── small UI atoms ─────────────────────────── */

function GitHubButton({ href, label, accent }: { href: string; label: string; accent: Accent }) {
  const ring =
    accent === "seal"
      ? "border-seal/40 text-seal hover:bg-seal"
      : "border-gold/40 text-gold hover:bg-gold";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 mt-8 px-8 py-3.5 border ${ring} hover:text-white transition-all duration-300 text-base rounded-xl group`}
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

/** Styled placeholder when a feature/overview has no asset yet. */
function MediaPlaceholder({ seal, label, accent }: { seal: string; label: string; accent: Accent }) {
  const tint = accent === "seal" ? "text-seal/25" : "text-gold/25";
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-ink">
      <div className={`text-7xl font-serif select-none ${tint}`}>{seal}</div>
      <p className="text-warm/30 text-xs tracking-[0.25em] uppercase text-center px-6">{label}</p>
      <span className="text-warm/15 text-[10px] tracking-widest uppercase">Preview coming soon</span>
    </div>
  );
}

/* ───────────────────────── the showcase ───────────────────────── */

/**
 * One product block. Default stage = the overview demo video. Clicking a
 * feature swaps the stage to that feature's still; clicking the product
 * title/seal returns to the overview video. Text column is narrower, media
 * column wider, and media is letterboxed (object-contain) so nothing is cropped.
 */
function AppBlock({
  appName,
  seal,
  tagline,
  description,
  functions,
  overview,
  featureMedia,
  github,
  githubLabel,
  hintOverview,
  hintFeature,
  accent,
  mediaSide,
}: {
  appName: string;
  seal: string;
  tagline: string;
  description: string;
  functions: { seal: string; label: string; desc: string }[];
  overview: Media;
  featureMedia: Media[];
  github: string;
  githubLabel: string;
  hintOverview: string;
  hintFeature: string;
  accent: Accent;
  mediaSide: "left" | "right";
}) {
  // active = -1 → overview video; 0..n → that feature's media
  const [active, setActive] = useState(-1);
  const current: Media = active < 0 ? overview : featureMedia[active] ?? overview;
  const currentLabel = active < 0 ? appName : functions[active]?.label ?? appName;
  const currentSeal = active < 0 ? seal : functions[active]?.seal ?? seal;

  const accentText = accent === "seal" ? "text-seal" : "text-gold";
  const stampGold = accent === "gold" ? "stamp-gold" : "";

  /* ── stage (video / image / placeholder), nothing cropped ── */
  const stage = (
    <div className={`stamp-frame ${stampGold} overflow-hidden bg-ink/60 backdrop-blur-sm shadow-2xl shadow-black/40`}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-surface/[0.06] bg-surface/[0.02]">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]/80" />
        <span className="w-3 h-3 rounded-full bg-[#FEBC2E]/80" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]/80" />
        <span className="ml-3 text-xs tracking-wide text-warm/40 font-medium">{currentLabel}</span>
      </div>

      <div className="relative aspect-[3/2] bg-ink">
        <div key={active} className="absolute inset-0 media-fade-in">
          {current.kind === "video" ? (
            <video
              key={current.src}
              className="w-full h-full object-contain bg-ink"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src={current.src} type="video/mp4" />
            </video>
          ) : current.kind === "image" ? (
            <Image
              src={current.src}
              alt={currentLabel}
              fill
              className="object-contain bg-ink"
              sizes="(max-width: 1024px) 100vw, 700px"
              priority
            />
          ) : (
            <MediaPlaceholder seal={currentSeal} label={currentLabel} accent={accent} />
          )}
        </div>
      </div>
    </div>
  );

  /* ── compact two-column seal feature list (clickable) ── */
  const featureList = (
    <div className="grid sm:grid-cols-2 gap-x-4 gap-y-3 mt-2">
      {functions.map((f, i) => {
        const isActive = i === active;
        return (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className={`flex items-start gap-3.5 text-left rounded-xl p-2.5 -m-0.5 border transition-all duration-300 group ${
              isActive
                ? accent === "seal"
                  ? "border-seal/35 bg-seal/[0.05]"
                  : "border-gold/35 bg-gold/[0.05]"
                : "border-transparent hover:bg-surface/[0.03]"
            }`}
          >
            <span
              className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-xl font-serif text-lg border-[1.5px] transition-colors duration-300 ${
                isActive
                  ? accent === "seal"
                    ? "border-seal text-seal bg-seal/10"
                    : "border-gold text-gold bg-gold/10"
                  : accent === "seal"
                    ? "border-seal/25 text-seal/70 group-hover:border-seal group-hover:text-seal"
                    : "border-gold/25 text-gold/70 group-hover:border-gold group-hover:text-gold"
              }`}
            >
              {f.seal}
            </span>
            <span className="min-w-0">
              <span className={`block text-[15px] font-medium leading-tight ${isActive ? accentText : "text-warm"}`}>
                {f.label}
              </span>
              <span className="block text-warm/45 text-[13px] font-light leading-snug mt-1">{f.desc}</span>
            </span>
          </button>
        );
      })}
    </div>
  );

  /* ── clickable header (title/seal → back to overview video) ── */
  const textColumn = (
    <>
      <button
        type="button"
        onClick={() => setActive(-1)}
        className="flex items-center gap-5 mb-6 text-left group"
        title="Play overview"
      >
        <SealStamp text={seal} size="lg" accent={accent} />
        <div>
          <h3 className="font-serif text-2xl md:text-3xl text-warm font-bold group-hover:opacity-80 transition-opacity">
            {appName}
          </h3>
          <p className={`${accentText} text-lg mt-2`}>{tagline}</p>
        </div>
      </button>
      <p className="text-warm/60 font-light leading-relaxed text-lg">{description}</p>
      {featureList}
      <p className="text-warm/30 text-xs mt-5 tracking-wide">
        {active < 0 ? hintOverview : hintFeature}
      </p>
      <GitHubButton href={github} label={githubLabel} accent={accent} />
    </>
  );

  // Text column narrower, media column wider.
  const cols =
    mediaSide === "right"
      ? "lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]"
      : "lg:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)]";

  return (
    <div className={`relative grid ${cols} gap-10 lg:gap-12 items-center`}>
      <ScrollReveal className={mediaSide === "left" ? "lg:order-2" : ""}>
        {textColumn}
      </ScrollReveal>
      <div className={mediaSide === "left" ? "lg:order-1" : ""}>
        <ScrollReveal delay={0.15}>{stage}</ScrollReveal>
      </div>
    </div>
  );
}

function BrushStrokeDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref} className="py-24 flex justify-center">
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
    <section id="apps" className="relative py-32 px-6 md:px-8">
      <div className="divider-ink mb-32" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-24">
          <span className="text-base tracking-[0.3em] uppercase text-gold/60 block mb-5">
            {t.apps.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-warm font-bold mb-8">{t.apps.title}</h2>
          <p className="text-warm/60 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            {t.apps.subtitle}
          </p>
        </ScrollReveal>

        {/* ── Moxin Studio — media on the right ── */}
        <div className="relative">
          <div className="absolute -inset-6 md:-inset-10 bg-gradient-to-br from-seal/[0.06] via-transparent to-transparent rounded-3xl pointer-events-none" />
          <AppBlock
            appName={t.apps.studio.name}
            seal={t.apps.studio.seal}
            tagline={t.apps.studio.tagline}
            description={t.apps.studio.description}
            functions={t.apps.studio.functions}
            overview={STUDIO_VIDEO}
            featureMedia={studioFeatureMedia}
            github="https://github.com/moxin-org/Moxin-Studio"
            githubLabel={t.apps.viewOnGithub}
            hintOverview={t.apps.hintOverview}
            hintFeature={t.apps.hintFeature}
            accent="seal"
            mediaSide="right"
          />
        </div>

        <BrushStrokeDivider />

        {/* ── Moxin Voice — media on the left ── */}
        <div className="relative">
          <div className="absolute -inset-6 md:-inset-10 bg-gradient-to-bl from-gold/[0.06] via-transparent to-transparent rounded-3xl pointer-events-none" />
          <AppBlock
            appName={t.apps.voice.name}
            seal={t.apps.voice.seal}
            tagline={t.apps.voice.tagline}
            description={t.apps.voice.description}
            functions={t.apps.voice.functions}
            overview={VOICE_VIDEO}
            featureMedia={voiceFeatureMedia}
            github="https://github.com/moxin-org/Moxin-Voice"
            githubLabel={t.apps.viewOnGithub}
            hintOverview={t.apps.hintOverview}
            hintFeature={t.apps.hintFeature}
            accent="gold"
            mediaSide="left"
          />
        </div>
      </div>
    </section>
  );
}
