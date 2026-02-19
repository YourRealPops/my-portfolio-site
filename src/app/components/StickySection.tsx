'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface StickySectionProps {
  children: React.ReactNode
}

export default function StickySection({ children }: StickySectionProps) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const borderRadius = useTransform(scrollYProgress, [0, 1], [0, 24])

  return (
    <div ref={ref} className="relative h-[150vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ scale, opacity, borderRadius }}
          className="w-full h-full origin-top"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}