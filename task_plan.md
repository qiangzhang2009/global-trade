# Task Plan — GlobalTrade Navigator (全球贸易导航)

## Project Overview
**Goal:** Build a world-class website that helps Chinese companies find overseas distribution channels, agents, and procurement opportunities worldwide — navigable like a tree with multi-level expansion and filtering.

## Product Concept
- **Name:** GlobalTrade Navigator (全球贸易导航) / TradeRoot (贸易之根)
- **Core function:** Tree-navigable global B2B/Government channel directory organized by continent → region → country → channel type → specific platform
- **Target users:** Chinese manufacturing/export companies looking for overseas distributors, agents, and procurement channels
- **Data coverage:** 7 continents, 54+ African countries, 48+ Asian countries, 35+ Americas, 44+ European countries, 14+ Oceanian countries, 22+ Middle Eastern countries

## Design & Implementation Phases

### Phase 1 — Design System (completed)
- [x] Run /design-consultation
- [x] Create DESIGN.md with complete design system (Earth Observatory aesthetic, Instrument Serif + DM Sans typography, 4-color channel system)
- [x] Generate font+color preview HTML (in /tmp)
- [x] Get user approval on design (DESIGN.md already created)

### Phase 2 — Planning Files
- [x] task_plan.md (this file)
- [x] findings.md (research from markdown files)
- [x] progress.md (session log)

### Phase 3 — Data Architecture
- [x] Parse all 7 regional markdown files into structured JSON data
- [x] Build multi-level tree data structure
- [x] Include: continent → region → country → channel_type → platforms
- [x] Channel types: Official, B2B Platforms, Distribution/Agent Networks, Cross-border Platforms

### Phase 4 — Core UI Implementation
- [x] Single-page HTML/CSS/JS application
- [x] Tree navigation with expand/collapse (multi-level, like a directory tree)
- [x] Channel cards with: name, URL, category badge, description, country flag
- [x] Responsive layout (desktop + mobile)
- [x] Dark/light mode toggle

### Phase 5 — Search & Filter
- [x] Global search bar with instant filtering
- [x] Filter by: region, country, channel type, official/B2B/Distribution

### Phase 6 — Channel Detail View
- [x] Click channel → show detail panel/sidebar
- [x] Full description, official URL (opens new tab), category, region
- [x] Quick-favorite button

### Phase 7 — Additional Features
- [x] Favorites/bookmarks functionality (localStorage)
- [x] Language toggle (zh/en) with full translation
- [x] Zoom/font-size controls
- [x] Notification toasts

### Phase 8 — QA & Polish
- [x] No JavaScript console errors
- [x] Run /design-review for visual QA (B+ overall, A for AI slop)
- [x] Zoom buttons (A-/A+) increased from 28×28 → 44×44px (WCAG touch target)
- [x] Focus-visible ring added to zoom buttons (2px teal outline)
- [x] All `transition: all` replaced with explicit property lists (7 instances)
- [x] `color-scheme: dark` added to `:root`, `color-scheme: light` for light theme
- [x] `prefers-reduced-motion` media query added
- [x] Favorites badge "0" removed from HTML (only shown when count > 0)
- [ ] Polish visual details based on review (FINDING-001 deferred: tree ARIA roles)

## Key Design Decisions
- Tree structure as the primary navigation metaphor (root → branches → leaves → channels)
- Each leaf node is a clickable channel → opens official website
- Three channel tiers: Official/Government, B2B Platforms, Distribution/Agency Networks
- Color-coded by region and channel type
- Premium, professional aesthetic — not a typical directory site

## Design Direction (APPROVED — see DESIGN.md)
- Aesthetic: "Earth Observatory" — geographic atlas + compass + data terminal fusion
- Color palette: Deep dark (#0b0f19) + 4 semantic channel colors (blue/green/amber/purple)
- Typography: Instrument Serif (display) + DM Sans (body) + JetBrains Mono (data)
- Layout: Sidebar tree + content panel, grid-disciplined
