import { useState } from 'react'
import { motion } from 'framer-motion'
import { LOCATIONS } from '../data/locations'
import FadeIn from '../components/ui/FadeIn'
import AtmosphereBackground from '../components/ui/AtmosphereBackground'

export default function WorldMapPage() {
  const [selected, setSelected] = useState(null)
  const loc = selected ? LOCATIONS[selected] : null

  const regionClass = (id) =>
    `cursor-pointer transition-all duration-300 ${
      selected === id ? 'fill-scout stroke-gold' : 'fill-card stroke-border hover:fill-green hover:stroke-gold'
    }`

  return (
    <div>
      <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <AtmosphereBackground variant="default" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-[2] text-center pt-16"
        >
          <span className="block text-[0.65rem] tracking-[0.4em] text-gold uppercase mb-3">
            Explore the World
          </span>
          <h1 className="font-display text-[clamp(2rem,6vw,3.5rem)] font-bold text-ink">
            World Map
          </h1>
        </motion.div>
      </div>

      <section className="py-16 px-4 md:px-8">
        <FadeIn className="relative max-w-3xl mx-auto">
          <svg viewBox="0 0 900 500" className="w-full h-auto">
            <ellipse
              className={regionClass('paradis')}
              cx="450" cy="280" rx="220" ry="160" strokeWidth="1.5"
              onClick={() => setSelected('paradis')}
              data-cursor-hover
            />
            <ellipse
              className={regionClass('wall-maria')}
              cx="450" cy="280" rx="180" ry="125" fill="none" strokeWidth="1.5" strokeDasharray="6 3"
              onClick={() => setSelected('wall-maria')}
              data-cursor-hover
            />
            <ellipse
              className={regionClass('wall-rose')}
              cx="450" cy="280" rx="130" ry="88" fill="none" strokeWidth="1.5" strokeDasharray="6 3"
              onClick={() => setSelected('wall-rose')}
              data-cursor-hover
            />
            <ellipse
              className={regionClass('wall-sina')}
              cx="450" cy="280" rx="80" ry="55" strokeWidth="1.5"
              onClick={() => setSelected('wall-sina')}
              data-cursor-hover
            />
            <rect
              className={regionClass('shiganshina')}
              x="418" y="393" width="64" height="32" rx="4" strokeWidth="1.5"
              onClick={() => setSelected('shiganshina')}
              data-cursor-hover
            />
            <ellipse
              className={regionClass('liberio')}
              cx="180" cy="200" rx="90" ry="60" strokeWidth="1.5"
              onClick={() => setSelected('liberio')}
              data-cursor-hover
            />

            <text className="font-display fill-gray text-[11px] pointer-events-none" x="450" y="278" textAnchor="middle">Paradis Island</text>
            <text className="font-display fill-border text-[9px] pointer-events-none" x="450" y="300" textAnchor="middle">Wall Maria · Wall Rose · Wall Sina</text>
            <text className="font-display fill-gray text-[9px] pointer-events-none" x="450" y="420" textAnchor="middle">Shiganshina</text>
            <text className="font-display fill-gray text-[11px] pointer-events-none" x="180" y="197" textAnchor="middle">Liberio</text>
            <text className="font-display fill-gray text-[9px] pointer-events-none" x="180" y="213" textAnchor="middle">(Marley)</text>

            <text className="font-display text-[13px]" fill="#1a3a4a" x="730" y="280" textAnchor="middle">Sea</text>
            <text className="font-display text-[13px]" fill="#1a3a4a" x="730" y="300" textAnchor="middle">of</text>
            <text className="font-display text-[13px]" fill="#1a3a4a" x="730" y="320" textAnchor="middle">Paradis</text>
            <text className="font-display text-[13px]" fill="#1a3a4a" x="120" y="380" textAnchor="middle">Marleyan</text>
            <text className="font-display text-[13px]" fill="#1a3a4a" x="120" y="400" textAnchor="middle">Mainland</text>
          </svg>

          <motion.div
            key={selected || 'empty'}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border p-6 mt-6 min-h-[100px]"
          >
            {loc ? (
              <>
                <div className="font-display text-[1.1rem] text-gold mb-2">{loc.name}</div>
                <div className="text-[0.85rem] text-gray leading-relaxed">{loc.desc}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {loc.events.map((e) => (
                    <span key={e} className="text-[0.62rem] border border-border px-2 py-1 text-gray tracking-wide">
                      {e}
                    </span>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="font-display text-[1.1rem] text-gold mb-2">Select a region to explore</div>
                <div className="text-[0.85rem] text-gray leading-relaxed">
                  Click on any location on the map to learn about its history, key events, and significance in the story.
                </div>
              </>
            )}
          </motion.div>
        </FadeIn>
      </section>
    </div>
  )
}
