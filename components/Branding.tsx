'use client'

import React from 'react'
import { Carousel } from '@material-tailwind/react'

const Branding = () => {
  return (
    <div className="bg-tech-bg py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="section-label">Case study</p>
          <h2 className="section-heading mt-4">Brand identity in action</h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-primary">Caritas MFB</h3>
            <p className="mt-4 leading-relaxed text-gray-600">
              A comprehensive branding project for two branch locations — the
              Cardinal Otunga Branch and the Githurai branch. We delivered
              full environmental branding that communicates the Caritas brand
              identity through cohesive visual systems and on-site execution.
            </p>
          </div>
          <div>
            <Carousel transition={{ duration: 2 }} className="rounded-2xl shadow-md">
              {[
                '/arieshelby-caritas-mfb-004.jpg',
                '/arieshelby-caritas-mfb-006.jpg',
                '/arieshelby-caritas-mfb-010.jpg',
                '/arieshelby-caritas-mfb-009.jpg',
                '/arieshelby-caritas-mfb-002.jpg',
                '/arieshelby-caritas-mfb-007.jpg',
              ].map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Caritas MFB branding ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Branding
