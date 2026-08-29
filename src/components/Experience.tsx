import { experience } from '../data/experience'
import { FadeIn } from './FadeIn'
import { SectionTitle } from './SectionTitle'

export function Experience() {
  return (
    <section id="experience" className="relative z-10 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionTitle index="04. EXPERIENCE_LOG" title="TIMELINE" />
        </FadeIn>
        <ol className="relative mx-auto max-w-3xl space-y-0 border-l border-neon/25 pl-6 md:pl-8">
          {experience.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.06}>
              <li className="relative pb-10 last:pb-0">
                <span className="absolute -left-[1.91rem] top-1 h-3.5 w-3.5 rounded-full border-2 border-neon bg-bg neon-glow md:-left-[2.16rem]" />
                <p className="mb-2 font-mono text-xs tracking-[0.18em] text-neon">{item.period}</p>
                <h3 className="mb-2 font-display text-lg font-bold tracking-wide text-white md:text-xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted md:text-base">{item.description}</p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  )
}
