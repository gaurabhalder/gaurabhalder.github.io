type Props = {
  index: string
  title: string
  className?: string
}

export function SectionTitle({ index, title, className = '' }: Props) {
  return (
    <div className={`mb-10 md:mb-14 ${className}`}>
      <p className="mb-3 font-mono text-xs tracking-[0.25em] text-neon md:text-sm">
        {index}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-wide text-white md:text-5xl">
        {title}
      </h2>
    </div>
  )
}
