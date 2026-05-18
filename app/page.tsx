import HeroHome from '@/components/home/HeroHome'
import FeaturesGrid from '@/components/home/FeaturesGrid'
import SolutionsPillars from '@/components/home/SolutionsPillars'
import ShowcaseAlternating from '@/components/home/ShowcaseAlternating'
import SystemsDoneSection from '@/components/home/SystemsDoneSection'
import ClientsSection from '@/components/home/ClientsSection'
import ContactCTA from '@/components/home/ContactCTA'

export default function Home() {
  return (
    <>
      <HeroHome />
      <FeaturesGrid />
      <SolutionsPillars />
      <ShowcaseAlternating />
      <SystemsDoneSection />
      <ClientsSection />
      <ContactCTA />
    </>
  )
}
