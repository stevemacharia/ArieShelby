"use client";
import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

const TechServices = [
  {
    name: 'Web & System Development',
    description: 'We offer web design, application development, and system integration. Whether clients require dynamic and responsive websites, robust web applications, or seamless integration of diverse systems, We combine creativity and technical expertise to deliver innovative solutions.',
    imageSrc: '/as_web_development.png',
    imageAlt: 'Web and system developnent',
    href: '/WebDevelopment',
  },
  {
    name: 'Mobile App Development',
    description: 'We are your trusted partner for top-notch app development services in Kenya. Specializing in crafting innovative and user-friendly mobile applications, our dedicated team ensures your business stays ahead in the digital landscape.',
    imageSrc: '/arieshelby_app_development.jpg',
    imageAlt: 'Web and system developnent',
    href: '/WebDevelopment',
  },
  {
    name: 'IT Consultancy services',
    description:'Empower your business with AriesHelbys exceptional IT Consultancy Services in Kenya.  From optimizing IT infrastructure such as network installation, CCTV Installation to implementing cutting-edge technologies',
    imageSrc: '/arieshelby_IT_Consultancy_services.jpg',
    imageAlt: 'Web and system developnent',
    href: '/WebDevelopment',
  }
]


const Development = () => {
  return (
    <div>
      <div className='mx-auto items-center gap-x-8 gap-y-16 px-8 lg:pt-24 pt-6 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8'>
          <div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:max-w-7xl lg:grid-cols-2 '>   
            <h2 className='md:text-4xl text-2xl text-as-green text-left font-bold'>Our Exclusive IT Solutions </h2>
          </div>
      </div>

      <div className='pt-12 mx-auto items-center  px-8 sm:px-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
        {TechServices.map((TechService) => (
          <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img
                src={TechService.imageSrc}  alt={TechService.imageAlt} className="h-full w-full object-cover object-center"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
               {TechService.name}
              </Typography>
              <Typography variant="lead" color="gray" className="text-wrap text-base">
                  {TechService.description}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>

    </div>
  )
}

export default Development