"use client";
import { useState, useEffect } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";

const commands = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "GitHub", href: "#github" },
  { label: "Coding Stats", href: "#coding-stats" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Contact", href: "#contact" },
  { label: "View resume", href: "/resume.pdf", external: true },
  { label: "Visit GitHub profile", href: "https://github.com/Varun8086", external: true },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelect = (href, external) => {
    setOpen(false);
    if (external) {
      window.open(href, "_blank");
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-start justify-center pt-32 px-4"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden shadow-2xl"
          >
            <Command
              className="w-full"
              filter={(value, search) =>
                value.toLowerCase().includes(search.toLowerCase()) ? 1 : 0
              }
            >
              <Command.Input
                placeholder="Jump to a section or link..."
                className="w-full bg-transparent px-4 py-4 outline-none text-[var(--foreground)] border-b border-[var(--border)] placeholder:text-[var(--muted)]"
              />
              <Command.List className="max-h-80 overflow-y-auto p-2">
                <Command.Empty className="px-4 py-6 text-sm text-[var(--muted)] text-center">
                  No results found.
                </Command.Empty>
                {commands.map((cmd) => (
                  <Command.Item
                    key={cmd.label}
                    value={cmd.label}
                    onSelect={() => handleSelect(cmd.href, cmd.external)}
                    className="px-4 py-3 rounded-lg text-sm text-[var(--foreground)] cursor-pointer aria-selected:bg-[var(--accent)] aria-selected:text-black transition-colors"
                  >
                    {cmd.label}
                  </Command.Item>
                ))}
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}