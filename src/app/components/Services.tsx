'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Clean, performant code built with modern technologies. Next.js, React, TypeScript — fast by default.',
  },
   
  {
    number: '02',
    title: 'Full-Stack Development',
    description:
      'Building complete web applications from frontend to backend. Node.js, Express, Next.js, Flask.py, MongoDB — scalable and maintainable.',
  },
  {
    number: '03',
    title: 'Mentoring',
    description:
      'Guiding developers through best practices and helping them level up their skills.',
  },
  {
    number: '04',
    title: 'Project Management',
    description:
      'Organizing and leading development projects from conception to delivery. Ensuring timelines, scope, and quality are met.',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="services" className="px-4 md:px-6 py-16 md:py-32 border-t border-fg/10">
      <div ref={ref} className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase text-fg/40"
          >
            Services & Capabilities
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs text-fg/20 tracking-widest hidden md:block"
          >
            What I do
          </motion.p>
        </div>

        {/* Accordion services */}
        <div className="flex flex-col">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="border-b border-fg/10"
            >
              {/* Accordion header */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-8 text-left group"
              >
                <div className="flex items-center gap-8">
                  <span className="text-xs text-fg/30">{service.number}</span>
                  <h3 className="text-xl md:text-3xl font-light text-fg group-hover:translate-x-2 transition-transform duration-500"
                  >
                    {service.title}
                  </h3>
                </div>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-fg/40 text-xl"
                >
                  +
                </motion.span>
              </button>

              {/* Accordion body */}
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? 'auto' : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                className="overflow-hidden"
              >
                <p className="text-sm text-fg/50 leading-relaxed pb-8 pl-14 max-w-xl">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}