import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PlaceholderImage from './PlaceholderImage'

export default function TitanCard({ titan }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
      <Link
        to={`/titans/${titan.slug}`}
        data-cursor-hover
        className="group bg-card border border-border p-6 cursor-pointer transition-colors duration-300 relative overflow-hidden hover:border-blood block h-full"
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blood to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

        <PlaceholderImage
          src={titan.image}
          alt={titan.name}
          dimensions="800×600"
          emoji={titan.emoji}
          className="w-full h-36 mb-4"
        />

        <div className="font-display text-[1.15rem] font-bold text-ink mb-2">{titan.name}</div>
        <p className="text-[0.8rem] text-gray leading-relaxed mb-5 line-clamp-3">{titan.desc}</p>
        <div className="grid grid-cols-3 gap-2">
          {[['PWR', titan.stats.power], ['SPD', titan.stats.speed], ['INT', titan.stats.intel]].map(([label, val]) => (
            <div key={label} className="text-center">
              <div className="text-[0.6rem] text-gray tracking-wide mb-1">{label}</div>
              <div className="h-1 bg-border overflow-hidden">
                <motion.div
                  className="h-full bg-blood"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${val}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <div className="text-[0.62rem] text-gold mt-1">{val}</div>
            </div>
          ))}
        </div>
        <div className="text-[0.72rem] text-gold mt-4 border-t border-border pt-3">
          Known Holders: {titan.holders.join(', ')}
        </div>
      </Link>
    </motion.div>
  )
}
