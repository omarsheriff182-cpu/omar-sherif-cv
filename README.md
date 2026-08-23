# Omar Sherif — CV Website

A standalone, production-ready CV/resume website for Omar Sherif El-saied
(PADI Instructor & Dive Master). Built as a completely separate project from
the `omar-sherif-website` portfolio — shares the same visual language
(palette, type, spacing, motion) but is its own independent codebase with no
shared files, folders, or history.

Plain HTML/CSS/JS. No framework, no build step, nothing to install.

## Every fact on this site comes from the uploaded CV
`content.js` is the single source of truth, and every line in it was taken
directly from `Omar_Sherif_Resume_.pdf`. Nothing professional was invented.
Two small, deliberate choices worth knowing about:
- The exact date of birth from the CV is **not** shown publicly (common
  practice for public-facing sites). Easy to add back into the `about`
  section in `content.js` if you want it displayed.
- The phone number is reproduced exactly as written in the CV
  (`+0201147581907`). Worth double-checking that unusual leading `0` right
  after the `+` is actually correct before this goes live.

## Run it locally
No build step needed — just open `index.html` in a browser, or serve it:
```
npx serve .
```

## Deploy to Vercel
This is a fully static site — zero configuration needed:
1. vercel.com → **Add New → Project → Deploy without Git** (drag this folder
   in), or connect the GitHub repo once it's pushed (see below).
2. Framework preset: **Other**. Build command: none. Output directory: `.`
3. Deploy. No environment variables are required.

## File structure
- `index.html` — page shell + SEO meta tags + structured data (JSON-LD).
- `content.js` — **the only file you should need to edit.** Every word,
  date, link, and the CV file path lives here.
- `script.js` — renders every section from `content.js` and wires up
  interactions: mobile nav menu, custom cursor (desktop only), scroll
  reveals, and animated language-proficiency bars.
- `styles.css` — design tokens (colors, type, spacing) at the top as CSS
  custom properties, shared in spirit with the portfolio site.
- `assets/img/portrait.jpg` — your uploaded photo, compressed for the web
  (resized to 1400px wide, ~199KB) with no crop, filter, or distortion.
- `assets/files/Omar-Sherif-CV.pdf` — the exact PDF you uploaded, served
  as-is for the "Download CV" buttons (hero + contact section).

## Updating content later
Everything lives in `content.js` — job history, certifications, skills,
contact links, the About text, all of it. Open the file, edit the relevant
value, save. No other file needs to change for a text/link update.

To replace the CV PDF or portrait photo, drop the new file into
`assets/files/` or `assets/img/` under the same filename, or update the path
in `content.js` (`hero.ctaPrimary.href` for the CV, `hero.portrait.src` for
the photo).

## What was verified before delivery
- All 6 nav links scroll to a real, existing section.
- Both "Download CV" buttons trigger a real download of the exact uploaded
  PDF (verified programmatically, not just visually).
- Every external link (Instagram, LinkedIn, Behance) opens in a new tab with
  `rel="noopener"`.
- Zero horizontal overflow and zero console errors at 375, 390, 428, 768,
  834, 1024, 1280, 1440, and 1920px.
- Mobile hamburger menu opens, closes on link tap, and closes on Escape.
- Basic accessibility pass: every image has alt text, exactly one `<h1>`,
  proper heading hierarchy, `header`/`main`/`nav`/`footer` landmarks present,
  `lang="en"` set, no unlabeled buttons.

## One placeholder you need to fill in
`index.html` has `https://YOUR-DOMAIN-HERE.com/` in the canonical link and
Open Graph/Twitter tags. Replace it with your real domain (or final Vercel
URL) once you have one — otherwise search engines and social previews will
point at a fake address.
