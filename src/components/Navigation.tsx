'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  Bars3Icon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  ShoppingBagIcon,
  StarIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { useCart } from '@/contexts/CartContext'
import { SHOW_SIMULATED_ACTIVITY } from '@/lib/socialProof'
import { storeContact } from '@/lib/store'

interface NavItem {
  name: string
  href: string
  children?: { name: string; href: string }[]
  highlight?: boolean
}

const navigation: NavItem[] = [
  {
    name: 'New Arrivals',
    href: '/new-arrivals',
    children: [
      { name: 'Silk scarves', href: '/categories/women/silk-scarves' },
      { name: 'Pocket squares', href: '/new-arrivals/pocket-squares' },
      { name: 'Winter scarves', href: '/new-arrivals/winter-scarves' },
      { name: 'Men’s scarves', href: '/categories/men/silk-scarf' },
    ],
  },
  {
    name: 'Women',
    href: '/categories/women',
    children: [
      { name: 'Unstitched', href: '/categories/women/unstiched' },
      { name: '2 piece', href: '/categories/women/2-piece' },
      { name: 'Silk scarves', href: '/categories/women/silk-scarves' },
      { name: 'Winter scarves', href: '/categories/women/winter-scarves' },
    ],
  },
  {
    name: 'Men',
    href: '/categories/men',
    children: [
      { name: 'Pocket squares', href: '/categories/men/pocket-square' },
      { name: 'Silk scarves', href: '/categories/men/silk-scarf' },
    ],
  },
  { name: 'Trending', href: '/trending' },
  { name: 'Sale', href: '/sale', highlight: true },
]

// Invented reviewers for the opt-in demo ticker; see src/lib/socialProof.ts.
const demoReviewers = ['Sarah A.', 'Ayesha K.', 'Saad R.', 'Zara N.', 'Hassan M.', 'Noor K.', 'Bilal Q.', 'Sana A.']

function DemoRatingTicker() {
  const [rating, setRating] = useState<{ name: string; score: number } | null>(null)

  useEffect(() => {
    const pick = () =>
      setRating({ name: demoReviewers[Math.floor(Math.random() * demoReviewers.length)], score: 4 + Math.random() })
    pick()
    const interval = setInterval(pick, 3000)
    return () => clearInterval(interval)
  }, [])

  if (!rating) return null
  return (
    <span className="hidden items-center gap-1 lg:flex">
      <StarIcon className="h-3.5 w-3.5" aria-hidden="true" />
      {rating.score.toFixed(1)}/5 &middot; {rating.name} (demo)
    </span>
  )
}

function SearchForm({ id, onSearch }: { id: string; onSearch?: () => void }) {
  const router = useRouter()
  const [query, setQuery] = useState('')

  return (
    <form
      role="search"
      className="flex w-full items-center rounded-full border border-stone-300 bg-white focus-within:border-black"
      onSubmit={(event) => {
        event.preventDefault()
        if (!query.trim()) return
        router.push(`/search?q=${encodeURIComponent(query.trim())}`)
        onSearch?.()
      }}
    >
      <label htmlFor={id} className="sr-only">Search the catalogue</label>
      <input
        id={id}
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Scarf, pocket square, colour…"
        className="w-full min-w-0 rounded-l-full bg-transparent py-2 pl-4 pr-2 text-sm placeholder-stone-500 focus:outline-none"
      />
      <button type="submit" className="rounded-full p-2 text-stone-700 hover:text-black" aria-label="Search">
        <MagnifyingGlassIcon className="h-5 w-5" />
      </button>
    </form>
  )
}

export default function Navigation() {
  const { state } = useCart()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)
  const bagLabel = `Bag, ${state.totalItems} ${state.totalItems === 1 ? 'item' : 'items'}`

  return (
    <>
      <div className="bg-black text-xs text-madder-100">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <p>
            Free shipping over Rs.&nbsp;3,000 <span className="hidden sm:inline">&middot; Same-day dispatch</span>
          </p>
          <div className="flex items-center gap-4">
            {SHOW_SIMULATED_ACTIVITY && <DemoRatingTicker />}
            <a href={storeContact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
              <PhoneIcon className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">{storeContact.phoneDisplay}</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
            <a href={storeContact.instagramUrl} target="_blank" rel="noopener noreferrer" className="hidden hover:text-white md:inline">Instagram</a>
            <a href={storeContact.facebookUrl} target="_blank" rel="noopener noreferrer" className="hidden hover:text-white md:inline">Facebook</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-[60] border-b border-stone-200 bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            className="-ml-2 rounded p-2 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>

          <Link href="/" className="font-display text-2xl font-semibold tracking-wide sm:text-[1.7rem]">
            Trendy Folds
          </Link>

          <nav aria-label="Main" className="ml-6 hidden h-full lg:block">
            <ul className="flex h-full items-center gap-1">
              {navigation.map((item) => (
                <li key={item.name} className="group relative flex h-full items-center">
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={`flex items-center gap-1 rounded px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                      item.highlight ? 'text-madder-700' : 'text-stone-800'
                    } ${isActive(item.href) ? 'underline decoration-madder-600 decoration-2 underline-offset-8' : 'hover:text-black'}`}
                  >
                    {item.name}
                    {item.children && <ChevronDownIcon className="h-3.5 w-3.5" aria-hidden="true" />}
                  </Link>
                  {item.children && (
                    <ul className="invisible absolute left-0 top-full z-10 min-w-[13rem] translate-y-1 rounded-md border border-stone-200 bg-white py-2 opacity-0 shadow-lg transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="block px-4 py-2 text-sm text-stone-700 hover:bg-madder-50 hover:text-black">
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto hidden w-64 md:block xl:w-72">
            <SearchForm id="desktop-search" />
          </div>

          <Link
            href="/cart"
            aria-label={bagLabel}
            className="relative ml-auto flex items-center gap-2 rounded-full p-2 hover:bg-madder-100 md:ml-0"
          >
            <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
            {state.totalItems > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-madder-600 px-1 text-[11px] font-semibold text-white">
                {state.totalItems}
              </span>
            )}
          </Link>
        </div>

        {menuOpen && (
          <div id="mobile-menu" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-stone-200 bg-paper lg:hidden">
            <div className="space-y-6 px-4 py-5 sm:px-6">
              <div className="md:hidden">
                <SearchForm id="mobile-search" onSearch={() => setMenuOpen(false)} />
              </div>
              <nav aria-label="Mobile">
                <ul className="divide-y divide-stone-200">
                  {navigation.map((item) => (
                    <li key={item.name} className="py-3">
                      <Link
                        href={item.href}
                        aria-current={isActive(item.href) ? 'page' : undefined}
                        className={`font-display text-xl font-semibold ${item.highlight ? 'text-madder-700' : ''}`}
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link href={child.href} className="block py-1 text-sm text-stone-700">
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
