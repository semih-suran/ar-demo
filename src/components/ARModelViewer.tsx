import { useEffect, useState, createElement, type CSSProperties, type ReactNode } from 'react'

// <model-viewer> is a custom web component loaded via CDN — not a typed JSX element.
// Ponytail: a thin typed wrapper avoids fighting React 19's JSX namespace.
type ModelViewerProps = {
  src?: string
  'ios-src'?: string
  alt?: string
  ar?: boolean
  'ar-modes'?: string
  'ar-scale'?: string
  'ar-placement'?: 'floor' | 'wall'
  'camera-controls'?: boolean
  'auto-rotate'?: boolean
  'shadow-intensity'?: string
  'environment-image'?: string
  loading?: 'auto' | 'eager' | 'lazy'
  reveal?: 'auto' | 'manual'
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

const ModelViewer = ((props: ModelViewerProps) =>
  createElement('model-viewer', props as Record<string, unknown>)) as unknown as (props: ModelViewerProps) => ReactNode

export function ARModelViewer({
  glb,
  usdz,
  alt,
}: {
  glb: string
  usdz: string
  alt: string
}) {
  // Track mobile so we can show the "open on phone" hint on desktop.
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px), (pointer: coarse)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <div
        className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white to-[#ececf2] ring-1 ring-black/5"
        style={{ minHeight: 480 }}
      >
        <ModelViewer
          src={glb}
          ios-src={usdz}
          alt={alt}
          ar
          ar-modes="webxr scene-viewer quick-look"
          ar-scale="auto"
          ar-placement="floor"
          camera-controls
          auto-rotate
          shadow-intensity="1.2"
          environment-image="neutral"
          loading="eager"
          reveal="auto"
          style={{ width: '100%', height: 480 }}
        >
          <button slot="ar-button" className="ar-cta">
            View in your space
          </button>
        </ModelViewer>

        {!isMobile && (
          <div className="pointer-events-none absolute top-4 left-4 max-w-xs rounded-xl bg-white/90 px-3 py-2 text-xs text-[#0b0b0f]/80 shadow ring-1 ring-black/5 backdrop-blur">
            <strong className="block text-[#0b0b0f]">Open on your phone</strong>
            Scan this page with a mobile device to tap{' '}
            <em>View in your space</em> and place the figure on your desk or
            shelf.
          </div>
        )}
      </div>

      {/* AR quick-reference card */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-4 ring-1 ring-black/5">
          <div className="text-xs font-semibold tracking-wide text-[#0b0b0f]/60 uppercase">
            iPhone / iPad
          </div>
          <div className="mt-1 text-sm">
            Tap <strong>View in your space</strong> → opens Apple Quick Look with
            the figure on your desk.
          </div>
        </div>
        <div className="rounded-xl bg-white p-4 ring-1 ring-black/5">
          <div className="text-xs font-semibold tracking-wide text-[#0b0b0f]/60 uppercase">
            Android
          </div>
          <div className="mt-1 text-sm">
            Tap <strong>View in your space</strong> → opens Scene Viewer, place on
            any flat surface.
          </div>
        </div>
        <div className="rounded-xl bg-white p-4 ring-1 ring-black/5">
          <div className="text-xs font-semibold tracking-wide text-[#0b0b0f]/60 uppercase">
            Desktop
          </div>
          <div className="mt-1 text-sm">
            Drag to rotate · scroll to zoom · 3D preview only (AR needs a phone).
          </div>
        </div>
      </div>
    </div>
  )
}