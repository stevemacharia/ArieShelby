import SectionHeading from '@/components/ui/SectionHeading'

export default function VideoShowcase() {
  return (
    <section className="bg-primary-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Introduction"
          title="Watch our quick overview"
          subtitle="See how Arieshelby partners with businesses to design, build, and launch digital systems — from HR platforms to e-commerce and brand experiences."
          align="center"
        />

        <div className="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-2xl shadow-primary/10">
          <div className="relative aspect-video w-full bg-gray-900">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
              alt="Team collaborating on digital solutions"
              className="h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl">
                <svg
                  className="ml-1 h-8 w-8 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
          <p className="px-6 py-4 text-center text-sm text-gray-500">
            Replace with your company reel — update video URL in production
          </p>
        </div>
      </div>
    </section>
  )
}
