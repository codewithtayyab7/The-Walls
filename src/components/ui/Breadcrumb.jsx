import { Link } from 'react-router-dom'

export default function Breadcrumb({ trail }) {
  return (
    <nav className="text-[0.72rem] text-gray tracking-wide mb-8 flex items-center gap-2 flex-wrap">
      {trail.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {item.to ? (
            <Link to={item.to} className="hover:text-gold transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-ink">{item.label}</span>
          )}
          {i < trail.length - 1 && <span className="text-border">/</span>}
        </span>
      ))}
    </nav>
  )
}
