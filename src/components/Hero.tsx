import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { siteConfig } from '../data/site'
import { GlitchText } from './GlitchText'

export function Hero() {
  const reduce = useReducedMotion()
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    if (reduce) return
    const id = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % siteConfig.rotatingWords.length)
    }, 2600)
    return () => window.clearInterval(id)
  }, [reduce])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center px-4 pb-16 pt-28 md:px-6"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-10">
        <div>
          <p className="mb-5 font-mono text-xs tracking-[0.22em] text-neon md:text-sm">
            {'> SYSTEM INITIALIZED_'}
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
            I BUILD
            <br />
            DIGITAL
            <br />
            <span className="text-neon">
              <GlitchText text={siteConfig.rotatingWords[wordIndex]} />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {siteConfig.heroDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="neon-glow border border-neon bg-neon px-5 py-3 font-display text-xs font-bold tracking-[0.18em] text-bg transition hover:bg-transparent hover:text-neon"
            >
              VIEW MY WORK
            </button>
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="border border-white/20 bg-transparent px-5 py-3 font-display text-xs font-bold tracking-[0.18em] text-white transition hover:border-cyan hover:text-cyan"
            >
              CONTACT ME
            </button>
          </div>
          <div className="mt-8 space-y-1 font-mono text-xs text-muted md:text-sm">
            <p>{'> STATUS: ONLINE'}</p>
            <p>{`> LOCATION: ${siteConfig.location.toUpperCase()}`}</p>
            <p>
              {'> BUILDING THE FUTURE'}
              <span className="cursor-blink text-neon">_</span>
            </p>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg">
          <div className="absolute inset-0 rounded-full border border-neon/20" />
          <motion.div
            className="absolute inset-4 rounded-full border border-cyan/25"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-10 rounded-full border border-dashed border-purple/30"
            animate={reduce ? undefined : { rotate: -360 }}
            transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute inset-[22%] flex flex-col items-center justify-center rounded-full border border-neon/40 bg-bg-3/80 text-center neon-glow">
            <p className="font-display text-xl font-bold tracking-[0.2em] text-white sm:text-2xl">
              GAURAB
            </p>
            <p className="font-display text-xl font-bold tracking-[0.2em] text-neon sm:text-2xl">
              HALDER
            </p>
          </div>
          {siteConfig.orbitLabels.map((label, i) => {
            const angle = (i / siteConfig.orbitLabels.length) * Math.PI * 2 - Math.PI / 2
            const x = 50 + Math.cos(angle) * 42
            const y = 50 + Math.sin(angle) * 42
            return (
              <span
                key={label}
                className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-sm border border-neon/20 bg-bg/80 px-2 py-1 font-mono text-[9px] tracking-wider text-muted sm:text-[10px]"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {label}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
