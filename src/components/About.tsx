import { siteConfig } from '../data/site'
import { FadeIn } from './FadeIn'
import { SectionTitle } from './SectionTitle'

export function About() {
  return (
    <section id="about" className="relative z-10 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionTitle index="01. ABOUT_ME" title="DIGITAL ARCHITECT" />
        </FadeIn>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden border border-neon/25 bg-bg-3">
              <div className="absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-neon" />
              <div className="absolute right-3 top-3 h-6 w-6 border-r-2 border-t-2 border-neon" />
              <div className="absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-cyan" />
              <div className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-cyan" />
              <img
                src="https://avatars.githubusercontent.com/u/37219988?v=4"
                alt={siteConfig.name}
                className="h-full w-full object-cover opacity-90"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 font-mono text-xs tracking-[0.2em] text-neon">
                PROFILE_IMG // ONLINE
              </p>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0.1}>
              <div className="mb-6 border border-neon/20 bg-bg-2/80 p-5 font-mono text-sm leading-relaxed text-muted md:p-6">
                <p className="mb-3 text-neon">{'> cat about.txt'}</p>
                <p className="text-white/90">{siteConfig.bio}</p>
                <p className="mt-4">
                  Focus areas include{' '}
                  {siteConfig.aboutHighlights.map((item, i) => (
                    <span key={item}>
                      <span className="text-neon">{item}</span>
                      {i < siteConfig.aboutHighlights.length - 1 ? ', ' : '.'}
                    </span>
                  ))}
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 gap-3">
              {siteConfig.aboutCards.map((card, i) => (
                <FadeIn key={card.label} delay={0.08 * (i + 1)}>
                  <div className="border border-white/10 bg-bg-3/80 p-4 transition hover:border-neon/40">
                    <p className="mb-1 font-mono text-[10px] tracking-[0.2em] text-muted">
                      {card.label}
                    </p>
                    <p className="font-display text-sm font-semibold tracking-wide text-white md:text-base">
                      {card.value}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
