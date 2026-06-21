import { useState } from 'react'
import { EVENTS } from '../../data/timeline'
import useDragScroll from '../../hooks/useDragScroll'
import SectionHeader from '../ui/SectionHeader'
import FadeIn from '../ui/FadeIn'

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(null)
  const scrollRef = useDragScroll()

  return (
    <section id="timeline" className="py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader eyebrow="History of the Walls" title="Interactive Timeline" />
        </FadeIn>

        <p className="text-center text-gray text-[0.8rem] mb-6 tracking-wide">
          ← Drag to explore history →
        </p>

        <div ref={scrollRef} className="timeline-scroll overflow-x-auto pb-8">
          <div className="timeline-line relative flex items-start gap-0 min-w-max px-8 py-8">
            {EVENTS.map((e, i) => (
              <div
                key={e.title}
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
                  <div className="t-popup absolute top-20 left-1/2 -translate-x-1/2 bg-card border border-gold p-4 w-[220px] z-10 text-[0.78rem] text-gray leading-relaxed">
                    <div className="inline-block text-[0.6rem] text-gold tracking-wide border border-gold px-1.5 py-0.5 mb-2">
                      {e.arc}
                    </div>
                    <div className="font-display text-ink text-[0.8rem] mb-2">{e.title}</div>
                    {e.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
