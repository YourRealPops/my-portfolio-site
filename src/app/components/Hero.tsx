'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 1.5,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-end px-4 md:px-6 pb-12 md:pb-16 overflow-hidden"
    >
      {/* Top-right label */}
      <motion.p
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="absolute top-20 right-4 md:right-6 text-xs tracking-[0.3em] uppercase text-fg/40"
      >
        Creative Developer
      </motion.p>

      {/* Mobile photo */}
      <motion.div
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="md:hidden w-24 h-32 rounded-2xl border border-accent/30 overflow-hidden mb-4 shrink-0 relative"
      >
        <Image
          src="/images/hero-photo.PNG"
          alt="Fehinti"
          fill
          className="object-cover object-center"
        />
      </motion.div>

      {/* Main heading */}
      <div className="flex flex-col gap-0 leading-none">
        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[18vw] md:text-[9vw] font-light tracking-tight text-fg uppercase"
        >
          Fehinti
        </motion.h1>

        <div className="flex items-center gap-3 md:gap-6">
          <motion.h1
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[18vw] md:text-[9vw] font-light tracking-tight text-fg uppercase"
          >
            Adekoya
          </motion.h1>

          {/* Desktop photo */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="hidden md:block w-[16vw] h-[20vw] rounded-3xl border border-accent/30 overflow-hidden shrink-0 relative"
          >
            <Image
              src="/images/hero-photo.PNG"
              alt="Fehinti"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex items-end justify-between mt-6 md:mt-8">
        <motion.p
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xs md:text-sm text-fg/50 tracking-wide max-w-[200px] md:max-w-xs leading-relaxed"
        >
          Crafting digital experiences that live at the intersection of design and technology.
        </motion.p>

        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-fg/30">Scroll</span>
          <motion.div
            className="w-px h-8 md:h-12 bg-fg/20 origin-top"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      {/* Background grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-fg/5" />
        <div className="absolute left-2/3 top-0 bottom-0 w-px bg-fg/5" />
      </div>
    </section>
  )
}