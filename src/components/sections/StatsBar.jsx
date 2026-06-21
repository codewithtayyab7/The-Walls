const STATS = [
  { num: '9', label: 'Titan Shifters' },
  { num: '139', label: 'Manga Chapters' },
  { num: '2000+', label: 'Years of History' },
  { num: '7', label: 'Military Regiments' },
]

export default function StatsBar() {
  return (
    <div className="px-4 py-8 bg-bg2 border-y border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`text-center p-4 border-border ${
              i % 2 === 0 ? 'border-r' : 'md:border-r'
            } ${i >= 2 ? 'border-t md:border-t-0' : ''} ${
              i === STATS.length - 1 ? 'md:border-r-0' : ''
            }`}
          >
            <div className="font-display text-3xl font-bold text-gold">
              {s.num}
            </div>
            <div className="text-[0.7rem] tracking-[0.2em] text-gray uppercase mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
