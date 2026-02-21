'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { projects } from '../lib/projects'

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  return (
    <section id="projects" className="px-4 md:px-6 py-16 md:py-24">

      {/* Section header */}
      <div ref={ref} className="flex items-end justify-between mb-16 border-b border-fg/10 pb-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="text-xs tracking-[0.3em] uppercase text-fg/40"
        >
          Selected Work
        </motion.h2>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs text-fg/30 tracking-widest"
        >
          {projects.length} Projects
        </motion.span>
      </div>

      {/* Project list */}
      <div className="flex flex-col">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => project.link && window.open(project.link, '_blank')}
            className="group relative flex items-center justify-between py-8 border-b border-fg/10 cursor-pointer overflow-hidden"
          >
            {/* Hover background fill */}
            <motion.div
              className="absolute inset-0 z-0"
              style={{ backgroundColor: project.color }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: hoveredId === project.id ? 1 : 0 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            />

            {/* Left — number + title */}
            <div className="relative z-10 flex items-center gap-4 md:gap-8">
              <span className="text-xs text-fg/30 w-8">{project.id}</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg md:text-3xl font-light text-fg tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {project.title}
                </h3>
                <p className="text-xs text-fg/40 tracking-wide hidden md:block">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Right — category + status + year + arrow */}
            <div className="relative z-10 flex items-center gap-4 md:gap-8">
              <span className="hidden md:block text-xs text-fg/40 tracking-widest uppercase">
                {project.category}
              </span>

              {/* Blinking green dot — only for Even-Eye */}
              {project.inDevelopment && (
                <div className="flex items-center gap-1.5">
                  <motion.span
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block shrink-0"
                  />
                  <span className="text-xs text-green-400/60 tracking-wide hidden md:block">
                    In development
                  </span>
                </div>
              )}

              <span className="text-xs text-fg/30">{project.year}</span>

              <motion.span
                className="text-fg/30 text-lg"
                animate={{
                  x: hoveredId === project.id ? 0 : -8,
                  opacity: hoveredId === project.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                ↗
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View all button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 flex justify-center"
      >
        <button
          onClick={() => setModalOpen(true)}
          className="group flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-fg/40 hover:text-fg transition-colors duration-300 bg-transparent border-none cursor-pointer"
        >
          <span>View All Projects</span>
          <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
        </button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal box */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-lg bg-bg border border-fg/10 p-8"
            >
              {/* Modal header */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-xs tracking-[0.3em] uppercase text-fg/40">
                  All Projects
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="text-fg/40 hover:text-fg transition-colors duration-200 bg-transparent border-none cursor-pointer text-xl leading-none"
                >
                  ✕
                </button>
              </div>

              {/* Project list in modal */}
              <div className="flex flex-col">
                {projects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="group flex items-center justify-between py-4 border-b border-fg/10 last:border-none"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-fg/30">{project.id}</span>
                      <div className="flex flex-col gap-1">
                        <p className="text-sm text-fg font-light">{project.title}</p>
                        <p className="text-xs text-fg/30">{project.category}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Blinking dot in modal too */}
                      {project.inDevelopment && (
                        <div className="flex items-center gap-1.5">
                          <motion.span
                            animate={{ opacity: [1, 0.2, 1] }}
                            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                            className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block shrink-0"
                          />
                          <span className="text-xs text-green-400/60 tracking-wide">
                            In dev
                          </span>
                        </div>
                      )}
                      <button
                        onClick={() => project.link && window.open(project.link, '_blank')}
                        className="text-xs tracking-widest text-fg/40 hover:text-fg border border-fg/10 hover:border-fg/40 px-3 py-1.5 transition-all duration-200 bg-transparent cursor-pointer"
                      >
                        Visit ↗
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Modal footer */}
              <p className="text-xs text-fg/20 tracking-wide mt-8 text-center">
                {projects.length} projects total
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}