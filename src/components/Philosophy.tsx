"use client";

import ScrollReveal from "./ScrollReveal";
import SealStamp from "./SealStamp";

const pillars = [
  {
    char: "纯",
    title: "Pure Rust",
    description:
      "Every line of code, from UI to inference, written in Rust. No Python runtime, no garbage collection pauses, no compromise.",
  },
  {
    char: "速",
    title: "Metal Accelerated",
    description:
      "Direct GPU access through Apple Metal. Models run at native speed on Apple Silicon, with zero abstraction overhead.",
  },
  {
    char: "本",
    title: "Locally Native",
    description:
      "Your data never leaves your machine. Full AI capabilities running natively on your desktop, private by design.",
  },
];

export default function Philosophy() {
  return (
    <section className="relative py-32 px-6">
      <div className="divider-ink mb-32" />

      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <span className="text-base tracking-[0.3em] uppercase text-seal/60 block mb-5">
            Philosophy
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-warm font-bold mb-8">
            The Way of the Artisan
          </h2>
          <p className="text-warm/60 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Like the ancient seal carvers who shaped meaning into stone with
            precision and intent, we craft AI tools with the same deliberate
            mastery.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-14 md:gap-10">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.char} delay={i * 0.15}>
              <div className="text-center group">
                <div className="mb-8 flex justify-center">
                  <SealStamp text={pillar.char} size="lg" />
                </div>
                <h3 className="font-serif text-2xl text-warm font-bold mb-4">
                  {pillar.title}
                </h3>
                <p className="text-warm/50 text-lg font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
