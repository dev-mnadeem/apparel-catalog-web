'use client'

import Link from 'next/link'
import { ArrowLeftIcon, HeartIcon, ShoppingBagIcon, StarIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/contexts/CartContext'

export default function MensSilkScarfPage() {
  const { addToCart } = useCart()
  const silkScarves = [
    {
      id: 24,
      name: 'RHINE STONE SCARF',
      price: 'Rs.1,800',
      originalPrice: 'Rs.2,400',
      image: '/images/products/1c836977-a43b-4368-b801-b9cdc7b4c2d1.png',
      image2: '/images/products/WhatsApp Image 2024-09-04 at 1.48.06 PM (1).png',
      image3: '/images/products/IMG_0071.png',
      rating: 4.9,
      reviews: 8,
      description: 'Exquisite rhinestone-embellished silk scarf with premium craftsmanship - featuring elegant stone details and luxurious texture perfect for sophisticated styling and special occasions'
    },
    {
      id: 25,
      name: 'WILD SCARF',
      price: 'Rs.1,800',
      originalPrice: 'Rs.2,400',
      image: '/images/products/9dc9df6d-201f-452d-8036-3b0bc149f800.png',
      image2: '/images/products/WhatsApp Image 2024-09-04 at 1.48.06 PM.png',
      image3: '/images/products/IMG_0063.png',
      rating: 4.8,
      reviews: 12,
      description: 'Bold wild-pattern silk scarf with striking design and premium texture - perfect for adventurous styling and making a statement'
    },
    {
      id: 26,
      name: 'BLUE CHAIN SCARF',
      price: 'Rs.1,800',
      originalPrice: 'Rs.2,400',
      image: '/images/products/d930c310-b250-458f-acab-1ea1fd304c4f.png',
      image2: '/images/products/WhatsApp Image 2024-09-04 at 1.4 (1) (1).png',
      image3: '/images/products/IMG_0056.png',
      rating: 4.7,
      reviews: 15,
      description: 'Sophisticated blue chain-pattern silk scarf with elegant links and premium texture - perfect for modern professional styling and luxury occasions'
    },
    {
      id: 27,
      name: 'ROYAL BLACK SCARF',
      price: 'Rs.1,800',
      originalPrice: 'Rs.2,400',
      image: '/images/products/6f1bc366-c3c4-44b9-a168-8cc2de7f1add.png',
      image2: '/images/products/WhatsApp Image 2024-09-04 at 1.48.08 PM (1).png',
      image3: '/images/products/WhatsApp Image 2024-09-10 at 10.43.59 AM (1).png',
      rating: 4.9,
      reviews: 18,
      description: 'Luxurious royal black silk scarf with elegant patterns and premium texture - perfect for sophisticated styling and formal occasions'
    },
    {
      id: 28,
      name: 'BLACK POLKA SCARF',
      price: 'Rs.1,800',
      originalPrice: 'Rs.2,400',
      image: '/images/products/55d19143-cc24-4411-a87c-5a466e0a1758.png',
      image2: '/images/products/WhatsApp Image 2024-09-04 at 1.48.08 PM (1).png',
      image3: '/images/products/IMG_0081.png',
      rating: 4.8,
      reviews: 14,
      description: 'Stylish black polka dot silk scarf with classic patterns and premium texture - perfect for timeless styling and sophisticated occasions'
    },
    {
      id: 29,
      name: 'PARSLEY SCARF',
      price: 'Rs.1,800',
      originalPrice: 'Rs.2,400',
      image: '/images/products/79e6eea0-c9fa-469f-aee3-73455ee17f3b.png',
      image2: '/images/products/WhatsApp Image 2024-09-04 at 1.4 (5).png',
      rating: 4.7,
      reviews: 22,
      description: 'Fresh parsley green silk scarf with natural patterns and premium texture - perfect for vibrant styling and nature-inspired occasions',
      status: 'Sold Out'
    },
    {
      id: 30,
      name: 'VINTAGE SCARF',
      price: 'Rs.1,800',
      originalPrice: 'Rs.2,400',
      image: '/images/products/WhatsApp Image 2024-09-04 at 1.4 (3).png',
      image2: '/images/products/IMG_0065.png',
      rating: 4.6,
      reviews: 19,
      description: 'Timeless vintage silk scarf with classic patterns and premium texture - perfect for retro styling and nostalgic occasions',
      status: 'Sold Out'
    },
    {
      id: 31,
      name: 'CUSTOM SCARF',
      price: 'Rs.1,800',
      originalPrice: 'Rs.3,000',
      image: '/images/products/d5c0078a-ad18-4da7-8de5-5e8fa07892f1.png',
      rating: 4.9,
      reviews: 35,
      description: 'You can make any scarf from pocket square design - Choose from our premium collection of pocket square patterns to create your personalized silk scarf',
      isCustomizable: true
    }
  ]

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="flex items-center text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-black transition-colors">
                <HeartIcon className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-600 hover:text-black transition-colors">
                <ShoppingBagIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4 font-poppins">Men&apos;s Silk Scarves</h1>
          <p className="text-xl text-gray-600 font-poppins">Discover our premium collection of elegant silk scarves</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {silkScarves.map((scarf) => (
            <Link 
              key={scarf.id} 
              href={`/product/${scarf.id}`}
              className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <img 
                  src={scarf.image} 
                  alt={scarf.name}
                  className="w-full h-80 object-contain bg-white hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                  {scarf.isCustomizable ? 'CUSTOM' : 'NEW IN'}
                </div>
                {scarf.status === 'Sold Out' && (
                  <div className="absolute top-4 left-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    SOLD OUT
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg border border-gray-200">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <span>Click to View</span>
                  </div>
                </div>
                <button className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors opacity-0 group-hover:opacity-100">
                  <HeartIcon className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-black mb-2">{scarf.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon 
                        key={star} 
                        className={`h-4 w-4 ${star <= Math.floor(scarf.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm ml-2">({scarf.rating} out of 5)</span>
                  <span className="text-gray-500 text-sm ml-2">• {scarf.reviews} reviews</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl font-bold text-black">{scarf.price}</span>
                    <span className="text-gray-500 line-through">{scarf.originalPrice}</span>
                  </div>
                  {scarf.status === 'Sold Out' ? (
                    <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs font-bold">
                      SOLD OUT
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                      OFF
                    </span>
                  )}
                </div>

                {/* Action Button */}
                {scarf.status === 'Sold Out' ? (
                  <button className="w-full bg-gray-400 text-white py-3 px-4 rounded-lg cursor-not-allowed font-medium" disabled>
                    SOLD OUT
                  </button>
                ) : scarf.isCustomizable ? (
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium">
                    CUSTOMIZE
                  </button>
                ) : (
                  <button 
                    className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCart({
                        id: scarf.id,
                        name: scarf.name,
                        price: scarf.price,
                        originalPrice: scarf.originalPrice,
                        image: scarf.image,
                        category: 'Men - Silk Scarf'
                      });
                    }}
                  >
                    ADD TO BAG
                  </button>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
