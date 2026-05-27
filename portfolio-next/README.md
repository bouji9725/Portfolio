# Portfolio Platform

A professional, production-grade portfolio platform built with modern web fundamentals. Engineered for performance, security, and maintainability using Next.js 16, React 19, and TypeScript 5.

> **Engineering Philosophy**: This codebase demonstrates enterprise-grade patterns — strict type safety, layered architecture, validated forms, rate limiting, and spam prevention. Built as a reference implementation for clean, professional frontend code.

---

## Table of Contents

- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Development Workflow](#development-workflow)
- [Security & Reliability](#security--reliability)
- [Deployment](#deployment)
- [Engineering Guidelines](#engineering-guidelines)

---

## Architecture

This project follows a **layered, separation-of-concerns** architecture optimized for scalability and maintainability:

```
┌─────────────────────────────────────┐
│   Presentation Layer                │
│   (React Components, UI)            │
├─────────────────────────────────────┤
│   API Layer                         │
│   (Route Handlers, Validation)      │
├─────────────────────────────────────┤
│   Business Logic Layer              │
│   (Use Cases, Email Service)        │
├─────────────────────────────────────┤
│   Data Layer                        │
│   (Database Connections, Storage)   │
└─────────────────────────────────────┘
```

### Key Architectural Patterns

**1. Strict Type Safety**
- End-to-end TypeScript with strict mode enabled
- Zod schemas for runtime validation
- Type-safe API responses and field errors

**2. Server-Client Separation**
- Client components marked with `"use client"` for interactivity
- Server-only modules in `lib/server/` for sensitive operations
- Clear boundaries prevent credential leakage

**3. Validation & Error Handling**
- Zod-based schema validation with custom error mapping
- Field-level error propagation to UI
- Graceful error responses with helpful messages

**4. Security by Default**
- Honeypot fields for bot detection
- IP-based rate limiting (3 requests per 10-minute window)
- Environment variables for sensitive configuration
- CORS and request validation

---

## Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Runtime** | Node.js | 18+ (LTS) |
| **Framework** | Next.js | 16.2.3 |
| **UI Framework** | React | 19.2.4 |
| **Language** | TypeScript | 5.x |
| **Styling** | Tailwind CSS | 4.x |
| **Validation** | Zod | 4.3.6+ |
| **Email** | Resend | 6.12.0+ |
| **Linting** | ESLint | 9.x |
| **Build Tool** | Next.js Built-in | — |

### Why These Choices?

- **Next.js 16**: Latest App Router, server actions, optimized builds
- **React 19**: Improved hooks, transitions, better re-render behavior
- **TypeScript 5**: Strict null checks, const type parameters
- **Tailwind CSS 4**: New CSS engine, better performance, smaller bundles
- **Zod**: Runtime schema validation without code generation overhead
- **Resend**: Modern email service with clean API, built for SaaS

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (verify with `node --version`)
- **npm** 10+ (or yarn/pnpm)
- **Git** for version control

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfolio-next

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Configure environment variables (see .env.example for required keys)
# Update .env.local with:
# - EMAIL_PROVIDER_API_KEY (from Resend dashboard)
# - Any additional service keys
```

### Running Locally

```bash
# Development server with hot reload
npm run dev

# Open browser to http://localhost:3000
```

The application auto-reloads on file changes. TypeScript errors appear in the terminal and browser console.

### Building for Production

```bash
# Create optimized production build
npm run build

# Start production server (requires build)
npm start

# The app runs on http://localhost:3000
```

---

## Project Structure

```
portfolio-next/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page (SSR)
│   ├── globals.css              # Global styles
│   └── api/
│       └── contact/
│           └── route.ts         # Contact form API (POST)
│
├── components/                   # React components
│   ├── layout/                  # Layout primitives
│   │   ├── Header.tsx           # Site header with nav
│   │   ├── Footer.tsx           # Site footer
│   │   ├── Container.tsx        # Width constraint wrapper
│   │   ├── Section.tsx          # Section frame with padding
│   │   └── SiteBackground.tsx   # Visual background effects
│   ├── sections/                # Page sections (Hero, About, etc.)
│   │   ├── HeroSection.tsx      # Intro with CTA
│   │   ├── AboutSection.tsx     # Professional bio
│   │   ├── ProjectsSection.tsx  # Portfolio showcase
│   │   ├── TechStackSection.tsx # Skills visualization
│   │   └── ContactSection.tsx   # Contact form wrapper
│   ├── contact/
│   │   └── ContactForm.tsx      # Contact form component (client)
│   └── ui/                      # Reusable UI components
│       ├── Button.tsx           # Button primitive
│       ├── CardShell.tsx        # Card container
│       ├── ProjectCard.tsx      # Project display card
│       └── ...
│
├── lib/                          # Utility functions
│   ├── theme.ts                 # Centralized design tokens
│   ├── utils.ts                 # Helper functions
│   ├── constants/
│   │   └── contact.ts           # Contact form constants
│   └── server/                  # Server-only utilities
│       ├── contact/
│       │   └── submit-contact.ts      # Contact use case
│       ├── email/
│       │   ├── email-client.ts        # Resend client
│       │   └── send-contact-email.ts  # Email template
│       ├── security/
│       │   ├── honeypot.ts            # Bot detection
│       │   ├── rate-limit.ts          # Request throttling
│       │   └── request-meta.ts        # IP extraction
│       └── env/
│           └── server-env.ts          # Environment validation
│
├── validation/                   # Zod schemas
│   └── contact.schema.ts        # Contact form validation
│
├── types/                        # TypeScript interfaces
│   ├── project.ts               # Project type definition
│   └── api/
│       └── contact.ts           # API response types
│
├── data/                         # Static content
│   ├── projects.ts              # Project list with metadata
│   ├── profile.ts               # Personal info
│   ├── navigation.ts            # Navigation links
│   └── social-links.ts          # Social media URLs
│
├── public/                       # Static assets
│   └── hero-background.avif     # Hero image (AVIF format)
│
├── next.config.ts               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind configuration
├── eslint.config.mjs            # ESLint configuration
└── package.json                 # Dependencies & scripts
```

---

## Key Features

### 1. **Responsive Hero Section**
- Animated binary background effect
- Typing animation for greeting
- Profile image with optimized loading
- Prominent call-to-action buttons

### 2. **Professional Contact Form**
- **Client-side**: Real-time validation, error feedback
- **Server-side**: Zod schema validation, honeypot detection
- **Security**: Rate limiting, IP tracking
- **Integration**: Email delivery via Resend
- **UX**: Field-level errors, success/error messages

### 3. **Project Portfolio**
- Dynamic project cards with images
- Links to live demos and source code
- Tech stack tags per project
- Responsive grid layout

### 4. **Tech Stack Showcase**
- Visual representation of skills
- Organized by category
- Easy to update

### 5. **SEO & Social Sharing**
- Comprehensive metadata tags
- Open Graph image support
- Twitter Card optimization
- Canonical URLs
- Structured markup ready

### 6. **Performance Optimized**
- Image optimization with Next.js Image
- CSS-in-JS eliminated (Tailwind only)
- Server-side rendering where appropriate
- Minified builds

---

## Development Workflow

### Code Quality

```bash
# Run ESLint
npm run lint

# Fix lint issues automatically
npm run lint -- --fix
```

### Type Checking

TypeScript checking is integrated into the build process. Errors block production builds.

```bash
# Manual type check
npx tsc --noEmit
```

### Adding a New Project

1. **Update project data** in `data/projects.ts`:
   ```typescript
   {
     slug: "project-slug",
     title: "Portfolio",
     description: "...",
     techStack: ["Tech1", "Tech2"],
     githubUrl: "https://github.com/bouji9725/Portfolio.git",
     liveUrl: "https://a-isler.com",
     imageUrl: "/favicon.png",
     featured: true,
   }
   ```

2. **Add project image** to `public/` folder

3. **Restart dev server** to see changes

### Updating Contact Form

1. **Modify schema** in `validation/contact.schema.ts` if adding/changing fields
2. **Update component** in `components/contact/ContactForm.tsx`
3. **Update API handler** in `app/api/contact/route.ts` if needed

---

## Security & Reliability

### Security Measures

| Feature | Implementation | Purpose |
|---------|---|---------|
| **Honeypot Detection** | Hidden form field | Block bot submissions |
| **Rate Limiting** | IP-based (3 req/10 min) | Prevent spam flooding |
| **Input Validation** | Zod schemas | Sanitize and validate all inputs |
| **Error Isolation** | Generic error messages | Never leak internals to client |
| **Environment Security** | Server-only modules | Keep API keys out of bundles |
| **CORS Headers** | Next.js built-in | Control cross-origin requests |

### Reliability Patterns

- **Graceful Degradation**: Forms work even if email service fails
- **Retry Logic**: Built into email service integration
- **Error Boundaries**: React error boundaries prevent white screens
- **Type Safety**: TypeScript catches errors at compile time
- **Logging**: Error context preserved in server logs

### Testing Contact Form

```bash
# Test honeypot (should fail)
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Hi","message":"Hello","company":"bot"}'

# Test rate limit (run 4 times from same IP)
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Hi","message":"Hello"}'
```

---

## Deployment

### Vercel (Recommended)

Vercel is the official Next.js platform with zero-config deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Configuration**: Vercel auto-detects Next.js and runs builds optimally.

### Environment Variables (Production)

Set in Vercel dashboard:
- `EMAIL_PROVIDER_API_KEY` (from Resend)
- Any additional service keys

### Custom Server

```bash
# Build locally
npm run build

# Start server
npm start

# App runs on http://localhost:3000
```

### Docker Deployment

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## Engineering Guidelines

### Code Style

- **Naming**: camelCase for variables/functions, PascalCase for components
- **Imports**: Absolute imports with `@/` alias (configured in tsconfig)
- **Components**: Functional components with hooks, prefer composition
- **Formatting**: ESLint enforces consistency automatically

### Component Best Practices

1. **Keep components small** (~150 lines max)
2. **Separate concerns**: UI, logic, styling
3. **Use TypeScript**: No `any`, prefer explicit types
4. **Comment complex logic**: Explain *why*, not *what*
5. **Avoid prop drilling**: Use context for shared state (if needed)

### File Organization

- **One component per file** (except small UI primitives)
- **Colocate tests** alongside source files
- **Group related utilities** in folders
- **Use index.ts** for barrel exports carefully

### Validation

- **Always validate on server**: Client validation is UX only
- **Use Zod schemas**: Single source of truth
- **Map errors clearly**: Connect to UI fields

### Performance

- **Use Next.js Image**: Never raw `<img>` tags
- **Lazy load components**: Dynamic imports for heavy sections
- **Optimize bundle size**: Monitor with `next/bundle-analyzer`
- **Minimize re-renders**: useMemo for expensive computations

### Error Handling

- **Never expose internals**: Return generic messages to clients
- **Log context**: Keep detailed logs server-side
- **Graceful degradation**: App works even when services fail
- **Clear error messages**: Help users understand what happened

---

## Support & Resources

### Documentation

- [Next.js 16 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS 4](https://tailwindcss.com/docs)
- [Zod Documentation](https://zod.dev)
- [Resend Email API](https://resend.com/docs)

### Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**TypeScript errors in IDE but build works?**
- Restart TypeScript server: `Cmd+Shift+P` → "TypeScript: Restart Server"

**Email not sending?**
- Verify `EMAIL_PROVIDER_API_KEY` in `.env.local`
- Check email logs in Resend dashboard
- Ensure contact endpoint is accessible: `curl http://localhost:3000/api/contact`

---

## License

This project is private and for portfolio purposes. All rights reserved.

---

**Built with engineering excellence in mind. 2026.**
