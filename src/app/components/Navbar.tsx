'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastY = useRef(0)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY < 80) setVisible(true)
      else if (currentY < lastY.current) setVisible(true)
      else setVisible(false)
      lastY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 400)
  }

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-5"
          >
            {/* Logo */}
            <button
              onClick={() => handleNav('#hero')}
              className="text-sm font-medium tracking-widest uppercase text-fg bg-transparent border-none cursor-pointer"
            >
              || FEHINTI ADEKOYA ||
            </button>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm tracking-wide text-fg/60 hover:text-fg transition-colors duration-300 bg-transparent border-none cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}

              {/* Theme toggle — desktop */}
              <li>
                <button
                  onClick={toggleTheme}
                  className="w-8 h-8 border border-fg/20 hover:border-fg/60 rounded-full flex items-center justify-center text-fg/40 hover:text-fg transition-all duration-300 bg-transparent cursor-pointer"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? '○' : '●'}
                </button>
              </li>
            </ul>

            {/* Mobile hamburger */}
            <div className="md:hidden flex items-center gap-4">
              {/* Theme toggle — mobile */}
              <button
                onClick={toggleTheme}
                className="w-7 h-7 border border-fg/20 rounded-full flex items-center justify-center text-fg/40 hover:text-fg transition-all duration-300 bg-transparent cursor-pointer text-xs"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? '○' : '●'}
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex flex-col justify-center gap-1.5 bg-transparent border-none cursor-pointer p-1"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="block w-5 h-px bg-fg origin-center"
                />
                <motion.span
                  animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="block w-5 h-px bg-fg"
                />
                <motion.span
                  animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="block w-5 h-px bg-fg origin-center"
                />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg md:hidden flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-5">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  onClick={() => handleNav(link.href)}
                  className="text-2xl font-light text-fg/50 hover:text-fg tracking-[0.2em] uppercase bg-transparent border-none cursor-pointer transition-colors duration-300"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-10 text-xs tracking-widest text-fg/20 uppercase"
            >
              || Fehinti Adekoya ||
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}