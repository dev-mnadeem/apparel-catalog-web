import Link from 'next/link'
import { getHeroImageUrl } from '@/lib/image-mapping'

// Customers wearing Trendy Folds, as shared with #TRENDYFOLDSXME.
const looks = [
  { image: '/images/products/3f6ffaa3-d2a7-4efc-aa57-738cd1b18008.png', piece: 'Scarlet silk scarf', href: '/product/44', cta: 'Shop the scarf' },
  { image: '/images/products/WhatsApp Image 2025-08-23 at 7.45.57 PM.png', piece: '3 piece embroidered cotton suit', href: '/categories/women', cta: 'Shop suits' },
  { image: '/images/products/WhatsApp Image 2025-08-23 at 6.46.27 PM.png', piece: 'Black royal pocket square', href: '/product/3', cta: 'Shop the square' },
  { image: '/images/products/WhatsApp Image 2025-08-23 at 7.40.36 PM.png', piece: 'Ruby peak pocket square', href: '/product/13', cta: 'Shop the square' },
]

const promises = [
  { title: 'Free shipping', body: 'On orders of Rs. 3,000 and above, anywhere in Pakistan.' },
  { title: 'Cash on delivery', body: 'Pay the rider when your parcel arrives.' },
  { title: 'Dispatched in 24 to 48 hours', body: 'Next-day delivery is available in major cities.' },
]

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <section aria-labelledby="looks-heading" className="mt-20 rounded-xl bg-madder-100 px-4 py-10 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h2 id="looks-heading" className="text-4xl">Styled by you</h2>
          <p className="text-sm font-medium tracking-[0.2em] text-madder-700">#TRENDYFOLDSXME</p>
        </div>
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {looks.map((look) => (
            <li key={look.image}>
              <img src={getHeroImageUrl(look.image, 600)} alt="" className="aspect-[3/4] w-full rounded-lg object-cover" />
              <p className="mt-3 text-sm text-stone-600">Wearing our</p>
              <p className="font-medium text-black">{look.piece}</p>
              <Link href={look.href} className="mt-1 inline-block text-sm font-medium text-madder-700 underline underline-offset-4">
                {look.cta}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Delivery" className="mt-16 grid gap-8 border-y border-stone-300 py-10 sm:grid-cols-3">
        {promises.map((promise) => (
          <div key={promise.title}>
            <h2 className="text-2xl">{promise.title}</h2>
            <p className="mt-1 text-sm text-stone-600">{promise.body}</p>
          </div>
        ))}
        <p className="text-sm text-stone-600 sm:col-span-3">
          <Link href="/shipping" className="underline underline-offset-4">Shipping and cash on delivery details</Link>
        </p>
      </section>
    </div>
  )
}
