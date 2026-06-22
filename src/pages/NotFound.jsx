import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AtmosphereBackground from '../components/ui/AtmosphereBackground'

export default function NotFound() {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <AtmosphereBackground variant="default" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-[2] text-center px-4"
      >
        <div className="font-display text-7xl font-black text-gold/30 mb-4">404</div>
        <h1 className="font-display text-2xl text-ink mb-3">Beyond the Walls</h1>
        <p className="text-gray text-sm mb-8 max-w-sm mx-auto leading-relaxed">
          This page doesn't exist within these walls. Perhaps it was lost to
          a Titan, or never charted at all.
        </p>
        <Link
          to="/"
          data-cursor-hover
          className="inline-block bg-gold text-bg font-display text-[0.75rem] font-bold tracking-[0.15em] px-8 py-3 no-underline transition-all hover:bg-[#d4b455]"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  )
}
