# CLAUDE.md — 60 Watts of Clarity Portfolio

## Project Overview

Portfolio website for **60 Watts of Clarity** — "The missing instructions to AI." Showcases the intersection of social work, education, and AI. Founded by Jason Fernandez, LMSW and Psychology Professor.

Core philosophy: **Learn → Build → Deploy**

## Tech Stack

- **Framework:** Next.js 15.1.3 (App Router, React 19)
- **Language:** TypeScript 5.7.2 (strict mode)
- **Styling:** Tailwind CSS 3.4.17 (dark-mode only, class-based)
- **UI Primitives:** Radix UI (Dialog, DropdownMenu, NavigationMenu, Slot)
- **Content:** MDX via @next/mdx and next-mdx-remote
- **Error Tracking:** Sentry (@sentry/nextjs)
- **Testing:** Vitest (unit) + Playwright (e2e)
- **Linting:** ESLint 9 (next/core-web-vitals + next/typescript + jsx-a11y/strict + security)
- **Formatting:** Prettier 3 (integrated via eslint-plugin-prettier)
- **Accessibility Auditing:** eslint-plugin-jsx-a11y (lint-time) + @axe-core/playwright (e2e AAA audits)

## Commands

```bash
npm run dev            # Dev server on :3000
npm run build          # Production build
npm start              # Production server
npm run lint           # ESLint (a11y + security + prettier)
npm run lint:fix       # ESLint auto-fix
npm run format         # Prettier auto-format src/
npm run format:check   # Prettier check (CI-friendly)
npm run check          # Type-check + lint + format check (run before commits)
npm run audit:security # npm audit for dependency vulnerabilities
npm run type-check     # TypeScript validation
npm test               # Unit tests (Vitest)
npm run test:e2e       # E2E tests (Playwright)
npm run test:e2e:ui    # E2E tests with UI
```

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (fonts, metadata)
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About page
│   ├── pricing/page.tsx        # Pricing page (3 tiers)
│   ├── contact/page.tsx        # Contact form
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Blog post (dynamic)
│   ├── portfolio/
│   │   ├── page.tsx            # Portfolio overview
│   │   ├── ai/                 # AI projects (+ [slug])
│   │   ├── websites/           # Websites portfolio (+ [slug])
│   │   ├── education/          # Education portfolio
│   │   ├── consulting/         # Consulting portfolio
│   │   ├── social-work/        # Social work portfolio
│   │   └── workshops/          # Workshops portfolio
│   └── not-found.tsx           # Custom 404
├── components/
│   ├── ui/                     # Primitives: Button, Card, Modal
│   ├── layout/                 # Header, Nav, Footer, SkipLink
│   ├── portfolio/              # PortfolioGrid, PortfolioFilter, CaseStudy
│   ├── pricing/                # PricingCard
│   ├── blog/                   # PostCard, PostLayout
│   └── accessibility/          # AccessibilityPanel
├── lib/
│   ├── constants.ts            # Site config, nav items, categories
│   ├── utils.ts                # cn(), formatDate(), slugify(), truncate()
│   └── sentry.ts               # Sentry initialization
├── types/
│   └── index.ts                # BlogPost, PortfolioItem, PricingTier, NavItem, SiteMetadata
├── content/
│   ├── blog/                   # MDX blog posts
│   └── portfolio/              # MDX case studies
└── styles/
    └── globals.css             # Tailwind directives, custom utilities, a11y styles
