import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { PROJECTS, type Project } from "../data/content";

function ProjectCard({
  project,
  i,
  total,
  progress,
}: {
  project: Project;
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: local } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const imgScale = useTransform(local, [0, 1], [1.3, 1]);
  const targetScale = 1 - (total - 1 - i) * 0.045;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);
  const isEven = i % 2 === 0;

  return (
    <div ref={ref} className="sticky top-0 flex h-screen items-center justify-center">
      <motion.div
        style={{ scale, top: `calc(-6vh + ${i * 24}px)` }}
        className={`card-glow relative grid h-[560px] max-h-[80vh] w-full max-w-5xl origin-top grid-rows-[200px_1fr] overflow-hidden rounded-[1.8rem] border border-neon/25 bg-panel/95 backdrop-blur-xl md:grid-cols-2 md:grid-rows-none ${
          isEven ? "" : "md:[&>*:first-child]:order-2"
        }`}
      >
        {/* image side */}
        <div className="group relative h-full overflow-hidden" data-hover>
          <motion.img
            src={project.img}
            alt={project.title}
            style={{ scale: imgScale }}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-panel/40" />
          <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-void/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
            {project.category}
          </span>
        </div>

        {/* info side */}
        <div className="relative flex flex-col justify-center gap-4 p-7 sm:p-10">
          <span className="text-stroke pointer-events-none absolute right-6 top-4 font-display text-6xl font-extrabold opacity-30 sm:text-7xl">
            0{i + 1}
          </span>

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neon-soft">
            {project.year} — Case Study
          </p>
          <h3 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {project.title}
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-white/55 sm:text-base">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-neon/25 bg-neon/10 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-wider text-neon-soft"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-1 flex items-center gap-2.5 text-sm font-semibold text-emerald-300">
            <TrendingUp className="h-4 w-4" />
            {project.result}
          </div>

          <a
            href="#contact"
            className="group/btn mt-2 inline-flex w-max items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-neon hover:bg-neon hover:text-void hover:shadow-[0_0_35px_-6px_rgba(168,85,247,0.9)]"
          >
            View Case Study
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-45" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default function Work() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="work" className="relative z-10 px-4 py-28 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute right-0 top-40 h-96 w-96 rounded-full bg-magenta/10 blur-[140px]" />
      <div className="mx-auto max-w-7xl pb-10">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading kicker="Selected Work" title="PROJECTS THAT" outline="PRINT MONEY" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-sm text-sm leading-relaxed text-white/50 lg:text-right"
          >
            A few favorites from 120+ launches. Every one custom-built, every one moved the
            needle. Yours could be next.
          </motion.p>
        </div>
      </div>

      <div ref={container} className="relative">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            i={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
