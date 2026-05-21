'use client'

import React, { useState } from 'react'

const images = [
  '/arieshelby-caritas-mfb-004.jpg',
  '/arieshelby-caritas-mfb-006.jpg',
  '/arieshelby-caritas-mfb-010.jpg',
  '/arieshelby-caritas-mfb-009.jpg',
  '/arieshelby-caritas-mfb-002.jpg',
  '/arieshelby-caritas-mfb-007.jpg',
]

const Branding = () => {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
      <div className="bg-tech-bg py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="section-label">Case study</p>
            <h2 className="section-heading mt-4">Brand identity in action</h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">

            {/* TEXT */}
            <div>
              <h3 className="text-2xl font-bold text-primary">Caritas MFB</h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                A comprehensive branding project for two branch locations — the
                Cardinal Otunga Branch and the Githurai branch. We delivered
                full environmental branding that communicates the Caritas brand
                identity through cohesive visual systems and on-site execution.
              </p>
            </div>

            {/* SLIDER */}
            <div className="relative rounded-2xl overflow-hidden shadow-md">

              <img
                  src={images[index]}
                  alt={`Caritas MFB branding ${index + 1}`}
                  className="w-full h-[400px] object-cover transition-all duration-500"
              />

              {/* Controls */}
              <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
              >
                ‹
              </button>

              <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
              >
                ›
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-2 w-2 rounded-full cursor-pointer ${
                            i === index ? 'bg-white' : 'bg-white/40'
                        }`}
                    />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
  )
}

export default Branding