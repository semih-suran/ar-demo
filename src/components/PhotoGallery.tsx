import { useState } from 'react'

export function PhotoGallery({ photos, alt }: { photos: string[]; alt: string }) {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i - 1 + photos.length) % photos.length)
  const next = () => setActive((i) => (i + 1) % photos.length)

  return (
    <div className="flex flex-col gap-4">
      {/* Main photo + arrows */}
      <div className="relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
        <div className="aspect-square w-full">
          <img
            key={photos[active]}
            src={photos[active]}
            alt={`${alt} — photo ${active + 1}`}
            className="h-full w-full object-cover"
            loading={active === 0 ? 'eager' : 'lazy'}
          />
        </div>

        {photos.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="absolute top-1/2 left-3 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-[#0b0b0f] shadow ring-1 ring-black/5 transition hover:bg-white"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="absolute top-1/2 right-3 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-[#0b0b0f] shadow ring-1 ring-black/5 transition hover:bg-white"
            >
              ›
            </button>
            <span className="absolute right-3 bottom-3 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white">
              {active + 1} / {photos.length}
            </span>
          </>
        )}
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {photos.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(i)}
            className={
              'aspect-square overflow-hidden rounded-xl bg-white ring-1 transition ' +
              (i === active
                ? 'ring-2 ring-[#0b0b0f] ring-offset-2 ring-offset-[#f5f5f7]'
                : 'ring-black/5 hover:ring-black/20')
            }
            aria-label={`Show photo ${i + 1}`}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  )
}