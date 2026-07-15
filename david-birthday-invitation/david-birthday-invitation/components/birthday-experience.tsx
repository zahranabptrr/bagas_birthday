"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useSearchParams } from "next/navigation";
import { BackgroundDecor } from "@/components/background-decor";
import { ConfirmationStep } from "@/components/confirmation-step";
import { DateStyleStep } from "@/components/date-style-step";
import { InvitationStep } from "@/components/invitation-step";
import { ProgressDots } from "@/components/progress-dots";
import { WelcomeStep } from "@/components/welcome-step";
import { useDatePlan } from "@/hooks/use-date-plan";
import { getDateStyle, type DateStyleId } from "@/lib/date-options";

type Step = 0 | 1 | 2 | 3;

function fireCelebration() {
  const end = Date.now() + 900;
  const colors = ["#f28b62", "#f5c6ca", "#a9cce7", "#f4d88b", "#fff8ee"];

  const frame = () => {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 60,
      origin: { x: 0, y: 0.65 },
      colors,
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 60,
      origin: { x: 1, y: 0.65 },
      colors,
    });

    if (Date.now() < end) requestAnimationFrame(frame);
  };

  frame();
}

export function BirthdayExperience() {
  const searchParams = useSearchParams();
  const sharedPlanId = searchParams.get("plan");
  const sharedView = searchParams.get("view") === "summary";
  const sharedStyle = getDateStyle(sharedPlanId);

  const { savedStyleId, isHydrated, savePlan, clearPlan } = useDatePlan();
  const initialSharedStyleId = sharedStyle && sharedView ? sharedStyle.id : "casual";
  const [step, setStep] = useState<Step>(sharedStyle && sharedView ? 3 : 0);
  const [selectedStyleId, setSelectedStyleId] = useState<DateStyleId>(initialSharedStyleId);

  const confirmedStyle = useMemo(
    () => getDateStyle(selectedStyleId) ?? getDateStyle("casual")!,
    [selectedStyleId],
  );

  const openInvitation = () => {
    fireCelebration();
    window.setTimeout(() => setStep(1), 380);
  };

  const acceptInvitation = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      startVelocity: 35,
      origin: { y: 0.62 },
      colors: ["#f28b62", "#f5c6ca", "#a9cce7", "#f4d88b"],
    });
    setStep(2);
  };

  const confirmPlan = () => {
    savePlan(selectedStyleId);
    const url = new URL(window.location.href);
    url.searchParams.set("plan", selectedStyleId);
    url.searchParams.set("view", "summary");
    window.history.replaceState({}, "", url.toString());
    confetti({
      particleCount: 180,
      spread: 105,
      startVelocity: 42,
      origin: { y: 0.68 },
      colors: ["#f28b62", "#f5c6ca", "#a9cce7", "#f4d88b", "#ffffff"],
    });
    setStep(3);
  };

  const viewSavedPlan = () => {
    if (!savedStyleId) return;
    setSelectedStyleId(savedStyleId);
    setStep(3);
  };

  const chooseAgain = () => {
    clearPlan();
    const url = new URL(window.location.href);
    url.searchParams.delete("plan");
    url.searchParams.delete("view");
    window.history.replaceState({}, "", url.pathname);
    setStep(2);
  };

  return (
    <div className="relative z-0 flex min-h-screen items-center justify-center px-4 py-12 sm:px-6">
      <BackgroundDecor />

      <div className="relative z-10 w-full max-w-5xl">
        <ProgressDots current={step} />

        <div className="paper-card rounded-[2.25rem] p-5 sm:p-9 lg:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 22, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.985 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {step === 0 && (
                <WelcomeStep
                  onOpen={openInvitation}
                  onViewSaved={viewSavedPlan}
                  hasSavedPlan={isHydrated && Boolean(savedStyleId)}
                />
              )}
              {step === 1 && <InvitationStep onYes={acceptInvitation} />}
              {step === 2 && (
                <DateStyleStep
                  selectedId={selectedStyleId}
                  onSelect={setSelectedStyleId}
                  onConfirm={confirmPlan}
                />
              )}
              {step === 3 && <ConfirmationStep style={confirmedStyle} onChooseAgain={chooseAgain} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
