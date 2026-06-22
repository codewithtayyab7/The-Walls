import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PlaceholderImage from './PlaceholderImage'

const STATUS_STYLES = {
  alive: 'text-green-500 border-green-500',
  deceased: 'text-blood border-blood',
  unknown: 'text-gray border-gray',
}

export default function CharacterCard({ character }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="h-full">
      <Link
        to={`/characters/${character.slug}`}
        data-cursor-hover
        className="block h-full bg-card border border-border overflow-hidden transition-colors duration-300 hover:border-gold"
      >
        <PlaceholderImage
          src={character.image}
          alt={character.name}
          dimensions="600×800"
          emoji={character.emoji}
          className="w-full h-60"
        />
        <div className="p-4">
          <div className="font-display text-[0.95rem] font-semibold text-ink mb-1">
            {character.name}
          </div>
          <div className="text-[0.72rem] text-gray tracking-wide mb-2 line-clamp-1">
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
      </Link>
    </motion.div>
  )
}
