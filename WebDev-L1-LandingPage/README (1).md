# Rural Voice — Landing Page

A static landing page for **Rural Voice**, a civic-tech platform that connects rural citizens with the government officials responsible for water, roads, ration, and power services. This page introduces the platform, explains how complaints are filed and tracked, and highlights the three user roles the full application serves.

## Overview

Rather than a generic SaaS template, the design is grounded in the subject: a public notice board / panchayat record book aesthetic, using a "filed and tracked" stamp motif in the hero and perforated ticket-style cards to walk through the complaint lifecycle.

## Tech Stack

- **HTML5** — semantic markup, no framework
- **CSS3** — Flexbox and Grid for layout, no JavaScript
- **Google Fonts** — Fraunces (display) and Inter (body), loaded via CDN

## Features

- Sticky navigation bar with 4 links (How it works, Services, Trust & record, File a complaint CTA)
- Hero section with eyebrow label, headline, subheadline, dual CTAs, and a signature stamp graphic
- Three-step "How it works" section using a ticket-card design
- Role-based feature grid (Villagers, Officials, Administrators, Status tracking)
- Testimonials section on a dark contrast band
- Footer with contact details, platform links, and social placeholders
- Fully responsive from 1440px down to 320px, verified with no element overlap at any breakpoint

## Design System

| Token | Value | Use |
|---|---|---|
| `--ink` | `#1B2E1C` | Primary text, dark sections |
| `--paper` | `#F5F1E6` | Background |
| `--paper-dim` | `#ECE6D6` | Card backgrounds |
| `--clay` | `#C97A3D` | Primary accent, CTAs |
| `--clay-dark` | `#A85F2A` | Hover/pressed states |
| `--moss` | `#4A6741` | Secondary accent |
| `--sage` | `#8B9A7D` | Muted text on dark backgrounds |

Type scale: **Fraunces** for headings (600 weight), **Inter** for body text (400–700 weight).

## File Structure

```
rural-voice-landing/
├── index.html      # Page markup
├── styles.css      # All styling, including responsive breakpoints
└── README.md
```

## Running Locally

No build step required. Clone or download the two files and open `index.html` directly in a browser:

```bash
git clone https://github.com/DineshRC006/rural-voice-landing.git
cd rural-voice-landing
open index.html   # or double-click the file
```

## Responsive Breakpoints

- **Desktop** (901px+): full multi-column layout
- **Tablet** (≤900px): sections collapse to single column, footer becomes 2-column
- **Mobile** (≤600px): nav wraps, buttons go full-width, all grids stack vertically

## Notes

- Contact details, social links, and testimonial names in this version are placeholders for demonstration purposes.
- Built as part of a front-end practice series; pairs with the main Rural Voice MERN-stack application.

## License

For personal/educational use.
