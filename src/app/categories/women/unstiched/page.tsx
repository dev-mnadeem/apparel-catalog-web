'use client'

import React from 'react'

export default function UnstichedPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Unstitched Collection</h1>
          <div className="bg-white rounded-lg shadow-lg p-12 max-w-2xl mx-auto">
            <div className="text-6xl mb-6">🧵</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're crafting a beautiful collection of unstitched fabrics and materials. 
              Get ready to create your own unique designs with our premium quality fabrics.
            </p>
            <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-lg p-6">
              <p className="text-sm text-gray-700">
                <strong>What to expect:</strong> High-quality unstitched fabrics, 
                traditional and modern designs, perfect for custom tailoring. 
                Sign up for our newsletter to be notified when we launch!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
