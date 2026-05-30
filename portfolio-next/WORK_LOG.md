# Work Log

---

## Task 01 — Refactor ProjectCard Reveal Animation

**Date:** 2026-05-29
**Branch:** `refactor/project-card-reveal`
**Status:** Done

### What changed
- Created `hooks/useInView.ts` — shared `IntersectionObserver` hook that toggles visibility on every scroll in/out
- `ProjectCard` now uses `useInView` instead of an inline observer per card
- Cleaned up `ProjectsSection`: removed block-comment headers, simplified the map callback

### Why
Each card was instantiating its own `IntersectionObserver` inside its own `useEffect`. Extracting to a hook centralises the logic and makes it reusable. Animation now triggers every time a card enters or leaves the viewport, not just on first load.

### Vercel
Deployed successfully to [bouji.dev](https://bouji.dev)
