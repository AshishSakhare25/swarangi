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
- Case study interface mock frames ("screen placeholder" — awaiting real product screens)

## Real artwork wired (2026-07-21)
- "Outside the screen" now shows 5 real pieces: pencil sketch (art-5), lotus watercolour (art-4),
  sunflower watercolour painted in park (art-3), Mathura gate photograph (art-2),
  Radha/Krishna acrylic on canvas (art-1) — all optimized to 1000px webp→jpg, matted frames, object-contain
- 2026-07-21: first four pieces rotated 90° to true vertical (subjects upright); full-screen lightbox added
  (click/Escape/backdrop close, lenis pause, per-piece creation-day note)
- 2026-07-21: Node map centre replaced with collage of 5 REAL product screens (MentBlue home + dashboard,
  GoodLives dashboard + sloth signup, TX event selection) — fan-out on hover, compact stack on mobile
- 2026-07-21 batch: nav avatar face-cropped; Selected Work cards show laptop product shots
  (work-mentblue/goodlives/tx.jpg) and expand details on hover; "Things I notice" rebuilt as scattered
  observation wall (5 interactive UI specimens + "Before I design, I notice." statement); About uses B&W
  portrait (portrait-bw.jpg) with makes things / notices details / finds clarity annotations; Framer removed
  from toolkit; recipe card (with taped coffee+laptop photo) moved into Process section side; contact
  "Let's talk" hover reveals floating copy-email (clipboard + sonner toast) and LinkedIn icons
- 2026-07-21 tweaks: work cards reverted to original layout + laptop shot beside heading (PRODUCTS badge removed);
  note line now "there are more. I should probably add them."; observation wall — card 01 dots removed + arrow on
  hover, card 03 per-button icons/varied colors (apply plain), card 05 bookmark icon; About meta line includes
  GoodLives + LPU; photo annotations now on paper pills for readability
- 2026-07-21: MentBlue case study uses REAL screens — slider CLEAR side = actual dashboard
  (cs-mentblue-dashboard.jpg), middle = hand-built lo-fi wireframe of the same screen; THE INTERFACE chapter
  shows real dashboard + website shots tagged "real screen". GoodLives/TX still use mock frames (next)
- 2026-07-21 (visual edits): tagline de-"LinkedIn-like"d; THE INTERFACE now a 6-slide carousel (dashboard,
  courses, hackathons, applications pipeline, recruiter, admin) + "visit mentblue.com" live link;
  slider CLEAR label turns green when active
- 2026-07-21: TX case study — timeline "≈ 3 months"; slider CLEAR = project details overview screen;
  5-slide carousel (planner overview, AI consultant, project details, function+live chat, concept deck),
  carousel only (no extra cards); MentBlue website shot now full-length scrollable box

## Backlog / Next
- P0: Swap in real artwork photos (Outside the screen) and real case study screens
- P1: New section — user is deciding between a "Thinking" writing/notes section vs dark "night sketchbook" mode
- P2: Custom domain + deploy; per-project hero animations
