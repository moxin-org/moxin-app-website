"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import { useApp } from "@/context/AppContext";

function TechCard({
  tech,
  index,
}: {
  tech: { name: string; description: string; detail: string };
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="feature-card stamp-frame relative p-8 bg-surface/[0.025] group transition-colors overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* rounded-seal index chip */}
      <span className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-xl border-[1.5px] border-seal/15 font-serif text-base text-seal/30 font-bold">
        {String(index + 1).padStart(2, "0")}
      </span>

      <h4 className="font-serif text-2xl text-warm font-bold mb-3 group-hover:text-seal transition-colors">
        {tech.name}
      </h4>
      <p className="text-warm/60 text-base mb-2">{tech.description}</p>
      <p className="text-warm/40 text-sm font-light">{tech.detail}</p>

      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-seal/40"
        initial={{ width: "0%" }}
        animate={isInView ? { width: "100%" } : { width: "0%" }}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
      />
    </motion.div>
  );
}

function ArchitectureDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useApp();

  const layers = [
    { label: t.tech.layers[0].label, items: ["Moxin Studio", "Moxin Voice"], color: "seal" },
    { label: t.tech.layers[1].label, items: ["Makepad"], color: "gold" },
    { label: t.tech.layers[2].label, items: ["OminiX MLX", "OminiX API"], color: "seal" },
    { label: t.tech.layers[3].label, items: ["Rust", "Apple Metal"], color: "gold" },
  ];

  return (
    <div ref={ref} className="mt-20 max-w-xl mx-auto">
      {layers.map((layer, i) => (
        <motion.div
          key={layer.label}
          className="mb-3"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-6">
            <span className="text-xs sm:text-sm text-warm/40 sm:w-28 text-left sm:text-right font-light shrink-0 uppercase sm:normal-case tracking-wider sm:tracking-normal">
              {layer.label}
            </span>
            <div className="flex-1 flex gap-3">
              {layer.items.map((item) => (
                <div
                  key={item}
                  className={`flex-1 py-3 px-4 text-center text-sm rounded-xl border ${
                    layer.color === "seal"
                      ? "border-seal/20 text-seal/80 bg-seal/[0.05]"
                      : "border-gold/20 text-gold/80 bg-gold/[0.05]"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          {i < layers.length - 1 && (
            <div className="flex items-center gap-6">
              <span className="hidden sm:block w-28" />
              <div className="flex-1 flex justify-center py-1">
                <motion.div
                  className="w-[1px] h-4 bg-warm/10"
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.15 + 0.3 }}
                />
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function Technology() {
  const { t } = useApp();

  return (
    <section id="technology" className="relative py-32 px-6 md:px-8 paper-texture">
      <div className="divider-ink mb-32" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <span className="text-base tracking-[0.3em] uppercase text-seal/60 block mb-5">
            {t.tech.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-warm font-bold mb-8">
            {t.tech.title}
          </h2>
          <p className="text-warm/60 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            {t.tech.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.tech.stack.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <ArchitectureDiagram />
        </ScrollReveal>
      </div>
    </section>
  );
}
