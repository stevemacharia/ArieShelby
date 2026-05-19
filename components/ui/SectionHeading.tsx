type SectionHeadingProps = {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  dark?: boolean
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  dark = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''
  const centerSub = align === 'center' ? 'mx-auto' : ''

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {label && (
        <p
          className={
            dark
              ? 'text-xs font-semibold uppercase tracking-[0.2em] text-as-yellow'
              : 'section-label'
          }
        >
          {label}
        </p>
      )}
      <h2
        className={
          dark
            ? 'mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight'
            : 'section-heading mt-3'
        }
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={
            dark
              ? `mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg ${centerSub}`
              : `section-subheading ${centerSub}`
          }
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
