"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const techStack = [
  {
    name: "Rust",
    description: "Systems language powering every layer",
    detail: "Memory safety without garbage collection",
  },
  {
    name: "Makepad",
    description: "GPU-accelerated native UI framework",
    detail: "Pure Rust, cross-platform rendering",
  },
  {
    name: "OminiX MLX",
    description: "Apple Silicon inference engine",
    detail: "Metal GPU acceleration for ML models",
  },
  {
    name: "Dora",
    description: "Dataflow orchestration framework",
    detail: "Connecting AI pipelines seamlessly",
  },
];

function TechCard({
  tech,
  index,
}: {
  tech: (typeof techStack)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="relative p-8 border border-white/[0.06] rounded-sm bg-white/[0.02] group hover:border-seal/20 transition-colors"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <span className="absolute top-4 right-4 font-serif text-4xl text-white/[0.04] font-bold">
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

  const layers = [
    { label: "Applications", items: ["Moxin Studio", "Moxin Voice"], color: "seal" },
    { label: "UI Framework", items: ["Makepad"], color: "gold" },
    { label: "Inference", items: ["OminiX MLX", "OminiX API"], color: "seal" },
    { label: "Runtime", items: ["Rust", "Apple Metal"], color: "gold" },
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
          <div className="flex items-center gap-6">
            <span className="text-sm text-warm/40 w-28 text-right font-light shrink-0">
              {layer.label}
            </span>
            <div className="flex-1 flex gap-3">
              {layer.items.map((item) => (
                <div
                  key={item}
                  className={`flex-1 py-3 px-4 text-center text-sm rounded-sm border ${
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
              <span className="w-28" />
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
  return (
    <section id="technology" className="relative py-32 px-6 paper-texture">
      <div className="divider-ink mb-32" />

      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <span className="text-base tracking-[0.3em] uppercase text-seal/60 block mb-5">
            Technology
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-warm font-bold mb-8">
            Forged in Rust
          </h2>
          <p className="text-warm/60 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            A vertically integrated stack from metal to pixel. Every component
            chosen for performance, every abstraction earned.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {techStack.map((tech, i) => (
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
