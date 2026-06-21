import { useState } from 'react'

const LINKS = [
  { href: '#characters', label: 'Characters' },
  { href: '#titans', label: 'Titans' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#worldmap', label: 'World Map' },
  { href: '#quiz', label: 'Quiz' },
  { href: '#community', label: 'Community' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-bg/90 backdrop-blur-md border-b border-border px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
          <a
            href="#hero"
            className="font-display text-[1.1rem] font-bold text-gold tracking-[0.15em] no-underline"
          >
            ⚔ THE WALLS
          </a>

          <ul className="hidden md:flex gap-8 list-none">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray no-underline text-[0.8rem] tracking-[0.12em] uppercase transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <span className="block w-6 h-[1.5px] bg-ink" />
            <span className="block w-6 h-[1.5px] bg-ink" />
            <span className="block w-6 h-[1.5px] bg-ink" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-bg/98 z-[99] flex flex-col items-center justify-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-ink no-underline font-display text-2xl tracking-[0.2em]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
