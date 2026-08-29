import { useEffect, useState } from 'react'

type Props = {
  text: string
  className?: string
  as?: 'span' | 'h1' | 'h2' | 'p'
}

export function GlitchText({ text, className = '', as: Tag = 'span' }: Props) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive(true)
      window.setTimeout(() => setActive(false), 180)
    }, 9000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <Tag
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <span className="relative z-10">{text}</span>
      {active && (
        <>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 text-cyan translate-x-[1px] -translate-y-[1px] opacity-70 mix-blend-screen"
          >
            {text}
          </span>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 text-accent -translate-x-[1px] translate-y-[1px] opacity-70 mix-blend-screen"
          >
            {text}
          </span>
        </>
      )}
    </Tag>
  )
}
