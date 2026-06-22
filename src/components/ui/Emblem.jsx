/**
 * Original symbolic emblems — abstract silhouettes/icons evoking a role or
 * theme (soldier, scout, titan-shifter, commander) rather than any specific
 * character's likeness. Used as decorative motifs across cards and profile
 * headers, independent of the placeholder image system.
 */

const EMBLEM_PATHS = {
  // Crossed blades — soldier / combatant
  blades: (
    <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none">
      <path d="M30 20 L70 80" />
      <path d="M70 20 L30 80" />
      <circle cx="50" cy="50" r="6" fill="currentColor" stroke="none" />
    </g>
  ),
  // Wings of Freedom-inspired abstract wings (original geometry, not the official emblem)
  wings: (
    <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none">
      <path d="M50 30 C35 35, 20 50, 18 75 C32 68, 42 55, 50 45" />
      <path d="M50 30 C65 35, 80 50, 82 75 C68 68, 58 55, 50 45" />
    </g>
  ),
  // Open book — strategist / tactician
  book: (
    <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M50 25 L50 75" />
      <path d="M50 30 C40 25, 25 25, 18 30 L18 70 C25 65, 40 65, 50 70" />
      <path d="M50 30 C60 25, 75 25, 82 30 L82 70 C75 65, 60 65, 50 70" />
    </g>
  ),
  // Titan silhouette — shifter marker
  titan: (
    <g fill="currentColor">
      <ellipse cx="50" cy="28" rx="14" ry="16" />
      <rect x="34" y="42" width="32" height="36" rx="3" />
      <rect x="16" y="44" width="16" height="6" rx="2" />
      <rect x="68" y="44" width="16" height="6" rx="2" />
      <rect x="38" y="78" width="9" height="14" rx="2" />
      <rect x="53" y="78" width="9" height="14" rx="2" />
    </g>
  ),
  // Crown — royalty
  crown: (
    <g stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none">
      <path d="M22 65 L22 40 L38 55 L50 32 L62 55 L78 40 L78 65 Z" />
      <path d="M22 65 L78 65" />
    </g>
  ),
  // Shield — armored / defensive
  shield: (
    <g stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none">
      <path d="M50 20 L78 30 L78 55 C78 70, 65 80, 50 85 C35 80, 22 70, 22 55 L22 30 Z" />
    </g>
  ),
  // Eye — founding / royal power
  eye: (
    <g stroke="currentColor" strokeWidth="2.5" fill="none">
      <path d="M15 50 C30 30, 70 30, 85 50 C70 70, 30 70, 15 50 Z" />
      <circle cx="50" cy="50" r="10" fill="currentColor" stroke="none" />
    </g>
  ),
  // Compass star — explorer / Survey Corps
  compass: (
    <g stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none">
      <circle cx="50" cy="50" r="32" />
      <path d="M50 22 L57 50 L50 78 L43 50 Z" fill="currentColor" stroke="none" />
      <path d="M22 50 L50 43 L78 50 L50 57 Z" fillOpacity="0.5" fill="currentColor" stroke="none" />
    </g>
  ),
}

export default function Emblem({ type = 'blades', className = '', size = 64 }) {
  const path = EMBLEM_PATHS[type] || EMBLEM_PATHS.blades
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      {path}
    </svg>
  )
}

export const EMBLEM_TYPES = Object.keys(EMBLEM_PATHS)
