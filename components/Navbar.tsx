'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sun } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-xl shadow-sm shadow-outline-variant/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-brand-green rounded-full flex items-center justify-center shadow-lg shadow-brand-green/30 group-hover:scale-110 transition-transform">
            <Sun className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-black text-on-surface tracking-tight">
            GT Solar<span className="text-brand-green">PH</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-on-surface-variant hover:text-brand-green transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="bg-brand-green hover:bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 hover:shadow-lg hover:shadow-brand-green/30 active:scale-95"
          >
            Get Free Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-outline-variant/20 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-base font-semibold text-on-surface hover:text-brand-green transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block w-full bg-brand-green text-white text-center px-6 py-3 rounded-full font-bold mt-4 active:scale-95 transition-transform"
            onClick={() => setMobileOpen(false)}
          >
            Get Free Quote
          </a>
        </div>
      )}
    </nav>
  )
}
