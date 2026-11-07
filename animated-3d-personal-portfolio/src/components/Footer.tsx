import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Magnetic from "./Magnetic";
import { NAV_LINKS } from "../data/content";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/8 px-6 pt-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-10 pb-16 md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl font-extrabold text-white">
              AYAAN MALIK<span className="text-neon">®</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-white/45">
              Creative developer crafting experiences worth remembering. Lahore → the world.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/55 transition-colors hover:text-neon-soft"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <Magnetic>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-3 rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-neon hover:bg-neon/10"
              aria-label="Back to top"
            >
              Back to top
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neon text-void transition-transform duration-300 group-hover:-translate-y-1">
                <ArrowUp className="h-4 w-4" />
              </span>
            </button>
          </Magnetic>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/8 py-7 text-xs text-white/35 sm:flex-row">
          <p>© {new Date().getFullYear()} Ayaan Malik. All rights reserved.</p>
          <p className="tabular-nums">
            Local time — <span className="text-neon-soft">{time}</span>
          </p>
          <p>
            Designed & built with obsession. No templates harmed.
          </p>
        </div>
      </div>

      {/* giant watermark */}
      <motion.p
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-stroke pointer-events-none select-none text-center font-display text-[18vw] font-extrabold leading-[0.8] opacity-25"
      >
        AYAAN®
      </motion.p>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void to-transparent" />
    </footer>
  );
}
