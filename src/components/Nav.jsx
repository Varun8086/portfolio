"use client";
import { useState } from "react";

const links = ["About", "Projects", "Experience", "GitHub", "Coding Stats", "Hobbies", "Contact"];

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[var(--background)]/70 border-b border-[var(--border)]">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-[var(--accent)] font-bold tracking-tight">
          &lt;Varun /&gt;
        </span>
        <div className="hidden md:flex gap-6 text-sm text-[var(--muted)]">
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
      </div>
    </nav>
  );
}