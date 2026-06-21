export default function SectionHeader({ eyebrow, title }) {
  return (
    <div className="text-center mb-14">
      <span className="block text-[0.65rem] tracking-[0.4em] text-gold uppercase mb-3">
        {eyebrow}
      </span>
      <h2 className="font-display text-[clamp(1.8rem,5vw,3rem)] font-bold text-ink">
        {title}
      </h2>
      <div className="w-[60px] h-[2px] bg-gold mx-auto mt-4" />
    </div>
  )
}
