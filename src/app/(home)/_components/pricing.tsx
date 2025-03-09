'use client'

import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Basic',
    price: '$X',
    features: ['Core AI insights', 'Manual triggers', 'Basic reporting'],
  },
  {
    name: 'Pro',
    price: '$XX',
    features: [
      'Advanced AI',
      'Automation',
      'CRM integrations',
      'Advanced reporting',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Custom AI models',
      'API access',
      'Dedicated support',
      'Advanced integrations',
    ],
  },
]

export function Pricing() {
  return (
    <section className="w-full border-t border-gray-800 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 p-6"
            >
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-4xl font-bold">{plan.price}</p>
              <ul className="space-y-2 text-sm text-gray-400">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 fill-current text-gray-400"
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
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-800 bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-50 focus-visible:ring-1 focus-visible:ring-gray-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