```

## Architecture & Patterns

### Server vs Client Components
- **Server Components** are the default (Next.js 15 App Router)
- **Client Components** (`'use client'`) only where needed: Nav.tsx, Modal.tsx, PortfolioFilter.tsx, AccessibilityPanel.tsx
- Keep interactivity at the leaves; avoid making parent components client-side

### Component Conventions
- **PascalCase** for component files and exports
- **camelCase** for utilities, constants, and variables
- Feature-based directory organization under `components/`
- Props defined as TypeScript interfaces, co-located in component files or `types/index.ts`
- Radix `asChild` / Slot pattern used in Button and Card for flexible rendering

### Styling
- Tailwind utility classes, composed with `cn()` helper (clsx + tailwind-merge)
- Component variants via `class-variance-authority` (see Button.tsx)
- **No light mode** — dark theme only
- Mobile-first responsive design (breakpoints: `md` 768px, `lg` 1024px)

### Path Aliases
- `@/*` maps to `./src/*` (configured in tsconfig.json)

### Content Management
- Blog posts and portfolio items use MDX files in `src/content/`
- Dynamic routes with `[slug]` for individual posts/projects
- Params are `Promise`-based in Next.js 15 (must `await` params in dynamic routes)

## Design System

### Colors (Tailwind tokens)
| Token        | Hex       | Usage                    |
|-------------|-----------|--------------------------|
| background  | `#1A1A1A` | Page background          |
| surface     | `#2A2725` | Cards, elevated surfaces |
| primary     | `#F5A623` | Amber — links, buttons   |
| accent      | `#C75B39` | Terracotta — CTAs        |
| text        | `#EDE8E2` | Body text (warm white)   |
| muted       | `#6B6560` | Secondary text           |

### Typography
- **Headings:** Fraunces (serif)
- **Body:** Inter (sans-serif)
- Minimum font size: 16px
- Line height: 1.6

### Custom Utilities (globals.css)
- `.glow-hover` — Amber glow on hover with lift
- `.text-glow` — Text shadow glow
- `.section-spacing` — Consistent vertical padding
- `.container-padding` — Responsive horizontal padding

## Accessibility (WCAG 2.1 AAA)

This project targets **AAA compliance**. Always maintain:
- **7:1 minimum contrast ratio** for text
- **4px focus ring** on all interactive elements (visible on keyboard navigation)
- **Semantic HTML** — use correct heading levels, landmarks, and ARIA attributes
- **Reduced motion support** — wrap animations in `@media (prefers-reduced-motion: no-preference)`
- **Skip navigation link** (SkipLink component) pointing to `#main-content`
- **Screen reader text** — use `.sr-only` class for visually hidden labels
- All interactive elements must be keyboard-accessible

### Automated A11y Checking
- **Lint-time:** `eslint-plugin-jsx-a11y` (strict mode) catches issues as you write JSX
- **E2E:** `@axe-core/playwright` runs axe-core AAA audits on rendered pages
- **CI:** `npm run check` runs type-check + lint (including a11y rules) + format check

## Environment Variables

```env
SENTRY_DSN=              # Optional: Sentry error tracking DSN
NEXT_PUBLIC_SITE_URL=    # Required: Public site URL (default: http://localhost:3000)
```

Copy `.env.example` to `.env.local` for local development.

## Testing

- **Unit tests:** `tests/unit/` — Vitest with jsdom environment
- **E2E tests:** `tests/e2e/` — Playwright (Chromium, Firefox, WebKit)
- Test directories exist but tests are currently placeholders (.gitkeep)
- Run `npm test` before committing changes
- Run `npm run type-check` to validate TypeScript

## Key Constants (lib/constants.ts)

- `SITE_NAME`: "60 Watts of Clarity"
- `SITE_TAGLINE`: "The missing instructions to AI"
- `SITE_AUTHOR`: "Jason Fernandez, LMSW"
- `FRAMEWORK`: ['Learn', 'Build', 'Deploy']
- `PORTFOLIO_CATEGORIES`: websites, ai, education, social-work, workshops, consulting
- Navigation structure with portfolio submenu defined here

## Important Notes

- **No API routes** — static/SSG portfolio site
- **No global state management** — uses React useState where needed
- **Apache 2.0 License**
- Node.js >= 18.0.0 required
- Dynamic route params in Next.js 15 are Promises — always `await` them
- `noUnusedLocals` and `noUnusedParameters` are enabled in tsconfig — clean up unused code
