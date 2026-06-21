import { useEffect } from 'react'

const STATUS_STYLES = {
  alive: 'text-green-500 border-green-500',
  deceased: 'text-blood border-blood',
  unknown: 'text-gray border-gray',
}

export default function CharacterModal({ character, onClose }) {
  // Lock body scroll while open, restore on close — same behavior as the
  // original's document.body.style.overflow toggling.
  useEffect(() => {
    if (!character) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [character, onClose])

  if (!character) return null

  return (
    <div
      className="fixed inset-0 bg-black/85 z-[200] flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="bg-bg2 border border-border max-w-3xl w-full max-h-[90vh] overflow-y-auto modal-scroll relative animate-modalIn">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 bg-transparent border-none text-gray text-2xl cursor-pointer z-[1] leading-none hover:text-ink"
        >
          ×
        </button>

        <div className="flex flex-col md:flex-row gap-6 p-8 border-b border-border">
          <div className="w-full md:w-[120px] h-[150px] bg-card flex-shrink-0 flex items-center justify-center text-5xl">
            {character.emoji}
          </div>
          <div>
            <div className="font-display text-[1.6rem] font-bold mb-1">
              {character.name}
            </div>
            <div className="text-[0.8rem] text-gray leading-loose">
              <div>
                Regiment: <span className="text-gold">{character.regiment}</span>
              </div>
              <div>
                Role: <span className="text-gold">{character.role}</span>
              </div>
              <div>
                Status:{' '}
                <span
                  className={`inline-block text-[0.6rem] tracking-[0.15em] uppercase px-2.5 py-1 border ${STATUS_STYLES[character.status]}`}
                >
                  {character.status}
                </span>
              </div>
              {character.titan && (
                <div>
                  Power: <span className="text-gold">Titan Shifter</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-8">
          <h4 className="font-display text-[0.8rem] tracking-[0.2em] text-gold uppercase mb-3">
            Biography
          </h4>
          <p className="text-[0.875rem] text-gray leading-loose">{character.bio}</p>

          <h4 className="font-display text-[0.8rem] tracking-[0.2em] text-gold uppercase mb-3 mt-6">
            History
          </h4>
          <p className="text-[0.875rem] text-gray leading-loose">{character.history}</p>

          <h4 className="font-display text-[0.8rem] tracking-[0.2em] text-gold uppercase mb-3 mt-6">
            Notable Quote
          </h4>
          <div className="border-l-2 border-gold pl-4 py-3 my-4 font-serif italic text-ink text-[0.95rem]">
            {character.quote}
          </div>

          <h4 className="font-display text-[0.8rem] tracking-[0.2em] text-gold uppercase mb-3 mt-6">
            Major Battles
          </h4>
          <div className="flex flex-wrap gap-2">
            {character.battles.map((b) => (
              <span
                key={b}
                className="text-[0.7rem] border border-border px-2.5 py-1 text-gray"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
