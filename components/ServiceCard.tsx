import Link from 'next/link'
import { SERVICES } from '@/constants'

const ServiceCard = () => {
  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-3">
      {SERVICES.map((service) => (
        <Link
          key={service.name}
          href={service.href}
          className="group glass-card overflow-hidden"
        >
          <div className="relative h-52 overflow-hidden">
            <img
              src={service.imageSrc}
              alt={service.imageAlt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-primary-muted px-2 py-0.5 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary">
              {service.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {service.description}
            </p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
              Learn more
              <svg
                className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ServiceCard
