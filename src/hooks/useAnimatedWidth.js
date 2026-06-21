import { useEffect, useState } from 'react'

/**
 * Renders 0 on mount, then flips to the target value on the next tick so
 * the CSS width transition actually animates. This is the React equivalent
 * of the original's: render width 0%, then setTimeout(() => set real width).
 */
export default function useAnimatedWidth(targetValue, delay = 300) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(targetValue), delay)
    return () => clearTimeout(timer)
  }, [targetValue, delay])

  return width
}
