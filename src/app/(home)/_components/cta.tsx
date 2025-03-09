'use client'

import { motion } from 'framer-motion'

export function CTA() {
  return (
    <section className="w-full border-t border-gray-800 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-4 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
            Enhance your customer success strategy with our AI-powered tool.
            Sign up now for a free trial.
          </p>
          <a
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-800 bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-50 focus-visible:ring-1 focus-visible:ring-gray-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            Start Free Trial
          </a>
        </motion.div>
      </div>
    </section>
  )
}
