'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  'Next.js', 'React', 'TypeScript', 'Tailwind CSS',
  'Framer Motion', 'Node.js', 'Figma', 'Three.js',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="px-4 md:px-6 py-16 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

        {/* Left col */}
        <div className="flex flex-col gap-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase text-fg/40"
          >
            About Me
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            className="text-2xl md:text-5xl font-light text-fg leading-tight"
          >
            A developer who thinks like a designer.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="text-sm text-fg/50 leading-relaxed"
          >
            I am Fehinti Adekoya, a creative full-stack developer based in Lagos, Nigeria.
            I build digital experiences that are fast, beautiful, and purposeful;
            bridging the gap between design, vision and technical execution.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="text-sm text-fg/50 leading-relaxed"
          >
            When I am not coding, I am exploring the intersection of art, culture,
            and technology; basically always looking for the next thing that makes people
            stop and say wow!.
          </motion.p>

          {/* CTA */}
          <motion.a
            href="mailto:adekoyafehinti@gmail.com"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-fg/60 hover:text-fg transition-colors duration-300 w-fit border-b border-fg/20 hover:border-fg/60 pb-1"
          >
            <span>Get in touch</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </motion.a>
        </div>

        {/* Right col — photo + skills */}
        <div className="flex flex-col gap-12">

          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="w-full aspect-[1.1] bg-fg/5 border border-fg/10 rounded-sm flex items-center justify-center overflow-hidden"
          >
            <span className="text-xs text-fg/20 tracking-widest">Your Photo Here</span>
          </motion.div>

          {/* Skills */}
          <div className="flex flex-col gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs tracking-[0.3em] uppercase text-fg/40"
            >
              Tech Stack
            </motion.p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
                  className="text-xs px-3 py-1.5 border border-fg/10 text-fg/50 hover:border-accent/50 hover:text-fg transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}