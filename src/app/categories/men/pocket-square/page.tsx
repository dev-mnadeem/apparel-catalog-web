'use client'

import Link from 'next/link'
import { ArrowLeftIcon, HeartIcon, ShoppingBagIcon, StarIcon } from '@heroicons/react/24/outline'
import { getProductImageUrl } from '@/lib/image-mapping'

export default function PocketSquarePage() {
  const pocketSquares = [
    {
      id: 13,
      name: 'POLKA BLACK POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: getProductImageUrl('/images/products/d5c0078a-ad18-4da7-8de5-5e8fa07892f1.png'),
      rating: 4.9,
      reviews: 189,
      description: 'Classic black pocket square with elegant white polka dots - perfect for formal occasions',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 14,
      name: 'ROYAL BLACK POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: getProductImageUrl('/images/products/IMG_0054.png'),
      rating: 4.8,
      reviews: 156,
      description: 'Luxurious black pocket square with intricate gold and colorful paisley patterns',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 15,
      name: 'BURGUNDY ELEGANCE POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: getProductImageUrl('/images/products/IMG_0050.png'),
      rating: 4.7,
      reviews: 142,
      description: 'Rich burgundy pocket square with subtle diagonal stripes for sophisticated appeal',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 16,
      name: 'COW PRINT ELEGANCE POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: getProductImageUrl('/images/products/58e29f6f-8ab5-45eb-a144-e174e0d30077.png'),
      rating: 4.8,
      reviews: 25,
      description: 'Sophisticated cow print pattern with rich brown patches on white - perfect for bold, fashion-forward styling',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 17,
      name: 'BLACK ROYAL POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: getProductImageUrl('/images/products/WhatsApp Image 2024-09-10 at 11.32.54 AM (1).png'),
      rating: 4.7,
      reviews: 31,
      description: 'Elegant cream fabric with bold black royal pattern - sophisticated geometric design for luxury styling',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 18,
      name: 'BLACK POLKA POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: getProductImageUrl('/images/products/WhatsApp Image 2024-09-10 at 10.28.46 AM.png'),
      rating: 4.7,
      reviews: 32,
      description: 'Elegant black polka dot pattern on cream fabric - timeless classic design perfect for sophisticated styling',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 19,
      name: 'VINTAGE POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: getProductImageUrl('/images/products/WhatsApp Image 2024-09-03 at 12.47.32 PM.png'),
      rating: 4.8,
      reviews: 29,
      description: 'Elegant vintage design with timeless patterns - perfect for sophisticated styling and classic elegance',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 26,
      name: 'ROYAL GEOMETRIC POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: getProductImageUrl('/images/products/IMG_5023.png'),
      rating: 4.7,
      reviews: 8,
      description: 'Sophisticated geometric pattern with royal elegance - featuring intricate designs perfect for luxury styling and formal occasions',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 27,
      name: 'VINTAGE CHARM POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: getProductImageUrl('/images/products/IMG_0050.png'),
      rating: 4.8,
      reviews: 178,
      description: 'Light blue paisley pattern with vintage elegance and traditional motifs',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 21,
      name: 'HARMONY POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: getProductImageUrl('/images/products/IMG_0054.png'),
      rating: 4.9,
      reviews: 203,
      description: 'Rich blue background with vibrant yellow paisley design - harmonious color blend',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 22,
      name: 'PAISLEY SQUARE POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: getProductImageUrl('/images/products/IMG_0062.png'),
      rating: 4.8,
      reviews: 165,
      description: 'Black and beige paisley pattern with teardrop motifs and floral elements',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 23,
      name: 'BLUE CHAIN POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: getProductImageUrl('/images/products/IMG_0067.png'),
      rating: 4.9,
      reviews: 187,
      description: 'Dark blue fabric with prominent gold chain pattern and teal accents',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 24,
      name: 'FLORAL ELEGANCE POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: getProductImageUrl('/images/products/IMG_0068.png'),
      rating: 4.7,
      reviews: 134,
      description: 'White fabric with delicate pink roses and green leaves - romantic floral design',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 25,
      name: 'GEOMETRIC MOSAIC POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: getProductImageUrl('/images/products/IMG_0071.png'),
      rating: 4.6,
      reviews: 112,
      description: 'Rich brown fabric with mosaic-like geometric tiles in various brown shades',
      status: 'Available',
      isCustomizable: true
    },
    {
      id: 28,
      name: 'RUBY PEAK POCKET SQUARE',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,000',
      image: getProductImageUrl('/images/products/cf6e2957-eb9c-48dd-80b9-9e4218e21012.png'),
      rating: 4.9,
      reviews: 8,
      description: 'Stunning ruby red fabric with elegant peak patterns and sophisticated geometric motifs - perfect for luxury styling and premium occasions',
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
              href="/categories" 
              className="flex items-center text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Categories
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
          <h1 className="text-4xl font-bold text-black mb-4 font-poppins">Men's Pocket Squares</h1>
          <p className="text-xl text-gray-600 font-poppins">Elegant pocket squares for sophisticated gentlemen</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pocketSquares.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded-full text-xs font-medium">
                  {product.status}
                </div>
                <button className="absolute top-2 left-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors opacity-0 group-hover:opacity-100">
                  <HeartIcon className="h-4 w-4 text-gray-600" />
                </button>
              </div>
              
              <div className="p-4">
                <h3 className="text-sm font-semibold text-black mb-1">{product.name}</h3>
                <p className="text-xs text-gray-600 mb-2">{product.description}</p>
                
                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon 
                        key={star} 
                        className={`h-3 w-3 ${star <= Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600 ml-1">({product.rating})</span>
                  <span className="text-xs text-gray-500 ml-1">• {product.reviews} reviews</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-black">{product.price}</span>
                    <span className="text-xs text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    OFF
                  </span>
                </div>

                {/* Action Button */}
                <button className="w-full bg-black text-white py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm">
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
