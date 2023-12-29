import React from 'react'

const Hero = () => {
  return (

    <div className="relative isolate ">
    <section className="relative bg-hero bg-cover bg-center bg-no-repeat w-full">
      <div className='bg-gradient-to-r from-[#001809] bg-blend-multiply drop-shadow-md'>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-4 justify-start">   
            <div className=" mx-left max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="md:text-start md:ps-20 md:ms-20 text-center px-4">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  We create tailor made solutions for your business
                </h1>
                <p className="mt-6 md:text-lg text-sm  text-white">
                Join us on a journey where innovation knows no bounds, and design is not just a form but a function in itself. Welcome to Arieshelby, where we don't just build solutions; we sculpt experiences that resonate with the essence of individuality.
                </p>
                <div className="mt-10 flex md:items-start md:justify-start  items-center justify-center gap-x-6">
                  <a href="#"className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-as-green shadow-sm hover:bg-yellow2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Get started
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-white">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div className=''>
                  <div className='bg-client_hero bg-no-repeat bg-center pe-16 me-16 object-scale-down w-full h-full'></div>
            </div>
      </div>
      </div>
    </section>
  </div>   
  )
}

export default Hero 
