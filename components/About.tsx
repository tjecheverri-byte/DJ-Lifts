"use client";

import { motion } from "framer-motion";
import { Dumbbell, Music, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  { value: "5+", label: "Years DJing" },
  { value: "200+", label: "Events" },
  { value: "HTX", label: "Based In" },
];

const pillars = [
  { icon: Music, text: "Open format — no genre walls, no limits" },
  { icon: MapPin, text: "Available across Houston & surrounding areas" },
  { icon: Dumbbell, text: "High energy from first drop to last call" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: Text ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}
          >
            <motion.p
              variants={fadeUp}
              className="text-accent text-[10px] font-bold tracking-[0.35em] uppercase mb-4"
            >
              The DJ
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[0.92] tracking-wide mb-7"
            >
              I&apos;M TRISTAN.
              <br />
              <span className="text-gradient">I READ ROOMS.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-zinc-400 text-base md:text-lg leading-relaxed mb-5"
            >
              Houston-based, open format. House, Latin, hip hop, EDM — I move between
              genres the same way the crowd moves on the floor. No rigid sets. No
              autopilot. I read the room and keep it moving from the first track
              to last call.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-zinc-400 text-base md:text-lg leading-relaxed mb-9"
            >
              The brand is simple:{" "}
              <span className="text-white font-medium">I lift weights and I lift rooms.</span>{" "}
              Same discipline, different weights. DJ Lifts is about showing up
              prepared, going hard, and leaving nothing on the floor.
            </motion.p>

            {/* Genre tags */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-9">
              {["Open Format", "House", "Latin", "Hip Hop", "EDM", "Houston"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[11px] font-medium tracking-wide border border-zinc-800 text-zinc-500 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Pillars */}
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              {pillars.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={15} className="text-accent flex-shrink-0" />
                  <span className="text-zinc-400 text-sm">{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {/* Identity card */}
            <div className="relative p-8 bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cyan-500/8 blur-[60px] pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-purple-600/8 blur-[50px] pointer-events-none" />

              <div className="relative">
                <p className="font-display text-[5.5rem] text-gradient leading-none tracking-wide">
                  DJ
                </p>
                <p className="font-display text-[5.5rem] text-white leading-none tracking-wide -mt-3">
                  LIFTS
                </p>
                <div className="mt-5 pt-5 border-t border-zinc-800">
                  <p className="text-zinc-500 text-xs tracking-[0.25em] uppercase">
                    Tristan Echeverri · Houston, TX
                  </p>
                  <p className="text-zinc-600 text-xs mt-1">
                    Open Format · House · Latin · Hip Hop · EDM
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="p-5 bg-zinc-900 border border-zinc-800 rounded-sm text-center"
                >
                  <p className="font-display text-3xl text-accent leading-none">
                    {stat.value}
                  </p>
                  <p className="text-zinc-600 text-[11px] mt-1.5 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
