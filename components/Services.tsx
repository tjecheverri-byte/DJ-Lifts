"use client";

import { motion } from "framer-motion";
import { Heart, Building2, Users, Mic2, ShoppingBag, Sparkles } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Private Events",
    description:
      "Birthdays, house parties, quinceañeras, milestone celebrations — if it needs energy, I bring it. Every age, every crowd.",
    gradient: "from-cyan-500/15 to-transparent",
  },
  {
    icon: Heart,
    title: "Weddings",
    description:
      "Ceremony, cocktail hour, and a packed dance floor all night. I coordinate the timeline so you don't have to think about it.",
    gradient: "from-pink-500/15 to-transparent",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Galas, holiday parties, product launches, company milestones. Professional, polished, and still way more fun than expected.",
    gradient: "from-blue-500/15 to-transparent",
  },
  {
    icon: Mic2,
    title: "Nightlife",
    description:
      "Clubs, bars, rooftops, residencies. Open format that adapts to the room and keeps the floor moving from open to close.",
    gradient: "from-purple-500/15 to-transparent",
  },
  {
    icon: ShoppingBag,
    title: "Market Pop-Ups",
    description:
      "Art markets, brand activations, vendor events. Set the vibe, draw the crowd, make the brand feel alive.",
    gradient: "from-orange-500/15 to-transparent",
  },
  {
    icon: Sparkles,
    title: "Custom Bookings",
    description:
      "Got something else in mind? Let's talk. Every event is different — and I'm built for all of them.",
    gradient: "from-emerald-500/15 to-transparent",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36 bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-accent text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
            What I Do
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-wide leading-[0.92]">
            EVERY EVENT.
            <br />
            <span className="text-gradient">EVERY VIBE.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.09 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="group relative p-6 bg-zinc-900 border border-zinc-800/80 hover:border-accent/25 rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                {/* Hover gradient fill */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative">
                  <div className="mb-5 inline-flex p-2.5 bg-zinc-800 rounded-sm group-hover:bg-accent/10 transition-colors duration-300">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <h3 className="font-display text-2xl text-white tracking-wide mb-3">
                    {service.title.toUpperCase()}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-9 py-4 bg-accent text-zinc-950 font-bold text-xs tracking-[0.2em] uppercase rounded-sm glow-cyan glow-cyan-hover transition-all duration-300 hover:scale-105"
          >
            Check Availability
          </a>
        </motion.div>
      </div>
    </section>
  );
}
