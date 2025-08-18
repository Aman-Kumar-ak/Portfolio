## Aman Kumar • Portfolio

A modern personal portfolio with a white canvas, soft warm accents, and category‑driven content. The homepage features alternating Highlight rows (text + media) for MERN, UI/UX, and Android; an Explore Categories grid; and a capsule bottom navigation.

### Tech Stack
- Frontend: React 18 (Vite)
- Styling: CSS variables with a light theme in `frontend/src/styles/theme.css`
- Backend: Express (Node.js) providing content from `backend/data/content.js`

### Key Features
- Clean white background (no nested card boxes) with wider content container
- Alternating “Featured Highlights” rows (left/right media) for:
  - MERN, UI/UX, Android
- Explore Categories grid: MERN, UI/UX, Android, Data Annotator, Startup Ideas
- Certifications preview with quick links
- Persistent bottom capsule navigation (unchanged by design)

---

## Getting Started

### 1) Install dependencies
```bash
npm run install:all
```

### 2) Run in development (concurrently: backend + frontend)
```bash
npm run dev
```

- API: `http://localhost:5000`
- Frontend: `http://localhost:5173`

If you prefer running individually:
```bash
# in /frontend
npm install && npm run dev

# in /backend
npm install && npm start
```

---

## Project Structure
```
frontend/
  public/
    highlight/
      hero-placeholder.svg
      mern-demo.svg
      uiux-demo.svg
      android-demo.svg
  src/
    pages/Home.jsx            # Alternating highlight rows + categories + certs
    components/BottomCapsuleNav.jsx
    styles/theme.css          # Theme tokens (colors, radii, shadows)
    styles/global.css         # Layout, grid, highlight row styles
backend/
  data/content.js            # Source of categories, projects, certs, etc.
```

---

## Content Management
Update your real projects, hackathons, courses, and certifications in:
- `backend/data/content.js`

Add or change categories so they appear in:
- `Home.jsx` (Explore Categories grid pulls from the API)
- Bottom capsule nav reads categories and maintains a fixed order: `home`, `mern`, `ui-ux`, `android`, `data-annotator`, `startup-ideas`.

### Highlight Media
Place images/videos in:
- `frontend/public/highlight/`

Update the media used by each highlight row in `frontend/src/pages/Home.jsx` under the `.media` elements. Current defaults:
- MERN → `/highlight/mern-demo.svg`
- UI/UX → `/highlight/uiux-demo.svg`
- Android → `/highlight/android-demo.svg`
- Hero → `/highlight/hero-placeholder.svg`

You can swap any of these with your own PNG/JPG/MP4.

---

## Theming
All colors and radii live in `frontend/src/styles/theme.css`.

Current palette:
- `--color-bg`: page background (white)
- `--color-surface`: cards/surfaces
- `--color-primary`, `--color-accent`, `--color-highlight`: warm/soft accents
- `--color-text`, `--color-muted`

Layout and highlight styles are in `frontend/src/styles/global.css`:
- `.highlight-row`, `.highlight-row.reverse`
- Themed media backgrounds: `.theme-mern .media`, `.theme-uiux .media`, `.theme-android .media`

---

## Deployment
You can deploy the frontend on Vercel/Netlify and the backend on Render/Fly/Heroku.

1) Build frontend
```bash
cd frontend
npm run build
```
2) Serve `frontend/dist` from your host (or let Vercel/Netlify handle it)
3) Deploy the Express API; ensure the frontend is configured to use the correct API URL if it differs from `http://localhost:5000`.

---

## Scripts (root)
Common NPM scripts (see `package.json`):
- `install:all` – installs deps for frontend and backend
- `dev` – runs both servers together

---

## Notes
- The bottom capsule (`BottomCapsuleNav`) is intentionally preserved as-is per design.
- To add more highlight rows (e.g., Data Annotator, Startup Ideas), replicate the pattern in `Home.jsx` and tag with a theme class or add a new one in `global.css`.

---

## License
MIT © Aman Kumar
