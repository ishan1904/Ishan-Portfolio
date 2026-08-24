"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: 0, x: 70, y: 120 },
  { id: 1, x: 190, y: 80 },
  { id: 2, x: 300, y: 180 },
  { id: 3, x: 430, y: 100 },
  { id: 4, x: 550, y: 220 },
  { id: 5, x: 690, y: 120 },
  { id: 6, x: 830, y: 190 },
  { id: 7, x: 940, y: 90 },

  { id: 8, x: 120, y: 350 },
  { id: 9, x: 260, y: 300 },
  { id: 10, x: 400, y: 410 },
  { id: 11, x: 540, y: 340 },
  { id: 12, x: 690, y: 440 },
  { id: 13, x: 840, y: 350 },
  { id: 14, x: 950, y: 470 },

  { id: 15, x: 70, y: 590 },
  { id: 16, x: 230, y: 540 },
  { id: 17, x: 390, y: 620 },
  { id: 18, x: 560, y: 550 },
  { id: 19, x: 740, y: 610 },
  { id: 20, x: 900, y: 560 },
];

const edges = [
  [0, 1],
  [0, 8],
  [1, 2],
  [1, 9],
  [2, 3],
  [2, 9],
  [2, 10],
  [3, 4],
  [3, 11],
  [4, 5],
  [4, 11],
  [4, 12],
  [5, 6],
  [5, 13],
  [6, 7],
  [6, 13],

  [8, 9],
  [8, 15],
  [9, 10],
  [9, 16],
  [10, 11],
  [10, 17],
  [11, 12],
  [11, 18],
  [12, 13],
  [12, 19],
  [13, 14],
  [13, 20],

  [15, 16],
  [16, 17],
  [17, 18],
  [18, 19],
  [19, 20],
];

export default function NeuralFlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1000 700"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="edgeGradient">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#c084fc" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.18" />
          </linearGradient>
        </defs>

        {/* Straight neural-network edges */}
        {edges.map(([fromId, toId], index) => {
          const from = nodes[fromId];
          const to = nodes[toId];

          return (
            <g key={`${fromId}-${toId}`}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="url(#edgeGradient)"
                strokeWidth="1.2"
              />

              {/* Traveling energy particle */}
              <motion.circle
                r="3.5"
                fill={index % 2 === 0 ? "#67e8f9" : "#d8b4fe"}
                filter="url(#nodeGlow)"
                initial={{
                  cx: from.x,
                  cy: from.y,
                  opacity: 0,
                }}
                animate={{
                  cx: [from.x, to.x],
                  cy: [from.y, to.y],
                  opacity: [0, 1, 1, 0],
                  scale: [0.7, 1.4, 1, 0.7],
                }}
                transition={{
                  duration: 2.2 + (index % 5) * 0.35,
                  delay: (index % 8) * 0.4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Second, smaller delayed particle */}
              <motion.circle
                r="2"
                fill="#ffffff"
                filter="url(#nodeGlow)"
                initial={{
                  cx: from.x,
                  cy: from.y,
                  opacity: 0,
                }}
                animate={{
                  cx: [from.x, to.x],
                  cy: [from.y, to.y],
                  opacity: [0, 0.9, 0.9, 0],
                }}
                transition={{
                  duration: 2.2 + (index % 5) * 0.35,
                  delay: 1.1 + (index % 8) * 0.4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </g>
          );
        })}

        {/* Neural nodes */}
        {nodes.map((node, index) => (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="8"
              fill={
                index % 3 === 0
                  ? "rgba(192,132,252,0.12)"
                  : "rgba(103,232,249,0.12)"
              }
              animate={{
                r: [6, 9, 6],
                opacity: [0.25, 0.55, 0.25],
                }}
              transition={{
                duration: 3,
                delay: index * 0.12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.circle
              cx={node.x}
              cy={node.y}
              r="3.5"
              fill={index % 3 === 0 ? "#d8b4fe" : "#67e8f9"}
              filter="url(#nodeGlow)"
              animate={{
                opacity: [0.55, 1, 0.55],
                scale: [0.9, 1.3, 0.9],
              }}
              transition={{
                duration: 2.4,
                delay: index * 0.14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}
      </svg>

      {/* Soft ambient depth */}
      <div className="absolute left-[10%] top-[18%] h-64 w-64 rounded-full bg-cyan-400/10 blur-[100px]" />
      <div className="absolute right-[12%] top-[45%] h-72 w-72 rounded-full bg-purple-500/10 blur-[110px]" />
    </div>
  );
}