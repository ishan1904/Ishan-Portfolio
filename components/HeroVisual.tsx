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

        {/* Capability connections */}
        <svg
          aria-hidden="true"
          viewBox="0 0 620 470"
          className="pointer-events-none absolute inset-0 z-[5] h-full w-full"
        >
          <defs>
            <linearGradient id="flowCyan" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.45" />
            </linearGradient>

            <linearGradient id="flowViolet" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d8b4fe" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#d8b4fe" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Left capabilities → intelligence */}
          <path
            d="M 170 120 C 220 125, 235 165, 285 190"
            fill="none"
            stroke="url(#flowCyan)"
            strokeWidth="1"
          />

          <path
            d="M 170 340 C 220 330, 235 285, 285 255"
            fill="none"
            stroke="url(#flowCyan)"
            strokeWidth="1"
          />

          {/* Right capabilities → intelligence */}
          <path
            d="M 450 120 C 400 125, 385 165, 335 190"
            fill="none"
            stroke="url(#flowViolet)"
            strokeWidth="1"
          />

          <path
            d="M 450 340 C 400 330, 385 285, 335 255"
            fill="none"
            stroke="url(#flowViolet)"
            strokeWidth="1"
          />
        </svg>
        
        
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
          className={`absolute z-20 w-48 rounded-2xl border border-white/[0.08] bg-white/[0.055] p-4 shadow-[0_16px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl ${card.className}`}
        >
            <p className="text-sm font-semibold text-white">{card.title}</p>
            <p className="mt-2 text-xs leading-5 text-gray-400">{card.text}</p>
          </motion.div>
        ))}
      </div>

    {/* Bottom production system */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.9 }}
      className="absolute bottom-0 left-[-150px] z-30 w-[620px] rounded-[2rem] border border-white/10 bg-black/70 p-6 shadow-[0_0_60px_rgba(34,211,238,0.12)] backdrop-blur-2xl"
    >
      {/* Header */}
      <div className="mb-7">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
            Production AI/ML System
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            Intelligence, engineered end to end.
          </h3>
        </div>
      </div>

      {/* Pipeline stages */}
      <div className="grid grid-cols-4 gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
            Data
          </p>
          <p className="mt-2 text-sm font-medium text-white">
            Pipelines
          </p>
          <p className="mt-1 text-xs leading-5 text-white/45">
            Spark · Airflow
          </p>
        </div>

        <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-cyan-400/[0.08] to-purple-400/[0.08] blur-xl" />

        <div className="relative">
          <p className="text-[10px] uppercase tracking-[0.18em] text-cyan-300/70">
            Intelligence
          </p>

          <p className="mt-2 text-sm font-semibold text-white">
            ML / LLM
          </p>

          <p className="mt-1 text-xs leading-5 text-white/50">
            Models · RAG
          </p>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
            Serving
          </p>
          <p className="mt-2 text-sm font-medium text-white">
            Production APIs
          </p>
          <p className="mt-1 text-xs leading-5 text-white/45">
            FastAPI · Docker
          </p>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
            Observe
          </p>
          <p className="mt-2 text-sm font-medium text-white">
            Monitoring
          </p>
          <p className="mt-1 text-xs leading-5 text-white/45">
            MLflow · Metrics
          </p>
        </div>
      </div>
        {/* System flow */}
        <div className="relative mt-6 h-px">

          {/* Base path */}
          <div className="absolute inset-0 bg-white/10" />

          {/* Subtle colored energy path */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/25 via-purple-300/25 to-cyan-300/15" />

          {/* DATA node */}
          <motion.div
            className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-300"
            animate={{
              scale: [1, 1.8, 1, 1, 1],
              opacity: [0.6, 1, 0.6, 0.6, 0.6],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              repeatDelay: 2.5,
              times: [0, 0.05, 0.12, 0.7, 1],
              ease: "easeInOut",
            }}
          />

          {/* INTELLIGENCE node */}
          <motion.div
            className="absolute left-1/3 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300"
            animate={{
              scale: [1, 1, 1.9, 1, 1],
              opacity: [0.55, 0.55, 1, 0.55, 0.55],
              boxShadow: [
                "0 0 8px rgba(216,180,254,0.25)",
                "0 0 8px rgba(216,180,254,0.25)",
                "0 0 24px rgba(216,180,254,0.9)",
                "0 0 8px rgba(216,180,254,0.25)",
                "0 0 8px rgba(216,180,254,0.25)",
              ],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              repeatDelay: 2.5,
              times: [0, 0.26, 0.34, 0.43, 1],
              ease: "easeInOut",
            }}
          />

          {/* SERVING node */}
          <motion.div
            className="absolute left-2/3 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/80"
            animate={{
              scale: [1, 1, 1, 1.8, 1],
              opacity: [0.5, 0.5, 0.5, 1, 0.5],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              repeatDelay: 2.5,
              times: [0, 0.55, 0.62, 0.68, 1],
              ease: "easeInOut",
            }}
          />

          {/* OBSERVE node */}
          <motion.div
            className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-300/60"
            animate={{
              scale: [1, 1, 1, 1, 1.8, 1],
              opacity: [0.45, 0.45, 0.45, 0.45, 1, 0.45],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              repeatDelay: 2.5,
              times: [0, 0.55, 0.75, 0.88, 0.96, 1],
              ease: "easeInOut",
            }}
          />

          {/* Traveling signal */}
          <motion.div
            className="absolute top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_rgba(103,232,249,0.95)]"
            animate={{
              left: ["0%", "33.333%", "66.666%", "100%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              repeatDelay: 2.5,
              times: [0, 0.33, 0.66, 1],
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}