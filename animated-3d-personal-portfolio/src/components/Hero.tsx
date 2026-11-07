import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, BadgeCheck, MapPin } from "lucide-react";
import Magnetic from "./Magnetic";
import TiltCard from "./TiltCard";
import { useRef } from "react";

function RevealLine({
  children,
  delay,
  ready,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  ready: boolean;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        initial={{ y: "110%" }}
        animate={ready ? { y: 0 } : {}}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        className={`block ${className}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative z-10 flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-16 lg:px-10"
    >
      {/* glow orbs */}
      <motion.div style={{ y: yBg }} className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-24 h-[30rem] w-[30rem] rounded-full bg-neon-deep/20 blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-magenta/15 blur-[140px]" />
      </motion.div>

      {/* grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.35) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 40%, black, transparent)",
        }}
      />

      <motion.div style={{ opacity }} className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.35fr_1fr]">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={ready ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-neon/30 bg-neon/10 px-5 py-2"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-neon" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-soft">
                Available for new projects
              </span>
            </motion.div>

            <h1 className="font-display text-[13vw] font-extrabold leading-[0.92] tracking-tight sm:text-7xl lg:text-[5.6rem] xl:text-8xl">
              <RevealLine delay={0.45} ready={ready} className="text-white">
                CREATIVE
              </RevealLine>
              <RevealLine delay={0.55} ready={ready} className="text-stroke">
                DEVELOPER
              </RevealLine>
              <RevealLine delay={0.65} ready={ready}>
                <span className="bg-gradient-to-r from-neon-deep via-neon-soft to-magenta bg-clip-text text-transparent text-glow">
                  &amp; DESIGNER
                </span>
              </RevealLine>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mt-8 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
            >
              I'm <span className="font-semibold text-white">Ayaan Malik</span> — I build
              jaw-dropping digital experiences that make brands impossible to ignore.
              Websites that don't just load fast — they{" "}
              <span className="text-neon-soft">leave marks</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.05, duration: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <Magnetic>
                <a
                  href="#work"
                  className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-neon px-8 py-4 font-semibold text-void transition-shadow duration-300 hover:shadow-[0_0_50px_-8px_rgba(168,85,247,0.9)]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  View My Work
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#packages"
                  className="flex items-center gap-3 rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-neon/60 hover:bg-neon/10"
                >
                  <Sparkles className="h-4 w-4 text-neon" />
                  See Packages
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* RIGHT — floating 3D ID card */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 4 }}
            animate={ready ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto hidden w-full max-w-sm lg:block"
          >
            <div className="animate-float">
              <TiltCard max={14}>
                <div className="card-glow relative overflow-hidden rounded-3xl border border-neon/25 bg-panel/80 p-8 backdrop-blur-xl">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-neon/30 blur-3xl" />

                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-neon-soft/70">
                        Identity Card
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-extrabold text-white">
                        Ayaan Malik
                      </h3>
                      <p className="mt-1 text-sm text-white/50">Full-Stack Creative</p>
                    </div>
                    <span className="animate-spin-slow text-2xl text-neon">✦</span>
                  </div>

                  <div className="mt-8 space-y-3 text-sm">
                    <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3">
                      <BadgeCheck className="h-4 w-4 text-neon" />
                      <span className="text-white/80">6+ years · 120+ projects</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3">
                      <MapPin className="h-4 w-4 text-neon" />
                      <span className="text-white/80">Working worldwide · Remote</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-neon/25 bg-neon/10 px-4 py-3">
                      <span className="h-2 w-2 rounded-full bg-neon" />
                      <span className="font-medium text-neon-soft">
                        Booking for Q1 2026
                      </span>
                    </div>
                  </div>

                  <div
                    className="mt-8 font-display text-lg font-bold leading-snug text-white/90"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    "Good design gets seen.
                    <br />
                    <span className="text-neon-soft">Great design gets felt."</span>
                  </div>
                </div>
              </TiltCard>
            </div>

            {/* orbiting chip */}
            <motion.div
              animate={{ y: [0, -14, 0], rotate: [-4, 4, -4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-10 -top-8 rounded-2xl border border-neon/30 bg-void/80 px-5 py-3 backdrop-blur-lg"
            >
              <p className="text-[10px] uppercase tracking-widest text-white/50">Rating</p>
              <p className="font-display text-lg font-bold text-neon-soft">5.0 ★★★★★</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0], rotate: [3, -3, 3] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-4 rounded-2xl border border-neon/30 bg-void/80 px-5 py-3 backdrop-blur-lg"
            >
              <p className="text-[10px] uppercase tracking-widest text-white/50">Response</p>
              <p className="font-display text-lg font-bold text-neon-soft">&lt; 2 hours</p>
            </motion.div>
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
          className="group mt-16 hidden w-max items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/40 transition-colors hover:text-neon-soft md:flex"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 group-hover:border-neon/50"
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
          Scroll to explore
        </motion.a>
      </motion.div>
    </section>
  );
}
