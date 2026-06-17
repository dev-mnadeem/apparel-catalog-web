'use client'

import Link from 'next/link'
import { ArrowLeftIcon, TruckIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function ShippingPage() {
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
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4 font-poppins">Shipping Information</h1>
          <p className="text-xl text-gray-600 font-poppins">Fast, reliable shipping to your doorstep</p>
        </div>

        {/* Shipping Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Free Shipping */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
            <div className="flex items-center mb-4">
              <TruckIcon className="h-8 w-8 text-green-500 mr-3" />
              <h3 className="text-xl font-bold text-black">Free Shipping</h3>
            </div>
            <p className="text-gray-600 mb-2">On orders above Rs.3,000</p>
            <p className="text-sm text-gray-500">Standard delivery: 3-5 business days</p>
          </div>

          {/* Express Shipping */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <ClockIcon className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-bold text-black">Express Shipping</h3>
            </div>
                            <p className="text-gray-600 mb-2">Rs.350 additional charge</p>
            <p className="text-sm text-gray-500">Next day delivery: 1-2 business days</p>
          </div>
        </div>

        {/* Shipping Details */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-black mb-6">Shipping Details</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Processing Time</h3>
              <p className="text-gray-600">Orders are typically processed and shipped within 24-48 hours during business days (Monday-Friday).</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Delivery Areas</h3>
              <p className="text-gray-600">We ship to all major cities and towns across Pakistan. Remote areas may take 1-2 additional days.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Tracking</h3>
              <p className="text-gray-600">Once your order ships, you&apos;ll receive a tracking number via email to monitor your delivery.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">International Shipping</h3>
              <p className="text-gray-600">Currently, we only ship within Pakistan. International shipping will be available soon.</p>
            </div>
          </div>
        </div>

        {/* Shipping Costs */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-black mb-6">Shipping Costs</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-black">Order Value</th>
                  <th className="text-left py-3 px-4 font-semibold text-black">Shipping Cost</th>
                  <th className="text-left py-3 px-4 font-semibold text-black">Delivery Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-600">Below Rs.3,000</td>
                  <td className="py-3 px-4 text-gray-600">Rs.250</td>
                  <td className="py-3 px-4 text-gray-600">3-5 business days</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-600">Rs.3,000 and above</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">FREE</td>
                  <td className="py-3 px-4 text-gray-600">3-5 business days</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-600">Express (Any value)</td>
                  <td className="py-3 px-4 text-blue-600 font-semibold">+Rs.350</td>
                  <td className="py-3 px-4 text-gray-600">1-2 business days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Cash on Delivery (CoD) */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-black mb-6">Cash on Delivery (CoD)</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">What is Cash on Delivery?</h3>
              <p className="text-gray-600">Cash on Delivery (CoD) allows you to pay for your order when it arrives at your doorstep. No need to pay upfront - you can inspect your items before making payment.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">CoD Availability</h3>
              <p className="text-gray-600">Cash on Delivery is available for all orders within Pakistan. Simply select CoD as your payment method during checkout.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">CoD Charges</h3>
              <p className="text-gray-600">A small convenience fee of Rs.100 applies to all Cash on Delivery orders to cover additional handling and processing costs.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">How CoD Works</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Place your order and select Cash on Delivery</li>
                <li>Your order is processed and shipped normally</li>
                <li>When the delivery person arrives, inspect your items</li>
                <li>Pay the total amount (including CoD fee) in cash</li>
                <li>Receive your items and a payment receipt</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Important Notes</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Please have exact change ready for the delivery person</li>
                <li>You can refuse delivery if items don't meet your expectations</li>
                <li>CoD orders may take 1-2 additional days for processing</li>
                <li>Not available for international orders</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
          <h3 className="text-lg font-semibold text-black mb-2">Need Help with Shipping?</h3>
          <p className="text-gray-600 mb-4">Our customer service team is here to help with any shipping questions.</p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}
