'use client'

import React from 'react'

const Media = () => {
  const data = [
    {
      imgelink:
        'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    },
    {
      imgelink:
        'https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
    {
      imgelink:
        'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80',
    },
    {
      imgelink:
        'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80',
    },
    {
      imgelink:
        'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2832&q=80',
    },
  ]

  const [active, setActive] = React.useState(data[0].imgelink)

  return (
    <div className="bg-tech-bg px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4">
          <img
            className="h-auto w-full max-w-full rounded-2xl border border-primary/10 object-cover object-center shadow-md md:h-[480px]"
            src={active}
            alt="Gallery preview"
          />
          <div className="grid grid-cols-5 gap-4">
            {data.map(({ imgelink }, index) => (
              <button key={index} type="button" onClick={() => setActive(imgelink)}>
                <img
                  src={imgelink}
                  className={`h-20 w-full cursor-pointer rounded-lg object-cover transition ring-2 ${
                    active === imgelink
                      ? 'ring-primary'
                      : 'ring-transparent hover:ring-primary/30'
                  }`}
                  alt={`Gallery thumbnail ${index + 1}`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="section-label">Coming soon</p>
          <h2 className="section-heading mt-4">Full media portfolio</h2>
          <p className="section-subheading mx-auto">
            We&apos;re curating our latest photography and cinematography work.
            Check back soon or contact us for samples.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Media
