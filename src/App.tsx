import { MediaGallery } from './components/MediaGallery'
import { ProductInfo } from './components/ProductInfo'
import { product } from './data/product'

function App() {
  return (
    <div className="min-h-screen pb-24 sm:pb-0">
      <header className="sticky top-0 z-20 border-b border-black/5 bg-[#f5f5f7]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#0b0b0f] text-sm font-bold text-white">
              X
            </div>
            <span className="font-semibold tracking-tight">X-Shop · AR Demo</span>
          </div>
          <a
            href="#product-info"
            className="hidden text-sm text-[#0b0b0f]/70 hover:text-[#0b0b0f] sm:block"
          >
            About this demo
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_1fr] md:gap-12">
          <MediaGallery product={product} />
          <div id="product-info" className="md:sticky md:top-20 md:self-start">
            <ProductInfo product={product} />
          </div>
        </div>

        <section className="mt-16 rounded-3xl bg-white p-6 ring-1 ring-black/5 sm:p-10">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            About this demo
          </h2>
          <p className="mt-2 max-w-2xl text-[#0b0b0f]/80">
            A single-product page showing what an AR-enabled online shop looks
            like. Switch between <strong>Photos</strong> and{' '}
            <strong>3D View</strong>. On a phone, the <em>3D View</em> tab offers{' '}
            <strong>View in your space</strong> — Quick Look on iOS, Scene
            Viewer on Android. On desktop you only get rotate/zoom; AR is a
            mobile-only feature by design (it needs your camera and ARKit /
            ARCore).
          </p>
          <ul className="mt-4 space-y-1 text-sm text-[#0b0b0f]/70">
            <li>· Drop your assets into <code>public/assets/</code> using the naming shown in the README.</li>
            <li>· <code>npm run dev</code> to preview locally.</li>
            <li>· <code>npx vercel</code> to deploy.</li>
          </ul>
        </section>
      </main>

      {/* Mobile sticky bottom CTA — keeps AR one tap away. */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-black/5 bg-white/95 px-4 py-3 backdrop-blur sm:hidden">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => {
              const tab3d = document.querySelector<HTMLButtonElement>(
                '[role="tab"][aria-selected="false"]:last-of-type',
              )
              tab3d?.click()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex-1 rounded-full bg-[#0b0b0f] px-4 py-3 text-sm font-medium text-white"
          >
            View in your space
          </button>
          <button
            type="button"
            onClick={() => {
              const btn = document.querySelector<HTMLButtonElement>(
                'main button:not([role="tab"])',
              )
              btn?.click()
            }}
            className="flex-1 rounded-full bg-white px-4 py-3 text-sm font-medium text-[#0b0b0f] ring-1 ring-black/10"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default App