'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'

const HeroScene = dynamic(() => import('@/components/HeroScene'), { ssr: false })

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-tech-bg">
      <HeroScene />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-tech-bg" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-24 pt-32 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-label mb-6">
            Digital Studio · Nairobi, Kenya
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">
            Building modern{' '}
            <span className="text-primary">digital systems</span> and creative
            brands for businesses
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Arieshelby engineers scalable software, crafts distinctive brand
            experiences, and delivers end-to-end technology solutions that help
            businesses grow in a digital-first world.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/WebDevelopment" className="btn-primary">
              Explore our work
            </Link>
            <Link href="/#contact" className="btn-outline">
              Start a project
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 border-t border-primary/15 pt-10 sm:grid-cols-4">
          {[
            { value: '15+', label: 'Projects delivered' },
            { value: '3', label: 'Core disciplines' },
            { value: '100%', label: 'Client-focused' },
            { value: '24/7', label: 'Support mindset' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-primary sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
