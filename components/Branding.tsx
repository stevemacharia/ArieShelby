import React from 'react'

const Branding = () => {
  return (
    <div>
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Branding and Design</h1>
            </div>



            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-2 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              <div>
                <h2 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-3xl">01. Caritas MFB</h2>
                <p className="mt-4 text-gray-500">
                QSolution's corporate website specializes in consultancy services, offering tailored solutions for clients' needs. It serves as a comprehensive platform, providing insights and resources to optimize business strategies and foster growth.
                </p>
                <a href='#'><p className="mt-4 text-blue font-bold">
                Gallery
                </p></a>

                <dl className="mt-8 grid grid-cols-1  gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
    
                </dl>
              </div>
              <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
                <img
                  src="/arieshelby-qsolution-website.png"
                  alt="arieshelby-qsolution-website"
                  className="rounded-lg bg-gray-100 hover:scale-150 transition duration-500 cursor-pointer object-cover"
                />
              </div>
            </div>

        </main>
    </div>
  )
}

export default Branding