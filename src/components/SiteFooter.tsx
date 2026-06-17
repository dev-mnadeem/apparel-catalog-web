import Link from 'next/link'
import { storeContact } from '@/lib/store'

const columns = [
  {
    heading: 'Shop',
    links: [
      { name: 'Women', href: '/categories/women' },
      { name: 'Men', href: '/categories/men' },
      { name: 'New arrivals', href: '/new-arrivals' },
      { name: 'Sale', href: '/sale' },
    ],
  },
  {
    heading: 'Help',
    links: [
      { name: 'Shipping and cash on delivery', href: '/shipping' },
      { name: 'Your bag', href: '/cart' },
    ],
  },
]

export default function SiteFooter() {
  return (
    <footer className="mt-16 bg-black text-madder-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-3xl font-semibold text-white">Trendy Folds</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone-300">
            Silk scarves, pocket squares and seasonal pieces, folded and dispatched from Pakistan.
          </p>
          <p className="mt-4 text-sm">
            <a href={storeContact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">
              WhatsApp {storeContact.phoneDisplay}
            </a>
          </p>
        </div>
        {columns.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron-300">{column.heading}</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-stone-300 hover:text-white">{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-stone-400">
        &copy; {new Date().getFullYear()} Trendy Folds
      </div>
    </footer>
  )
}
