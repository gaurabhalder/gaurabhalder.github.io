import { Mail } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { siteConfig } from '../data/site'
import { FadeIn } from './FadeIn'
import { GlitchText } from './GlitchText'
import { SectionTitle } from './SectionTitle'
import { FacebookIcon, GithubIcon, LinkedinIcon } from './SocialIcons'

const projectTypes = [
  'Web Development',
  'E-commerce',
  'Digital Marketing',
  'Tracking & Analytics',
  'Automation',
  'Other',
]

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const channels = [
    { label: 'EMAIL', value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
    {
      label: 'GITHUB',
      value: 'github.com/gaurabhalder',
      href: siteConfig.github,
      icon: GithubIcon,
    },
    {
      label: 'LINKEDIN',
      value: 'linkedin.com/in/gaurabhalder',
      href: siteConfig.linkedin,
      icon: LinkedinIcon,
    },
    {
      label: 'FACEBOOK',
      value: 'facebook.com/gaurabhalder',
      href: siteConfig.facebook,
      icon: FacebookIcon,
    },
  ]

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const projectType = String(data.get('projectType') || '')
    const message = String(data.get('message') || '')

    setStatus('sending')

    if (siteConfig.formspreeEndpoint) {
      try {
        const res = await fetch(siteConfig.formspreeEndpoint, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
        })
        if (!res.ok) throw new Error('Form error')
        setStatus('sent')
        form.reset()
      } catch {
        setStatus('error')
      }
      return
    }

    const subject = encodeURIComponent(`Portfolio inquiry — ${projectType}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`,
    )
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <section id="contact" className="relative z-10 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionTitle index="05. INITIATE_CONTACT" title="START A MISSION" />
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <h3 className="mb-4 font-display text-3xl font-bold leading-tight tracking-wide md:text-5xl">
              LET'S BUILD
              <br />
              SOMETHING
              <br />
              <GlitchText className="text-neon" text="EXTRAORDINARY_" />
            </h3>
            <p className="mb-8 max-w-md text-muted">
              Have an idea, project or business challenge? Let's talk.
            </p>
            <ul className="space-y-4">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-start gap-3 border border-white/10 bg-bg-2/60 p-4 transition hover:border-neon/40"
                  >
                    <c.icon className="mt-0.5 text-neon" size={18} aria-hidden />
                    <span>
                      <span className="block font-mono text-[10px] tracking-[0.2em] text-muted">
                        {c.label}
                      </span>
                      <span className="font-mono text-sm text-white group-hover:text-neon">
                        {c.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="border border-neon/20 bg-bg-2/70 p-5 md:p-7"
              noValidate={false}
            >
              <p className="mb-5 font-mono text-xs tracking-[0.18em] text-neon">
                {'> CONTACT_FORM'}
              </p>
              <label className="mb-4 block">
                <span className="mb-2 block font-mono text-[10px] tracking-[0.2em] text-muted">
                  NAME
                </span>
                <input
                  required
                  name="name"
                  className="w-full border border-white/15 bg-bg px-3 py-3 font-mono text-sm text-white outline-none transition focus:border-neon"
                  placeholder="Your name"
                />
              </label>
              <label className="mb-4 block">
                <span className="mb-2 block font-mono text-[10px] tracking-[0.2em] text-muted">
                  EMAIL
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full border border-white/15 bg-bg px-3 py-3 font-mono text-sm text-white outline-none transition focus:border-neon"
                  placeholder="you@example.com"
                />
              </label>
              <label className="mb-4 block">
                <span className="mb-2 block font-mono text-[10px] tracking-[0.2em] text-muted">
                  PROJECT TYPE
                </span>
                <select
                  required
                  name="projectType"
                  className="w-full border border-white/15 bg-bg px-3 py-3 font-mono text-sm text-white outline-none transition focus:border-neon"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select type
                  </option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>
              <label className="mb-5 block">
                <span className="mb-2 block font-mono text-[10px] tracking-[0.2em] text-muted">
                  MESSAGE
                </span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full resize-y border border-white/15 bg-bg px-3 py-3 font-mono text-sm text-white outline-none transition focus:border-neon"
                  placeholder="Tell me about your project..."
                />
              </label>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="neon-glow w-full border border-neon bg-neon px-5 py-3 font-display text-xs font-bold tracking-[0.18em] text-bg transition hover:bg-transparent hover:text-neon disabled:opacity-60"
              >
                {status === 'sending' ? 'SENDING...' : 'TRANSMIT MESSAGE'}
              </button>
              {status === 'sent' && (
                <p className="mt-3 font-mono text-xs text-neon">
                  Message prepared. Check your mail client or Formspree inbox.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-3 font-mono text-xs text-accent">
                  Transmission failed. Update formspreeEndpoint or try again.
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
