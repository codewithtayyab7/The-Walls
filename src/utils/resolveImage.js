// Vite's import.meta.glob eagerly maps every image actually present under
// src/assets/images at build time. If the user hasn't dropped a file in yet,
// the key simply won't exist in this object — that's how PlaceholderImage
// knows whether to render the real file or the labeled placeholder.
//
// IMPORTANT: paths in data files (e.g. character.image = 'characters/eren-yeager/portrait.jpg')
// are relative to src/assets/images/ — this module resolves them against that root.

const modules = import.meta.glob('/src/assets/images/**/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
})

const resolved = {}
for (const path in modules) {
  // strip "/src/assets/images/" prefix so keys match the relative paths used in data files
  const key = path.replace('/src/assets/images/', '')
  resolved[key] = modules[path]
}

/**
 * Returns the resolved asset URL for a relative path like
 * "characters/eren-yeager/portrait.jpg", or null if no such file exists yet.
 */
export function resolveImage(relativePath) {
  if (!relativePath) return null
  return resolved[relativePath] || null
}
