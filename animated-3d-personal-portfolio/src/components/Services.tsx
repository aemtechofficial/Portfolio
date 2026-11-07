import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SERVICES } from "../data/content";

function ServiceCard({ service, index }: { service: (typeof SERVICES)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="spotlight-card group relative overflow-hidden rounded-3xl border border-white/8 bg-panel/70 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-neon/40"
      data-hover
    >
      {/* giant watermark number */}
      <span className="text-stroke pointer-events-none absolute -right-3 -top-7 font-display text-[7rem] font-extrabold opacity-25 transition-all duration-500 group-hover:opacity-60">
        {service.num}
      </span>

      <div className="relative">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neon/30 bg-neon/10 text-neon transition-all duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 group-hover:bg-neon group-hover:text-void group-hover:shadow-[0_0_35px_-5px_rgba(168,85,247,0.9)]">
          <Icon className="h-6 w-6" />
        </div>

        <h3 className="mt-7 font-display text-2xl font-bold text-white transition-colors group-hover:text-neon-soft">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/55">{service.desc}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-wider text-white/50 transition-colors group-hover:border-neon/30 group-hover:text-neon-soft"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-neon opacity-0 transition-all duration-500 group-hover:opacity-100">
          Explore service
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>

      {/* bottom gradient line */}
      <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-neon-deep via-neon to-magenta transition-all duration-700 group-hover:w-full" />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative z-10 px-6 py-28 lg:px-10 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-neon-deep/10 blur-[140px]" />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading kicker="What I Do" title="SERVICES THAT" outline="SELL & SCALE" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-sm text-sm leading-relaxed text-white/50 lg:text-right"
          >
            Every service is engineered around one metric — your growth. Pick one, or let me
            architect the whole experience end-to-end.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.num} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
