import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Award, Zap, HeartHandshake } from "lucide-react";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";
import { STATS } from "../data/content";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, value, mv]);

  return (
    <span ref={ref} className="font-display text-5xl font-extrabold text-white sm:text-6xl">
      <motion.span>{rounded}</motion.span>
      <span className="text-neon">{suffix}</span>
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative z-10 px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-neon-deep/40 via-transparent to-magenta/30 blur-2xl" />
            <TiltCard max={8}>
              <div className="card-glow relative overflow-hidden rounded-[1.6rem] border border-neon/25">
                <img
                  src="/images/portrait.jpg"
                  alt="Ayaan Malik — Creative Developer"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="font-display text-xl font-bold text-white">Ayaan Malik</p>
                    <p className="text-xs uppercase tracking-[0.25em] text-neon-soft">
                      Creative Developer
                    </p>
                  </div>
                  <span className="animate-spin-slow text-xl text-neon">✦</span>
                </div>
              </div>
            </TiltCard>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 -top-6 flex items-center gap-3 rounded-2xl border border-neon/30 bg-void/90 px-5 py-4 backdrop-blur-lg"
            >
              <Award className="h-6 w-6 text-neon" />
              <div>
                <p className="font-display text-lg font-bold leading-none text-white">14</p>
                <p className="text-[10px] uppercase tracking-widest text-white/50">
                  Design Awards
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Copy + stats */}
          <div>
            <SectionHeading kicker="The Story" title="NOT JUST CODE." outline="PURE CRAFT." />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 space-y-5 text-base leading-relaxed text-white/60 sm:text-lg"
            >
              <p>
                Six years ago I wrote my first line of code in a tiny bedroom. Today, brands
                across <span className="text-white">14 countries</span> trust me with their
                most important digital asset — their first impression.
              </p>
              <p>
                I sit at the intersection of{" "}
                <span className="text-neon-soft">engineering and art</span> — shipping
                websites that hit 95+ performance scores while looking like they belong on an
                Awwwards podium. No templates. No shortcuts. No "good enough".
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {[
                { icon: Zap, text: "Obsessed with speed & detail" },
                { icon: HeartHandshake, text: "Your growth partner, not a vendor" },
              ].map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-white/75"
                >
                  <Icon className="h-4 w-4 text-neon" />
                  {text}
                </span>
              ))}
            </motion.div>

            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/8 pt-10 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <Counter value={s.value} suffix={s.suffix} />
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/45">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
