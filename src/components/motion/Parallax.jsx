import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * Wraps any element and applies a vertical parallax offset tied to scroll
 * progress through the viewport. `strength` controls how many pixels of
 * drift occur across the scroll range — positive moves slower than scroll
 * (background feel), negative moves faster (foreground feel).
 */
export default function Parallax({ children, strength = -60, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}
