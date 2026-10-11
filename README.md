# AR Product Demo

A single-page, mobile-friendly product showcase that demonstrates how photos, video, and a 3D model with **"View in your space"** AR will look in the shop we're building.

Open on a phone to experience AR:
- **iOS Safari** → Quick Look (USDZ)
- **Android Chrome** → Scene Viewer (GLB)
- **Desktop** → 3D viewer with rotate/zoom (no AR)

## Quick start

```bash
npm install
npm run dev       # local preview at http://localhost:5173
```

## Drop in your assets

Create `public/assets/` and place your files using **exactly** these names:

```
public/assets/
├── photo_01.jpg         # hero photo
├── photo_02.jpg         # detail / angle 2
├── photo_03.jpg         # detail / angle 3
├── photo_04.jpg         # in-room / lifestyle
├── video_01.mp4         # H.264 MP4 (≤ ~10 MB)
├── video_01_poster.jpg  # optional, but recommended
├── 3d_01.glb            # GLB model (target ≤ 5 MB, Draco if larger)
└── 3d_01.usdz           # USDZ model — required for iOS AR
```

**Tips:**
- If you only have a GLB and need USDZ: convert with Apple's `usdzconvert` or upload at https://www.usdzcreator.com.
- For large GLBs, optimize with `gltf-transform optimize` (Draco compression).
- The README and demo assume JPG/MP4 — change `src/data/product.ts` if your files use different extensions.

## Deploy to Vercel

```bash
npx vercel              # first time — follow prompts
npx vercel --prod       # production
```

Vercel auto-detects Vite. No `vercel.json` needed.

Or push to a Git repo and connect via the Vercel dashboard for auto-deploy on push.

## Stack

- **Vite + React + TypeScript**
- **TailwindCSS v4**
- **embla-carousel-react** (deps installed, ready for a real carousel if needed)
- **`<model-viewer>`** via CDN (Google's web component for 3D + AR)

## How AR works here

`<model-viewer>` automatically picks the right 3D format per device:
- iOS Safari gets `ios-src` → opens the USDZ in Apple Quick Look
- Android Chrome gets `src` → opens the GLB in Scene Viewer
- Desktop falls back to in-browser 3D (rotate/zoom)

A custom slot button (`slot="ar-button"`) styled as the primary CTA sits in the bottom-right of the viewer.

## Notes / out of scope

This is a demo, not production:
- No cart, no checkout, no real data layer
- No auth, no admin UI
- No image optimization pipeline (drop raw JPGs)
- Single product only — add routing + a CMS when wiring into the real shop