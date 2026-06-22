import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AtmosphereBackground from '../components/ui/AtmosphereBackground'

function TitanFigure({ opacity, dissolving }) {
  return (
    <motion.svg
      viewBox="0 0 40 80"
      className="w-10 h-20 flex-shrink-0"
      style={{ opacity }}
      animate={dissolving ? { opacity: 0, y: 30, filter: 'blur(6px)' } : {}}
      transition={{ duration: 2.2, ease: 'easeIn' }}
    >
      <ellipse cx="20" cy="10" rx="8" ry="9" fill="#8B0000" />
      <rect x="12" y="18" width="16" height="22" rx="2" fill="#8B0000" />
      <rect x="4" y="19" width="7" height="3" rx="1" fill="#8B0000" />
      <rect x="29" y="19" width="7" height="3" rx="1" fill="#8B0000" />
      <rect x="13" y="40" width="5" height="24" rx="2" fill="#8B0000" />
      <rect x="22" y="40" width="5" height="24" rx="2" fill="#8B0000" />
    </motion.svg>
  )
}

// Dust particle field used for the dissolve stage — original, abstract, no figures.
function DustField({ active }) {
  const particles = useMemo(
    () =>
      Array.from({ length: 60 }, () => ({
        x: Math.random() * 100,
        delay: Math.random() * 1.5,
        size: 1 + Math.random() * 3,
        drift: -40 - Math.random() * 60,
      })),
    []
  )

  if (!active) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gold/40"
          style={{ left: `${p.x}%`, bottom: 0, width: p.size, height: p.size }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.8, 0], y: p.drift * 4 }}
          transition={{ duration: 4, delay: p.delay, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}
    </div>
  )
}

const STAGES = {
  MARCHING: 'marching',
  STILLING: 'stilling',
  DISSOLVING: 'dissolving',
  AFTERMATH: 'aftermath',
}

export default function RumblingPage() {
  const [stage, setStage] = useState(STAGES.MARCHING)
  const [count, setCount] = useState(0)

  const figures = useMemo(
    () => Array.from({ length: 40 }, () => 0.3 + Math.random() * 0.5),
    []
  )

  useEffect(() => {
    if (stage !== STAGES.MARCHING) return
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 50 + 10))
    }, 1000)
    return () => clearInterval(interval)
  }, [stage])

  const triggerStop = () => {
    if (stage !== STAGES.MARCHING) return
    setStage(STAGES.STILLING)
    setTimeout(() => setStage(STAGES.DISSOLVING), 1800)
    setTimeout(() => setStage(STAGES.AFTERMATH), 4400)
  }

  const reset = () => {
    setStage(STAGES.MARCHING)
    setCount(0)
  }

  return (
    <div>
      <div
        className="relative overflow-hidden flex items-center justify-center"
        style={{ background: '#0a0000', minHeight: '70vh' }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, #0a0000 0%, #1a0505 40%, #0a0000 100%)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{ background: 'linear-gradient(180deg, transparent, #1a0505)' }}
        />

        <DustField active={stage === STAGES.DISSOLVING || stage === STAGES.AFTERMATH} />

        {stage !== STAGES.AFTERMATH && (
          <motion.div
            className="absolute bottom-[60px] left-0 right-0 flex gap-5 w-max"
            animate={
              stage === STAGES.MARCHING
                ? { x: [0, '-50%'] }
                : {}
            }
            transition={
              stage === STAGES.MARCHING
                ? { duration: 8, repeat: Infinity, ease: 'linear' }
                : {}
            }
          >
            {[...figures, ...figures].map((op, i) => (
              <TitanFigure key={i} opacity={op} dissolving={stage === STAGES.DISSOLVING} />
            ))}
          </motion.div>
        )}

        <div className="relative z-[2] text-center px-4">
          <AnimatePresence mode="wait">
            {stage === STAGES.MARCHING && (
              <motion.div key="marching" exit={{ opacity: 0 }}>
                <motion.h1
                  className="font-display text-[clamp(2rem,8vw,5rem)] font-black text-blood tracking-[0.1em] [text-shadow:0_0_40px_rgba(139,0,0,0.5)]"
                  animate={{ x: [0, -3, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  THE RUMBLING
                </motion.h1>
                <div className="text-[0.85rem] tracking-[0.3em] text-blood/70 mt-2 uppercase">
                  The Founding Titan Marches
                </div>
                <div className="font-display text-lg text-gold mt-6 tracking-[0.2em]">
                  Titans Deployed: {count.toLocaleString()}
                </div>
                <button
                  onClick={triggerStop}
                  data-cursor-hover
                  className="mt-10 bg-transparent text-gold font-display text-[0.72rem] font-semibold tracking-[0.2em] px-7 py-3 border border-gold/60 cursor-pointer transition-all hover:bg-goldsoft hover:border-gold uppercase"
                >
                  Make a Stand — End It
                </button>
              </motion.div>
            )}

            {stage === STAGES.STILLING && (
              <motion.div
                key="stilling"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h2 className="font-display text-3xl md:text-4xl text-ink tracking-wide">
                  A choice is made.
                </h2>
                <p className="text-gray text-sm mt-4 tracking-wide">The march falters.</p>
              </motion.div>
            )}

            {stage === STAGES.DISSOLVING && (
              <motion.div
                key="dissolving"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h2 className="font-display text-3xl md:text-4xl text-gold tracking-wide">
                  The Titans return to dust.
                </h2>
                <p className="text-gray text-sm mt-4 tracking-wide">
                  Four years of power, undone in moments.
                </p>
              </motion.div>
            )}

            {stage === STAGES.AFTERMATH && (
              <motion.div
                key="aftermath"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h2 className="font-display text-4xl md:text-5xl text-ink tracking-wide mb-4">
                  The Rumbling Has Ended
                </h2>
                <p className="text-gray text-[0.9rem] leading-loose max-w-md mx-auto mb-8">
                  What remains is silence, and a world left to decide what
                  comes next. Humanity's chains are broken — at a cost no
                  victory can undo.
                </p>
                <button
                  onClick={reset}
                  data-cursor-hover
                  className="bg-gold text-bg font-display text-[0.72rem] font-bold tracking-[0.15em] px-7 py-3 cursor-pointer transition-all hover:bg-[#d4b455] uppercase"
                >
                  Replay
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <section className="py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="block text-[0.65rem] tracking-[0.4em] text-gold uppercase mb-3">
            The Founding Titan's Power
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-6">
            What Was The Rumbling?
          </h2>
          <p className="text-gray leading-loose text-[0.9rem]">
            The Rumbling is the Founding Titan's ultimate ability — commanding
            every Colossal-class Wall Titan entombed within Paradis's walls to
            awaken and march. Eren Yeager activated it as both a declaration
            of war and an act of liberation, ending humanity's four-year
            countdown at a cost the survivors would spend the rest of their
            lives reckoning with.
          </p>
        </div>
      </section>
    </div>
  )
}
