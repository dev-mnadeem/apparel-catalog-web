'use client'

import Link from 'next/link'
import { ArrowLeftIcon, SparklesIcon, ClockIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline'

export default function TwoPiecePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-madder-50 via-madder-50 to-madder-50">
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
            <div className="relative">
              <SparklesIcon className="h-24 w-24 text-madder-400 mx-auto animate-pulse" />
              <StarIcon className="h-8 w-8 text-madder-400 absolute -top-2 -right-2 animate-bounce" />
              <StarIcon className="h-6 w-6 text-madder-400 absolute -bottom-2 -left-2 animate-bounce" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-stone-900 mb-6">
            Women&apos;s 2-Piece Collection
          </h1>
          <div className="inline-flex items-center bg-madder-100 text-madder-800 px-6 py-3 rounded-full mb-8">
            <ClockIcon className="h-5 w-5 mr-2" />
            <span className="font-semibold">Coming Soon</span>
          </div>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Discover our stunning 2-piece collection featuring coordinated tops and bottoms 
            that create perfect ensembles for every occasion.
          </p>
        </div>

        {/* Product Preview */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 overflow-hidden">
          <div className="relative">
            {/* Placeholder Image with Fashion Theme */}
            <div className="w-full h-96 bg-gradient-to-br from-madder-200 via-madder-200 to-madder-200 rounded-xl flex items-center justify-center relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-madder-400/20 via-madder-400/20 to-madder-400/20"></div>
              <div className="absolute top-4 right-4">
                <SparklesIcon className="h-8 w-8 text-white/80" />
              </div>
              <div className="absolute bottom-4 left-4">
                <StarIcon className="h-6 w-6 text-white/60" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <SparklesIcon className="h-12 w-12 text-white/90" />
                  </div>
                  <p className="text-white/90 text-lg font-semibold">2-Piece Collection</p>
                  <p className="text-white/70 text-sm">Fashion Preview</p>
                </div>
              </div>
            </div>
            
            {/* Coming Soon Badge */}
            <div className="absolute top-4 left-4">
              <div className="bg-gradient-to-r from-madder-500 to-madder-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                COMING SOON
              </div>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-madder-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <SparklesIcon className="h-8 w-8 text-madder-600" />
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">Coordinated Sets</h3>
            <p className="text-stone-600 text-sm">Perfectly matched tops and bottoms for effortless styling</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-madder-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <HeartIcon className="h-8 w-8 text-madder-600" />
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">Versatile Designs</h3>
            <p className="text-stone-600 text-sm">Mix and match pieces for multiple outfit combinations</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-madder-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ClockIcon className="h-8 w-8 text-madder-600" />
            </div>
            <h3 className="text-lg font-semibold text-stone-900 mb-2">Limited Edition</h3>
            <p className="text-stone-600 text-sm">Exclusive collection with premium fabrics and designs</p>
          </div>
        </div>

        {/* Style Categories Preview */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <h3 className="text-2xl font-bold text-stone-900 mb-6 text-center">What to Expect</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-madder-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-madder-600 font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold text-stone-900 mb-2">Casual Sets</h4>
              <p className="text-stone-600 text-sm">Comfortable everyday wear for daily activities</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-madder-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-madder-600 font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold text-stone-900 mb-2">Party Wear</h4>
              <p className="text-stone-600 text-sm">Elegant ensembles for special occasions</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-madder-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-madder-600 font-bold text-lg">3</span>
              </div>
              <h4 className="font-semibold text-stone-900 mb-2">Office Sets</h4>
              <p className="text-stone-600 text-sm">Professional attire for workplace confidence</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-madder-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-madder-600 font-bold text-lg">4</span>
              </div>
              <h4 className="font-semibold text-stone-900 mb-2">Festive Collection</h4>
              <p className="text-stone-600 text-sm">Traditional and modern festive ensembles</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-stone-900 mb-4">Be the First to Know</h3>
          <p className="text-stone-600 mb-6">Get notified when our 2-piece collection launches</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/categories/women"
              className="bg-gradient-to-r from-madder-600 to-madder-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-madder-700 hover:to-madder-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Women&apos;s Collection
            </Link>
            <Link
              href="/new-arrivals"
              className="bg-transparent border-2 border-madder-600 text-madder-600 px-8 py-3 rounded-lg font-semibold hover:bg-madder-600 hover:text-white transition-all duration-300"
            >
              View New Arrivals
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
