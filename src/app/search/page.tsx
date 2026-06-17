'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { searchProducts, sections } from '@/lib/catalogue'

function SearchResults() {
  const query = useSearchParams().get('q')?.trim() ?? ''
  const results = searchProducts(query)

  return (
    <>
      <h1 className="text-3xl font-bold">
        {query ? <>Results for &ldquo;{query}&rdquo;</> : 'Search the catalogue'}
      </h1>
      <p className="mt-2 text-gray-600" aria-live="polite">
        {query
          ? `${results.length} ${results.length === 1 ? 'product' : 'products'} found`
          : 'Try a colour, a pattern or a product type, such as "black polka" or "pocket square".'}
      </p>

      {query && results.length === 0 && (
        <div className="mt-10 rounded-lg border border-gray-200 bg-white p-8 text-center">
          <p className="font-medium">Nothing matches every word of that search.</p>
          <p className="mt-2 text-gray-600">Check the spelling, use fewer words, or browse a collection instead.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/categories/women/silk-scarves" className="btn-outline">Women&apos;s silk scarves</Link>
            <Link href="/categories/men/pocket-square" className="btn-outline">Pocket squares</Link>
          </div>
        </div>
      )}

      <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {results.map(product => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`} className="group block overflow-hidden rounded-lg border border-gray-200 bg-white">
              <img
                src={product.images[0]}
                alt={product.name}
                className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="p-3 sm:p-4">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  {sections[product.section].department} &middot; {sections[product.section].label}
                </p>
                <h2 className="mt-1 text-sm font-semibold sm:text-base">{product.name}</h2>
                <p className="mt-1 font-semibold">{product.price}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default function SearchPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <Suspense fallback={<p className="text-gray-600">Loading results&hellip;</p>}>
        <SearchResults />
      </Suspense>
    </main>
  )
}
