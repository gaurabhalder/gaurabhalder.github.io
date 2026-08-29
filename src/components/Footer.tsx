import { siteConfig } from '../data/site'
import { FacebookIcon, GithubIcon, LinkedinIcon } from './SocialIcons'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-neon/15 px-4 py-10 md:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-xs tracking-[0.16em] text-muted">
            © {new Date().getFullYear()} {siteConfig.shortName}
          </p>
          <p className="mt-2 font-mono text-xs text-neon">SYSTEM STATUS: ONLINE</p>
          <p className="mt-3 font-mono text-xs text-muted">
            {'> BUILT WITH CODE & CREATIVITY'}
            <span className="cursor-blink text-neon">_</span>
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/15 p-2 text-muted transition hover:border-neon hover:text-neon"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/15 p-2 text-muted transition hover:border-cyan hover:text-cyan"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={siteConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/15 p-2 text-muted transition hover:border-accent hover:text-accent"
            aria-label="Facebook"
          >
            <FacebookIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
