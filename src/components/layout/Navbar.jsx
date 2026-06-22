import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { to: '/characters', label: 'Characters' },
  { to: '/titans', label: 'Titans' },
  { to: '/timeline', label: 'Timeline' },
  { to: '/world-map', label: 'World Map' },
  { to: '/rumbling', label: 'The Rumbling' },
  { to: '/quiz', label: 'Quiz' },
  { to: '/community', label: 'Community' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-bg/90 backdrop-blur-md border-b border-border px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
          <Link
            to="/"
            data-cursor-hover
            className="font-display text-[1.1rem] font-bold text-gold tracking-[0.15em] no-underline"
          >
            ⚔ THE WALLS
          </Link>

          <ul className="hidden lg:flex gap-7 list-none">
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  data-cursor-hover
                  className={({ isActive }) =>
                    `relative text-[0.78rem] tracking-[0.12em] uppercase no-underline transition-colors ${
                      isActive ? 'text-gold' : 'text-gray hover:text-gold'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative pb-1">
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-0 right-0 -bottom-1 h-px bg-gold"
                        />
                      )}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className="lg:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <motion.span
              className="block w-6 h-[1.5px] bg-ink"
              animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="block w-6 h-[1.5px] bg-ink"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="block w-6 h-[1.5px] bg-ink"
              animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed top-16 left-0 right-0 bottom-0 bg-bg/98 z-[99] flex flex-col items-center justify-center gap-7"
          >
            {LINKS.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <NavLink
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `no-underline font-display text-2xl tracking-[0.15em] ${
                      isActive ? 'text-gold' : 'text-ink'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
