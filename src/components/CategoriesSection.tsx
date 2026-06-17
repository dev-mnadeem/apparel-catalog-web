'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, PauseIcon, PlayIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/contexts/CartContext'
import { findProduct, sections, type CatalogueProduct } from '@/lib/catalogue'
import { getHeroImageUrl, productImage } from '@/lib/image-mapping'

const bannerSlides = [
  { title: 'Silk scarves', subtitle: 'The new collection', cta: 'Shop silk scarves', href: '/categories/women/silk-scarves', image: '/images/products/Untitled design (2).png' },
  { title: 'Unstitched & stitched', subtitle: 'Festive collection', cta: 'Shop women', href: '/categories/women', image: '/images/products/Summer ENd (3).png' },
  { title: 'Pocket squares', subtitle: 'Folded for the breast pocket', cta: 'Shop pocket squares', href: '/categories/men/pocket-square', image: '/images/products/c.png' },
  { title: 'Summer end', subtitle: 'Sale', cta: 'See the sale', href: '/sale', image: '/images/products/Summer ENd (4).png' },
]

const categories = [
  { name: 'Silk scarves', description: 'Printed silk for every season', href: '/categories/women/silk-scarves', image: '/images/products/0f5ae0af-d3f9-40b6-b51c-f5b0e1c338e3 2.png' },
  { name: '2 piece sets', description: 'Coordinated outfits', href: '/categories/women/2-piece', image: '/images/products/WhatsApp Image 2025-06-03 at 6.27.46 PM (1).png' },
  { name: 'Pocket squares', description: 'For suits and sherwanis', href: '/categories/men/pocket-square', image: '/images/products/6f8a7fa7-5640-4d9e-98ca-b6fff2bbf32d.png' },
  { name: 'Men’s scarves', description: 'Long silk scarves', href: '/categories/men/silk-scarf', image: '/images/products/1c836977-a43b-4368-b801-b9cdc7b4c2d1.png' },
  { name: 'Winter scarves', description: 'Knits and fleece', href: '/categories/women/winter-scarves', image: '/images/products/2e549476-4ea2-4556-b22c-5a6db764e717.png' },
]

const FEATURED_IDS = [122, 55, 57, 60]

function FeaturedCard({ product }: { product: CatalogueProduct }) {
  const { addToCart } = useCart()
  const section = sections[product.section]
  return (
    <li className="flex flex-col">
      <Link href={`/product/${product.id}`} className="group block">
        <div className="overflow-hidden rounded-lg bg-madder-100">
          <img
            src={productImage(product.images[0] ?? '', 500)}
            alt=""
            className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <p className="mt-3 text-xs uppercase tracking-[0.15em] text-stone-500">{section.label}</p>
        <h3 className="mt-1 font-sans text-base font-medium capitalize text-black">{product.name.toLowerCase()}</h3>
      </Link>
      <p className="mt-1 text-sm">
        <span className="font-semibold">{product.price}</span>
        {product.originalPrice && <span className="ml-2 text-stone-500 line-through">{product.originalPrice}</span>}
      </p>
      <button
        type="button"
        onClick={() =>
          addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.images[0] ?? '',
            category: `${section.department} - ${section.label}`,
          })
        }
        className="btn-outline mt-3 py-2 text-sm"
      >
        Add to bag
      </button>
    </li>
  )
}

export default function CategoriesSection() {
  const [bannerIndex, setBannerIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const slide = bannerSlides[bannerIndex]
  const featured = FEATURED_IDS.map((id) => findProduct(id)).filter((product): product is CatalogueProduct => Boolean(product))

  useEffect(() => {
    if (paused) return
    const interval = setInterval(() => setBannerIndex((prev) => (prev + 1) % bannerSlides.length), 6000)
    return () => clearInterval(interval)
  }, [paused])

  const step = (delta: number) => setBannerIndex((prev) => (prev + delta + bannerSlides.length) % bannerSlides.length)

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="sr-only">Trendy Folds: silk scarves, pocket squares and seasonal pieces</h1>
      <section aria-roledescription="carousel" aria-label="Collections" className="relative overflow-hidden rounded-xl bg-black">
        <img
          src={getHeroImageUrl(slide.image, 1400, 700)}
          alt=""
          className="h-[420px] w-full object-cover opacity-80 sm:h-[520px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div aria-live={paused ? 'polite' : 'off'} className="absolute inset-x-0 bottom-0 p-6 pb-16 sm:p-12 sm:pb-16">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-saffron-200">{slide.subtitle}</p>
          <p className="mt-2 font-display text-5xl font-semibold leading-none text-white sm:text-7xl">{slide.title}</p>
          <Link href={slide.href} className="mt-6 inline-flex rounded-md bg-paper px-5 py-3 font-medium text-black hover:bg-white">
            {slide.cta}
          </Link>
        </div>
        <div className="absolute bottom-4 right-4 flex items-center gap-2 sm:bottom-6 sm:right-6">
          <button type="button" onClick={() => setPaused((p) => !p)} aria-label={paused ? 'Play slideshow' : 'Pause slideshow'} className="rounded-full bg-white/15 p-2 text-white hover:bg-white/30">
            {paused ? <PlayIcon className="h-5 w-5" /> : <PauseIcon className="h-5 w-5" />}
          </button>
          <button type="button" onClick={() => step(-1)} aria-label="Previous slide" className="rounded-full bg-white/15 p-2 text-white hover:bg-white/30">
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => step(1)} aria-label="Next slide" className="rounded-full bg-white/15 p-2 text-white hover:bg-white/30">
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="absolute bottom-6 left-6 flex gap-2 sm:left-12">
          {bannerSlides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setBannerIndex(index)}
              aria-label={`Show ${item.title}`}
              aria-current={index === bannerIndex}
              className={`h-1.5 rounded-full transition-all ${index === bannerIndex ? 'w-8 bg-white' : 'w-4 bg-white/50 hover:bg-white/80'}`}
            />
          ))}
        </div>
      </section>

      <section aria-labelledby="categories-heading" className="mt-16">
        <h2 id="categories-heading" className="text-4xl">Shop by category</h2>
        <ul className="mt-6 flex snap-x gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-5">
          {categories.map((category) => (
            <li key={category.href} className="w-40 flex-none snap-start sm:w-auto">
              <Link href={category.href} className="group block">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={productImage(category.image, 400)}
                    alt=""
                    className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="mt-3 font-sans text-base font-medium text-black group-hover:underline">{category.name}</h3>
                <p className="text-sm text-stone-600">{category.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="featured-heading" className="mt-16">
        <div className="flex items-end justify-between gap-4">
          <h2 id="featured-heading" className="text-4xl">Featured silk</h2>
          <Link href="/categories/women/silk-scarves" className="text-sm font-medium underline underline-offset-4">View all</Link>
        </div>
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {featured.map((product) => <FeaturedCard key={product.id} product={product} />)}
        </ul>
      </section>
    </div>
  )
}
