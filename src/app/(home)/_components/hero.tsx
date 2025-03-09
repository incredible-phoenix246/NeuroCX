'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              AI-Powered Customer Success
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
              Enhance engagement, predict disengagement, and boost revenue with
              AI-driven insights.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-800 bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-50 focus-visible:ring-1 focus-visible:ring-gray-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
