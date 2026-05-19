import SectionHeading from '@/components/ui/SectionHeading'
import { SHOWCASE_FEATURES } from '@/constants'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function ShowcaseAlternating() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Capabilities"
          title="More than 10k hours of craft"
          subtitle="Endless possibilities when systems, media, and brand work together."
          align="center"
        />

        <div className="mt-20 space-y-28">
          {SHOWCASE_FEATURES.map((block) => (
            <div
              key={block.title}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                block.reverse ? 'lg:[direction:rtl]' : ''
              }`}
            >
              <div className={block.reverse ? 'lg:[direction:ltr]' : ''}>
                <p className="text-sm font-semibold text-primary">
                  {block.subtitle}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                  {block.title}
                </h3>
                <p className="mt-4 leading-relaxed text-gray-600">
                  {block.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {block.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >
                      <CheckCircleIcon className="h-5 w-5 shrink-0 text-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`overflow-hidden rounded-3xl shadow-xl ${
                  block.reverse ? 'lg:[direction:ltr]' : ''
                }`}
              >
                <img
                  src={block.image}
                  alt={block.title}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
