"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skillCards = [
  {
    title: "Machine Learning",
    text: "Predictive modeling · CV · time-series",
    className: "left-0 top-10",
  },
  {
    title: "Generative AI",
    text: "LLMs · RAG · agents · transformers",
    className: "right-0 top-10",
  },
  {
    title: "Data & MLOps",
    text: "Pipelines · MLflow · Docker · Kubernetes",
    className: "left-0 top-64",
  },
  {
    title: "Cloud & Production",
    text: "AWS · Azure · APIs · monitoring",
    className: "right-0 top-64",
  },
];

const metrics = [
  ["Data Ingestion", "92%"],
  ["Feature Engineering", "86%"],
  ["Model Serving", "94%"],
  ["Monitoring", "89%"],
];

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative hidden h-[720px] w-full items-center justify-center lg:flex"
    >
      {/* Top visual zone */}
      <div className="absolute left-1/2 top-0 h-[470px] w-[620px] -translate-x-1/2">
        <div className="absolute left-1/2 top-20 h-[430px] w-[430px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[130px]" />
        <div className="absolute left-1/2 top-28 h-[330px] w-[330px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[110px]" />

        <div className="absolute left-1/2 top-12 h-[460px] w-[460px] -translate-x-1/2 rounded-full border border-purple-400/20" />
        <div className="absolute left-1/2 top-24 h-[350px] w-[350px] -translate-x-1/2 rounded-full border border-cyan-300/20" />

        {/* Neural AI/ML centerpiece */}
      <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.2,
        delay: 0.4,
        ease: "easeOut",
      }}
        className="absolute left-1/2 top-12 z-10 h-[390px] w-[390px] -translate-x-1/2"
      >
        <div className="absolute inset-6 rounded-full bg-cyan-400/10 blur-[70px]" />

        <Image
          src="/ai-neural-head.png"
          alt="Abstract neural network profile representing AI and machine learning systems"
          fill
          priority
          className="object-contain opacity-90 scale-x-[-1]"
        />
      </motion.div>

        {skillCards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: -3 }}
          transition={{
          opacity: {
            duration: 0.8,
            delay: 0.5 + index * 0.12,
          },
          y: {
            duration: 4.5 + index * 0.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          },
        }}
          className={`absolute z-20 w-52 rounded-2xl border border-white/10 bg-white/[0.08] p-4 shadow-2xl backdrop-blur-xl ${card.className}`}
        >
            <p className="text-sm font-semibold text-white">{card.title}</p>
            <p className="mt-2 text-xs leading-5 text-gray-400">{card.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom production monitor */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.9 }}
        className="absolute bottom-0 z-30 w-[560px] rounded-[2rem] border border-white/10 bg-black/55 p-6 shadow-[0_0_70px_rgba(34,211,238,0.16)] backdrop-blur-2xl"
      >
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
              Production Monitor
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              ML / LLM Pipeline
            </h3>
          </div>

          <p className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
            Live
          </p>
        </div>

        {metrics.map(([label, width]) => (
          <div key={label} className="mb-4 last:mb-0">
            <div className="mb-2 flex justify-between text-xs">
              <span className="text-gray-400">{label}</span>
              <span className="text-gray-500">{width}</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width }}
                transition={{ duration: 1.2, delay: 1.1 }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-purple-300"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}