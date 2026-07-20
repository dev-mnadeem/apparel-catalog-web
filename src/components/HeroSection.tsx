'use client'

import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { getHeroImageUrl } from '@/lib/image-mapping'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-beige via-beige-light to-beige text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 leading-tight font-poppins">
            Discover Your Perfect Style
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto text-gray-700 font-poppins">
            Explore our curated collection of premium fashion pieces. From elegant dresses to sophisticated accessories, 
            find everything you need to express your unique style.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
            <Link
              href="/categories/women"
              className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 hover:text-white transition-colors inline-flex items-center gap-2 font-poppins"
            >
              Shop Women
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <Link
              href="/categories/men"
              className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 hover:text-white transition-colors inline-flex items-center gap-2 font-poppins"
            >
              Shop Men
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* STYLED BY YOU Section */}
        <div className="relative max-w-6xl mx-auto bg-black/5 border-2 border-black/20 rounded-lg p-4 mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center font-poppins text-black tracking-wide">
            STYLE BY ME
          </h2>
          <p className="text-lg text-center text-gray-700 mb-8 font-poppins">#TRENDYFOLDSXME</p>
          
          {/* Customer Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Customer 1 - TF_Client */}
            <div className="group cursor-pointer">
              <div className="relative mb-4">
                <img 
                  src={getHeroImageUrl("/images/products/3f6ffaa3-d2a7-4efc-aa57-738cd1b18008.png", 600, 400)} 
                  alt="TF_Client showcasing our fashion"
                  className="w-full h-80 object-cover rounded-lg group-hover:scale-125 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 p-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors opacity-0 group-hover:opacity-100">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
                <button className="absolute top-3 left-3 p-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors opacity-0 group-hover:opacity-100">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-black mb-1">#TF❤️</h3>
                <p className="text-sm text-gray-600 mb-1">@trendyfolds</p>
                <p className="text-sm text-gray-600 mb-1">in our</p>
                <p className="text-sm text-black">Scarlet Scarf</p>
                <button 
                  className="mt-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                  onClick={() => window.open('/product/44', '_blank')}
                >
                  Shop Scarf
                </button>
              </div>
            </div>

            {/* Customer 2 - Rafya Minhas */}
            <div className="group cursor-pointer">
              <div className="relative mb-4">
                <img 
                  src={getHeroImageUrl("/images/products/WhatsApp Image 2025-08-23 at 7.45.57 PM.png", 600, 400)} 
                  alt="Rafya Minhas wearing 3 Piece - Embroidered Cotton Suit"
                  className="w-full h-80 object-cover rounded-lg group-hover:scale-125 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 p-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors opacity-0 group-hover:opacity-100">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-black mb-1">#TF❤️</h3>
                <p className="text-sm text-gray-600 mb-1">@rafyaminhas</p>
                <p className="text-sm text-gray-600 mb-1">wearing our</p>
                <p className="text-sm text-black">3 Piece - Embroidered Cotton Suit</p>
                <button 
                  className="mt-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                  onClick={() => window.open('/categories/men', '_blank')}
                >
                  Shop Suits
                </button>
              </div>
            </div>

            {/* Customer 3 - Black Royal Pocket Square */}
            <div className="group cursor-pointer">
              <div className="relative mb-4">
                <img 
                  src={getHeroImageUrl("/images/products/WhatsApp Image 2025-08-23 at 6.46.27 PM.png", 600, 400)} 
                  alt="Our client in our black royal pocket square"
                  className="w-full h-80 object-cover rounded-lg group-hover:scale-125 transition-transform duration-300"
                />
                <button 
                  className="absolute top-3 right-3 p-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors opacity-0 group-hover:opacity-100"
                  onClick={() => window.open('/categories/men/pocket-square', '_blank')}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-black mb-1">#TF❤️</h3>
                <p className="text-sm text-gray-600 mb-1">@trendyfolds</p>
                <p className="text-sm text-gray-600 mb-1">in our</p>
                <p className="text-sm text-black">Black Royal Pocket Square</p>
                <button 
                  className="mt-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                  onClick={() => window.open('/categories/men/pocket-square', '_blank')}
                >
                  Shop Pocket Squares
                </button>
              </div>
            </div>

            {/* Customer 4 - Ruby Peak Pocket Square */}
            <div className="group cursor-pointer">
              <div className="relative mb-4">
                <img 
                  src={getHeroImageUrl("/images/products/WhatsApp Image 2025-08-23 at 7.40.36 PM.png", 600, 400)} 
                  alt="Our client in our Ruby Peak pocket square"
                  className="w-full h-80 object-cover rounded-lg group-hover:scale-125 transition-transform duration-300"
                />
                <button 
                  className="absolute top-3 right-3 p-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors opacity-0 group-hover:opacity-100"
                  onClick={() => window.open('/categories/men/pocket-square', '_blank')}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-black mb-1">#TF❤️</h3>
                <p className="text-sm text-gray-600 mb-1">@trendyfolds</p>
                <p className="text-sm text-gray-600 mb-1">in our</p>
                <p className="text-sm text-black">Ruby Peak Pocket Square</p>
                <button 
                  className="mt-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                  onClick={() => window.open('/categories/men/pocket-square', '_blank')}
                >
                  Shop Pocket Squares
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="text-3xl font-bold mb-2 font-poppins group-hover:text-black transition-colors duration-300">Free Shipping</div>
                            <div className="text-gray-600 font-poppins">On orders over Rs. 3000</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold mb-2 font-poppins group-hover:text-black transition-colors duration-300">30-Day Returns</div>
            <div className="text-gray-600 font-poppins">Hassle-free returns</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold mb-2 font-poppins group-hover:text-black transition-colors duration-300">Premium Quality</div>
            <div className="text-gray-600 font-poppins">Curated for you</div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-black/10 rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-black/10 rounded-full"></div>
      </div>
    </section>
  )
}
