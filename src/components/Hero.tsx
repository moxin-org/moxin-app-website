"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useApp } from "@/context/AppContext";

function InkDrips() {
  const drips = [
    { left: "10%", height: "120px", delay: 0 },
    { left: "25%", height: "80px", delay: 0.5 },
    { left: "40%", height: "160px", delay: 1.0 },
    { left: "60%", height: "100px", delay: 0.3 },
    { left: "75%", height: "140px", delay: 0.8 },
    { left: "90%", height: "90px", delay: 1.2 },
  ];

  return (
    <>
      {drips.map((drip, i) => (
        <motion.div
          key={i}
          className="ink-drip"
          style={{ left: drip.left, top: 0, height: drip.height }}
          initial={{ scaleY: 0, transformOrigin: "top" }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, delay: drip.delay + 1, ease: "easeOut" }}
        />
      ))}
    </>
  );
}

function FloatingSeals() {
  const seals = [
    { char: "智", x: "8%", y: "20%", size: 48, delay: 2 },
    { char: "道", x: "88%", y: "30%", size: 40, delay: 2.5 },
    { char: "器", x: "15%", y: "70%", size: 36, delay: 3 },
    { char: "铸", x: "82%", y: "75%", size: 42, delay: 3.2 },
  ];

  return (
    <>
      {seals.map((seal, i) => (
        <motion.div
          key={i}
          className="absolute opacity-[0.06] font-serif text-seal select-none pointer-events-none"
          style={{ left: seal.x, top: seal.y, fontSize: `${seal.size}px` }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.06, scale: 1, y: [0, -15, 0] }}
          transition={{
            opacity: { duration: 1, delay: seal.delay },
            scale: { duration: 1, delay: seal.delay },
            y: { duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: seal.delay },
          }}
        >
          {seal.char}
        </motion.div>
      ))}
    </>
  );
}

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const { t } = useApp();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ink-wash">
      <InkDrips />
      <FloatingSeals />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-seal/[0.03] blur-[100px]" />
      </div>

      <motion.div className="relative z-10 text-center px-6" style={{ y: titleY, opacity }}>
        <motion.div
          className="mb-10 flex justify-center"
          initial={{ scale: 1.3, opacity: 0, rotate: -3 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/moxin-logo.png`}
            alt="Moxin"
            width={140}
            height={140}
            priority
          />
        </motion.div>

        <motion.h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider text-warm mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          {t.hero.title}
        </motion.h1>

        <motion.div
          className="mx-auto mb-10 h-[2px] bg-gradient-to-r from-transparent via-seal to-transparent"
          initial={{ width: 0 }}
          animate={{ width: "240px" }}
          transition={{ duration: 1.2, delay: 1.0, ease: "easeOut" }}
        />

        <motion.p
          className="text-2xl md:text-3xl text-warm/70 font-light tracking-wide max-w-xl mx-auto mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {t.hero.tagline}
        </motion.p>

        <motion.p
          className="text-lg text-warm/50 font-light tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          className="mt-20 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <span className="text-sm text-warm/30 tracking-widest uppercase">
            {t.hero.scroll}
          </span>
          <motion.div
            className="w-[1px] h-10 bg-gradient-to-b from-seal/40 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
