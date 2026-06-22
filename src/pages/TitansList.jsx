import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getTitans } from '../services/titanService'
import TitanCard from '../components/ui/TitanCard'
import FadeIn from '../components/ui/FadeIn'
import AtmosphereBackground from '../components/ui/AtmosphereBackground'

export default function TitansList() {
  const [titans, setTitans] = useState([])

  useEffect(() => {
    getTitans().then(setTitans)
  }, [])

  return (
    <div>
      <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <AtmosphereBackground variant="blood" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-[2] text-center pt-16"
        >
          <span className="block text-[0.65rem] tracking-[0.4em] text-gold uppercase mb-3">
            The Nine Powers
          </span>
          <h1 className="font-display text-[clamp(2rem,6vw,3.5rem)] font-bold text-ink">
            Titan Encyclopedia
          </h1>
        </motion.div>
      </div>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {titans.map((t, i) => (
            <FadeIn key={t.slug} delay={i * 0.05}>
              <TitanCard titan={t} />
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  )
}
