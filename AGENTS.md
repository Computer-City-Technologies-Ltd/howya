# Boba Bloom — Agent Guide

## Commands
- Dev: `npm run dev` (port 3000)
- Build: `npm run build`
- Static export: `npm run generate`
- Preview: `npm run preview`
- `postinstall` runs `nuxt prepare` (generates `.nuxt/` types)

## Architecture
- **Nuxt 4** app/ directory structure (components/, pages/, composables/, assets/ live under app/)
- Components & composables auto-import (no manual registration needed)
- Some components still explicitly import from `"vue"` (`ref`, `onMounted`, etc.) — safe to follow either style
- `@nuxtjs/tailwindcss` — Tailwind config is **inline in `nuxt.config.ts`** under `tailwindcss.config`, not a separate file
- All components use `<script setup>` with **plain JS** (no `lang="ts"`)
- Design skill stashed at `.agents/skills/frontend-design/SKILL.md` — load it for design work

## Style System
- Colors: primary (amber 50-900), secondary (violet 50-900), accent (green 50-900), pink (50-900), cream (#FFF8F0), soft (#F8FAFC)
- Fonts: Poppins 300-900 (`.font-display` for headings), Inter 300-700 (`.font-body` / default) — loaded via Google Fonts in nuxt.config link tags
- Custom CSS classes defined in `app/assets/css/main.css` at `@layer components`: `glass`, `glass-strong`, `glass-card`, `text-gradient`, `text-gradient-secondary`, `btn-primary`, `btn-secondary`, `blob`/`blob-sm`; utilities: `scrollbar-hide`, `animation-delay-{100-1000}`, `stagger-{1-8}`, `reveal`/`reveal-left`/`reveal-right`/`reveal-scale`

## Image Patterns
- All `<img>` use **Unsplash URLs** with `w={size}&h={size}&fit=crop&auto=format` params, plus `loading="lazy"` and `decoding="async"`
- Every `<img>` has an `@error` handler that hides broken images (`onImgError` in FeaturedDrinks; `onAvatarError` in Testimonials renders fallback initials via innerHTML)
- Images wrapped in containers with gradient fallback backgrounds

## Sections & Navbar
- Section IDs for scroll anchor: `hero`, `featured`, `about`, `reviews`, `footer`
- Navbar uses `text-gray-700` on `bg-white/70 backdrop-blur-sm` in both initial and scrolled states
- `app.vue` sets body `antialiased bg-cream`; `index.vue` overrides body class via `useHead` to just `antialiased` — this drops `bg-cream` at page level (body still gets it from `app.vue`)

## Animations
- Scroll entrance uses CSS `animate-fade-up` with inline `animation-delay` stagger (NOT `useIntersectionObserver` composable, which exists but is unused for section visibility)

## No tests, no linting, no typechecking configured
- File `DESIGN.md` at root is a stray Asana reference; not related to this project
