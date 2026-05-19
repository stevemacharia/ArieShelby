'use client'

import { useState } from 'react'
import {
  MEDIA_CATEGORIES,
  MEDIA_PORTFOLIO,
  type MediaCategory,
} from '@/constants'

export default function MediaPortfolio() {
  const [active, setActive] = useState<MediaCategory>('All')

  const filtered =
    active === 'All'
      ? MEDIA_PORTFOLIO
      : MEDIA_PORTFOLIO.filter((item) => item.category === active)

  return (
    <div className="min-h-screen bg-[#fafcfb] pt-24">
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <p className="section-label">Creative Media</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Alex Photon
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Photography, cinematography, and commercial visual content for brands
            that need imagery with intention — crafted in Nairobi and delivered
            worldwide.
          </p>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 lg:flex-row lg:px-8">
        <aside className="lg:w-48 lg:shrink-0">
          <nav className="sticky top-28 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
            {MEDIA_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-2 text-left text-sm font-semibold transition lg:rounded-lg ${
                  active === cat
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-primary-muted hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1">
          <div className="masonry">
            {filtered.map((item) => (
              <article key={item.title} className="masonry-item group">
                <div className="overflow-hidden rounded-lg bg-white shadow-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="border-t border-gray-100 p-4">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">
                      {item.category}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>

      <section className="border-t border-gray-100 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Some of our friends
          </h2>
          <p className="mt-4 text-gray-600">
            Contact us for full reels, rates, and production schedules.
          </p>
          <a href="/#contact" className="btn-primary mt-8">
            Start a project
          </a>
        </div>
      </section>
    </div>
  )
}
