# Dinesh RC — Personal Portfolio

A single-page developer portfolio built around a **technical spec-sheet** identity — numbered sections, a running meta strip, and a typed boot-log hero — in place of a generic template layout.

## Features

- [x] **Hero** — name, role, and a placeholder avatar (swap-ready), plus a typed "system status" line listing stack, availability, and location
- [x] **About** — background and current focus, with a quick-fact panel (location, institution, graduation year, CGPA)
- [x] **Skills** — grouped by Frontend / Backend / Data & Tools
- [x] **Projects** — Rural Voice (live) + one open "planned" slot for the next build
- [x] **Contact** — email, GitHub, LinkedIn, and portfolio link
- [x] **Smooth-scroll navigation** — desktop side rail with scroll-spy active states; mobile hamburger menu
- [x] **Consistent branding** — one color system and three typefaces, applied throughout
- [x] **Fully responsive** — tested 320px–1440px with zero horizontal overflow

## Tech Stack

- HTML5 — semantic sectioning
- CSS3 — custom properties, Grid/Flexbox, no framework
- Vanilla JavaScript — mobile nav toggle, `IntersectionObserver` for scroll-spy, typed boot-log animation (`prefers-reduced-motion` respected)
- [Google Fonts](https://fonts.google.com) — loaded via CDN; an internet connection is needed for the fonts to render as intended

## Design System

| Token | Hex | Used for |
|---|---|---|
| `--navy` | `#0B1E3D` | Rail nav, hero avatar frame, skill tags, primary text |
| `--paper` | `#F1EEE6` | Page background, text on navy |
| `--signal` | `#F4C430` | Active nav state, email underline — kept as a sparing accent |
| `--slate` | `#4A5A73` | Secondary text, meta labels |
| `--green` | `#4ADE80` | "Open to work" status dot, live-project badge |

| Role | Typeface | Used for |
|---|---|---|
| Display | Space Grotesk | Headings, nav labels, name |
| Body | IBM Plex Sans | Paragraph copy |
| Mono | IBM Plex Mono | Sheet numbers, meta strips, tags, boot log |

## Project Structure

```
personal-portfolio/
├── index.html   Markup — 5 sections (hero, about, skills, projects, contact)
├── style.css    All styling: tokens, layout, responsive breakpoints
├── script.js    Mobile nav toggle, scroll-spy, boot-log animation
└── README.md    This file
```

## Running Locally

No build step or dependencies required. Either:

1. Open `index.html` directly in a browser, **or**
2. Serve it locally (recommended, for accurate font loading):
   ```bash
   npx serve .
   # or
   python3 -m http.server 8000
   ```

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. On [vercel.com](https://vercel.com), import the repo.
3. Framework preset: **Other** (no build step needed).
4. Deploy — Vercel serves `index.html` at the root automatically.

## Before You Ship

A few things worth updating before sharing this widely:

- **Avatar** — currently an SVG placeholder in the hero (`.hero__avatar` in `index.html`). Swap in an `<img>` tag once you have a headshot.
- **Project Slot 02** — placeholder card in the Projects section. Replace with GateKeeper, SkillBridge, or CivicPulse once one is far enough along to show.
- **Contact links** — double-check the GitHub, LinkedIn, and portfolio URLs still resolve.

## Testing Notes

Verified with Playwright (Chromium) across:

- 320px, 375px, 390px, 414px (mobile)
- 768px (tablet)
- 1024px, 1440px (desktop)

No horizontal overflow at any breakpoint; smooth-scroll navigation and scroll-spy active states confirmed working end-to-end.

## License

MIT — free to use as a reference for your own portfolio. If you're studying it alongside other open-source templates, credit is appreciated but not required.

## Author

**Dinesh RC**
Final-year IT student, Jeppiaar Engineering College · Chennai, India

- Email: [rcdineshraja@gmail.com](mailto:rcdineshraja@gmail.com)
- GitHub: [@DineshRC006](https://github.com/DineshRC006)
- LinkedIn: [dinesh-rc](https://linkedin.com/in/dinesh-rc-b40741330)
