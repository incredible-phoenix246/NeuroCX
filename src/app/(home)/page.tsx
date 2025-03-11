import React from 'react'
import { Hero } from './_components/hero'
import { Features } from './_components/features'
import { Benefits } from './_components/benefits'
import { Pricing } from './_components/pricing'
import { CTA } from './_components/cta'
import { Stats } from './_components/stats'
import { FAQ } from './_components/faq'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <Stats />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  )
}

export default HomePage
