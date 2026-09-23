"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

function CardGrid({ items, type, onOpen }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <motion.div
          key={item._id}
          layoutId={`${type}-card-${item._id}`}
          onClick={() => onOpen(i)}
          whileHover={{ y: -4 }}
          className="cursor-pointer bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden hover:border-[var(--accent)] transition-colors duration-200"
        >
          {(item.image || item.cover) && (
            <Image
              src={urlFor(item.image || item.cover).width(400).height(220).url()}
              alt={item.title}
              width={400}
              height={220}
              className="w-full h-36 object-cover"
            />
          )}
          <div className="p-4">
            <motion.h4 layoutId={`${type}-title-${item._id}`} className="font-semibold mb-1">
              {item.title}
            </motion.h4>
            <p className="text-sm text-[var(--muted)] line-clamp-2">
              {item.description || item.takeaway}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function Dialog({ items, type, activeIndex, onClose, onNext, onPrev }) {
  if (activeIndex === null) return null;
  const item = items[activeIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          layoutId={`${type}-card-${item._id}`}
          onClick={(e) => e.stopPropagation()}
          className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto relative"
        >
          <button onClick={onClose} className="absolute top-4 right-4 z-10 text-[var(--muted)] hover:text-[var(--foreground)] bg-[var(--surface)] rounded-full p-1">
            <X size={20} />
          </button>

          {(item.image || item.cover) && (
            <div className="relative w-full h-62 overflow-hidden">
              {/* blurred background fill */}
              <Image
                src={urlFor(item.image || item.cover).width(100).url()}
                alt=""
                fill
                className="object-cover blur-2xl scale-110 opacity-60"
                aria-hidden="true"
              />
              {/* actual image, centered, fully visible */}
              <Image
                src={urlFor(item.image || item.cover).width(800).fit("max").url()}
                alt={item.title}
                fill
                className="object-contain relative z-10"
              />
            </div>
          )}

          <div className="p-8">
            <motion.h3 layoutId={`${type}-title-${item._id}`} className="text-2xl font-bold mb-2">
              {item.title}
            </motion.h3>

            {type === "recipe" ? (
              <>
                <p className="text-[var(--muted)] mb-6">{item.description}</p>
                {item.ingredients?.length > 0 && (
                  <>
                    <h4 className="text-[var(--accent)] font-semibold mb-2">Ingredients</h4>
                    <ul className="list-disc list-inside text-sm text-[var(--muted)] mb-6 space-y-1">
                      {item.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                    </ul>
                  </>
                )}
                {item.steps?.length > 0 && (
                  <>
                    <h4 className="text-[var(--accent)] font-semibold mb-2">Steps</h4>
                    <ol className="list-decimal list-inside text-sm text-[var(--muted)] space-y-2">
                      {item.steps.map((step, i) => <li key={i}>{step}</li>)}
                    </ol>
                  </>
                )}
              </>
            ) : (
              <>
                <p className="text-[var(--accent)] mb-4">by {item.author}</p>
                {item.rating && (
                  <p className="text-sm text-[var(--muted)] mb-4">Rating: {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}</p>
                )}
                <h4 className="text-[var(--accent-secondary)] font-semibold mb-2">What I learned</h4>
                <p className="text-[var(--muted)] leading-relaxed">{item.takeaway}</p>
              </>
            )}
          </div>

          <div className="flex justify-between items-center px-8 py-4 border-t border-[var(--border)]">
            <button onClick={onPrev} className="flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--accent)]">
              <ChevronLeft size={16} /> Prev
            </button>
            <span className="text-xs text-[var(--muted)]">{activeIndex + 1} / {items.length}</span>
            <button onClick={onNext} className="flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--accent)]">
              Next <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Hobbies({ recipes, books }) {
  const [activeRecipe, setActiveRecipe] = useState(null);
  const [activeBook, setActiveBook] = useState(null);

  return (
    <section id="hobbies" className="max-w-5xl mx-auto px-6 py-24">
      <p className="text-[var(--accent-secondary)] mb-3">{`// hobbies`}</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Outside of code</h2>

      <h3 className="text-xl font-semibold mb-4 text-[var(--accent)]">🍳 Recipes</h3>
      <div className="mb-14">
        <CardGrid items={recipes} type="recipe" onOpen={setActiveRecipe} />
      </div>

      <h3 className="text-xl font-semibold mb-4 text-[var(--accent)]">📚 Books</h3>
      <CardGrid items={books} type="book" onOpen={setActiveBook} />

      <Dialog
        items={recipes}
        type="recipe"
        activeIndex={activeRecipe}
        onClose={() => setActiveRecipe(null)}
        onNext={() => setActiveRecipe((i) => (i + 1) % recipes.length)}
        onPrev={() => setActiveRecipe((i) => (i - 1 + recipes.length) % recipes.length)}
      />
      <Dialog
        items={books}
        type="book"
        activeIndex={activeBook}
        onClose={() => setActiveBook(null)}
        onNext={() => setActiveBook((i) => (i + 1) % books.length)}
        onPrev={() => setActiveBook((i) => (i - 1 + books.length) % books.length)}
      />
    </section>
  );
}