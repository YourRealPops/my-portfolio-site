'use client'

export default function Footer() {
  const scrollToTop = () => {
    document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="px-4 md:px-6 py-6 md:py-8 border-t border-fg/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <span className="text-xs text-fg/20 tracking-widest uppercase">
          || Fehinti Adekoya ||
        </span>

        <span className="text-xs text-fg/20 tracking-wide">
          © {new Date().getFullYear()} — All rights reserved
        </span>

        <button
          onClick={scrollToTop}
          className="text-xs text-fg/20 hover:text-fg transition-colors duration-300 tracking-widest uppercase bg-transparent border-none cursor-pointer"
        >
          Back to top ↑
        </button>

      </div>
    </footer>
  )
}