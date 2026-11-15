# Rutuja Gaikwad — Portfolio

Personal portfolio of a software developer with 4 years in React, Angular and TypeScript.

**Live:** https://rng22.github.io/portfolio/

## Stack

React 19 + TypeScript, built with Vite. Tech logos from [react-icons](https://react-icons.github.io/react-icons/) (Simple Icons) in their brand colours. Deployed to GitHub Pages by GitHub Actions on every push to `main`.

- Light theme by default, with a sun/moon toggle for dark mode (your choice is remembered)
- Responsive, keyboard accessible, respects reduced-motion
- SEO and social previews (Open Graph, JSON-LD `Person`)

## Edit content

Everything you see comes from **`src/data.ts`**: profile, experience, projects, skills, education.
Tech logos and colours are in `src/tech.tsx`. To show LinkedIn, set `profile.linkedin` in `src/data.ts`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173/portfolio/
npm run build      # production build in dist/
```
