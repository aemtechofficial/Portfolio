import { Sparkles } from "lucide-react";

const ITEMS = [
  "WEB DEVELOPMENT",
  "UI/UX DESIGN",
  "3D EXPERIENCES",
  "BRAND IDENTITY",
  "MOTION DESIGN",
  "E-COMMERCE",
  "SEO & SPEED",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative z-10 -rotate-1 border-y border-neon/25 bg-gradient-to-r from-neon-deep/90 via-neon/90 to-neon-deep/90 py-4 shadow-[0_0_60px_-10px_rgba(168,85,247,0.6)]">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-lg font-bold tracking-wide text-void sm:text-xl">
              {item}
            </span>
            <Sparkles className="h-5 w-5 text-void/80" />
          </span>
        ))}
      </div>
    </div>
  );
}
