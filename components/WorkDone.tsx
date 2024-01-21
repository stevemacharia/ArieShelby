import React from 'react'
import { Typography } from "@material-tailwind/react";
import Development from '@/components/Development'
const features = [
    { name: 'Learning Management System', description: '' },
    { name: 'Features', description: 'Admin Dashboard, Accounts Management, Purchasing and Invoicing, Email Notifications' },
    { name: 'Language', description: 'Django Framework' },
    { name: 'Front-End', description: 'Bootstrap 5' },

  ]


const features_alexadashcams = [
  { name: 'Online store', description: '' },
  { name: 'Features', description: 'Admin Dashboard, Accounts Management, Purchasing and Invoicing, Email Notifications' },
  { name: 'Language', description: 'Django Framework' },
  { name: 'Front-End', description: 'Bootstrap 5' },

]

const features_zamilfarms = [
  { name: 'Online store', description: '' },
  { name: 'Features', description: 'Admin Dashboard, Accounts Management, Purchasing and Invoicing, Email Notifications' },
  { name: 'Language', description: 'Django Framework' },
  { name: 'Front-End', description: 'Bootstrap 5' },

]


const WorkDone = () => {
  return (
    <div>

      <div className='mx-auto items-center gap-x-8 gap-y-16 px-4 lg:pt-24 pt-6 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8  divide-y divide-as-green'>
        <div className="bg-white">
          <div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:pt-24 pt-6 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8'>   
            <h2 className='md:text-4xl text-2xl text-as-green text-left font-bold'>Work Done..</h2>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-2 sm:px-6 sm:py-4 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-3xl">01. Masomo Portal</h2>
              <p className="mt-4 text-gray-500">
              Masomo Portal is an Online Learning Platform focused on Skills, Passion and Talent Development for children aged between 6 and 18 years old
              </p>
              <p className="mt-4 text-gray-500">
              Link: <a className="text-blue-700 hover:font-bold" href='https://masomoportal.com/'>masomoportal.com</a>
              </p>

              <dl className="mt-8 grid grid-cols-1  gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                  <div key={feature.name} className="border-t border-as-green pt-4">
                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                    <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
              <img
                src="/arieshelby_masomo_portal_001.png"
                alt="arieshelby_masomoportal."
                className="rounded-lg bg-gray-100 hover:scale-150 transition duration-500 cursor-pointer object-cover"
              />
            </div>
          </div>
        </div>
        <div className="bg-white mt-16 pt-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-2 sm:px-6 sm:py-4 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-3xl">02. Alexadashcams</h2>
              <p className="mt-4 text-gray-500">
                An online Car dashcam selling system
              </p>
              <p className="mt-4 text-gray-500">
              Link: <a className="text-blue-700 hover:font-bold" href='https://alexadashcams.co.ke'>alexadashcams.co.ke</a>
              </p>

              <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features_alexadashcams.map((features_alexadashcam) => (
                  <div key={features_alexadashcam.name} className="border-t border-as-green pt-4">
                    <dt className="font-medium text-gray-900">{features_alexadashcam.name}</dt>
                    <dd className="mt-2 text-sm text-gray-500">{features_alexadashcam.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
              <img
                src="/alexadashcams_01.png"
                alt="arieshelby_alexadashcams"
                className="rounded-lg bg-gray-100 hover:scale-150 transition duration-500 cursor-pointer object-cover"
              />
            </div>
          </div>
        </div>


        <div className="bg-white mt-16 pt-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-2 sm:px-6 sm:py-4 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-3xl">03. ZamilFarms</h2>
              <p className="mt-4 text-gray-500">
              Link: <a className="text-blue-700 hover:font-bold" href='https://alexadashcams.co.ke'>zamilfarms.com</a>
              </p>

              <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features_zamilfarms.map((features_zamilfarm) => (
                  <div key={features_zamilfarm.name} className="border-t border-as-green pt-4">
                    <dt className="font-medium text-gray-900">{features_zamilfarm.name}</dt>
                    <dd className="mt-2 text-sm text-gray-500">{features_zamilfarm.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
              <img
                src="/arieshelby_zamilfarms.png"
                alt="arieshelb_zamilfarms"
                className="rounded-lg bg-gray-100 hover:scale-150 transition duration-500 cursor-pointer object-cover"
              />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkDone