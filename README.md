<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.2-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/GSAP-3.14-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License" />
</p>

<h1 align="center">⚡ Code On Vibes</h1>

<p align="center">
  <strong>A Vibe Coding Hackathon — The official event website for Code On Vibes, built with React, GSAP animations, and a futuristic cyberpunk aesthetic.</strong>
</p>

<p align="center">
  <a href="https://www.wings2k26.com/events/codevibes/register">Register Now</a> •
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a>
</p>

---

## 📖 About

**Code On Vibes** is a hackathon event website featuring an immersive, anime-inspired loading experience, neon-glow UI effects, and smooth scroll-triggered animations. The site serves as the registration hub and information center for the Code On Vibes hackathon — part of the **Wings 2K26** event series.

The design follows a dark cyberpunk theme with neon blue (`#4FB6D8`) accents, Orbitron display typography, and GSAP-powered micro-interactions to deliver a premium, high-energy experience.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎬 **Animated Loading Screen** | Frame-by-frame GIF animation (~36 frames) with a two-phase "power-up" and "transformation" sequence, complete with cinematic fade-out |
| 🌟 **Hero Section** | Full-viewport hero with animated title, subtitle, parallax-tracking neon aura, and glowing CTA buttons |
| 🧭 **Responsive Navbar** | Fixed navigation with scroll-aware glass-morphism backdrop, GSAP hover underlines, and a slide-in mobile drawer |
| 🔘 **Glowing Buttons** | GSAP-driven hover glow, scale, and micro-glitch effects on interactive buttons |
| 🪶 **Wings Section** | Scroll-triggered fade-up reveal for hackathon category cards (placeholder-ready) |
| 📅 **Event Schedule** | Timeline-style schedule with staggered slide-in animations on scroll |
| 📬 **Contact Section** | Contact CTA with scale-reveal animation and footer |
| 🎨 **Dark Cyberpunk Theme** | Custom neon-blue color palette, glow utilities, grid pattern backgrounds, and smooth `::selection` styling |
| 📱 **Fully Responsive** | Mobile-first layout with responsive breakpoints across all components |

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | `19.2.0` | Component-based UI framework |
| [Vite](https://vite.dev) | `7.3.1` | Next-gen build tool with HMR |
| [Tailwind CSS](https://tailwindcss.com) | `4.2.1` | Utility-first CSS (via `@tailwindcss/vite` plugin) |
| [GSAP](https://gsap.com) | `3.14.2` | Professional animation library (ScrollTrigger, timelines) |
| [React Router DOM](https://reactrouter.com) | `7.13.1` | Client-side routing |
| [Lucide React](https://lucide.dev) | `0.575.0` | Icon library (Menu / Close icons) |

### Fonts

- **Inter** (300–700) — Body/tech text
- **Orbitron** (400–900) — Display/heading text (futuristic aesthetic)

Loaded via Google Fonts CDN.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or **yarn** / **pnpm**)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/codeOnVibes.git
cd codeOnVibes

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Available Scripts

| Script | Command | Description |
|---|---|---|
| **Dev** | `npm run dev` | Start the Vite dev server with HMR |
| **Build** | `npm run build` | Create production build in `./dist` |
| **Preview** | `npm run preview` | Preview the production build locally |
| **Lint** | `npm run lint` | Run ESLint across all `.js` / `.jsx` files |

---

## 📁 Project Structure

```
codeOnvibes/
├── public/
│   └── vite.svg                          # Favicon
├── src/
│   ├── assets/
│   │   ├── characters/                   # Character images (college-logo, hackslash-logo, deku)
│   │   ├── codeONvibes/                  # Info section background video (luffy-1.mp4)
│   │   ├── contact/                      # Contact page background video (gojo.mp4)
│   │   ├── homeScreen/                   # Home hero background video (tanjiro.mp4)
│   │   ├── loadingScreen/                # 36 GIF frames for the loading animation
│   │   ├── problemStatement/             # Problem statement PDF (CODE.pdf)
│   │   ├── register/                     # Register page background video (eren.mp4)
│   │   ├── scedule/                      # Schedule background video (uchiha.mp4)
│   │   ├── Code-on-vibes.pptx            # Downloadable PPT format
│   │   ├── codeOnVibes.pdf               # Rulebook PDF
│   │   ├── faviIcon.png                  # Favicon source image
│   │   ├── Wings-logo.png                # Wings event logo
│   │   └── react.svg
│   ├── components/
│   │   ├── Buttons.jsx                   # GlowingButton — GSAP hover glow & micro-glitch
│   │   ├── Footer.jsx                    # Venue location, Google Maps link & copyright
│   │   ├── Info.jsx                      # "Code On Vibes" about/info section with video bg
│   │   ├── LoadingScreen.jsx             # Frame-by-frame animated intro screen
│   │   ├── Navbar.jsx                    # Fixed responsive navbar with mobile drawer
│   │   └── prizePool.jsx                 # ₹32,500 prize pool section with character image
│   ├── pages/
│   │   ├── Contact.jsx                   # Contact page with organizers & social links
│   │   ├── Home.jsx                      # Homepage — Hero + Info + PrizePool + Schedule + Footer
│   │   ├── Register.jsx                  # Registration portal (PPT download, problem statement, submit)
│   │   └── Schedule.jsx                  # Event schedule timeline with dates & stagger animation
│   ├── routes/
│   │   └── AppRoute.jsx                  # React Router route definitions
│   ├── App.css                           # Global reset styles
│   ├── App.jsx                           # Root component (loading → main app transition)
│   ├── index.css                         # Tailwind config, custom theme & utility classes
│   └── main.jsx                          # React DOM entry point with BrowserRouter
├── .gitignore
├── eslint.config.js                      # ESLint flat config (React hooks + refresh)
├── index.html                            # HTML entry — Google Fonts, meta tags
├── package.json
├── vite.config.js                        # Vite config — React + Tailwind plugins
└── README.md
```

---

## 🧩 Component Breakdown

### `LoadingScreen.jsx`
The cinematic intro sequence that greets users on first load:
- **Phase 1 (Looping):** Cycles through frames 0–12 at 15 FPS — a "powering up" animation
- **Phase 2 (Transformation):** After ~3.5 seconds, plays frames 13–31 once as a transformation sequence
- **Exit:** GSAP fades out the overlay, revealing the main application beneath
- Uses `import.meta.glob` for dynamic GIF frame imports and `requestAnimationFrame` for smooth playback

### `Navbar.jsx`
- Slide-down entry animation on page load
- Transparent → glass-morphism backdrop on scroll (50px threshold)
- GSAP-animated underline + scale on desktop link hover
- Mobile hamburger menu with full-height slide-in drawer (`Menu` / `X` icons from Lucide)

### `Home.jsx` (Hero)
- Full-viewport hero with **background video** (`tanjiro.mp4`), dark overlay, and radial gradient vignette
- Staggered content reveal: title → subtitle → logos → CTA buttons
- Three CTA buttons: **Round 1 (Online)** (navigates to `/register`), **View Problem Statement** (opens PDF), **Rulebook** (opens PDF)
- Displays **College** and **Hackslash** logos with hover scale effect
- Scroll-down indicator with bouncing arrow at bottom
- Composes full homepage by embedding `Info`, `PrizePool`, `Schedule`, and `Footer` below the hero

### `Info.jsx` (Wings/About)
- "Code On Vibes" about section describing the hackathon — Chhatrapati Sambhajinagar's first Vibe Coding Hackathon
- Background video (`luffy-1.mp4`) with dark overlay for text readability
- Scroll-triggered `fade-up` reveal via GSAP `ScrollTrigger`

### `prizePool.jsx`
- Highlights the **₹32,500 prize pool** with a gradient gold heading
- Features a character image (`deku.png`) with glowing purple/yellow ambient background effects
- Split layout: text content on the left, character image on the right
- GSAP scroll-triggered slide-in animations (text from left, image from right)

### `Buttons.jsx` (GlowingButton)
- Reusable button component with neon-border styling
- GSAP hover effects: `scale(1.05)`, enhanced `box-shadow` glow, and a subtle glitch-tremor effect
- Smooth return-to-rest animation on mouse leave

### `Schedule.jsx`
- Timeline layout with 4 key dates: **3 March** (Problem Statement Release) → **12 March** (PPT Deadline) → **14 March** (Round 1 Results) → **21 March** (Round 2 Hackathon)
- Background video (`uchiha.mp4`) at low opacity
- Staggered `fade-slide` left-to-right animation on scroll
- Hover effect on cards transitions border color to neon-blue

### `Contact.jsx` (Page)
- Full-page contact section with **background video** (`gojo.mp4`) and dark overlay
- Displays organizer profiles, social media links, and contact information
- GSAP scroll-triggered scale + opacity reveal animation

### `Register.jsx` (Page)
- Registration portal with **background video** (`eren.mp4`), dark overlay, and grid pattern
- GSAP timeline animations for title and staggered button reveals
- Three action buttons:
  - **Download PPT Format** — downloads `Code-on-vibes.pptx`
  - **View Problem Statement** — opens `CODE.pdf` in a new tab
  - **Submit PPT** — redirects to a Google Form for PPT submission
- Back navigation via arrow icon

### `Footer.jsx`
- Venue location info for **Government College of Engineering, Osmanpura**
- Google Maps link with map-pin icon
- Gradient neon divider line at the top
- Copyright notice

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--color-neon-blue` | `#4FB6D8` | Primary accent, glows, borders |
| `--color-dark-bg` | `#0a0a0a` | Page background |
| `--color-dark-surface` | `#121212` | Card / surface backgrounds |
| `--color-text-primary` | `#f0f0f0` | Headings, body text |
| `--color-text-secondary` | `#a0a0a0` | Muted / secondary text |

### Custom Utilities (Tailwind)

| Class | Effect |
|---|---|
| `.text-glow` | Neon blue text shadow (10px + 20px blur) |
| `.box-glow` | Neon blue box shadow (15px blur) |
| `.box-glow-strong` | Intense outer + inset neon box shadow |
| `.border-neon` | Neon blue border color |

### Typography

| Token | Font Stack |
|---|---|
| `--font-tech` | `'Inter', system-ui, sans-serif` |
| `--font-display` | `'Orbitron', 'Inter', system-ui, sans-serif` |

---

## 🛣️ Routing

The app uses **React Router v7** with `BrowserRouter`:

| Path | Component | Description |
|---|---|---|
| `/` | `Home` | Hero + Info + Prize Pool + Schedule + Footer |
| `/wings` | `Info` (`Info.jsx`) | About / hackathon info section (standalone) |
| `/schedule` | `Schedule` | Event timeline with key dates (standalone) |
| `/contact` | `Contact` | Contact page with organizers & social links |
| `/register` | `Register` | Registration portal — PPT download, problem statement, submit |

---

## 🔧 Configuration

### Vite (`vite.config.js`)

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### ESLint (`eslint.config.js`)

Uses the ESLint flat config format with:
- `@eslint/js` recommended rules
- `eslint-plugin-react-hooks` (hooks best practices)
- `eslint-plugin-react-refresh` (Vite HMR compatibility)
- Custom rule: unused vars are allowed if they start with an uppercase letter or underscore

---

## 📝 Roadmap

- [x] Populate Wings / Info section with hackathon description
- [x] Add problem statement PDF viewer
- [x] Integrate rulebook PDF
- [x] Add prize pool section
- [x] Add registration portal with PPT submission
- [x] Add venue location & Google Maps link
- [x] Background video hero sections across pages
- [ ] Add event countdown timer
- [ ] Implement dark/light theme toggle
- [ ] Add sponsor section
- [ ] Add team/organizer profiles
- [ ] Progressive Web App (PWA) support

---

## 🤝 Contributing

1. **Fork** the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a **Pull Request**

---

## 📄 License

This project is part of the **Wings 2K26** event series. All rights reserved © 2026 Code On Vibes.

---

<p align="center">
  Built with ⚡ by the <strong>Code On Vibes</strong> team
</p>
