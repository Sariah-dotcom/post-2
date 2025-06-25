import React from 'react'
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import AboutSection from '../components/AboutSection'
import Locations from '../components/Locations'
import InfoCardSection from '../components/InfoCardSection'

export default function Home() {
  return (
    <div className='flex flex-col gap-35'>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Locations />
      <InfoCardSection />
    </div>
  )
}
