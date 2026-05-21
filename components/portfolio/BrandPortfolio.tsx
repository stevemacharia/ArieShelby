import Link from 'next/link'
import { BRAND_PROJECTS, CLIENTS } from '@/constants'

export default function BrandPortfolio() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source
              src="/caritas_branding_IMG_3070.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#001809]/90 via-[#001809]/75 to-[#001809]/55 bg-blend-multiply" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-6 pb-12 pt-28 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-as-yellow">
            Brand Design
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
            Simple and clean
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/90">
            We offer branding, UI/UX, print design, and business space branding creating clean, impactful designs that make your brand stand out across every touchpoint.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 pb-8 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BRAND_PROJECTS.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group block overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-primary">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500">{project.subtitle}</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/OtherServices" className="btn-outline">
            View all projects
          </Link>
        </div>
      </div>

      <section className="border-t border-gray-100 bg-primary-muted py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Our amazing clients we love to work with
          </h2>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-12">
            {CLIENTS.slice(0, 5).map((c) => (
              <img
                key={c.name}
                src={c.logo}
                alt={c.name}
                className="max-h-10 w-auto opacity-80"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
