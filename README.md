# The Walls — React Migration

A React + Tailwind port of the original static HTML/CSS/JS Attack on Titan fan site. Built as the frontend half of a future MERN stack — the data layer is already shaped so swapping static imports for a real Express/MongoDB API touches one file per resource, not the components.

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

> This project was generated without network access to npm, so dependency versions in `package.json` were hand-pinned to current stable releases as of writing rather than installed and verified locally. Run `npm install` and if anything's off, `npm outdated` / bump as needed — the API surface used (Vite 6, React 18, Tailwind 3) is stable and shouldn't need code changes.

## What changed from the original

| Original | React version |
|---|---|
| Global `var` state (`activeFilter`, `currentChar`, `quizStep`...) | `useState` scoped to the component that owns it |
| `innerHTML` string templates | JSX (auto-escaped, no manual sanitization needed) |
| `document.getElementById` / class toggling | Refs + conditional rendering |
| Global `IntersectionObserver` over `.fade-in` | `useScrollReveal` hook, one observer per component instance |
| Timeline mousedown/mousemove drag listeners | `useDragScroll` hook |
| `setTimeout` + `dataset.val` width animation trick | `useAnimatedWidth` hook (same trick, React-native) |
| Quiz answer→character mapping via a separate index-matched array | Each quiz option now carries its own `points` field — see note in `src/data/quiz.js` |
| One 800-line HTML file | ~25 focused components under `src/components/` |

Visual design, copy, animations, and all interactive behavior (search, filters, modal, drag-scroll timeline, clickable map, quiz scoring, animated bars, rumbling counter) are preserved as-is.

## Project structure

```
src/
├── data/            Static content (will move server-side)
├── services/        Data-fetching functions — the seam for the backend
├── hooks/           Reusable logic extracted from the original DOM code
├── components/
│   ├── layout/      Navbar, Footer
│   ├── sections/    One component per page section (Hero, Characters, Titans...)
│   └── ui/          Smaller pieces (CharacterCard, modal, stat bars...)
└── App.jsx
```

## Connecting the MongoDB/Express backend later

Right now `src/services/characterService.js` and `communityService.js` just resolve the static arrays in `src/data/`. When the backend exists:

1. Stand up Express routes mirroring the data shapes already in `src/data/*.js` (they're written to map directly onto Mongoose schemas — flat objects, no nested logic).
2. In each service file, replace the `Promise.resolve(STATIC_ARRAY)` body with an `axios.get` call:
   ```js
   import axios from 'axios'
   const API = import.meta.env.VITE_API_URL
   export const getCharacters = () => axios.get(`${API}/characters`).then(r => r.data)
   ```
3. Copy `.env.example` to `.env.local` and set `VITE_API_URL`.
4. No component changes needed — they already call `getCharacters()`, `getPosts()`, etc., and just consume whatever resolves.

The one place that'll need real backend logic eventually: the **Fan Poll** (currently static percentages) and **Community posts** (currently static) would become POST endpoints for voting/posting, plus the rankings would aggregate from real votes instead of hardcoded numbers.

## Known follow-ups

- No router — it's a single scrolling page with anchor nav, same as the original. Add `react-router-dom` if this grows into multiple pages.
- `axios` is already in `package.json` dependencies, ready for step 2 above.
- Tailwind theme tokens (colors, fonts, keyframes) live in `tailwind.config.js` — extend there, not inline, to keep the design system centralized.
