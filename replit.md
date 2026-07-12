# Aniko

## Overview
Aniko is a Node.js/Express web app that scrapes anikototv.to (and related mirror
sites) to provide anime search, episode listings, show info, and video streaming.
It includes an HLS proxy endpoint to bypass CORS/Referer restrictions on video CDNs.

## Stack
- Backend: Node.js (CommonJS) + Express 5
- Scraping: axios + cheerio (`scraper.js`)
- Frontend: static HTML/CSS/JS served from `public/`
- No database or external API keys required — all data is scraped live.

## Running
- `npm start` runs `node server.js`, serving the app on port 5000 (configurable
  via the `PORT` env var). The `Start application` workflow runs this
  automatically and is bound to port 5000 for the Replit webview.
- `npm test` runs `node scraper.js` (ad-hoc scraper smoke test, not a real test suite).

## Key endpoints
- `GET /api/search?q=` — search anime by keyword
- `GET /api/episodes/:anilistId` — episode list by AniList ID
- `GET /api/info/:slug` — show info by Anikoto slug
- `GET /api/watch/:anilistId/:audio/:epNum` — watch stream sources
- `/api/proxy` — HLS/CDN proxy (also sends permissive CORS headers)

## Notes
- A global CORS middleware (`Access-Control-Allow-Origin: *`, etc.) was added
  right after `const app = express();` in `server.js` to fix cross-origin
  request errors from the frontend/clients.
- This app depends entirely on scraping third-party sites (anikototv.to,
  megaplay.buzz, vidtube.site, etc.). If those sites change their markup or
  block requests, scraping will break — this is inherent to the project and
  not something to "fix" preemptively.
