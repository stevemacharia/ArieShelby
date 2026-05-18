import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <section id="services" className="bg-tech-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-label">What we do</p>
          <h2 className="section-heading mt-4">End-to-end digital capabilities</h2>
          <p className="section-subheading">
            From engineering production systems to shaping brand identities and
            producing visual content — we cover the full digital lifecycle.
          </p>
        </div>
        <ServiceCard />
      </div>
    </section>
  )
}

export default Services
