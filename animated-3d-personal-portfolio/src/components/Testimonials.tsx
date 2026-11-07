import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { TESTIMONIALS, type Testimonial } from "../data/content";

function TCard({ t }: { t: Testimonial }) {
  return (
    <div
      className="group relative w-[21rem] shrink-0 rounded-3xl border border-white/8 bg-panel/80 p-7 backdrop-blur-sm transition-colors duration-500 hover:border-neon/40 sm:w-[26rem]"
      data-hover
    >
      <Quote className="absolute right-6 top-6 h-8 w-8 text-neon/20 transition-colors duration-500 group-hover:text-neon/50" />
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-neon text-neon" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-white/70">"{t.quote}"</p>
      <div className="mt-6 flex items-center gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-neon-deep to-magenta font-display text-sm font-bold text-white">
          {t.initials}
        </span>
        <div>
          <p className="font-display text-sm font-bold text-white">{t.name}</p>
          <p className="text-xs text-white/45">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const rowA = [...TESTIMONIALS.slice(0, 3), ...TESTIMONIALS.slice(0, 3)];
  const rowB = [...TESTIMONIALS.slice(3), ...TESTIMONIALS.slice(3)];

  return (
    <section id="reviews" className="relative z-10 overflow-hidden py-28 lg:py-36">
      <div className="px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            kicker="Client Love"
            title="CLIENTS TALK."
            outline="RESULTS SCREAM."
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-16 space-y-6"
      >
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-void to-transparent sm:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-void to-transparent sm:w-40" />
          <div className="flex w-max animate-marquee gap-6 py-1 hover:[animation-play-state:paused]">
            {[...rowA, ...rowA].map((t, i) => (
              <TCard key={`a-${i}`} t={t} />
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-void to-transparent sm:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-void to-transparent sm:w-40" />
          <div className="flex w-max animate-marquee-reverse gap-6 py-1 hover:[animation-play-state:paused]">
            {[...rowB, ...rowB].map((t, i) => (
              <TCard key={`b-${i}`} t={t} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
