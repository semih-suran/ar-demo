import { useState } from 'react'
import type { Product } from '../data/product'
import { MediaTabs } from './MediaTabs'
import { PhotoGallery } from './PhotoGallery'
import { VideoPanel } from './VideoPanel'
import { ARModelViewer } from './ARModelViewer'

type Tab = 'photos' | 'video' | '3d'

export function MediaGallery({ product }: { product: Product }) {
  const [tab, setTab] = useState<Tab>('photos')

  return (
    <section className="flex flex-col gap-4">
      <MediaTabs active={tab} onChange={setTab} />

      {tab === 'photos' && (
        <PhotoGallery photos={product.photos} alt={product.title} />
      )}

      {tab === 'video' && (
        <VideoPanel src={product.video.src} poster={product.video.poster} />
      )}

      {tab === '3d' && (
        <ARModelViewer
          glb={product.model.glb}
          usdz={product.model.usdz}
          alt={product.model.alt}
        />
      )}
    </section>
  )
}