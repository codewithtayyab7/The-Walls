import { useEffect, useMemo, useState } from 'react'

function TitanFigure({ opacity }) {
  return (
    <svg viewBox="0 0 40 80" className="w-10 h-20 flex-shrink-0" style={{ opacity }}>
      <ellipse cx="20" cy="10" rx="8" ry="9" fill="#8B0000" />
      <rect x="12" y="18" width="16" height="22" rx="2" fill="#8B0000" />
      <rect x="4" y="19" width="7" height="3" rx="1" fill="#8B0000" />
      <rect x="29" y="19" width="7" height="3" rx="1" fill="#8B0000" />
      <rect x="13" y="40" width="5" height="24" rx="2" fill="#8B0000" />
      <rect x="22" y="40" width="5" height="24" rx="2" fill="#8B0000" />
    </svg>
  )
}

export default function Rumbling() {
  const [count, setCount] = useState(0)

  // Generated once so opacity values don't reshuffle on every render.
  const figures = useMemo(
    () => Array.from({ length: 40 }, () => 0.3 + Math.random() * 0.5),
    []
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 50 + 10))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      id="rumbling"
      className="relative overflow-hidden p-0 h-[500px] flex items-center justify-center"
      style={{ background: '#0a0000' }}
    >
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #0a0000 0%, #1a0505 40%, #0a0000 100%)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-20"
        style={{ background: 'linear-gradient(180deg, transparent, #1a0505)' }}
      />

      <div className="absolute bottom-[60px] left-0 right-0 flex gap-5 animate-march w-max">
        {[...figures, ...figures].map((op, i) => (
          <TitanFigure key={i} opacity={op} />
        ))}
      </div>

      <div className="relative z-[2] text-center">
        <h2 className="font-display text-[clamp(2rem,8vw,5rem)] font-black text-blood tracking-[0.1em] animate-shake [text-shadow:0_0_40px_rgba(139,0,0,0.5)]">
          THE RUMBLING
        </h2>
        <div className="text-[0.85rem] tracking-[0.3em] text-blood/70 mt-2 uppercase">
          The Founding Titan Marches
        </div>
        <div className="font-display text-lg text-gold mt-6 tracking-[0.2em]">
          Titans Deployed: {count.toLocaleString()}
        </div>
      </div>
    </div>
  )
}
