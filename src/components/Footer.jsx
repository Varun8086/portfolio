"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-20">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center text-center gap-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[var(--muted)]"
        >
          You've reached till here 👋 — thanks for scrolling all the way down.
        </motion.p>

        <div className="flex gap-6">
          <a href="https://www.instagram.com/varunsai0104/" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          <a href="https://www.reddit.com/user/Commercial-Donut9126/" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors" aria-label="Reddit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 12.313a1.336 1.336 0 0 1-1.336 1.336 1.32 1.32 0 0 1-.83-.294c-1.033.699-2.42 1.147-3.964 1.204l.673-3.166 2.191.464a.949.949 0 1 0 .097-.487l-2.456-.52a.238.238 0 0 0-.284.183l-.75 3.525c-1.56-.05-2.96-.499-4-1.203a1.32 1.32 0 0 1-.83.294 1.336 1.336 0 1 1 1.146-2.017c1.014-.7 2.393-1.147 3.928-1.204l.673-3.166a.238.238 0 0 1 .284-.183l2.456.52a.95.95 0 1 1-.097.487l-2.191-.464-.55 2.586c1.535.057 2.914.504 3.928 1.204a1.336 1.336 0 0 1 1.912 1.201z" />
            </svg>
          </a>

          <a href="https://github.com/Varun8086" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>

        <p className="text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Varun Sai Vasantham
        </p>
      </div>
    </footer>
  );
}