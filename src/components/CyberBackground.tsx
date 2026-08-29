import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 17) % 100}%`,
  top: `${(i * 29) % 100}%`,
  delay: `${(i % 6) * 0.4}s`,
  size: 2 + (i % 3),
}))

export function CyberBackground() {
  const reduce = usePrefersReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 scanlines" />
      <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-neon/10 blur-[100px]" />
      <div className="absolute -right-16 top-10 h-80 w-80 rounded-full bg-cyan/10 blur-[110px]" />
      <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-purple/10 blur-[100px]" />
      {!reduce && (
        <>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
          <div className="absolute inset-x-0 h-24 w-full bg-gradient-to-b from-neon/5 to-transparent animate-scan" />
          {particles.map((p) => (
            <span
              key={p.id}
              className="absolute rounded-full bg-neon/70 animate-float"
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                animationDelay: p.delay,
              }}
            />
          ))}
        </>
      )}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_75%)]" />
    </div>
  )
}
