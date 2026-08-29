import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import { useEffect, useState } from 'react'
import type { Project } from '../data/projects'
import { projects } from '../data/projects'
import { FadeIn } from './FadeIn'
import { SectionTitle } from './SectionTitle'

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const rows = [
    { label: 'PROJECT OVERVIEW', value: project.overview },
    { label: 'CHALLENGE', value: project.challenge },
    { label: 'SOLUTION', value: project.solution },
    { label: 'TECHNOLOGY', value: project.technology },
    { label: 'RESULT', value: project.result },
  ]

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-black/80 p-4 sm:items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="glass max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-neon/30 p-5 md:p-8"
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 16, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 font-mono text-xs text-neon">
              {project.number} // {project.category.toUpperCase()}
            </p>
            <h3 id="project-modal-title" className="font-display text-2xl font-bold tracking-wide">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="border border-white/20 p-2 text-muted hover:border-neon hover:text-neon"
            aria-label="Close project details"
          >
            <X size={18} />
          </button>
        </div>
        <div className="space-y-5">
          {rows.map((row) => (
            <div key={row.label}>
              <p className="mb-1 font-mono text-[10px] tracking-[0.2em] text-cyan">{row.label}</p>
              <p className="text-sm leading-relaxed text-muted">{row.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: () => void
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-white/10 bg-bg-2/70 transition duration-300 hover:-translate-y-1 hover:border-neon/45 hover:shadow-[0_0_28px_rgba(0,255,102,0.12)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-bg-3">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#0d0d0d,rgba(0,255,102,0.12),#080808)]">
            <span className="font-display text-4xl font-bold text-neon/40">{project.number}</span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
        <span className="absolute left-3 top-3 font-mono text-xs text-neon">{project.number}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 font-mono text-[10px] tracking-[0.18em] text-muted">
          {project.category.toUpperCase()}
        </p>
        <h3 className="mb-2 font-display text-lg font-bold tracking-wide text-white">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-white/10 px-2 py-1 font-mono text-[10px] tracking-wider text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-2 border border-neon/40 bg-neon/10 px-3 py-2 font-mono text-[10px] tracking-[0.16em] text-neon transition group-hover:bg-neon group-hover:text-bg"
          >
            VIEW PROJECT <ArrowUpRight size={14} />
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 font-mono text-[10px] tracking-[0.16em] text-muted transition hover:border-cyan hover:text-cyan"
            >
              <GithubIcon size={14} /> GITHUB
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" className="relative z-10 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionTitle index="03. SELECTED_PROJECTS" title="MISSION ARCHIVE" />
        </FadeIn>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.04}>
              <ProjectCard project={project} onOpen={() => setActive(project)} />
            </FadeIn>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}
