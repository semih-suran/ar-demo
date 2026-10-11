import { useState } from 'react'
import type { Product } from '../data/product'

const SIZES = ['Standard', 'Deluxe', 'Exclusive']

export function ProductInfo({ product }: { product: Product }) {
  const [size, setSize] = useState(SIZES[0])
  const [toast, setToast] = useState<string | null>(null)

  const onAddToCart = () => {
    setToast(`${product.title} (${size}) added to cart`)
    window.setTimeout(() => setToast(null), 2200)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="text-xs font-semibold tracking-widest text-[#0b0b0f]/60 uppercase">
          {product.brand}
        </div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
          {product.title}
        </h1>

        <div className="mt-3 flex items-center gap-2 text-sm">
          <span aria-hidden className="text-amber-500">
            {'★'.repeat(Math.round(product.rating))}
            {'☆'.repeat(5 - Math.round(product.rating))}
          </span>
          <span className="text-[#0b0b0f]/70">
            {product.rating.toFixed(1)} · {product.reviewCount.toLocaleString()} reviews
          </span>
        </div>

        <div className="mt-4 flex items-baseline gap-3">
          <span className="text-3xl font-semibold">
            {new Intl.NumberFormat('en-IE', {
              style: 'currency',
              currency: product.price.currency,
              maximumFractionDigits: 0,
            }).format(product.price.value)}
          </span>
          <span className="text-sm text-[#0b0b0f]/60 line-through">
            {new Intl.NumberFormat('en-IE', {
              style: 'currency',
              currency: product.price.currency,
              maximumFractionDigits: 0,
            }).format(Math.round(product.price.value * 1.2))}
          </span>
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
            -17%
          </span>
        </div>
      </div>

      <p className="text-[#0b0b0f]/80">{product.description}</p>

      <div>
        <div className="text-sm font-medium">Edition</div>
        <div className="mt-2 flex flex-wrap gap-2">
          {SIZES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              className={
                'rounded-full px-4 py-2 text-sm ring-1 transition ' +
                (s === size
                  ? 'bg-[#0b0b0f] text-white ring-[#0b0b0f]'
                  : 'bg-white text-[#0b0b0f] ring-black/10 hover:ring-black/30')
              }
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <ul className="space-y-2 text-sm text-[#0b0b0f]/80">
        {product.features.map((f) => (
          <li key={f} className="flex gap-2">
            <span aria-hidden className="text-[#0b0b0f]">·</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onAddToCart}
          className="flex-1 rounded-full bg-[#0b0b0f] px-6 py-3 font-medium text-white shadow-sm transition hover:bg-[#1f1f28]"
        >
          Add to cart
        </button>
        <button
          type="button"
          className="rounded-full bg-white px-6 py-3 font-medium text-[#0b0b0f] ring-1 ring-black/10 transition hover:ring-black/30"
        >
          Save
        </button>
      </div>

      <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
        <div className="text-sm font-medium">Free shipping</div>
        <div className="text-sm text-[#0b0b0f]/70">
          Estimated delivery in 3–5 business days · 30-day returns
        </div>
      </div>

      {toast && (
        <div
          role="status"
          className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[#0b0b0f] px-4 py-2 text-sm text-white shadow-lg sm:bottom-6"
        >
          {toast}
        </div>
      )}
    </div>
  )
}