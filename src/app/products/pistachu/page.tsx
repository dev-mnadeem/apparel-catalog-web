'use client'

import Link from 'next/link'
import { ArrowLeftIcon, HeartIcon, ShoppingBagIcon, StarIcon } from '@heroicons/react/24/outline'

export default function PistachuProductPage() {
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

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative">
              <img 
                src="/images/products/IMG_4277.png" 
                alt="Pistachu Silk Scarf - Main View"
                className="w-full h-60 object-contain rounded-lg shadow-lg bg-white"
              />
              <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                NEW IN
              </div>
            </div>
            
            {/* Hover Image */}
            <div className="relative">
              <img 
                src="/images/products/18215009-b781-47d5-87fe-b22bdf39d1bf.png" 
                alt="Pistachu Silk Scarf - Alternative View"
                className="w-full h-60 object-contain rounded-lg shadow-lg bg-white"
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-black mb-2 font-poppins">PISTACHU</h1>
              <p className="text-xl text-gray-600 font-poppins">Silk Scarf Collection</p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">(4.8 out of 5)</span>
              <span className="text-gray-500">• 127 reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-black">Rs.1,399</span>
              <span className="text-xl text-gray-500 line-through">Rs.2,000</span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                30% OFF
              </span>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-black">Product Description</h3>
              <p className="text-gray-700 leading-relaxed">
                Introducing our exquisite PISTACHU Silk Scarf, a masterpiece of luxury and elegance. 
                Crafted from the finest 100% pure mulberry silk, this scarf features a stunning 
                pistachio green base with intricate floral patterns in complementary earth tones.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                The scarf measures 36&Prime; × 76&Prime;, making it perfect for various styling options - 
                from classic neck wraps to elegant head coverings. The lightweight, breathable 
                fabric ensures comfort in all seasons while maintaining its lustrous sheen.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Each piece is hand-finished with precision, featuring hand-rolled edges that 
                showcase superior craftsmanship. The reversible design offers two distinct looks, 
                making it a versatile addition to any wardrobe.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-black">Key Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  100% Pure Mulberry Silk
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  36&Prime; × 76&Prime; Dimensions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Hand-Rolled Edges
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Reversible Design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                  Breathable & Lightweight
                </li>
              </ul>
            </div>

            {/* Care Instructions */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-black">Care Instructions</h3>
              <p className="text-gray-700 text-sm">
                Dry clean only. Store in a cool, dry place away from direct sunlight. 
                Avoid contact with perfumes and cosmetics. Iron on low heat if needed.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="flex-1 bg-black text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center">
                <ShoppingBagIcon className="h-6 w-6 mr-2" />
                ADD TO BAG
              </button>
              <button className="flex-1 bg-transparent border-2 border-black text-black py-4 px-6 rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-colors">
                ADD TO WISHLIST
              </button>
            </div>

            {/* Additional Info */}
            <div className="pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <span className="font-medium">SKU:</span> PS-001
                </div>
                <div>
                  <span className="font-medium">Material:</span> Pure Silk
                </div>
                <div>
                  <span className="font-medium">Origin:</span> Pakistan
                </div>
                <div>
                  <span className="font-medium">Delivery:</span> 2-3 days
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
