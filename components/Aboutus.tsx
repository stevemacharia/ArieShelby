import React from 'react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const Aboutus = () => {
  return (

    <div className="relative isolate overflow-hidden bg-white px-6 py-16 sm:py-12 lg:overflow-visible lg:px-0">
    <h2 className='md:text-5xl text-3xl text-as-green text-center font-bold pt-12'>About Us</h2>
    <p className="text-sm leading-8 text-gray-400 text-center font-medium italic pb-9">Tailored Tech, Crafted Design. Crafting Solutions as Unique as You</p>
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
            <p className="text-base font-semibold leading-7 hover:font-bold text-yellow2">Background</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Defining Innovation, Designing Excellence</h1>
            <p className="mt-6 text-base leading-7 text-gray-700">
            Welcome to Arieshelby, your go-to destination for personalized tech and design solutions. At Arieshelby, we specialize in creating tailor-made solutions to elevate your digital experience. Our team combines expertise in technology and design to bring your unique vision to life. Discover the perfect blend of innovation and customization with Arieshelby – your partner for bespoke solutions that stand out. Explore the possibilities and unlock tailored excellence with us.
            </p>
          </div>
        </div>
      </div>
      <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img
          className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          src="/as_about_us.jpg"
          alt=""
        />
      </div>

    </div>
  </div>




  )
}

export default Aboutus