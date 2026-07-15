"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const dots = [
  { left: "8%", top: "14%", size: 14, delay: 0 },
  { left: "17%", top: "78%", size: 10, delay: 0.8 },
  { left: "83%", top: "12%", size: 11, delay: 1.4 },
  { left: "90%", top: "70%", size: 15, delay: 0.4 },
  { left: "72%", top: "86%", size: 9, delay: 1.8 },
];

export function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <div className="soft-grid absolute inset-0 opacity-60" />

      <motion.div
        className="absolute -left-16 top-24 h-56 w-56 rounded-full bg-[#f5c6ca]/35 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, -14, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-[#a9cce7]/35 blur-3xl"
        animate={{ x: [0, -24, 0], y: [0, 18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {dots.map((dot) => (
        <motion.span
          key={`${dot.left}-${dot.top}`}
          className="absolute rounded-full bg-[#f28b62]/60"
          style={{ left: dot.left, top: dot.top, width: dot.size, height: dot.size }}
          animate={{ y: [0, -12, 0], rotate: [0, 12, 0] }}
          transition={{ duration: 4.5, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        className="absolute left-[4%] top-[45%] text-[#df6e47]/30"
        animate={{ rotate: [-7, 9, -7], scale: [1, 1.08, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Heart size={34} fill="currentColor" />
      </motion.div>

      <motion.div
        className="absolute right-[6%] top-[38%] text-[#4f7fa4]/30"
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles size={38} />
      </motion.div>

      <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] font-bold uppercase tracking-[0.32em] text-[#766b64]/35">
        Made with love · 2026
      </span>
    </div>
  );
}
