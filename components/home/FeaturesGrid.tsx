import SectionHeading from '@/components/ui/SectionHeading'
import { FEATURES } from '@/constants'
import {
  CpuChipIcon,
  RocketLaunchIcon,
  PaintBrushIcon,
  LifebuoyIcon,
} from '@heroicons/react/24/outline'

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  architecture: CpuChipIcon,
  delivery: RocketLaunchIcon,
  brand: PaintBrushIcon,
  support: LifebuoyIcon,
}

export default function FeaturesGrid() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Features"
          title="Built for businesses that demand more"
          subtitle="From concept to launch, Arieshelby delivers technology and creative solutions with the speed of a startup and the precision of enterprise standards."
          align="center"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = icons[feature.icon] ?? CpuChipIcon
            return (
              <div
                key={feature.title}
                className="card-elevated group p-8 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-muted text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
