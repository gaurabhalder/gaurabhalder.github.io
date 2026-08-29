import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { testimonials } from '../data/experience'
import { FadeIn } from './FadeIn'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const item = testimonials[index]

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)

  return (
    <section className="relative z-10 px-4 py-20 md:px-6 md:py-28" aria-label="Testimonials">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <div className="glass relative overflow-hidden p-6 md:p-10">
            <p className="mb-6 font-mono text-xs tracking-[0.22em] text-neon">{item.label}</p>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <p className="mb-2 font-display text-5xl leading-none text-neon/30">“</p>
                <p className="text-lg leading-relaxed text-white/90 md:text-2xl">{item.quote}</p>
                <footer className="mt-8">
                  <p className="font-display text-sm font-semibold tracking-wide text-white">
                    {item.name}
                  </p>
                  <p className="font-mono text-xs text-muted">{item.role}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                className="border border-white/15 p-2 text-muted hover:border-neon hover:text-neon"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={next}
                className="border border-white/15 p-2 text-muted hover:border-neon hover:text-neon"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
              <div className="ml-2 flex gap-2" aria-hidden>
                {testimonials.map((t, i) => (
                  <span
                    key={t.id}
                    className={`h-1.5 w-1.5 rounded-full ${i === index ? 'bg-neon' : 'bg-white/20'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
