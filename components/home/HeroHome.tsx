import Link from 'next/link'
import { HERO_STATS } from '@/constants'

export default function HeroHome() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Photo background + dark green fade (arieshelby.com hero) */}
      <div className="absolute inset-0" aria-hidden>
        <img
          src="/DSC09763.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001809]/90 via-[#001809]/75 to-[#001809]/55 bg-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 pb-20 pt-28 text-center lg:px-8 lg:pt-32">
        <h1 className="mt-4 text-2xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-3xl lg:text-[3.25rem] lg:leading-[1.05]">
         We create{' '}
          <span className="text-as-yellow">tailor made solutions</span> for your
          business
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
            At Arieshelby, creativity and innovation are at the heart of everything we create. We go beyond delivering services by crafting meaningful digital and visual experiences that connect with people, tell compelling stories, and bring ideas to life. From system development and modern web solutions to photography, videography, livestreaming, and creative design, every project is approached with passion, originality, and purpose.
        </p>
        <div className="mt-10">
          <Link href="/WebDevelopment" className="btn-primary bg-white">
            Find out more
          </Link>
        </div>

        <div className="mt-8 grid w-full max-w-2xl grid-cols-2 gap-2 border-t border-white/20 pt-4 sm:grid-cols-2">
          {HERO_STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-as-yellow sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-white/80 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
