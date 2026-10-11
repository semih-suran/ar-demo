// Hardcoded product data for the demo. Replace with a CMS/API when wiring into a real shop.

export type Product = {
  title: string
  brand: string
  price: { value: number; currency: string }
  rating: number // 0–5
  reviewCount: number
  description: string
  features: string[]
  photos: string[] // 4 photos
  video: { src: string; poster: string }
  model: { glb: string; usdz: string; alt: string }
}

export const product: Product = {
  title: 'Iron Spider-Man — 1/4 Scale Statue',
  brand: 'Avengers Collectibles',
  price: { value: 249, currency: 'EUR' },
  rating: 4.9,
  reviewCount: 3120,
  description:
    'A premium 1/4 scale polystone statue of Spider-Man in his Iron Spider suit from Avengers: Endgame. Features four articulated mechanical spider legs, a battle-damaged base, and hand-painted details across the red-and-gold suit.',
  features: [
    '1/4 scale · ~46 cm tall',
    'Hand-painted polystone with metallic gold accents',
    'Four articulated mechanical spider legs (posable)',
    'Battle-damaged diorama base with mechanical debris',
    'Limited-edition numbered base plate',
  ],
  photos: [
    '/assets/photo_01.jpg',
    '/assets/photo_02.jpg',
    '/assets/photo_03.jpg',
    '/assets/photo_04.jpg',
  ],
  video: {
    src: '/assets/video_01.mp4',
    poster: '/assets/video_01_poster.jpg',
  },
  model: {
    glb: '/assets/3d_01.glb',
    usdz: '/assets/3d_01.usdz',
    alt: 'Iron Spider-Man action figure — 3D model',
  },
}