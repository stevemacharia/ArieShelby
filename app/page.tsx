import Image from 'next/image'
import Hero from '@/components/Hero'
import Aboutus from '@/components/Aboutus'
import Services from '@/components/Services'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
    <Hero/>
    <Aboutus/>
    <Services/>
    <Header/>
    
    </>
  )
}
