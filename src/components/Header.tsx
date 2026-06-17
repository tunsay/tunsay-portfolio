import { useEffect, useRef, useState } from 'react'
import './Header.scss'

const links = [
  { href: '#projects', label: 'Projets' },
  { href: '#skills', label: 'Compétences' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lastScroll = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY
      const prev = lastScroll.current

      if (current < 80) {
        setScrolled(false)
        setHidden(false)
      } else if (current > prev + 5) {
        setScrolled(true)
        setHidden(true)
      } else if (current < prev - 5) {
        setScrolled(true)
        setHidden(false)
      }

      lastScroll.current = current
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const headerClass = [
    'header',
    scrolled ? 'header--scrolled' : '',
    hidden ? 'header--hidden' : '',
  ].join(' ')

  return (
    <>
      <header className={headerClass}>
        <span className="header__name">Tuna Saygili</span>

        <nav className="header__nav">
          {links.map(l => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <button
          className={`header__burger ${mobileOpen ? 'is-open' : ''}`}
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </header>

      <div
        className={`mobile-menu ${mobileOpen ? 'is-open' : ''}`}
        onClick={() => setMobileOpen(false)}
      >
        <nav onClick={e => e.stopPropagation()}>
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms' }}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}

export default Header
