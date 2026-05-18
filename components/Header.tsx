'use client'

const Header = () => {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-primary-muted py-24 sm:py-32"
    >
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div
        className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-primary-light/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="section-label">Let&apos;s build together</p>
        <h2 className="section-heading mt-4">
          Ready to ship your next digital product?
        </h2>
        <p className="section-subheading mx-auto">
          Tell us about your project — whether it&apos;s a web platform, mobile
          app, or brand refresh. We&apos;ll help you scope, design, and deliver
          it.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="mailto:info@arieshelby.com" className="btn-primary">
            info@arieshelby.com
          </a>
          <a href="tel:+254745099932" className="btn-outline">
            +254 745 099 932
          </a>
        </div>
      </div>
    </section>
  )
}

export default Header
