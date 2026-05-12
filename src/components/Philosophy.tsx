"use client";

import ScrollReveal from "./ScrollReveal";
import SealStamp from "./SealStamp";
import { useApp } from "@/context/AppContext";

const seals = ["纯", "速", "本"];

export default function Philosophy() {
  const { t } = useApp();

  return (
    <section className="relative py-32 px-6">
      <div className="divider-ink mb-32" />

      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <span className="text-base tracking-[0.3em] uppercase text-seal/60 block mb-5">
            {t.philosophy.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-warm font-bold mb-8">
            {t.philosophy.title}
          </h2>
          <p className="text-warm/60 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            {t.philosophy.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-14 md:gap-10">
          {t.philosophy.pillars.map((pillar, i) => (
            <ScrollReveal key={seals[i]} delay={i * 0.15}>
              <div className="text-center group">
                <div className="mb-8 flex justify-center">
                  <SealStamp text={seals[i]} size="lg" />
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
