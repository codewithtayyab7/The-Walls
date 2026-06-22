import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getCharacterBySlug } from '../services/characterService'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import StatBar from '../components/ui/StatBar'
import Breadcrumb from '../components/ui/Breadcrumb'
import FadeIn from '../components/ui/FadeIn'
import AtmosphereBackground from '../components/ui/AtmosphereBackground'
import NotFound from './NotFound'

const STATUS_STYLES = {
  alive: 'text-green-500 border-green-500',
  deceased: 'text-blood border-blood',
  unknown: 'text-gray border-gray',
}

export default function CharacterDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [character, setCharacter] = useState(undefined)

  useEffect(() => {
    setCharacter(undefined)
    getCharacterBySlug(slug).then(setCharacter)
  }, [slug])

  if (character === undefined) {
    return <div className="min-h-[60vh]" />
  }

  if (!character) {
    return <NotFound />
  }

  const c = character

  return (
    <div>
      {/* HEADER */}
      <div className="relative pt-32 pb-16 px-4 md:px-8 overflow-hidden">
        <AtmosphereBackground variant={c.titan ? 'blood' : 'default'} />

        <div className="relative z-[2] max-w-5xl mx-auto">
          <Breadcrumb
            trail={[
              { to: '/', label: 'Home' },
              { to: '/characters', label: 'Characters' },
              { label: c.name },
            ]}
          />

          <div className="flex flex-col md:flex-row gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-64 flex-shrink-0"
            >
              <PlaceholderImage
                src={c.image}
                alt={c.name}
                dimensions="600×800"
                emoji={c.emoji}
                className="w-full h-80 border border-border"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1"
            >
              <span
                className={`inline-block text-[0.62rem] tracking-[0.15em] uppercase px-3 py-1 border mb-4 ${STATUS_STYLES[c.status]}`}
              >
                {c.status}
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-2">
                {c.name}
              </h1>
              <p className="text-gold text-sm tracking-wide mb-6">{c.role}</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[0.8rem]">
                <Detail label="Regiment" value={c.regiment} />
                <Detail label="Age" value={c.age} />
                <Detail label="Height" value={c.height} />
                <Detail label="Birthplace" value={c.birthplace} />
                <Detail label="Voice (JP)" value={c.voiceActor?.jp} />
                <Detail label="Voice (EN)" value={c.voiceActor?.en} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 pb-24">
        {/* QUOTE */}
        <FadeIn className="border-l-2 border-gold pl-6 py-4 my-10 font-serif italic text-xl text-ink">
          {c.quote}
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-10">
            <FadeIn>
              <h2 className="font-display text-[0.8rem] tracking-[0.2em] text-gold uppercase mb-3">
                Biography
              </h2>
              <p className="text-gray leading-loose text-[0.92rem]">{c.bio}</p>
            </FadeIn>

            <FadeIn>
              <h2 className="font-display text-[0.8rem] tracking-[0.2em] text-gold uppercase mb-3">
                History
              </h2>
              <p className="text-gray leading-loose text-[0.92rem]">{c.history}</p>
            </FadeIn>

            <FadeIn>
              <h2 className="font-display text-[0.8rem] tracking-[0.2em] text-gold uppercase mb-4">
                Abilities
              </h2>
              <div className="grid gap-3">
                {c.abilities?.map((a) => (
                  <div key={a.name} className="bg-card border border-border p-4">
                    <div className="font-display text-sm font-semibold text-ink mb-1">
                      {a.name}
                    </div>
                    <div className="text-[0.8rem] text-gray leading-relaxed">{a.desc}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <h2 className="font-display text-[0.8rem] tracking-[0.2em] text-gold uppercase mb-4">
                Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {c.gallery?.map((g, i) => (
                  <PlaceholderImage
                    key={g}
                    src={g}
                    alt={`${c.name} gallery ${i + 1}`}
                    dimensions="800×600"
                    emoji="🖼"
                    className="aspect-square"
                  />
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <h2 className="font-display text-[0.8rem] tracking-[0.2em] text-gold uppercase mb-3">
                Major Battles
              </h2>
              <div className="flex flex-wrap gap-2">
                {c.battles.map((b) => (
                  <span
                    key={b}
                    className="text-[0.72rem] border border-border px-3 py-1.5 text-gray"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="space-y-8">
            <FadeIn>
              <h2 className="font-display text-[0.75rem] tracking-[0.2em] text-gold uppercase mb-4">
                Combat Stats
              </h2>
              <div className="bg-card border border-border p-5 space-y-4">
                {c.stats &&
                  Object.entries(c.stats).map(([key, val]) => (
                    <StatBar key={key} label={key} value={val} />
                  ))}
              </div>
            </FadeIn>

            <FadeIn>
              <h2 className="font-display text-[0.75rem] tracking-[0.2em] text-gold uppercase mb-4">
                Affiliations
              </h2>
              <div className="flex flex-wrap gap-2">
                {c.affiliation?.map((a) => (
                  <span key={a} className="text-[0.7rem] border border-border px-2.5 py-1 text-gray">
                    {a}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <h2 className="font-display text-[0.75rem] tracking-[0.2em] text-gold uppercase mb-4">
                Relationships
              </h2>
              <div className="space-y-2">
                {c.relationships?.map((r) =>
                  r.slug ? (
                    <Link
                      key={r.name}
                      to={`/characters/${r.slug}`}
                      data-cursor-hover
                      className="block bg-card border border-border p-3 transition-colors hover:border-gold"
                    >
                      <div className="text-sm text-ink font-medium">{r.name}</div>
                      <div className="text-[0.72rem] text-gray">{r.type}</div>
                    </Link>
                  ) : (
                    <div key={r.name} className="block bg-card/50 border border-border/50 p-3">
                      <div className="text-sm text-gray font-medium">{r.name}</div>
                      <div className="text-[0.72rem] text-gray/70">{r.type}</div>
                    </div>
                  )
                )}
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn className="mt-16 text-center">
          <button
            onClick={() => navigate('/characters')}
            data-cursor-hover
            className="text-gold text-[0.78rem] tracking-[0.15em] uppercase border-b border-gold/40 hover:border-gold transition-colors"
          >
            ← Back to Registry
          </button>
        </FadeIn>
      </div>
    </div>
  )
}

function Detail({ label, value }) {
  if (!value) return null
  return (
    <div>
      <div className="text-gray text-[0.68rem] tracking-wide uppercase mb-0.5">{label}</div>
      <div className="text-ink">{value}</div>
    </div>
  )
}
