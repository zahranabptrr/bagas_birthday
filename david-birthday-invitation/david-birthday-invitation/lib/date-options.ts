import type { LucideIcon } from "lucide-react";
import { Gamepad2, Palette, UtensilsCrossed } from "lucide-react";

export type DateStyleId = "casual" | "fine-dining" | "creative";

export type DateStyle = {
  id: DateStyleId;
  label: string;
  shortLabel: string;
  description: string;
  examples: string;
  outfit: string;
  icon: LucideIcon;
  accent: string;
  badge: string;
};

export const DATE_STYLES: DateStyle[] = [
  {
    id: "casual",
    label: "Casual & Chill",
    shortLabel: "Option A",
    description:
      "An easygoing afternoon with plenty of time to talk, laugh, snack, and simply enjoy being together.",
    examples: "Cafe hopping, playing arcade games, or a cozy movie night.",
    outfit:
      "Casual and comfortable: a T-shirt or oversized shirt, jeans or chinos, and sneakers.",
    icon: Gamepad2,
    accent: "bg-[#dcecf6]",
    badge: "Low-key fun",
  },
  {
    id: "fine-dining",
    label: "Fine Dining Elegance",
    shortLabel: "Option B",
    description:
      "A polished birthday celebration with good food, a lovely atmosphere, and a little extra sparkle.",
    examples: "A fancy dinner or rooftop restaurant experience.",
    outfit:
      "Semi-formal or smart casual: a button-down shirt, trousers or chinos, loafers, and an optional neat blazer.",
    icon: UtensilsCrossed,
    accent: "bg-[#f8e5d6]",
    badge: "Dress-up date",
  },
  {
    id: "creative",
    label: "Creative & Playful",
    shortLabel: "Option C",
    description:
      "A hands-on date made for trying something new, making memories, and keeping a cute souvenir afterward.",
    examples: "An art date, pottery class, or museum visit.",
    outfit:
      "Stylish yet practical: a polo shirt or casual flannel, comfortable pants, and clean sneakers.",
    icon: Palette,
    accent: "bg-[#f8e6e8]",
    badge: "Make something",
  },
];

export function getDateStyle(id: string | null): DateStyle | null {
  return DATE_STYLES.find((style) => style.id === id) ?? null;
}
