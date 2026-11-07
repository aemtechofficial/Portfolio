import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    icon: Search,
    num: "01",
    title: "Discover",
    time: "Day 1–2",
    desc: "Deep-dive call, competitor teardown and goal mapping. I learn your business like it's mine.",
  },
  {
    icon: PenTool,
    num: "02",
    title: "Design",
    time: "Day 3–8",
    desc: "Wireframes to high-fidelity art direction. You see every pixel before a line of code is written.",
  },
  {
    icon: Code2,
    num: "03",
    title: "Develop",
    time: "Day 9–16",
    desc: "Clean, blazing-fast build with motion baked in. Staging link updates you can watch live.",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Deploy & Scale",
    time: "Launch day",
    desc: "SEO-tuned launch, analytics wired, support window active. Then we watch the numbers climb.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.45"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  return (
    <section className="relative z-10 px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="How I Work"
          title="FROM IDEA TO"
          outline="ICONIC — IN DAYS"
          align="center"
        />

        <div ref={ref} className="relative mt-24">
          {/* progress track */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-white/10 lg:block" />
          <motion.div
            style={{ scaleX: lineScale }}
            className="absolute left-0 right-0 top-7 hidden h-[2px] origin-left bg-gradient-to-r from-neon-deep via-neon to-magenta shadow-[0_0_20px_rgba(168,85,247,0.8)] lg:block"
          />

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative"
                >
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-neon/30 bg-void text-neon transition-all duration-500 group-hover:scale-110 group-hover:border-neon group-hover:bg-neon group-hover:text-void group-hover:shadow-[0_0_35px_-5px_rgba(168,85,247,0.9)]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <p className="text-stroke mt-8 font-display text-5xl font-extrabold opacity-50 transition-opacity duration-500 group-hover:opacity-100">
                    {step.num}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-neon-soft/80">
                    {step.time}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
