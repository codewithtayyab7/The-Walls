import { useState } from 'react'
import { QUIZ_QUESTIONS, QUIZ_RESULTS } from '../../data/quiz'
import SectionHeader from '../ui/SectionHeader'
import FadeIn from '../ui/FadeIn'

function buildInitialScores() {
  return QUIZ_RESULTS.reduce((acc, r) => ({ ...acc, [r.char]: 0 }), {})
}

export default function Quiz() {
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
    <section id="quiz" className="py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader eyebrow="Test Your Allegiance" title="Which Character Are You?" />
        </FadeIn>

        <FadeIn className="max-w-xl mx-auto">
          {!finished ? (
            <>
              <div className="h-[3px] bg-border mb-8 relative">
                <div
                  className="h-full bg-gold transition-[width] duration-300 ease-out"
                  style={{ width: `${pct}%` }}
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
            </>
          ) : (
            <div className="text-center animate-heroIn">
              <div className="text-5xl mb-4">{result.icon}</div>
              <div className="font-display text-5xl font-black text-gold mb-2">
                {result.char}
              </div>
              <p className="text-gray leading-loose mb-8 text-[0.9rem]">{result.desc}</p>
              <button
                onClick={restart}
                className="bg-transparent text-gold font-display text-[0.75rem] font-semibold tracking-[0.15em] px-8 py-3 border border-gold cursor-pointer transition-all hover:bg-goldsoft"
              >
                Take Again
              </button>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  )
}
