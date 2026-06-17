'use client'

import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'
import { 
  ShoppingBagIcon, 
  ArrowRightIcon,
  TrashIcon,
  PlusIcon,
  MinusIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function CheckoutPage() {
  const { state, clearCart, getCartTotal, removeFromCart, updateQuantity } = useCart()

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId)
    } else {
      updateQuantity(itemId, newQuantity)
    }
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 pt-20">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBagIcon className="h-10 w-10 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Add some items to your cart before checkout.</p>
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowRightIcon className="h-5 w-5 mr-2 rotate-180" />
              Back to Shopping
            </Link>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Order Summary</p>
                </div>
                <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Contact Info</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Review Your Order</h1>
            <p className="text-lg text-gray-600">Step 1 of 2: Review your items before proceeding to checkout</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary - Left Column */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ShoppingBagIcon className="h-6 w-6 mr-3 text-amber-600" />
                  Order Summary
                </h2>
                
                <div className="space-y-6">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="relative">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg shadow-md"
                        />
                        <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                          {item.quantity}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
                        <p className="text-gray-500 text-sm mb-2">Premium Quality</p>
                        <p className="text-xl font-bold text-amber-600">{item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors ml-2"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Total */}
                <div className="border-t border-gray-200 pt-6 mt-8">
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>{getCartTotal()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className={parseFloat(getCartTotal().replace('Rs.', '').replace(',', '')) >= 3000 ? 'text-green-600' : 'text-gray-600'}>
                        {parseFloat(getCartTotal().replace('Rs.', '').replace(',', '')) >= 3000 ? 'Free' : 'Rs. 200'}
                      </span>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between items-center text-2xl font-bold text-gray-900">
                        <span>Total Amount</span>
                        <span className="text-amber-600">
                          {parseFloat(getCartTotal().replace('Rs.', '').replace(',', '')) >= 3000 
                            ? getCartTotal() 
                            : `Rs. ${parseFloat(getCartTotal().replace('Rs.', '').replace(',', '')) + 200}`
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Free shipping on orders above Rs. 3,000</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/"
                  className="flex-1 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 transition-all duration-200 text-center"
                >
                  Continue Shopping
                </Link>
                <Link
                  href="/checkout/contact"
                  className="flex-1 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center flex items-center justify-center"
                >
                  Proceed to Checkout
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              {/* Order Summary Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 sticky top-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Items ({state.totalItems})</span>
                    <span className="font-medium">{getCartTotal()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className={parseFloat(getCartTotal().replace('Rs.', '').replace(',', '')) >= 3000 ? 'text-green-600' : 'text-gray-600'}>
                      {parseFloat(getCartTotal().replace('Rs.', '').replace(',', '')) >= 3000 ? 'Free' : 'Rs. 200'}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-amber-600">
                        {parseFloat(getCartTotal().replace('Rs.', '').replace(',', '')) >= 3000 
                          ? getCartTotal() 
                          : `Rs. ${parseFloat(getCartTotal().replace('Rs.', '').replace(',', '')) + 200}`
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <ShoppingBagIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Fast Delivery</h3>
                </div>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Same day dispatch</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>3-5 business days delivery</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Free shipping over Rs. 3,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
