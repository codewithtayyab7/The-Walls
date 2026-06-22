import { motion } from 'framer-motion'

const VARIANTS = {
  default: 'radial-gradient(ellipse at 20% 50%, rgba(85,107,47,0.10) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(139,0,0,0.08) 0%, transparent 50%), linear-gradient(180deg, #0D0D0D 0%, #111 50%, #0D0D0D 100%)',
  blood: 'radial-gradient(ellipse at 50% 30%, rgba(139,0,0,0.14) 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(85,107,47,0.05) 0%, transparent 50%), linear-gradient(180deg, #0a0000 0%, #150505 50%, #0a0000 100%)',
  gold: 'radial-gradient(ellipse at 30% 40%, rgba(200,169,81,0.10) 0%, transparent 55%), radial-gradient(ellipse at 75% 70%, rgba(85,107,47,0.06) 0%, transparent 50%), linear-gradient(180deg, #0D0D0D 0%, #161410 50%, #0D0D0D 100%)',
  wall: 'radial-gradient(ellipse at 50% 80%, rgba(200,169,81,0.06) 0%, transparent 60%), linear-gradient(180deg, #0D0D0D 0%, #14130f 60%, #1a1a1a 100%)',
}

/**
 * Layered procedural backdrop: base gradient mesh + animated fog wash +
 * optional mountain/wall silhouette ridge. Fully original, no licensing
 * concerns, and composites cleanly with the site's palette across pages.
 */
export default function AtmosphereBackground({ variant = 'default', showRidge = false, children }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0" style={{ background: VARIANTS[variant] || VARIANTS.default }} />

      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 85%, rgba(200,169,81,0.04) 0%, transparent 60%)',
        }}
        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.05, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {showRidge && (
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-[30%] opacity-60"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
        >
          <path
            d="M0,300 L0,180 L80,150 L180,190 L260,120 L340,170 L430,100 L520,160 L610,130 L700,180 L800,140 L900,190 L1000,150 L1100,200 L1200,160 L1200,300 Z"
            fill="#161410"
          />
          <path
            d="M0,300 L0,220 L100,200 L220,235 L320,190 L420,225 L540,180 L660,230 L780,195 L900,235 L1020,210 L1120,240 L1200,220 L1200,300 Z"
            fill="#0d0c09"
          />
        </svg>
      )}

      {children}
    </div>
  )
}
