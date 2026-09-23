"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start max-w-5xl mx-auto px-6">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[var(--accent-secondary)] mb-3"
      >
        {`// hey, I'm`}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold text-[var(--foreground)] mb-4"
      >
        Varun
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl md:text-2xl text-[var(--muted)] mb-8"
      >
        Building <span className="text-[var(--accent)] text-glow">AI-native systems</span> — currently shipping DispatchAI.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex gap-4"
      >
        <a href="#projects" className="px-6 py-3 rounded-lg bg-[var(--accent)] text-black font-medium glow-accent hover:brightness-110 transition">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-3 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] transition">
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
}