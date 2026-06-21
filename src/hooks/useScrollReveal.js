import { useEffect, useRef, useState } from 'react'

/**
 * Replaces the original site's single global IntersectionObserver that
 * watched every `.fade-in` element. Here each component that wants the
 * reveal effect calls this hook itself and gets back a ref + boolean.
 */
export default function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // reveal once, same as the original .visible class never being removed
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible]
}
