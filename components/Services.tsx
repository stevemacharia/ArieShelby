import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <>
    <div className="relative isolate overflow-hidden bg-white px-6 py-16 sm:py-12 lg:overflow-visible lg:px-0">
        <div className="container mx-auto px-8">
          <h2 className='md:text-5xl text-3xl text-as-green text-center font-bold pt-12'>Our Services</h2>
          <p className="text-sm leading-8 text-gray-400 text-center font-medium italic pb-2">What we offer</p>
          <ServiceCard/>
        </div>
    </div>
    </>
  )
}

export default Services