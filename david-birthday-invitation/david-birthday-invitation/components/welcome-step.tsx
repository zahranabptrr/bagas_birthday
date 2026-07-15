"use client";

import { CakeSlice, ChevronRight, Heart, PartyPopper } from "lucide-react";
import { motion } from "framer-motion";

export function WelcomeStep({
  onOpen,
  onViewSaved,
  hasSavedPlan,
}: {
  onOpen: () => void;
  onViewSaved: () => void;
  hasSavedPlan: boolean;
}) {
  return (
    <section className="text-center">
      <motion.div
        initial={{ scale: 0.75, rotate: -8, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 14 }}
        className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-[#f8e5d6] shadow-[0_14px_35px_rgba(223,110,71,0.18)]"
      >
        <CakeSlice className="text-[#df6e47]" size={48} strokeWidth={1.8} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-[#4f7fa4]"
      >
        A little birthday surprise
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18 }}
        className="text-balance text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl"
      >
        Happy 28th Birthday,
        <span className="block text-[#df6e47]">David! 🎂</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.26 }}
        className="mx-auto mt-5 max-w-lg text-base leading-7 text-[#766b64] sm:text-lg"
      >
        I planned a tiny birthday adventure for my favorite person. All you have to do is open this invitation and choose our vibe.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.34 }}
        className="mt-8 flex flex-col items-center gap-3"
      >
        <button
          type="button"
          onClick={onOpen}
          className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#f28b62] px-8 text-base font-extrabold text-white shadow-[0_14px_30px_rgba(242,139,98,0.32)] transition hover:-translate-y-1 hover:bg-[#df6e47] active:translate-y-0"
        >
          <PartyPopper size={20} />
          Open Invitation
          <ChevronRight size={19} className="transition group-hover:translate-x-1" />
        </button>

        {hasSavedPlan && (
          <button
            type="button"
            onClick={onViewSaved}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-[#4f7fa4] transition hover:bg-[#dcecf6]/70"
          >
            <Heart size={16} fill="currentColor" />
            View our saved date plan
          </button>
        )}
      </motion.div>
    </section>
  );
}
