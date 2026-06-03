'use client'

import Marquee from 'react-fast-marquee'

const items = [
  'Creative Development',
  'Web Design',
  'Flask.py',
  'Tech Mentor',
  'Next.js',
  'Framer Motion',
  'Tailwind CSS',
  'Express.js',
  'MongoDB',
  'AI Applications',
  'Go-lang',
  'Next.js',
]

export default function MarqueeStrip() {
  return (
    <div className="flex flex-col gap-0 border-t border-b border-fg/10">
      {/* Row 1 — left to right */}
      <div className="py-4 border-b border-fg/5">
        <Marquee speed={40} gradient={false} pauseOnHover>
          {items.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="text-sm tracking-[0.2em] uppercase text-fg/50 hover:text-fg transition-colors duration-300 cursor-default">
                {item}
              </span>
              <span className="mx-8 text-accent">·</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* Row 2 — right to left */}
      <div className="py-4">
        <Marquee speed={40} gradient={false} pauseOnHover direction="right">
          {items.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="text-sm tracking-[0.2em] uppercase text-fg/40 hover:text-fg transition-colors duration-300 cursor-default italic">
                {item}
              </span>
              <span className="mx-8 text-accent/50">·</span>
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  )
}