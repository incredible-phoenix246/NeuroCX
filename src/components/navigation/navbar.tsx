'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { X, Menu, Moon, Sun } from 'lucide-react'
import { useThemeState } from '@/hooks/theme'
import BlurImage from '../miscellaneous/blur-image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isDark = useThemeState((state) => state.isDark)
  const updateTheme = useThemeState((state) => state.updateTheme)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const toggleTheme = () => {
    updateTheme(!isDark)
  }

  return (
    <>
      <div className="font-nunito fixed top-0 right-0 left-0 z-50 flex justify-center px-4">
        <motion.header
          className={cn(
            'flex w-full max-w-[1500px] items-center justify-between py-2 transition-all duration-1000 dark:bg-gray-900/90',
            isScrolled &&
              'mx-auto mt-6 max-w-3xl rounded-full bg-white px-8 py-6 shadow-2xl backdrop-blur-md max-md:mt-4 dark:border-gray-700 dark:bg-gray-800/90 dark:shadow-gray-800'
          )}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            height: isScrolled ? '60px' : '80px',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          <div className="flex items-center space-x-2">
            <BlurImage
              src={isDark ? '/logo-white.png' : '/logo-black.png'}
              alt="Reworkd"
              width={20}
              height={20}
            />

            <AnimatePresence mode="wait">
              {!isScrolled && (
                <motion.span
                  key="default"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="font-montserrat text-xl font-semibold text-gray-900 dark:text-white"
                >
                  NeuroCX
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="#features"
              className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Pricing
            </Link>
            <Link
              href="#blog"
              className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Blog
            </Link>
            <Link
              href="#docs"
              className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Docs
            </Link>
            <Link
              href="#careers"
              className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Careers
              <Badge
                variant="secondary"
                className="rounded-full bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
              >
                3
              </Badge>
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              className="rounded-full bg-gray-100 p-2 text-gray-700 dark:bg-gray-800 dark:text-yellow-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <Button
              size="lg"
              asChild
              className="hidden rounded-full bg-black text-white hover:bg-gray-800 md:inline-flex dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              style={{
                height: isScrolled ? '36px' : '44px',
                fontSize: isScrolled ? '14px' : '16px',
                transition: 'all 0.5s',
              }}
            >
              <Link href="https://app.forwardliveconfrence.org" target="_blank">
                Get started
              </Link>
            </Button>

            <motion.button
              className="flex items-center justify-center md:hidden dark:text-white"
              onClick={() => setIsMobileMenuOpen(true)}
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="h-6 w-6" />
            </motion.button>
          </div>
        </motion.header>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-in menu */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 flex w-[80%] max-w-sm flex-col bg-white text-gray-900 shadow-xl dark:bg-gray-900 dark:text-white"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between border-b border-gray-100 p-4 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <BlurImage
                    src={isDark ? '/logo-white.png' : '/logo-black.png'}
                    alt="Reworkd"
                    width={20}
                    height={20}
                  />

                  <span className="text-xl font-semibold"> NeuroCX</span>
                </div>
                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={toggleTheme}
                    className="rounded-full bg-gray-100 p-2 text-gray-700 dark:bg-gray-800 dark:text-yellow-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                  </motion.button>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileTap={{ scale: 0.95 }}
                    className="p-2"
                  >
                    <X className="h-6 w-6" />
                  </motion.button>
                </div>
              </div>

              <nav className="flex flex-1 flex-col space-y-4 overflow-y-auto p-4">
                <Link
                  href="#features"
                  className="flex items-center justify-between border-b py-3 transition-colors dark:border-gray-700 dark:text-gray-300 dark:hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#pricing"
                  className="flex items-center justify-between border-b py-3 transition-colors dark:border-gray-700 dark:text-gray-300 dark:hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="#blog"
                  className="flex items-center justify-between border-b py-3 transition-colors dark:border-gray-700 dark:text-gray-300 dark:hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="#docs"
                  className="flex items-center justify-between border-b py-3 transition-colors dark:border-gray-700 dark:text-gray-300 dark:hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Docs
                </Link>
                <Link
                  href="#careers"
                  className="flex items-center justify-between border-b py-3 transition-colors dark:border-gray-700 dark:text-gray-300 dark:hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                  <Badge
                    variant="secondary"
                    className="rounded-full bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                  >
                    3
                  </Badge>
                </Link>
              </nav>

              <div className="border-t border-gray-100 p-4 dark:border-gray-700">
                <Button
                  asChild
                  className="w-full rounded-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  <Link
                    href="https://app.forwardliveconfrence.org"
                    target="_blank"
                  >
                    Get started
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
