import { motion } from "framer-motion";

export default function SectionHeading({
  kicker,
  title,
  outline,
  align = "left",
}: {
  kicker: string;
  title: string;
  outline?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start";
  return (
    <div className={`flex flex-col gap-4 ${alignCls}`}>
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-neon-soft"
      >
        <span className="h-px w-10 bg-gradient-to-r from-neon to-transparent" />
        {kicker}
      </motion.span>

      <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
        <span className="block overflow-hidden">
          <motion.span
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="block text-white"
          >
            {title}
          </motion.span>
        </span>
        {outline && (
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-stroke block"
            >
              {outline}
            </motion.span>
          </span>
        )}
      </h2>
    </div>
  );
}
