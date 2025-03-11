'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How does the AI-powered customer success platform work?',
    answer:
      'Our platform uses advanced machine learning algorithms to analyze customer behavior patterns, engagement metrics, and usage data. It provides predictive insights and automated recommendations to help you proactively address customer needs and prevent churn.',
  },
  {
    question: 'What kind of integration support do you offer?',
    answer:
      'We offer seamless integration with major CRM platforms, help desk software, and communication tools. Our team provides comprehensive support during the integration process, including documentation, technical assistance, and custom API solutions if needed.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Most customers start seeing meaningful insights within the first week of implementation. Significant improvements in customer retention and engagement are typically observed within the first 3 months of active use.',
  },
  {
    question: 'Do you offer custom solutions for enterprise clients?',
    answer:
      'Yes, we offer customized enterprise solutions that can be tailored to your specific needs. This includes custom AI models, dedicated support, advanced security features, and specialized integration options.',
  },
  {
    question: 'What kind of support is included?',
    answer:
      'All plans include access to our customer success team, documentation, and community forums. Enterprise plans include dedicated support managers, priority response times, and regular strategy sessions.',
  },
]

export function FAQ() {
  return (
    <section className="w-full border-t border-gray-800 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Everything you need to know about our platform
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
