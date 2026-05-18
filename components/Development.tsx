'use client'

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react'

const TechServices = [
  {
    name: 'Web & System Development',
    description:
      'Production-grade websites, web applications, and system integrations built with modern frameworks and scalable architecture.',
    imageSrc: '/as_web_development.png',
    imageAlt: 'Web and system development',
  },
  {
    name: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications designed for performance, usability, and long-term maintainability.',
    imageSrc: '/arieshelby_app_development.jpg',
    imageAlt: 'Mobile app development',
  },
  {
    name: 'IT Consultancy',
    description:
      'Infrastructure planning, network setup, CCTV systems, and technology strategy aligned with your business operations.',
    imageSrc: '/arieshelby_IT_Consultancy_services.jpg',
    imageAlt: 'IT consultancy services',
  },
]

const Development = () => {
  return (
    <div className="bg-tech-bg py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="section-label">Engineering</p>
        <h2 className="section-heading mt-4">Digital systems we build</h2>
        <p className="section-subheading">
          Full-stack products, APIs, and infrastructure — engineered for
          reliability and growth.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {TechServices.map((service) => (
            <Card
              key={service.name}
              className="overflow-hidden border border-primary/10 bg-white shadow-sm"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <img
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  className="h-48 w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" className="font-semibold text-gray-900">
                  {service.name}
                </Typography>
                <Typography className="mt-2 font-normal text-sm text-gray-600">
                  {service.description}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Development
