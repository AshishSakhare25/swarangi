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
- GoodLives sloth signup story strip; MentBlue honesty note (founders supplied research)
- Editorial marquee (thought → sketch → structure → product → repeat)
- Footer Easter egg "Built from scratch. No template survived."
- Page title/meta updated

## Placeholders (clearly marked in UI)
- Portrait in About ("portrait placeholder — swap with your photo")
- 6 art tiles in "Outside the screen" (styled placeholders)
- Case study interface screens ("screen placeholder" mock frames)
- Contact: hello@swarangiyeole.com + linkedin.com/in/swarangiyeole (placeholders)

## Backlog / Next
- P0: Swap in real portrait, artwork photos, real case study screens (replace placeholders)
- P1: Real email + LinkedIn URLs
- P1: Favicon + Open Graph share image
- P2: Dark "night sketchbook" mode; per-project hero animations; blog/"Thinking" writing section
