"use client";

import { motion } from "framer-motion";

export function ProgressDots({ current }: { current: number }) {
  return (
    <div className="mb-6 flex items-center justify-center gap-2" aria-label={`Step ${current + 1} of 4`}>
      {[0, 1, 2, 3].map((step) => (
        <motion.span
          key={step}
          className="h-2.5 rounded-full"
          animate={{
            width: current === step ? 32 : 10,
            backgroundColor: current >= step ? "#f28b62" : "#ddd1c4",
          }}
          transition={{ duration: 0.25 }}
        />
      ))}
    </div>
  );
}
