import {
  Code2,
  PenTool,
  Boxes,
  Fingerprint,
  ShoppingBag,
  Gauge,
  type LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Packages", href: "#packages" },
  { label: "Reviews", href: "#reviews" },
];

export interface Service {
  icon: LucideIcon;
  num: string;
  title: string;
  desc: string;
  tags: string[];
}

export const SERVICES: Service[] = [
  {
    icon: Code2,
    num: "01",
    title: "Web Development",
    desc: "Blazing-fast, scalable websites & web apps built with React, Next.js and modern tooling. Pixel-perfect, responsive, production-ready code.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: PenTool,
    num: "02",
    title: "UI / UX Design",
    desc: "Interfaces that feel inevitable. Research-driven UX, high-fidelity Figma designs and design systems your developers will love.",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    icon: Boxes,
    num: "03",
    title: "3D & Motion",
    desc: "Scroll-stopping WebGL scenes, micro-interactions and buttery GSAP-powered motion that turn visitors into believers.",
    tags: ["Three.js", "GSAP", "Framer Motion"],
  },
  {
    icon: Fingerprint,
    num: "04",
    title: "Brand Identity",
    desc: "Logos, typography and visual languages with a pulse. Identities engineered to be unforgettable across every touchpoint.",
    tags: ["Logo", "Guidelines", "Art Direction"],
  },
  {
    icon: ShoppingBag,
    num: "05",
    title: "E-Commerce",
    desc: "Conversion-obsessed storefronts on Shopify & custom stacks. Checkout flows so smooth, abandonment rates cry.",
    tags: ["Shopify", "Stripe", "CRO"],
  },
  {
    icon: Gauge,
    num: "06",
    title: "SEO & Performance",
    desc: "90+ Core Web Vitals scores, technical SEO and analytics setups that make Google fall in love with your site.",
    tags: ["Core Web Vitals", "Technical SEO", "Analytics"],
  },
];

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  img: string;
  desc: string;
  stack: string[];
  result: string;
}

export const PROJECTS: Project[] = [
  {
    id: "lumen",
    title: "LUMEN",
    category: "E-Commerce · Fashion",
    year: "2025",
    img: "/images/work-lumen.jpg",
    desc: "A headless fashion storefront with cinematic product storytelling and a 0.9s average load time.",
    stack: ["Next.js", "Shopify", "GSAP"],
    result: "+214% conversion rate",
  },
  {
    id: "nova",
    title: "NOVA BANK",
    category: "Fintech · Dashboard",
    year: "2025",
    img: "/images/work-nova.jpg",
    desc: "Real-time banking dashboard with live data-viz, dark-mode first design and bank-grade security UX.",
    stack: ["React", "D3.js", "WebSockets"],
    result: "4.9★ rated by 12k users",
  },
  {
    id: "orbit",
    title: "ORBIT",
    category: "SaaS · Analytics",
    year: "2024",
    img: "/images/work-orbit.jpg",
    desc: "Analytics platform reimagined — glassmorphic UI, anomaly alerts and reports that write themselves.",
    stack: ["Next.js", "Tailwind", "Prisma"],
    result: "$2.4M seed round raised",
  },
  {
    id: "pulse",
    title: "PULSE",
    category: "Mobile · Fitness",
    year: "2024",
    img: "/images/work-pulse.jpg",
    desc: "Fitness app with adaptive workout plans, haptic-driven interactions and streak psychology baked in.",
    stack: ["React Native", "Reanimated", "Firebase"],
    result: "120k downloads in 90 days",
  },
  {
    id: "aurum",
    title: "AURUM",
    category: "Real Estate · Luxury",
    year: "2024",
    img: "/images/work-aurum.jpg",
    desc: "Digital flagship for a luxury property group — 3D tours, concierge flows and editorial typography.",
    stack: ["Nuxt", "Three.js", "Sanity"],
    result: "Sold 7 villas above asking",
  },
  {
    id: "synth",
    title: "SYNTH",
    category: "AI · Music Tech",
    year: "2023",
    img: "/images/work-synth.jpg",
    desc: "AI music studio in the browser. Generative soundscapes with a UI that feels like playing an instrument.",
    stack: ["React", "Tone.js", "Web Audio"],
    result: "Featured on Product Hunt #1",
  },
];

