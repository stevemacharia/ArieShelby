import Link from 'next/link'
import { SITE } from '@/constants'

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-primary-muted py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="section-label">Reach us</p>
        <h2 className="section-heading mt-4">
          Do not hesitate to ask us any questions
        </h2>
        <p className="section-subheading mx-auto">
          Ready for your next system, media project, or brand refresh?
          We&apos;ll respond within one business day.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={`mailto:${SITE.email}`} className="btn-primary">
            {SITE.email}
          </a>
          <a href={SITE.phoneHref} className="btn-outline">
            {SITE.phone}
          </a>
        </div>
        <Link
          href="/WebDevelopment"
          className="mt-8 inline-block text-sm font-semibold text-primary hover:underline"
        >
          Or browse our systems portfolio →
        </Link>
      </div>
    </section>
  )
}
