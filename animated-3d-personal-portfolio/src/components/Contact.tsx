import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
} from "lucide-react";
import Magnetic from "./Magnetic";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  InstagramIcon,
  DribbbleIcon,
} from "./SocialIcons";

const BUDGETS = ["$500 – $1k", "$1k – $3k", "$3k – $5k", "$5k+"];

const INFO = [
  { icon: Mail, label: "Email", value: "hello@ayaan.dev", href: "mailto:hello@ayaan.dev" },
  { icon: Phone, label: "WhatsApp / Call", value: "+92 300 123 4567", href: "tel:+923001234567" },
  { icon: MapPin, label: "Based in", value: "Lahore, PK — Works worldwide", href: undefined },
];

const SOCIALS = [
  { icon: GithubIcon, href: "#" },
  { icon: LinkedinIcon, href: "#" },
  { icon: XIcon, href: "#" },
  { icon: InstagramIcon, href: "#" },
  { icon: DribbbleIcon, href: "#" },
];

export default function Contact() {
  const [budget, setBudget] = useState(BUDGETS[1]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1400);
    setTimeout(() => setStatus("idle"), 4200);
  };

  return (
    <section id="contact" className="relative z-10 overflow-hidden px-6 py-28 lg:px-10 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-neon-deep/15 blur-[160px]" />

      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-neon-soft"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-neon" />
            Final Boss Level
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-neon" />
          </motion.span>

          <h2 className="mt-6 font-display text-[11vw] font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="block text-white"
              >
                LET'S BUILD
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-stroke text-glow block"
              >
                LEGENDARY
              </motion.span>
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/50 sm:text-base"
          >
            Tell me about your project. I'll reply with a plan, a timeline and a fixed quote
            within 24 hours — no fluff, no pressure.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="card-glow flex flex-col justify-between gap-10 rounded-[1.8rem] border border-neon/25 bg-panel/80 p-9 backdrop-blur-xl"
          >
            <div className="space-y-7">
              {INFO.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-neon/30 bg-neon/10 text-neon">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="font-medium text-white transition-colors hover:text-neon-soft">
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-white">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                Follow the work
              </p>
              <div className="mt-4 flex gap-3">
                {SOCIALS.map(({ icon: Icon, href }, i) => (
                  <Magnetic key={i} strength={0.5}>
                    <a
                      href={href}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white/60 transition-all duration-300 hover:border-neon hover:bg-neon hover:text-void hover:shadow-[0_0_25px_-4px_rgba(168,85,247,0.9)]"
                      aria-label="Social link"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
              <p className="text-xs leading-relaxed text-white/45">
                <span className="font-semibold text-neon-soft">2 project slots</span> left
                for this quarter. First call is always free — even if we don't work together,
                you'll leave with actionable ideas.
              </p>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[1.8rem] border border-white/8 bg-panel/60 p-9 backdrop-blur-sm"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Your Name
                </span>
                <input
                  required
                  placeholder="John Carter"
                  className="rounded-xl border border-white/10 bg-void/60 px-5 py-4 text-sm text-white placeholder:text-white/25 outline-none transition-all focus:border-neon focus:shadow-[0_0_20px_-6px_rgba(168,85,247,0.7)]"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Email
                </span>
                <input
                  required
                  type="email"
                  placeholder="john@company.com"
                  className="rounded-xl border border-white/10 bg-void/60 px-5 py-4 text-sm text-white placeholder:text-white/25 outline-none transition-all focus:border-neon focus:shadow-[0_0_20px_-6px_rgba(168,85,247,0.7)]"
                />
              </label>
            </div>

            <div className="mt-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Project Budget
              </span>
              <div className="mt-3 flex flex-wrap gap-3">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                      budget === b
                        ? "bg-neon text-void shadow-[0_0_25px_-5px_rgba(168,85,247,0.9)]"
                        : "border border-white/12 text-white/60 hover:border-neon/50 hover:text-white"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <label className="mt-6 flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Project Details
              </span>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your goals, timeline and dream outcome…"
                className="resize-none rounded-xl border border-white/10 bg-void/60 px-5 py-4 text-sm text-white placeholder:text-white/25 outline-none transition-all focus:border-neon focus:shadow-[0_0_20px_-6px_rgba(168,85,247,0.7)]"
              />
            </label>

            <Magnetic className="mt-8 w-full">
              <button
                type="submit"
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-neon py-4.5 font-display text-lg font-bold text-void transition-shadow duration-300 hover:shadow-[0_0_55px_-8px_rgba(168,85,247,1)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <AnimatePresence mode="wait" initial={false}>
                  {status === "idle" && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3"
                    >
                      Send Project Brief
                      <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </motion.span>
                  )}
                  {status === "sending" && (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3"
                    >
                      Sending…
                      <Loader2 className="h-5 w-5 animate-spin" />
                    </motion.span>
                  )}
                  {status === "sent" && (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-3"
                    >
                      Brief Received — Talk Soon!
                      <CheckCircle2 className="h-5 w-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </Magnetic>

            <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-white/35">
              Average reply time: under 2 hours
              <ArrowUpRight className="h-3.5 w-3.5 text-neon" />
              100% confidential
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
