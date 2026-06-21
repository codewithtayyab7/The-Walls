const STATUS_STYLES = {
  alive: 'text-green-500 border-green-500',
  deceased: 'text-blood border-blood',
  unknown: 'text-gray border-gray',
}

export default function CharacterCard({ character, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-card border border-border cursor-pointer transition-all duration-300 relative overflow-hidden hover:border-gold hover:-translate-y-1 hover:shadow-cardHover"
    >
      <div className="w-full h-60 bg-gradient-to-br from-bg2 to-border flex items-center justify-center text-5xl text-border">
        {character.emoji}
      </div>
      <div className="p-4">
        <div className="font-display text-[0.95rem] font-semibold text-ink mb-1">
          {character.name}
        </div>
        <div className="text-[0.72rem] text-gray tracking-wide mb-2">
          {character.role}
        </div>
        <span
          className={`inline-block text-[0.6rem] tracking-[0.15em] uppercase px-2.5 py-1 border ${STATUS_STYLES[character.status]}`}
        >
          {character.status}
        </span>
        <div className="text-[0.65rem] text-gold mt-2 tracking-wide">
          {character.regiment}
          {character.titan ? ' · Titan Shifter' : ''}
        </div>
      </div>
    </div>
  )
}
