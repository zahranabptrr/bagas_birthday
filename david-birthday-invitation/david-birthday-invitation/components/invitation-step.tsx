"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Check, Clock3, Heart } from "lucide-react";

const noMessages = ["No", "Are you sure?", "Nice try 😄", "The YES button misses you"];

export function InvitationStep({ onYes }: { onYes: () => void }) {
  const [noAttempts, setNoAttempts] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const dodge = () => {
    const nextAttempt = Math.min(noAttempts + 1, noMessages.length - 1);
    setNoAttempts(nextAttempt);
    setPosition({
      x: Math.round((Math.random() - 0.5) * 170),
      y: Math.round((Math.random() - 0.5) * 76),
    });
  };

  return (
    <section className="text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#f8e6e8]"
      >
        <Heart className="text-[#df6e47]" size={38} fill="currentColor" />
      </motion.div>

      <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#4f7fa4]">The official question</p>
      <h2 className="text-balance mx-auto mt-3 max-w-2xl text-3xl font-black leading-tight tracking-[-0.035em] sm:text-5xl">
        Will you go on a special birthday date with me?
      </h2>

      <div className="mx-auto mt-7 grid max-w-xl gap-3 sm:grid-cols-2">
        <div className="flex items-center gap-3 rounded-2xl bg-white/70 p-4 text-left shadow-sm">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#dcecf6] text-[#4f7fa4]">
            <CalendarDays size={22} />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#766b64]">Date</p>
            <p className="font-extrabold">Saturday, July 25, 2026</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-2xl bg-white/70 p-4 text-left shadow-sm">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f8e5d6] text-[#df6e47]">
            <Clock3 size={22} />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#766b64]">Starting time</p>
            <p className="font-extrabold">1:00 PM</p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-9 flex min-h-28 max-w-lg items-center justify-center gap-4">
        <button
          type="button"
          onClick={onYes}
          className="z-10 inline-flex min-h-16 min-w-40 items-center justify-center gap-2 rounded-full bg-[#f28b62] px-9 text-xl font-black text-white shadow-[0_15px_32px_rgba(242,139,98,0.33)] transition hover:-translate-y-1 hover:scale-105 hover:bg-[#df6e47] active:translate-y-0 active:scale-100"
        >
          <Check size={23} strokeWidth={3} /> YES!
        </button>

        <motion.button
          type="button"
          onPointerEnter={dodge}
          onClick={dodge}
          animate={{
            x: position.x,
            y: position.y,
            scale: Math.max(0.62, 1 - noAttempts * 0.1),
          }}
          transition={{ type: "spring", stiffness: 420, damping: 22 }}
          className="absolute right-2 rounded-full border border-[#d6c7b8] bg-white/80 px-5 py-3 text-sm font-bold text-[#766b64] shadow-sm sm:right-10"
          aria-label="Playful no button that moves away"
        >
          {noMessages[noAttempts]}
        </motion.button>
      </div>

      <p className="mt-2 text-sm font-medium text-[#766b64]">Choose wisely. One button is much friendlier than the other.</p>
    </section>
  );
}
