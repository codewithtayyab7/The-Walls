import useAnimatedWidth from '../../hooks/useAnimatedWidth'

function StatBar({ label, value }) {
  const width = useAnimatedWidth(value)
  return (
    <div className="text-center">
      <div className="text-[0.6rem] text-gray tracking-wide uppercase mb-1">{label}</div>
      <div className="h-1 bg-border relative overflow-hidden">
        <div
          className="h-full bg-blood transition-[width] duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
      <div className="text-[0.65rem] text-gold mt-1">{value}</div>
    </div>
  )
}

export default function TitanCard({ titan }) {
  return (
    <div className="group bg-card border border-border p-6 cursor-pointer transition-all duration-300 relative overflow-hidden hover:border-blood hover:-translate-y-1">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blood to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      <div className="text-4xl mb-4">{titan.emoji}</div>
      <div className="font-display text-[1.15rem] font-bold text-ink mb-2">{titan.name}</div>
      <p className="text-[0.8rem] text-gray leading-relaxed mb-5">{titan.desc}</p>
      <div className="grid grid-cols-3 gap-2">
        <StatBar label="Power" value={titan.stats.power} />
        <StatBar label="Speed" value={titan.stats.speed} />
        <StatBar label="Intel" value={titan.stats.intel} />
      </div>
      <div className="text-[0.72rem] text-gold mt-4 border-t border-border pt-3">
        Known Holders: {titan.holders}
      </div>
    </div>
  )
}
