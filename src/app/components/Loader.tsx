'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LoaderProps {
  onComplete: () => void
}

const fullText = 'I am Fehinti, a full-stack developer and coding mentor. Welcome to my portfolio.'

export default function Loader({ onComplete }: LoaderProps) {
  const [phase, setPhase] = useState<'bracket' | 'text' | 'exit'>('bracket')
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    if (phase !== 'text') return

    let i = 0
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1))
      i++
      if (i >= fullText.length) {
        clearInterval(interval)
        setTimeout(() => setPhase('exit'), 1200)
      }
    }, 35)

    return () => clearInterval(interval)
  }, [phase])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase !== 'exit' && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
        >
          <div className="flex items-center justify-center px-12">

            {/* Opening bracket */}
            <motion.span
              className="text-6xl font-light text-accent select-none shrink-0 self-stretch flex items-center"
              initial={{ scaleY: 0.1, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              onAnimationComplete={() => {
                if (phase === 'bracket') {
                  setTimeout(() => setPhase('text'), 400)
                }
              }}
            >
              [
            </motion.span>

            {/* Content — naturally sized, no flex-1 */}
            <div className="flex items-center py-5 px-3">

              {/* Hello */}
              <AnimatePresence>
                {phase === 'bracket' && (
                  <motion.span
                    key="hello"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-5xl font-light text-fg whitespace-nowrap"
                  >
                    Hello
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Typed text — fixed width so it wraps and bracket hugs it */}
              {phase === 'text' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-base font-light text-fg/80 leading-relaxed"
                  style={{ width: '280px' }}
                >
                  {displayedText}
                  {displayedText.length < fullText.length && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="inline-block w-0.5 h-4 bg-accent ml-0.5 align-middle"
                    />
                  )}
                </motion.p>
              )}
            </div>

            {/* Closing bracket */}
            <motion.span
              className="text-6xl font-light text-accent select-none shrink-0 self-stretch flex items-center"
              initial={{ scaleY: 0.1, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              ]
            </motion.span>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}