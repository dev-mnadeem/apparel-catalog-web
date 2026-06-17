'use client'

import Link from 'next/link'
import { ArrowLeftIcon, SparklesIcon, ClockIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function WinterScarvesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-peacock-50 via-peacock-50 to-peacock-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm border-b border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/categories/women" 
              className="flex items-center text-stone-600 hover:text-black transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Women
            </Link>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-stone-600 hover:text-black transition-colors">
                <HeartIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Hero Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="mb-8">
            <SparklesIcon className="h-24 w-24 text-peacock-400 mx-auto animate-pulse" />
          </div>
          <h1 className="text-5xl font-bold text-stone-900 mb-6">
            Winter Scarves Collection
          </h1>
          <div className="inline-flex items-center bg-peacock-100 text-peacock-800 px-6 py-3 rounded-full mb-8">
            <ClockIcon className="h-5 w-5 mr-2" />
            <span className="font-semibold">Coming Soon</span>
          </div>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Get ready for our exclusive winter scarf collection featuring luxurious fabrics, 
            elegant designs, and cozy warmth for the cold season ahead.
          </p>
        </div>

        {/* Product Preview */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 overflow-hidden">
          <div className="relative">
            {/* Placeholder Image with Winter Theme */}
            <div className="w-full h-96 bg-gradient-to-br from-peacock-200 via-peacock-200 to-peacock-200 rounded-xl flex items-center justify-center relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-peacock-400/20 via-peacock-400/20 to-peacock-400/20"></div>
              <div className="absolute top-4 right-4">
                <SparklesIcon className="h-8 w-8 text-white/80" />
              </div>
              <div className="absolute bottom-4 left-4">
                <SparklesIcon className="h-6 w-6 text-white/60" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="text-center">
                  <SparklesIcon className="h-16 w-16 text-white/90 mx-auto mb-4" />
                  <p className="text-white/90 text-lg font-semibold">Winter Scarves</p>
                  <p className="text-white/70 text-sm">Collection Preview</p>
                </div>
              </div>
            </div>
            
            {/* Coming Soon Badge */}
            <div className="absolute top-4 left-4">
              <div className="bg-gradient-to-r from-peacock-500 to-peacock-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                COMING SOON
              </div>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-peacock-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <SparklesIcon className="h-8 w-8 text-peacock-600" />
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">Premium Materials</h3>
            <p className="text-stone-600 text-sm">Luxurious wool, cashmere, and silk blends for ultimate comfort</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-peacock-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <HeartIcon className="h-8 w-8 text-peacock-600" />
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">Elegant Designs</h3>
            <p className="text-stone-600 text-sm">Timeless patterns and modern styles for every occasion</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-peacock-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ClockIcon className="h-8 w-8 text-peacock-600" />
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">Limited Edition</h3>
            <p className="text-stone-600 text-sm">Exclusive winter collection with limited availability</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-stone-900 mb-4">Be the First to Know</h3>
          <p className="text-stone-600 mb-6">Get notified when our winter scarf collection launches</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/categories/women"
              className="bg-gradient-to-r from-peacock-600 to-peacock-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-peacock-700 hover:to-peacock-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Women&apos;s Collection
            </Link>
            <Link
              href="/new-arrivals"
              className="bg-transparent border-2 border-peacock-600 text-peacock-600 px-8 py-3 rounded-lg font-semibold hover:bg-peacock-600 hover:text-white transition-all duration-300"
            >
              View New Arrivals
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
