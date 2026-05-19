import SectionHeading from '@/components/ui/SectionHeading'
import { CLIENTS, TECH_STACK } from '@/constants'

export default function ClientsSection() {
  return (
    <section className="border-y border-gray-100 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Technologies"
          title="Stack we build with"
          align="center"
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary/15 bg-primary-muted px-4 py-2 text-sm font-medium text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading
            label="Clients"
            title="Some of our friends"
            subtitle="Organizations we've partnered with across finance, education, agriculture, and retail."
            align="center"
          />
        </div>
        <div className="mt-12 grid grid-cols-2 items-center gap-10 sm:grid-cols-3 lg:grid-cols-3">
          {CLIENTS.map((client) => (
            <a
              key={client.name}
              href={client.href}
              target={client.href.startsWith('http') ? '_blank' : undefined}
              rel={
                client.href.startsWith('http') ? 'noopener noreferrer' : undefined
              }
              className="flex justify-center opacity-70 transition hover:opacity-100 hover:scale-105"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-10 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
