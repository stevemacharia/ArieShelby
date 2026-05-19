type PageHeroProps = {
  title: string
  subtitle: string
  imageSrc: string
}

const PageHero = ({ title, subtitle, imageSrc }: PageHeroProps) => {
  return (
    <figure className="relative h-80 w-full overflow-hidden pt-16 sm:h-96">
      <img
        className="h-full w-full object-cover object-center"
        src={imageSrc}
        alt=""
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />
      <figcaption className="absolute bottom-8 left-1/2 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 rounded-2xl border border-white/20 bg-white/95 px-6 py-5 shadow-lg backdrop-blur-sm sm:w-[calc(100%-4rem)]">
        <p className="section-label">{subtitle}</p>
        <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
          {title}
        </h1>
      </figcaption>
    </figure>
  )
}

export default PageHero