export interface Pkg {
  name: string;
  tagline: string;
  price: string;
  unit: string;
  popular?: boolean;
  delivery: string;
  features: string[];
  cta: string;
}

export const PACKAGES: Pkg[] = [
  {
    name: "IGNITE",
    tagline: "Perfect for launching your presence",
    price: "$490",
    unit: "one-time",
    delivery: "7-day delivery",
    features: [
      "1-page high-converting landing page",
      "Custom design — zero templates",
      "Mobile-first responsive build",
      "Smooth scroll & micro-animations",
      "On-page SEO setup",
      "Contact form + WhatsApp integration",
      "2 revision rounds",
    ],
    cta: "Start Small",
  },
  {
    name: "ELEVATE",
    tagline: "For brands ready to dominate",
    price: "$1,490",
    unit: "one-time",
    popular: true,
    delivery: "14-day delivery",
    features: [
      "Up to 6 custom pages",
      "Premium 3D / motion interactions",
      "CMS — edit content yourself",
      "Blog / portfolio system",
      "Advanced SEO + 95+ PageSpeed",
      "Analytics & heatmap setup",
      "Copywriting polish included",
      "4 revision rounds",
      "30 days post-launch support",
    ],
    cta: "Go Popular",
  },
  {
    name: "EMPIRE",
    tagline: "The full digital flagship experience",
    price: "$3,900+",
    unit: "project",
    delivery: "30-day delivery",
    features: [
      "Unlimited pages & user flows",
      "Full brand identity suite",
      "Custom WebGL / 3D experiences",
      "E-commerce or web-app build",
      "Awwwards-level art direction",
      "Conversion copywriting",
      "Dedicated project manager",
      "Unlimited revisions (design phase)",
      "90 days priority support",
    ],
    cta: "Build An Empire",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Ayaan rebuilt our store and conversions literally doubled in month one. The animations alone make people stay 3x longer.",
    name: "Sarah Chen",
    role: "Founder, LUMEN",
    initials: "SC",
  },
  {
    quote: "Best investment we made pre-seed. Investors kept complimenting the product UI in every single pitch meeting.",
    name: "David Okafor",
    role: "CEO, Orbit Analytics",
    initials: "DO",
  },
  {
    quote: "He doesn't just design websites — he designs how people feel about your brand. Absolute wizard with motion.",
    name: "Amira Hassan",
    role: "CMO, Aurum Estates",
    initials: "AH",
  },
  {
    quote: "Delivered a 6-page site in two weeks that our old agency quoted three months for. Quality is unreal for the price.",
    name: "James Whitfield",
    role: "Director, Whitfield & Co.",
    initials: "JW",
  },
  {
    quote: "Our app store rating went from 3.8 to 4.9 after the redesign. Users literally email us about the interface.",
    name: "Priya Sharma",
    role: "Product Lead, Pulse",
    initials: "PS",
  },
  {
    quote: "Communication was midnight-fast, revisions were instant, and the final site won us a design award. Book him before he's booked out.",
    name: "Lucas Meyer",
    role: "Founder, SYNTH",
    initials: "LM",
  },
];

export const FAQS = [
  {
    q: "How fast can we start?",
    a: "I take on max 3 projects per month to keep quality insane. Usually we can kick off within 5–7 days of our first call — sometimes faster if a slot frees up.",
  },
  {
    q: "What's the payment structure?",
    a: "Simple: 50% to lock your slot, 50% on final delivery before handover. For EMPIRE projects I offer 40/30/30 milestone splits. Bank transfer, PayPal or Wise — your call.",
  },
  {
    q: "Do you work with international clients?",
    a: "That's 80% of my business. I've shipped for clients in the US, UK, UAE, Germany and Australia. Async updates, Loom walkthroughs and overlap hours keep everything smooth.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Every package includes a support window (30–90 days). After that, my care plans start at $99/mo — updates, backups, tweaks and priority turnaround.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely — redesigns are my favorite. I'll audit what's killing your conversions, keep what works, and rebuild the rest into something your competitors screenshot.",
  },
];

export const STATS = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 6, suffix: "yrs", label: "Crafting Experiences" },
  { value: 48, suffix: "+", label: "Happy Clients Worldwide" },
  { value: 14, suffix: "", label: "Design Awards Won" },
];
