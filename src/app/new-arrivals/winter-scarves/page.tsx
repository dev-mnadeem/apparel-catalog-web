'use client'

import Link from 'next/link'
import { ArrowLeftIcon, HeartIcon, ShoppingBagIcon, StarIcon } from '@heroicons/react/24/outline'
import { productImage } from '@/lib/image-mapping'

export default function WinterScarvesPage() {
  const winterScarves = [
    {
      id: 109,
      name: 'WARM WINTER SCARF',
      price: 'Rs.1,299',
      originalPrice: 'Rs.1,800',
      image: '/images/products/IMG_4240 2.png',
      rating: 4.8,
      reviews: 167,
      description: 'Cozy winter scarf perfect for cold weather'
    },
    {
      id: 110,
      name: 'KNITTED WINTER SCARF',
      price: 'Rs.1,199',
      originalPrice: 'Rs.1,600',
      image: '/images/products/IMG_4240 2.png',
      rating: 4.7,
      reviews: 134,
      description: 'Soft knitted scarf with warm wool blend'
    },
    {
      id: 111,
      name: 'FLEECE WINTER SCARF',
      price: 'Rs.999',
      originalPrice: 'Rs.1,400',
      image: '/images/products/IMG_4240 2.png',
      rating: 4.6,
      reviews: 98,
      description: 'Ultra-soft fleece scarf for maximum warmth'
    }
  ]

  return (
    <div className="min-h-screen bg-madder-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="flex items-center text-stone-600 hover:text-black transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-stone-600 hover:text-black transition-colors">
                <HeartIcon className="h-6 w-6" />
              </button>
              <button className="p-2 text-stone-600 hover:text-black transition-colors">
                <ShoppingBagIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Winter Scarf 2025</h1>
          <p className="text-xl text-stone-600">Stay warm and stylish with our winter scarf collection</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {winterScarves.map((scarf) => (
            <div key={scarf.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={productImage(scarf.image)} 
                  alt={scarf.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                  NEW IN
                </div>
                <button className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-md hover:bg-stone-50 transition-colors opacity-0 group-hover:opacity-100">
                  <HeartIcon className="h-5 w-5 text-stone-600" />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-black mb-2">{scarf.name}</h3>
                <p className="text-stone-600 text-sm mb-4">{scarf.description}</p>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon 
                        key={star} 
                        className={`h-4 w-4 ${star <= Math.floor(scarf.rating) ? 'text-saffron-400 fill-current' : 'text-stone-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-stone-600 text-sm ml-2">({scarf.rating} out of 5)</span>
                  <span className="text-stone-500 text-sm ml-2">• {scarf.reviews} reviews</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl font-bold text-black">{scarf.price}</span>
                    <span className="text-stone-500 line-through">{scarf.originalPrice}</span>
                  </div>
                  <span className="bg-madder-500 text-white px-2 py-1 rounded text-xs font-bold">
                    OFF
                  </span>
                </div>

                {/* Action Button */}
                <button className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-stone-800 transition-colors font-medium">
                  ADD TO BAG
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


