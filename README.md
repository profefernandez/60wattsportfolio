# 60 Watts of Clarity

**The missing instructions to AI**

The first social work human-centered AI practice, founded by Jason Fernandez, LMSW and Psychology Professor.

---

## 🌟 Overview

60 Watts of Clarity is a portfolio website showcasing a unique intersection of social work, education, and artificial intelligence. Our mission is to make AI accessible and human-centered, providing the clarity needed to navigate this transformative technology.

### Operational Philosophy

Our approach follows three core principles:
1. **Learn** - Understand the fundamentals and implications
2. **Build** - Create practical, human-centered solutions
3. **Deploy** - Implement with care and consideration

---

## 🛠️ Tech Stack

This project is built with modern web technologies focused on performance, accessibility, and developer experience:

### Core Technologies
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript (strict mode)
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[MDX](https://mdxjs.com/)** - Markdown for the component era
- **[Radix UI](https://www.radix-ui.com/)** - Accessible UI primitives

### Development & Testing
- **[Vitest](https://vitest.dev/)** - Unit testing framework
- **[Playwright](https://playwright.dev/)** - End-to-end testing
- **[ESLint](https://eslint.org/)** - Code linting

### Monitoring
- **[Sentry](https://sentry.io/)** - Error tracking and performance monitoring

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm 9.0 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/profefernandez/60wattsportfolio.git
cd 60wattsportfolio
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment variables file:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your configuration:
```env
SENTRY_DSN=your_sentry_dsn_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

### Testing

Run unit tests:
```bash
npm test
```

Run end-to-end tests:
```bash
npm run test:e2e
```

Run end-to-end tests with UI:
```bash
npm run test:e2e:ui
```

### Linting

Check code quality:
```bash
npm run lint
```

Type checking:
```bash
npm run type-check
```

---

## 📁 Project Structure

```
60wattsportfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with fonts & metadata
│   │   ├── page.tsx            # Home page
│   │   ├── about/              # About page
│   │   ├── pricing/            # Pricing page
│   │   ├── contact/            # Contact page
│   │   ├── blog/               # Blog listing & posts
│   │   ├── portfolio/          # Portfolio sections
│   │   └── not-found.tsx       # Custom 404 page
│   ├── components/             # React components
│   │   ├── ui/                 # UI primitives (Button, Card, Modal)
│   │   ├── layout/             # Layout components (Header, Footer, Nav)
│   │   ├── portfolio/          # Portfolio-specific components
│   │   ├── pricing/            # Pricing components
│   │   ├── blog/               # Blog components
│   │   └── accessibility/      # Accessibility components
│   ├── lib/                    # Utility functions and constants
│   ├── content/                # MDX content (blog posts, case studies)
│   ├── styles/                 # Global styles
│   └── types/                  # TypeScript type definitions
├── public/                     # Static assets
├── tests/                      # Test files
│   ├── unit/                   # Unit tests
│   └── e2e/                    # End-to-end tests
├── tailwind.config.ts          # Tailwind CSS configuration
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── vitest.config.ts            # Vitest configuration
└── playwright.config.ts        # Playwright configuration
```

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#1A1A1A` | Page background |
| Surface | `#2A2725` | Cards, panels, elevated surfaces |
| Primary | `#F5A623` | Amber - links, highlights, hover states |
| Accent | `#C75B39` | Terracotta - CTA buttons |
| Text | `#EDE8E2` | Warm white body text |
| Muted | `#6B6560` | Secondary text, borders |

### Typography

- **Headlines:** Fraunces (serif, warm) - via Google Fonts
- **Body:** Inter - via Google Fonts

### Visual Style

- Dark mode only (no light mode toggle)
- Generous whitespace and minimal imagery
- Warm amber glow effects on hover states
- Mobile-first responsive design

---

## ♿ Accessibility

This website is built to meet **WCAG 2.1 AAA** accessibility standards:

- ✅ **High Contrast** - All text meets 7:1 contrast ratio
- ✅ **Keyboard Navigation** - Full site navigable via keyboard
- ✅ **Screen Reader Support** - Proper ARIA labels and semantic HTML
- ✅ **Focus Indicators** - Highly visible focus rings on all interactive elements
- ✅ **Skip Navigation** - Skip to main content link
- ✅ **Reduced Motion** - Respects `prefers-reduced-motion` preference
- ✅ **Responsive Typography** - Relative units (rem/em), 16px minimum

### Commitment

We believe accessibility is not optional. Every feature, component, and page is designed and tested with accessibility as a core requirement, not an afterthought.

---

## 📝 Content Management

Blog posts and portfolio case studies are written in MDX and stored in:
- `src/content/blog/` - Blog posts
- `src/content/portfolio/` - Case studies

---

## 🤝 Contributing

This is a personal portfolio project. If you notice any issues or have suggestions, please feel free to open an issue.

---

## 📄 License

Copyright (c) 2024 60 Watts of Clarity. Licensed under the Apache License 2.0. See [LICENSE](LICENSE) for details.

---

## 👤 Author

**Jason Fernandez, LMSW**  
Psychology Professor & Founder of 60 Watts of Clarity

---

## 🙏 Acknowledgments

Built with love, care, and a commitment to making AI more human-centered.

---

**60 Watts of Clarity** - *The missing instructions to AI*
