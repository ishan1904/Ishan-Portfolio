"use client";

import { motion } from "framer-motion";
import HeroVisual from "./HeroVisual";
import NeuralFlow from "./NeuralFlow";

export default function Hero() {
  return (
    <section className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-start gap-16 px-6 py-28 pb-16 lg:grid-cols-2">
      {/* Localized neural transition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-[320px] w-[72%] overflow-hidden opacity-50
        [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_80%,transparent)]
        [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_80%,transparent)]"
              >
        <NeuralFlow />
      </div>
      {/* Left content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          AI/ML Engineer
        </p>

        <h1 className="text-5xl font-bold leading-[0.95] tracking-tight md:text-5xl xl:text-6xl">
          Turning{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
            data, models, and LLMs
          </span>{" "}
          into production-ready intelligence.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
        I build AI/ML systems that connect machine learning, generative AI, data
        pipelines, and MLOps into reliable products people can actually use.
      </p>
      
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-cyan-300 to-purple-300 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(34,211,238,0.35)] transition hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="/Ishan_Rajvi_AI_ML.pdf"
            target="_blank"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            View Resume
          </a>
        </div>
      </motion.div>

      <HeroVisual />
    </section>
  );
}