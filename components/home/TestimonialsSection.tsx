import SectionHeading from '@/components/ui/SectionHeading'
import { TESTIMONIALS } from '@/constants'

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="Trusted by growing businesses"
          align="center"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="card-elevated flex flex-col p-8"
            >
              <p className="flex-1 text-gray-600 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-8 border-t border-gray-100 pt-6">
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.company}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
