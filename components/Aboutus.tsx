import { CAPABILITIES } from '@/constants'

const Aboutus = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-label">About Arieshelby</p>
          <h2 className="section-heading mt-4">
            Technology meets creative excellence
          </h2>
          <p className="section-subheading">
            We are a Nairobi-based digital studio specializing in software
            engineering, brand design, and visual media. From concept to
            deployment, we build systems and experiences that help businesses
            operate smarter and connect with their audiences.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-600">
              Our team combines full-stack development expertise with sharp
              design thinking. Whether you need a production-ready web platform,
              a mobile application, or a complete brand identity, we deliver
              solutions engineered for performance and built to last.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              We partner with startups, enterprises, and institutions across
              Kenya and beyond — translating complex requirements into clean,
              scalable digital products.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-primary/10 shadow-md">
            <img
              className="aspect-[4/3] w-full object-cover"
              src="/as_about_us.jpg"
              alt="Arieshelby team at work"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((cap) => (
            <div key={cap.title} className="glass-card p-6">
              <span className="text-sm font-bold text-primary">{cap.icon}</span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {cap.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Aboutus
