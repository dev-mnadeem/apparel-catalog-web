'use client'

import Link from 'next/link'
import { ArrowLeftIcon, HeartIcon, ShoppingBagIcon, StarIcon } from '@heroicons/react/24/outline'

export default function MensCategoryPage() {
  const allMensProducts = [
    // Pocket Squares
    {
      id: 13,
      name: 'RUBY PEAK POCKET SQUARE',
      price: 'Rs.1,199',
      originalPrice: 'Rs.2,000',
      image: '/images/products/cf6e2957-eb9c-48dd-80b9-9e4218e21012.png',
      rating: 4.9,
      reviews: 7,
      description: 'Stunning ruby red fabric with elegant peak patterns and sophisticated geometric motifs - perfect for luxury styling and premium occasions',
      category: 'Pocket Square'
    },
    {
      id: 14,
      name: 'GOLDEN HARMONY POCKET SQUARE',
      price: 'Rs.1,199',
      originalPrice: 'Rs.2,000',
      image: '/images/products/6b8867a9-d34e-4246-a710-b7ecb37167c9.png',
      rating: 4.8,
      reviews: 6,
      description: 'Elegant golden beige fabric with sophisticated geometric patterns and luxury texture - perfect for premium styling and formal occasions',
      category: 'Pocket Square'
    },
    {
      id: 15,
      name: 'RED ROSE POCKET SQUARE',
      price: 'Rs.1,199',
      originalPrice: 'Rs.2,000',
      image: '/images/products/9da23af1-dc33-4fe7-b708-1674e07f0753.png',
      rating: 4.7,
      reviews: 5,
      description: 'Elegant red fabric with sophisticated geometric patterns and luxury texture - perfect for modern professional styling and premium occasions',
      category: 'Pocket Square'
    },

    // Silk Scarves
    {
      id: 24,
      name: 'RHINE STONE SCARF',
      price: 'Rs.1,800',
      originalPrice: 'Rs.2,400',
      image: '/images/products/1c836977-a43b-4368-b801-b9cdc7b4c2d1.png',
      rating: 4.9,
      reviews: 8,
      description: 'Exquisite rhinestone-embellished silk scarf with premium craftsmanship',
      category: 'Silk Scarf'
    },
    {
      id: 25,
      name: 'WILD SCARF',
      price: 'Rs.1,800',
      originalPrice: 'Rs.2,400',
      image: '/images/products/9dc9df6d-201f-452d-8036-3b0bc149f800.png',
      rating: 4.8,
      reviews: 12,
      description: 'Bold wild-pattern silk scarf with striking design',
      category: 'Silk Scarf'
    },
    {
      id: 26,
      name: 'BLUE CHAIN SCARF',
      price: 'Rs.1,800',
      originalPrice: 'Rs.2,400',
      image: '/images/products/d930c310-b250-458f-acab-1ea1fd304c4f.png',
      rating: 4.7,
      reviews: 15,
      description: 'Sophisticated blue chain-pattern silk scarf with elegant links',
      category: 'Silk Scarf'
    }
  ]

  const categories = [
    { name: 'Pocket Square New', href: '/categories/men/pocket-square', count: 20 },
    { name: 'Men Scarf Latest', href: '/categories/men/silk-scarf', count: 6 }
  ]

  return (
    <div className="min-h-screen bg-amber-50 pt-32">
      {/* Navigation */}
      <div className="bg-white shadow-sm border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="flex items-center text-gray-600 hover:text-black transition-colors focus:outline-none focus:ring-0 focus:border-0 px-3 py-1.5 min-w-[120px]"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16">

        {/* Category Navigation - Simple Line Format */}
        <div>
          <div className="flex items-center justify-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 focus:outline-none focus:ring-0"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        {/* All Products Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-6 font-poppins">All Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allMensProducts.map((product) => (
              <Link 
                key={product.id} 
                href={`/product/${product.id}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              >
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-contain bg-white"
                  />
                  <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </div>
                  <button className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors opacity-0 group-hover:opacity-100">
                    <HeartIcon className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">{product.name}</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon 
                          key={star} 
                          className={`h-4 w-4 ${star <= Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">({product.rating} out of 5)</span>
                    <span className="text-gray-500 text-sm ml-2">• {product.reviews} reviews</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl font-bold text-black">{product.price}</span>
                      <span className="text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button 
                    onClick={(e) => e.stopPropagation()}
                    className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                  >
                    ADD TO BAG
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
