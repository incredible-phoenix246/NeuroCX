'use client'

import { motion } from 'framer-motion'
import {
  BarChartIcon as ChartBar,
  UserIcon as UserGroup,
  Cog,
  PieChartIcon as ChartPie,
} from 'lucide-react'

const features = [
  {
    icon: ChartBar,
    title: 'Customer Health Scoring',
    description: 'AI-calculated health scores based on user behavior',
  },
  {
    icon: UserGroup,
    title: 'Usage Pattern Analysis',
    description: 'Track feature usage to identify underused features',
  },
  {
    icon: Cog,
    title: 'Predicting Disengagement',
    description: 'ML model predicts customers likely to leave or cancel',
  },
  {
    icon: ChartPie,
    title: 'Upselling and Cross-Selling',
    description: 'Identifies upsell opportunities based on usage patterns',
  },
]

export function Features() {
  return (
    <section className="w-full border-t border-gray-800 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="font-montserrat mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Key Features
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-4"
            >
              <feature.icon className="h-12 w-12 text-gray-400" />
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-sm text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
