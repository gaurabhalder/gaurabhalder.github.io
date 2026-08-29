import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

type Props = {
  onDone: () => void
}

export function LoadingScreen({ onDone }: Props) {
  const reduce = useReducedMotion()
  const [progress, setProgress] = useState(0)
  const [granted, setGranted] = useState(false)

  useEffect(() => {
    if (reduce) {
      onDone()
      return
    }

    let frame = 0
    const start = performance.now()
    const duration = 1400

    const tick = (now: number) => {
      const p = Math.min(100, Math.round(((now - start) / duration) * 100))
      setProgress(p)
      if (p < 100) {
        frame = requestAnimationFrame(tick)
      } else {
        setGranted(true)
        window.setTimeout(onDone, 450)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [onDone, reduce])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[90] flex items-center justify-center bg-bg"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-[min(90vw,28rem)] px-6 font-mono text-sm text-neon">
          <p className="mb-4 tracking-[0.2em]">{'> INITIALIZING SYSTEM...'}</p>
          <div className="mb-3 h-2 overflow-hidden border border-neon/40 bg-bg-3">
            <div
              className="h-full bg-neon transition-[width] duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mb-6 text-muted">
            [{'#'.repeat(Math.floor(progress / 5)).padEnd(20, '·')}] {progress}%
          </p>
          {granted && (
            <p className="font-display text-lg tracking-widest text-white">ACCESS GRANTED_</p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
