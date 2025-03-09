'use client'

import { motion } from 'framer-motion'

const benefits = [
  'Reduce disengagement and cancellation rates',
  'Increase customer engagement and feature adoption',
  'Save time for customer success teams through automation',
  'Grow upsells and cross-sells',
  'Provide actionable insights to customer success teams',
  'Seamless integration with CRMs and help desks',
]

export function Benefits() {
  return (
    <section className="w-full border-t border-gray-800 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Benefits
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center space-x-4 rounded-lg border border-gray-800 p-4"
            >
              <svg
                className="h-6 w-6 fill-current text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm text-gray-400">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
