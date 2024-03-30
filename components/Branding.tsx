"use client";
import React from 'react'
import { Carousel } from "@material-tailwind/react";
const Branding = () => {
  return (
    <div>
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Branding and Design</h1>
            </div>



            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-2 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              <div>
                <h2 className="text-1xl font-bold tracking-tight text-as-green sm:text-3xl">01. Caritas MFB</h2>
                <p className="mt-4 text-gray-500">
                    The project focused on branding two main branches, namely the Cardinal Otunga Branch and the Githurai branch. We completed the task exceptionally quickly and fully branded both branches to effectively represent and promote the Caritas Brand Identity through conceptualization and communication.  
                </p>
                <a href='#'><p className="mt-4 text-blue font-bold">
                  See More </p></a>

                <dl className="mt-8 grid grid-cols-1  gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
    
                </dl>
              </div>
              <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
                <Carousel transition={{ duration: 2 }} className="rounded-xl">
                  <img
                    src="/arieshelby-caritas-mfb-004.jpg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="/arieshelby-caritas-mfb-006.jpg"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="/arieshelby-caritas-mfb-010.jpg"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="/arieshelby-caritas-mfb-009.jpg"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="/arieshelby-caritas-mfb-002.jpg"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="/arieshelby-caritas-mfb-007.jpg"
                    className="h-full w-full object-cover"
                  />

                </Carousel>
              </div>
            </div>

        </main>
    </div>
  )
}

export default Branding