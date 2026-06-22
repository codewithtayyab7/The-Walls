# Image Guide — What to Add, and Where

Every image slot on the site currently renders a **labeled placeholder** (dashed border, filename, and recommended dimensions) so nothing looks broken while it's empty. Drop a real file at the exact path listed below and it'll appear automatically on next reload — no code changes needed.

All paths are relative to:
```
src/assets/images/
```

> ⚠️ A reminder on content: this project intentionally does **not** use official Attack on Titan artwork or stills — that's copyrighted material. The placeholder system is built so *you* can add your own art, screenshots, or licensed assets directly. Use whatever you have the rights to use.

---

## Characters

Each character has one portrait + a small gallery. Folder per character, named by slug:

```
characters/<slug>/portrait.jpg     — 600×800px (3:4 portrait)
characters/<slug>/gallery-1.jpg    — 800×600px
characters/<slug>/gallery-2.jpg    — 800×600px
characters/<slug>/gallery-3.jpg    — 800×600px  (some characters only have 1-2 gallery slots)
```

Full list of slugs currently in `src/data/characters.js`:

| Slug | Name | Gallery slots |
|---|---|---|
| `eren-yeager` | Eren Yeager | 3 |
| `mikasa-ackerman` | Mikasa Ackerman | 3 |
| `armin-arlert` | Armin Arlert | 3 |
| `levi-ackerman` | Levi Ackerman | 3 |
| `hange-zoe` | Hange Zoë | 2 |
| `erwin-smith` | Erwin Smith | 2 |
| `reiner-braun` | Reiner Braun | 2 |
| `historia-reiss` | Historia Reiss | 1 |
| `jean-kirstein` | Jean Kirstein | 1 |
| `annie-leonhart` | Annie Leonhart | 1 |
| `sasha-blouse` | Sasha Blouse | 1 |
| `connie-springer` | Connie Springer | 1 |

Example for Eren:
```
src/assets/images/characters/eren-yeager/portrait.jpg
src/assets/images/characters/eren-yeager/gallery-1.jpg
src/assets/images/characters/eren-yeager/gallery-2.jpg
src/assets/images/characters/eren-yeager/gallery-3.jpg
```

---

## Titans

Each Titan has one "form" image + one gallery shot:

```
titans/<slug>/form.jpg        — 900×700px (landscape)
titans/<slug>/gallery-1.jpg   — 900×700px
```

Slugs from `src/data/titans.js`:

`attack-titan`, `founding-titan`, `colossal-titan`, `armored-titan`, `female-titan`, `beast-titan`, `cart-titan`, `jaw-titan`, `war-hammer-titan`

---

## Heroes / Page Banners (optional)

Currently every page header uses a fully procedural CSS/SVG background (`AtmosphereBackground` component) — no image required. If you'd rather use a real image behind any page header, that's a code change (swap `<AtmosphereBackground>` for a `<PlaceholderImage>` or plain `<img>`), not just a file drop — ask and it can be wired up the same way.

---

## How it works under the hood

`src/utils/resolveImage.js` uses Vite's `import.meta.glob` to scan everything under `src/assets/images/` at build time. If a file exists at the exact relative path referenced in the data (`character.image`, `character.gallery[i]`, `titan.image`, etc.), `PlaceholderImage` renders it. If not, it renders the dashed placeholder you see now.

This means:
- **No restart needed in dev** — Vite's dev server picks up new files automatically.
- **Wrong filename or extension = still a placeholder.** Check the exact string in `src/data/characters.js` / `titans.js` against your actual filename.
- Supported extensions: `.png`, `.jpg`, `.jpeg`, `.webp`, `.svg`.

## Adding more gallery slots

To add a 4th gallery image to a character, edit their `gallery` array in `src/data/characters.js`:
```js
gallery: [
  'characters/eren-yeager/gallery-1.jpg',
  'characters/eren-yeager/gallery-2.jpg',
  'characters/eren-yeager/gallery-3.jpg',
  'characters/eren-yeager/gallery-4.jpg', // add this line
],
```
Then drop `gallery-4.jpg` in the matching folder.
