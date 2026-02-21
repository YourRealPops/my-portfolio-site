'use client'

export default function Footer() {
  const scrollToTop = () => {
    document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="px-4 md:px-6 py-6 md:py-8 border-t border-fg/10">
      <div className="max-w-6xl mx-auto flex flex-row items-center justify-between">

        {/* Left — name */}
        <span className="text-xs text-fg/30 tracking-widest uppercase">
          || Fehinti Adekoya ||
        </span>

        {/* Right — copyright + arrow */}
        <div className="flex items-center gap-3 md:gap-6">
          <span className="text-xs text-fg/20 tracking-wide">
            © {new Date().getFullYear()} — All rights reserved
          </span>

          {/* Back to top arrow */}
          <button
            onClick={scrollToTop}
            className="w-7 h-7 md:w-8 md:h-8 border border-fg/20 hover:border-fg/60 flex items-center justify-center text-fg/30 hover:text-fg transition-all duration-300 bg-transparent cursor-pointer text-xs"
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>

      </div>
    </footer>
  )
}