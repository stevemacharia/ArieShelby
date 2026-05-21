import Link from 'next/link'
import { SITE } from '@/constants'

export default function VisualMediaComingSoon() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <img
          src="/DSC09763.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001809]/90 via-[#001809]/75 to-[#001809]/55 bg-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 pb-16 pt-28 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-as-yellow">
          Creative Media
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Coming soon
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/90">
          Our photography, videography, and commercial visual portfolio is on
          the way. In the meantime, reach out for samples or to discuss your
          next project.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={`mailto:${SITE.email}`} className="btn-primary bg-white">
            {SITE.email}
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/80 bg-transparent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
