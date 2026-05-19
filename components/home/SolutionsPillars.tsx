import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import { SOLUTION_PILLARS } from '@/constants'

export default function SolutionsPillars() {
  return (
    <section id="solutions" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="What we do"
          title="Three practices. One partner."
          subtitle="System solutions, creative media, and brand design — integrated under one roof for businesses that want coherence across every digital touchpoint."
          align="center"
        />

        <div className="mt-16 space-y-24">
          {SOLUTION_PILLARS.map((pillar, i) => (
            <div
              key={pillar.id}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? 'lg:[direction:rtl]' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                <p className="section-label">{pillar.label}</p>
                <h3 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                  {pillar.title}
                </h3>
                <p className="mt-4 leading-relaxed text-gray-600">
                  {pillar.description}
                </p>
                <Link href={pillar.href} className="btn-ghost mt-6">
                  {pillar.cta} →
                </Link>
              </div>
              <Link
                href={pillar.href}
                className={`block overflow-hidden rounded-3xl shadow-xl ${
                  i % 2 === 1 ? 'lg:[direction:ltr]' : ''
                }`}
              >
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
