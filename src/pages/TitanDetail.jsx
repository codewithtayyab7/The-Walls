import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getTitanBySlug } from '../services/titanService'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import StatBar from '../components/ui/StatBar'
import Breadcrumb from '../components/ui/Breadcrumb'
import FadeIn from '../components/ui/FadeIn'
import AtmosphereBackground from '../components/ui/AtmosphereBackground'
import NotFound from './NotFound'

export default function TitanDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [titan, setTitan] = useState(undefined)

  useEffect(() => {
    setTitan(undefined)
    getTitanBySlug(slug).then(setTitan)
  }, [slug])

  if (titan === undefined) {
    return <div className="min-h-[60vh]" />
  }

  if (!titan) {
    return <NotFound />
  }

  const t = titan

  return (
    <div>
      <div className="relative pt-32 pb-16 px-4 md:px-8 overflow-hidden">
        <AtmosphereBackground variant="blood" />

        <div className="relative z-[2] max-w-5xl mx-auto">
          <Breadcrumb
            trail={[
              { to: '/', label: 'Home' },
              { to: '/titans', label: 'Titans' },
              { label: t.name },
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
                src={t.image}
                alt={t.name}
                dimensions="900×700"
                emoji={t.emoji}
                className="w-full h-64 border border-border"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-2">
                {t.name}
              </h1>
              <p className="text-gold text-sm tracking-wide mb-6">
                One of the Nine Titans
              </p>

              <div className="grid grid-cols-2 gap-4 text-[0.8rem]">
                <div>
                  <div className="text-gray text-[0.68rem] tracking-wide uppercase mb-0.5">Height</div>
                  <div className="text-ink">{t.height}</div>
                </div>
                <div>
                  <div className="text-gray text-[0.68rem] tracking-wide uppercase mb-0.5">First Appearance</div>
                  <div className="text-ink">{t.firstAppearance}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 pb-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-10">
            <FadeIn>
              <h2 className="font-display text-[0.8rem] tracking-[0.2em] text-gold uppercase mb-3">
                Overview
              </h2>
              <p className="text-gray leading-loose text-[0.92rem]">{t.desc}</p>
            </FadeIn>

            <FadeIn>
              <h2 className="font-display text-[0.8rem] tracking-[0.2em] text-gold uppercase mb-3">
                Detailed Lore
              </h2>
              <p className="text-gray leading-loose text-[0.92rem]">{t.detailedLore}</p>
            </FadeIn>

            <FadeIn>
              <h2 className="font-display text-[0.8rem] tracking-[0.2em] text-gold uppercase mb-4">
                Signature Abilities
              </h2>
              <div className="grid gap-3">
                {t.abilities?.map((a) => (
                  <div key={a} className="bg-card border border-border p-4 flex items-center gap-3">
                    <span className="text-blood text-lg">⬢</span>
                    <span className="text-[0.85rem] text-ink">{a}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <h2 className="font-display text-[0.8rem] tracking-[0.2em] text-gold uppercase mb-4">
                Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {t.gallery?.map((g, i) => (
                  <PlaceholderImage
                    key={g}
                    src={g}
                    alt={`${t.name} gallery ${i + 1}`}
                    dimensions="900×700"
                    emoji="🖼"
                    className="aspect-video"
                  />
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="space-y-8">
            <FadeIn>
              <h2 className="font-display text-[0.75rem] tracking-[0.2em] text-gold uppercase mb-4">
                Power Profile
              </h2>
              <div className="bg-card border border-border p-5 space-y-4">
                <StatBar label="Power" value={t.stats.power} />
                <StatBar label="Speed" value={t.stats.speed} />
                <StatBar label="Intel" value={t.stats.intel} />
              </div>
            </FadeIn>

            <FadeIn>
              <h2 className="font-display text-[0.75rem] tracking-[0.2em] text-gold uppercase mb-4">
                Known Holders
              </h2>
              <div className="space-y-2">
                {t.holders.map((h) => (
                  <div key={h} className="bg-card border border-border p-3 text-sm text-ink">
                    {h}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn className="mt-16 text-center">
          <button
            onClick={() => navigate('/titans')}
            data-cursor-hover
            className="text-gold text-[0.78rem] tracking-[0.15em] uppercase border-b border-gold/40 hover:border-gold transition-colors"
          >
            ← Back to Encyclopedia
          </button>
        </FadeIn>
      </div>
    </div>
  )
}
