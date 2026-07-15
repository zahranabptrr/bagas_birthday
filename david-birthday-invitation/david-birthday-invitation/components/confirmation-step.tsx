"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Check,
  Clock3,
  Copy,
  Heart,
  RotateCcw,
  Shirt,
  Sparkles,
} from "lucide-react";
import type { DateStyle } from "@/lib/date-options";

export function ConfirmationStep({
  style,
  onChooseAgain,
}: {
  style: DateStyle;
  onChooseAgain: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const Icon = style.icon;

  const copyShareLink = async () => {
    const url = new URL(window.location.href);
    url.searchParams.set("plan", style.id);
    url.searchParams.set("view", "summary");

    try {
      await navigator.clipboard.writeText(url.toString());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.prompt("Copy this shared dashboard link:", url.toString());
    }
  };

  return (
    <section>
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.65, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 210, damping: 13 }}
          className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#f8e6e8] text-[#df6e47]"
        >
          <Heart size={40} fill="currentColor" />
        </motion.div>

        <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#4f7fa4]">Confirmed</p>
        <h2 className="text-balance mx-auto mt-3 max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
          It&apos;s a date! See you on July 25, 2026, at 1:00 PM, David! ❤️
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-[#766b64]">
          Your choice is saved on this device. Use the shared link below so we can both reopen the same summary anytime.
        </p>
      </div>

      <div className="mt-7 rounded-[2rem] bg-[#372f2b] p-5 text-white shadow-[0_24px_60px_rgba(55,47,43,0.22)] sm:p-7">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#f4d88b]">
              <Sparkles size={15} /> Date Summary
            </div>
            <h3 className="text-3xl font-black">{style.label}</h3>
            <p className="mt-3 max-w-xl leading-7 text-white/70">{style.description}</p>
          </div>
          <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-[#372f2b] ${style.accent}`}>
            <Icon size={31} />
          </span>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <SummaryItem icon={CalendarDays} label="Date" value="Saturday, July 25, 2026" />
          <SummaryItem icon={Clock3} label="Time" value="Starting at 1:00 PM" />
        </div>

        <div className="mt-3 rounded-2xl bg-white/8 p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#a9cce7] text-[#372f2b]">
              <Shirt size={21} />
            </span>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-white/55">Recommended outfit</p>
              <p className="mt-1 font-bold leading-7 text-white/90">{style.outfit}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={copyShareLink}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f28b62] px-6 font-extrabold text-white shadow-[0_12px_25px_rgba(242,139,98,0.25)] transition hover:-translate-y-1 hover:bg-[#df6e47]"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
          {copied ? "Link copied!" : "Copy shared dashboard link"}
        </button>
        <button
          type="button"
          onClick={onChooseAgain}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 font-bold text-[#4f7fa4] transition hover:bg-[#dcecf6]/70"
        >
          <RotateCcw size={17} /> Choose another style
        </button>
      </div>
    </section>
  );
}

type SummaryItemProps = {
  icon: typeof CalendarDays;
  label: string;
  value: string;
};

function SummaryItem({ icon: Icon, label, value }: SummaryItemProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/8 p-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#f4d88b]">
        <Icon size={20} />
      </span>
      <div>
        <p className="text-xs font-extrabold uppercase tracking-wider text-white/50">{label}</p>
        <p className="font-bold text-white/90">{value}</p>
      </div>
    </div>
  );
}
