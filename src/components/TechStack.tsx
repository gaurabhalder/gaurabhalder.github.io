import { techStack } from '../data/skills'

export function TechStack() {
  const loop = [...techStack, ...techStack]

  return (
    <section className="relative z-10 border-y border-neon/10 bg-bg-2/40 py-8" aria-label="Tech stack">
      <div className="overflow-hidden">
        <div className="animate-marquee flex w-max gap-3 pr-3">
          {loop.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="inline-flex items-center gap-2 border border-white/10 bg-bg-3 px-4 py-2 font-mono text-xs tracking-[0.16em] text-muted whitespace-nowrap"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-neon" aria-hidden />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
