'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeftIcon, ShoppingBagIcon, StarIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/contexts/CartContext'

export default function ShoppingPage() {
  const { addToCart } = useCart()
  
  // Featured products from different categories
  const featuredProducts = [
    // Women's Silk Scarves
    {
      id: 52,
      name: 'PISTACHIO',
      price: 'Rs.1,399',
      image: '/images/products/0f5ae0af-d3f9-40b6-b51c-f5b0e1c338e3 2.png',
      rating: 4.8,
      reviews: 234,
      category: 'Silk Scarf',
      href: '/categories/women/silk-scarves'
    },
    {
      id: 53,
      name: '4 BLOCKS',
      price: 'Rs.1,399',
      image: '/images/products/IMG_4331.png',
      rating: 4.9,
      reviews: 189,
      category: 'Silk Scarf',
      href: '/categories/women/silk-scarves'
    },
    {
      id: 54,
      name: 'PINK BLOCK',
      price: 'Rs.1,399',
      image: '/images/products/8b56937b-3d2b-4f97-a61b-aa555f574aff.png',
      rating: 4.7,
      reviews: 156,
      category: 'Silk Scarf',
      href: '/categories/women/silk-scarves'
    },
    {
      id: 60,
      name: 'BLACK CHAIR',
      price: 'Rs.1,399',
      image: '/images/products/WhatsApp Image 2025-08-01 at 1.04.04 AM.png',
      rating: 4.8,
      reviews: 167,
      category: 'Silk Scarf',
      href: '/categories/women/silk-scarves'
    },

    // Men's Pocket Squares
    {
      id: 1,
      name: 'DARK MOUNTAIN',
      price: 'Rs.1,199',
      image: '/images/products/IMG_7698.png',
      rating: 4.9,
      reviews: 89,
      category: 'Pocket Square',
      href: '/categories/men/pocket-square'
    },
    {
      id: 2,
      name: 'SKY BLUE HARMONY',
      price: 'Rs.1,199',
      image: '/images/products/IMG_7711.jpg',
      rating: 4.8,
      reviews: 76,
      category: 'Pocket Square',
      href: '/categories/men/pocket-square'
    },
    {
      id: 3,
      name: 'ROYAL ELEGANCE',
      price: 'Rs.1,199',
      image: '/images/products/IMG_5036.png',
      rating: 4.7,
      reviews: 65,
      category: 'Pocket Square',
      href: '/categories/men/pocket-square'
    },
    {
      id: 4,
      name: 'BLUE CHAIN',
      price: 'Rs.999',
      image: '/images/products/blue-chain-pocket-square.png',
      rating: 4.9,
      reviews: 187,
      category: 'Pocket Square',
      href: '/categories/men/pocket-square'
    }
  ]

  const categories = [
    {
      name: "Women's Silk Scarves",
      description: "Premium silk scarves with elegant designs",
      image: "/images/products/0f5ae0af-d3f9-40b6-b51c-f5b0e1c338e3 2.png",
      href: "/categories/women/silk-scarves",
      count: 22
    },
    {
      name: "Men's Pocket Squares",
      description: "Sophisticated pocket squares for formal occasions",
      image: "/images/products/IMG_7698.png",
      href: "/categories/men/pocket-square",
      count: 15
    },
    {
      name: "Men's Silk Scarves",
      description: "Luxury silk scarves for the modern gentleman",
      image: "/images/products/1c836977-a43b-4368-b801-b9cdc7b4c2d1.png",
      href: "/categories/men/silk-scarf",
      count: 8
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Continue Shopping</h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Discover More Products</h2>
          <p className="text-xl text-gray-600">Explore our premium collection of fashion accessories</p>
        </div>

        {/* Categories Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h4>
                <p className="text-gray-600 mb-3">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.count} products</span>
                  <span className="text-amber-600 font-medium group-hover:text-amber-700 transition-colors">
                    Shop Now →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          category: product.category
                        })
                      }}
                      className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 text-sm"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Shop More?</h3>
            <p className="text-gray-600 mb-6">Explore our complete collection and find your perfect style</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/categories/women/silk-scarves"
                className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                <ShoppingBagIcon className="w-5 h-5 mr-2" />
                Shop Women's Scarves
              </Link>
              <Link
                href="/categories/men/pocket-square"
                className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors duration-200"
              >
                <ShoppingBagIcon className="w-5 h-5 mr-2" />
                Shop Men's Pocket Squares
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
