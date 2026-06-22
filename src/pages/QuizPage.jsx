import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QUIZ_QUESTIONS, QUIZ_RESULTS } from '../data/quiz'
import AtmosphereBackground from '../components/ui/AtmosphereBackground'

function buildInitialScores() {
  return QUIZ_RESULTS.reduce((acc, r) => ({ ...acc, [r.char]: 0 }), {})
}

export default function QuizPage() {
  const [step, setStep] = useState(0)
  const [scores, setScores] = useState(buildInitialScores)
  const [selectedOpt, setSelectedOpt] = useState(null)

  const restart = () => {
    setStep(0)
    setScores(buildInitialScores())
    setSelectedOpt(null)
  }

  const selectOption = (opt, idx) => {
    setSelectedOpt(idx)
    setScores((prev) => ({ ...prev, [opt.points]: (prev[opt.points] || 0) + 1 }))
    setTimeout(() => {
      setSelectedOpt(null)
      setStep((s) => s + 1)
    }, 400)
  }

  const finished = step >= QUIZ_QUESTIONS.length
  const topChar = finished
    ? Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0]
    : null
  const result = QUIZ_RESULTS.find((r) => r.char === topChar) || QUIZ_RESULTS[0]

  const pct = Math.round((step / QUIZ_QUESTIONS.length) * 100)
  const question = !finished ? QUIZ_QUESTIONS[step] : null

  return (
    <div>
      <div className="relative h-64 md:h-72 flex items-center justify-center overflow-hidden">
        <AtmosphereBackground variant="gold" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-[2] text-center pt-16"
        >
          <span className="block text-[0.65rem] tracking-[0.4em] text-gold uppercase mb-3">
            Test Your Allegiance
          </span>
          <h1 className="font-display text-[clamp(2rem,6vw,3.5rem)] font-bold text-ink">
            Which Character Are You?
          </h1>
        </motion.div>
      </div>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            {!finished ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
              >
                <div className="h-[3px] bg-border mb-8 relative">
                  <motion.div
                    className="h-full bg-gold"
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <div className="text-[0.7rem] text-gray tracking-[0.15em] uppercase mb-3">
                  Question {step + 1} of {QUIZ_QUESTIONS.length}
                </div>
                <div className="font-serif text-[1.3rem] text-ink leading-relaxed mb-8">
                  {question.q}
                </div>
                <div className="grid gap-3">
                  {question.opts.map((opt, i) => (
                    <button
                      key={opt.text}
                      onClick={() => selectOption(opt, i)}
                      data-cursor-hover
                      className={`bg-card border px-5 py-4 text-left text-gray text-[0.875rem] cursor-pointer transition-all leading-snug ${
                        selectedOpt === i
                          ? 'border-gold text-gold bg-goldsoft'
                          : 'border-border hover:border-gold hover:text-ink hover:bg-goldsoft'
                      }`}
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{result.icon}</div>
                <div className="font-display text-5xl font-black text-gold mb-2">
                  {result.char}
                </div>
                <p className="text-gray leading-loose mb-8 text-[0.9rem]">{result.desc}</p>
                <button
                  onClick={restart}
                  data-cursor-hover
                  className="bg-transparent text-gold font-display text-[0.75rem] font-semibold tracking-[0.15em] px-8 py-3 border border-gold cursor-pointer transition-all hover:bg-goldsoft"
                >
                  Take Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
