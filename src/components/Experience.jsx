"use client";
import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24">
      <p className="text-[var(--accent-secondary)] mb-3">{`// experience`}</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Where I've worked</h2>

      <div className="relative pl-8 border-l border-[var(--border)] space-y-12">
        {experience.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 w-3 h-3 rounded-full bg-[var(--accent)] glow-accent" />
            <p className="text-sm text-[var(--muted)] mb-1">{job.period}</p>
            <h3 className="text-lg font-semibold mb-1">{job.role}</h3>
            <p className="text-[var(--accent)] mb-3">{job.company}</p>
            <ul className="list-disc list-inside text-sm text-[var(--muted)] space-y-1">
              {job.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}