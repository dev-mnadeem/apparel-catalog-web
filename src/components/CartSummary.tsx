'use client'

import { useCart } from '@/contexts/CartContext'
import { ShoppingBagIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function CartSummary() {
  const { state, hasItems, getCartTotal } = useCart()

  if (!hasItems) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 text-center">
        <ShoppingBagIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
        <p className="text-gray-500 mb-4">Add some items to get started</p>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <ShoppingBagIcon className="h-5 w-5 mr-2" />
        Cart Summary
      </h3>
      
      {/* Cart Items */}
      <div className="space-y-3 mb-6">
        {state.items.map((item) => (
          <div key={item.id} className="flex items-center space-x-3">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-12 h-12 object-cover rounded-lg"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 truncate">{item.name}</h4>
              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{item.price}</p>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="border-t pt-4 mb-6">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>{getCartTotal()}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <Link
        href="/checkout"
        className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors flex items-center justify-center"
      >
        📱 Proceed to Checkout
        <ArrowRightIcon className="h-5 w-5 ml-2" />
      </Link>

      {/* WhatsApp Info */}
      <div className="mt-4 p-3 bg-green-50 rounded-lg">
        <p className="text-sm text-green-800 text-center">
          📱 <strong>WhatsApp Order Confirmation</strong><br />
          Get instant order updates on WhatsApp!
        </p>
      </div>
    </div>
  )
}



