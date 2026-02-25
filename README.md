# GiliranKu Landing Page

A modern, responsive, production-ready marketing site for **GiliranKu** (Real-Time Queuing & Ordering System). Static site with no backend—marketing, feature documentation, legal pages, and app download.

## Tech Stack

- **Framework:** Vite + React
- **Styling:** TailwindCSS
- **Routing:** React Router v6
- **SEO:** react-helmet-async (meta titles, descriptions, Open Graph)
- **Icons:** Lucide React

## Prerequisites

- Node.js 18+
- npm or yarn

## Setup

1. **Clone and install**

   ```bash
   cd GiliranKu
   npm install
   ```

2. **Environment variables**

   Copy the example env file and fill in your values:

   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your app name, download URLs, support email, company info, and optional social links. All `VITE_*` variables are optional but recommended for a complete site.

3. **Run locally**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173).

4. **Build for production**

   ```bash
   npm run build
   ```

   Output is in `dist/`. Preview the build:

   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/
│   ├── layout/     # Navbar, Footer
│   └── ui/         # Section, CTA, FeatureCard, FAQAccordion
├── data/           # features.ts
├── pages/          # Home, Download, Features, Privacy, Terms, Help, About
├── App.tsx
├── main.tsx
└── index.css
```

## Pages

| Route              | Description                    |
|--------------------|--------------------------------|
| `/`                | Home (hero, features, CTAs)    |
| `/download`        | App download (Android/iOS)     |
| `/features`        | Feature documentation          |
| `/privacy-policy`  | Privacy policy                 |
| `/terms-of-service`| Terms of service              |
| `/help`            | FAQ and support contact        |
| `/about`           | Company, vision, mission       |

## Deployment

### Vercel

- Push to GitHub and import the repo in Vercel.
- Build command: `npm run build`
- Output directory: `dist`
- Add environment variables in Vercel dashboard (same names as in `.env.example`).

### Netlify

- Connect the repo; build command: `npm run build`, publish directory: `dist`.
- Add env vars in Netlify **Site settings → Environment variables**.

## Environment Variables

All config is via `VITE_*` variables so the build can be customized without code changes. See `.env.example` for the full list.

## License

Private / All rights reserved.
