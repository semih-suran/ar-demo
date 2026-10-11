export function VideoPanel({
  src,
  poster,
}: {
  src: string
  poster?: string
}) {
  return (
    // Mobile-portrait (9:16) video. Capped to 80vh so it doesn't dominate
    // the page on desktop, and centered.
    <div className="flex justify-center">
      <div className="overflow-hidden rounded-2xl bg-black ring-1 ring-black/5 max-h-[80vh] w-auto">
        <video
          controls
          playsInline
          preload="metadata"
          poster={poster}
          className="block max-h-[80vh] w-auto"
          style={{ aspectRatio: '9 / 16' }}
        >
          <source src={src} type="video/mp4" />
          Sorry, your browser does not support embedded video.
        </video>
      </div>
    </div>
  )
}