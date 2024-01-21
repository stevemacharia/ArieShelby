
import Branding from '@/components/Branding'
import Media from '@/components/Media'

export default function OtherServices(){
    return(     
    <>
        <figure className="relative h-96 w-full">
            <img
            className="h-full w-full  object-cover object-center"
            src="/arieshelby_branding_and_design_dark.jpg"
            />
            <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(75%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                <div>
                    <h3
                    className="block font-sans text-2xl sm:text-1xl antialiased font-semibold leading-snug tracking-normal text-as-green">
                    Branding and Design
                    </h3>
                    <p className="block mt-2 font-sans text-base antialiased font-normal leading-relaxed text-black-700">
                    Take your business to the next level with us
                    </p>
                </div>
            </figcaption>
        </figure>
    <Branding/>
    </>
    )
}