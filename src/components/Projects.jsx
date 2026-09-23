"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Code, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const openProject = (i) => setActiveIndex(i);
  const closeProject = () => setActiveIndex(null);
  const next = () => setActiveIndex((i) => (i + 1) % projects.length);
  const prev = () => setActiveIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
      <p className="text-[var(--accent-secondary)] mb-3">{`// projects`}</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">What I've built</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}`}
            onClick={() => openProject(i)}
            whileHover={{ y: -4 }}
            className="cursor-pointer bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--accent)] transition-colors duration-200"
          >
            <motion.h3 layoutId={`title-${project.id}`} className="text-lg font-semibold mb-2">
              {project.title}
            </motion.h3>
            <p className="text-sm text-[var(--muted)] mb-4">{project.preview}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 rounded-md bg-[var(--background)] text-[var(--accent-secondary)]">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProject}
          >
            <motion.div
              layoutId={`card-${projects[activeIndex].id}`}
              onClick={(e) => e.stopPropagation()}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 relative"
            >
              <button onClick={closeProject} className="absolute top-4 right-4 text-[var(--muted)] hover:text-[var(--foreground)]">
                <X size={20} />
              </button>

              <motion.h3 layoutId={`title-${projects[activeIndex].id}`} className="text-2xl font-bold mb-2">
                {projects[activeIndex].title}
              </motion.h3>
              <p className="text-[var(--accent)] mb-4">{projects[activeIndex].tagline}</p>
              <p className="text-[var(--muted)] leading-relaxed mb-6">{projects[activeIndex].details}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {projects[activeIndex].tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-md bg-[var(--background)] text-[var(--accent-secondary)]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mb-6">
                {projects[activeIndex].links.github && (
                  <a href={projects[activeIndex].links.github} className="flex items-center gap-2 text-sm hover:text-[var(--accent)]">
                    <Code size={16} /> Code
                  </a>
                )}
                {projects[activeIndex].links.live && (
                  <a href={projects[activeIndex].links.live} className="flex items-center gap-2 text-sm hover:text-[var(--accent)]">
                    <ExternalLink size={16} /> Live
                  </a>
                )}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-[var(--border)]">
                <button onClick={prev} className="flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--accent)]">
                  <ChevronLeft size={16} /> Prev
                </button>
                <span className="text-xs text-[var(--muted)]">{activeIndex + 1} / {projects.length}</span>
                <button onClick={next} className="flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--accent)]">
                  Next <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}