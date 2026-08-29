import {
  BarChart3,
  Code2,
  Megaphone,
  ShoppingCart,
  Sparkles,
  Workflow,
} from 'lucide-react'
import type { ExpertiseItem } from '../data/skills'
import { expertise } from '../data/skills'
import { FadeIn } from './FadeIn'
import { SectionTitle } from './SectionTitle'

const icons = {
  code: Code2,
  cart: ShoppingCart,
  megaphone: Megaphone,
  chart: BarChart3,
  workflow: Workflow,
  spark: Sparkles,
} as const

function ExpertiseCard({ item }: { item: ExpertiseItem }) {
  const Icon = icons[item.icon]
  return (
    <article className="group relative overflow-hidden border border-white/10 bg-bg-2/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-neon/50 hover:shadow-[0_0_24px_rgba(0,255,102,0.12)] md:p-6">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-neon/10 via-transparent to-cyan/5" />
        <div className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-neon/15 to-transparent animate-scan" />
      </div>
      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-xs text-neon">{item.number}</span>
          <Icon className="text-cyan" size={20} aria-hidden />
        </div>
        <h3 className="mb-3 font-display text-sm font-bold tracking-[0.14em] text-white md:text-base">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{item.description}</p>
      </div>
    </article>
  )
}

export function Expertise() {
  return (
    <section id="expertise" className="relative z-10 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionTitle index="02. EXPERTISE_MATRIX" title="CAPABILITY GRID" />
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {expertise.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.05}>
              <ExpertiseCard item={item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
