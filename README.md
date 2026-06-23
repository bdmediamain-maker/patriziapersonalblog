# Patrizia — Personal Journal, Vol. I

Landing page editoriale single-page per personal brand. **Bozza v1** — tutti i copy sono draft modificabili, nessuna immagine (è una bozza testuale).

Realizzata da **BD Media**.

## Stack

- **Astro 5** (`output: static`) — zero JS framework lato client
- **Tailwind CSS v4** (via `@tailwindcss/vite`, config inline in `src/styles/global.css`)
- **Font**: Fraunces (variable serif) + Manrope (sans), via Google Fonts
- Animazioni: solo fade-in + translate-Y su `IntersectionObserver`

## Sviluppo

```bash
npm install
npm run dev
```

Il sito è servito su `http://localhost:4321`.

## Build di produzione

```bash
npm run build      # output statico in ./dist
npm run preview    # anteprima locale della build
```

## Struttura

```
src/
├── pages/index.astro          # la landing (tutti i 13 capitoli)
├── layouts/Base.astro         # <head>, font, grain, scroll-reveal
├── components/
│   ├── GrainOverlay.astro     # film grain SVG fisso
│   ├── Nav.astro              # nav sticky (mix-blend-difference)
│   ├── ChapterHero.astro      # label capitolo + titolo sezione (riusabile)
│   └── VerticalRow.astro      # riga della vertical narrative list
└── styles/global.css          # design tokens, base typography, reveal
```

## Design system (sintesi)

| Token       | Valore                         |
| ----------- | ------------------------------ |
| `--canvas`  | `#0a0a0c` (background)         |
| `--paper`   | `#e8e6e1` (testo / sez. chiare) |
| `--accent`  | `#d4c5a2` (oro champagne)      |
| `--muted`   | `rgba(232,230,225,0.6)`        |
| `--rule`    | `rgba(232,230,225,0.1)`        |

Regole: niente box-shadow, niente border-radius sui bottoni, niente icone, niente emoji, border sempre 1px.

## Deploy

**Netlify** (`netlify.toml` incluso): importa il repo su Netlify → build command `npm run build`, publish dir `dist`, Node 20. Sito statico, nessun adapter necessario.

In alternativa è incluso anche `vercel.json` per un deploy su Vercel.

## Note

- Form di contatto **client-side only** — nessun backend collegato in questa bozza.
- Nessun logo di terzi e nessuna immagine reale: contenuti puramente testuali.
