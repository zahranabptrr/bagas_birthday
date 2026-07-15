"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shirt, Sparkles } from "lucide-react";
import { DATE_STYLES, type DateStyleId } from "@/lib/date-options";

export function DateStyleStep({
  selectedId,
  onSelect,
  onConfirm,
}: {
  selectedId: DateStyleId;
  onSelect: (id: DateStyleId) => void;
  onConfirm: () => void;
}) {
  const selected = DATE_STYLES.find((style) => style.id === selectedId) ?? DATE_STYLES[0];

  return (
    <section>
      <div className="text-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#4f7fa4]">You said yes!</p>
        <h2 className="text-balance mt-3 text-3xl font-black tracking-[-0.035em] sm:text-5xl">Choose our date style</h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-[#766b64]">
          Pick the birthday mood that sounds best. The details below update as you choose.
        </p>
      </div>

      <div className="mt-7 grid gap-3 md:grid-cols-3">
        {DATE_STYLES.map((style) => {
          const Icon = style.icon;
          const isSelected = selectedId === style.id;

          return (
            <button
              key={style.id}
              type="button"
              onClick={() => onSelect(style.id)}
              className={`relative rounded-3xl border p-4 text-left transition-all hover:-translate-y-1 ${
                isSelected
                  ? "border-[#f28b62] bg-white shadow-[0_15px_35px_rgba(242,139,98,0.16)]"
                  : "border-white/80 bg-white/55 hover:bg-white/80"
              }`}
              aria-pressed={isSelected}
            >
              {isSelected && <CheckCircle2 className="absolute right-4 top-4 text-[#df6e47]" size={21} />}
              <span className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${style.accent}`}>
                <Icon size={24} />
              </span>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#766b64]">{style.shortLabel}</span>
              <span className="mt-1 block text-lg font-black">{style.label}</span>
              <span className="mt-3 inline-flex rounded-full bg-[#fff8ee] px-3 py-1 text-xs font-bold text-[#766b64]">
                {style.badge}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div
        key={selected.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-5 rounded-[2rem] border border-white/80 bg-white/68 p-5 shadow-sm sm:p-7"
      >
        <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-3 flex items-center gap-2 text-[#df6e47]">
              <Sparkles size={18} />
              <span className="text-xs font-extrabold uppercase tracking-wider">The plan</span>
            </div>
            <h3 className="text-2xl font-black">{selected.label}</h3>
            <p className="mt-3 leading-7 text-[#766b64]">{selected.description}</p>
            <p className="mt-3 rounded-2xl bg-[#fff8ee] p-4 text-sm font-bold leading-6 text-[#5e524b]">{selected.examples}</p>
          </div>

          <div className="rounded-3xl bg-[#dcecf6]/70 p-5">
            <div className="mb-3 flex items-center gap-2 text-[#4f7fa4]">
              <Shirt size={20} />
              <span className="text-xs font-extrabold uppercase tracking-wider">Outfit recommendation</span>
            </div>
            <p className="font-bold leading-7 text-[#425b6d]">{selected.outfit}</p>
          </div>
        </div>
      </motion.div>

      <div className="mt-7 flex justify-center">
        <button
          type="button"
          onClick={onConfirm}
          className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#f28b62] px-7 font-extrabold text-white shadow-[0_14px_30px_rgba(242,139,98,0.28)] transition hover:-translate-y-1 hover:bg-[#df6e47]"
        >
          Confirm Date Style
          <ArrowRight size={19} className="transition group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
