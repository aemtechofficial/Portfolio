import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";

import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import ParticleField from "./components/ParticleField";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Process from "./components/Process";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const ready = !loading;

  // buttery smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1.05 });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // anchor links work smoothly with lenis
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -70, duration: 1.4 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  // lock scroll during preloader
  useEffect(() => {
    document.documentElement.style.overflow = loading ? "hidden" : "";
  }, [loading]);

  return (
    <div className="relative min-h-screen bg-void text-white">
      <div className="noise-overlay" />
      <Cursor />

      <AnimatePresence>
        {loading && <Preloader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <ParticleField />
      <Navbar ready={ready} />

      <main className="relative">
        <Hero ready={ready} />
        <Marquee />
        <About />
        <Services />
        <Work />
        <Process />
        <Packages />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
