"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const BAR_COUNT = 14;
const BAR_DURATIONS = [1.2, 0.85, 1.5, 1.0, 1.3, 0.9, 1.1, 1.4, 0.8, 1.2, 1.0, 1.6, 0.9, 1.3];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-zinc-950">
        {/* Ambient glow spots */}
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-500/8 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[25%] w-[450px] h-[450px] rounded-full bg-purple-600/8 blur-[120px] pointer-events-none" />
        <div className="absolute top-[60%] right-[15%] w-[300px] h-[300px] rounded-full bg-cyan-400/5 blur-[100px] pointer-events-none" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,212,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_#09090b_100%)] pointer-events-none" />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto w-full">
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          {/* Mini equalizer */}
          <div className="flex items-end gap-[2px] h-3.5">
            {[0.7, 1.0, 0.5, 1.0, 0.7].map((h, i) => (
              <span
                key={i}
                className="w-[2px] bg-accent rounded-t inline-block"
                style={{
                  height: `${h * 100}%`,
                  animation: `equalize ${0.9 + i * 0.15}s ease-in-out ${i * 0.12}s infinite`,
                }}
              />
            ))}
          </div>
          <span className="text-accent text-[10px] font-bold tracking-[0.35em] uppercase">
            Houston, TX
          </span>
          <div className="flex items-end gap-[2px] h-3.5">
            {[0.7, 1.0, 0.5, 1.0, 0.7].map((h, i) => (
              <span
                key={i}
                className="w-[2px] bg-accent rounded-t inline-block"
                style={{
                  height: `${h * 100}%`,
                  animation: `equalize ${0.9 + i * 0.15}s ease-in-out ${i * 0.12}s infinite`,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display leading-[0.9] mb-5"
        >
          <span className="block text-[clamp(3.5rem,13vw,11rem)] text-white tracking-widest">
            HOUSTON&apos;S DJ
          </span>
          <span className="block text-[clamp(3.5rem,13vw,11rem)] text-gradient tracking-widest">
            FOR EVERY VIBE
          </span>
        </motion.h1>

        {/* Genre line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="text-zinc-500 text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-10"
        >
          House &nbsp;·&nbsp; Latin &nbsp;·&nbsp; Hip Hop &nbsp;·&nbsp; EDM &nbsp;·&nbsp; Open Format
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <a
            href="#booking"
            className="w-full sm:w-auto px-9 py-4 bg-accent text-zinc-950 font-bold text-xs tracking-[0.2em] uppercase rounded-sm glow-cyan glow-cyan-hover transition-all duration-300 hover:scale-105 text-center"
          >
            Book DJ Lifts
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-9 py-4 border border-zinc-700 text-zinc-300 font-medium text-xs tracking-[0.2em] uppercase rounded-sm hover:border-accent/40 hover:text-accent transition-all duration-300 text-center"
          >
            View Services
          </a>
        </motion.div>
      </div>

      {/* ── Equalizer bars decoration ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-end gap-[3px] h-12 opacity-20"
        aria-hidden
      >
        {Array.from({ length: BAR_COUNT }).map((_, i) => (
          <div
            key={i}
            className="w-[3px] bg-accent rounded-t"
            style={{
              height: "100%",
              animation: `equalize ${BAR_DURATIONS[i]}s ease-in-out ${i * 0.08}s infinite`,
            }}
          />
        ))}
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-zinc-600 hover:text-zinc-400 transition-colors"
        >
          <span className="text-[9px] tracking-[0.4em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
