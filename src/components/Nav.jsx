"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = ["About", "Projects", "Experience", "GitHub", "Coding Stats", "Hobbies", "Contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[var(--background)]/70 border-b border-[var(--border)]">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="/" className="text-[var(--accent)] font-bold tracking-tight cursor-pointer">
          &lt;Varun /&gt;
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-6 text-sm text-[var(--muted)]">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="hover:text-[var(--accent)] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden text-[var(--foreground)]"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
          <span className="hidden sm:inline text-xs text-[var(--muted)] border border-[var(--border)] rounded px-2 py-1">
            ⌘K
          </span>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="sm:hidden flex flex-col items-center gap-4 py-6 border-t border-[var(--border)] bg-[var(--background)]">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              onClick={() => setOpen(false)}
              className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}