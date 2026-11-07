import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { FAQS } from "../data/content";

function Item({
  faq,
  open,
  onToggle,
  index,
}: {
  faq: (typeof FAQS)[0];
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`overflow-hidden rounded-2xl border transition-colors duration-500 ${
        open ? "border-neon/40 bg-neon/[0.06]" : "border-white/8 bg-white/[0.02] hover:border-white/20"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
      >
        <span className="flex items-center gap-4">
          <span className="text-stroke font-display text-xl font-extrabold">
            0{index + 1}
          </span>
          <span className="font-display text-lg font-bold text-white sm:text-xl">
            {faq.q}
          </span>
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
            open ? "border-neon bg-neon text-void" : "border-white/15 text-white"
          }`}
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-7 pb-7 pl-[4.5rem] text-sm leading-relaxed text-white/60 sm:text-base">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative z-10 px-6 py-28 lg:px-10 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeading kicker="Questions" title="BEFORE YOU" outline="ASK — ANSWERED" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-sm text-sm leading-relaxed text-white/50"
          >
            Still curious about something? Drop me a message — I reply within 2 hours,
            usually faster.
          </motion.p>
        </div>
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, i) => (
            <Item
              key={i}
              faq={faq}
              index={i}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
