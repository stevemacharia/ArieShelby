"use client";
import React from 'react'
import { Typography } from "@material-tailwind/react";
import Development from '@/components/Development'
const features = [
    { name: 'Learning Management System', description: 'Designed by Good Goods, Inc.' },
    { name: 'Features', description: 'Admin Dashboard, Accounts Management, Purchasing and Invoicing, Email Notifications' },
    { name: 'Language', description: 'Django Framework' },
    { name: 'Front-End', description: 'Bootstrap 5' },

  ]

const page = () => {
  return (
    <div>
      <figure className="relative h-96 w-full">
        <img
          className="h-full w-full  object-cover object-center"
          src="/arieshelby_solutions_innovations.jpg"
        />
        <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(75%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">

          <div>
            <h3
              className="block font-sans text-2xl sm:text-1xl antialiased font-semibold leading-snug tracking-normal text-as-green">
              Our Solutions and Innovations
            </h3>
            <p className="block mt-2 font-sans text-base antialiased font-normal leading-relaxed text-black-700">
              Take your business to the next level with us
            </p>
          </div>
        </figcaption>
      </figure>
      <div className="bg-white">
        <div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:pt-24 pt-6 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8'>   
          <h2 className='md:text-5xl text-2xl text-as-green text-left font-bold'>Work Done..</h2>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-2 sm:px-6 sm:py-4 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-3xl">01. Masomo Portal</h2>
            <p className="mt-4 text-gray-500">
            Masomo Portal is an Online Learning Platform focused on Skills, Passion and Talent Development for children aged between 6 and 18 years old
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="/arieshelby_masomo_portal_001.png"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="arieshelby_masomo_portal_002.png"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="arieshelby_masomo_portal_003.png"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="arieshelby_masomo_portal_004.png"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default page