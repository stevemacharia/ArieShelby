import { TECH_STACK } from '@/constants'

const TechStack = () => {
  return (
    <section className="border-y border-primary/10 bg-primary-muted py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="section-label text-center">Technologies we work with</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:border-primary hover:text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
