'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = 'service_hcaf9ku'
const EMAILJS_TEMPLATE_ID = 'template_avqetda'
const EMAILJS_PUBLIC_KEY = 'jFbZlqqnGDjDUWMIZ'

const socials = [
  { label: 'GitHub', href: 'https://github.com/YourRealPops' },
  { label: 'LinkedIn', href: 'http://linkedin.com/in/emmanuel-adekoya-b4816b22b' },
  { label: 'Twitter', href: 'https://twitter.com/itsfehinti' },
  { label: 'Instagram', href: 'https://instagram.com/yourrealpops' },
]

function Clock() {
  const [time, setTime] = useState('--:--')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Africa/Lagos',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      )
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <p className="text-xs text-fg/20 tracking-widest font-light tabular-nums">
      WAT {time}
    </p>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="px-4 md:px-6 py-16 md:py-32 border-t border-fg/10">
      <div ref={ref} className="max-w-6xl mx-auto">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] uppercase text-fg/40 mb-12"
        >
          Get In Touch
        </motion.p>

        {/* Big heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          className="text-[12vw] md:text-[8vw] font-light text-fg leading-none tracking-tight mb-10 md:mb-16"
        >
          Let&apos;s work
          <br />
          <span className="text-fg/30">together.</span>
        </motion.h2>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

          {/* Left — direct contact + socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            {/* Email */}
            <div className="flex flex-col gap-2">
              <p className="text-xs tracking-[0.3em] uppercase text-fg/30">
                Or reach me directly
              </p>
              <button
                onClick={() => { window.location.href = 'mailto:your@email.com' }}
                className="inline-flex items-center gap-3 text-base md:text-lg text-fg/60 hover:text-fg transition-colors duration-300 bg-transparent cursor-pointer border-b border-fg/20 hover:border-fg/60 pb-1 w-fit"
                style={{ borderLeft: 'none', borderRight: 'none', borderTop: 'none' }}
              >
                adekoyafehinti@gmail.com
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  ↗
                </motion.span>
              </button>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3">
              <p className="text-xs tracking-[0.3em] uppercase text-fg/30">
                Find me on
              </p>
              <div className="flex flex-wrap gap-6">
                {socials.map((social) => (
                  <button
                    key={social.label}
                    onClick={() => window.open(social.href, '_blank')}
                    className="text-xs tracking-wide text-fg/40 hover:text-fg transition-colors duration-300 bg-transparent border-none cursor-pointer"
                  >
                    {social.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Location + clock */}
            <div className="flex flex-col gap-1">
              <p className="text-xs text-fg/30 tracking-wide">Lagos, Nigeria</p>
              <Clock />
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">

              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-[0.2em] uppercase text-fg/30">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="bg-transparent border-b border-fg/20 focus:border-fg/60 outline-none text-sm text-fg py-3 placeholder:text-fg/20 transition-colors duration-300 w-full"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-[0.2em] uppercase text-fg/30">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="bg-transparent border-b border-fg/20 focus:border-fg/60 outline-none text-sm text-fg py-3 placeholder:text-fg/20 transition-colors duration-300 w-full"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-[0.2em] uppercase text-fg/30">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="bg-transparent border-b border-fg/20 focus:border-fg/60 outline-none text-sm text-fg py-3 placeholder:text-fg/20 transition-colors duration-300 resize-none w-full"
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="self-start flex items-center gap-3 text-xs tracking-[0.3em] uppercase border border-fg/20 hover:border-fg/60 text-fg/60 hover:text-fg px-6 py-3 transition-all duration-300 cursor-pointer bg-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="inline-block w-3 h-3 border border-fg/40 border-t-fg rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    'Send Message →'
                  )}
                </button>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs tracking-wide text-green-400"
                  >
                    ✓ Message sent! I will get back to you soon.
                  </motion.p>
                )}

                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs tracking-wide text-red-400"
                  >
                    ✕ Something went wrong. Please try again.
                  </motion.p>
                )}
              </div>

            </form>
          </motion.div>
        </div>

      </div>
    </section>
  )
}