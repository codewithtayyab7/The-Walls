import { resolveImage } from '../../utils/resolveImage'

/**
 * Drop-in <img> replacement. Pass the same relative path used in the data
 * files (e.g. "characters/eren-yeager/portrait.jpg"). If that file exists
 * under src/assets/images/, it renders normally. If not, it renders a
 * clearly labeled placeholder so the layout never looks broken and you
 * always know exactly what to add and where.
 */
export default function PlaceholderImage({
  src,
  alt,
  label,
  dimensions = '',
  className = '',
  rounded = false,
  emoji = '🖼',
}) {
  const resolved = resolveImage(src)

  if (resolved) {
    return (
      <img
        src={resolved}
        alt={alt}
        className={`object-cover ${rounded ? 'rounded-full' : ''} ${className}`}
      />
    )
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-bg2 to-card border border-dashed border-border text-center p-4 ${
        rounded ? 'rounded-full' : ''
      } ${className}`}
      role="img"
      aria-label={alt}
    >
      <span className="text-3xl opacity-40">{emoji}</span>
      <span className="text-[0.65rem] text-gray tracking-wide leading-snug">
        Add image:
        <br />
        <code className="text-gold/80 break-all">{src}</code>
      </span>
      {dimensions && (
        <span className="text-[0.6rem] text-gray/60 tracking-wider uppercase">
          {dimensions}
        </span>
      )}
      {label && (
        <span className="text-[0.6rem] text-gray/70 italic">{label}</span>
      )}
    </div>
  )
}
