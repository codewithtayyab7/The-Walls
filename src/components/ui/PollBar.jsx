import useAnimatedWidth from '../../hooks/useAnimatedWidth'

export default function PollBar({ name, pct }) {
  const width = useAnimatedWidth(pct)
  return (
    <div className="mb-3">
      <div className="flex justify-between text-[0.8rem] text-gray mb-1">
        <span>{name}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 bg-border">
        <div
          className="h-full bg-scout transition-[width] duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}
