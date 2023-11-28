import Link from '@/node_modules/next/link'
import Image from '@/node_modules/next/image'
import React from 'react'
import { NAV_LINKS } from '@/constants/index'
import Button from './Button'
import { BeakerIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
        <Link href="/">
            <Image src="/arieshelby_logo.jpeg" alt='arieshelby_logo' width={114} height={69} />
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
            {NAV_LINKS.map((link)=>(
                <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {link.label} 
                </Link>
            ))} 
        </ul>
        <div className='lg:flexCenter hidden'>
            <Button type='button' title='Contact Us' variant='btn_dark_green' icon="/phone.png" />
        </div>
        <Image src="menu.svg" alt='menu' width={32} height={32} className="inline-block cursor-pointer lg:hidden"/>
    </nav>
  )
}

export default Navbar

