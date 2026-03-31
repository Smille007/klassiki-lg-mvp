# Klassiki — LG WebOS TV App MVP

A fully functional Smart TV app prototype built for [Klassiki](https://klassiki.com), a curated streaming platform for classic Soviet, Eastern European, and world cinema.

**Live demo:** https://klassiki.netlify.app/

---

## Overview

This project is an end-to-end MVP of the Klassiki experience on LG Smart TVs, built with React and packaged as a native WebOS application (`.ipk`). It includes both a hosted-wrapper deployment and a fully self-contained packaged app installable directly on LG TVs via the webOS CLI.

The app replicates core streaming UX patterns — login, browsing, film detail, and video playback — with full TV remote control navigation.

---

## Features

- **Login screen** — credential-based authentication flow with keyboard support
- **Home screen** — hero banner, horizontally scrollable film rows ("Trending Now", "New to Klassiki")
- **Film detail screen** — director, year, country, description, and play/back actions
- **Video player** — supports both `.mp4` and HLS `.m3u8` streaming formats
- **TV remote navigation** — full arrow key, Enter, Back, and Escape support throughout
- **Auto-scroll** — focused card smoothly scrolls into view as user navigates
- **WebOS packaging** — ships as both a hosted-wrapper and a packaged `.ipk` for LG TV sideloading

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite 7 |
| Routing | React Router 7 |
| Styling | CSS (custom, TV-optimized) |
| Deployment | Netlify |
| TV platform | LG WebOS (hosted wrapper + packaged `.ipk`) |

---

## Project Structure

```
klassiki-lg-mvp/
├── klassiki-web/              # React + Vite web app
│   └── src/
│       ├── screens/
│       │   ├── Login.jsx
│       │   ├── Home.jsx
│       │   ├── FilmDetail.jsx
│       │   └── Player.jsx
│       └── data/
│           └── films.js       # Film catalog data
├── webos-hosted-wrapper/      # WebOS app pointing to hosted Netlify URL
│   └── com.klassiki.lg.prototype_1.0.0_all.ipk
└── webos-packaged-app/        # Self-contained packaged WebOS app
    └── com.klassiki.lg.packaged_1.0.0_all.ipk
```

---

## Getting Started

```bash
cd klassiki-web
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

**Demo credentials:** `demo` / `klassiki`

---

## Deploying

```bash
npm run build && netlify deploy --prod --dir=dist
```

---

## Installing on an LG TV

Use the [webOS CLI](https://webostv.developer.lge.com/develop/tools/cli-installation) (`ares-install`) to sideload the `.ipk` onto a developer-mode LG TV:

```bash
ares-install ./webos-packaged-app/com.klassiki.lg.packaged_1.0.0_all.ipk
```

---

## What's Next

Potential improvements for a production build:

- Real authentication against Klassiki's API
- Dynamic film catalog pulled from the Klassiki content API
- Search and category filtering
- Watchlist / favorites
- Playback progress tracking
- LG Content Store submission

---

## Built by

[Daryna Diaz](https://www.linkedin.com/in/daryna-v-17469169/) — Full-Stack Developer  
Pursuit Academy graduate · New York, NY
