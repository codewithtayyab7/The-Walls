import { motion } from 'framer-motion'

export default function StatBar({ label, value, color = 'bg-blood' }) {
  return (
    <div>
      <div className="flex justify-between text-[0.72rem] text-gray uppercase tracking-wide mb-1.5">
        <span>{label}</span>
        <span className="text-gold">{value}</span>
      </div>
      <div className="h-1.5 bg-border overflow-hidden">
        <motion.div
          className={`h-full ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}
