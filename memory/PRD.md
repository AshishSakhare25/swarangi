# PRD — Swarangi Yeole Portfolio ("From Thought → To Product")

## Original Problem Statement
Build a completely original, non-template personal portfolio for Swarangi Yeole, Product/UI/UX Designer (2+ yrs). Concept: "FROM THOUGHT → TO PRODUCT" — the site is a designer's sketchbook where ideas become structured products. Editorial/art-directed: warm ivory backgrounds, charcoal type, signature orange accent (#FF5A36), muted lavender/pale blue/soft green, handwritten annotations, thin lines, generous whitespace. SKETCHBOOK × PRODUCT STUDIO, not PORTFOLIO TEMPLATE. No fake stats, testimonials, research, or metrics. Sophisticated enough for recruiters.

## User Personas
- Recruiters / hiring managers evaluating a product designer
- Potential collaborators / clients with "messy ideas"
- Swarangi herself (content owner, will swap placeholder visuals)

## Architecture
- Frontend-only React SPA (CRA + craco), FastAPI backend left as-is (no API needs)
- Routing: `/` (Home), `/work/:slug` (CaseStudy: mentblue, goodlives, tx)
- Libraries: framer-motion (scroll reveals, hero transformation, micro-interactions), lenis (momentum smooth scroll), lucide-react (nav icons)
- Fonts: Fraunces (editorial serif), Plus Jakarta Sans (body), Caveat (handwritten annotations), JetBrains Mono (labels)
- Design system: /app/design_guidelines.json; palette + fonts extended in tailwind.config.js
- Content source: /app/frontend/src/data/projects.js (single source for project cards + case studies)

## Core Requirements (static)
- Hero: kinetic THOUGHT → SKETCH → STRUCTURE → PRODUCT scroll transformation, masked headline reveal "I don't just design screens." → "I explore ideas."
- Interactive "How I see a product" node map (7 nodes with handwritten hover thoughts)
- Selected Work: 3 project nodes (MentBlue, GoodLives, TX) with hover Problem/Role/Platform/Domain
- Case study pages: MESSY → CLEAR draggable slider + chapters (The Mess / The Questions / The Structure / The Interface / The Experience / What Changed), no invented metrics
- Things I Notice, About, Outside the Screen gallery, Toolkit, Design Garden, Recipe card, Process, Contact, Footer
- Full responsiveness (mobile recomposes), prefers-reduced-motion, semantic HTML, data-testids

## Implemented (2026-07-21)
- All 14 sections built and verified via screenshots (desktop + mobile 390px)
- Lenis smooth scroll + custom ink cursor (pointer:fine only)
- Floating pill nav with mobile full-screen menu; hash scroll works across routes
- Case study pages with draggable 3-layer Messy↔Clear slider (pointer + keyboard slider role)
- GoodLives sloth: scroll-driven scene — climbs the tree, takes the fruit, climbs down, eats it, with stage captions
- Per-project richer mock screens: MentBlue dashboard+mobile, GoodLives mobile+web, TX assistant chat+workspace
- MentBlue chapter now cites real figure from resume: 120+ high-fidelity screens across Phase 1 & 2
- Editorial marquee, footer Easter egg, page title/meta, favicon.svg, OG share image (photo + name, /og-image.png)
- REAL assets wired (2026-07-21): portrait.jpg in About (+ nav avatar.jpg), swarangi.design@gmail.com,
  linkedin.com/in/swarangi-yeole/, downloadable /resume.pdf, Gurgaon + B.Des line in About

## Placeholders remaining (clearly marked in UI)
- 6 art tiles in "Outside the screen" (styled placeholders — awaiting real artwork photos)
- Case study interface mock frames ("screen placeholder" — awaiting real product screens)

## Backlog / Next
- P0: Swap in real artwork photos (Outside the screen) and real case study screens
- P1: New section — user is deciding between a "Thinking" writing/notes section vs dark "night sketchbook" mode
- P2: Custom domain + deploy; per-project hero animations
