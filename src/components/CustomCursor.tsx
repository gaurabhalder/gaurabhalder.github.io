import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function CustomCursor() {
  const reduce = usePrefersReducedMotion()
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    setEnabled(fine && !reduce)
  }, [reduce])

  useEffect(() => {
    if (!enabled) return
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      className="pointer-events-none fixed z-[100] hidden mix-blend-screen md:block"
      style={{
        left: pos.x,
        top: pos.y,
        transform: 'translate(-50%, -50%)',
      }}
      aria-hidden
    >
      <div className="h-8 w-8 rounded-full border border-neon/50 bg-neon/10 shadow-[0_0_20px_rgba(0,255,102,0.35)]" />
    </div>
  )
}
