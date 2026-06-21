import { useEffect, useMemo, useState } from 'react'
import { getCharacters } from '../../services/characterService'
import CharacterCard from '../ui/CharacterCard'
import CharacterModal from '../ui/CharacterModal'
import SectionHeader from '../ui/SectionHeader'
import FadeIn from '../ui/FadeIn'

const FILTERS = [
  'all',
  'Survey Corps',
  'Garrison',
  'Military Police',
  'Marley Warriors',
  'Titan Holder',
]

export default function Characters() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [activeChar, setActiveChar] = useState(null)

  // Goes through the service layer so this becomes a real fetch with zero
  // changes here once the Express API exists.
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
    <section id="characters" className="py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader eyebrow="Soldier Registry" title="Character Encyclopedia" />
        </FadeIn>

        <FadeIn className="flex justify-center mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or regiment..."
            className="bg-card border border-border text-ink px-5 py-3 text-[0.85rem] w-full max-w-md outline-none transition-colors focus:border-gold placeholder:text-gray"
          />
        </FadeIn>

        <FadeIn className="flex gap-2 flex-wrap justify-center mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filtered.map((c) => (
              <CharacterCard key={c.id} character={c} onClick={() => setActiveChar(c)} />
            ))}
            {filtered.length === 0 && (
              <p className="col-span-full text-center text-gray text-sm py-8">
                No soldiers match that search.
              </p>
            )}
          </div>
        )}
      </div>

      <CharacterModal character={activeChar} onClose={() => setActiveChar(null)} />
    </section>
  )
}
