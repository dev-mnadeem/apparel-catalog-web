'use client'

import Link from 'next/link'
import { ArrowLeftIcon, HeartIcon, ShoppingBagIcon, StarIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/contexts/CartContext'
import { getProductImageUrl } from '@/lib/image-mapping'

export default function WomensSilkScarfPage() {
  const { addToCart } = useCart()
  const silkScarves = [
    {
      id: 44,
      name: 'SCARLET',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: getProductImageUrl('/images/products/IMG_0439.png'),
      rating: 4.8,
      reviews: 4,
      description: 'Exquisite scarlet silk scarf with premium craftsmanship - featuring elegant patterns and luxurious texture perfect for sophisticated styling and special occasions',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 49,
      name: 'PINK OSTRICH',
      price: 'Rs.999',
      originalPrice: 'Rs.2,200',
      image: getProductImageUrl('/images/products/IMG_0380.png'),
      rating: 4.8,
      reviews: 4,
      description: 'Elegant pink ostrich-pattern silk scarf with sophisticated design and premium texture - perfect for refined styling and making a statement',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 47,
      name: 'BEIGE STAR',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: getProductImageUrl('/images/products/IMG_0341.png'),
      rating: 4.9,
      reviews: 5,
      description: 'Fresh beige star-pattern silk scarf with natural elegance and premium texture - perfect for modern professional styling and luxury occasions',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 53,
      name: 'GREEN LEAF',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: getProductImageUrl('/images/products/6a95ed61-0077-4003-8bbf-36eab791fe86.png'),
      rating: 4.8,
      reviews: 5,
      description: 'Luxurious green leaf-pattern silk scarf with elegant patterns and premium texture - perfect for sophisticated styling and formal occasions',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 51,
      name: 'CRYSTAL BLACK',
      price: 'Rs.999',
      originalPrice: 'Rs.2,200',
      image: getProductImageUrl('/images/products/IMG_0170.png'),
      rating: 4.9,
      reviews: 7,
      description: 'Stylish crystal black silk scarf with modern design and premium texture - perfect for contemporary styling and sophisticated occasions',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 57,
      name: 'PINK BLOCKS',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: getProductImageUrl('/images/products/8b56937b-3d2b-4f97-a61b-aa555f574aff.png'),
      rating: 4.8,
      reviews: 5,
      description: 'Fresh pink blocks-pattern silk scarf with natural textures and premium quality - perfect for vibrant styling and nature-inspired occasions',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 59,
      name: 'GREEN GRASS',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: getProductImageUrl('/images/products/IMG_4317.png'),
      rating: 4.9,
      reviews: 7,
      description: 'Timeless green grass-pattern silk scarf with classic design and premium texture - perfect for elegant styling and sophisticated occasions',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 60,
      name: 'BLACK CHAIR',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: getProductImageUrl('/images/products/IMG_4317.png'),
      rating: 4.8,
      reviews: 5,
      description: 'Exquisite black chair-pattern silk scarf with luxurious design and premium texture - perfect for special occasions and elegant styling',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 61,
      name: 'GOLDEN FLOWERS',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: getProductImageUrl('/images/products/IMG_4317.png'),
      rating: 4.9,
      reviews: 7,
      description: 'Elegant golden flowers-pattern silk scarf with sophisticated shimmer and premium texture - perfect for evening wear and luxury occasions',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 62,
      name: 'SILVER MIST',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: getProductImageUrl('/images/products/IMG_4317.png'),
      rating: 4.8,
      reviews: 5,
      description: 'Beautiful silver mist-pattern silk scarf with peaceful design and premium texture - perfect for calm styling and serene occasions',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 63,
      name: 'CUSTOM SCARF',
      price: 'Rs.1,800',
      originalPrice: 'Rs.3,000',
      image: getProductImageUrl('/images/products/d5c0078a-ad18-4da7-8de5-5e8fa07892f1.png'),
      rating: 4.9,
      reviews: 35,
      description: 'You can make any scarf from pocket square design - Choose from our premium collection of pocket square patterns to create your personalized silk scarf',
      status: 'Available',
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
          <h1 className="text-4xl font-bold text-black mb-4 font-poppins">Women&apos;s Silk Scarves</h1>
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
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    OFF
                  </span>
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
                        category: 'Women - Silk Scarf'
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
