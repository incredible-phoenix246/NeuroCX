'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import CountUp from 'react-countup'

const stats = [
  {
    number: 40,
    suffix: '%',
    label: 'Average Churn Reduction',
  },
  {
    number: 2.5,
    suffix: 'x',
    label: 'Revenue Growth',
  },
  {
    number: 85,
    suffix: '%',
    label: 'Customer Satisfaction',
  },
  {
    number: 500,
    suffix: '+',
    label: 'Enterprise Clients',
  },
]

export function Stats() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h2 className="font-montserrat text-3xl font-bold tracking-tighter sm:text-5xl">
            Driving Real Results
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our AI-powered platform delivers measurable impact for businesses
            worldwide
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-gray-800 bg-black/50">
                <CardContent className="p-6">
                  <div className="text-primary font-poppins text-4xl font-bold">
                    <CountUp
                      end={stat.number}
                      suffix={stat.suffix}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
