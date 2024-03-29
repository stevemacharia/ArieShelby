"use client";
import React from 'react'
import { Button } from "@material-tailwind/react";

  const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ]
  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]

const Header = () => {
  return (
    

    <div className="relative isolate overflow-hidden bg-gray-900 mt-28 py-24 sm:py-32">
    <img
      src="/arieshelby_work_with_us.jpg"
      alt=""
      className="absolute bg-blend-darken backdrop-blur inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
    />
    <div
      className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      aria-hidden="true"
    >
      <div
        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#211e1f] to-[#1a4004] opacity-80"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
    <div
      className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      aria-hidden="true"
    >
      <div
        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#111310] to-[#053c06] opacity-80"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
    <div className="mx-auto max-w-7xl backdrop-blur-sm backdrop-brightness-50 p-6 rounded-lg lg:px-8">
      <div className="mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6x text-center">Work with us </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 text-center">
          Choose Arieshelby as your trusted partner in personalized tech and design solutions, where we specialize in elevating your digital experience through tailor-made solutions crafted with expertise and innovation
          Entrust your digital journey to Arieshelby, where your satisfaction and success are our top priorities.
          </p>
          <h2 className="text-2xl pt-4 pb-2 font-bold tracking-tight text-as-yellow sm:text-6x text-center">You can reach us through:</h2>
          <div className="flex justify-center">
            <Button className="rounded-full justify-center bg-as-yellow text-white font-bold text-1xl lowercase">info@arieshelby.com || 0745099932</Button>
          </div>
      </div>
    
    </div>
  </div>



  )
}

export default Header