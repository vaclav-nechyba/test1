import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'O nás', href: '#o-nas' },
  { label: 'Epizody', href: '#epizody' },
  { label: 'Kde poslouchat', href: '#platformy' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-dark/95 backdrop-blur-md border-b border-gold/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group"
          aria-label="DUO Podcast — zpět nahoru"
        >
          <Logo className="h-10 w-auto" />
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-muted hover:text-white font-body font-medium text-sm px-4 py-2 rounded-lg
                           hover:bg-white/5 transition-all duration-200 tracking-wide"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick('#platformy')}
            className="btn-primary text-sm py-2.5 px-5"
          >
            <span>Poslouchat</span>
            <span className="text-navy-dark/60">→</span>
          </button>
        </div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden p-2 text-white/80 hover:text-gold transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-navy-dark/98 backdrop-blur-md border-t border-gold/10 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-muted hover:text-white font-body font-medium text-base px-4 py-3
                         rounded-xl hover:bg-white/5 transition-all duration-200 border border-transparent
                         hover:border-gold/10"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#platformy')}
            className="btn-primary mt-3 justify-center"
          >
            Poslouchat teď
          </button>
        </div>
      </div>
    </header>
  )
}
