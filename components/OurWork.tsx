import React from 'react'

const OurWork = () => {
  return (
    
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className='md:text-5xl text-3xl text-as-green text-center font-bold pt-2'>Our Work</h2>
        {/* <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 pt-4">
          Trusted by the world’s most innovative teams
        </h2> */}
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <a href='https://qsolutionllc.com'><img
            className="col-span-2 object-contain lg:col-span-1 hover:scale-150 transition duration-500 cursor-pointer object-cover"
            src="/qsolution_logo.png"
            alt="SavvyCal"
            width={128}
            height={18}
          /></a>
          <a href='https://masomoportal.com'><img
            className="col-span-2  object-contain lg:col-span-1 hover:scale-150 transition duration-500 cursor-pointer object-cover"
            src="/masomoportal_logo.png"
            alt="Transistor"
            width={148}
            height={38}
          /></a>
          <a href='https://alexadashcams.co.ke'><img
            className="col-span-2  object-contain lg:col-span-1 hover:scale-150 transition duration-500 cursor-pointer object-cover"
            src="/alexa-dashcam-logo.png"
            alt="Reform"
            width={178}
            height={68}
          /></a>
          <a href='https://zamilfarms.com'><img
            className="col-span-2  object-contain lg:col-span-1 hover:scale-150 transition duration-500 cursor-pointer object-cover"
            src="/zamil_farms_logo.png"
            alt="Tuple"
            width={158}
            height={48}
          /></a>
          <a href='https://greeneseal.com'><img
            className="col-span-2 object-contain lg:col-span-1 hover:scale-150 transition duration-500 cursor-pointer object-cover"
            src="/greeneseal_limited.png"
            alt="SavvyCal"
            width={178}
            height={68}
          /></a>
          
        </div>
      </div>
    </div>


  )
}

export default OurWork