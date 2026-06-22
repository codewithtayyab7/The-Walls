import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { getCharacters } from '../services/characterService'
import CharacterCard from '../components/ui/CharacterCard'
import SectionHeader from '../components/ui/SectionHeader'
import FadeIn from '../components/ui/FadeIn'
import AtmosphereBackground from '../components/ui/AtmosphereBackground'

const FILTERS = [
  'all',
  'Survey Corps',
  'Garrison',
  'Military Police',
  'Marley Warriors',
  'Titan Holder',
]

export default function CharactersList() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data)
      setLoading(false)
    })
  }, [])

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return characters.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(q) || c.regiment.toLowerCase().includes(q)
      const matchesFilter =
        filter === 'all' || (filter === 'Titan Holder' ? c.titan : c.regiment === filter)
      return matchesSearch && matchesFilter
    })
  }, [characters, search, filter])

  return (
    <div>
      <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <AtmosphereBackground variant="gold" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-[2] text-center pt-16"
        >
          <span className="block text-[0.65rem] tracking-[0.4em] text-gold uppercase mb-3">
            Soldier Registry
          </span>
          <h1 className="font-display text-[clamp(2rem,6vw,3.5rem)] font-bold text-ink">
            Character Encyclopedia
          </h1>
        </motion.div>
      </div>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="flex justify-center mb-8">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or regiment..."
              className="bg-card border border-border text-ink px-5 py-3 text-[0.85rem] w-full max-w-md outline-none transition-colors focus:border-gold placeholder:text-gray"
            />
          </FadeIn>

          <FadeIn className="flex gap-2 flex-wrap justify-center mb-10">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                data-cursor-hover
                className={`bg-transparent border px-5 py-2 text-[0.7rem] tracking-[0.12em] uppercase cursor-pointer transition-all ${
                  filter === f
                    ? 'border-gold text-gold bg-goldsoft'
                    : 'border-border text-gray hover:border-gold hover:text-gold hover:bg-goldsoft'
                }`}
              >
                {f === 'all' ? 'All' : f}
              </button>
            ))}
          </FadeIn>

          {loading ? (
            <p className="text-center text-gray text-sm">Loading registry…</p>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            >
              {filtered.map((c, i) => (
                <motion.div
                  key={c.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                >
                  <CharacterCard character={c} />
                </motion.div>
              ))}
              {filtered.length === 0 && (
                <p className="col-span-full text-center text-gray text-sm py-8">
                  No soldiers match that search.
                </p>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
