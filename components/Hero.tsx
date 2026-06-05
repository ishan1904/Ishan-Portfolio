"use client";

import { motion } from "framer-motion";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-2">
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

          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl xl:text-6xl">
          Building{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
            AI/ML systems
          </span>{" "}
          that turn data into real-world impact.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
        I build intelligent systems that combine machine learning, NLP, generative AI,
        data pipelines, and MLOps to turn complex data into reliable, user-facing
        products.
      </p>
      
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-cyan-300 to-purple-300 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(34,211,238,0.35)] transition hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="#resume"
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