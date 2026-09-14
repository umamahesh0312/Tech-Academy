import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#programs', label: 'Training Programs' },
  { href: '#why-us', label: 'Why Choose Us' },
  { href: '#partners', label: 'Our Partners' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand">
          <span className="navbar__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="30" height="30">
              <rect x="2" y="18" width="6" height="12" rx="1" fill="var(--cyan)" />
              <rect x="13" y="10" width="6" height="20" rx="1" fill="var(--royal)" />
              <rect x="24" y="4" width="6" height="26" rx="1" fill="var(--navy)" />
            </svg>
          </span>
          <span className="navbar__name">Srinath Tech Academy</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <a href="#contact" className="btn btn--primary navbar__cta">Partner With Us</a>

        <button
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className="btn btn--primary" onClick={() => setOpen(false)}>Partner With Us</a>
        </div>
      )}
    </header>
  )
}
