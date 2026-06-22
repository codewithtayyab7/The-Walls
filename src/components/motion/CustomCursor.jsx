import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * A small gold ring that trails the real cursor with spring physics, and
 * expands when hovering anything interactive (links, buttons, cards —
 * anything with [data-cursor-hover]). Desktop-only; hidden on touch devices
 * via the pointer:fine media check below.
 */
export default function CustomCursor() {
  const [isPointerFine, setIsPointerFine] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const springX = useSpring(mouseX, { damping: 25, stiffness: 300, mass: 0.5 })
  const springY = useSpring(mouseY, { damping: 25, stiffness: 300, mass: 0.5 })

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setIsPointerFine(true)

    const onMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    const onOver = (e) => {
      if (e.target.closest('[data-cursor-hover]')) setIsHovering(true)
    }
    const onOut = (e) => {
      if (e.target.closest('[data-cursor-hover]')) setIsHovering(false)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [mouseX, mouseY])

  if (!isPointerFine) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-[300] pointer-events-none rounded-full border border-gold mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: isHovering ? 56 : 20,
        height: isHovering ? 56 : 20,
        opacity: isHovering ? 0.9 : 0.6,
      }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    />
  )
}
