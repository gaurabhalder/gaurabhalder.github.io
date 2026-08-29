import { stats } from '../data/experience'
import { useCountUp, useInViewOnce } from '../hooks/useInView'
import { FadeIn } from './FadeIn'

function StatItem({
  value,
  suffix,
  label,
  active,
}: {
  value: number
  suffix: string
  label: string
  active: boolean
}) {
  const n = useCountUp(value, active)
  return (
    <div className="border border-white/10 bg-bg-2/60 p-5 text-center md:p-7">
      <p className="font-display text-3xl font-bold tracking-wide text-neon md:text-5xl">
        {n}
        {suffix}
      </p>
      <p className="mt-2 font-mono text-[10px] tracking-[0.2em] text-muted md:text-xs">{label}</p>
    </div>
  )
}

export function Stats() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>(0.3)

  return (
    <section className="relative z-10 px-4 py-16 md:px-6 md:py-20" aria-label="Stats">
      <div className="mx-auto max-w-7xl" ref={ref}>
        <FadeIn>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatItem
                key={stat.id}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                active={inView}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
