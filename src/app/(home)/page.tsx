import React from 'react'
import { Hero } from './_components/hero'
import { Features } from './_components/features'
import { Benefits } from './_components/benefits'
import { Pricing } from './_components/pricing'
import { CTA } from './_components/cta'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <Pricing />
      <CTA />
    </>
  )
}

export default HomePage
