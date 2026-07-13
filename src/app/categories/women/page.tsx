'use client'

import Link from 'next/link'
import { ArrowLeftIcon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/contexts/CartContext'

export default function WomensCategoryPage() {
  const { addToCart } = useCart()
  
  const categories = [
    { name: 'Silk Scarf Collection', href: '/categories/women/silk-scarves', count: 22 },
    { name: '2 Piece Collection', href: '/categories/women/2-piece', count: 20 },
    { name: 'Winter Scarf 2025', href: '/categories/women/winter-scarves', count: 0 },
    { name: 'Winter Scarf Collection', href: '/categories/women/winter-scarves', count: 6 }
  ]

  // Featured products from different categories
  const featuredProducts = [
    {
      id: 44,
      name: 'SCARLET',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: '/images/products/IMG_0439.png',
      rating: 4.8,
      reviews: 4,
      category: 'Silk Scarves',
      status: 'Available'
    },
    {
      id: 49,
      name: 'PINK OSTRICH',
      price: 'Rs.999',
      originalPrice: 'Rs.2,200',
      image: '/images/products/IMG_0380.png',
      rating: 4.8,
      reviews: 4,
      category: 'Silk Scarves',
      status: 'Available'
    },
    {
      id: 47,
      name: 'BEIGE STAR',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: '/images/products/IMG_0341.png',
      rating: 4.9,
      reviews: 5,
      category: 'Silk Scarves',
      status: 'Available'
    },
    {
      id: 53,
      name: 'GREEN LEAF',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: '/images/products/6a95ed61-0077-4003-8bbf-36eab791fe86.png',
      rating: 4.8,
      reviews: 5,
      category: 'Silk Scarves',
      status: 'Available'
    },

    {
      id: 51,
      name: 'CRYSTAL BLACK',
      price: 'Rs.999',
      originalPrice: 'Rs.2,200',
      image: '/images/products/IMG_0170.png',
      rating: 4.9,
      reviews: 7,
      category: 'Silk Scarves',
      status: 'Available'
    },
    {
      id: 57,
      name: 'PINK BLOCKS',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: '/images/products/8b56937b-3d2b-4f97-a61b-aa555f574aff.png',
      rating: 4.8,
      reviews: 5,
      category: 'Silk Scarves',
      status: 'Available'
    },
    {
      id: 59,
      name: 'GREEN GRASS',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: '/images/products/IMG_4317.png',
      rating: 4.9,
      reviews: 7,
      category: 'Silk Scarves',
      status: 'Available'
    },
    {
      id: 60,
      name: 'BLACK CHAIR',
      price: 'Rs.1,399',
      originalPrice: 'Rs.2,200',
      image: '/images/products/WhatsApp Image 2025-08-01 at 1.04.04 AM.png',
      rating: 4.6,
      reviews: 3,
      category: 'Silk Scarves',
      status: 'Available'
    }
  ]

  return (
    <div className="min-h-screen bg-amber-50 pt-32">
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

      {/* Category Navigation - Simple Line Format */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-8">
        <div className="mb-16">
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

        {/* Featured Products Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-6 font-poppins">Featured Silk Scarves</h2>
          <p className="text-gray-600 mb-8 text-center">Explore our handpicked selection of premium silk scarves</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group border border-gray-100 h-full flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <div className="bg-black/80 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                      {product.category}
                    </div>
                  </div>
                  
                  {/* Wishlist Button */}
                  <button className="absolute top-3 left-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110">
                    <svg className="h-4 w-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2 min-h-[3rem]">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg 
                          key={star} 
                          className={`h-3 w-3 ${star <= Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-600 text-xs ml-2 font-medium">({product.rating})</span>
                    <span className="text-gray-400 text-xs ml-2">• {product.reviews} reviews</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">{product.price}</span>
                      <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                    </div>
                    <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-md">
                      SALE
                    </span>
                  </div>

                  {/* Action Button */}
                  {product.status === 'Available' ? (
                    <button 
                      onClick={() => addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        category: product.category
                      })}
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2.5 px-4 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-medium text-center mt-auto group-hover:shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                    >
                      ADD TO BAG
                    </button>
                  ) : (
                    <button 
                      disabled
                      className="w-full bg-gray-400 text-white py-2.5 px-4 rounded-lg cursor-not-allowed font-medium mt-auto text-sm"
                    >
                      COMING SOON
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <h3 className="text-2xl font-bold text-black mb-4 font-poppins">Explore More Scarves</h3>
          <p className="text-gray-600 mb-6">Discover our complete collection of premium silk scarves and accessories</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/categories/women/silk-scarves"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              View All Silk Scarves
            </Link>
            <Link
              href="/new-arrivals"
              className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors font-medium"
            >
              New Arrivals
            </Link>
            <Link
              href="/sale"
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium"
            >
              Special Offers
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
