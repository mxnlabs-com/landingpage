import Hero from '@/components/sections/Hero'
import FindInsurance from '@/components/sections/FindInsurance'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import About from '@/components/sections/About'
import Faq from '@/components/sections/Faq'

export default function Home() {
  return (
    <main>
      <Hero />
      <FindInsurance />
      <Services />
      <Testimonials />
      <About />
      <Faq />
    </main>
  )
}