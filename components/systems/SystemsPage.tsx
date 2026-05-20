'use client'

import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import { HERO_STATS, SYSTEMS_DONE, TECH_SERVICES } from '@/constants'
import WorkDone from '@/components/WorkDone'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react'

export default function SystemsPage() {
  return (
    <div className="bg-[#fafcfb]">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0" aria-hidden>
          <img
            src="/DSC09763.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001809]/90 via-[#001809]/75 to-[#001809]/55 bg-blend-multiply" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pb-16 pt-28 text-center lg:px-8 lg:pb-20 lg:pt-32">
          <h1 className="mt-0 text-2xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-3xl lg:text-[3.25rem] lg:leading-[1.05]">
            Enterprise{' '}
            <span className="text-as-yellow">digital systems</span> for your
            business
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
            Custom software, integrations, and product development, from HR
            platforms to e-commerce and learning systems, all engineered with
            the same care and clarity you see across Arieshelby.
          </p>
          <div className="mt-10">
            <Link href="#hr-product" className="btn-primary bg-white">
              View HR System
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

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            label="Services"
            title="What we engineer"
            subtitle="Full-stack delivery with clear milestones and production-ready code."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {TECH_SERVICES.map((service) => (
              <Card
                key={service.name}
                className="overflow-hidden border border-gray-100 bg-white shadow-sm"
              >
                <CardHeader floated={false} shadow={false} className="m-0">
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    className="h-48 w-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" className="font-bold text-gray-900">
                    {service.name}
                  </Typography>
                  <Typography className="mt-2 text-sm text-gray-600">
                    {service.description}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="hr-product" className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {SYSTEMS_DONE.filter((s) => s.featured).map((hr) => (
            <div
              key={hr.id}
              className="grid items-center gap-12 lg:grid-cols-2"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
                  Flagship product
                </p>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  {hr.name}
                </h2>
                <p className="mt-6 leading-relaxed text-white/90">
                  {hr.description}
                </p>
                <ul className="mt-8 space-y-2">
                  {hr.stats.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      {s}
                    </li>
                  ))}
                </ul>
                <a
                  href={hr.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-bold text-primary hover:bg-primary-muted"
                >
                  Launch HR System →
                </a>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={hr.image}
                  alt={hr.name}
                  className="aspect-video w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <WorkDone />
    </div>
  )
}
