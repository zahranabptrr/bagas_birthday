"use client";

import { useCallback, useEffect, useState } from "react";
import type { DateStyleId } from "@/lib/date-options";

const STORAGE_KEY = "david-birthday-date-style";

type SavedPlan = {
  styleId: DateStyleId;
  savedAt: string;
};

function isDateStyleId(value: string | null): value is DateStyleId {
  return value === "casual" || value === "fine-dining" || value === "creative";
}

export function useDatePlan() {
  const [savedStyleId, setSavedStyleId] = useState<DateStyleId | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw) as Partial<SavedPlan>;
          const storedId = parsed.styleId ?? null;
          if (isDateStyleId(storedId)) {
            setSavedStyleId(storedId);
          }
        }
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      } finally {
        setIsHydrated(true);
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const savePlan = useCallback((styleId: DateStyleId) => {
    const plan: SavedPlan = {
      styleId,
      savedAt: new Date().toISOString(),
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(plan));
    setSavedStyleId(styleId);
  }, []);

  const clearPlan = useCallback(() => {
    window.localStorage.removeItem(STORAGE_KEY);
    setSavedStyleId(null);
  }, []);

  return {
    savedStyleId,
    isHydrated,
    savePlan,
    clearPlan,
  };
}
