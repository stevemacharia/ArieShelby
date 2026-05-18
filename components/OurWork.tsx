import { CLIENTS } from '@/constants'

const OurWork = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="section-label">Trusted by</p>
          <h2 className="section-heading mt-4">Clients we&apos;ve built for</h2>
          <p className="section-subheading mx-auto">
            Businesses across finance, education, e-commerce, and agriculture
            rely on systems and brands we&apos;ve delivered.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 items-center gap-x-12 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {CLIENTS.map((client) => (
            <a
              key={client.name}
              href={client.href}
              target={client.href.startsWith('http') ? '_blank' : undefined}
              rel={client.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-center opacity-80 transition-all duration-300 hover:scale-110 hover:opacity-100"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurWork
