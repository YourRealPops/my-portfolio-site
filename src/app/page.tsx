'use client'

import { useState } from 'react'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Hero from './components/Hero'
import MarqueeStrip from './components/MarqueeStrip'
import Projects from './components/Projects'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <main>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <Projects />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}