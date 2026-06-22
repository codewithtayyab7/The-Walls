import { useState } from 'react'
import { motion } from 'framer-motion'
import { EVENTS } from '../data/timeline'
import useDragScroll from '../hooks/useDragScroll'
import FadeIn from '../components/ui/FadeIn'
import AtmosphereBackground from '../components/ui/AtmosphereBackground'

export default function TimelinePage() {
  const [activeIndex, setActiveIndex] = useState(null)
  const scrollRef = useDragScroll()

  return (
    <div>
      <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <AtmosphereBackground variant="wall" showRidge />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-[2] text-center pt-16"
        >
          <span className="block text-[0.65rem] tracking-[0.4em] text-gold uppercase mb-3">
            History of the Walls
          </span>
          <h1 className="font-display text-[clamp(2rem,6vw,3.5rem)] font-bold text-ink">
            Interactive Timeline
          </h1>
        </motion.div>
      </div>

      <section className="py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <p className="text-center text-gray text-[0.8rem] mb-10 tracking-wide">
            ← Drag to explore two thousand years of history →
          </p>
        </div>

        <div ref={scrollRef} className="timeline-scroll overflow-x-auto pb-8">
          <div className="timeline-line relative flex items-start gap-0 min-w-max px-8 py-8">
            {EVENTS.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`t-event relative w-[200px] flex-shrink-0 cursor-pointer ${
                  activeIndex === i ? 'active' : ''
                }`}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              >
                <div className="font-display text-[0.7rem] text-gold text-center tracking-wide mb-2">
                  {e.year}
                </div>
                <div className="t-dot" />
                <div className="font-display text-[0.75rem] font-semibold text-ink text-center px-2 leading-snug">
                  {e.title}
                </div>

                {activeIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="t-popup absolute top-20 left-1/2 -translate-x-1/2 bg-card border border-gold p-4 w-[220px] z-10 text-[0.78rem] text-gray leading-relaxed"
                  >
                    <div className="inline-block text-[0.6rem] text-gold tracking-wide border border-gold px-1.5 py-0.5 mb-2">
                      {e.arc}
                    </div>
                    <div className="font-display text-ink text-[0.8rem] mb-2">{e.title}</div>
                    {e.desc}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <FadeIn className="max-w-3xl mx-auto px-4 mt-16">
          <h2 className="font-display text-[0.75rem] tracking-[0.2em] text-gold uppercase mb-6 text-center">
            Full Chronicle
          </h2>
          <div className="space-y-4">
            {EVENTS.map((e) => (
              <div key={e.title} className="bg-card border border-border p-5 flex gap-4">
                <div className="font-display text-gold text-sm whitespace-nowrap w-28 flex-shrink-0">
                  {e.year}
                </div>
                <div>
                  <div className="font-display text-ink text-sm font-semibold mb-1">{e.title}</div>
                  <div className="text-gray text-[0.82rem] leading-relaxed">{e.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
