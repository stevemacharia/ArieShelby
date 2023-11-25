import Link from '@/node_modules/next/link'
import Image from '@/node_modules/next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flexBetweenmax-container padding-container relative z-30 py-5'>\
        <Link href="/">
            <Image src="" alt='arieshelby_logo' width={74} height={29} />
        </Link>
    </nav>
  )
}

export default Navbar