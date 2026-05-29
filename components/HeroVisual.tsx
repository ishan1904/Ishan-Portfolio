"use client";

import { motion } from "framer-motion";

const workflowNodes = [
  "PDF Upload",
  "OCR Layer",
  "LLM Engine",
  "Validation",
  "Structured Output",
];

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative hidden h-[520px] lg:block"
    >
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_80px_rgba(34,211,238,0.35)] backdrop-blur-xl"
      />

      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-sm" />

      {workflowNodes.map((node, index) => (
        <motion.div
          key={node}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 + index * 0.15 }}
          className="absolute right-0 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-medium text-white shadow-2xl backdrop-blur-xl"
          style={{
            top: `${70 + index * 78}px`,
            width: "210px",
          }}
        >
          <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/20 text-xs text-cyan-300">
            {index + 1}
          </span>
          {node}
        </motion.div>
      ))}
    </motion.div>
  );
}