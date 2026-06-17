'use client'

import { useState } from 'react'
import { EnvelopeIcon, CheckIcon } from '@heroicons/react/24/outline'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail('')
    }, 1000)
  }

  if (isSubscribed) {
    return (
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <CheckIcon className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You for Subscribing!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            You&apos;re now part of our fashion community. We&apos;ll keep you updated with the latest trends, 
            exclusive offers, and style inspiration.
          </p>
          <button
            onClick={() => setIsSubscribed(false)}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Subscribe another email
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
          <EnvelopeIcon className="h-8 w-8 text-white" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay in the Loop
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about new collections, 
          exclusive sales, and style tips from our fashion experts.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                  Subscribing...
                </div>
              ) : (
                'Subscribe'
              )}
            </button>
          </div>
        </form>

        <p className="text-sm text-blue-200 mt-4">
          By subscribing, you agree to our{' '}
          <a href="/privacy" className="underline hover:text-white">
            Privacy Policy
          </a>
          . Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
