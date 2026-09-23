"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[var(--accent-secondary)] mb-3"
      >
        {`// about`}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold mb-8"
      >
        A bit about me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid md:grid-cols-3 gap-8"
      >
        <div className="md:col-span-2 space-y-4 text-[var(--muted)] leading-relaxed">
          <p>
            I work on data science and full-stack engineering, currently building{" "}
            <span className="text-[var(--accent)]">DispatchAI</span> — an
            AI-native real-time logistics platform covering geospatial queries,
            event-driven systems, and ML-based ETA prediction.
          </p>
          <p>
            My background spans Python and data-driven projects — from social
            media analytics to recommendation systems — and I'm currently
            deepening my full-stack and systems-design skills to get
            interview-ready.
          </p>
        </div>

        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 space-y-3">
          <h3 className="text-[var(--accent)] font-semibold mb-2">Quick facts</h3>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li>🎯 Currently: DispatchAI + DSA prep</li>
            <li>🐍 Python-first, learning full-stack</li>
            <li>🍳 Cooking, 🏸 badminton, 📚 reading</li>
            <li>📍 Open to opportunities</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}