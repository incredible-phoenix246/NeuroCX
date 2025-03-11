'use client'

import BlurImage from '@/components/miscellaneous/blur-image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_800px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                AI-Powered Customer Success Platform
              </h1>
              <p className="text-muted-foreground max-w-[600px] md:text-xl">
                Transform your customer success strategy with real-time
                insights, predictive analytics, and automated engagement tools.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link
                  href="https://app.forwardliveconfrence.org"
                  target="_blank"
                >
                  Get Started
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto lg:mx-0"
          >
            <div className="bg-background rounded-lg border p-2 shadow-lg">
              <BlurImage
                src="/hero.jpg"
                alt="PulseTrack Dashboard Interface"
                width={800}
                height={450}
                className="rounded shadow-sm"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
