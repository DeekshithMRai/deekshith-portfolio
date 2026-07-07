# Deekshith M Rai — Premium Portfolio

A premium, Awwwards-inspired portfolio built with React 19, Three.js, GSAP, and Framer Motion.

## Tech Stack

- **React 19** + **Vite**
- **Tailwind CSS** — design system & glassmorphism
- **Framer Motion** — UI animations & page transitions
- **GSAP + ScrollTrigger** — scroll-driven animations
- **React Three Fiber** — interactive 3D hero background
- **Lenis** — smooth scrolling
- **EmailJS** — contact form
- **GitHub API** — live repository stats

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) (v18+ recommended), **or** use the setup script which auto-detects a portable Node install.

### Quick Setup (Windows)

```powershell
cd C:\Users\deeks\Projects\deekshith-portfolio
powershell -ExecutionPolicy Bypass -File scripts/setup.ps1
npm run dev
```

Open **http://localhost:5173**

> Dependencies are already installed. A portable Node.js (v22) is available at `%USERPROFILE%\.local\node\` if system Node is not on PATH.

### Manual Installation

```bash
cd Projects/deekshith-portfolio
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and add your EmailJS credentials:

```bash
cp .env.example .env.local
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── assets/          # Static assets
├── components/
│   ├── layout/      # Navbar, Footer, Loader, Cursor
│   └── ui/          # Button, Modal, SectionHeading
├── constants/       # Theme, navigation
├── data/            # Personal info, projects, skills
├── hooks/           # Custom React hooks
├── utils/           # Helpers & validation
├── animations/      # GSAP setup & text reveals
├── sections/        # Page sections
├── pages/           # Route pages
└── styles/          # Global CSS
```

## Deployment (Vercel)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables from `.env.example`
4. Deploy

## Documentation

- [EmailJS Setup](./docs/EMAILJS_SETUP.md) — contact form configuration
- [Deploy to Vercel](./docs/DEPLOY.md) — production deployment

## TODO

- [ ] Add EmailJS credentials in `.env.local` (see `docs/EMAILJS_SETUP.md`)
- [ ] Add certificates to `src/data/certificates.js`
- [ ] Push to GitHub and deploy on Vercel (see `docs/DEPLOY.md`)
- [ ] Update `og:url` and sitemap URL after deploying to your domain

## License

Private — © Deekshith M Rai
