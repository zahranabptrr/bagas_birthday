import { Suspense } from "react";
import { BirthdayExperience } from "@/components/birthday-experience";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Suspense fallback={<div className="min-h-screen bg-[#fff8ee]" />}>
        <BirthdayExperience />
      </Suspense>
    </main>
  );
}
