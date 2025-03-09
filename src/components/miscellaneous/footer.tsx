'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-gray-800 px-4 py-6 sm:flex-row md:px-6"
    >
    <p className="text-xs text-gray-400">
      © {new Date().getFullYear()} AI-Powered Customer Success Tool. All rights reserved.
    </p>
      <nav className="flex gap-4 sm:ml-auto sm:gap-6">
        <Link className="text-xs underline-offset-4 hover:underline" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs underline-offset-4 hover:underline" href="#">
          Privacy
        </Link>
      </nav>
    </motion.footer>
  )
}
