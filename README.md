# The Walls — React Multi-Page Edition

A full multi-page React + Tailwind + Framer Motion fan site, built as the frontend half of a MERN stack. Every character and Titan gets a dedicated, richly detailed profile page; navigation is real client-side routing; motion (page transitions, scroll parallax, a custom cursor) runs throughout.

## Getting started

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

```bash
npm run build      # production build to dist/
npm run preview    # preview the production build locally
npm run lint        # eslint
```

> Built without npm registry access in the sandbox that generated it, so versions are hand-pinned to current stable releases rather than installed and verified locally. Run `npm install` and address anything `npm outdated` flags — the libraries used (Vite 6, React 18, React Router 6, Framer Motion 11, Tailwind 3) are stable and the code shouldn't need changes for minor version bumps.

## What's new in this version

- **Real multi-page routing** (`react-router-dom`) — every section is its own URL, not an anchor scroll. Routes are lazy-loaded so the initial bundle stays small.
- **Rich detail pages** for every character and Titan: stats, abilities, relationships, gallery, voice actors, lore — not just a modal popup.
- **Motion system** built on Framer Motion: animated page transitions, scroll-linked reveals (`FadeIn`), a parallax wrapper (`Parallax`), and a custom cursor that reacts to hoverable elements.
- **The Rumbling page** — a staged, symbolic cinematic sequence (marching → stilling → dissolving to dust → aftermath) representing the Rumbling's end. This deliberately avoids depicting any character or violence; it's titan silhouettes and abstract dust particles only.
- **Placeholder image system** — every portrait/gallery slot renders a clearly labeled placeholder until you drop a real file at the exact path. See **`IMAGE_GUIDE.md`** for the full manifest of every image slot, its path, and recommended dimensions.
- **Original SVG emblem set** (`Emblem.jsx`) — symbolic icons (blades, wings, titan silhouette, crown, shield, eye, compass) used as decorative motifs. These are intentionally abstract, not character likenesses, to stay clear of IP issues.
- **Procedural atmosphere backgrounds** (`AtmosphereBackground.jsx`) — gradient mesh + animated fog + optional mountain/wall ridge silhouette, used on every page header instead of stock photography (avoids licensing risk entirely, stays visually cohesive).

## A note on imagery

This project does not include or reference official Attack on Titan artwork, screenshots, or closely-derivative fan art — that's copyrighted material. Instead:

- Every image slot is a **labeled placeholder** by default (see screenshots below — dashed border, filename, and dimensions shown right in the UI).
- **`IMAGE_GUIDE.md`** lists every single slot across the site with its exact path.
- Drop your own images (art you made, screenshots you have rights to use, properly licensed stock, etc.) into the matching folder under `src/assets/images/`, and they appear automatically — no code changes needed.
- Decorative motifs use original SVG emblems, not character likenesses.

## Project structure

```
src/
├── assets/images/    Drop your own images here — see IMAGE_GUIDE.md
├── data/             Static content (will move server-side)
├── services/         Data-fetching functions — the seam for the backend
├── hooks/            useDragScroll, useAnimatedWidth
├── utils/            resolveImage.js — the placeholder image resolution logic
├── layouts/          RootLayout (navbar/footer/cursor shell shared by every route)
├── router/           Lazy route definitions
├── components/
│   ├── layout/       Navbar, Footer
│   ├── motion/       PageTransition, CustomCursor, Parallax, ScrollToTop
│   └── ui/           CharacterCard, TitanCard, PlaceholderImage, Emblem,
│                      AtmosphereBackground, StatBar, Breadcrumb, FadeIn...
├── pages/            One file per route — Home, CharactersList, CharacterDetail,
│                      TitansList, TitanDetail, TimelinePage, WorldMapPage,
│                      QuizPage, CommunityPage, RumblingPage, NotFound
└── App.jsx           Router + Suspense + AnimatePresence wiring
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/characters` | Character registry (search + filter) |
| `/characters/:slug` | Character profile |
| `/titans` | Titan encyclopedia |
| `/titans/:slug` | Titan profile |
| `/timeline` | Interactive + full chronological timeline |
| `/world-map` | Interactive SVG map |
| `/quiz` | Personality quiz |
| `/community` | Posts, fan poll, rankings |
| `/rumbling` | Cinematic Rumbling sequence |
| `*` | 404 |

## Connecting the MongoDB/Express backend later

Same pattern as before — `src/services/*.js` is the seam. Right now each function resolves a static import from `src/data/`. When the Express API exists:

```js
import axios from 'axios'
const API = import.meta.env.VITE_API_URL
export const getCharacters = () => axios.get(`${API}/characters`).then(r => r.data)
export const getCharacterBySlug = (slug) => axios.get(`${API}/characters/${slug}`).then(r => r.data)
```

No component changes needed — pages already call `getCharacters()`, `getCharacterBySlug()`, etc.

Copy `.env.example` to `.env.local` and set `VITE_API_URL` once the backend exists.

## Known follow-ups / good next steps

- **Images**: see `IMAGE_GUIDE.md` — this is the main thing left to fill in.
- **Quiz scoring** is self-contained per option (`points` field) — safe to reorder or extend questions without touching component logic.
- **Reduced motion**: the custom cursor and most animations respect `prefers-reduced-motion`; spot-check if you add new Framer Motion animations.
- **Auth/voting**: Community page's poll and post likes are static data — once Express exists, these become real POST endpoints (vote, like, create post).
