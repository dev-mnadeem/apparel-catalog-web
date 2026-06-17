'use client'

import { useState, use } from 'react'
import Link from 'next/link'
import { MinusIcon, PlusIcon, StarIcon } from '@heroicons/react/24/solid'

import { findProduct, relatedProducts, sections, type CatalogueProduct } from '@/lib/catalogue'
import { MAX_LINE_QUANTITY } from '@/lib/cart'
import { useCart } from '@/contexts/CartContext'
import { productImage } from '@/lib/image-mapping'

const displayName = (name: string) => name.toLowerCase()

function Rating({ product, size = 'h-4 w-4' }: { product: CatalogueProduct; size?: string }) {
  if (product.rating === undefined) return null
  return (
    <p className="flex items-center gap-2 text-sm text-stone-600">
      <span className="flex" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon key={star} className={`${size} ${star <= Math.round(product.rating ?? 0) ? 'text-saffron-500' : 'text-stone-300'}`} />
        ))}
      </span>
      <span>
        {product.rating} out of 5
        {product.reviews !== undefined && <> &middot; {product.reviews} reviews</>}
      </span>
    </p>
  )
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const product = findProduct(use(params).id)

  if (!product) {
    return (
      <main className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="text-4xl">We could not find that piece</h1>
        <p className="mt-3 text-stone-600">It may have sold out or the link may be mistyped.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/categories/women/silk-scarves" className="btn-primary">Browse silk scarves</Link>
          <Link href="/search" className="btn-outline">Search the catalogue</Link>
        </div>
      </main>
    )
  }

  const section = sections[product.section]
  const bagLine = (item: CatalogueProduct) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    originalPrice: item.originalPrice,
    image: item.images[0] ?? '',
    category: `${sections[item.section].department} - ${sections[item.section].label}`,
  })
  const images = product.images
  const activeImage = images[Math.min(selectedImage, images.length - 1)] ?? ''
  const specs = [
    ['Material', product.material],
    ['Care', product.care],
    ['Colours', product.colors?.join(', ')],
    ['Size', product.sizes?.join(', ')],
  ].filter((spec): spec is [string, string] => Boolean(spec[1]))
  const related = relatedProducts(product)

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="text-sm text-stone-600">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <li><Link href="/" className="hover:text-black">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href={`/categories/${section.department.toLowerCase()}`} className="hover:text-black">{section.department}</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href={section.href} className="hover:text-black">{section.label}</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="capitalize text-black">{displayName(product.name)}</li>
        </ol>
      </nav>

      <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-14">
        <section aria-label="Photos" className="space-y-3">
          <div className="relative overflow-hidden rounded-lg bg-madder-100">
            <img
              src={productImage(activeImage, 900)}
              alt={`${displayName(product.name)}, view ${selectedImage + 1} of ${images.length}`}
              className="aspect-[4/5] w-full object-cover"
            />
            <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em]">
              {product.style ?? section.label}
            </span>
          </div>
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {images.map((image, index) => (
                <button
                  key={image + index}
                  type="button"
                  aria-label={`Show view ${index + 1}`}
                  aria-pressed={selectedImage === index}
                  onClick={() => setSelectedImage(index)}
                  className={`overflow-hidden rounded-md border-2 ${selectedImage === index ? 'border-black' : 'border-transparent hover:border-stone-300'}`}
                >
                  <img src={productImage(image, 200)} alt="" className="aspect-square w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </section>

        <section aria-labelledby="product-name" className="lg:pt-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-madder-700">
            {section.department} &middot; {section.label}
          </p>
          <h1 id="product-name" className="mt-2 text-4xl capitalize sm:text-5xl">{displayName(product.name)}</h1>
          <div className="mt-3"><Rating product={product} /></div>

          <p className="mt-5 flex items-baseline gap-3">
            <span className="text-2xl font-semibold text-black">{product.price}</span>
            {product.originalPrice && (
              <span className="text-stone-500 line-through">
                <span className="sr-only">Was </span>{product.originalPrice}
              </span>
            )}
          </p>

          {product.description && <p className="mt-5 max-w-prose leading-relaxed text-stone-700">{product.description}</p>}

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div role="group" aria-labelledby="quantity-label" className="flex items-center rounded-md border border-stone-300 bg-white">
              <span id="quantity-label" className="sr-only">Quantity</span>
              <button
                type="button"
                aria-label="Decrease quantity"
                disabled={quantity <= 1 || product.soldOut}
                className="p-3 disabled:opacity-40"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <MinusIcon className="h-4 w-4" />
              </button>
              <span aria-live="polite" className="min-w-[2.5rem] text-center font-medium">{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                disabled={quantity >= MAX_LINE_QUANTITY || product.soldOut}
                className="p-3 disabled:opacity-40"
                onClick={() => setQuantity(Math.min(MAX_LINE_QUANTITY, quantity + 1))}
              >
                <PlusIcon className="h-4 w-4" />
              </button>
            </div>
            {product.soldOut ? (
              <button type="button" disabled className="btn-primary flex-1 cursor-not-allowed opacity-50">Sold out</button>
            ) : (
              <button type="button" onClick={() => addToCart(bagLine(product), quantity)} className="btn-primary flex-1">
                Add to bag
              </button>
            )}
          </div>

          {specs.length > 0 && (
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-stone-200 pt-6 text-sm">
              {specs.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-stone-500">{label}</dt>
                  <dd className="mt-0.5 text-black">{value}</dd>
                </div>
              ))}
            </dl>
          )}

          {product.details && product.details.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl">Details</h2>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-stone-700 marker:text-madder-600">
                {product.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </div>
          )}

          {product.styling && product.styling.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl">How to wear it</h2>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-stone-700 marker:text-saffron-500">
                {product.styling.map((tip) => <li key={tip}>{tip}</li>)}
              </ul>
            </div>
          )}
        </section>
      </div>

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="mt-20">
          <h2 id="related-heading" className="text-3xl">More {section.label.toLowerCase()}</h2>
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {related.map((item) => (
              <li key={item.id} className="flex flex-col">
                <Link href={`/product/${item.id}`} className="group block">
                  <div className="overflow-hidden rounded-lg bg-madder-100">
                    <img
                      src={productImage(item.images[0] ?? '', 400)}
                      alt=""
                      className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-3 font-sans text-sm font-medium capitalize">{displayName(item.name)}</h3>
                </Link>
                <p className="mt-1 text-sm">
                  <span className="font-semibold">{item.price}</span>
                  {item.originalPrice && <span className="ml-2 text-stone-500 line-through">{item.originalPrice}</span>}
                </p>
                <button type="button" onClick={() => addToCart(bagLine(item))} className="btn-outline mt-3 py-2 text-sm">
                  Add to bag
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  )
}
