import useScrollReveal from '../../hooks/useScrollReveal'

/**
 * Drop-in replacement for the original .fade-in class. Wrap any section
 * content in this and it reveals on scroll into view.
 */
export default function FadeIn({ children, className = '', as: Tag = 'div' }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
