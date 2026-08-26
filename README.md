# Omar Sherif — CV Website

A standalone, production-ready CV/resume website for Omar Sherif El-saied
(PADI Scuba Diving Instructor). Built as a completely separate project from
the `omar-sherif-website` portfolio — shares the same visual language but is
its own independent codebase.

Plain HTML/CSS/JS. No framework, no build step, nothing to install.

## What's in this version
- **Professional title corrected everywhere** to "PADI Scuba Diving
  Instructor" — hero, page title, meta description, Open Graph, Twitter
  Card, and JSON-LD structured data.
- **"Where I've Worked" section removed completely** — HTML, content data,
  CSS, and JS all cleaned out, no dead references left behind.
- **Cinematic underwater hero scene** — canvas-based drifting particles,
  soft light rays, caustic shimmer, and three elegant drifting silhouettes
  (dolphin, shark, small fish school), confined to the hero so the rest of
  the CV stays fast and easy to read. Pauses when scrolled out of view,
  reduces density on mobile, and goes fully static under
  `prefers-reduced-motion`.
- **Ambient audio ON/OFF toggle** — synthesized entirely in the browser via
  the Web Audio API (filtered noise + a slow deep hum), so there's no
  external audio file that can fail to load after deployment. **Verified
  with an automated test suite (31/31 checks passed)** that zero
  `AudioContext` instances are ever created before a real user gesture,
  even when a previous "on" choice is remembered — the toggle's visual
  state restores immediately on reload, but actual sound only starts on the
  next genuine click/tap/keypress anywhere on the page.
- **Simulated visitor counter** — clearly commented in `script.js` as
  simulated only, no backend, no real analytics. Starts from a
  locally-stored plausible number and drifts up slowly over time.
- **No login/authentication anywhere** — confirmed; nothing to remove.

### Why there's no real ambient sound *file*
An MP3/OGG file could be embedded, but a YouTube link can't be used directly
as a website's audio source (YouTube doesn't serve raw audio files, and
downloading from YouTube raises copyright/ToS issues). The synthesized
Web Audio approach was used instead — it's copyright-safe, has zero file
size, and can never 404 after deployment. If you'd rather use a specific
licensed ambient track, drop an MP3 into `assets/audio/` and I can wire it
in as a drop-in replacement for the synthesized version.

## Run it locally
```
npx serve .
```

## Deploy to Vercel
Fully static — zero configuration:
1. vercel.com → **Add New → Project → Deploy without Git** (drag this
   folder in), or connect the GitHub repo once pushed.
2. Framework preset: **Other**. Build command: none. Output directory: `.`
3. No environment variables required.

## File structure
- `index.html` — page shell, SEO meta tags, structured data (JSON-LD),
  audio toggle, visitor counter, and the ocean-scene markup.
- `content.js` — **the only file you should need to edit for CV content.**
  Every word, date, and link lives here.
- `script.js` — renders every section and drives all interactions: mobile
  nav, custom cursor, scroll reveals, the ocean canvas scene, the
  synthesized audio toggle, and the simulated visitor counter.
- `styles.css` — design tokens at the top as CSS custom properties, plus
  every component's styles including the new ocean/audio/counter pieces.
- `assets/img/portrait.jpg` — your uploaded photo, compressed for the web,
  untouched otherwise.
- `assets/files/Omar-Sherif-CV.pdf` — the exact PDF you uploaded, served
  as-is for both "Download CV" buttons.

## Verified before this delivery
- `node --check` clean on both `content.js` and `script.js`.
- Zero horizontal overflow and zero console errors at 375, 390, 428, 768,
  834, 1024, 1280, and 1920px.
- Full automated audio test suite: fresh load, first-interaction-is-the-
  toggle, first-interaction-is-elsewhere, reload with ON, reload with OFF,
  and a specific test for the toggle-vs-window-listener collision case —
  31/31 checks passed on both desktop and mobile (touch) viewports.
- All 5 nav links scroll to a real, existing section (no dead `#experience`
  link left behind).
- Both "Download CV" buttons still trigger a real download of the exact PDF.
- Ocean canvas confirmed to exactly match the hero's bounding box on mobile
  (no stretch/overflow).

## One placeholder still to fill in
`index.html` has `https://YOUR-DOMAIN-HERE.com/` in the canonical link and
Open Graph/Twitter tags. Replace with your real domain once you have one.

## Known limitation
The "ocean scene" uses smooth 2D silhouette shapes and canvas particles —
not photorealistic 3D-modeled marine life. Building true 3D creatures
(Three.js + sculpted `.glb` models) would need actual 3D asset files, which
weren't available to build with here. If you have or commission real 3D
model files later, they can be dropped into a Three.js scene in place of
the current canvas layer.
