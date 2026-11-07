import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAME = "AYAAN MALIK";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const timer = setInterval(() => {
      current += Math.floor(Math.random() * 9) + 3;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(onDone, 450);
      }
      setCount(current);
    }, 90);
    return () => clearInterval(timer);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-void"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="overflow-hidden">
        <div className="flex">
          {NAME.split("").map((ch, i) => (
            <motion.span
              key={i}
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.15 + i * 0.045, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="font-display text-4xl font-extrabold text-neon sm:text-6xl"
          >
            ®
          </motion.span>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 text-xs uppercase tracking-[0.4em] text-neon-soft/70"
      >
        Creative Developer — Folio 2025
      </motion.p>

      <div className="mt-10 h-px w-56 overflow-hidden bg-white/10 sm:w-72">
        <motion.div
          className="h-full bg-gradient-to-r from-neon-deep via-neon to-magenta"
          style={{ width: `${count}%` }}
        />
      </div>

      <div className="mt-4 font-display text-sm font-bold tabular-nums text-neon-soft">
        {count}%
      </div>

      {/* corner glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-neon-deep/25 blur-[120px]" />
    </motion.div>
  );
}
