import { motion } from "framer-motion";
import { Check, Clock, Crown, ShieldCheck, Zap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Magnetic from "./Magnetic";
import { PACKAGES } from "../data/content";

export default function Packages() {
  return (
    <section id="packages" className="relative z-10 px-6 py-28 lg:px-10 lg:py-36">
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-neon-deep/15 blur-[150px]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Investment"
          title="PACKAGES BUILT"
          outline="TO PAY BACK"
          align="center"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-white/50 sm:text-base"
        >
          Transparent, fixed pricing — no hourly billing games, no surprise invoices. Every
          package is a weapon designed to return 10x its cost.
        </motion.p>

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-3 lg:gap-6">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className={`group relative flex flex-col rounded-[1.8rem] p-8 backdrop-blur-sm transition-all duration-500 sm:p-9 ${
                pkg.popular
                  ? "border border-neon/50 bg-gradient-to-b from-neon-deep/25 via-panel to-panel shadow-[0_0_70px_-15px_rgba(168,85,247,0.7)] lg:-my-4 lg:py-14"
                  : "border border-white/8 bg-panel/60 hover:border-neon/30"
              }`}
              data-hover
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-neon-deep to-magenta px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_30px_-5px_rgba(168,85,247,0.9)]">
                  <Crown className="h-3.5 w-3.5" />
                  Most Popular
                </div>
              )}

              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-extrabold tracking-wide text-white">
                  {pkg.name}
                </h3>
                <span className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/50">
                  <Clock className="h-3 w-3 text-neon" />
                  {pkg.delivery}
                </span>
              </div>
              <p className="mt-2 text-sm text-white/50">{pkg.tagline}</p>

              <div className="mt-7 flex items-end gap-2">
                <span
                  className={`font-display text-5xl font-extrabold tracking-tight ${
                    pkg.popular
                      ? "bg-gradient-to-r from-neon-soft to-magenta bg-clip-text text-transparent"
                      : "text-white"
                  }`}
                >
                  {pkg.price}
                </span>
                <span className="pb-1.5 text-sm text-white/40">/ {pkg.unit}</span>
              </div>

              <div className="my-7 h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent" />

              <ul className="flex flex-1 flex-col gap-3.5">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/70">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        pkg.popular ? "bg-neon/25 text-neon-soft" : "bg-white/5 text-neon"
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Magnetic className="mt-9 w-full">
                <a
                  href="#contact"
                  className={`relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full py-4 font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? "bg-neon text-void hover:shadow-[0_0_50px_-8px_rgba(168,85,247,1)]"
                      : "border border-white/15 text-white hover:border-neon/60 hover:bg-neon/10"
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  )}
                  <Zap className="h-4 w-4" />
                  {pkg.cta}
                </a>
              </Magnetic>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-14 flex max-w-3xl flex-col items-center justify-center gap-4 rounded-2xl border border-white/8 bg-white/[0.02] px-8 py-6 text-center sm:flex-row sm:gap-8"
        >
          <span className="flex items-center gap-2.5 text-sm text-white/60">
            <ShieldCheck className="h-5 w-5 text-neon" />
            100% money-back if the first design draft doesn't wow you
          </span>
          <span className="hidden h-6 w-px bg-white/10 sm:block" />
          <span className="text-sm text-white/60">
            Need something custom?{" "}
            <a href="#contact" className="font-semibold text-neon-soft underline-offset-4 hover:underline">
              Get a tailored quote →
            </a>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
