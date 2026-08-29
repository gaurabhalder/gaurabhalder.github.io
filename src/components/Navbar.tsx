import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { siteConfig } from '../data/site'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (id: string) => {
    setOpen(false)
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <button
          type="button"
          onClick={() => go('home')}
          className="font-display text-sm font-bold tracking-[0.18em] text-white md:text-base"
        >
          [ {siteConfig.shortName} ]
        </button>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className="font-mono text-xs tracking-[0.18em] text-muted transition hover:text-neon"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-muted xl:flex">
          <span className="inline-block h-2 w-2 rounded-full bg-neon animate-pulse-dot" />
          {siteConfig.status}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-neon/30 text-neon lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass border-t border-neon/15 px-4 py-6 lg:hidden"
            aria-label="Mobile"
          >
            <div className="mb-4 flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-muted">
              <span className="inline-block h-2 w-2 rounded-full bg-neon animate-pulse-dot" />
              {siteConfig.status}
            </div>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => go(item.id)}
                    className="w-full border border-neon/15 bg-bg-3/80 px-4 py-3 text-left font-mono text-sm tracking-[0.2em] text-white hover:border-neon/50 hover:text-neon"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
