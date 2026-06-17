'use client'

import Link from 'next/link'
import { ArrowLeftIcon, HeartIcon, ShoppingBagIcon, StarIcon } from '@heroicons/react/24/outline'
import { getProductImageUrl } from '@/lib/image-mapping'

export default function PocketSquaresPage() {
  // This page redirects to the singular version for consistency
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-black mb-4">Redirecting...</h1>
        <p className="text-gray-600 mb-6">This page redirects to the main pocket squares collection.</p>
        <Link 
          href="/categories/men/pocket-square"
          className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          View Pocket Squares
        </Link>
      </div>
    </div>
  )
}
