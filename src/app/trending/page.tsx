'use client'

import Link from 'next/link'
import { ArrowLeftIcon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/contexts/CartContext'
import { getProductImageUrl } from '@/lib/image-mapping'

export default function TrendingPage() {
  const { addToCart } = useCart()
  
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
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-6 font-poppins">Trending Now</h1>
          <p className="text-xl text-gray-600 font-poppins max-w-2xl mx-auto">Discover what&apos;s hot and trending this season</p>
        </div>

        {/* Trending Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Men's Pocket Square - Trending */}
          <Link href="/product/13" className="block">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group border border-gray-100 cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={getProductImageUrl("/images/products/cf6e2957-eb9c-48dd-80b9-9e4218e21012.png")} 
                  alt="RUBY PEAK POCKET SQUARE"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Trending Badge */}
                <div className="absolute top-3 left-3">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    🔥 TRENDING
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <div className="bg-black/80 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    Pocket Square
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  RUBY PEAK POCKET SQUARE
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className={`h-3 w-3 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-.364 1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 text-xs ml-2 font-medium">(4.9)</span>
                  <span className="text-gray-400 text-xs ml-2">• 7 reviews</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">Rs.1,199</span>
                    <span className="text-gray-500 line-through text-sm">Rs.2,000</span>
                  </div>
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    SALE
                  </span>
                </div>

                {/* Action Button */}
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    addToCart({
                      id: 13,
                      name: 'RUBY PEAK POCKET SQUARE',
                      price: 'Rs.1,199',
                      image: '/images/products/cf6e2957-eb9c-48dd-80b9-9e4218e21012.png',
                      category: 'Pocket Square'
                    })
                  }}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2.5 px-4 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-medium text-center group-hover:shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  ADD TO BAG
                </button>
              </div>
            </div>
          </Link>

          {/* Men's Silk Scarf - Trending */}
          <Link href="/product/24" className="block">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group border border-gray-100 cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={getProductImageUrl("/images/products/1c836977-a43b-4368-b801-b9cdc7b4c2d1.png")} 
                  alt="RHINE STONE SCARF"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Trending Badge */}
                <div className="absolute top-3 left-3">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    🔥 TRENDING
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <div className="bg-black/80 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    Silk Scarf
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  RHINE STONE SCARF
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className={`h-3 w-3 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-.364 1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 text-xs ml-2 font-medium">(4.9)</span>
                  <span className="text-gray-400 text-xs ml-2">• 8 reviews</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">Rs.1,800</span>
                    <span className="text-gray-500 line-through text-sm">Rs.2,400</span>
                  </div>
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    SALE
                  </span>
                </div>

                {/* Action Button */}
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    addToCart({
                      id: 24,
                      name: 'RHINE STONE SCARF',
                      price: 'Rs.1,800',
                      image: '/images/products/1c836977-a43b-4368-b801-b9cdc7b4c2d1.png',
                      category: 'Silk Scarf'
                    })
                  }}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2.5 px-4 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-medium text-center group-hover:shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  ADD TO BAG
                </button>
              </div>
            </div>
          </Link>

          {/* Women's Silk Scarf - Trending */}
          <Link href="/product/41" className="block">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group border border-gray-100 cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={getProductImageUrl("/images/products/IMG_0171.png")} 
                  alt="GEOGRAPHIC SILK SCARF"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Trending Badge */}
                <div className="absolute top-3 left-3">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    🔥 TRENDING
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <div className="bg-black/80 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    Silk Scarf
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  GEOGRAPHIC SILK SCARF
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className={`h-3 w-3 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-.364 1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 text-xs ml-2 font-medium">(4.7)</span>
                  <span className="text-gray-400 text-xs ml-2">• 5 reviews</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">Rs.1,399</span>
                    <span className="text-gray-500 line-through text-sm">Rs.2,200</span>
                  </div>
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    SALE
                  </span>
                </div>

                {/* Action Button */}
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    addToCart({
                      id: 41,
                      name: 'GEOGRAPHIC SILK SCARF',
                      price: 'Rs.1,399',
                      image: '/images/products/IMG_0171.png',
                      category: 'Silk Scarf'
                    })
                  }}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2.5 px-4 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-medium text-center group-hover:shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  ADD TO BAG
                </button>
              </div>
            </div>
          </Link>

          {/* Women's Silk Scarf - Trending */}
          <Link href="/product/44" className="block">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group border border-gray-100 cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={getProductImageUrl("/images/products/IMG_0439.png")} 
                  alt="SCARLET SILK SCARF"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Trending Badge */}
                <div className="absolute top-3 left-3">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    🔥 TRENDING
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <div className="bg-black/80 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    Silk Scarf
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  SCARLET SILK SCARF
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className={`h-3 w-3 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-.364 1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 text-xs ml-2 font-medium">(4.8)</span>
                  <span className="text-gray-400 text-xs ml-2">• 4 reviews</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">Rs.1,399</span>
                    <span className="text-gray-500 line-through text-sm">Rs.2,200</span>
                  </div>
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    SALE
                  </span>
                </div>

                {/* Action Button */}
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    addToCart({
                      id: 44,
                      name: 'SCARLET SILK SCARF',
                      price: 'Rs.1,399',
                      image: '/images/products/IMG_0439.png',
                      category: 'Silk Scarf'
                    })
                  }}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2.5 px-4 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-medium text-center group-hover:shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  ADD TO BAG
                </button>
              </div>
            </div>
          </Link>

          {/* Women's Silk Scarf - Trending */}
          <Link href="/product/53" className="block">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group border border-gray-100 cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={getProductImageUrl("/images/products/6a95ed61-0077-4003-8bbf-36eab791fe86.png")} 
                  alt="LEAF SILK SCARF"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Trending Badge */}
                <div className="absolute top-3 left-3">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    🔥 TRENDING
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <div className="bg-black/80 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    Silk Scarf
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  LEAF SILK SCARF
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className={`h-3 w-3 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-.364 1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 text-xs ml-2 font-medium">(4.8)</span>
                  <span className="text-gray-400 text-xs ml-2">• 5 reviews</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">Rs.1,399</span>
                    <span className="text-gray-500 line-through text-sm">Rs.2,200</span>
                  </div>
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    SALE
                  </span>
                </div>

                {/* Action Button */}
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    addToCart({
                      id: 53,
                      name: 'LEAF SILK SCARF',
                      price: 'Rs.1,399',
                      image: '/images/products/6a95ed61-0077-4003-8bbf-36eab791fe86.png',
                      category: 'Silk Scarf'
                    })
                  }}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2.5 px-4 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-medium text-center group-hover:shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  ADD TO BAG
                </button>
              </div>
            </div>
          </Link>

          {/* Men's Silk Scarf - Trending */}
          <Link href="/product/25" className="block">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group border border-gray-100 cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={getProductImageUrl("/images/products/9dc9df6d-201f-452d-8036-3b0bc149f800.png")} 
                  alt="WILD SCARF"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Trending Badge */}
                <div className="absolute top-3 left-3">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    🔥 TRENDING
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <div className="bg-black/80 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    Silk Scarf
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  WILD SCARF
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className={`h-3 w-3 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-.364 1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 text-xs ml-2 font-medium">(4.8)</span>
                  <span className="text-gray-400 text-xs ml-2">• 12 reviews</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">Rs.1,800</span>
                    <span className="text-gray-500 line-through text-sm">Rs.2,400</span>
                  </div>
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    SALE
                  </span>
                </div>

                {/* Action Button */}
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    addToCart({
                      id: 25,
                      name: 'WILD SCARF',
                      price: 'Rs.1,800',
                      image: '/images/products/9dc9df6d-201f-452d-8036-3b0bc149f800.png',
                      category: 'Silk Scarf'
                    })
                  }}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2.5 px-4 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-medium text-center group-hover:shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  ADD TO BAG
                </button>
              </div>
            </div>
          </Link>

          {/* Men's Silk Scarf - Trending */}
          <Link href="/product/26" className="block">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group border border-gray-100 cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={getProductImageUrl("/images/products/d930c310-b250-458f-acab-1ea1fd304c4f.png")} 
                  alt="BLUE CHAIN SCARF"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Trending Badge */}
                <div className="absolute top-3 left-3">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    🔥 TRENDING
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <div className="bg-black/80 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    Silk Scarf
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  BLUE CHAIN SCARF
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className={`h-3 w-3 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-.364 1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 text-xs ml-2 font-medium">(4.7)</span>
                  <span className="text-gray-400 text-xs ml-2">• 15 reviews</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">Rs.1,800</span>
                    <span className="text-gray-500 line-through text-sm">Rs.2,400</span>
                  </div>
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    SALE
                  </span>
                </div>

                {/* Action Button */}
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    addToCart({
                      id: 26,
                      name: 'BLUE CHAIN SCARF',
                      price: 'Rs.1,800',
                      image: '/images/products/d930c310-b250-458f-acab-1ea1fd304c4f.png',
                      category: 'Silk Scarf'
                    })
                  }}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2.5 px-4 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-medium text-center group-hover:shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  ADD TO BAG
                </button>
              </div>
            </div>
          </Link>

          {/* Women's Silk Scarf - Trending */}
          <Link href="/product/56" className="block">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group border border-gray-100 cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={getProductImageUrl("/images/products/8b56937b-3d2b-4f97-a61b-aa555f574aff.png")}  
                  alt="PINK BLOCK SILK SCARF"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Trending Badge */}
                <div className="absolute top-3 left-3">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    🔥 TRENDING
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <div className="bg-black/80 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    Silk Scarf
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  PINK BLOCK SILK SCARF
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className={`h-3 w-3 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-.364 1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 text-xs ml-2 font-medium">(4.5)</span>
                  <span className="text-gray-400 text-xs ml-2">• 9 reviews</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">Rs.1,499</span>
                    <span className="text-gray-500 line-through text-sm">Rs.2,300</span>
                  </div>
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    SALE
                  </span>
                </div>

                {/* Action Button */}
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    addToCart({
                      id: 56,
                      name: 'PINK BLOCK SILK SCARF',
                      price: 'Rs.1,499',
                      image: '/images/products/8b56937b-3d2b-4f97-a61b-aa555f574aff.png',
                      category: 'Silk Scarf'
                    })
                  }}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2.5 px-4 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-medium text-center group-hover:shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  ADD TO BAG
                </button>
              </div>
            </div>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-amber-50 to-pink-50 p-12 rounded-2xl shadow-lg border border-amber-100">
          <h3 className="text-3xl font-bold text-black mb-6 font-poppins">Explore More Trending Items</h3>
          <p className="text-gray-600 mb-8 text-lg">Discover our complete collection of trending fashion items</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/categories/men"
              className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
            >
              Men's Collection
            </Link>
            <Link
              href="/categories/women"
              className="bg-amber-500 text-white px-8 py-4 rounded-xl hover:bg-amber-600 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
            >
              Women's Collection
            </Link>
            <Link
              href="/new-arrivals"
              className="bg-red-500 text-white px-8 py-4 rounded-xl hover:bg-red-600 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
            >
              New Arrivals
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
