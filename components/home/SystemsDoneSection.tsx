import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import { SYSTEMS_DONE } from '@/constants'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export default function SystemsDoneSection() {
  const featured = SYSTEMS_DONE.find((s) => s.featured)!
  const others = SYSTEMS_DONE.filter((s) => !s.featured)

  return (
    <section id="systems-done" className="relative overflow-hidden py-20 sm:py-28">
      {/* Hero-style background — covers heading through systems list */}
      <div className="absolute inset-0" aria-hidden>
        <img
          src="/DSC09763.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001809]/90 via-[#001809]/75 to-[#001809]/55 bg-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Systems done"
          title="Products we've shipped"
          subtitle="Live platforms built for real businesses — including our flagship HR management solution."
          align="center"
          dark
        />

        <Link
          href={featured.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-14 grid overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-sm transition-all hover:bg-white/15 lg:grid-cols-2"
        >
          <div className="relative min-h-[280px] overflow-hidden lg:min-h-[360px]">
            <img
              src={featured.image}
              alt={featured.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase text-primary">
              Featured product
            </span>
          </div>

          <div className="flex flex-col justify-center bg-white p-8 sm:p-12">
            <p className="text-sm font-medium text-primary">{featured.category}</p>
            <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              {featured.name}
            </h3>
            <p className="mt-4 leading-relaxed text-gray-600">
              {featured.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {featured.stats.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-primary/20 bg-primary-muted px-3 py-1 text-xs font-medium text-primary"
                >
                  {s}
                </li>
              ))}
            </ul>
            <span className="btn-ghost mt-8 inline-flex items-center gap-2 !text-primary hover:!text-primary-dark">
              Visit live site
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </span>
          </div>
        </Link>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {others.map((system) => (
            <Link
              key={system.id}
              href={system.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-elevated group overflow-hidden !bg-white !text-gray-900"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={system.image}
                  alt={system.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase text-primary">
                  {system.category}
                </p>
                <h4 className="mt-2 font-bold text-gray-900">{system.name}</h4>
                <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                  {system.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  View project →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
