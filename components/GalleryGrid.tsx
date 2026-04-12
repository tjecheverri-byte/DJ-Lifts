"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

export default function GalleryGrid({ photos }: { photos: string[] }) {
  return (
    <section id="gallery" className="py-24 md:py-36">
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
            The Proof
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-wide leading-[0.92]">
            THE MOMENTS
            <br />
            <span className="text-gradient">THAT HIT.</span>
          </h2>
        </motion.div>

        {photos.length > 0 ? (
          /* ── Real photo grid ── */
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-2 md:gap-3"
          >
            {photos.map((src, i) => {
              // First and every 7th image is large (spans 2 cols & 2 rows)
              const isLarge = i === 0 || i === 7;
              return (
                <motion.div
                  key={src}
                  variants={{
                    hidden: { opacity: 0, scale: 0.96 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className={`group relative overflow-hidden rounded-sm bg-zinc-900 ${
                    isLarge ? "col-span-2 row-span-2" : ""
                  }`}
                >
                  <Image
                    src={src}
                    alt={`DJ Lifts — event photo ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 border border-transparent group-hover:border-accent/20 rounded-sm transition-colors duration-300" />
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          /* ── Placeholder state ── */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-2 md:gap-3">
            {Array.from({ length: 9 }).map((_, i) => {
              const isLarge = i === 0;
              return (
                <div
                  key={i}
                  className={`relative flex flex-col items-center justify-center bg-zinc-900 border border-zinc-800 border-dashed rounded-sm ${
                    isLarge ? "col-span-2 row-span-2" : ""
                  }`}
                >
                  <ImageIcon
                    size={isLarge ? 32 : 20}
                    className="text-zinc-700 mb-3"
                  />
                  {isLarge && (
                    <p className="text-zinc-600 text-xs text-center px-6 leading-relaxed">
                      Drop your photos into
                      <br />
                      <code className="text-zinc-500 text-[11px]">
                        /public/photos/
                      </code>
                      <br />
                      and they&apos;ll appear here
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
