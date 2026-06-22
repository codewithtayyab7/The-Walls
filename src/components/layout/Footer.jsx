import { Link } from 'react-router-dom'

const COLUMNS = [
  {
    title: 'Explore',
    links: [
      { to: '/characters', label: 'Characters' },
      { to: '/titans', label: 'Titans' },
      { to: '/timeline', label: 'Timeline' },
      { to: '/world-map', label: 'World Map' },
    ],
  },
  {
    title: 'Features',
    links: [
      { to: '/quiz', label: 'Personality Quiz' },
      { to: '/rumbling', label: 'The Rumbling' },
      { to: '/community', label: 'Community' },
    ],
  },
  {
    title: 'About',
    links: [
      { to: '/about', label: 'About Site' },
      { to: '/disclaimer', label: 'Disclaimer' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-bg2 border-t border-border px-4 md:px-8 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-12">
        <div className="col-span-2 md:col-span-1">
          <div className="font-display text-base text-gold font-bold tracking-[0.1em] mb-3">
            ⚔ THE WALLS
          </div>
          <p className="text-[0.8rem] text-gray leading-relaxed">
            The ultimate Attack on Titan digital experience. Explore
            characters, lore, titans, and the complete history of the world
            beyond the walls.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h5 className="font-display text-[0.75rem] tracking-[0.2em] text-ink uppercase mb-4">
              {col.title}
            </h5>
            <ul className="list-none grid gap-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-gray no-underline text-[0.8rem] transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-center text-[0.75rem] text-gray">
        <span>© 2025 The Walls — A fan tribute. Attack on Titan © Hajime Isayama / Kodansha.</span>
        <span className="font-serif italic text-gold">
          "If you win, you live. If you lose, you die."
        </span>
      </div>
    </footer>
  )
}
