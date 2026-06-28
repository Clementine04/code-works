# Code Works — Premium Software Studio

A world-class React + Vite frontend (served by Express) for **Code Works**, a software studio building websites, web applications, business systems and mobile apps.

## Tech

- React 18 + Vite 5
- Tailwind CSS 3 (custom premium dark theme)
- Framer Motion (UI motion, scroll reveals, modal & filter transitions)
- Lenis (smooth scrolling)
- Embla Carousel (project gallery)
- React CountUp (animated statistics)
- Lucide React (icons)
- Express + compression (static serving + contact API)

## Getting started

```bash
npm install        # install dependencies
npm run dev        # start the Vite dev server (http://localhost:5173)
```

## Production

```bash
npm run build      # build to /dist
npm start          # serve /dist via Express (http://localhost:3000)
# or in one step:
npm run serve
```

## Structure

```
server.js                 Express server (static + /api/contact)
src/
  App.jsx                 App shell (loader, nav, sections)
  components/             Sections + reusable UI
    ui/                   MagneticButton, TiltCard, DeviceMockup, …
    work/                 ProjectCard, ProjectModal
  data/                   projects.js, content.js
  hooks/                  useLenis, useScrollDirection, useMagnetic
  lib/                    utils.js, motion.js
```

## Sections

Hero → Selected Work (filterable + detail modals) → Services → Industries → Why Code Works → Contact → Footer.

## Notes

- Project previews use pure-CSS gradient device mockups, so the site runs with **zero external image assets**. Drop real screenshots into the `DeviceMockup` / project data later.
- The contact form posts to `POST /api/contact`. Wire it to email/CRM/DB in `server.js`.
- Respects `prefers-reduced-motion` and adapts heavy effects for touch devices.
