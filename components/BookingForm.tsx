"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const EVENT_TYPES = [
  "Private Event",
  "Wedding",
  "Corporate Event",
  "Nightlife / Club",
  "Market / Pop-Up",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  eventDate: "",
  eventType: "",
  venue: "",
  details: "",
};

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState(INITIAL);

  const handle = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 rounded-sm px-4 py-3.5 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/15 transition-all duration-200 hover:border-zinc-700";
  const label =
    "block text-[10px] font-bold text-zinc-500 tracking-[0.2em] uppercase mb-2";

  return (
    <section id="booking" className="py-24 md:py-36 bg-zinc-900/20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="text-accent text-[10px] font-bold tracking-[0.35em] uppercase mb-4">
            Let&apos;s Work
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-wide leading-[0.92] mb-5">
            BOOK YOUR
            <br />
            <span className="text-gradient">EVENT NOW</span>
          </h2>
          <p className="text-zinc-500 text-sm max-w-md mx-auto leading-relaxed">
            Fill out the form and I&apos;ll get back to you within 24 hours to
            lock in your date.
          </p>
        </motion.div>

        {/* Success state */}
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <CheckCircle size={28} className="text-accent" />
            </div>
            <h3 className="font-display text-4xl text-white tracking-wide mb-4">
              REQUEST SENT!
            </h3>
            <p className="text-zinc-400 text-sm max-w-xs mx-auto leading-relaxed">
              Thanks for reaching out. I&apos;ll be in touch within 24 hours.
            </p>
          </motion.div>
        ) : (
          /* Form */
          <motion.form
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={submit}
            className="space-y-5"
          >
            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className={label}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handle}
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="email" className={label}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handle}
                  className={field}
                />
              </div>
            </div>

            {/* Phone + Event Date */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className={label}>
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(713) 000-0000"
                  value={form.phone}
                  onChange={handle}
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="eventDate" className={label}>
                  Event Date *
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  required
                  value={form.eventDate}
                  onChange={handle}
                  className={`${field} [color-scheme:dark]`}
                />
              </div>
            </div>

            {/* Event Type + Venue */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="eventType" className={label}>
                  Event Type *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  value={form.eventType}
                  onChange={handle}
                  className={`${field} ${!form.eventType ? "text-zinc-600" : ""}`}
                >
                  <option value="" disabled>
                    Select event type
                  </option>
                  {EVENT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="venue" className={label}>
                  Venue / Location *
                </label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  required
                  placeholder="Venue name or address"
                  value={form.venue}
                  onChange={handle}
                  className={field}
                />
              </div>
            </div>

            {/* Details */}
            <div>
              <label htmlFor="details" className={label}>
                Event Details
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                placeholder="Tell me more — attendance size, vibe you're going for, music preferences, special moments..."
                value={form.details}
                onChange={handle}
                className={`${field} resize-none`}
              />
            </div>

            {/* Error banner */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 p-4 bg-red-950/30 border border-red-800/40 rounded-sm text-red-400 text-sm"
              >
                <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                <span>
                  Something went wrong. Email me directly at{" "}
                  <a
                    href="mailto:bookdjlifts@gmail.com"
                    className="underline underline-offset-2"
                  >
                    bookdjlifts@gmail.com
                  </a>
                </span>
              </motion.div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2.5 px-8 py-4 bg-accent text-zinc-950 font-bold text-xs tracking-[0.2em] uppercase rounded-sm glow-cyan glow-cyan-hover transition-all duration-300 hover:scale-[1.015] disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed mt-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={15} />
                  Send Booking Request
                </>
              )}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
