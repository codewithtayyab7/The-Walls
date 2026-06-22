import { motion } from 'framer-motion'

/**
 * Scroll reveal using Framer Motion's whileInView, replacing the old
 * manual IntersectionObserver hook — same visual result, but now part of
 * the same animation system driving everything else on the site.
 */
export default function FadeIn({ children, className = '', delay = 0, y = 24 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
