"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", linkedin: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", linkedin: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="max-w-2xl mx-auto px-6 py-24">
      <p className="text-[var(--accent-secondary)] mb-3">{`// contact`}</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's connect</h2>
      <p className="text-[var(--muted)] mb-10">
        Recruiter or just want to chat? Drop a message below — it'll land straight in my inbox.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors"
          />
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            className="bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors"
          />
        </div>
        <input
          name="linkedin"
          value={form.linkedin}
          onChange={handleChange}
          placeholder="LinkedIn (optional)"
          className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors"
        />
        <textarea
          required
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your message"
          rows={5}
          className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-3 outline-none focus:border-[var(--accent)] transition-colors resize-none"
        />

        <motion.button
          type="submit"
          disabled={status === "sending"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] text-black font-medium glow-accent disabled:opacity-60 transition"
        >
          {status === "sending" ? "Sending..." : <>Send message <Send size={16} /></>}
        </motion.button>

        {status === "success" && (
          <p className="flex items-center gap-2 text-[var(--accent-secondary)] text-sm">
            <CheckCircle size={16} /> Message sent — I'll get back to you soon!
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 text-red-400 text-sm">
            <AlertCircle size={16} /> Something went wrong. Try again or email me directly.
          </p>
        )}
      </form>
    </section>
  );
}